import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3290 } from './Hero3290';
import { Content3290 } from './Content3290';
import { Quiz3290 } from './Quiz3290';
import { OrganicWaveDivider } from '../BrutalistLib';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3290({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3290'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 39'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Roldán-Morales & Torres-Tovar'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3290 />
        <Content3290 />
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic" />
        <Quiz3290 onComplete={(res) => console.log('Quiz 3290 completado', res)} />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-indigo-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed text-center">
            Roldán-Morales, C. A. & Torres-Tovar, A. F. (2025). <span className="text-white not-italic font-bold">Desafíos en el aprendizaje híbrido en una universidad del suroccidente colombiano</span>. <span className="text-indigo-500">Revista Panamericana de Pedagogía</span>, 39, e3290.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#3730a3] rounded-3xl">
               DOI: 10.21555/rpp.3290
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Colombia // RPP N° 39</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
