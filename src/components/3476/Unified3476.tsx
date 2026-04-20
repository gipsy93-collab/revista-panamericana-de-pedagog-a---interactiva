import React, { useEffect } from 'react';
import { ChevronLeft, Share2, Download, GraduationCap } from 'lucide-react';
import { Hero3476 } from './Hero3476';
import Content3476 from './Content3476';
import { DataLab3476 } from './DataLab3476';
import Quiz3476 from './Quiz3476';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';
import { ARTICLE_META } from './constants';

interface Props {
  onBack: () => void;
}

export default function Unified3476({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      <FilmGrain />

      {/* Header Premium */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-emerald-600 transition-colors shadow-[4px_4px_0_0_#064e3b] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#064e3b] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Repositorio Transmedia</span>
          </button>
          
          <div className="hidden md:flex items-center gap-6">
             <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REVISIÓN SISTEMÁTICA</span>
                <span className="font-display text-sm font-black uppercase">ID_{ARTICLE_META.id}</span>
             </div>
             <div className="bg-emerald-600 text-white px-5 py-2 border-4 border-black font-display text-2xl font-black shadow-[4px_4px_0_0_#000]">N° 41</div>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3476 />
        
        <OrganicWaveDivider 
          topColor="#F0FDF4" 
          bottomColor="#ffffff" 
          variant="dramatic"
          height={150}
        />
        
        <Content3476 />
        
        <DataLab3476 />
        
        <div className="py-40 bg-zinc-900 border-t-[12px] border-black relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-1">
              <div className="bg-black text-white px-12 py-5 border-4 border-black font-display uppercase font-black text-3xl shadow-[10px_10px_0_0_#10b981]">
                LABORATORIO ÉTICO
              </div>
           </div>
           <Quiz3476 />
        </div>
      </main>

      {/* Footer Académico APA */}
      <footer className="bg-emerald-950 py-32 px-6 border-t-[20px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-white">
          <div className="inline-block bg-white text-black px-8 py-3 border-4 border-black mb-12 font-mono text-xs font-black uppercase tracking-[0.2em] shadow-[8px_8px_0_0_#10b981] -rotate-1">
            Citación Oficial Estándar APA
          </div>
          
          <h4 className="font-display text-5xl md:text-7xl uppercase font-black mb-12 italic text-emerald-400 leading-none" style={{ WebkitTextStroke: 'var(--brutal-stroke-width) white' }}>
            Revista Panamericana de Pedagogía
          </h4>
          
          <div className="bg-black/40 p-16 border-x-8 border-emerald-500 mb-20 relative">
            <GraduationCap className="absolute -top-10 left-1/2 -translate-x-1/2 text-white bg-emerald-600 p-3 rounded-full border-4 border-black" size={64} />
            <p className="font-serif text-2xl md:text-[2.5rem] italic text-emerald-50 leading-[1.3] max-w-5xl mx-auto">
              {ARTICLE_META.authors} (2026). <span className="text-emerald-400 not-italic font-black">{ARTICLE_META.title}</span>. <span className="text-white">Revista Panamericana de Pedagogía</span>, 41, e{ARTICLE_META.id}. DOI: <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-white hover:underline transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             <button className="flex items-center gap-4 bg-white text-black px-12 py-5 border-4 border-black font-display text-xl font-black uppercase shadow-[10px_10px_0_0_#10b981] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0_0_#10b981] transition-all">
               <Download size={24} />
               Descargar Documento
             </button>
             <button className="flex items-center gap-4 bg-emerald-600 text-white px-12 py-5 border-4 border-black font-display text-xl font-black uppercase shadow-[10px_10px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0_0_#000] transition-all">
               <Share2 size={24} />
               Difundir Conocimiento
             </button>
          </div>
          
          <p className="mt-24 font-mono text-xs uppercase opacity-40 tracking-[0.8em]">
            CONOCIMIENTO ABIERTO // MÉXICO // 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
