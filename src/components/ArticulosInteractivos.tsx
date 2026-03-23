import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, ExternalLink, Activity, BookOpen, Quote, TrendingUp, Brain, GraduationCap, ChevronRight } from 'lucide-react';

// Articles con formato POSTER/PORTADA DE REVISTA
const ARTICLES_DATA = [
  {
    id: 'etica-ia',
    title: 'ÉTICA E IA',
    subtitle: 'Inteligencia Artificial en Estudiantes de Salud',
    author: 'O. Pérez-Duarte & C. Bautista-Villalaz',
    date: 'Enero 2026',
    tag: 'Salud & IA',
    metric: 92,
    volume: 'Vol. 42',
    abstract: 'Investigación basada en el Principio de Pareto (80/20) para identificar los factores críticos que influyen en la percepción ética de la IA en estudiantes de medicina.',
    doi: '10.21134/rpcp.v2026i1.3524',
    interactUrl: '/etica-ia-salud/index.html',
    icon: Brain,
    color: 'bg-[#0f3896]',
    text: 'text-white',
    accent: '#fccb06'
  },
  {
    id: '3549',
    title: 'NEM',
    subtitle: 'Teorías Pedagógicas en la Nueva Escuela Mexicana',
    author: 'C.A. Quintero-Macías & C. Bautista-Villalaz',
    date: 'Enero 2026',
    tag: 'Arqueología Pedagógica',
    metric: 88,
    volume: 'Vol. 42',
    abstract: 'Análisis crítico sobre cómo la NEM retoma principios pedagógicos de Rousseau, Pestalozzi, Dewey y Freire como innovación radical.',
    doi: '10.21134/rpcp.v2026i1.3549',
    interactUrl: '/3549/index.html',
    icon: GraduationCap,
    color: 'bg-[#e81e61]',
    text: 'text-white',
    accent: '#fccb06'
  }
];

export default function ArticulosInteractivos({ onOpenArticle }: { onOpenArticle?: (id: string) => void }) {
  const [selectedArticle, setSelectedArticle] = useState<typeof ARTICLES_DATA[0] | null>(null);

  return (
    <section className="bg-[#fccb06] pt-32 pb-64 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Círculos gigantes con blur - Iluminación ambiental VISIBLE */}
      <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-white/40 blur-[100px] rounded-full mix-blend-overlay animate-pulse" />
      <div className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-[#0f3896]/30 blur-[120px] rounded-full mix-blend-multiply" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-[#e81e61]/25 blur-[100px] rounded-full mix-blend-multiply" />
      
      <div className="container mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-zine-black flex items-center justify-center text-[#fccb06]">
                <Sparkles size={24} />
              </div>
              <span className="font-accent font-black tracking-widest text-zine-black uppercase text-sm">Biblioteca Digital // 2026</span>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.9] text-zine-black mb-8 selection:bg-zine-black selection:text-[#fccb06]">
              ARTÍCULOS<br /><span className="text-white drop-shadow-[4px_4px_0_#000]">INTERACTIVOS</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-sans text-zine-black/80 leading-relaxed max-w-xl">
              Selecciona una portada para explorar la investigación interactiva.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-6">
             <div className="text-right">
               <span className="block font-mono text-[10px] text-zine-black/60 uppercase tracking-widest mb-2">Colección</span>
               <div className="flex items-center gap-4">
                  <span className="font-display text-6xl text-zine-black">{ARTICLES_DATA.length}</span>
                  <div className="p-3 bg-zine-black text-[#fccb06] font-mono text-xs border-2 border-black shadow-[4px_4px_0_#fff]">
                    <TrendingUp size={20} className="mb-2" />
                    NUEVOS
                  </div>
               </div>
             </div>
          </div>
        </div>

        {/* Grid de PORTADAS TIPO REVISTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {ARTICLES_DATA.map((article, i) => {
            const Icon = article.icon;
            return (
              <motion.article
                key={article.id}
                initial={{ rotate: i % 2 === 0 ? -5 : 5, y: 100, opacity: 0 }}
                whileInView={{ rotate: i % 2 === 0 ? -2 : 2, y: 0, opacity: 1 }}
                whileHover={{ rotate: 0, scale: 1.05, y: -20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, type: 'spring' }}
                className={`${article.color} ${article.text} aspect-[3/4] border-4 border-black shadow-[15px_15px_0_#000] flex flex-col relative group overflow-hidden cursor-pointer`}
              >
                 {/* Marco decorativo de revista */}
                 <div className="absolute inset-3 border-2 border-white/30 pointer-events-none" />
                 <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                   <span className="font-mono text-[10px] font-black uppercase tracking-widest bg-black/20 px-2 py-1">
                     {article.volume}
                   </span>
                   <span className="font-mono text-[10px] font-black uppercase tracking-widest bg-white/20 px-2 py-1">
                     {article.tag}
                   </span>
                 </div>

                 {/* Zona superior - Icono grande */}
                 <div className="flex-1 flex items-center justify-center relative">
                    <div className="w-32 h-32 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500">
                       <Icon size={64} strokeWidth={1.5} />
                    </div>
                    {/* Código de barras decorativo */}
                    <div className="absolute bottom-4 left-6 flex gap-1">
                      {[1,2,3,4,5,6,7,8].map(n => (
                        <div key={n} className="w-1 h-8 bg-white/30" />
                      ))}
                    </div>
                 </div>

                 {/* Zona media - Título principal */}
                 <div className="px-6 py-8 text-center">
                    <h3 className="text-6xl md:text-7xl font-display uppercase leading-[0.85] mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,0.3)]">
                       {article.title}
                    </h3>
                    <div className="w-16 h-1 bg-white/50 mx-auto mb-4" />
                    <p className="text-sm font-bold uppercase tracking-widest opacity-80 leading-relaxed">
                       {article.subtitle}
                    </p>
                 </div>

                 {/* Zona inferior - Meta info */}
                 <div className="px-6 pb-6">
                    <div className="border-t-2 border-white/20 pt-4">
                       <p className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2">Por</p>
                       <p className="text-sm font-bold uppercase tracking-widest mb-4">{article.author}</p>
                       
                       <div className="flex items-center justify-between">
                          <span className="font-mono text-[10px] opacity-50">{article.date}</span>
                          <button 
                            onClick={() => {
                              if (article.id === '3549' && onOpenArticle) {
                                onOpenArticle('3549');
                              } else {
                                window.location.href = article.interactUrl;
                              }
                            }}
                            className="flex items-center gap-1 font-mono text-[10px] font-black uppercase bg-white/20 hover:bg-white hover:text-black px-3 py-2 transition-all"
                          >
                            ABRIR <ChevronRight size={14} />
                          </button>
                       </div>
                    </div>
                 </div>

                 {/* Efecto de brillo en hover */}
                 <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Modal simplificado */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-12 overflow-hidden"
          >
            <div 
              className="absolute inset-0 bg-zine-black/95 backdrop-blur-xl"
              onClick={() => setSelectedArticle(null)}
            />
            
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="relative w-full max-w-4xl bg-white border-8 border-black shadow-[20px_20px_0_#000] p-8 md:p-16 max-h-[90vh] overflow-y-auto"
            >
               <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 w-12 h-12 bg-zine-black text-white flex items-center justify-center hover:bg-zine-red transition-all"
               >
                 <X size={24} />
               </button>

               <div className="flex flex-col md:flex-row gap-8">
                  <div className={`${selectedArticle.color} text-white w-full md:w-1/3 aspect-[3/4] flex flex-col items-center justify-center p-6 border-4 border-black`}>
                     {(() => {
                       const Icon = selectedArticle.icon;
                       return <Icon size={80} />;
                     })()}
                     <h3 className="text-4xl font-display uppercase text-center mt-4">{selectedArticle.title}</h3>
                  </div>
                  
                  <div className="flex-1">
                     <span className="font-mono text-[10px] text-zine-black/40 uppercase tracking-widest">{selectedArticle.tag}</span>
                     <h2 className="text-4xl font-display uppercase mb-4">{selectedArticle.subtitle}</h2>
                     <p className="text-zine-black/60 mb-6">{selectedArticle.abstract}</p>
                     <p className="text-sm font-bold uppercase tracking-widest mb-8">{selectedArticle.author}</p>
                     
                     <button 
                       onClick={() => {
                         if (selectedArticle.id === '3549' && onOpenArticle) {
                           onOpenArticle('3549');
                         } else {
                           window.location.href = selectedArticle.interactUrl;
                         }
                       }}
                       className="w-full bg-zine-black text-white font-display text-xl p-6 uppercase hover:bg-zine-red transition-all flex items-center justify-center gap-4"
                     >
                       EXPLORAR ARTÍCULO <ExternalLink size={20} />
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
