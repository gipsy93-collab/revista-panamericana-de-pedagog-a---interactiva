import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import Hero3604 from './Hero';
import CentralFinding3604 from './CentralFinding';
import ArticleExplorer3604 from './ArticleExplorer';
import CorpusSection from './CorpusSection';
import TestimonialsSection from './TestimonialsSection';
import Flashcards3604 from './Flashcards';
import MemoryGame3604 from './MemoryGame';
import QuizGame3604 from './QuizGame';
import Limitaciones3604 from './Limitaciones3604';
import Footer3604 from './Footer3604';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3604({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-orange-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-orange-600 transition-colors shadow-[4px_4px_0_0_#c2410c] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#c2410c] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-orange-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF_3604 // BIENESTAR_DOCENTE</span>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3604 onStart={() => {}} />
        <div className="space-y-0">
           <CentralFinding3604 />
           <ArticleExplorer3604 />
           <CorpusSection />
           <TestimonialsSection />
           <div className="py-24 bg-zinc-900 border-t-8 border-black">
              <Flashcards3604 />
           </div>
           <MemoryGame3604 />
           <div className="py-24 bg-zinc-50 border-y-8 border-black">
              <QuizGame3604 />
           </div>
        </div>
      </main>

      <Limitaciones3604 />
      <Footer3604 />
    </div>
  );
}
