import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, Target, Info, Zap, Layout, Settings, Binary, BookOpen } from 'lucide-react';
import { BrutalCard } from '../BrutalistLib';

const DATA_SET = {
  gender: {
    'Mujeres': { HI: 122.67, HS: 117.60, HINT: 122.91 },
    'Varones': { HI: 104.61, HS: 110.10, HINT: 104.36 },
  },
  ses: {
    'Baja-baja': { HI: 129.98, impact: 'Alta resiliencia comunitaria detectada.' },
    'Baja': { HI: 109.89, impact: 'Necesidad de refuerzo en comunicación asertiva.' },
    'Media-baja': { HI: 93.56, impact: 'Zona crítica de vulnerabilidad detectada.' },
    'Media': { HI: 140.19, impact: 'Mayor acceso a recursos de mediación.' },
  },
  projects: [
    { name: 'ABP (Proyectos)', HI: 144.97, HS: 138.50, HINT: 134.91, color: 'bg-green-500' },
    { name: 'Disciplina', HI: 106.88, HS: 115.75, HINT: 109.85, color: 'bg-blue-500' },
    { name: 'Convivencia', HI: 102.78, HS: 112.47, HINT: 101.95, color: 'bg-yellow-500' },
    { name: 'ABR (Retos)', HI: 81.85, HS: 93.35, HINT: 91.65, color: 'bg-red-500' },
    { name: 'Sin Proyecto', HI: 121.94, HS: 99.14, HINT: 123.63, color: 'bg-gray-500' },
  ]
};

export default function DataExplorer3412() {
  const [selectedGender, setSelectedGender] = useState<'Mujeres' | 'Varones'>('Mujeres');
  const [selectedSES, setSelectedSES] = useState<keyof typeof DATA_SET.ses>('Media');

  const stats = DATA_SET.gender[selectedGender];
  const sesInfo = DATA_SET.ses[selectedSES] || DATA_SET.ses['Media'];

  return (
    <div className="w-full my-12 bg-[#fafafa] border-[10px] border-black p-8 shadow-[24px_24px_0_0_#000] text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-black/[0.03] leading-none pointer-events-none select-none">
        SOFT_SKILLS
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* PANEL DE CONTROL IZQUIERDO: DEMOGRAFÍA */}
          <div className="space-y-12">
            <h2 className="text-5xl font-display font-black uppercase italic leading-none border-b-8 border-black pb-4">Lab <span className="text-red-600">3412</span></h2>
            
            <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
              <h4 className="font-display text-2xl font-black uppercase mb-6 italic flex items-center gap-3">
                <Users size={28} className="text-red-600" /> Género
              </h4>
              <div className="grid grid-cols-2 gap-6">
                {['Mujeres', 'Varones'].map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelectedGender(g as any)}
                    className={`p-6 border-4 border-black font-display font-black uppercase text-xl transition-all shadow-[8px_8px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none ${selectedGender === g ? 'bg-black text-white' : 'bg-white text-black hover:bg-zinc-100'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
              <h4 className="font-display text-2xl font-black uppercase mb-6 italic flex items-center gap-3">
                <Target size={28} className="text-blue-600" /> Nivel Socioeconómico
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(DATA_SET.ses).map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSES(s as any)}
                    className={`p-4 border-4 border-black font-display font-black text-xs uppercase transition-all shadow-[4px_4px_0_0_#000] active:shadow-none ${selectedSES === s ? 'bg-blue-600 text-white' : 'bg-white text-black hover:bg-zinc-100'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* PANEL DE RESULTADOS DERECHO: COMPARATIVA PROYECTOS */}
          <div className="space-y-8">
            <BrutalCard title="4.2 RESULTADOS POR PROYECTO ÁULICO" color="bg-zinc-900" className="text-white">
              <div className="p-4 space-y-6">
                 {DATA_SET.projects.map((p, i) => (
                   <div key={i} className="space-y-2">
                      <div className="flex justify-between items-end">
                         <span className="font-display text-lg uppercase font-black italic">{p.name}</span>
                         <span className="font-mono text-sm font-black text-green-400">HI: {p.HI} pts</span>
                      </div>
                      <div className="h-6 w-full bg-zinc-800 border-2 border-white/20">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${(p.HI / 150) * 100}%` }}
                           className={`h-full ${p.color} shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                         />
                      </div>
                   </div>
                 ))}
              </div>
            </BrutalCard>

            <div className="bg-yellow-400 p-8 border-4 border-black shadow-[12px_12px_0_0_#000] rotate-1">
               <h4 className="font-display text-xl font-black uppercase mb-4 flex items-center gap-3">
                 <Zap size={24} /> Hallazgo Clave
               </h4>
               <p className="font-serif italic text-lg leading-tight text-black">
                 "El Aprendizaje Basado en Proyectos (ABP) obtuvo las puntuaciones más altas en Habilidades Interpersonales, Sociales e Intelectuales."
               </p>
            </div>
          </div>
        </div>

        {/* 4.3 TABLA RESUMEN DE DATOS CLAVE */}
        <div className="mt-20">
           <BrutalCard title="4.3 TABLA RESUMEN DE DATOS CLAVE" color="bg-white">
              <div className="overflow-x-auto">
                 <table className="w-full text-left border-collapse">
                    <thead>
                       <tr className="bg-black text-white font-display uppercase text-sm tracking-widest">
                          <th className="p-6 border-r border-white/20">Variable / Dato</th>
                          <th className="p-6 border-r border-white/20">Valor</th>
                          <th className="p-6">Contexto / Nota</th>
                       </tr>
                    </thead>
                    <tbody className="font-sans font-bold uppercase text-[10px]">
                       {[
                         { label: 'Consistencia interna (α)', value: '0.933', note: 'Casi perfecta, instrumento confiable' },
                         { label: 'Acuerdo interjueces (κ)', value: '0.95', note: 'Concordancia casi perfecta' },
                         { label: 'Brecha HI Clase Media vs Media-Baja', value: '46.63 pts', note: 'Diferencia altamente significativa (p<.001)' },
                         { label: 'Diferencia HI Mujeres vs Varones', value: '18.06 pts', note: 'Significativa (p<.05)' },
                         { label: 'ABP vs ABR en HI', value: '144.97 vs 81.85', note: 'Diferencia radical de 63 puntos' },
                         { label: 'Brecha con/sin vulnerabilidad', value: '28.86 pts', note: 'Estudiantes sin vulnerabilidad puntúan más alto' }
                       ].map((row, i) => (
                         <tr key={i} className="border-b-4 border-black hover:bg-zinc-50 transition-colors">
                            <td className="p-6 border-r-4 border-black bg-white">{row.label}</td>
                            <td className="p-6 border-r-4 border-black font-display text-xl text-red-600 italic">{row.value}</td>
                            <td className="p-6 text-black/60 italic">{row.note}</td>
                         </tr>
                       ))}
                    </tbody>
                 </table>
              </div>
           </BrutalCard>
        </div>
      </div>
    </div>
  );
}
