import React, { useState } from 'react';
import { Home, School, Landmark, Car, ShieldAlert } from 'lucide-react';

const SAFETY_DATA = [
  { id: 'casa', label: 'CASA', perception: 92.7, icon: Home, color: 'bg-green-600' },
  { id: 'universidad', label: 'UNIVERSIDAD', perception: 43.0, icon: School, color: 'bg-yellow-500' },
  { id: 'bancos', label: 'BANCOS', perception: 28.9, icon: Landmark, color: 'bg-orange-500' },
  { id: 'transporte', label: 'TRANSPORTE', perception: 35.7, icon: Car, color: 'bg-red-600' }
];

export default function SafetyExplorer3454() {
  const [idx, setIdx] = useState(0);
  const current = SAFETY_DATA[idx];

  return (
    <div className="w-full my-12 bg-zinc-950 border-[10px] border-black p-10 shadow-[30px_30px_0_0_#000] text-white opacity-100 visible" style={{display: 'block', opacity: 1}}>
      
      <div className="space-y-16">
        <div className="relative w-full h-32 bg-zinc-900 border-8 border-black flex items-center overflow-hidden shadow-inner">
           <div className={`h-full ${current.color} transition-all duration-700 border-r-4 border-white`} style={{ width: `${current.perception}%` }}></div>
           <div className="absolute inset-0 flex items-center justify-between px-16 pointer-events-none">
              <span className="font-black text-4xl uppercase italic text-white drop-shadow-[2px_2px_0_#000]">{current.label}</span>
              <span className="font-black text-7xl italic text-white drop-shadow-[4px_4px_0_0_#000]">{current.perception}%</span>
           </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center bg-zinc-800 p-8 border-4 border-black">
           <span className="font-mono text-xs uppercase font-black text-zinc-500 min-w-[150px]">CONTROL_DE_RIESGO</span>
           <input 
             type="range" min="0" max="3" step="1" value={idx}
             onChange={(e) => setIdx(parseInt(e.target.value))}
             className="flex-1 h-16 accent-green-500 bg-zinc-700 border-4 border-black cursor-pointer shadow-[4px_4px_0_0_#000]"
           />
           <span className="font-mono text-xs uppercase font-black text-green-500 min-w-[150px] text-right">ZONA_DE_SEGURIDAD</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 text-left">
           <div className="bg-white text-black p-10 border-4 border-black flex items-center gap-10 shadow-[12px_12px_0_0_#000] -rotate-1">
              <current.icon size={80} className="text-black" />
              <div>
                <h5 className="font-black text-4xl uppercase italic leading-none mb-4">{current.label}</h5>
                <p className="text-sm font-black opacity-40 uppercase tracking-[0.2em]">Contexto_Habitual</p>
              </div>
           </div>
           <div className="bg-zinc-900 p-10 border-4 border-black border-l-[20px] border-l-green-600 shadow-[12px_12px_0_0_#000] rotate-1">
              <p className="font-serif italic text-3xl leading-snug text-zinc-200">
                "La percepción de seguridad es inversamente proporcional a la exposición al entorno público."
              </p>
           </div>
        </div>
      </div>
    </div>
  );
}
