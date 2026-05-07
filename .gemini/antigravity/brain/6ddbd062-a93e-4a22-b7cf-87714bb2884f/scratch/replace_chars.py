import os
import re

def replace_uzbek_chars(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # O' -> Oʻ
    content = content.replace("O'", "Oʻ")
    # G' -> Gʻ
    content = content.replace("G'", "Gʻ")
    # o' -> oʻ
    content = content.replace("o'", "oʻ")
    # g' -> gʻ
    content = content.replace("g'", "gʻ")
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

base_dir = r"c:\Users\User\Desktop\kons\src"
for root, dirs, files in os.walk(base_dir):
    for file in files:
        if file.endswith(('.jsx', '.js')):
            replace_uzbek_chars(os.path.join(root, file))

# Also index.html
replace_uzbek_chars(r"c:\Users\User\Desktop\kons\index.html")
