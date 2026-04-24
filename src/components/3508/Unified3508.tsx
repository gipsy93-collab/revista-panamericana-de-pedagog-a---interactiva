import React, { useEffect } from 'react';
import { ChevronLeft, Share2, Download, UnfoldVertical } from 'lucide-react';
import { Hero3508 } from './Hero3508';
import { Content3508 } from './Content3508';
import { DataLab3508 } from './DataLab3508';
import Quiz3508 from './Quiz3508';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';
import { ARTICLE_META } from './constants';

interface Props {
  onBack: () => void;
}

export default function Unified3508({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-pink-500 selection:text-white">
      <FilmGrain />

      {/* Header Premium */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-violet-600 transition-colors shadow-[4px_4px_0_0_#4c1d95] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#4c1d95] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
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
          
          <div className="hidden md:flex items-center gap-10">
             <div className="flex flex-col items-end">
                <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">COMPARATIVA INTERNACIONAL</span>
                <span className="font-display text-sm font-black uppercase tracking-tighter">ID_{ARTICLE_META.id}</span>
             </div>
             <div className="bg-violet-600 text-white px-6 py-2 border-[4px] border-black font-display text-3xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3508 />
        
        <OrganicWaveDivider 
          topColor="#FAF5FF" 
          bottomColor="#ffffff" 
          variant="dramatic"
          height={160}
        />
        
        <Content3508 />
        
        <DataLab3508 />
        
        <div className="py-40 bg-zinc-900 border-t-[12px] border-black relative">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-1">
              <div className="bg-black text-white px-16 py-8 border-[8px] border-black font-display uppercase font-black text-5xl shadow-[15px_15px_0_0_#ec4899]">
                SONDA ÉTICA
              </div>
           </div>
           <Quiz3508 />
        </div>
      </main>

      {/* Footer Académico APA */}
      <footer className="bg-zinc-950 py-48 px-6 border-t-[30px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-4 bg-violet-700" />
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <div className="inline-block bg-white text-black px-12 py-4 border-[6px] border-black mb-20 font-mono text-lg font-black uppercase tracking-[0.3em] shadow-[12px_12px_0_0_#9333ea] -rotate-1">
            Recomendación Citación APA
          </div>
          
          <h4 className="font-display text-7xl md:text-[10rem] uppercase font-black mb-20 italic text-violet-500 leading-none tracking-tighter opacity-80" style={{ WebkitTextStroke: 'var(--brutal-stroke-width) white' }}>
            Revista Panamericana
          </h4>
          
          <div className="bg-black/80 p-20 border-[8px] border-violet-900 mb-32 relative backdrop-blur-xl">
            <UnfoldVertical className="absolute -top-16 left-1/2 -translate-x-1/2 text-white bg-pink-600 p-5 rounded-sm border-4 border-black size-24" />
            <p className="font-serif text-3xl md:text-[3.2rem] italic text-zinc-100 leading-[1.3] max-w-6xl mx-auto">
              {ARTICLE_META.authors} (2026). <span className="text-violet-400 not-italic font-black underline decoration-4 decoration-pink-500">{ARTICLE_META.title}: {ARTICLE_META.subtitle}</span>. <span className="text-white">Revista Panamericana de Pedagogía</span>, 41, e{ARTICLE_META.id}. DOI: <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-violet-400 hover:text-white hover:underline transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
             <button className="flex items-center gap-6 bg-white text-black px-16 py-8 border-[6px] border-black font-display text-3xl font-black uppercase shadow-[15px_15px_0_0_#8b5cf6] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[23px_23px_0_0_#8b5cf6] transition-all">
               <Download size={36} />
               DOWNLOAD PDF
             </button>
             <button className="flex items-center gap-6 bg-pink-600 text-white px-16 py-8 border-[6px] border-black font-display text-3xl font-black uppercase shadow-[15px_15px_0_0_#000] hover:translate-x-[-8px] hover:translate-y-[-8px] hover:shadow-[23px_23px_0_0_#000] transition-all">
               <Share2 size={36} />
               SHARE DATA
             </button>
          </div>
          
          <p className="mt-32 font-mono text-sm uppercase opacity-40 tracking-[1.2em] font-black italic">
            ALMERÍA // ECUADOR // MÉXICO // 2026
          </p>
        </div>
      </footer>
    </div>
  );
}
