import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ARTICLE_SECTIONS } from './constants';
import { BookOpen, MapPin, Sparkles, ChevronRight, MessageCircle, Film, Fingerprint, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function ArticleExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.section-card').forEach((card: any, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
          x: i % 2 === 0 ? -100 : 100,
          opacity: 0,
          duration: 1.2,
          ease: 'expo.out'
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-[#1a1a1a] text-[#FDFCFB] overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#5A5A40] font-bold mb-4 block">Exploración Narrativa</span>
          <h2 className="font-serif text-5xl md:text-7xl">Navegando el <span className="italic text-[#5A5A40]">Artículo</span></h2>
        </div>

        <div className="space-y-32">
          {ARTICLE_SECTIONS.map((section, idx) => (
            <div 
              key={section.id} 
              className={`section-card flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group">
                  {/* Aspect Ratio Box */}
                  <div className="aspect-video bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-[#5A5A40]/20 mix-blend-overlay" />
                    <div className="relative z-10 flex flex-col items-center">
                       {idx === 0 && <Fingerprint size={64} className="text-[#5A5A40] mb-4" />}
                       {idx === 1 && <BookOpen size={64} className="text-[#5A5A40] mb-4" />}
                       {idx === 2 && <MapPin size={64} className="text-[#5A5A40] mb-4" />}
                       {idx === 3 && <Sparkles size={64} className="text-[#5A5A40] mb-4" />}
                       {idx === 4 && <Film size={64} className="text-[#5A5A40] mb-4" />}
                       {idx === 5 && <MessageCircle size={64} className="text-[#5A5A40] mb-4" />}
                       {idx === 6 && <AlertTriangle size={64} className="text-[#5A5A40] mb-4" />}
                       <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest text-center px-4">
                         {section.title.split(":")[0]} // REF_3604_{idx}
                       </span>
                    </div>
                  </div>
                  
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 border border-white/5 -z-10 group-hover:-inset-6 transition-all duration-700" />
                </div>
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-mono text-xs text-[#5A5A40]">0{idx + 1}</span>
                  <div className="h-px flex-1 bg-white/10" />
                </div>
                
                <h3 className="font-serif text-4xl md:text-5xl mb-6">
                  {section.title}
                </h3>
                
                <p className="text-[#FDFCFB]/70 text-lg leading-relaxed mb-8 whitespace-pre-line">
                  {section.content}
                </p>

                {section.quote && (
                  <div className="pl-6 border-l-2 border-[#5A5A40] py-2 group">
                    <p className="text-[#FDFCFB]/90 italic text-xl group-hover:text-[#5A5A40] transition-colors duration-300">
                      "{section.quote}"
                    </p>
                  </div>
                )}

                <button className="mt-10 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#5A5A40] hover:text-white transition-colors">
                  Ver detalles técnicos <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
