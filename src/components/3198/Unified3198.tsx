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

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b border-slate-200 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-zinc-900 hover:text-rose-600 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          <a
            href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="font-display uppercase text-xs tracking-widest font-black">Revista Acad�mica</span>
          </a>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="text-rose-600 font-display text-xl font-black italic">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF 3198 // ADULTOS MAYORES TRIC</span>
          </div>
        </div>
      </header>

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
             <p className="font-mono text-[10px] uppercase opacity-40">Argentina // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
