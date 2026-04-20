import sys
sys.path.insert(0, 'node_modules/gray-matter')

# Read a file and test parsing
with open('src/content/articles/3153.md', 'r', encoding='utf-8') as f:
    content = f.read()

print('First 100 chars:', repr(content[:100]))
print('Has ---:', content.startswith('---'))

# Try simple frontmatter parsing
lines = content.split('\n')
if lines[0] == '---':
    frontmatter_lines = []
    for line in lines[1:]:
        if line == '---':
            break
        frontmatter_lines.append(line)
    
    print('Frontmatter lines:', frontmatter_lines[:5])
    
    # Try parsing with yaml if available
    try:
        import yaml
        data = yaml.safe_load('\n'.join(frontmatter_lines))
        print('YAML parsed:', data)
    except ImportError:
        print('PyYAML not available')
    except Exception as e:
        print('YAML error:', e)
