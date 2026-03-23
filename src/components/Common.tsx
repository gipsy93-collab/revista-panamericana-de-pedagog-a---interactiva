import React from 'react';

export const WavyDivider = ({ color = "bg-zine-red", vertical = false }: { color?: string, vertical?: boolean }) => (
  <div className={`${vertical ? 'h-full w-12' : 'w-full h-12'} ${color} wavy-divider ${vertical ? 'rotate-90' : ''}`} />
);

export const categorizeByKeywords = (text: string): string => {
  const lowerText = text.toLowerCase();
  
  if (lowerText.includes('convocatoria') || lowerText.includes('call for papers') || lowerText.includes('submission')) {
    return 'Convocatorias';
  }
  if (lowerText.includes('convenio') || lowerText.includes('acuerdo') || lowerText.includes('partnership')) {
    return 'Institucional';
  }
  if (lowerText.includes('premio') || lowerText.includes('award') || lowerText.includes('reconocimiento')) {
    return 'Premios';
  }
  if (lowerText.includes('tecnología') || lowerText.includes('digital') || lowerText.includes('plataforma') || lowerText.includes('ia') || lowerText.includes('ia.')) {
    return 'Tecnología';
  }
  if (lowerText.includes('webinar') || lowerText.includes('evento') || lowerText.includes('conferencia') || lowerText.includes('taller')) {
    return 'Eventos';
  }
  if (lowerText.includes('publicación') || lowerText.includes('número') || lowerText.includes('edición') || lowerText.includes('volume')) {
    return 'Publicaciones';
  }
  
  return 'General';
};

export async function fetchRSSFeed(url: string) {
  try {
    const response = await fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`);
    const data = await response.json();
    
    if (data.status === 'ok' && data.items) {
      return data.items.map((item: any, index: number) => ({
        id: `rss-${index}-${Date.now()}`,
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        description: item.description.replace(/<[^>]*>/g, '').substring(0, 200) + '...',
        category: categorizeByKeywords(item.title + ' ' + item.description)
      }));
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return [];
  }
}
