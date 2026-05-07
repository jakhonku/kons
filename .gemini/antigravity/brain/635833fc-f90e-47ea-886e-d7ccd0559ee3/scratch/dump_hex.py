
with open(r'c:\Users\User\Desktop\kons\src\data\navigation.js', 'rb') as f:
    content = f.read()
    lines = content.splitlines()
    for i, line in enumerate(lines):
        if b'Ta' in line and b'haqida' in line:
            print(f"Line {i+1}: {line}")
            print(f"Hex: {line.hex()}")
