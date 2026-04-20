/**
 * Simple frontmatter parser that doesn't depend on gray-matter
 * This is a fallback for when gray-matter fails
 */

export function parseSimpleFrontmatter(raw: string): { data: Record<string, unknown>; body: string } {
  const lines = raw.split('\n');
  
  if (lines[0]?.trim() !== '---') {
    return { data: {}, body: raw };
  }
  
  const frontmatterLines: string[] = [];
  let bodyStart = -1;
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i]?.trim() === '---') {
      bodyStart = i + 1;
      break;
    }
    frontmatterLines.push(lines[i]);
  }
  
  const data: Record<string, unknown> = {};
  
  for (const line of frontmatterLines) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      
      // Try to parse as number
      if (/^\d+$/.test(value)) {
        data[key] = parseInt(value, 10);
      } else if (/^\d+\.\d+$/.test(value)) {
        data[key] = parseFloat(value);
      } else if (value === 'true') {
        data[key] = true;
      } else if (value === 'false') {
        data[key] = false;
      } else {
        data[key] = value;
      }
    }
  }
  
  const body = bodyStart >= 0 ? lines.slice(bodyStart).join('\n') : raw;
  
  return { data, body };
}
