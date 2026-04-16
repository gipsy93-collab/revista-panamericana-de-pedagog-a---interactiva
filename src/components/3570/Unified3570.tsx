import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import Hero3570 from './Hero3570';
import Content3570 from './Content3570';
import Quiz3570 from './Quiz3570';
import { FilmGrain } from '../FilmGrain';

interface Unified3570Props {
  onBack: () => void;
}

export default function Unified3570({ onBack }: Unified3570Props) {
  const contentRef = useRef<HTMLDivElement>(null);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-blue-600 transition-colors shadow-[4px_4px_0_0_#1e3a8a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#1e3a8a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-blue-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF_3570 // CRISIS_Y_TRANSICIÓN</span>
          </div>
        </div>
      </header>

      <main>
        <Hero3570 onStart={scrollToContent} />
        <div ref={contentRef}>
          <Content3570 />
        </div>
        <Quiz3570 />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-blue-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed">
            {ARTICLE_DATA.authors}. (2026). <span className="text-white not-italic font-bold">{ARTICLE_DATA.title}</span>. <span className="text-blue-500">Revista Panamericana de Pedagogía</span>, 41, e3570.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#1e3a8a]">
               DOI: {ARTICLE_DATA.doi}
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">México // Jalisco // Universidad de Guadalajara</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
