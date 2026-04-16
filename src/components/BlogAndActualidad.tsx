import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Rss, Filter, Search, Calendar, Tag, ExternalLink, RefreshCw } from 'lucide-react';
import { RSSItem } from '../types';
import { fetchRSSFeed } from './Common';
import gsap from 'gsap';

const MOCK_RSS: RSSItem[] = [
  { id: '1', title: 'Convocatoria Vol. 2026: Educación y Tecnología', link: '#', pubDate: '2026-03-01', description: 'La Revista Panamericana de Pedagogía invita a investigadores a someter sus trabajos sobre la integración de IA en el aula.', category: 'Convocatorias' },
  { id: '2', title: 'Nuevo convenio con la Red Innova', link: '#', pubDate: '2026-02-25', description: 'Fortaleciendo los lazos académicos internacionales para la difusión del conocimiento pedagógico.', category: 'Institucional' },
  { id: '3', title: 'Premio a la excelencia investigativa 2025', link: '#', pubDate: '2026-02-15', description: 'Reconocimiento a los autores más citados de la edición anterior.', category: 'Premios' },
  { id: '4', title: 'Lanzamiento: Plataforma interactiva v3.0', link: '#', pubDate: '2026-01-10', description: 'Explora nuestros artículos a través de narrativas transmedia y visualización de datos.', category: 'Tecnología' }
];

const CATEGORY_FALLBACK: Record<string, string> = {
  'Actualidad': 'from-pop-blue to-pop-teal',
  'Convocatorias': 'from-pop-yellow to-orange-500',
  'Investigación': 'from-zine-red to-pop-pink',
  'Internacional': 'from-pop-teal to-cyan-600',
  'Institucional': 'from-slate-700 to-slate-900',
  'Premios': 'from-pop-yellow to-pop-pink',
  'Tecnología': 'from-pop-blue to-violet-700',
  'Educación': 'from-emerald-600 to-pop-teal',
  'Sustentabilidad': 'from-green-700 to-emerald-500',
  'Eventos': 'from-pop-pink to-rose-600',
  'Publicaciones': 'from-amber-700 to-pop-yellow',
};

export default function BlogAndActualidad() {
  const [items, setItems] = useState<RSSItem[]>(MOCK_RSS);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [search, setSearch] = useState('');
  const [useRealFeed, setUseRealFeed] = useState(true);
  const [visibleCount, setVisibleCount] = useState(4);
  const gridRef = useRef<HTMLDivElement>(null);

  // Define feed URLs
  const FEEDS = [
    'https://revistas.up.edu.mx/index.php/rpp/gateway/plugin/WebFeedGatewayPlugin/rss2', // RPP Journal (External)
    'https://www.up.edu.mx/noticias-up/feed/', // UP News (Recently requested)
    'https://www.up.edu.mx/feed/', // UP Institutional (External)
    '/feed/articles.xml', // RPP Local Articles
    '/feed/convocatorias.xml', // RPP Local Calls
    '/feed/toc.xml' // RPP Local Numbers
  ];

  // Dynamic categories based on loaded items
  const categories = ['Todas', ...new Set(items.map(i => i.category))].sort();

  const filteredItems = items.filter(item => {
    const matchesCat = activeCategory === 'Todas' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase()) || 
                          item.description.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const loadFeed = async () => {
    if (!useRealFeed) {
      setItems(MOCK_RSS);
      return;
    }
    setLoading(true);
    
    try {
      const feedPromises = FEEDS.map(async (url) => {
        const absoluteUrl = url.startsWith('http') ? url : `${window.location.origin}${url}`;
        try {
          return await fetchRSSFeed(absoluteUrl);
        } catch (e) {
          console.error(`Feed failed: ${absoluteUrl}`, e);
          return [];
        }
      });
      
      const results = await Promise.allSettled(feedPromises);
      const allItems = results.flatMap(result => 
        result.status === 'fulfilled' ? result.value : []
      );
      
      const uniqueItems = Array.from(new Map(allItems.map(item => [item.link, item])).values());
      
      const sortedItems = uniqueItems.sort((a, b) => 
        new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
      );

      if (sortedItems.length > 0) {
        setItems(sortedItems);
      } else {
        setItems(MOCK_RSS);
      }
    } catch (error) {
      console.error("Critical error loading feeds:", error);
      setItems(MOCK_RSS);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFeed();
  }, [useRealFeed]);

  // GSAP Entrance Animation for cards
  useEffect(() => {
    if (!loading && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { 
          y: 50, 
          opacity: 0,
          scale: 0.95
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          stagger: 0.1, 
          duration: 0.8, 
          ease: "back.out(1.7)",
          overwrite: true
        }
      );
    }
  }, [items, visibleCount, activeCategory, search, loading]);

  return (
    <section className="bg-pop-blue py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-[#fccb06] selection:text-black">
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Header & Controls */}
          <div className="w-full lg:w-1/3 space-y-12 lg:sticky lg:top-32">
             <motion.div 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="flex items-center gap-4 mb-8"
             >
                <div className="relative">
                  <div className="w-12 h-12 bg-white flex items-center justify-center text-zine-black relative z-10">
                    <Newspaper size={24} />
                  </div>
                  <div className="absolute inset-0 bg-zine-red translate-x-1 translate-y-1" />
                </div>
               <span className="font-accent font-black tracking-widest text-white uppercase text-sm">Actualidad // News_Stream</span>
             </motion.div>

             <h2 className="text-7xl md:text-9xl font-display uppercase leading-[0.85] text-white">
               NOTICIAS<br /><span className="text-zine-red drop-shadow-[4px_4px_0_#fff]">RPP</span>
             </h2>

             {/* Controls Box */}
             <div className="space-y-8 bg-black/40 p-8 border-4 border-white/10 rounded-3xl backdrop-blur-xl shadow-[20px_20px_0_rgba(0,0,0,0.3)]">
                <div className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                   <input 
                     type="text" 
                     placeholder="Buscar en el stream..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     className="w-full bg-zine-black border-4 border-white/5 rounded-2xl py-5 pl-12 pr-4 text-white font-mono text-sm focus:border-zine-red outline-none transition-all focus:shadow-[0_0_20px_rgba(179,77,77,0.3)]"
                   />
                </div>

                <div className="space-y-4">
                   <p className="font-mono text-[10px] text-white/40 uppercase tracking-[0.3em] flex items-center gap-2">
                     <Filter size={10} /> Canal_filter
                   </p>
                   <div className="flex flex-wrap gap-3">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => {
                            setActiveCategory(cat);
                            setVisibleCount(4); // Reset pagination on filter
                          }}
                          className={`px-5 py-2.5 rounded-xl font-mono text-[10px] uppercase tracking-widest border-2 transition-all ${
                            activeCategory === cat 
                              ? 'bg-white text-zine-black border-white shadow-[4px_4px_0_#b34d4d]' 
                              : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                          }`}
                        >
                          {cat}
                        </button>
                      ))}
                   </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                   <div className="flex items-center gap-4">
                      <div 
                        onClick={() => setUseRealFeed(!useRealFeed)}
                        className={`w-14 h-7 rounded-full relative cursor-pointer transition-all p-1 ${useRealFeed ? 'bg-pop-teal' : 'bg-white/10'}`}
                      >
                         <motion.div 
                           layout
                           className="w-5 h-5 bg-white rounded-full shadow-lg"
                           animate={{ x: useRealFeed ? 28 : 0 }}
                         />
                      </div>
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        {useRealFeed ? 'LIVE_STREAMING' : 'OFFLINE_MODE'}
                      </span>
                   </div>
                   <button 
                    onClick={loadFeed} 
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                   >
                      <RefreshCw size={18} className={loading ? 'animate-spin text-pop-teal' : ''} />
                   </button>
                </div>
             </div>
          </div>

          {/* Right Column: Feed Grid */}
          <div className="w-full lg:w-2/3">
             <div 
              ref={gridRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 relative"
             >
                {filteredItems.slice(0, visibleCount).map((item, i) => {
                  const fallbackGradient = CATEGORY_FALLBACK[item.category] || CATEGORY_FALLBACK['Actualidad'];
                  return (
                    <div
                      key={item.id}
                      className="group relative bg-zinc-900/50 border-4 border-white/5 hover:border-zine-red transition-all cursor-pointer flex flex-col h-full overflow-hidden rounded-3xl"
                    >
                        {/* Thumbnail */}
                        <div className="relative h-56 overflow-hidden bg-zine-black">
                          {/* Fallback gradient + icon */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient} flex flex-col items-center justify-center`}>
                            <Newspaper size={48} className="text-white/40 mb-2" />
                            <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">{item.category}</span>
                          </div>
                          
                          {item.thumbnail && (
                            <img 
                              src={item.thumbnail} 
                              alt={item.title}
                              onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out z-10"
                            />
                          )}
                          
                          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60 z-20 pointer-events-none" />
                          
                          <div className="absolute top-6 left-6 z-20">
                              <div className="px-4 py-1.5 bg-zine-red text-white font-accent font-black text-[10px] uppercase tracking-[0.2em] shadow-[4px_4px_0_#000]">
                                {item.category}
                              </div>
                          </div>
                        </div>

                        <div className="p-8 flex flex-col flex-grow relative">
                          <div className="flex items-center gap-2 font-mono text-[10px] text-white/30 uppercase tracking-widest mb-6">
                              <Calendar size={12} className="text-pop-teal" /> {new Date(item.pubDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                          </div>

                          <h3 className="text-2xl font-display text-white uppercase leading-[1.1] mb-5 group-hover:text-pop-teal transition-colors line-clamp-3">
                            {item.title}
                          </h3>
                          
                          <p className="text-white/50 text-base font-light leading-relaxed mb-8 line-clamp-3">
                            {item.description}
                          </p>

                          <div className="mt-auto pt-6 border-t border-white/10 flex items-center justify-between">
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex items-center gap-3 text-[11px] font-black text-white hover:text-pop-teal transition-all uppercase tracking-widest"
                              >
                                LEER MÁS <ExternalLink size={14} />
                              </a>
                              <Rss size={14} className="text-white/10" />
                          </div>
                        </div>
                        
                        {/* Decorative sticker on hover */}
                        <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-pop-yellow rounded-full flex items-center justify-center translate-x-20 translate-y-20 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 shadow-xl">
                           <Tag size={24} className="text-zine-black" />
                        </div>
                    </div>
                  );
                })}
             </div>

             {/* Pagination */}
             {filteredItems.length > visibleCount && (
                <div className="mt-20 flex flex-col items-center gap-6">
                  <div className="w-full h-[1px] bg-white/10 relative">
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 bg-pop-blue font-mono text-[9px] text-white/20 uppercase tracking-[1em]">
                       End_of_View
                     </div>
                  </div>
                  <button 
                    onClick={() => setVisibleCount(prev => prev + 4)}
                    className="group relative px-12 py-5 bg-white text-zine-black border-4 border-black hover:bg-pop-teal hover:text-white transition-all overflow-hidden rounded-2xl"
                  >
                    <span className="relative z-10 font-display text-2xl uppercase tracking-tighter">Explorar_más_noticias +</span>
                    <div className="absolute inset-0 bg-zine-red translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </button>
                </div>
             )}

             {filteredItems.length === 0 && !loading && (
               <div className="py-40 text-center">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-dashed border-white/20">
                    <Rss size={40} className="text-white/20" />
                  </div>
                  <p className="font-display text-4xl text-white/20 uppercase tracking-widest leading-none mb-4">No se encontraron<br />resultados</p>
                  <button onClick={() => {setSearch(''); setActiveCategory('Todas');}} className="font-mono text-[10px] text-pop-teal border-b border-pop-teal hover:text-white hover:border-white transition-all uppercase pt-4">Limpiar filtros</button>
               </div>
             )}

             {loading && filteredItems.length === 0 && (
                <div className="py-40 flex flex-col items-center justify-center gap-6">
                   <div className="w-16 h-16 border-4 border-white/10 border-t-pop-teal rounded-full animate-spin" />
                   <p className="font-mono text-[10px] text-white/30 uppercase tracking-[0.5em]">Synchronizing_Data...</p>
                </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
}
