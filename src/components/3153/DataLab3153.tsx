import React from 'react';
import { motion } from 'motion/react';
import { 
  Database, Users, Microscope, Layers, Filter, 
  Search, ClipboardList, BookOpen, Share2
} from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3153 = () => {
  const participants = [
    { id: 1, g: "H", e: 23, c: "Mecatrónica" },
    { id: 2, g: "M", e: 21, c: "Psicopedagogía" },
    { id: 3, g: "M", e: 22, c: "Mercadotecnia" },
    { id: 4, g: "M", e: 21, c: "Diseño de interiores" },
    { id: 5, g: "M", e: 22, c: "Diseño de modas" },
    { id: 6, g: "M", e: 21, c: "Gestión Empresarial" },
    { id: 7, g: "M", e: 21, c: "Derecho" },
    { id: 8, g: "H", e: 24, c: "Robótica" },
    { id: 9, g: "H", e: 23, c: "Comunicación" },
    { id: 10, g: "M", e: 22, c: "Psicopedagogía" },
    { id: 11, g: "M", e: 23, c: "Administración" },
    { id: 12, g: "H", e: 33, c: "Diseño gráfico (Ex)" },
  ];

  const codingPhases = [
    {
      title: "Codificación Abierta",
      desc: "Nombramiento de datos para crear etiquetas a partir de hallazgos significativos.",
      icon: Search,
      color: "bg-blue-100"
    },
    {
      title: "Codificación Axial",
      desc: "Relación entre etiquetas identificadas para establecer categorías emergentes.",
      icon: Share2,
      color: "bg-blue-200"
    },
    {
      title: "Codificación Selectiva",
      desc: "Explicación de relaciones entre categorías mediante mapa conceptual.",
      icon: Layers,
      color: "bg-blue-600",
      dark: true
    }
  ];

  return (
    <div className="py-24 bg-pop-yellow border-y-[12px] border-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <BrutalSticker text="LABORATORIO DE DATOS 3153" color="bg-blue-600" className="text-white mb-4" />
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-none text-black">
              Teoría <br /> <span className="text-blue-600">Fundamentada</span>
            </h2>
          </div>
          <div className="bg-black text-white p-8 border-4 border-black shadow-[10px_10px_0_0_#2563eb] -rotate-1">
             <div className="flex items-center gap-4 mb-2">
                <Database className="text-blue-400" />
                <span className="font-mono text-xs uppercase font-black tracking-widest">Dataset Info</span>
             </div>
             <div className="text-4xl font-display font-black leading-none">N=12</div>
             <p className="font-mono text-[10px] uppercase opacity-40">Entrevista Semiestructurada</p>
          </div>
        </div>

        {/* PHASES GRID */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {codingPhases.map((phase, idx) => (
            <BrutalCard key={idx} color={phase.color} className={phase.dark ? "text-white" : "text-black text-left"}>
              <div className="flex items-start justify-between mb-6">
                <phase.icon size={40} className={phase.dark ? "text-blue-200" : "text-blue-600"} />
                <span className="font-mono text-[10px] font-black opacity-30 italic">PHASE_0{idx+1}</span>
              </div>
              <h4 className="font-display text-2xl font-black uppercase italic mb-4">{phase.title}</h4>
              <p className={`font-sans font-bold uppercase text-[10px] leading-relaxed ${phase.dark ? "text-white/70" : "text-black/60"}`}>
                {phase.desc}
              </p>
            </BrutalCard>
          ))}
        </div>

        {/* PARTICIPANTS TABLE */}
        <BrutalCard color="bg-zinc-950" className="text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 font-mono text-[150px] font-black text-white/[0.03] select-none pointer-events-none uppercase">
            3153
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-10 border-b-2 border-white/10 pb-4">
              <Users className="text-blue-400" size={32} />
              <h3 className="font-display text-3xl uppercase italic">Matriz de Participantes</h3>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left font-mono text-xs border-collapse">
                <thead>
                  <tr className="border-b-4 border-blue-600">
                    <th className="py-4 px-4 uppercase text-blue-400">ID</th>
                    <th className="py-4 px-4 uppercase text-blue-400">Género</th>
                    <th className="py-4 px-4 uppercase text-blue-400">Edad</th>
                    <th className="py-4 px-4 uppercase text-blue-400">Licenciatura / Perfil</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {participants.map((p) => (
                    <tr key={p.id} className="hover:bg-white/5 transition-colors">
                      <td className="py-3 px-4 font-black">ST-0{p.id}</td>
                      <td className="py-3 px-4">{p.g === 'H' ? 'HOMBRE' : 'MUJER'}</td>
                      <td className="py-3 px-4">{p.e} AÑOS</td>
                      <td className="py-3 px-4 italic">{p.c.toUpperCase()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </BrutalCard>
      </div>
    </div>
  );
};
