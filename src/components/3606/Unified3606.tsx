import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3606 } from './Hero3606';
import { Content3606 } from './Content3606';
import { DataLab3606 } from './DataLab3606';
import { Quiz3606 } from './Quiz3606';
import { OrganicWaveDivider } from '../BrutalistLib';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3606({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3606'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Macías-Rosado, Ramos-Ramírez & Márquez-Cabellos'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3606 />
        
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#f0fdf4" variant="wavy" />
        <Content3606 />
        
        <OrganicWaveDivider topColor="#f9fafb" bottomColor="#f0fdf4" variant="dramatic" />
        <DataLab3606 />

        <OrganicWaveDivider topColor="#f0fdf4" bottomColor="#ffffff" variant="dramatic" />
        <Quiz3606 onComplete={(res) => console.log('Quiz 3606 completado', res)} />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-emerald-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed text-center">
            Macías-Rosado, A.-G., Ramos-Ramírez, B.-N., & Márquez-Cabellos, N.-G. (2025). <span className="text-white not-italic font-bold">Ajustes razonables y prácticas docentes inclusivas para estudiantes con discapacidad y trastorno del espectro autista en educación superior</span>. <span className="text-emerald-500">Revista Panamericana de Pedagogía</span>, 41, e3606.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#10b981] rounded-3xl">
               DOI: 10.21555/rpp.3606
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Colima, México // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
