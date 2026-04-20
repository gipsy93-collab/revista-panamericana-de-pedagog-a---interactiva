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

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-2 border-black/10 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-indigo-600 transition-colors shadow-[4px_4px_0_0_#4f46e5] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#4f46e5] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-indigo-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40 italic">REF 3588 // PSICOMETRÍA DESERCIÓN</span>
          </div>
        </div>
      </header>

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
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#4f46e5]">
               DOI: 10.21155/rpp.3588
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Yucatán, México // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
