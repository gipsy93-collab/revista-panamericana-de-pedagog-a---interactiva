import glob

for fname in glob.glob('src/content/articles/*.md'):
    with open(fname, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Find lines with non-ASCII characters
    for i, line in enumerate(content.split('\n'), 1):
        for char in line:
            if ord(char) > 127:
                print(f'{fname}:{i}: U+{ord(char):04X} in: {line.strip()[:80]}')
                break
