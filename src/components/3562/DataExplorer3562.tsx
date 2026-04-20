import React, { useState } from 'react';
import { Baby, Home, AlertCircle, Heart, Zap } from 'lucide-react';

const CONFIG_DATA = {
  factors: [
    { id: 'guarderia', label: 'Guardería Universitaria', impact: -30 },
    { id: 'lactario', label: 'Lactarios Disponibles', impact: -15 },
    { id: 'flexibilidad', label: 'Flexibilidad Horaria', impact: -20 },
  ],
  baseInterruption: 67,
  pioneras: 92
};

export default function DataExplorer3562() {
  const [activeFactors, setActiveFactors] = useState<string[]>([]);

  const toggleFactor = (id: string) => {
    setActiveFactors(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const calculatedRisk = CONFIG_DATA.baseInterruption + activeFactors.reduce((acc, factorId) => {
    const factor = CONFIG_DATA.factors.find(f => f.id === factorId);
    return acc + (factor?.impact || 0);
  }, 0);

  const finalRisk = Math.max(5, calculatedRisk);

  return (
    <div className="w-full my-12 bg-white border-[10px] border-black p-8 shadow-[24px_24px_0_0_#ec4899] text-black">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* PANEL DE CONTROL: ACTIVACIÓN DE APOYOS */}
        <div className="space-y-10">
          <div className="bg-zinc-100 p-6 border-4 border-black">
            <h4 className="font-black uppercase mb-6 text-2xl italic flex items-center gap-3 text-pink-600">
              <Baby size={28} /> Factores de Apoyo
            </h4>
            <div className="space-y-4">
              {CONFIG_DATA.factors.map((f) => (
                <button
                  key={f.id}
                  onClick={() => toggleFactor(f.id)}
                  className={`w-full p-6 border-4 border-black font-black uppercase text-left transition-all shadow-[8px_8px_0_0_#999] active:shadow-none flex justify-between items-center ${activeFactors.includes(f.id) ? 'bg-[#ec4899] text-white shadow-black' : 'bg-white text-black hover:bg-zinc-200'}`}
                >
                  <span className="text-lg">{f.label}</span>
                  <span className="text-xs font-mono">{activeFactors.includes(f.id) ? 'ACTIVO' : 'OFF'}</span>
                </button>
              ))}
            </div>
            <p className="mt-6 text-[10px] font-mono uppercase font-black opacity-40 leading-tight">
              * Active los factores para ver cómo reduciría el riesgo de interrupción académica del 67%.
            </p>
          </div>

          <div className="bg-black text-white p-6 border-4 border-black shadow-[10px_10px_0_0_#ec4899] rotate-[-1deg]">
             <div className="flex items-center gap-3 mb-4">
                <Home className="text-pink-400" />
                <span className="tracking-widest uppercase font-black not-italic text-xs">ESTADO_SOCIAL:</span>
             </div>
             <p className="text-2xl font-black uppercase italic leading-none">{CONFIG_DATA.pioneras}% Pioneras</p>
             <p className="text-[10px] mt-2 font-mono opacity-50 uppercase">Son las primeras de su familia en la universidad.</p>
          </div>
        </div>

        {/* PANEL DE RESULTADOS: PROBABILIDAD DE EXITO */}
        <div className="bg-zinc-50 border-8 border-black p-10 flex flex-col justify-between">
           <div>
              <div className="flex justify-between items-start mb-12 border-b-8 border-black pb-6">
                 <div className="text-left">
                    <p className="font-mono text-xs uppercase font-black opacity-40 italic">Lab_Maternidad // REF.3562</p>
                    <h5 className="text-4xl font-black uppercase italic text-black leading-none mt-2">Riesgo de Interrupción</h5>
                 </div>
                 <div className="text-right">
                    <p className={`text-7xl font-black leading-none transition-colors duration-500 ${finalRisk > 40 ? 'text-red-600' : 'text-emerald-500'}`}>
                       {finalRisk}%
                    </p>
                    <p className="font-mono text-[10px] font-black uppercase text-black mt-2 tracking-widest">STATUS_ACADÉMICO</p>
                 </div>
              </div>

              <div className="space-y-12">
                 <div>
                    <div className="flex justify-between font-black text-sm uppercase mb-2 text-black italic">
                       <span>Probabilidad de Deserción</span>
                       <span className="text-black">{finalRisk}%</span>
                    </div>
                    <div className="h-12 bg-white border-4 border-black p-1 shadow-[4px_4px_0_0_#000]">
                       <div className={`h-full transition-all duration-700 ${finalRisk > 40 ? 'bg-red-600' : 'bg-emerald-500'}`} style={{ width: `${finalRisk}%` }}></div>
                    </div>
                 </div>

                 <div className={`p-8 border-4 border-black shadow-[10px_10px_0_0_#000] border-l-[15px] transition-colors duration-500 ${finalRisk > 40 ? 'bg-red-50 border-l-red-600' : 'bg-emerald-50 border-l-emerald-500'}`}>
                    <div className="flex items-center gap-3 mb-4">
                       <AlertCircle size={24} className={finalRisk > 40 ? 'text-red-600' : 'text-emerald-600'} />
                       <span className="tracking-widest uppercase font-black not-italic text-sm">PROYECCIÓN_ESTUDIO:</span>
                    </div>
                    <p className="text-black font-medium text-2xl leading-tight italic">
                       {finalRisk > 40 
                        ? '"La ausencia de políticas forzó a 8 de cada 12 estudiantes a pausar sus sueños."' 
                        : '"Con soporte material, la maternidad se convierte en el mayor motor de resiliencia."'}
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </div>
      
       <div className="mt-12 bg-zinc-900 text-white p-4 font-mono text-[10px] uppercase font-black flex justify-between tracking-[0.3em] italic">
          <span className="flex items-center gap-2"><Heart size={12} className="text-pink-500 animate-pulse" /> SIMULADOR_SOPORTE_3562</span>
          <span className="hidden md:block">RPP_DATA_LAB // NO_AL_ESTIGMA // SÍ_A_LOS_CUIDADOS</span>
          <Zap size={14} className="text-yellow-400" />
       </div>
    </div>
  );
}
