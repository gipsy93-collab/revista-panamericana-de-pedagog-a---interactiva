import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Newspaper, Rss, Filter, Search, Calendar, Tag, ExternalLink, RefreshCw } from 'lucide-react';
import { RSSItem } from '../types';
import { fetchRSSFeed } from './Common';

const MOCK_RSS: RSSItem[] = [
  { id: '1', title: 'Convocatoria Vol. 2026: Educación y Tecnología', link: '#', pubDate: '2026-03-01', description: 'La Revista Panamericana de Pedagogía invita a investigadores a someter sus trabajos sobre la integración de IA en el aula.', category: 'Convocatorias' },
  { id: '2', title: 'Nuevo convenio con la Red Innova', link: '#', pubDate: '2026-02-25', description: 'Fortaleciendo los lazos académicos internacionales para la difusión del conocimiento pedagógico.', category: 'Institucional' },
  { id: '3', title: 'Premio a la excelencia investigativa 2025', link: '#', pubDate: '2026-02-15', description: 'Reconocimiento a los autores más citados de la edición anterior.', category: 'Premios' },
  { id: '4', title: 'Lanzamiento: Plataforma interactiva v3.0', link: '#', pubDate: '2026-01-10', description: 'Explora nuestros artículos a través de narrativas transmedia y visualización de datos.', category: 'Tecnología' }
];

export default function BlogAndActualidad() {
  const [items, setItems] = useState<RSSItem[]>(MOCK_RSS);
  const [loading, setLoading] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todas');
  const [search, setSearch] = useState('');
  const [useRealFeed, setUseRealFeed] = useState(false);

  const categories = ['Todas', ...new Set(MOCK_RSS.map(i => i.category))];

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
    // Use a default feed if none provided
    const data = await fetchRSSFeed('https://revistas.up.edu.mx/index.php/rpp/gateway/plugin/WebFeedGatewayPlugin/rss2');
    if (data.length > 0) setItems(data);
    setLoading(false);
  };

  useEffect(() => {
    loadFeed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useRealFeed]);

  return (
    <section className="bg-[#1a1a1a] py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-[#fccb06] selection:text-black">
      {/* Background Graphic elements inspired by NEM pop-art */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5" />
      
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-24 items-start">
          
          {/* Header & Controls */}
          <div className="w-full lg:w-1/3 space-y-12 lg:sticky lg:top-32">
             <motion.div 
               initial={{ x: -100, opacity: 0 }}
               whileInView={{ x: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="flex items-center gap-4 mb-8"
             >
               <div className="w-12 h-12 bg-white flex items-center justify-center text-zine-black">
                 <Newspaper size={24} />
               </div>
               <span className="font-accent font-black tracking-widest text-white uppercase text-sm">Actualidad // News_Stream</span>
             </motion.div>

             <h2 className="text-8xl md:text-[10rem] font-display uppercase leading-[0.85] text-white">
               NOTICIAS<br /><span className="text-white/20">RPP</span>
             </h2>

             {/* Functional Controls - Urban Dark Style */}
             <div className="space-y-8 bg-zinc-900/50 p-8 border border-white/5 rounded-2xl backdrop-blur-md">
                <div className="relative">
                   <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                   <input 
                     type="text" 
                     placeholder="Buscar en el stream..."
                     value={search}
                     onChange={(e) => setSearch(e.target.value)}
                     className="w-full bg-zine-black border-2 border-white/10 rounded-xl py-4 pl-12 pr-4 text-white font-mono text-sm focus:border-zine-red outline-none transition-colors"
                   />
                </div>

                <div className="space-y-4">
                   <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest flex items-center gap-2">
                     <Filter size={10} /> Categorías_filter
                   </p>
                   <div className="flex flex-wrap gap-2">
                      {categories.map(cat => (
                        <button
                          key={cat}
                          onClick={() => setActiveCategory(cat)}
                          className={`px-4 py-2 rounded-full font-mono text-[10px] uppercase tracking-widest border transition-all ${
                            activeCategory === cat 
                              ? 'bg-white text-zine-black border-white' 
                              : 'border-white/10 text-white/40 hover:border-white/40'
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
                        className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors ${useRealFeed ? 'bg-[#5bc2a8]' : 'bg-white/10'}`}
                      >
                         <motion.div 
                           animate={{ x: useRealFeed ? 24 : 4 }}
                           className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-lg"
                         />
                      </div>
                      <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                        {useRealFeed ? 'LIVE_FEED_ON' : 'MOCK_DATA_ON'}
                      </span>
                   </div>
                   <button onClick={loadFeed} className="text-white/40 hover:text-white transition-colors">
                      <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
                   </button>
                </div>
             </div>
          </div>

          {/* Feed List - Editorial Style */}
          <div className="w-full lg:w-2/3 space-y-12">
             <AnimatePresence mode="popLayout">
                {filteredItems.map((item, i) => (
                   <motion.div
                     key={item.id}
                     initial={{ x: 50, opacity: 0 }}
                     animate={{ x: 0, opacity: 1 }}
                     exit={{ x: -50, opacity: 0 }}
                     transition={{ delay: i * 0.05 }}
                     className="group relative bg-zinc-900/40 p-10 md:p-14 border-l-[12px] border-white/5 hover:border-zine-red hover:bg-zinc-900/60 transition-all cursor-pointer"
                   >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                         <div className="flex items-center gap-4">
                            <Tag size={12} className="text-zine-red" />
                            <span className="font-accent font-black text-zine-red text-[10px] uppercase tracking-[0.3em]">{item.category}</span>
                         </div>
                         <div className="flex items-center gap-2 font-mono text-[10px] text-white/20 uppercase tracking-widest">
                            <Calendar size={12} /> {new Date(item.pubDate).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
                         </div>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-display text-white uppercase leading-tight mb-8 group-hover:translate-x-4 transition-transform">
                        {item.title}
                      </h3>
                      
                      <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed mb-10 selection:bg-white selection:text-black">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between">
                         <a 
                           href={item.link} 
                           target="_blank" 
                           rel="noreferrer"
                           className="flex items-center gap-4 text-xs font-black text-white py-2 group-hover:text-zine-red transition-colors"
                         >
                            LEER COMPLETO <ExternalLink size={16} />
                         </a>
                         
                         {/* Urban accent */}
                         <div className="flex gap-1">
                            {[1,2,3].map(dot => (
                              <div key={dot} className="w-1 h-1 rounded-full bg-white/20 group-hover:bg-zine-red transition-colors" />
                            ))}
                         </div>
                      </div>
                   </motion.div>
                ))}
             </AnimatePresence>

             {filteredItems.length === 0 && (
               <div className="py-32 text-center space-y-8">
                  <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto">
                    <Rss size={48} className="text-white/10" />
                  </div>
                  <p className="font-mono text-xs text-white/20 uppercase tracking-[0.5em]">No_matches_found_in_stream</p>
               </div>
             )}
          </div>

        </div>
      </div>
    </section>
  );
};
