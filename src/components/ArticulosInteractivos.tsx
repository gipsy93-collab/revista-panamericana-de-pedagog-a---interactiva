import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Search, 
  ExternalLink, 
  TrendingUp, 
  ChevronRight, 
  BookMarked,
  X
} from 'lucide-react';
import { loadArticles, ICON_MAP, type ArticleData } from '../lib/contentLoader';
import { useLanguage } from '../LanguageContext';

/**
 * COMPONENTE: ARTÍCULOS INTERACTIVOS (SCROLL HORIZONTAL)
 * Versión Robustecida v2.2 - Blindaje contra errores de datos
 */

export default function ArticulosInteractivos({ onOpenArticle }: { onOpenArticle?: (id: string) => void }) {
  const [articles, setArticles] = useState<ArticleData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState<ArticleData | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    loadArticles()
      .then(data => {
        console.log("[ArticulosInteractivos] Loaded articles:", data.length, data);
        if (data && Array.isArray(data)) {
          setArticles(data);
        }
      })
      .catch(err => console.error("Error loading articles:", err));
  }, []);

  // Protección contra traducciones faltantes
  if (!t || !t.articulos) return <div className="p-20 text-center font-mono uppercase bg-[#fccb06]">Cargando Biblioteca...</div>;

  const filteredArticles = (articles || []).filter(article => {
    if (!article) return false;
    const title = article.title || '';
    const author = article.author || '';
    const tag = article.tag || '';
    return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           author.toLowerCase().includes(searchQuery.toLowerCase()) ||
           tag.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const displayArticles = filteredArticles.length > 0 && searchQuery === '' 
    ? [...filteredArticles, ...filteredArticles] 
    : filteredArticles;

  return (
    <section className="bg-[#fccb06] pt-32 pb-48 px-0 relative overflow-hidden min-h-[90vh]">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="w-full relative z-10">
        
        {/* Cabecera */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20 px-6 md:px-12">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-10 h-10 bg-black flex items-center justify-center text-[#fccb06] border-2 border-black shadow-[4px_4px_0_#fff]">
                <Sparkles size={20} />
              </div>
              <span className="font-mono font-black tracking-widest text-black uppercase text-xs">
                {t.articulos.tag || 'BIBLIOTECA'} // ARCHIVE_01
              </span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-tight text-black mb-6">
              {t.articulos.title_top}<br />
              <span className="text-white drop-shadow-[6px_6px_0_#000]" style={{ WebkitTextStroke: 'var(--brutal-stroke-width) black' }}>
                {t.articulos.title_bottom}
              </span>
            </h2>
          </div>

          <div className="relative group w-full md:w-96">
            <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform" />
            <div className="relative bg-white border-4 border-black p-4 flex items-center gap-4">
              <Search className="text-black/30" />
              <input 
                type="text" 
                placeholder="BUSCAR INVESTIGACIÓN..."
                className="w-full bg-transparent border-none outline-none font-mono font-bold uppercase placeholder:text-black/20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <div className="font-mono text-[10px] font-black bg-black text-white px-2 py-1">
                {filteredArticles.length}
              </div>
            </div>
          </div>
        </div>

        {/* Filtros rápidos (Chips) */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-8 no-scrollbar px-6 md:px-12" style={{ scrollbarWidth: 'none' }}>
          {['TODOS', 'IA', 'SALUD', 'TEA', 'CIBERACOSO', 'ESCRITURA', 'INCLUSIÓN'].map(cat => (
            <button 
              key={cat}
              onClick={() => setSearchQuery(cat === 'TODOS' ? '' : cat)}
              className={`px-8 py-3 font-mono text-xs font-black uppercase rounded-full border-4 border-black transition-all whitespace-nowrap ${
                (searchQuery.toLowerCase() === cat.toLowerCase() || (cat === 'TODOS' && !searchQuery))
                  ? 'bg-black text-[#fccb06] shadow-[4px_4px_0_#000] translate-x-[-2px] translate-y-[-2px]' 
                  : 'bg-white text-black hover:bg-black/5 hover:translate-y-1'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Galería Horizontal en 2 Filas */}
        <div 
          ref={scrollRef}
          className="grid grid-rows-2 grid-flow-col gap-8 overflow-x-auto pb-16 pt-4 px-12 md:px-24 no-scrollbar hide-scrollbar cursor-grab active:cursor-grabbing snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {displayArticles.length > 0 ? (
            displayArticles.map((article, i) => {
              if (!article) return null;
              const Icon = ICON_MAP[article.icon || ''] || BookMarked;
              const colorClass = article.color || 'bg-white';
              const textClass = article.text || 'text-black';
              
              return (
                <motion.article
                  key={`${article.id}-${i}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: (i % 5) * 0.05 }}
                  viewport={{ once: true, margin: "50px" }}
                  onClick={() => setSelectedArticle(article)}
                  className={`${colorClass} ${textClass} w-[300px] md:w-[340px] aspect-square rounded-3xl border-4 border-black shadow-[8px_8px_0_#000] flex flex-col relative group overflow-hidden cursor-pointer transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0_#000] snap-center`}
                >
                   {/* Header de la tarjeta */}
                   <div className="p-5 flex justify-between items-start relative z-10">
                      <div className="flex gap-2">
                        <span className="font-mono text-[9px] font-black uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">
                          {article.volume || 'VOL. 41'}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-white self-center border border-black animate-pulse" />
                      </div>
                   </div>

                   {/* Centro - Icono predominante similar a la referencia */}
                   <div className="flex-1 flex flex-col items-center justify-center relative z-10 px-6 text-center">
                      <div className="w-20 h-20 rounded-full border-2 border-current flex items-center justify-center mb-4 group-hover:scale-110 transition-transform bg-black/5">
                         <Icon size={32} />
                      </div>
                      <h3 className="text-[22px] font-display uppercase leading-tight line-clamp-3">
                         {article.author || 'ANÓNIMO'}
                      </h3>
                      <div className="w-8 h-1 bg-current opacity-30 mt-3 mx-auto" />
                   </div>

                   {/* Footer de la tarjeta con flecha */}
                   <div className="p-5 flex items-start justify-between relative z-10 mt-auto border-t-2 border-black/10 gap-3">
                      <span className="text-[10px] font-bold uppercase leading-tight line-clamp-3 max-w-[220px] opacity-90">{article.title || 'SIN TÍTULO'}</span>
                      <div className="w-8 h-8 rounded-lg bg-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors shrink-0">
                         <ExternalLink size={14} />
                      </div>
                   </div>
                </motion.article>
              );
            })
          ) : (
            <div className="w-full text-center p-20 border-4 border-black border-dashed bg-white/10 font-mono uppercase font-black">
               {searchQuery ? 'Sin Resultados...' : 'Cargando Investigaciones...'}
            </div>
          )}
        </div>
      </div>

      {/* Modal - Ficha Técnica */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12"
          >
            <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedArticle(null)} />
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-5xl bg-white border-8 border-black shadow-[24px_24px_0_#000] overflow-hidden flex flex-col"
            >
               <div className="bg-black text-white p-4 flex justify-between items-center">
                  <span className="font-mono text-[10px] font-black uppercase">MÉTRICAS DEL ARTÍCULO // ID {selectedArticle.id}</span>
                  <button onClick={() => setSelectedArticle(null)} className="p-1 hover:rotate-90 transition-transform">
                    <X size={24} />
                  </button>
               </div>

               <div className="flex flex-col md:flex-row overflow-y-auto">
                  <div className={`${selectedArticle.color || 'bg-white'} ${selectedArticle.text || 'text-black'} w-full md:w-2/5 p-12 flex flex-col justify-between`}>
                     <div className="w-16 h-16 bg-black/10 border-4 border-current flex items-center justify-center mb-12">
                        {(() => {
                           const Icon = ICON_MAP[selectedArticle.icon || ''] || BookMarked;
                           return <Icon size={32} />;
                        })()}
                     </div>
                     <h3 className="text-5xl font-display uppercase leading-none">{selectedArticle.title}</h3>
                  </div>
                  
                  <div className="flex-1 p-8 md:p-12">
                     <div className="flex flex-wrap gap-2 mb-8">
                        {selectedArticle.keywords && Array.isArray(selectedArticle.keywords) ? 
                          selectedArticle.keywords.map(k => (
                            <span key={k} className="bg-[#fccb06] text-black border-2 border-black px-3 py-1 font-mono text-[9px] font-black uppercase">#{k}</span>
                          )) : null
                        }
                     </div>

                     <h2 className="text-2xl font-display uppercase mb-8 leading-tight">{selectedArticle.subtitle}</h2>
                     
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 font-mono">
                        <div className="border-l-4 border-black pl-4">
                           <span className="block text-[9px] uppercase opacity-40 mb-1">DOI</span>
                           <span className="text-xs font-black break-all">{selectedArticle.doi || 'N/A'}</span>
                        </div>
                        <div className="border-l-4 border-black pl-4">
                           <span className="block text-[9px] uppercase opacity-40 mb-1">Autor</span>
                           <span className="text-xs font-black">{selectedArticle.author || 'N/A'}</span>
                        </div>
                     </div>

                     <p className="text-sm font-sans leading-relaxed text-black/60 mb-12 italic border-t-2 border-black/10 pt-8">
                        {selectedArticle.abstract || 'Sin resumen disponible.'}
                     </p>
                     
                     <button 
                       onClick={() => {
                         if (onOpenArticle) onOpenArticle(selectedArticle.id.toString());
                         setSelectedArticle(null);
                       }}
                       className="w-full bg-black text-white font-display text-2xl p-6 uppercase hover:bg-zinc-800 transition-colors flex items-center justify-center gap-4"
                     >
                       EXPLORAR INVESTIGACIÓN <ExternalLink size={24} />
                     </button>
                  </div>
               </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
