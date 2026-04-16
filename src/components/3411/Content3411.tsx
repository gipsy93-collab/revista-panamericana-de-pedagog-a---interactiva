import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Monitor, Users, Sparkles, Activity, AlertTriangle, ChevronRight, Binary } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { PREDICTORS, LIMITATIONS } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Monitor,
  Users,
};

export default function Content3411() {
  const [promedio, setPromedio] = useState<number>(8.0);
  const [sexo, setSexo] = useState<'mujer' | 'hombre'>('mujer');
  const [computadora, setComputadora] = useState<boolean>(false);

  const probabilidad = useMemo(() => {
    let logit = -4.842 + 0.714 * promedio;
    if (sexo === 'hombre') logit -= 0.661;
    if (computadora) logit -= 0.919;
    const p = 1 / (1 + Math.exp(-logit));
    return (p * 100).toFixed(1);
  }, [promedio, sexo, computadora]);

  return (
    <div className="bg-[#0F172A] text-slate-50">
      {/* Predictores */}
      <WaveSection topColor="#0F172A" bottomColor="#1e293b" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <BrutalSticker text="I. VARIABLES" color="bg-white" className="text-black mb-8 !rotate-0 shadow-[6px_6px_0_0_#F4A261]" />
            <PremiumTitle subtitle="PREDICTORES DE PERMANENCIA" className="text-white">
              Los Tres Ejes Críticos
            </PremiumTitle>
            <p className="mt-8 text-2xl text-slate-400 max-w-3xl">
              El modelo de regresión logística identificó estas variables como las únicas con significancia estadística real:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {PREDICTORS.map((p, i) => {
              const Icon = iconMap[p.icon];
              return (
                <CinematicCard
                  key={i}
                  color="bg-[#1e293b]"
                  title={`PREDICTOR_0${i+1}`}
                  className="shadow-[15px_15px_0_0_#000] border-zinc-700 group hover:border-[#F4A261] transition-colors"
                >
                  <div className="w-20 h-20 bg-zinc-800 border-4 border-black flex items-center justify-center text-4xl mb-8 group-hover:rotate-12 transition-transform">
                    <Icon className={p.color} size={40} />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase mb-4 leading-none">{p.title}</h3>
                  <p className={`text-7xl font-display font-black mb-6 ${p.color} drop-shadow-[4px_4px_0_#000]`}>{p.value}</p>
                  <p className="text-lg font-serif italic text-slate-400 leading-snug" dangerouslySetInnerHTML={{ __html: p.description }} />
                </CinematicCard>
              );
            })}
          </div>
        </div>
      </WaveSection>

      {/* Simulador Interactivo */}
      <WaveSection topColor="#1e293b" bottomColor="#0F172A" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. SIMULACIÓN" color="bg-[#F4A261]" className="text-black mb-10 !rotate-0" />
            <PremiumTitle className="text-white items-center" subtitle="MODELO DETERMINISTA_">
              Simulador de Probabilidad
            </PremiumTitle>
          </div>

          <div className="bg-black border-[12px] border-zinc-800 p-10 md:p-20 shadow-[30px_30px_0_0_#F4A261] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black text-white group-hover:opacity-100 transition-opacity">PROBABILITY_ENGINE_3411</div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-7 space-y-12">
                <div className="bg-zinc-900 p-8 border-4 border-zinc-700 rotate-[-1deg]">
                  <label className="block text-xl font-display uppercase tracking-widest font-black mb-6 text-[#F4A261]">1. Promedio de Secundaria</label>
                  <input
                    type="range"
                    min={5}
                    max={10}
                    step={0.1}
                    value={promedio}
                    onChange={(e) => setPromedio(parseFloat(e.target.value))}
                    className="w-full h-8 bg-zinc-800 appearance-none cursor-pointer accent-[#F4A261] border-4 border-black"
                  />
                  <div className="text-right text-7xl font-display font-black mt-4 text-white italic">{promedio.toFixed(1)}</div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-zinc-900 p-8 border-4 border-zinc-700">
                    <label className="block text-sm font-display uppercase tracking-widest font-black mb-6 text-blue-400 italic">2. Dimensión de Sexo</label>
                    <div className="flex gap-4">
                      {(['mujer', 'hombre'] as const).map((s) => (
                        <button
                          key={s}
                          onClick={() => setSexo(s)}
                          className={`flex-1 py-4 border-4 border-black font-display uppercase text-xs font-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
                            sexo === s
                              ? 'bg-blue-600 text-white'
                              : 'bg-zinc-800 text-slate-400 hover:bg-zinc-700'
                          }`}
                        >
                          {s === 'mujer' ? 'Femenino' : 'Masculino'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-zinc-900 p-8 border-4 border-zinc-700">
                    <label className="block text-sm font-display uppercase tracking-widest font-black mb-6 text-rose-500 italic">3. Acceso Tecnológico</label>
                    <div className="flex gap-4">
                      {[
                        { label: 'Sin PC', val: false },
                        { label: 'Con PC', val: true },
                      ].map((c) => (
                        <button
                          key={c.label}
                          onClick={() => setComputadora(c.val)}
                          className={`flex-1 py-4 border-4 border-black font-display uppercase text-xs font-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
                            computadora === c.val
                              ? 'bg-rose-600 text-white'
                              : 'bg-zinc-800 text-slate-400 hover:bg-zinc-700'
                          }`}
                        >
                          {c.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 text-center">
                <div className="bg-zinc-900 border-[16px] border-[#F4A261] p-16 rotate-2 shadow-[20px_20px_0_0_#000] relative">
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-[#F4A261] px-6 py-2 border-4 border-[#F4A261] font-black uppercase text-[10px] tracking-[0.3em] italic">RESULT_PROJECTION</div>
                  <p className="text-sm uppercase tracking-[0.5em] text-slate-500 mb-6 font-black">Probabilidad de Permanencia</p>
                  <motion.p
                    key={probabilidad}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-[10rem] md:text-[14rem] font-display font-black text-white italic leading-none drop-shadow-[15px_15px_0_#F4A261]"
                    style={{ WebkitTextStroke: '2px black' }}
                  >
                    {probabilidad}<span className="text-4xl not-italic ml-2">%</span>
                  </motion.p>
                  <div className="mt-12 pt-8 border-t-4 border-zinc-800 text-sm font-mono font-black italic text-slate-500 space-y-2">
                    <p>Cohorte AVG: 71.8%</p>
                    <p className="text-[#F4A261]">Impacto Explícito: 8.9%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 bg-zinc-900/50 border-4 border-zinc-800 border-dashed p-8 flex items-start gap-8">
              <AlertTriangle className="text-[#F4A261] w-12 h-12 shrink-0" />
              <p className="font-mono text-sm uppercase font-black text-slate-400 italic leading-relaxed">
                <strong>Aviso Crítico:</strong> Este simulador es un ejercicio descriptivo-matemático basado exclusivamente en los datos del CETis 74. No es una predicción determinista de vidas individuales, sino una representación de tendencias agregadas.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* El 91% Desconocido */}
      <WaveSection topColor="#0F172A" bottomColor="#0F172A" variant="wavy">
        <div className="max-w-6xl mx-auto py-24 px-6 md:px-0">
          <div className="flex flex-col lg:flex-row gap-24 items-center mb-32">
            <div className="lg:w-1/2">
               <BrutalSticker text="III. EL VACÍO" color="bg-white" className="text-black mb-10 !rotate-0" />
               <PremiumTitle className="text-white" subtitle="BEYOND THE NUMBERS">
                 El 91.1% Desconocido
               </PremiumTitle>
               <p className="mt-10 text-3xl font-serif leading-relaxed italic text-slate-400">
                 "El modelo explica menos del 9% de por qué los estudiantes se van. El resto sigue siendo un territorio inexplorado por la estadística clásica."
               </p>
            </div>
            
            <div className="lg:w-1/2 relative flex justify-center">
              <div className="absolute inset-0 bg-blue-600/20 blur-[100px] -z-10" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative w-[500px] h-[500px]"
              >
                <div
                  className="w-full h-full rounded-full border-[20px] border-zinc-800 shadow-[20px_20px_0_0_#000]"
                  style={{
                    background: `conic-gradient(#F4A261 0deg ${0.089 * 360}deg, #1e293b ${0.089 * 360}deg 360deg)`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[12rem] font-display font-black text-white/10 italic">?</span>
                </div>
                
                {/* Etiquetas flotantes neobrutalistas */}
                <div className="absolute top-0 right-0 bg-zinc-900 border-4 border-white p-4 font-display font-black uppercase text-xl text-[#F4A261] rotate-12 shadow-[8px_8px_0_0_#000]">
                  8.9% EXPLICADO
                </div>
                <div className="absolute bottom-10 left-[-40px] bg-zinc-900 border-4 border-white p-6 font-display font-black uppercase text-3xl text-white -rotate-6 shadow-[8px_8px_0_0_#000]">
                  91.1%_INCOGNITA_
                </div>
              </motion.div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <CinematicCard color="bg-zinc-900" title="VARIABLES_OMITIDAS" className="border-zinc-700 shadow-[15px_15px_0_0_#F4A261]">
              <ul className="text-2xl font-display uppercase font-black text-white italic space-y-6">
                 {["Ingreso Familiar", "Trabajo Juvenil", "Clima de Aula", "Liderazgo Docente"].map((v, i) => (
                   <li key={i} className="flex gap-6 border-b-2 border-zinc-800 pb-4">
                     <span className="text-[#F4A261]">!</span> {v}
                   </li>
                 ))}
              </ul>
            </CinematicCard>
            <CinematicCard color="bg-zinc-900" title="VACÍOS_CONTEXTO" className="border-zinc-700 shadow-[15px_15px_0_0_#3b82f6]">
              <ul className="text-xl font-serif italic text-slate-300 space-y-8">
                 {[
                   "¿Para qué usan realmente la computadora?",
                   "¿Cuál es el peso de la violencia en el entorno?",
                   "¿Qué expectativas proyecta la familia?",
                   "¿Cómo impactó la post-pandemia en la salud mental?"
                 ].map((v, i) => (
                   <li key={i} className="flex gap-6">
                     <span className="text-blue-500 font-black">?</span> "{v}"
                   </li>
                 ))}
              </ul>
            </CinematicCard>
          </div>
        </div>
      </WaveSection>

      {/* Limitaciones */}
      <section className="bg-white text-black py-40 border-y-[24px] border-black">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
          <div className="mb-20">
            <BrutalSticker text="IV. LIMITES" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle subtitle="ALCANCE DEL ESTUDIO">Limitaciones Críticas</PremiumTitle>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              {LIMITATIONS.slice(0, 3).map((l, i) => (
                <div key={i} className="flex gap-10 items-start group">
                  <div className="w-16 h-16 bg-black text-white shrink-0 flex items-center justify-center text-4xl font-display font-black group-hover:rotate-12 transition-transform">
                    {i+1}
                  </div>
                  <p className="text-3xl font-serif italic leading-tight text-black/80">"{l}"</p>
                </div>
              ))}
            </div>
            <div className="bg-[#0F172A] p-12 border-8 border-black text-white shadow-[25px_25px_0_0_#F4A261] rotate-1">
               <h3 className="font-display text-4xl uppercase font-black mb-8 border-b-4 border-[#F4A261] pb-4 inline-block italic">Reflexión_Final_</h3>
               <p className="text-5xl md:text-7xl font-display uppercase font-black italic tracking-tighter leading-[0.85] mb-12">
                 ¿Estamos diseñando escuelas para <span className="text-[#F4A261]">retener</span> estudiantes...
               </p>
               <motion.p
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="text-6xl md:text-[10rem] font-display uppercase font-black italic tracking-tighter leading-none text-rose-600"
               >
                 ...o para filtrarlos?
               </motion.p>
               <div className="mt-20 flex gap-4">
                 <div className="h-6 w-1/3 bg-[#F4A261]" />
                 <div className="h-6 w-2/3 bg-white" />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
