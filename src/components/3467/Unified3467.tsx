import { ArticleHeader } from '../Common/ArticleHeader';
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
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3467'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2026'}
        authors={ARTICLE_META?.authors || 'Vallejos-Parás et al.'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

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
              <div className="bg-black text-white px-10 py-4 border-4 border-black font-display uppercase font-black text-2xl shadow-[8px_8px_0_0_#6366f1] rounded-3xl">
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
          <div className="inline-block bg-indigo-600 text-white px-6 py-2 border-2 border-white mb-10 font-mono text-[10px] uppercase font-black tracking-widest rounded-2xl">
            Ficha Bibliográfica Estándar APA
          </div>
          
          <h4 className="font-display text-4xl md:text-6xl uppercase font-black mb-10 italic text-indigo-400 leading-none">
            Revista Panamericana de Pedagogía
          </h4>
          
          <div className="bg-white/5 p-12 border-4 border-indigo-900/30 backdrop-blur-sm mb-16 relative rounded-3xl">
            <BookOpen className="absolute -top-6 left-1/2 -translate-x-1/2 text-indigo-500 bg-black p-2" size={48} />
            <p className="font-serif text-2xl md:text-3xl italic text-slate-300 leading-relaxed max-w-4xl mx-auto">
              {ARTICLE_META.authors} (2026). <span className="text-white not-italic font-bold">{ARTICLE_META.title}</span>. <span className="text-indigo-400">Revista Panamericana de Pedagogía</span>, 41, e{ARTICLE_META.id}. DOI: <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-indigo-400 hover:text-white hover:underline transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
             <button className="flex items-center gap-3 bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#4f46e5] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#4f46e5] transition-all rounded-3xl">
               <Download size={20} />
               Descargar PDF
             </button>
             <button className="flex items-center gap-3 bg-indigo-600 text-white px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[12px_12px_0_0_#000] transition-all rounded-3xl">
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
