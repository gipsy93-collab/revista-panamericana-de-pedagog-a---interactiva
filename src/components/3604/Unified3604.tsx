import { ARTICLE_META } from './constants';
import { ArticleHeader } from '../Common/ArticleHeader';
import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Hero3604 from './Hero';
import Content3604 from './Content3604';
import { DataLab3604 } from './DataLab3604';
import Flashcards3604 from './Flashcards';
import MemoryGame3604 from './MemoryGame';
import QuizGame3604 from './QuizGame';
import Limitaciones3604 from './Limitaciones3604';
import Footer3604 from './Footer3604';
import { OrganicWaveDivider } from '../BrutalistLib';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3604({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-rose-600 selection:text-white">
      <FilmGrain />

      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3604'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2026'}
        authors={ARTICLE_META?.authors || 'López-Martínez & Muñoz-Madrid'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main className="relative z-0">
        <Hero3604 onStart={() => {}} />
        
        <OrganicWaveDivider topColor="#000000" bottomColor="#ffffff" variant="wavy" />
        
        <div className="space-y-0">
           <Content3604 />
           
           <OrganicWaveDivider topColor="#ffffff" bottomColor="#fff1f2" variant="dramatic" />
           <DataLab3604 />
           <OrganicWaveDivider topColor="#fff1f2" bottomColor="#ffffff" variant="wavy" />

           
           <OrganicWaveDivider topColor="#f9fafb" bottomColor="#18181b" variant="dramatic" />
           <div className="py-24 bg-zinc-900">
              <Flashcards3604 />
           </div>
           
           <MemoryGame3604 />
           
           <OrganicWaveDivider topColor="#ffffff" bottomColor="#f9fafb" variant="gentle" />
           <div className="py-24 bg-zinc-50 border-y-2 border-black/5">
              <QuizGame3604 />
           </div>
        </div>
      </main>

      <Limitaciones3604 />
      <Footer3604 />
    </div>
  );
}

