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

      <header className="fixed top-0 left-0 right-0 z-[100] bg-cream border-b-2 border-black/10 shadow-sm backdrop-blur-md bg-cream/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-blue-600 transition-colors shadow-[4px_4px_0_0_#1e3a8a] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#1e3a8a] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-blue-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 38</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF 3153 // ESTÉTICA Y PREJUICIO</span>
          </div>
        </div>
      </header>

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
              <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#1e3a8a]">
                REF: RPP VOL. 38
              </div>
              <p className="font-mono text-[10px] uppercase opacity-40">Mayo 2024 // México</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
