import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3198 } from './Hero3198';
import { Content3198 } from './Content3198';
import { Quiz3198 } from './Quiz3198';
import MindMap3198 from './MindMap3198';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';

interface Props {
  onBack: () => void;
}

export default function Unified3198({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-rose-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3198'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 39'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2024'}
        authors={ARTICLE_META?.authors || 'Hernández-Silvera, Pécora & Núñez'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3198 />
        <Content3198 />
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#f5ece0" variant="gentle" height={100} />
        <MindMap3198 />
        <OrganicWaveDivider topColor="#f5ece0" bottomColor="#ffffff" variant="dramatic" height={100} />
        <Quiz3198 onComplete={(res) => console.log('Quiz 3198 terminado', res)} />
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#000000" variant="dramatic" height={150} />
      </main>

      <footer className="bg-black py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-rose-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed">
            Hernández-Silvera, D. I., Pécora, A. N., & Núñez, F. J. (2025). <span className="text-white not-italic font-bold">Aprendizaje de las Tecnologías de la Información y la Comunicación en el envejecimiento activo: un estudio cualitativo en Buenos Aires</span>. <span className="text-rose-500">Revista Panamericana de Pedagogía</span>, 39, e3198.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="text-white font-mono text-sm font-black uppercase tracking-widest">
               DOI: 10.21555/rpp.3198
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Argentina // RPP N° 39</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
