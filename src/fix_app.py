import re

with open('App.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Add ErrorBoundary import
if chr(34)+chr(34)+chr(34) not in content:
    pass

# Wrap each article in ErrorBoundary
article_ids = [chr(39)+'3153'+chr(39), chr(39)+'3198'+chr(39)]

for aid in article_ids:
    pass

with open('App.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print('Done')
