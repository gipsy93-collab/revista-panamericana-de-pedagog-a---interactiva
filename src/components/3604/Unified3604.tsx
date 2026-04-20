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

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-2 border-black/10 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-rose-600 transition-colors shadow-[4px_4px_0_0_#e11d48] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#e11d48] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-rose-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40 italic">REF 3604 // CINE PEDAGÓGICO</span>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3604 onStart={() => {}} />
        
        <OrganicWaveDivider topColor="#000000" bottomColor="#ffffff" variant="wavy" />
        
        <div className="space-y-0">
           <Content3604 />
           
           <OrganicWaveDivider topColor="#ffffff" bottomColor="#fff1f2" variant="steps" />
           <DataLab3604 />
           <OrganicWaveDivider topColor="#fff1f2" bottomColor="#ffffff" variant="wavy" />

           
           <OrganicWaveDivider topColor="#f9fafb" bottomColor="#18181b" variant="dramatic" />
           <div className="py-24 bg-zinc-900">
              <Flashcards3604 />
           </div>
           
           <MemoryGame3604 />
           
           <OrganicWaveDivider topColor="#ffffff" bottomColor="#f9fafb" variant="smooth" />
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

