import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3570 } from './Hero3570';
import Content3570 from './Content3570';
import { DataLab3570 } from './DataLab3570';
import { Quiz3570 } from './Quiz3570';
import { OrganicWaveDivider } from '../BrutalistLib';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3570({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-orange-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3570'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'García-Martínez & Reyes-Cabrera'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3570 />
        
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#fff7ed" variant="wavy" />
        <Content3570 />
        
        <OrganicWaveDivider topColor="#f9fafb" bottomColor="#fffaf5" variant="dramatic" />
        <DataLab3570 />

        <OrganicWaveDivider topColor="#fffaf5" bottomColor="#ffffff" variant="dramatic" />
        <Quiz3570 onComplete={(res) => console.log('Quiz 3570 completado', res)} />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-orange-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed text-center">
            García-Martínez, L., & Reyes-Cabrera, W.-R. (2025). <span className="text-white not-italic font-bold">Análisis de la formación docente para el desarrollo del pensamiento crítico</span>. <span className="text-orange-500">Revista Panamericana de Pedagogía</span>, 41, e3570.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#ea580c] rounded-3xl">
               DOI: 10.21555/rpp.3570
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Yucatán, México // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
