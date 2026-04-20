import React, { useState } from 'react';
import { Cpu, Clock, TrendingUp, AlertCircle, ShieldAlert } from 'lucide-react';

const DATA_SET = {
  traditional: { time: 100, cost: 100, label: 'Abogado Analógico', impact: 'Procesos manuales, códigos en papel, alto riesgo de error.' },
  tech: { time: 20, cost: 40, label: 'Abogado Tech-Fluent', impact: 'Uso de IA, reducción del 80% en carga operativa, análisis en segundos.' },
  stats: {
    curriculum_gap: 10,
    optional_it: 37,
    optional_digital: 58
  }
};

export default function DataExplorer3557() {
  const [activeMode, setActiveMode] = useState<'traditional' | 'tech'>('traditional');
  const data = DATA_SET[activeMode];

  return (
    <div className="w-full my-12 bg-white border-[10px] border-black p-8 shadow-[24px_24px_0_0_#3b82f6] text-black">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* PANEL IZQUIERDO: SIMULADOR */}
        <div className="space-y-12">
          <div className="bg-zinc-100 p-6 border-4 border-black">
            <h4 className="font-black uppercase mb-6 text-2xl italic flex items-center gap-3">
              <span className="bg-black text-white w-10 h-10 flex items-center justify-center not-italic rounded-full">1</span> 
              Perfil del Jurista
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {['traditional', 'tech'].map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMode(m as any)}
                  className={`p-6 border-4 border-black font-black uppercase text-sm transition-all shadow-[6px_6px_0_0_#999] active:shadow-none ${activeMode === m ? 'bg-black text-white shadow-[#3b82f6]' : 'bg-white text-black hover:bg-zinc-200'}`}
                >
                  {DATA_SET[m as 'traditional'|'tech'].label}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 border-4 border-black shadow-[10px_10px_0_0_#000] border-l-[16px] border-l-red-600">
             <div className="flex items-center gap-3 mb-2 font-black uppercase text-xs">
                <ShieldAlert className="text-red-600" /> Alerta_Resistencia
             </div>
             <p className="text-xl font-bold uppercase tracking-tight italic">"{data.impact}"</p>
          </div>
        </div>

        {/* PANEL DERECHO: MÉTRICAS DE EFICIENCIA */}
        <div className="bg-zinc-50 border-8 border-black p-10 flex flex-col justify-between">
           <div>
              <div className="flex justify-between items-center mb-12 border-b-4 border-black pb-4">
                 <p className="font-mono text-xs uppercase font-black opacity-40">Métrica_Optimización // LAB_3557</p>
                 <span className={`text-4xl font-black ${activeMode === 'tech' ? 'text-blue-600' : 'text-black'}`}>
                    {activeMode === 'tech' ? '-80%' : 'STATUS_NORMAL'}
                 </span>
              </div>

              <div className="space-y-10">
                 <div>
                    <div className="flex justify-between font-black text-sm uppercase mb-2 italic">
                       <span>Tiempo de Procesamiento Cases/Docs</span>
                       <span className={activeMode === 'tech' ? 'text-blue-600' : ''}>{data.time} Units</span>
                    </div>
                    <div className="h-10 bg-white border-4 border-black p-1 shadow-[4px_4px_0_0_#000]">
                       <div className={`h-full transition-all duration-1000 ${activeMode === 'tech' ? 'bg-blue-600' : 'bg-black'}`} style={{ width: `${data.time}%` }}></div>
                    </div>
                 </div>

                 <div>
                    <div className="flex justify-between font-black text-sm uppercase mb-2 italic">
                       <span>Costo Operativo / Esfuerzo</span>
                       <span className={activeMode === 'tech' ? 'text-blue-600' : ''}>{data.cost} Units</span>
                    </div>
                    <div className="h-10 bg-white border-4 border-black p-1 shadow-[4px_4px_0_0_#000]">
                       <div className={`h-full transition-all duration-1000 ${activeMode === 'tech' ? 'bg-cyan-500' : 'bg-zinc-400'}`} style={{ width: `${data.cost}%` }}></div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="mt-12 bg-black text-zinc-400 p-6 font-mono text-[9px] uppercase font-black leading-relaxed border-t-4 border-blue-600">
              <span className="text-blue-600 block mb-2 underline tracking-widest">REALIDAD_CURRICULAR_ELITE_38</span>
              OBLIGATORIEDAD_TECH: <span className="text-white">10.5%</span> // 
              OPTATIVA_DERECHO_DIGITAL: <span className="text-white">58.2%</span> // 
              INFORMATICA_JURIDICA: <span className="text-white">37.1%</span>
           </div>
        </div>
      </div>

       <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border-4 border-black p-4 flex flex-col items-center shadow-[6px_6px_0_0_#000]">
             <Cpu className="text-blue-600 mb-2" size={32} />
             <span className="text-2xl font-black">$15.7 T</span>
             <span className="font-mono text-[8px] uppercase font-black opacity-50">Aporte IA al PIB 2030</span>
          </div>
          <div className="bg-white border-4 border-black p-4 flex flex-col items-center shadow-[6px_6px_0_0_#3b82f6]">
             <Clock className="text-black mb-2" size={32} />
             <span className="text-2xl font-black">80% REDUX.</span>
             <span className="font-mono text-[8px] uppercase font-black opacity-50">Carga Laboral Reportada</span>
          </div>
          <div className="bg-black text-white border-4 border-black p-4 flex flex-col items-center shadow-[6px_6px_0_0_#000]">
             <ShieldAlert className="text-red-600 mb-2" size={32} />
             <span className="text-2xl font-black">90% BRECHA</span>
             <span className="font-mono text-[8px] uppercase font-black opacity-50">Sin Formación Obligatoria</span>
          </div>
       </div>
    </div>
  );
}
