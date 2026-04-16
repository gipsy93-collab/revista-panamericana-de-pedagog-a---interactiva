import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck, Eye, EyeOff, CheckCircle2, Search, Zap, Cpu, Award } from 'lucide-react';
import { FilmGrain } from '../FilmGrain';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

interface Props {
  onBack: () => void;
}

const revisors = [
  { role: 'Revisión Metodológica', description: 'Evaluación del diseño experimental y rigor estadístico.' },
  { role: 'Revisión Temática', description: 'Expertos que validan la pertinencia de los hallazgos pedagógicos.' },
  { role: 'Revisión Ética', description: 'Asegura el cumplimiento de protocolos bioéticos y de integridad.' },
  { role: 'Revisión Editorial', description: 'Control de calidad sobre el estilo y narrativa transmedia.' },
  { role: 'Revisión Tecnológica', description: 'Validación de interactividad y accesibilidad digital.' }
];

export default function UnifiedRevisores({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-indigo-600 transition-colors shadow-[4px_4px_0_0_#312e81] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#312e81] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-indigo-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">REVISORES</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">QUALITY // RPP_2026</span>
          </div>
        </div>
      </header>

      {/* HERO SEMILLERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-indigo-900 text-white border-b-[20px] border-black overflow-hidden py-32">
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         
         <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
            <BrutalSticker text="SISTEMA DE CALIDAD CIENTÍFICA" color="bg-[#fccb06]" className="text-black mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#000]" />
            
            <h1 className="text-6xl md:text-[10rem] font-display uppercase leading-none text-white drop-shadow-[20px_20px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: '4px black' }}>
              Semillero <br /> Revisores
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-8 bg-zinc-950 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#4f46e5] rotate-1 mb-20 relative overflow-hidden group">
               <p className="text-3xl md:text-5xl font-serif italic leading-tight text-indigo-100 relative z-10">
                 "El rigor es la brújula que asegura que cada hallazgo pedagógico sea transformador."
               </p>
            </div>
         </div>
      </section>

      {/* SECCIÓN 1: PROCESO */}
      <WaveSection topColor="#1e1b4b" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <PremiumTitle subtitle="INTEGRIDAD CIENTÍFICA"> Doble Ciego Genuino </PremiumTitle>
              <div className="mt-12 space-y-8 text-2xl font-serif italic text-zinc-700 leading-relaxed text-left">
                <p>Nuestra red garantiza anonimato total y honestidad brutal en cada dictamen.</p>
                <div className="bg-indigo-50 border-l-[12px] border-indigo-600 p-12 shadow-[15px_15px_0_0_#000] rotate-1">
                   <p className="text-black font-black uppercase text-3xl font-display mb-4 italic tracking-tighter">Filtros Evolutivos</p>
                   <p className="not-italic text-xl">Mínimo 3 rondas de análisis antes de la digitalización interactiva.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-indigo-600" title="FILTROS" icon={ShieldCheck} className="text-white shadow-[10px_10px_0_0_#312e81]">
                 <div className="space-y-6 pt-4 text-left">
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs">1</div>
                        <span className="font-mono text-[10px] uppercase tracking-widest">Pre-Screening</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center font-bold text-xs">2</div>
                        <span className="font-mono text-[10px] uppercase tracking-widest">Peer Review</span>
                    </div>
                 </div>
              </CinematicCard>
            </div>
          </div>
        </div>
      </WaveSection>

      <WaveSection topColor="#ffffff" bottomColor="#f0f9ff" variant="steps">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {revisors.map((rev, i) => (
              <div key={i} className="group bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] hover:-translate-y-4 transition-transform relative overflow-hidden text-left">
                <div className="w-16 h-16 bg-indigo-600 text-white flex items-center justify-center mb-8 border-4 border-black group-hover:scale-110 transition-transform">
                  <EyeOff size={32} />
                </div>
                <h3 className="font-display text-3xl uppercase font-black mb-6 italic tracking-tighter">{rev.role}</h3>
                <p className="font-serif italic text-zinc-600 text-lg">"{rev.description}"</p>
              </div>
            ))}
          </div>
        </div>
      </WaveSection>

      <footer className="bg-black py-40 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-5xl uppercase font-black mb-8 italic text-indigo-500">Conviértete en Revisor</h4>
          <p className="font-serif text-2xl italic text-slate-400 mb-16 leading-relaxed text-center">
            Buscamos expertos con pasión por la calidad y visión de futuro.
          </p>
          <button className="bg-white text-black px-12 py-6 border-8 border-black font-display text-3xl uppercase shadow-[10px_10px_0_0_#4f46e5] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
            POSTULAR AL COMITÉ
          </button>
        </div>
      </footer>
    </div>
  );
}
