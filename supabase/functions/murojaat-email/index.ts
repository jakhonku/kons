// @ts-nocheck
// ^ Bu fayl Deno (Supabase Edge) muhitida ishlaydi. VS Code'ning Node/TS
//   tahlilchisi 'Deno' va 'https://' import'ni tanimaydi — shuning uchun
//   editor tekshiruvi o'chirilgan. Haqiqiy tekshiruv Supabase deploy (deno)
//   paytida amalga oshadi va u muvaffaqiyatli o'tadi.
// ─────────────────────────────────────────────────────────────
// murojaat-email — Supabase Edge Function (Deno)
//
// messages jadvalidagi o'zgarishlarga Database Webhook orqali chaqiriladi:
//   • INSERT  → fuqaroga tasdiq xati (murojaat raqami bilan)
//   • UPDATE  → reply_text qo'shilganda fuqaroga admin javobi
//
// Email Gmail SMTP orqali jo'natiladi (denomailer).
//
// KERAKLI MAXFIY SOZLAMALAR (Dashboard → Edge Functions → Secrets):
//   SMTP_HOST           — smtp.gmail.com
//   SMTP_PORT           — 465
//   SMTP_USER           — jakhongirbakhtiyarov0130@gmail.com
//   SMTP_PASS           — Gmail "App Password" (16 belgili, oddiy parol EMAS)
//   MUROJAAT_FROM_EMAIL — "O'zbekiston Davlat Konservatoriyasi <jakhongirbakhtiyarov0130@gmail.com>"
//   WEBHOOK_SECRET      — webhook'ni himoyalovchi maxfiy kalit
//   REPLY_TO_EMAIL      — (ixtiyoriy) javob manzili
// ─────────────────────────────────────────────────────────────

import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

interface MessageRow {
  id: number;
  full_name: string | null;
  email: string | null;
  type: string | null;
  subject: string | null;
  message: string | null;
  status: string | null;
  reply_text: string | null;
  created_at: string | null;
}

interface WebhookPayload {
  type: "INSERT" | "UPDATE" | "DELETE";
  table: string;
  schema: string;
  record: MessageRow | null;
  old_record: MessageRow | null;
}

const SMTP_HOST = Deno.env.get("SMTP_HOST") ?? "smtp.gmail.com";
const SMTP_PORT = Number(Deno.env.get("SMTP_PORT") ?? "465");
const SMTP_USER = Deno.env.get("SMTP_USER") ?? "";
const SMTP_PASS = Deno.env.get("SMTP_PASS") ?? "";
const FROM_EMAIL = Deno.env.get("MUROJAAT_FROM_EMAIL") ??
  `O'zbekiston Davlat Konservatoriyasi <${SMTP_USER}>`;
const REPLY_TO = Deno.env.get("REPLY_TO_EMAIL") ?? "";
const WEBHOOK_SECRET = Deno.env.get("WEBHOOK_SECRET") ?? "";

function reference(id: number): string {
  return "OK-" + String(id).padStart(6, "0");
}

// Oddiy HTML-escape (foydalanuvchi/admin matnini xavfsiz joylash uchun)
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function layout(title: string, bodyHtml: string): string {
  return `<!doctype html><html lang="uz"><body style="margin:0;background:#f4f2ec;font-family:Arial,Helvetica,sans-serif;color:#1a1a38;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:#0c0c1e;color:#fff;padding:24px 28px;border-radius:8px 8px 0 0;">
      <div style="font-size:13px;letter-spacing:2px;color:#c9a84c;text-transform:uppercase;">O'zbekiston Davlat Konservatoriyasi</div>
      <div style="font-size:18px;margin-top:6px;">${esc(title)}</div>
    </div>
    <div style="background:#fff;padding:28px;border:1px solid #e6e1d6;border-top:none;border-radius:0 0 8px 8px;line-height:1.7;font-size:15px;">
      ${bodyHtml}
    </div>
    <div style="text-align:center;color:#999;font-size:12px;margin-top:18px;">
      Bu avtomatik xabar — iltimos, javob yozmang.<br/>conservatory.uz
    </div>
  </div></body></html>`;
}

async function sendEmail(to: string, subject: string, html: string): Promise<void> {
  if (!SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP_USER yoki SMTP_PASS o'rnatilmagan — Edge Function Secrets'ni tekshiring");
  }
  const client = new SMTPClient({
    connection: {
      hostname: SMTP_HOST,
      port: SMTP_PORT,
      tls: true,
      auth: { username: SMTP_USER, password: SMTP_PASS },
    },
    // Supabase Edge muhitida Worker-pool ishlamaydi — uni o'chiramiz
    pool: false,
  });
  try {
    await client.send({
      from: FROM_EMAIL,
      to,
      replyTo: REPLY_TO || undefined,
      subject,
      html,
      // "auto" → denomailer HTML'dan oddiy-matnli zaxira nusxani o'zi yaratadi
      content: "auto",
    });
  } finally {
    // close xatosi haqiqiy SMTP xatosini yashirmasligi uchun himoyalaymiz
    try {
      await client.close();
    } catch (_) {
      // e'tiborsiz qoldiramiz
    }
  }
}

Deno.serve(async (req) => {
  // 1) Webhook'ni himoyalash
  if (WEBHOOK_SECRET) {
    const provided = req.headers.get("x-webhook-secret");
    if (provided !== WEBHOOK_SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }
  }

  let body: WebhookPayload;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  const rec = body.record;
  if (!rec || !rec.email) {
    return new Response(JSON.stringify({ skipped: "no email" }), { status: 200 });
  }

  const ref = reference(rec.id);
  const name = esc(rec.full_name ?? "Hurmatli fuqaro");

  try {
    if (body.type === "INSERT") {
      // ── Tasdiq xati ──
      const html = layout("Murojaatingiz qabul qilindi", `
        <p>Assalomu alaykum, <strong>${name}</strong>!</p>
        <p>Murojaatingiz muvaffaqiyatli qabul qilindi va ko'rib chiqish uchun yo'naltirildi.</p>
        <p style="background:#f8f5ee;border-left:3px solid #c9a84c;padding:12px 16px;margin:18px 0;">
          Murojaat raqami: <strong style="color:#0c0c1e;">${ref}</strong><br/>
          Mavzu: ${esc(rec.subject ?? "—")}
        </p>
        <p>Murojaatingiz qonunchilikda belgilangan muddatda (14 ish kuni) ko'rib chiqiladi va
        ushbu elektron pochta manzilingizga rasmiy javob yuboriladi.</p>
        <p>Murojaatingiz holatini bilish uchun yuqoridagi raqamni saqlab qo'ying.</p>
      `);
      await sendEmail(rec.email, `Murojaatingiz qabul qilindi — ${ref}`, html);
      return new Response(JSON.stringify({ sent: true, kind: "confirmation", ref }), { status: 200 });
    }

    if (body.type === "UPDATE") {
      const oldReply = body.old_record?.reply_text ?? null;
      const newReply = rec.reply_text ?? null;
      // Faqat reply_text yangi qo'shilgan/o'zgargan bo'lsa email jo'natamiz
      if (newReply && newReply.trim() && newReply !== oldReply) {
        const html = layout("Murojaatingizga javob", `
          <p>Assalomu alaykum, <strong>${name}</strong>!</p>
          <p><strong>${ref}</strong> raqamli murojaatingiz bo'yicha rasmiy javob:</p>
          <div style="background:#f8f5ee;border:1px solid #e6e1d6;padding:16px;margin:18px 0;white-space:pre-wrap;">${esc(newReply)}</div>
          <p style="color:#666;font-size:13px;">Asl murojaat mavzusi: ${esc(rec.subject ?? "—")}</p>
        `);
        await sendEmail(rec.email, `Murojaatingizga javob — ${ref}`, html);
        return new Response(JSON.stringify({ sent: true, kind: "reply", ref }), { status: 200 });
      }
      return new Response(JSON.stringify({ skipped: "no new reply" }), { status: 200 });
    }

    return new Response(JSON.stringify({ skipped: body.type }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ error: String(e) }), { status: 500 });
  }
});
