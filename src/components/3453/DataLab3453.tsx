import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Eye, School, Activity, Biohazard, UserX, AlertTriangle, TrendingUp, Search } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3453 = () => {
  const riskStats = [
    { label: 'Venta Entorno Escolar', value: 62.3, icon: Eye, color: 'text-red-600' },
    { label: 'Consumo Avistado', value: 52, icon: AlertTriangle, color: 'text-amber-500' },
    { label: 'Uso Marijuana (INJUV)', value: 32.8, icon: Biohazard, color: 'text-zinc-400' },
  ];

  return (
    <div className="bg-[#FFFBEB] py-32 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative selection:bg-red-600 selection:text-white">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-red-600/[0.03] leading-none pointer-events-none select-none italic">
        DRUG_RISK_25
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div>
            <BrutalSticker text="QUALITATIVE_DIAGNOSTIC // RISK_ZONES // RPP" color="bg-red-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000] px-6 py-2 font-black" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-[0.85] text-black tracking-tighter">
              LAB <span className="text-red-600 italic underline decoration-8 decoration-black">RIESGOS</span><br/>
              <span className="text-4xl md:text-5xl font-mono uppercase bg-black text-white px-4 leading-normal mt-3">Docentes & Sustancias</span>
            </h2>
          </div>
          <div className="flex gap-6">
             <div className="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_#ef4444] rotate-[-2deg]">
                <ShieldAlert size={48} className="text-red-600" />
             </div>
             <div className="bg-black border-4 border-black p-5 shadow-[8px_8px_0_0_#fde047] rotate-[3deg]">
                <Activity size={48} className="text-yellow-400" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LA CIFRA CRÍTICA - VISIBILIDAD */}
          <div className="lg:col-span-12">
             <BrutalCard title="VISIBILIDAD_DEL_MICROTRÁFICO_Y_CONSUMO" color="bg-white" className="!border-[6px] shadow-[20px_20px_0_0_#000] p-0 overflow-hidden group">
                <div className="grid lg:grid-cols-2">
                   <div className="p-16 border-r-4 border-black flex flex-col justify-center items-center text-center bg-zinc-50 relative">
                     <div className="absolute top-0 left-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black italic">Environment_Scan</div>
                     <div className="flex items-baseline gap-2 mb-4 group-hover:scale-110 transition-transform">
                        <span className="text-[12rem] font-display font-black text-red-600 leading-none tracking-tighter italic">62</span>
                        <span className="text-6xl font-display font-black text-black">.3%</span>
                     </div>
                     <h4 className="font-display text-3xl uppercase font-black italic text-black leading-tight border-b-4 border-red-600 pb-2">Venta Escolar Visible</h4>
                     <p className="font-serif text-xl italic text-black/50 mt-6 max-w-sm">Estudiantes que reportan haber presenciado venta de drogas en las cercanías del plantel.</p>
                   </div>
                   
                   <div className="p-12 space-y-12 bg-black text-white flex flex-col justify-center">
                      <div className="flex items-center gap-6 group cursor-help">
                         <div className="w-20 h-20 bg-red-600 border-4 border-white flex items-center justify-center shrink-0 rotate-3 group-hover:rotate-0 transition-transform">
                            <AlertTriangle size={40} className="text-white" />
                         </div>
                         <div>
                            <span className="text-4xl font-display font-black text-white italic">52%</span>
                            <p className="font-mono text-[10px] uppercase font-black text-red-500 block tracking-widest leading-none mt-1">Consumo Directo</p>
                            <p className="text-xs font-serif italic text-zinc-400 mt-2">Alumnos que admiten haber visto consumo activo dentro o fuera del establecimiento.</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-6 group cursor-help">
                         <div className="w-20 h-20 bg-zinc-800 border-4 border-white flex items-center justify-center shrink-0 rotate-[-2deg] group-hover:rotate-0 transition-transform">
                            <Biohazard size={40} className="text-white" />
                         </div>
                         <div>
                            <span className="text-4xl font-display font-black text-white italic">32.8%</span>
                            <p className="font-mono text-[10px] uppercase font-black text-zinc-500 block tracking-widest leading-none mt-1">Uso de Marihuana</p>
                            <p className="text-xs font-serif italic text-zinc-400 mt-2">Prevalencia detectada por INJUV (2021) en población escolar secundaria.</p>
                         </div>
                      </div>
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* II. VOCES DOCENTES */}
          <div className="lg:col-span-7 flex flex-col gap-10">
             <BrutalCard title="EXPERIENCIAS_PEDAGÓGICAS" color="bg-red-50" className="!border-[6px] shadow-[20px_20px_0_0_#000] h-full">
                <div className="p-8">
                   <div className="flex items-center gap-4 mb-10 border-b-4 border-red-100 pb-6 italic">
                      <UserX className="text-red-600" />
                      <h4 className="font-display text-3xl uppercase font-black">Sensación de Vulnerabilidad</h4>
                   </div>
                   <p className="text-2xl font-serif italic text-red-950/80 leading-relaxed font-medium mb-12">
                     "El docente se siente inerme ante una problemática que desborda lo pedagógico y entra en terrenos de seguridad pública."
                   </p>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="bg-white border-2 border-red-200 p-6 shadow-[6px_6px_0_0_#ef4444]">
                         <span className="font-mono text-[9px] uppercase font-black opacity-30 block mb-2 leading-none">Barrera_01</span>
                         <h6 className="font-display text-xl uppercase font-black italic leading-none">Influencia Mediática</h6>
                         <p className="text-[10px] font-mono font-black uppercase text-red-900/50 mt-3 leading-tight italic">Publicidad de alcohol y normalización en medios digitales.</p>
                      </div>
                      <div className="bg-white border-2 border-red-200 p-6 shadow-[6px_6px_0_0_#ef4444]">
                         <span className="font-mono text-[9px] uppercase font-black opacity-30 block mb-2 leading-none">Barrera_02</span>
                         <h6 className="font-display text-xl uppercase font-black italic leading-none">Estrategias RRSS</h6>
                         <p className="text-[10px] font-mono font-black uppercase text-red-900/50 mt-3 leading-tight italic">Nuevos canales de distribución que escapan al control docente.</p>
                      </div>
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* III. DIAGNÓSTICO METODOLÓGICO */}
          <div className="lg:col-span-5 space-y-10">
             <div className="bg-black text-white p-12 border-4 border-red-600 shadow-[12px_12px_0_0_#000] rotate-1 group hover:rotate-0 transition-transform flex flex-col justify-center h-full">
                <Search className="mb-6 text-red-500" size={48} />
                <h4 className="font-display text-4xl uppercase font-black text-white italic mb-4 leading-none">Técnicas de Análisis</h4>
                <p className="font-serif text-lg text-zinc-400 mb-10 leading-snug">
                   Se utilizó el muestreo "bola de nieve" para contactar docentes en entornos de alta vulnerabilidad social.
                </p>
                <div className="flex gap-4">
                   <span className="bg-red-600 px-3 py-1 text-[10px] font-mono font-black uppercase">N_DOCENTES</span>
                   <span className="bg-zinc-800 px-3 py-1 text-[10px] font-mono font-black uppercase italic">QUALITATIVE</span>
                </div>
             </div>

             <div className="bg-white border-[6px] border-black p-12 shadow-[15px_15px_0_0_#ef4444] h-full flex flex-col justify-center relative overflow-hidden">
                <TrendingUp className="absolute -bottom-10 -left-10 text-red-600/10 group-hover:scale-150 transition-transform duration-700" size={150} />
                <h4 className="font-display text-3xl uppercase font-black text-black italic mb-4 leading-none">Inostroza-Fuentes</h4>
                <p className="font-serif text-xl italic text-black opacity-60 leading-relaxed font-medium">
                   "El abordaje del consumo requiere trascender el aula y coordinar con el Plan Nacional sobre Drogas."
                </p>
                <div className="mt-8 pt-6 border-t shadow-inner flex justify-between font-mono text-[9px] font-black uppercase italic opacity-30">
                   <span>RPP VOL.40 // 2025</span>
                   <span>ALGO_STAT_SYSTEM</span>
                </div>
             </div>
          </div>
        </div>

        <div className="mt-28 pt-12 border-t-8 border-black flex flex-col md:flex-row items-center justify-between gap-12 font-mono text-[10px] font-black uppercase opacity-60 italic">
           <div className="flex items-center gap-6">
              <School size={24} className="text-red-600" />
              <p>EXPERIENCIAS DOCENTES // CONSUMO DE DROGAS // RPP V.40 // 2025</p>
           </div>
           <div className="flex gap-4">
              <div className="bg-red-600 text-white px-3 py-1 shadow-[4px_4px_0_0_#000]">RISK_AUDIT</div>
              <div className="bg-black text-white px-3 py-1 shadow-[4px_4px_0_0_#ef4444]">VULNERABLE_POB</div>
           </div>
        </div>
      </div>
    </div>
  );
};
