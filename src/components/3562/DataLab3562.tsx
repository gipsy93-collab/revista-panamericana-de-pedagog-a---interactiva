import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Heart, Baby, GraduationCap, TrendingUp, Users, Home, Briefcase, Sparkles, School } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3562 = () => {
  const educationStats = [
    { label: 'Primaria / Secundaria', value: 57, color: 'bg-zinc-800' },
    { label: 'Bachillerato', value: 19, color: 'bg-orange-500' },
    { label: 'Licenciatura', value: 17, color: 'bg-teal-600' },
  ];

  const profileHighlights = [
    { label: 'Muestreo Global', value: '38M', desc: 'Madres en México (Censo 2020).', icon: Users },
    { label: 'Actividad Económica', value: '7/10', desc: 'Madres solteras trabajadoras.', icon: Briefcase },
    { label: 'Bajo Nivel Educativo', value: '57%', desc: 'Solo educación básica.', icon: School },
  ];

  return (
    <div className="bg-[#FFF7ED] py-32 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-orange-600/[0.03] leading-none pointer-events-none select-none italic">
        MATERNITY_26
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div>
            <BrutalSticker text="QUALITATIVE_TRANSITION // MEXICO // RPP" color="bg-orange-500" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000] px-6 py-2 font-black" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-[0.85] text-black tracking-tighter italic">
              LAB <span className="text-orange-600 underline decoration-8 decoration-teal-500">MATERNIDAD</span><br/>
              <span className="text-4xl md:text-5xl font-mono uppercase bg-black text-white px-4 leading-normal mt-3">Agencia & Crianza</span>
            </h2>
          </div>
          <div className="flex gap-6">
             <div className="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_#f97316] rotate-[-2deg]">
                <Baby size={48} className="text-orange-600" />
             </div>
             <div className="bg-black border-4 border-black p-5 shadow-[8px_8px_0_0_#0d9488] rotate-[3deg]">
                <Heart size={48} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LA BRECHA EDUCATIVA */}
          <div className="lg:col-span-12">
             <BrutalCard title="ESTADÍSTICA_DE_TRANSICIÓN_Y_FORMACIÓN" color="bg-white" className="!border-[6px] shadow-[25px_25px_0_0_#000] p-12">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                   <div className="lg:w-1/2 space-y-12">
                      <div className="flex items-center gap-4 mb-10">
                         <GraduationCap className="text-teal-600" size={32} />
                         <h4 className="font-display text-3xl uppercase font-black italic">Formación de Madres (INEGI)</h4>
                      </div>
                      {educationStats.map((s, idx) => (
                        <div key={idx} className="group">
                           <div className="flex justify-between items-end mb-3">
                              <span className="font-display text-xl uppercase italic font-black text-black">{s.label}</span>
                              <span className="font-mono text-3xl font-black text-orange-600">{s.value}%</span>
                           </div>
                           <div className="h-6 w-full bg-zinc-100 border-2 border-black overflow-hidden relative">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.value}%` }} 
                                viewport={{ once: true }}
                                transition={{ duration: 1.5, ease: 'backOut' }}
                                className={`h-full ${s.color} relative overflow-hidden`}
                              >
                                 <div className="absolute inset-0 bg-white/10 animate-pulse" />
                              </motion.div>
                           </div>
                        </div>
                      ))}
                      <div className="mt-12 p-8 bg-zinc-50 border-4 border-black rotate-[-1deg] text-zinc-500 italic">
                         <p className="font-serif text-lg leading-snug">
                            "67% de las mujeres mexicanas son madres, pero solo el 17% logra culminar estudios universitarios."
                         </p>
                      </div>
                   </div>

                   <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
                      {profileHighlights.map((p, i) => (
                        <div key={i} className="bg-zinc-950 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#f97316] rotate-1 group hover:rotate-0 transition-transform flex flex-col justify-center items-start">
                           <p.icon size={40} className="mb-6 text-orange-500 group-hover:scale-110 transition-transform" />
                           <h5 className="font-display text-6xl font-black italic mb-2">{p.value}</h5>
                           <p className="font-mono text-[9px] uppercase font-black opacity-50 tracking-widest leading-none mb-3">{p.label}</p>
                           <p className="text-xs font-serif italic text-zinc-400 group-hover:text-white transition-colors">{p.desc}</p>
                        </div>
                      ))}
                      <div className="bg-teal-600 p-10 border-4 border-black shadow-[10px_10px_0_0_#000] rotate-[-2deg] flex flex-col justify-center items-center text-white text-center">
                         <Sparkles className="mb-4" />
                         <span className="font-display text-2xl uppercase font-black italic">Muestra N</span>
                         <span className="text-5xl font-display font-black">Qual</span>
                         <p className="font-mono text-[9px] uppercase font-black opacity-60 mt-4 leading-none">Estudio Longitudinal</p>
                      </div>
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* II. TENDENCIA OCDE */}
          <div className="lg:col-span-7">
             <BrutalCard title="OCDE: INDICADOR_NEET_JUVENIL" color="bg-black" className="text-white !border-[6px] shadow-[20px_20px_0_0_#0d9488] h-full flex flex-col justify-center p-12 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 text-[180px] font-black italic text-zinc-800 pointer-events-none select-none">14</div>
                <div className="relative z-10">
                   <span className="font-mono text-[10px] uppercase font-black text-teal-400 tracking-[0.5em] mb-4 block leading-none italic">SITUACIÓN_REGIONAL</span>
                   <div className="flex items-baseline gap-4 mb-4">
                      <h3 className="text-[10rem] md:text-[12rem] font-display font-black text-teal-500 drop-shadow-[8px_8px_0_#000] leading-none tracking-tighter">14.4</h3>
                      <span className="text-6xl font-display font-black text-white">%</span>
                   </div>
                   <h4 className="text-3xl font-display uppercase font-black text-white italic tracking-wide mb-8">Brecha de Desocupación (25-29 años)</h4>
                   <p className="font-serif text-xl italic text-teal-100/70 max-w-lg leading-relaxed font-medium">
                      "Porcentaje de jóvenes que no estudian ni trabajan en promedio OCDE, factor crítico en la precariedad materna."
                   </p>
                </div>
             </BrutalCard>
          </div>

          {/* III. HALLAZGOS DE AGENCIA */}
          <div className="lg:col-span-5 flex flex-col gap-8">
             <div className="bg-orange-500 border-4 border-black p-12 shadow-[12px_12px_0_0_#000] group hover:scale-[1.02] transition-transform h-full flex flex-col justify-center">
                <Home className="mb-6 text-black" size={48} />
                <h4 className="font-display text-4xl uppercase font-black italic text-black leading-tight mb-4">Crianza & Estocolmo</h4>
                <p className="font-serif text-xl text-black/80 italic leading-snug">
                   Se detecta el "síndrome de la cuidadora": madres que replican modelos de crianza restrictivos que antes criticaban.
                </p>
             </div>

             <div className="bg-white border-[6px] border-black p-12 shadow-[15px_15px_0_0_#0d9488] h-full flex flex-col justify-center relative group overflow-hidden">
                <TrendingUp className="absolute -bottom-10 -right-10 text-teal-500/10 group-hover:scale-150 transition-transform duration-700" size={200} />
                <h4 className="font-display text-3xl uppercase font-black text-black italic mb-6 leading-tight">Agencia Materna</h4>
                <p className="font-serif text-2xl italic text-black/70 leading-relaxed font-medium">
                   "La maternidad en la universidad no es el fin del proyecto de vida, sino una reconfiguración agresiva de la agencia."
                </p>
                <div className="mt-10 flex items-center justify-between border-t-2 border-zinc-100 pt-6">
                   <div className="font-mono text-[10px] font-black uppercase text-teal-600">RPP_N41_2026</div>
                   <div className="font-mono text-[9px] font-black text-zinc-300 uppercase italic">MADRES_STUDY</div>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-28 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60">
           <div className="flex items-center gap-6">
              <Baby size={24} className="text-orange-600" />
              <p>TRANSICIÓN A LA MATERNIDAD // AGENCIA JUVENIL // RPP 41 // 2026</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-orange-500 text-white px-3 py-1 shadow-[4px_4px_0_0_#000]">QUAL_DATA</div>
              <div className="bg-black text-white px-3 py-1 shadow-[4px_4px_0_0_#0d9488]">N_MADRES_MX</div>
           </div>
        </div>
      </div>
    </div>
  );
};
