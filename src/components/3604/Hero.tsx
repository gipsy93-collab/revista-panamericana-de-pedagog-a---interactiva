import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Film, Play, ArrowDown } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-reveal', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.2
      });

      gsap.to('.grain-overlay', {
        opacity: 0.08,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'none'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#1a1a1a]"
    >
      {/* Background Cinematic Lighting */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(90,90,64,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Decorative Film Strip */}
      <div className="absolute top-0 left-0 w-full h-12 border-y border-white/5 opacity-20 flex overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="min-w-[100px] h-full border-r border-white/10 flex items-center justify-center text-[10px] text-white/20 font-mono">
            FRAME_{3604 + i}
          </div>
        ))}
      </div>

      <div className="container relative z-10 px-6 mx-auto text-center" ref={textRef}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 bg-[#5A5A40]/20 border border-[#5A5A40]/30 rounded-full text-[#5A5A40] backdrop-blur-sm"
        >
          <Film size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">Experiencia Transmedia RPP</span>
        </motion.div>

        <div className="overflow-hidden mb-4">
          <h1 className="stat-reveal font-serif text-4xl md:text-6xl lg:text-7xl text-[#FDFCFB] leading-tight">
            El cine como mediador pedagógico en la enseñanza de la literatura
          </h1>
        </div>

        <div className="overflow-hidden mb-12">
          <p className="stat-reveal text-[#FDFCFB]/60 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Reconciliando la palabra escrita con los lenguajes visuales de una nueva generación.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16">
          <div className="flex flex-col items-center">
            <span className="stat-reveal text-6xl md:text-7xl font-serif text-[#5A5A40] font-bold">21%</span>
            <span className="stat-reveal text-[10px] uppercase tracking-[0.3em] text-[#FDFCFB]/40 font-bold mt-2">
              Uso previo de audiovisual
            </span>
          </div>
          <div className="w-px h-16 bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center text-left md:items-start">
             <span className="stat-reveal text-xs uppercase tracking-widest text-[#f0c040] font-bold mb-1">Impacto educativo</span>
             <p className="stat-reveal text-[#FDFCFB]/80 text-sm max-w-[200px]">
               De espectadores pasivos a lectores críticos de la imagen.
             </p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="group relative px-10 py-5 bg-[#5A5A40] text-white font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-white hover:text-[#1a1a1a]"
        >
          <span className="relative z-10 flex items-center gap-3">
            Explorar la experiencia <Play size={18} />
          </span>
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
        </button>
      </div>

      {/* Social Proof / Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.5em] text-[#FDFCFB] font-bold">Scroll para leer</span>
        <ArrowDown size={14} className="animate-bounce text-[#5A5A40]" />
      </div>

      <div className="absolute bottom-0 right-0 p-8 text-right hidden lg:block">
        <div className="text-[10px] uppercase tracking-[0.2em] text-[#FDFCFB]/20 font-mono">
          REF_E3604 // LÓPEZ-MARTÍNEZ & MUÑOZ-MADRÍD
        </div>
      </div>
    </section>
  );
}
