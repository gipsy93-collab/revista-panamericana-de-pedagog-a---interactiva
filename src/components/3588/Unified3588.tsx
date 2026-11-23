import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3588 } from './Hero3588';
import { Content3588 } from './Content3588';
import { DataLab3588 } from './DataLab3588';
import { Quiz3588 } from './Quiz3588';
import { OrganicWaveDivider } from '../BrutalistLib';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3588({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3588'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Euan-Catzín & Canto-Herrera'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3588 />
        
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#eef2ff" variant="wavy" />
        <Content3588 />
        
        <OrganicWaveDivider topColor="#f9fafb" bottomColor="#eef2ff" variant="dramatic" />
        <DataLab3588 />

        <OrganicWaveDivider topColor="#eef2ff" bottomColor="#ffffff" variant="dramatic" />
        <Quiz3588 onComplete={(res) => console.log('Quiz 3588 completado', res)} />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-indigo-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed text-center">
            Euan-Catzin, A. J., & Canto-Herrera, P. J. (2026). <span className="text-white not-italic font-bold">Análisis psicométrico de una escala para medir la intención de deserción universitaria: un estudio piloto</span>. <span className="text-indigo-500">Revista Panamericana de Pedagogía</span>, 41, e3588.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#4f46e5] rounded-3xl">
               DOI: 10.21555/rpp.3588
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Yucatán, México // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
