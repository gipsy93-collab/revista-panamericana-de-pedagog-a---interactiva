import fs from 'fs';
import path from 'path';

/**
 * Script seguro para normalizar archivos a UTF-8 sin BOM.
 * Node.js es mucho más confiable que PowerShell para manejar codificaciones de texto en Windows.
 */

function fixEncoding(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // Evitar carpetas pesadas
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        fixEncoding(fullPath);
      }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        // Escribir siempre como UTF-8 puro
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Codificación normalizada:', fullPath);
      } catch (err) {
        console.error('Error procesando:', fullPath, err.message);
      }
    }
  }
}

console.log('Iniciando normalización de archivos...');
fixEncoding('./src');
console.log('\n¡Éxito! Todos los archivos fuente son ahora UTF-8 puro.');
