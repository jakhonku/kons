$ErrorActionPreference = 'Stop'

$sources = @(
  @{ level = 'Bakalavriat'; sub = 'bakalavr'; root = 'C:\Users\User\Desktop\BAKALAVRIAT FAN DASTURLARI (PDF)' },
  @{ level = 'Magistratura'; sub = 'magistr'; root = 'C:\Users\User\Desktop\MAGISTRATURA FAN DASTURLARI (PDF)' }
)

$publicBase = 'C:\Users\User\Desktop\kons\public\talim-dasturlari'
$dataFile   = 'C:\Users\User\Desktop\kons\src\data\talimDasturlari.js'

if (Test-Path $publicBase) { Remove-Item $publicBase -Recurse -Force }
New-Item -ItemType Directory -Force -Path $publicBase | Out-Null

function Slug([string]$s) {
  $s = [IO.Path]::GetFileNameWithoutExtension($s).ToLower()
  $s = [regex]::Replace($s, '[^a-z0-9]+', '-')
  $s = $s.Trim('-')
  if ([string]::IsNullOrWhiteSpace($s)) { $s = 'fayl' }
  return $s
}

function CleanName([string]$n) {
  $n = [IO.Path]::GetFileNameWithoutExtension($n).Trim()
  $n = [regex]::Replace($n, '^\d+(\.\d+)*\s*[-._]\s*', '')   # leading "12-", "3.1-", "2_", "1. "
  $n = $n -replace '_', ' '
  $n = [regex]::Replace($n, '\s*\(\d+\)\s*$', '')             # trailing "(2)"
  $n = [regex]::Replace($n, '\.\s*\d+(\.\d+)*\.?\s+maxsus fortepiano\.?\s*$', '', 'IgnoreCase') # fortepiano code suffix
  $n = [regex]::Replace($n, '\p{IsCyrillic}{2,}(\s+\p{IsCyrillic}{2,})*', '') # cyrillic note words (keeps stray single letters)
  $n = [regex]::Replace($n, '\++\s*tayyor', '', 'IgnoreCase')
  $n = $n.TrimEnd('.', ' ')
  $n = [regex]::Replace($n, '\s*\+[\+\-]*\s*t?\s*$', '', 'IgnoreCase') # trailing + ++ +t ++t +-t
  $n = [regex]::Replace($n, '\s*-{2,}\s*$', '')
  $n = [regex]::Replace($n, '\s{2,}', ' ')
  return $n.Trim()
}

function CleanKafedra([string]$n) {
  $n = $n.Trim()
  $n = [regex]::Replace($n, '^\d+\s*-\s*', '')
  $n = [regex]::Replace($n, '\s*\+[\+\-]*\s*t?\s*$', '', 'IgnoreCase')
  $n = [regex]::Replace($n, '\s*-{2,}\s*$', '')
  $lq = [char]0x201C; $rq = [char]0x201D
  $n = $n.Replace([string]$lq, '').Replace([string]$rq, '').Replace('"', '').Replace([string][char]0x27, '')
  $n = [regex]::Replace($n, '\s{2,}', ' ')
  return $n.Trim()
}

function SortKey([string]$name) {
  $m = [regex]::Match($name, '^(\d+)(?:\.(\d+))?')
  $maj = if ($m.Success) { [int]$m.Groups[1].Value } else { 9999 }
  $min = if ($m.Success -and $m.Groups[2].Success) { [int]$m.Groups[2].Value } else { 0 }
  return $maj * 1000 + $min
}

function J([string]$s) { return ($s | ConvertTo-Json -Compress) }

$sb = New-Object System.Text.StringBuilder
[void]$sb.AppendLine("// AVTO-GENERATSIYA - Ta'lim (fan) dasturlari PDF. Qo'lda tahrirlamang.")
[void]$sb.AppendLine("// Manba: BAKALAVRIAT / MAGISTRATURA FAN DASTURLARI (PDF) papkalari.")
[void]$sb.AppendLine("export const TALIM_DASTURLARI = [")

$totalPdf = 0

foreach ($src in $sources) {
  $levelDestRoot = Join-Path $publicBase $src.sub
  New-Item -ItemType Directory -Force -Path $levelDestRoot | Out-Null

  [void]$sb.AppendLine("  {")
  [void]$sb.AppendLine("    level: $(J $src.level),")
  [void]$sb.AppendLine("    sub: $(J $src.sub),")

  # --- Level-wide extra files (sitting directly in the root, e.g. xlsx) ---
  $rootFiles = Get-ChildItem -LiteralPath $src.root -File
  [void]$sb.AppendLine("    extras: [")
  foreach ($f in $rootFiles) {
    $slug = Slug $f.Name
    $ext = $f.Extension
    $destName = "$slug$ext"
    Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $levelDestRoot $destName) -Force
    $name = CleanName $f.Name
    $url = "/talim-dasturlari/$($src.sub)/$destName"
    [void]$sb.AppendLine("      { name: $(J $name), file: $(J $url), ext: $(J ($ext.TrimStart('.').ToLower())) },")
  }
  [void]$sb.AppendLine("    ],")

  # --- Kafedra (department) folders ---
  $kafedraDirs = Get-ChildItem -LiteralPath $src.root -Directory | Sort-Object { SortKey $_.Name }

  [void]$sb.AppendLine("    kafedralar: [")
  foreach ($kdir in $kafedraDirs) {
    $kSlug = Slug $kdir.Name
    $kDest = Join-Path $levelDestRoot $kSlug
    New-Item -ItemType Directory -Force -Path $kDest | Out-Null
    $kName = CleanKafedra $kdir.Name

    $files = Get-ChildItem -LiteralPath $kdir.FullName -File | Where-Object { $_.Extension -ieq '.pdf' } | Sort-Object { SortKey $_.Name }

    [void]$sb.AppendLine("      {")
    [void]$sb.AppendLine("        name: $(J $kName),")
    [void]$sb.AppendLine("        items: [")

    $used = @{}
    foreach ($f in $files) {
      $slug = Slug $f.Name
      if ($used.ContainsKey($slug)) { $used[$slug]++; $slug = "$slug-$($used[$slug])" } else { $used[$slug] = 1 }
      $destName = "$slug.pdf"
      Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $kDest $destName) -Force
      $name = CleanName $f.Name
      $url = "/talim-dasturlari/$($src.sub)/$kSlug/$destName"
      [void]$sb.AppendLine("          { name: $(J $name), pdf: $(J $url) },")
      $totalPdf++
    }

    [void]$sb.AppendLine("        ],")
    [void]$sb.AppendLine("      },")
  }
  [void]$sb.AppendLine("    ],")
  [void]$sb.AppendLine("  },")
}

[void]$sb.AppendLine("];")

[System.IO.File]::WriteAllText($dataFile, $sb.ToString(), (New-Object System.Text.UTF8Encoding($false)))

Write-Host "Wrote $dataFile"
Write-Host "Total PDFs copied: $totalPdf"
