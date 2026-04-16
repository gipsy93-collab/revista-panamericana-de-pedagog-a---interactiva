import React from 'react';

export const WavyDivider = ({ color = "bg-zine-red", vertical = false }: { color?: string, vertical?: boolean }) => (
  <div className={`${vertical ? 'h-full w-12' : 'w-full h-12'} ${color} wavy-divider ${vertical ? 'rotate-90' : ''}`} />
);

export const categorizeByKeywords = (text: string): string => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('convocatoria') || lowerText.includes('call for papers') || lowerText.includes('submission')) {
    return 'Convocatorias';
  }
  if (lowerText.includes('investigación') || lowerText.includes('research') || lowerText.includes('ciencia') || lowerText.includes('cientific')) {
    return 'Investigación';
  }
  if (lowerText.includes('internacional') || lowerText.includes('global') || lowerText.includes('mundial') || lowerText.includes('notre dame') || lowerText.includes('erasmus')) {
    return 'Internacional';
  }
  if (lowerText.includes('convenio') || lowerText.includes('acuerdo') || lowerText.includes('partnership') || lowerText.includes('alianza') || lowerText.includes('institucional')) {
    return 'Institucional';
  }
  if (lowerText.includes('premio') || lowerText.includes('award') || lowerText.includes('reconocimiento') || lowerText.includes('destacado')) {
    return 'Premios';
  }
  if (lowerText.includes('tecnología') || lowerText.includes('digital') || lowerText.includes('plataforma') || lowerText.includes('ia') || lowerText.includes('robot') || lowerText.includes('virtual')) {
    return 'Tecnología';
  }
  if (lowerText.includes('pedagogía') || lowerText.includes('educación') || lowerText.includes('aula') || lowerText.includes('aprendizaje') || lowerText.includes('enseñanza') || lowerText.includes('docente')) {
    return 'Educación';
  }
  if (lowerText.includes('sustentabilidad') || lowerText.includes('energía') || lowerText.includes('renovable') || lowerText.includes('sostenible') || lowerText.includes('circular') || lowerText.includes('ambiente')) {
    return 'Sustentabilidad';
  }
  if (lowerText.includes('webinar') || lowerText.includes('evento') || lowerText.includes('conferencia') || lowerText.includes('taller') || lowerText.includes('encuentro') || lowerText.includes('charla') || lowerText.includes('foro')) {
    return 'Eventos';
  }
  if (lowerText.includes('publicación') || lowerText.includes('número') || lowerText.includes('edición') || lowerText.includes('volume') || lowerText.includes('revista') || lowerText.includes('artículo') || lowerText.includes('journal')) {
    return 'Publicaciones';
  }
  
  return 'Actualidad';
};

function extractFirstImage(html?: string): string | null {
  if (!html) return null;
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

export async function fetchRSSFeed(url: string) {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
    const data = await response.json();
    
    if (data.status === 'ok' && data.items) {
      return data.items.map((item: any, index: number) => {
        const rawThumbnail = item.thumbnail || item.enclosure?.link || null;
        // rss2json sometimes returns empty string for thumbnail
        const thumbnail = rawThumbnail && rawThumbnail.trim() !== '' ? rawThumbnail : null;
        
        // Try to extract first image from content if no thumbnail
        const contentHtml = item['content:encoded'] || item.content || item.description || '';
        const extractedImage = !thumbnail ? extractFirstImage(contentHtml) : null;
        
        const cleanDescription = item.description.replace(/<[^>]*>/g, '').substring(0, 160) + '...';
        
        return {
          id: `rss-${index}-${Date.now()}`,
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          thumbnail: thumbnail || extractedImage || null,
          description: cleanDescription,
          category: categorizeByKeywords(item.title + ' ' + item.description)
        };
      });
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}
