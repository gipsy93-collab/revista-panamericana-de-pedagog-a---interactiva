import React, { useEffect } from 'react';
import { Hero3476 } from './Hero3476';
import { Intro3476, Methodology3476, Results3476, Limitaciones3476, Discussion3476 } from './Sections3476';
import { Quiz3476 } from './Quiz3476';
import { FilmGrain } from '../FilmGrain';

interface Unified3476Props {
  onBack: () => void;
}

const Unified3476: React.FC<Unified3476Props> = ({ onBack }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative w-full bg-white text-black font-sans selection:bg-[#e81e61] selection:text-white">
      <FilmGrain />
      {/* Back Button - Brutal Style */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-[100] bg-black text-white px-6 py-4 font-pop text-xl uppercase border-4 border-white shadow-[8px_8px_0_#e81e61] hover:bg-[#e81e61] transition-all hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px]"
      >
        ← VOLVER
      </button>

      {/* Content */}
      <div className="relative">
        <Hero3476 />
        <Intro3476 />
        <Methodology3476 />
        <Results3476 />
        <Quiz3476 />
        <Limitaciones3476 />
        <Discussion3476 onBack={onBack} />
        
        <footer className="py-20 text-center bg-black text-white px-6 border-t-[12px] border-white font-pop">
           <p className="uppercase tracking-widest text-sm mb-4">Revista Panamericana de Pedagogía</p>
           <p className="font-mono text-[10px] opacity-60 uppercase tracking-[0.5em]">
              RPP Art. 3476 // Pacheco-Gómez et al. // 2026 // Ciencia Transmedia
           </p>
        </footer>
      </div>
    </div>
  );
};

export default Unified3476;
