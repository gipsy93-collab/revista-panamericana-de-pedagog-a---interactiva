import React, { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3606 } from './Hero3606';
import { Content3606 } from './Content3606';
import { DataLab3606 } from './DataLab3606';
import { Quiz3606 } from './Quiz3606';
import { OrganicWaveDivider } from '../BrutalistLib';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

export default function Unified3606({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-emerald-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-2 border-black/10 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-emerald-600 transition-colors shadow-[4px_4px_0_0_#10b981] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#10b981] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
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
             <div className="bg-emerald-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40 italic">REF 3606 // INCLUSIÓN SUPERIOR</span>
          </div>
        </div>
      </header>

      <main className="relative z-0">
        <Hero3606 />
        
        <OrganicWaveDivider topColor="#ffffff" bottomColor="#f0fdf4" variant="wavy" />
        <Content3606 />
        
        <OrganicWaveDivider topColor="#f9fafb" bottomColor="#f0fdf4" variant="dramatic" />
        <DataLab3606 />

        <OrganicWaveDivider topColor="#f0fdf4" bottomColor="#ffffff" variant="dramatic" />
        <Quiz3606 onComplete={(res) => console.log('Quiz 3606 completado', res)} />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-emerald-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed text-center">
            Macías-Rosado, A.-G., Ramos-Ramírez, B.-N., & Márquez-Cabellos, N.-G. (2025). <span className="text-white not-italic font-bold">Ajustes razonables y prácticas docentes inclusivas para estudiantes con discapacidad y trastorno del espectro autista en educación superior</span>. <span className="text-emerald-500">Revista Panamericana de Pedagogía</span>, 41, e3606.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#10b981]">
               DOI: 10.21555/rpp.3606
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">Colima, México // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
