import React, { useEffect } from 'react';
import { ChevronLeft, Share2, Download, BookOpen } from 'lucide-react';
import { Hero3467 } from './Hero3467';
import { Content3467 } from './Content3467';
import { DataLab3467 } from './DataLab3467';
import Quiz3467 from './Quiz3467';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';
import { ARTICLE_META } from './constants';

interface Props {
  onBack: () => void;
}

export default function Unified3467({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      <FilmGrain />

      {/* Header Premium */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-indigo-600 transition-colors shadow-[4px_4px_0_0_#312e81] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#312e81] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
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
          
          <div className="hidden md:flex items-center gap-6">
             <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">DIAGNÓSTICO DIGITAL</span>
                <span className="font-display text-sm font-black uppercase">REF_{ARTICLE_META.id}</span>
             </div>
             <div className="w-px h-10 bg-black/10" />
             <div className="bg-indigo-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3467 />
        
        {/* Separator between Hero and Content */}
        <OrganicWaveDivider 
          topColor="#EEF2FF" 
          bottomColor="#ffffff" 
          variant="gentle"
          height={120}
        />
        
        <Content3467 />
        
        <DataLab3467 />
        
        <div className="py-40 bg-zinc-900 border-t-[12px] border-black relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-black text-white px-10 py-4 border-4 border-black font-display uppercase font-black text-2xl shadow-[8px_8px_0_0_#6366f1]">
                VALIDACIÓN IMRyD
              </div>
           </div>
           <Quiz3467 />
        </div>
      </main>

      {/* Footer Académico APA */}
      <footer className="bg-black py-32 px-6 border-t-[20px] border-indigo-950 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-white">
          <div className="inline-block bg-indigo-600 text-white px-6 py-2 border-2 border-white mb-10 font-mono text-[10px] uppercase font-black tracking-widest">
            Ficha Bibliográfica Estándar APA
          </div>
          
          <h4 className="font-display text-4xl md:text-6xl uppercase font-black mb-10 italic text-indigo-400 leading-none">
            Revista Panamericana de Pedagogía
          </h4>
          
          <div className="bg-white/5 p-12 border-4 border-indigo-900/30 backdrop-blur-sm mb-16 relative">
            <BookOpen className="absolute -top-6 left-1/2 -translate-x-1/2 text-indigo-500 bg-black p-2" size={48} />
            <p className="font-serif text-2xl md:text-3xl italic text-slate-300 leading-relaxed max-w-4xl mx-auto">
              {ARTICLE_META.authors} (2026). <span className="text-white not-italic font-bold">{ARTICLE_META.title}</span>. <span className="text-indigo-400">Revista Panamericana de Pedagogía</span>, 41, e{ARTICLE_META.id}. DOI: <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-white hover:underline transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button className="flex items-center gap-3 bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#4f46e5] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#4f46e5] transition-all">
               <Download size={20} />
               Descargar PDF
             </button>
             <button className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#000] transition-all">
               <Share2 size={20} />
               Compartir Hallazgo
             </button>
          </div>
          
          <p className="mt-20 font-mono text-[10px] uppercase opacity-30 tracking-[0.5em]">
            Universidad Panamericana // Facultad de Educación // 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
