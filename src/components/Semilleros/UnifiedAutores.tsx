import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Users, Star, GraduationCap, Award, Rocket, Globe, Zap } from 'lucide-react';
import { FilmGrain } from '../FilmGrain';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

interface Props {
  onBack: () => void;
}

const authors = [
  { name: 'Antonio Quintero', role: 'Investigador Principal', description: 'Especialista en Arqueología Pedagógica y Crítica Educativa.' },
  { name: 'Citlalli Bautista', role: 'Co-Autora & Revisora', description: 'Experta en Metodologías de Investigación y Calidad Editorial.' },
  { name: 'Oswaldo Pérez', role: 'Investigador Salud & IA', description: 'Líder de Proyectos de Intersección entre Ética y Tecnología.' },
  { name: 'Carmen Villalaz', role: 'Co-Autora Salud', description: 'Especialista en Humanización de la Medicina y Bioética.' },
  { name: 'Equipo Editorial', role: 'Revisión RPP', description: 'Colectivo responsable del rigor y la excelencia científica.' }
];

export default function UnifiedAutores({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-rose-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-rose-600 transition-colors shadow-[4px_4px_0_0_#9f1239] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#9f1239] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-rose-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">AUTORES</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">NETWORK // RPP_2026</span>
          </div>
        </div>
      </header>

      {/* HERO SEMILLERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-rose-600 text-white border-b-[20px] border-black overflow-hidden py-32">
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
         
         <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
            <BrutalSticker text="RED DE INVESTIGACIÓN ACTIVA" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#000]" />
            
            <h1 className="text-6xl md:text-[10rem] font-display uppercase leading-none text-white drop-shadow-[20px_20px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: '4px black' }}>
              Semillero <br /> Autores
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#000] rotate-1 mb-20 relative overflow-hidden">
               <p className="text-3xl font-serif italic leading-tight text-rose-100">
                 "Investigadores activos orbitando alrededor del rigor científico."
               </p>
            </div>
         </div>
      </section>

      {/* SECCIÓN 1: MISIÓN */}
      <WaveSection topColor="#e11d48" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-8">
              <PremiumTitle subtitle="PROPÓSITO CIENTÍFICO"> Cultivar la Excelencia </PremiumTitle>
              <div className="mt-12 space-y-8 text-2xl font-serif italic text-zinc-700 leading-relaxed">
                <p>El Semillero de Autores RPP es un espacio donde la investigación se encuentra con la narrativa transmedia.</p>
                <div className="bg-rose-50 border-l-[12px] border-rose-600 p-12 shadow-[15px_15px_0_0_#000] -rotate-1">
                   <p className="text-black font-black uppercase text-3xl font-display mb-4 italic tracking-tighter">No solo publicamos</p>
                   <p className="not-italic text-xl">Construimos puentes entre los datos y la comprensión pedagógica profunda.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-rose-600" title="NETWORK" icon={Globe} className="text-white shadow-[10px_10px_0_0_#000]">
                 <div className="space-y-4 pt-4">
                    <div className="flex justify-between items-end border-b-2 border-white/20">
                       <span className="font-mono text-[10px]">AUTHORS 2026</span>
                       <span className="font-display text-4xl">42</span>
                    </div>
                    <div className="flex justify-between items-end border-b-2 border-white/20">
                       <span className="font-mono text-[10px]">REGIONS</span>
                       <span className="font-display text-4xl">12</span>
                    </div>
                 </div>
              </CinematicCard>
            </div>
          </div>
        </div>
      </WaveSection>

      <WaveSection topColor="#ffffff" bottomColor="#fff1f2" variant="steps">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {authors.map((author, i) => (
              <div key={i} className="group bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] hover:-translate-y-4 transition-transform relative overflow-hidden">
                <div className="w-16 h-16 bg-rose-600 text-white flex items-center justify-center mb-8 border-4 border-black group-hover:rotate-12 transition-transform">
                  <Users size={32} />
                </div>
                <h3 className="font-display text-3xl uppercase font-black mb-2 italic tracking-tighter">{author.name}</h3>
                <p className="font-mono text-[10px] uppercase tracking-widest text-rose-600 mb-6 font-black">{author.role}</p>
                <p className="font-serif italic text-zinc-600 text-lg">"{author.description}"</p>
              </div>
            ))}
          </div>
        </div>
      </WaveSection>

      <footer className="bg-black py-40 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-white text-center">
          <h4 className="font-display text-5xl uppercase font-black mb-8 italic text-rose-500">Únete al Semillero</h4>
          <p className="font-serif text-2xl italic text-slate-400 mb-16 leading-relaxed">
            Buscamos investigadores con visión de futuro educativo.
          </p>
          <button className="bg-white text-black px-12 py-6 border-8 border-black font-display text-3xl uppercase shadow-[10px_10px_0_0_#e11d48] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
            ENVIAR MANUSCRITO
          </button>
        </div>
      </footer>
    </div>
  );
}
