import React, { useEffect } from 'react';
import { ChevronLeft, Share2, Download, Trophy } from 'lucide-react';
import Hero3497 from './Hero3497';
import Content3497 from './Content3497';
import { DataLab3497 } from './DataLab3497';
import Quiz3497 from './Quiz3497';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';
import { ARTICLE_META } from './constants';

interface Props {
  onBack: () => void;
}

export default function Unified3497({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-amber-500 selection:text-black">
      <FilmGrain />

      {/* Header Premium */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-amber-500 hover:text-black transition-all shadow-[4px_4px_0_0_#4f46e5] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#4f46e5] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          <a
            href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="font-display uppercase text-xs tracking-widest font-black">Revista Acad�mica</span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
             <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] uppercase font-black tracking-[0.2em] opacity-40 italic">ARTÍCULO TEÓRICO</span>
                <span className="font-display text-sm font-black uppercase tracking-tighter">REF_{ARTICLE_META.id}_PY</span>
             </div>
             <div className="w-10 h-10 bg-amber-500 border-4 border-black flex items-center justify-center font-display font-black shadow-[3px_3px_0_0_#000]">!</div>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3497 />
        
        <OrganicWaveDivider 
          topColor="#FFFBEB" 
          bottomColor="#ffffff" 
          variant="steps"
          height={130}
        />
        
        <Content3497 />
        
        <DataLab3497 />
        
        <div className="py-40 bg-zinc-900 border-t-[16px] border-black relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-2">
              <div className="bg-amber-500 text-black px-16 py-6 border-[6px] border-black font-display uppercase font-black text-4xl shadow-[12px_12px_0_0_#000]">
                EL DESAFÍO ÉTICO
              </div>
           </div>
           <Quiz3497 />
        </div>
      </main>

      {/* Footer Académico APA */}
      <footer className="bg-black py-40 px-6 border-t-[30px] border-indigo-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-white">
          <div className="inline-block bg-indigo-600 text-white px-10 py-3 border-4 border-black mb-16 font-mono text-sm font-black uppercase tracking-[0.4em] shadow-[8px_8px_0_0_#f59e0b] rotate-1">
            BIBLIOGRAFÍA RECOMENDADA APA
          </div>
          
          <h4 className="font-display text-6xl md:text-8xl uppercase font-black mb-16 italic text-amber-500 leading-none tracking-tighter">
            Revista Panamericana de Pedagogía
          </h4>
          
          <div className="bg-zinc-800/40 p-16 border-4 border-zinc-700/50 backdrop-blur-md mb-24 relative shadow-[inset_0_0_50px_rgba(0,0,0,0.5)]">
            <Trophy className="absolute -top-12 left-1/2 -translate-x-1/2 text-black bg-amber-500 p-4 border-4 border-black size-20" />
            <p className="font-serif text-3xl md:text-5xl italic text-slate-200 leading-[1.2] max-w-5xl mx-auto">
              {ARTICLE_META.authors} (2026). <span className="text-amber-500 not-italic font-black">{ARTICLE_META.title}: {ARTICLE_META.subtitle}</span>. <span className="text-zinc-400">Revista Panamericana de Pedagogía</span>, 41, e{ARTICLE_META.id}. <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-indigo-400 underline hover:text-white transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <button className="flex items-center gap-5 bg-white text-black px-14 py-6 border-4 border-black font-display text-2xl font-black uppercase shadow-[12px_12px_0_0_#4f46e5] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[18px_18px_0_0_#4f46e5] transition-all">
               <Download size={28} />
               Full Report PDF
             </button>
             <button className="flex items-center gap-5 bg-indigo-600 text-white px-14 py-6 border-4 border-black font-display text-2xl font-black uppercase shadow-[12px_12px_0_0_#f59e0b] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[18px_18px_0_0_#f59e0b] transition-all">
               <Share2 size={28} />
               Share Findings
             </button>
          </div>
          
          <p className="mt-28 font-mono text-[11px] uppercase opacity-30 tracking-[1em] font-black">
            PARAGUAY // MÉXICO // PANAMERICANA // 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
