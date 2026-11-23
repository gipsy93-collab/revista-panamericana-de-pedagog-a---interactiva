import { ArticleHeader } from '../Common/ArticleHeader';
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
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3476'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2026'}
        authors={ARTICLE_META?.authors || 'Pacheco-Gómez & Cisneros-Cohernour'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

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
              <div className="bg-black text-white px-12 py-5 border-4 border-black font-display uppercase font-black text-3xl shadow-[10px_10px_0_0_#10b981] rounded-3xl">
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
          <div className="inline-block bg-white text-black px-8 py-3 border-4 border-black mb-12 font-mono text-xs font-black uppercase tracking-[0.2em] shadow-[8px_8px_0_0_#10b981] -rotate-1 rounded-3xl">
            Citación Oficial Estándar APA
          </div>
          
          <h4 className="font-display text-5xl md:text-7xl uppercase font-black mb-12 italic text-emerald-400 leading-none">
            Revista Panamericana de Pedagogía
          </h4>
          
          <div className="bg-black/40 p-16 border-x-8 border-emerald-500 mb-20 relative">
            <GraduationCap className="absolute -top-10 left-1/2 -translate-x-1/2 text-white bg-emerald-600 p-3 rounded-full border-4 border-black" size={64} />
            <p className="font-serif text-2xl md:text-[2.5rem] italic text-emerald-50 leading-[1.3] max-w-5xl mx-auto">
              {ARTICLE_META.authors} (2026). <span className="text-emerald-400 not-italic font-black">{ARTICLE_META.title}</span>. <span className="text-white">Revista Panamericana de Pedagogía</span>, 41, e{ARTICLE_META.id}. DOI: <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-white hover:underline transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
             <button className="flex items-center gap-4 bg-white text-black px-12 py-5 border-4 border-black font-display text-xl font-black uppercase shadow-[10px_10px_0_0_#10b981] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0_0_#10b981] transition-all rounded-3xl">
               <Download size={24} />
               Descargar Documento
             </button>
             <button className="flex items-center gap-4 bg-emerald-600 text-white px-12 py-5 border-4 border-black font-display text-xl font-black uppercase shadow-[10px_10px_0_0_#000] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0_0_#000] transition-all rounded-3xl">
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
