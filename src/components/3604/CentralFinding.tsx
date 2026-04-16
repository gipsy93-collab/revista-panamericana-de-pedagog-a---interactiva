import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CENTRAL_FINDING } from './constants';
import { Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function CentralFinding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.finding-card', {
        scrollTrigger: {
          trigger: '.finding-card',
          start: 'top 80%',
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative py-24 md:py-40 bg-[#FDFCFB] overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-12 mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 bg-[#5A5A40]" />
              <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#5A5A40]">Hallazgo Central</span>
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#1a1a1a] leading-tight">
              {CENTRAL_FINDING.title}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <div className="finding-card bg-white p-8 md:p-16 border-2 border-[#1a1a1a] shadow-[20px_20px_0px_0px_rgba(90,90,64,1)] relative">
              <Quote className="absolute -top-6 -left-6 text-[#5A5A40] w-16 h-16 opacity-20" />
              <p className="font-serif text-3xl md:text-4xl text-[#1a1a1a] leading-relaxed">
                "{CENTRAL_FINDING.text}"
              </p>
              
              <div className="mt-12 pt-8 border-t border-[#1a1a1a]/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#5A5A40]/10 rounded-full flex items-center justify-center text-[#5A5A40]">
                    <span className="font-bold">!</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#1a1a1a]/40">Dato Clave</span>
                    <p className="text-sm font-bold text-[#5A5A40]">{CENTRAL_FINDING.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <motion.div style={{ y }} className="relative z-10">
               <div className="aspect-[4/5] bg-[#1a1a1a]/5 border border-[#1a1a1a]/10 flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <div className="p-12 text-center">
                    <div className="text-8xl mb-6 opacity-20">📽️</div>
                    <p className="text-xs font-mono text-[#1a1a1a]/40 uppercase tracking-widest">
                      Visualizar la invisibilidad educativa
                    </p>
                  </div>
               </div>
            </motion.div>
            
            {/* Background Decorative Text */}
            <div className="absolute -right-20 -bottom-20 pointer-events-none select-none overflow-hidden">
               <span className="text-[12rem] font-serif font-bold text-[#1a1a1a]/[0.03] whitespace-nowrap leading-none">
                 PARADOJA
               </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
