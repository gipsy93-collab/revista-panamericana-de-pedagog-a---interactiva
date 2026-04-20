import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Heart, Activity, Search, ClipboardList, Thermometer, Globe2, BarChart3, AlertCircle } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3508 = () => {
  const comparisonStats = [
    { label: 'Ecuador: Prioridad Currículo', value: 80, color: 'bg-red-600', icon: ClipboardList },
    { label: 'España: Flexibilidad Social', value: 65, color: 'bg-violet-600', icon: Heart },
    { label: 'Sinergia Académica', value: 10, color: 'bg-black', icon: Activity },
  ];

  const profileData = [
    { label: 'Muestra Total', value: 10, suffix: ' Docentes' },
    { label: 'Experiencia Mín.', value: 3, suffix: ' Años' },
    { label: 'Diplomatura', value: 60, suffix: '%' },
    { label: 'Centros Públicos', value: 70, suffix: '%' },
  ];

  return (
    <div className="bg-[#FAF5FF] py-32 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 font-mono text-[180px] font-black text-violet-600/[0.05] leading-none pointer-events-none select-none italic">
        TEA_ESP_ECU
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-24">
          <div>
            <BrutalSticker text="QUALITATIVE_COMPARISON // ESP-ECU // RPP 41" color="bg-violet-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#ec4899] px-6 py-2 font-black" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-black tracking-tight underline-offset-[-10px] decoration-8 decoration-pink-500 underline">
              LAB <span className="text-violet-700">ACTITUDES</span><br/>
              <span className="text-4xl md:text-5xl font-mono uppercase bg-black text-white px-4 leading-normal italic mt-4">Inclusión & Espectro</span>
            </h2>
          </div>
          <div className="flex gap-6">
             <div className="bg-white border-4 border-black p-5 shadow-[8px_8px_0_0_#9333ea] rotate-2">
                <BrainCircuit size={48} className="text-violet-700" />
             </div>
             <div className="bg-black border-4 border-black p-5 shadow-[8px_8px_0_0_#ec4899] rotate-[-1deg]">
                <Activity size={48} className="text-white" />
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* I. LA CIFRA CRÍTICA - RIGIDEZ ECUADOR */}
           <div className="lg:col-span-5 relative">
            <BrutalCard color="bg-white" className="!border-[8px] border-black shadow-[20px_20px_0_0_#000] h-full flex flex-col justify-center text-center p-12 relative overflow-visible selection:bg-red-600 selection:text-white">
               <div className="absolute top-[-30px] left-[-50px] bg-red-600 text-white px-10 py-4 font-mono text-xl font-black uppercase rotate-[-8deg] shadow-[8px_8px_0_0_#000] z-50 border-4 border-black">ECUADOR_ALERTA</div>
               
               <h3 className="text-2xl font-display uppercase font-black mb-12 border-b-4 border-black pb-4 pt-16">
                 INDICADOR DE <span className="text-red-600 underline decoration-4 underline-offset-4">RIGIDEZ</span> CURRICULAR
               </h3>

               <span className="font-mono text-[10px] font-black uppercase opacity-30 mb-8 tracking-[0.4em] italic leading-tight">PREFERENCIA_POR_NORMATIVA</span>
               <div className="flex items-baseline justify-center gap-8 mb-10 group">
                  <p className="text-9xl md:text-[14rem] font-display font-black text-red-600 group-hover:scale-110 transition-transform leading-none tracking-tighter italic" 
                     style={{ WebkitTextStroke: 'calc(var(--brutal-stroke-width) * 2.5) black' }}>80</p>
                  <p className="text-7xl font-display font-black text-black" style={{ WebkitTextStroke: 'var(--brutal-stroke-width) black' }}>%</p>
               </div>
               <p className="text-sm font-mono font-black uppercase border-t-4 border-black pt-10 leading-relaxed italic">
                 De los docentes ecuatorianos priorizan el currículo oficial sobre las adaptaciones para alumnado TEA.
               </p>
            </BrutalCard>
          </div>

          {/* II. COMPARATIVA TRANS-CONTEXTO */}
          <div className="lg:col-span-7">
             <BrutalCard title="PERCEPCIÓN_COMPARADA: ESPAÑA vs ECUADOR" color="bg-violet-950" className="text-white !border-[8px] shadow-[25px_25px_0_0_#ec4899] relative overflow-hidden group h-full">
                <Search size={300} className="absolute -bottom-20 -right-20 text-white/[0.03] rotate-12" />
                <div className="relative z-10 py-8 p-6 space-y-12">
                   <p className="text-2xl font-serif italic text-white/80 max-w-4xl font-medium leading-[1.3] border-l-8 border-violet-500 pl-10 mb-16">
                     "La actitud inclusiva depende de prejuicios emocionales más que de la formación formal del docente."
                   </p>
                   <div className="space-y-12 mb-10">
                      {comparisonStats.map((s, idx) => (
                        <div key={idx} className="group cursor-help">
                           <div className="flex justify-between items-end mb-4">
                              <span className="font-display text-3xl uppercase italic font-black text-white flex gap-4">
                                 <s.icon size={28} className="text-pink-400 group-hover:text-white transition-colors" />
                                 {s.label}
                              </span>
                              <span className="font-mono text-3xl font-black text-pink-400 border-b-4 border-pink-500">{s.value}%</span>
                           </div>
                           <div className="h-5 w-full bg-black border-2 border-white/10 group-hover:border-pink-500 overflow-hidden relative">
                              <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${s.value}%` }} 
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: 'circOut' }}
                                className={`h-full ${s.color} relative overflow-hidden`}
                              >
                                 <div className="absolute inset-0 bg-white/20 animate-pulse" />
                              </motion.div>
                           </div>
                        </div>
                      ))}
                   </div>
                   <div className="flex gap-4 font-mono text-[9px] font-black uppercase opacity-30 italic mt-8 border-t-2 border-white/5 pt-6 tracking-widest">
                     <span>ESTADÍSTICA CUALITATIVA</span>
                     <span>|</span>
                     <span>QUAL_DATA v.1</span>
                   </div>
                </div>
             </BrutalCard>
          </div>

          {/* III. PERFIL DE LA MUESTRA */}
          <div className="lg:col-span-12 mt-12">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                {profileData.map((d, i) => (
                  <div key={i} className="bg-white border-4 border-black p-10 shadow-[10px_10px_0_0_#000] rotate-1 group hover:-rotate-1 transition-transform border-t-8 border-t-violet-600">
                     <span className="font-mono text-[10px] font-black uppercase text-zinc-400 mb-2 block tracking-widest">{d.label}</span>
                     <div className="text-6xl font-display font-black text-black group-hover:text-violet-600 transition-colors leading-none italic mb-4">
                       {d.value}{d.suffix}
                     </div>
                     <div className="h-2 w-full bg-zinc-50 border-2 border-black/5">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: '80%' }}
                         viewport={{ once: true }}
                         className="h-full bg-violet-600" 
                       />
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* IV. HALLAZGOS Y BARRERAS */}
          <div className="lg:col-span-12 mt-12 bg-zinc-950 p-16 border-8 border-black shadow-[20px_20px_0_0_#8b5cf6] text-white relative group overflow-hidden">
             <div className="absolute top-0 right-0 p-8 font-display text-[150px] font-black opacity-[0.03] italic leading-none pointer-events-none select-none">TEA_FIND</div>
             <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
                <div className="lg:w-2/5 flex flex-col items-center justify-center text-center">
                   <div className="w-32 h-32 bg-pink-500 border-4 border-black rounded-full flex items-center justify-center text-black mb-8 rotate-12 group-hover:rotate-0 transition-transform">
                      <AlertCircle size={64} />
                   </div>
                   <h5 className="font-display text-4xl leading-none uppercase italic text-pink-500 mb-4">Barrera Crítica</h5>
                   <p className="font-serif text-2xl italic text-white opacity-80 leading-snug">
                     "La escasez de recursos materiales y humanos especializada genera vulnerabilidad en el docente."
                   </p>
                </div>
                <div className="lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="bg-white/5 border-2 border-violet-500/30 p-10 hover:bg-white/10 transition-colors flex flex-col justify-center">
                      <Thermometer className="mb-6 text-violet-400" size={32} />
                      <h6 className="font-display text-2xl uppercase mb-3">Termómetro Actitudinal</h6>
                      <p className="text-sm font-serif italic text-zinc-400 leading-relaxed">Las creencias previas son más predictivas que la formación académica.</p>
                   </div>
                   <div className="bg-white/5 border-2 border-violet-500/30 p-10 hover:bg-white/10 transition-colors flex flex-col justify-center rotate-1">
                      <Globe2 className="mb-6 text-pink-400" size={32} />
                      <h6 className="font-display text-2xl uppercase mb-3">Contexto Regional</h6>
                      <p className="text-sm font-serif italic text-zinc-400 leading-relaxed">Tensión constante entre discurso inclusivo y práctica basada en la "gravedad" del TEA.</p>
                   </div>
                </div>
             </div>

             <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
                <BarChart3 size={32} />
                <div className="flex gap-10 font-mono text-[9px] font-black uppercase italic tracking-[0.3em]">
                   <span>ESPAÑA - ECUADOR COMPARATIVE</span>
                   <span>|</span>
                   <span>GALLARDO-HERRERÍAS_2026</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
