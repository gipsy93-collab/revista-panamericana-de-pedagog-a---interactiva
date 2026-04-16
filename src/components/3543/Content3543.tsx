import { motion } from 'motion/react';
import {
  FileText,
  PenTool,
  BarChart3,
  ClipboardList,
  MessageSquare,
  AlertTriangle,
  CheckCircle2,
  Quote,
  Activity,
  Zap,
  BookOpen,
  Target,
  Users,
  Sparkles
} from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export default function Content3543() {
  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN Y OBJETIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#fef3c7" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#9a3412]" />
               <PremiumTitle subtitle="DESAFÍOS PEDAGÓGICOS">El Gran Hallazgo</PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#ea580c] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-[1.1] relative z-10">
                   "{ARTICLE_DATA.centralFinding}"
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Target className="text-orange-600" /> Objetivo_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    {ARTICLE_DATA.introduction.objectives[0]}
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="PROBLEMATICA" icon={AlertTriangle} className="shadow-[10px_10px_0_0_#ea580c]">
                 <p className="text-lg font-bold leading-snug">"{ARTICLE_DATA.introduction.problem}"</p>
              </CinematicCard>
              
              <div className="bg-orange-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2">
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">CONTEXTO_ACADÉMICO</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   {ARTICLE_DATA.introduction.context}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: METODOLOGÍA */}
      <WaveSection topColor="#fef3c7" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. METODOLOGÍA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="DISEÑO DE INVESTIGACIÓN">Rigor de Transición</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
             <div className="space-y-12">
                <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#ea580c] relative">
                   <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">METHOD_SPEC</div>
                   <h3 className="font-display text-4xl uppercase font-black mb-10 italic underline decoration-orange-600 decoration-8">Tipo_Estudio_</h3>
                   <p className="text-4xl font-display uppercase font-black tracking-tighter text-black/80">{ARTICLE_DATA.methodology.type}</p>
                   <div className="mt-10 pt-8 border-t-4 border-zinc-100">
                      <h4 className="font-mono text-[10px] uppercase font-black mb-4 opacity-40">INSTRUMENTOS_APLICADOS</h4>
                      <div className="flex flex-wrap gap-4">
                        {ARTICLE_DATA.methodology.instruments.map((ins, i) => (
                          <span key={i} className="bg-black text-white px-4 py-2 font-display text-[10px] font-black uppercase tracking-widest italic">{ins}</span>
                        ))}
                      </div>
                   </div>
                </div>
                
                <CinematicCard color="bg-zinc-50" title="MUESTRA_DETALLE" icon={Users} className="shadow-[15px_15px_0_0_#000]">
                   <p className="text-xl font-serif italic font-medium leading-relaxed">
                     "{ARTICLE_DATA.methodology.sample.total} docentes distribuidos en 4 especialidades críticas del área de formación docente."
                   </p>
                </CinematicCard>
             </div>

             <div className="bg-zinc-900 border-[12px] border-black p-12 md:p-20 shadow-[30px_30px_0_0_#ea580c] rotate-1">
                <h3 className="text-orange-500 font-display text-5xl font-black italic uppercase mb-12 leading-none">Especialidades_</h3>
                <div className="grid grid-cols-2 gap-10">
                   {ARTICLE_DATA.methodology.sample.specialties.map((s, i) => (
                     <div key={i} className="flex flex-col group">
                        <div className="text-7xl font-display font-black text-white group-hover:text-orange-600 transition-colors leading-none mb-2">{s.count}</div>
                        <span className="font-mono text-[10px] uppercase font-black text-slate-500 tracking-widest">{s.name}</span>
                     </div>
                   ))}
                </div>
                <div className="mt-16 bg-white text-black p-8 border-4 border-black relative group overflow-hidden">
                   <Sparkles className="absolute -bottom-4 -right-4 w-20 h-20 opacity-10 group-hover:scale-150 transition-transform" />
                   <p className="text-2xl font-display font-black uppercase leading-none italic mb-4">N=14</p>
                   <p className="font-mono text-[9px] uppercase font-black opacity-40">Total Participantes Únicos_</p>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: FRECUENCIA Y CONCEPTUALIZACIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f9ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20">
             <div className="lg:col-span-12">
                <BrutalSticker text="III. DINÁMICAS" color="bg-orange-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#000]" />
                <PremiumTitle subtitle="CULTURA DE ESCRITURA">Conceptualización & Frecuencias</PremiumTitle>
             </div>

             <div className="lg:col-span-7 space-y-12">
                <div className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#000] rotate-[-1deg]">
                   <h3 className="font-display text-3xl uppercase font-black mb-10 italic">Frecuencia_Asignación</h3>
                   <div className="space-y-8">
                     {ARTICLE_DATA.frequencyData.map((row, i) => (
                       <div key={i} className="group">
                          <div className="flex justify-between items-end mb-2">
                             <span className="font-display text-xl font-black italic">{row.specialty}</span>
                             <span className="font-mono text-[10px] font-black italic opacity-40">M={row.multiple} VECES</span>
                          </div>
                          <div className="h-10 bg-zinc-100 border-4 border-black p-1 flex">
                             <div className="h-full bg-orange-600 border-r-4 border-black transition-all group-hover:bg-black" style={{ width: `${(row.multiple/3)*100}%` }} />
                          </div>
                       </div>
                     ))}
                   </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                   <div className="bg-zinc-950 text-white p-8 border-4 border-black shadow-[10px_10px_0_0_#ea580c] rotate-1">
                      <h4 className="font-display text-xl uppercase font-black mb-6 text-teal-400 italic">Textos_Cortos</h4>
                      <ul className="space-y-3">
                        {ARTICLE_DATA.shortTexts.map((t, i) => (
                          <li key={i} className="font-mono text-[9px] uppercase font-black italic border-b border-zinc-800 pb-2 flex gap-4">
                             <span className="text-teal-400">▶</span> {t}
                          </li>
                        ))}
                      </ul>
                   </div>
                   <div className="bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_#000] -rotate-1">
                      <h4 className="font-display text-xl uppercase font-black mb-6 text-blue-600 italic">Extensión_Larga</h4>
                      <ul className="space-y-3">
                        {ARTICLE_DATA.longTexts.map((t, i) => (
                          <li key={i} className="font-mono text-[9px] uppercase font-black italic border-b border-zinc-100 pb-2 flex gap-4">
                             <span className="text-blue-600">▶</span> {t}
                          </li>
                        ))}
                      </ul>
                   </div>
                </div>
             </div>

             <div className="lg:col-span-5 space-y-10">
                <h3 className="font-display text-3xl uppercase font-black italic border-b-8 border-black pb-4 mb-2">Definiendo_Escritura_</h3>
                {ARTICLE_DATA.conceptualization.slice(0, 4).map((c, i) => (
                  <div key={i} className="bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] rotate-1 hover:-rotate-1 transition-transform cursor-pointer group">
                     <div className="w-10 h-10 bg-black text-white flex items-center justify-center font-display text-xl mb-4 group-hover:bg-orange-600 transition-colors">{i+1}</div>
                     <p className="text-2xl font-serif italic text-black/80 font-medium">"{c}"</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: EVALUACIÓN Y BRECHA */}
      <WaveSection topColor="#f0f9ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-24">
              <BrutalSticker text="IV. PARADOJAS" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
              <PremiumTitle className="items-center" subtitle="IMPORTANCIA VS PRÁCTICA">La Brecha del Acompañamiento</PremiumTitle>
           </div>

           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="bg-zinc-900 text-white p-12 md:p-24 border-[12px] border-black shadow-[40px_40px_0_0_#ea580c] rotate-1 relative group overflow-hidden">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <div className="text-[12rem] font-display font-black leading-none italic text-orange-600 drop-shadow-[5px_5px_0_#fff]">2/14</div>
                 <div className="h-4 w-48 bg-white my-10" />
                 <p className="text-4xl font-display uppercase font-black tracking-tighter leading-tight italic">
                   Solo 2 de 14 docentes acompañan sistemáticamente el proceso de escritura.
                 </p>
              </div>

              <div className="space-y-12">
                 <CinematicCard color="bg-white" title="CRITERIOS_AVANZADOS" icon={CheckCircle2} className="shadow-[15px_15px_0_0_#000]">
                    <p className="font-serif italic text-2xl text-black/70 mb-8 font-medium">
                      "Coherencia, concisión, claridad y argumentación: El lenguaje de la retroalimentación técnica."
                    </p>
                    <div className="flex flex-wrap gap-3">
                       {ARTICLE_DATA.evaluation.advancedCriteria.map((c, i) => (
                         <span key={i} className="bg-orange-100 text-orange-900 border-2 border-black px-4 py-2 font-display text-xs font-black uppercase italic">{c}</span>
                       ))}
                    </div>
                 </CinematicCard>

                 <div className="bg-zinc-50 border-8 border-black p-10 shadow-[20px_20px_0_0_#2563eb] -rotate-1">
                    <h4 className="font-display text-2xl uppercase font-black mb-6 italic">Barreras_Identificadas_</h4>
                    <ul className="space-y-6">
                       {ARTICLE_DATA.gapData.reasons.map((r, i) => (
                         <li key={i} className="flex items-center gap-6 font-display uppercase font-black text-xs italic tracking-tighter">
                            <AlertTriangle className="text-rose-600 shrink-0" size={24} /> {r}
                         </li>
                       ))}
                    </ul>
                 </div>
              </div>
           </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: VOCES DEL AULA */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
           <div className="text-center mb-24">
              <BrutalSticker text="V. NARRATIVAS" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#ea580c]" />
              <PremiumTitle className="items-center" subtitle="TESTIMONIOS DIRECTOS">Voces del Aula</PremiumTitle>
           </div>

           <div className="grid md:grid-cols-3 gap-12 mb-32">
              {ARTICLE_DATA.quotes.map((q, i) => (
                <BrutalQuote key={i} className={`text-xl shadow-[15px_15px_0_0_#000] rotate-${i % 2 === 0 ? '1' : '-1'}`}>
                   "{q.text}"
                   <div className="mt-8 text-right font-display uppercase font-black text-[10px] text-orange-600">_ {q.author}</div>
                </BrutalQuote>
              ))}
           </div>

           <div className="grid lg:grid-cols-2 gap-20 items-start">
              <div>
                 <BrutalSticker text="VI. CONCLUSIONES" color="bg-black" className="text-white mb-8 !rotate-0" />
                 <div className="space-y-8">
                    {ARTICLE_DATA.conclusions.map((c, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-12 h-12 bg-white border-4 border-black text-black shrink-0 flex items-center justify-center font-display text-3xl font-black group-hover:bg-orange-600 group-hover:text-white transition-all italic">{i+1}</div>
                         <p className="text-2xl font-serif italic text-black/80 font-medium leading-tight">"{c}"</p>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-zinc-950 text-white p-12 md:p-20 border-[12px] border-black shadow-[30px_30px_0_0_#ea580c] rotate-1 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black italic">LIMITACIONES_REPORT_3543</div>
                 <h3 className="font-display text-4xl uppercase font-black text-rose-600 italic mb-12">Áreas_Ciegas_</h3>
                 <ul className="space-y-6">
                    {ARTICLE_DATA.limitations.map((l, i) => (
                      <li key={i} className="font-mono text-[10px] uppercase font-black text-slate-400 tracking-widest italic flex gap-4 leading-relaxed">
                         <span className="text-orange-600">⚠</span> {l}
                      </li>
                    ))}
                 </ul>
                 <div className="mt-16 pt-10 border-t-4 border-zinc-800">
                    <p className="text-6xl md:text-8xl font-display uppercase font-black tracking-tighter leading-none italic italic">
                      Transición_ <span className="text-teal-400">Incompleta_</span>
                    </p>
                 </div>
              </div>
           </div>
        </div>
      </WaveSection>
    </div>
  );
}
