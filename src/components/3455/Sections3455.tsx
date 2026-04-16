import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { BrutalCard, BrutalQuote, BrutalSticker } from '../BrutalistLib';

export const Intro3455: React.FC = () => {
  const { t } = useLanguage();
  const s = t.chanchi.intro;

  return (
    <section className="py-48 px-6 bg-white border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Encabezado Problema/Solución */}
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <BrutalSticker text={s.title} color="bg-[#2D6A4F]" className="text-white !rotate-0" />
            <BrutalQuote>
              {s.central_quote}
            </BrutalQuote>
          </div>
          <div className="space-y-8 text-2xl font-sans text-black/80 leading-relaxed">
            <p className="border-l-8 border-black pl-6 italic">{s.problem}</p>
            <div className="w-20 h-2 bg-black" />
            <p className="font-bold text-[#2D6A4F] uppercase">{s.solution}</p>
          </div>
        </div>

        {/* Sección de Dimensiones Teóricas */}
        <div className="pt-12 border-t-4 border-black border-dashed">
          <h3 className="text-4xl font-pop uppercase mb-12 text-black leading-none">
            {s.dimensions.title}
          </h3>
          <p className="text-xl mb-8 font-serif italic text-black/70 italic">{s.dimensions.desc}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {s.dimensions.items.map((dim: any, idx: number) => (
              <BrutalCard key={idx} color={idx === 3 ? "bg-black" : "bg-white"} className={idx === 3 ? "text-white" : "text-black"}>
                <span className="block text-3xl font-pop mb-2 uppercase">{dim.name}</span>
                <span className={`text-[11px] leading-tight uppercase font-bold ${idx === 3 ? "text-gray-400" : "text-gray-500"}`}>
                  {dim.detail}
                </span>
                {idx === 3 && <div className="mt-4 w-full h-1 bg-[#2D6A4F]" />}
              </BrutalCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Methodology3455: React.FC = () => {
  const { t } = useLanguage();
  const s = t.chanchi.methodology;

  return (
    <section className="py-48 px-6 bg-[#f5ece0] border-b-[12px] border-black overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 flex items-center gap-6">
           <div className="w-32 h-32 bg-black flex items-center justify-center text-white shrink-0">
              <span className="text-6xl font-pop uppercase">M</span>
           </div>
           <div className="space-y-2">
              <h2 className="text-7xl font-pop uppercase text-black italic leading-none">{s.title}</h2>
              <p className="text-2xl font-pop text-[#2D6A4F] font-bold uppercase tracking-widest">{s.design}</p>
           </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BrutalCard color="bg-white" title="POBLACIÓN">
            <span className="block text-5xl font-pop mb-4 text-black">{s.sample}</span>
            <span className="text-xs font-pop uppercase tracking-wider leading-tight block text-black/60 font-black">
              {s.demographics}
            </span>
          </BrutalCard>
          
          <BrutalCard color="bg-black" title="EPÍSTEME">
            <span className="block text-2xl font-pop mb-4 text-[#B7E4C7] leading-tight">{s.approach}</span>
            <div className="h-1 w-full bg-[#B7E4C7] mb-2" />
            <span className="text-[10px] text-white/50 uppercase font-black">Rango: 17 a 28 años</span>
          </BrutalCard>

          <BrutalCard color="bg-[#e81e61]" title="TÉCNICA">
            <span className="block text-lg font-pop text-white leading-tight uppercase font-black">{s.tools}</span>
          </BrutalCard>
        </div>

        <div className="mt-24 p-12 bg-white border-8 border-black shadow-[15px_15px_0_#000]">
           <p className="text-3xl font-serif italic text-black/70 leading-relaxed">
              <span className="text-black font-black uppercase inline-block mb-4 border-b-4 border-black">TRÍANGULACIÓN DE DATOS:</span><br/>
              {s.triangulation}
           </p>
        </div>
      </div>
    </section>
  );
};

export const Results3455: React.FC = () => {
  const { t } = useLanguage();
  const s = t.chanchi.results;

  return (
    <section className="py-48 px-6 bg-white border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-8xl font-pop uppercase text-black mb-24 text-center leading-none" style={{ WebkitTextStroke: '2px black' }}>{s.title}</h2>
        
        <div className="space-y-32">
          {/* Categoría 1: Valores */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
             <div className="space-y-8">
                <BrutalSticker text="Categoría 01" color="bg-[#e81e61]" className="text-white" />
                <h3 className="text-5xl font-pop uppercase text-black leading-tight">{s.values}</h3>
                <p className="text-xl leading-relaxed text-black/70 font-serif italic border-l-4 border-black pl-4">
                  {s.narrative}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                   {s.stats.map((item: any, i: number) => (
                     <BrutalSticker key={i} text={`${item.label}: ${item.value}`} color="bg-[#B7E4C7]" />
                   ))}
                </div>
             </div>
             <BrutalCard color="bg-black" shadowColor="#2D6A4F" className="text-white p-12">
                <span className="text-9xl font-pop text-[#B7E4C7] leading-none block mb-4 italic">61%</span>
                <span className="text-2xl font-pop uppercase text-white mt-4 border-t-2 border-white/20 pt-4 block leading-tight">
                  Admite desafíos en la gestión emocional y falta de confianza inicial.
                </span>
             </BrutalCard>
          </div>

          {/* Categoría 2: Actitudes & El Dato que Duele */}
          <div className="grid md:grid-cols-2 gap-20 items-start">
             <div className="bg-[#fccb06] p-12 border-8 border-black shadow-[15px_15px_0_#000] rotate-[-1deg]">
                <h4 className="text-3xl font-pop uppercase mb-8 border-b-4 border-black pb-2">{s.attitudes}</h4>
                <div className="space-y-4">
                   {s.attitudes_stats.map((item: any, i: number) => (
                     <div key={i} className="flex justify-between items-center border-b-2 border-black/20 pb-2">
                        <span className="font-pop uppercase text-lg">{item.label}</span>
                        <span className="font-pop font-black text-2xl">{item.value}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="space-y-8 pt-12">
                <BrutalSticker text="Voces del Estudio" color="bg-black" className="text-white rotate-[2deg]" />
                <BrutalQuote author="Participante Anónimo">
                   {s.quote_literal}
                </BrutalQuote>
                <div className="grid md:grid-cols-3 gap-4">
                   {s.additionalQuotes.map((quote: string, idx: number) => (
                     <BrutalQuote key={idx} className="text-base !p-6 !border-l-[8px] !border-[#2D6A4F] !bg-white">
                       <span className="!text-lg">"{quote}"</span>
                     </BrutalQuote>
                   ))}
                </div>
                <div className="grid grid-cols-6 gap-2">
                   {[1,2,3,4,5,6].map(i => <div key={i} className="h-4 bg-[#e81e61] border-2 border-black" />)}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Limitaciones3455: React.FC = () => {
  const { t } = useLanguage();
  const items = t.chanchi.limitations;

  return (
    <section className="py-48 px-6 bg-[#f5ece0] border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex items-center gap-6">
          <div className="w-24 h-24 bg-[#e81e61] flex items-center justify-center text-white shrink-0">
            <span className="text-5xl font-pop uppercase">L</span>
          </div>
          <h2 className="text-7xl font-pop uppercase text-black italic leading-none">Limitaciones</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item: string, i: number) => (
            <BrutalCard key={i} color="bg-white" className="text-black">
              <span className="block text-sm font-mono uppercase text-black/40 font-black mb-2">0{i + 1}</span>
              <p className="text-xl font-pop leading-tight">{item}</p>
            </BrutalCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Conclusions3455: React.FC = ({ onBack }: { onBack: () => void }) => {
  const { t } = useLanguage();
  const s = t.chanchi.conclusions;

  return (
    <section className="py-64 px-6 bg-[#2D6A4F] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto text-center space-y-24">
        <h2 className="text-[10rem] font-pop uppercase leading-none mb-12 text-black" style={{ WebkitTextStroke: '3px white' }}>{s.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
           <BrutalCard color="bg-white" className="text-black p-12">
              <h3 className="text-3xl font-pop uppercase mb-6 border-b-4 border-black pb-2">Propuesta Académica</h3>
              <p className="text-2xl font-serif italic leading-tight">
                {s.recommendation}
              </p>
           </BrutalCard>

           <div className="space-y-8">
              <div className="p-8 bg-black border-4 border-white shadow-[10px_10px_0_#fff]">
                 <p className="text-xl font-pop uppercase tracking-tighter leading-tight text-[#B7E4C7]">
                    {s.tradition_tension}
                 </p>
              </div>
              <p className="text-3xl font-serif italic text-[#B7E4C7] leading-tight">
                "{s.final_reflexion}"
              </p>
           </div>
        </div>
        
        <div className="pt-24 shrink-0">
          <button 
            onClick={onBack}
            className="bg-black text-white text-5xl px-20 py-10 font-pop uppercase border-[8px] border-white shadow-[15px_15px_0_#B7E4C7] hover:scale-105 active:scale-95 transition-all rotate-[-1deg]"
          >
            Finalizar Lectura
          </button>
        </div>
      </div>
    </section>
  );
};
