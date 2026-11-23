import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Hero3153 from './Hero3153';
import Content3153 from './Content3153';
import Quiz3153 from './Quiz3153';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';

export default function Unified3153({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-cream text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.v38.3153'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 38'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2024'}
        authors={ARTICLE_META?.authors || 'Ramos-Solís, Sáenz-González, Burnes-Garza & Elizondo-García'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3153 />
        <Content3153 />
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#f8fafc" variant="gentle" height={120} />
        <Quiz3153 onComplete={(res) => console.log('Quiz 3153 completado', res)} />
        <OrganicWaveDivider topColor="#f8fafc" bottomColor="#000000" variant="dramatic" height={160} />
      </main>

      <footer className="bg-black py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
           <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-blue-500">Revista Panamericana de Pedagogía</h4>
           <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-12 text-left">
              <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#1e3a8a] rounded-3xl">
                REF: RPP VOL. 38
              </div>
              <p className="font-mono text-[10px] uppercase opacity-40">Mayo 2024 // México</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
