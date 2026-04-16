import React, { useRef, useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import SpaceMap from './SpaceMap';
import Timeline from './Timeline';
import ModelBuilder from './ModelBuilder';
import Scenarios from './Scenarios';
import Detector from './Detector';
import QuotesSection from './QuotesSection';
import RolesComparison from './RolesComparison';
import ConclusionsSection from './ConclusionsSection';
import Limitaciones3549 from './Limitaciones3549';
import Quiz3549 from './Quiz3549';
import { FilmGrain } from '../FilmGrain';
import { BrutalSticker } from '../BrutalistLib';

interface Props {
  onBack: () => void;
}

export default function Unified3549({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f5ece0] text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-amber-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-amber-600 transition-colors shadow-[4px_4px_0_0_#d97706] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#d97706] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-amber-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 41</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF_3549 // ARQUEOLOGÍA_PEDAGÓGICA</span>
          </div>
        </div>
      </header>

      {/* Hero Section 3549 Mejorado */}
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-amber-400 border-b-[20px] border-black py-40">
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
         
         <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
            <BrutalSticker text="GENÉTICA PEDAGÓGICA // MÉXICO" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#d97706]" />
            
            <h1 className="text-8xl md:text-[15rem] font-display uppercase leading-[0.7] text-white drop-shadow-[20px_20px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: '4px black' }}>
              ADN_ <br/> 3549_
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#d97706] rotate-1 mb-20 relative overflow-hidden">
               <p className="text-3xl md:text-5xl font-serif italic leading-tight text-amber-100">
                 "Un linaje de 250 años reempaquetado como innovación radical para la Nueva Escuela Mexicana."
               </p>
            </div>
         </div>

         <div className="absolute bottom-12 flex flex-col items-center gap-4 text-black font-black uppercase text-xs tracking-widest">
            <span className="animate-pulse tracking-[0.5em]">Scroll_para_descubrir</span>
            <div className="w-1 h-20 bg-black" />
         </div>
      </section>

      {/* Contenido Original Integrado */}
      <main className="relative z-0">
        <QuotesSection />
        <SpaceMap />
        <Timeline />
        <RolesComparison />
        <Detector />
        <ModelBuilder />
        <Scenarios />
        <ConclusionsSection />
        <Limitaciones3549 />
        <div className="py-24 bg-zinc-50 border-t-8 border-black">
           <Quiz3549 />
        </div>
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-4xl uppercase font-black mb-6 italic text-amber-500">Revista Panamericana de Pedagogía</h4>
          <p className="font-serif text-xl italic text-slate-400 mb-12 leading-relaxed">
            Investigación N-3549. <span className="text-white not-italic font-bold">Arqueología de la innovación pedagógica en México</span>. <span className="text-amber-500">Revista Panamericana de Pedagogía</span>, 41, e3549.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
             <div className="bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#d97706]">
               DOI: 10.21155/rpp.3549
             </div>
             <p className="font-mono text-[10px] uppercase opacity-40">México // RPP N° 41</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
