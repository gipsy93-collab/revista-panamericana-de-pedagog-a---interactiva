import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Brain, Heart, ArrowRight, Users, Activity, Target, ShieldCheck, AlertCircle, Sparkles } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export default function TeacherLab3455() {
  const [activeTab, setActiveTab] = useState<'participants' | 'categories'>('participants');

  const participants = {
    total: 57,
    gender: [
      { label: 'Mujeres', value: 61.4, n: 35, color: 'bg-purple-600' },
      { label: 'Hombres', value: 38.6, n: 22, color: 'bg-zinc-800' }
    ],
    ageRange: '17-28 años'
  };

  const categories = [
    { 
      eje: 'Significado Dimensión Personal', 
      items: ['Crecimiento y aprendizaje', 'Potencialización de habilidades'],
      desc: 'Valoraciones sobre la relevancia de la formación del ser.'
    },
    { 
      eje: 'Características Personales', 
      items: ['Valores (Respeto, Responsabilidad)', 'Actitudes (Amabilidad, Paciencia)'],
      desc: 'Cualidades que contribuyen a la construcción de paz.'
    },
    { 
      eje: 'Retos Enfrentados', 
      items: ['Gestión de emociones', 'Falta de confianza', 'Miedo al juicio'],
      desc: 'Desafíos para el crecimiento personal en el aula.'
    }
  ];

  return (
    <div className="w-full my-12 bg-white border-[10px] border-black p-8 md:p-12 shadow-[25px_25px_0_0_#7C3AED] text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-black/[0.02] leading-none pointer-events-none select-none">
        LAB_PAZ
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-16">
          <div>
            <BrutalSticker text="3.2 & 3.5 LABORATORIO PEDAGÓGICO" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#7C3AED]" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tighter">
              TEACHER <span className="text-[#7C3AED]">LAB</span>
            </h2>
          </div>
          <div className="flex gap-4">
             <button 
               onClick={() => setActiveTab('participants')}
               className={`px-8 py-4 border-4 border-black font-display uppercase text-sm font-black transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeTab === 'participants' ? 'bg-[#7C3AED] text-white' : 'bg-white'}`}
             >
               3.2 Participantes
             </button>
             <button 
               onClick={() => setActiveTab('categories')}
               className={`px-8 py-4 border-4 border-black font-display uppercase text-sm font-black transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeTab === 'categories' ? 'bg-[#7C3AED] text-white' : 'bg-white'}`}
             >
               3.5 Categorías
             </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {activeTab === 'participants' ? (
            <>
              <div className="lg:col-span-5">
                <BrutalCard title="N=57 DOCENTES EN FORMACIÓN" color="bg-zinc-950" className="text-white h-full flex flex-col justify-center p-12">
                   <div className="flex items-baseline gap-4 mb-8">
                      <span className="text-[12rem] font-display font-black text-[#7C3AED] leading-none italic">57</span>
                      <span className="text-4xl font-display font-black uppercase">Sujetos</span>
                   </div>
                   <p className="font-mono text-xs uppercase font-black opacity-60 border-t-2 border-white/10 pt-6">
                     Universidad Pública del Sureste de México // Rango: {participants.ageRange}
                   </p>
                </BrutalCard>
              </div>
              <div className="lg:col-span-7">
                <BrutalCard title="3.2 DISTRIBUCIÓN POR GÉNERO" color="bg-white" className="p-8 h-full">
                   <div className="space-y-12">
                      {participants.gender.map((g, i) => (
                        <div key={i} className="group">
                           <div className="flex justify-between items-end mb-4">
                              <span className="font-display text-4xl uppercase font-black italic">{g.label}</span>
                              <div className="text-right">
                                 <p className="font-mono text-3xl font-black text-[#7C3AED]">{g.value}%</p>
                                 <p className="font-mono text-[10px] uppercase font-black opacity-40">n={g.n}</p>
                              </div>
                           </div>
                           <div className="h-12 w-full bg-zinc-100 border-[6px] border-black p-1 shadow-[10px_10px_0_0_#000]">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${g.value}%` }}
                                className={`h-full ${g.color}`}
                              />
                           </div>
                        </div>
                      ))}
                   </div>
                </BrutalCard>
              </div>
            </>
          ) : (
            <div className="lg:col-span-12 grid md:grid-cols-3 gap-8">
               {categories.map((c, i) => (
                 <div key={i} className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#7C3AED] hover:-translate-y-2 transition-transform h-full flex flex-col">
                    <div className="bg-black text-white w-12 h-12 flex items-center justify-center font-display text-2xl mb-8">
                       {i+1}
                    </div>
                    <h4 className="font-display text-2xl font-black uppercase italic mb-6 leading-tight border-b-4 border-black pb-4">
                       {c.eje}
                    </h4>
                    <ul className="space-y-4 mb-8 flex-1">
                       {c.items.map((item, idx) => (
                         <li key={idx} className="flex gap-3 items-start font-sans font-bold uppercase text-[11px] leading-tight">
                            <Sparkles size={16} className="text-[#7C3AED] shrink-0" />
                            {item}
                         </li>
                       ))}
                    </ul>
                    <p className="font-serif italic text-sm text-black/60 border-t-2 border-black/10 pt-4">
                       {c.desc}
                    </p>
                 </div>
               ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
