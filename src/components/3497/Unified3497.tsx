import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Hero3497 from './Hero3497';
import Content3497 from './Content3497';
import Quiz3497 from './Quiz3497';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3497({ onBack }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-amber-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-amber-600 transition-colors shadow-[4px_4px_0_0_#92400e] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#92400e] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-amber-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF_3497 // AUTONOMÍA_FAMILIAR</span>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3497 onStart={scrollToContent} />
        
        <div ref={contentRef} className="relative z-10">
          <Content3497 />
          <Quiz3497 />
        </div>
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-amber-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed">
            Ávila-Fuenmayor, G. J. (2026). <span className="text-white not-italic font-bold">Autonomía familiar y procesos de socialización: Un análisis pedagógico</span>. <span className="text-amber-500">Revista Panamericana de Pedagogía</span>, 41, e3497.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#92400e]">
               DOI: 10.21555/rpp.3497
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Venezuela // Colombia // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
