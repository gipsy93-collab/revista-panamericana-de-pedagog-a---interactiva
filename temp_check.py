with open('src/components/ArticulosInteractivos.tsx.BACKUP', 'r', encoding='utf-8') as f:
    content = f.read()
count = content.count("id: '")
print('Articles in backup:', count)
