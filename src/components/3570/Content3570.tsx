import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { ARTICLE_DATA } from './constants';
import { 
  BookOpen, 
  Info, 
  Search, 
  MapPin, 
  Lightbulb, 
  BookText, 
  Brain, 
  AlertTriangle, 
  Zap,
  Target,
  Sparkles,
  Activity,
  Binary
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export default function Content3570() {
  const [activeTab, setActiveTab] = useState('geographical');

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN Y HALLAZGO */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f9ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. HALLAZGO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#2563eb]" />
               <PremiumTitle subtitle="CORE EVIDENCE">
                 El Estado del Arte
               </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#2563eb] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "{ARTICLE_DATA.centralFinding}"
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#10b981] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Target className="text-emerald-600" /> Objetivo_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    {ARTICLE_DATA.introduction.objective}
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="PROBLEMATICA" icon={AlertTriangle} className="shadow-[10px_10px_0_0_#000]">
                 <p className="text-lg font-bold leading-snug">{ARTICLE_DATA.introduction.problematic}</p>
              </CinematicCard>
              
              <div className="bg-blue-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2">
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">DISTRIBUCIÓN_GLOBAL</h4>
                 <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ARTICLE_DATA.regionalData}>
                        <XAxis dataKey="name" hide />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#000', border: 'none', color: '#fff', fontFamily: 'monospace' }}
                        />
                        <Bar dataKey="value" fill="#fff" stroke="#000" strokeWidth={2}>
                          {ARTICLE_DATA.regionalData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#10b981' : '#fff'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <p className="mt-4 font-display uppercase font-black text-xs text-center tracking-tighter italic">Europa y Asia dominan la producción académica (86.6%)</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: METODOLOGÍA PRISMA */}
      <WaveSection topColor="#f0f9ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. METODOLOGÍA" color="bg-blue-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="RIGOR ACADÉMICO">
              Protocolo PRISMA
            </PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="space-y-12">
                <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#000] relative">
                   <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">SEARCH_STRATEGY</div>
                   <h3 className="font-display text-4xl uppercase font-black mb-10 italic">Filtros_de_Inclusión</h3>
                   <div className="space-y-6">
                      {[
                        { label: "Bases de Datos", val: "Scopus, WoS, ScienceDirect" },
                        { label: "Idiomas", val: "Español, Inglés, Portugués" },
                        { label: "Ventana", val: "2015 - 2025" }
                      ].map((item, i) => (
                        <div key={i} className="flex justify-between border-b-4 border-zinc-100 pb-4">
                           <span className="font-display uppercase font-black text-blue-600">{item.label}:</span>
                           <span className="font-mono text-sm font-black italic">{item.val}</span>
                        </div>
                      ))}
                   </div>
                </div>
                <CinematicCard color="bg-zinc-50" title="ENFOQUE_M" icon={Search}>
                   <p className="text-2xl font-serif italic leading-relaxed font-medium">"{ARTICLE_DATA.methodology.approach}"</p>
                </CinematicCard>
             </div>

             <div className="bg-zinc-900 text-white p-12 md:p-20 border-[12px] border-black shadow-[30px_30px_0_0_#10b981] rotate-1">
                <h3 className="font-display text-4xl uppercase font-black mb-12 text-teal-400 italic">Embudo_PRISMA</h3>
                <div className="space-y-8">
                   <div className="flex items-center gap-8 group">
                      <div className="w-24 h-24 bg-white text-black shrink-0 flex items-center justify-center font-display text-6xl font-black group-hover:scale-110 transition-transform">{ARTICLE_DATA.methodology.prismaResults.initial}</div>
                      <div className="text-xl font-display uppercase font-black tracking-widest leading-none">Registros Iniciales</div>
                   </div>
                   <div className="h-10 w-4 bg-teal-400 mx-10" />
                   <div className="flex items-center gap-8 group opacity-60">
                      <div className="w-20 h-20 bg-zinc-700 text-white shrink-0 flex items-center justify-center font-display text-5xl font-black">{ARTICLE_DATA.methodology.prismaResults.topicFiltered}</div>
                      <div className="text-lg font-display uppercase font-black tracking-widest leading-none">Filtrado por Tema & Duplicidad</div>
                   </div>
                   <div className="h-10 w-4 bg-teal-400 mx-10" />
                   <div className="flex items-center gap-8 group">
                      <div className="w-24 h-24 bg-emerald-500 text-black shrink-0 flex items-center justify-center font-display text-6xl font-black group-hover:rotate-6 transition-transform">{ARTICLE_DATA.methodology.prismaResults.included}</div>
                      <div className="text-xl font-display uppercase font-black tracking-widest leading-none text-emerald-400">Estudios Finales Incluidos</div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: RESULTADOS INTERACTIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="III. RESULTADOS" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="DIMENSIONES ANALÍTICAS">Explora los Hallazgos</PremiumTitle>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'geographical', label: 'Geografía', icon: MapPin },
              { id: 'perspectives', label: 'Perspectivas', icon: Lightbulb },
              { id: 'strategies', label: 'Estrategias', icon: BookText },
              { id: 'types', label: 'Tipos', icon: Brain },
              { id: 'difficulties', label: 'Dificultades', icon: AlertTriangle },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-8 py-5 border-[6px] border-black font-display uppercase font-black text-lg transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] ${
                  activeTab === tab.id ? 'bg-blue-600 text-white' : 'bg-white hover:bg-blue-50'
                }`}
              >
                <tab.icon size={20} /> {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-zinc-50 border-[10px] border-black p-10 md:p-20 shadow-[25px_25px_0_0_rgba(0,0,0,0.1)] min-h-[500px]">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  {activeTab === 'geographical' && (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {ARTICLE_DATA.results.geographicalDistribution.map((r, i) => (
                        <CinematicCard key={i} color="bg-white" title={r.region} className="shadow-[8px_8px_0_0_#2563eb]">
                           <div className="text-6xl font-display font-black text-black mb-4">{r.percentage}%</div>
                           <p className="font-mono text-xs uppercase font-black text-slate-500 mb-4">{r.countries}</p>
                           <p className="text-sm font-bold bg-blue-100 inline-block px-3 py-1 border-2 border-black">{r.n} Estudios</p>
                        </CinematicCard>
                      ))}
                    </div>
                  )}

                  {activeTab === 'perspectives' && (
                    <div className="space-y-8">
                       {ARTICLE_DATA.results.perspectives.map((p, i) => (
                         <div key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#10b981] flex flex-col md:flex-row gap-10 items-center">
                            <div className="w-24 h-24 bg-emerald-500 text-black flex items-center justify-center font-display text-5xl font-black shrink-0">P{i+1}</div>
                            <div>
                               <h4 className="font-display text-3xl uppercase font-black text-blue-600 mb-2 italic">{p.focus}</h4>
                               <p className="text-xl font-serif italic text-black/70 mb-4">{p.characteristics}</p>
                               <span className="font-mono text-[10px] uppercase font-black text-slate-400">Autores: {p.authors}</span>
                            </div>
                         </div>
                       ))}
                    </div>
                  )}

                  {activeTab === 'strategies' && (
                    <div className="grid md:grid-cols-2 gap-10">
                       {ARTICLE_DATA.results.strategies.map((s, i) => (
                         <CinematicCard key={i} color="bg-white" title={`ESTRATEGIA_0${i+1}`} className="shadow-[10px_10px_0_0_#000]">
                            <h4 className="font-display text-2xl uppercase font-black mb-4 text-blue-600 leading-tight italic">{s.strategy}</h4>
                            <p className="text-lg font-serif italic text-black/70 mb-6">{s.description}</p>
                            <div className="font-mono text-[9px] uppercase font-black italic border-t-2 border-black pt-4">{s.authors}</div>
                         </CinematicCard>
                       ))}
                    </div>
                  )}

                  {activeTab === 'types' && (
                    <div className="grid md:grid-cols-2 gap-10">
                       {ARTICLE_DATA.results.types.map((t, i) => (
                         <div key={i} className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[12px_12px_0_0_#fde047] relative group overflow-hidden">
                            <Binary className="absolute -bottom-10 -right-10 w-40 h-40 opacity-10 group-hover:rotate-12 transition-transform" />
                            <h4 className="font-display text-4xl uppercase font-black mb-6 text-teal-400 italic leading-none">{t.type}</h4>
                            <p className="text-xl font-serif italic text-white/70 mb-8 relative z-10">{t.description}</p>
                            <p className="font-mono text-[10px] uppercase font-black text-slate-500">{t.studies}</p>
                         </div>
                       ))}
                    </div>
                  )}

                  {activeTab === 'difficulties' && (
                    <div className="max-w-3xl mx-auto space-y-6">
                       {ARTICLE_DATA.results.difficulties.map((d, i) => (
                         <motion.div 
                           key={i} 
                           initial={{ opacity: 0, x: -20 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           transition={{ delay: i * 0.1 }}
                           className="bg-white border-4 border-black p-6 flex gap-8 items-center shadow-[6px_6px_0_0_#ef4444]"
                         >
                            <AlertTriangle className="text-red-600 shrink-0" size={32} />
                            <p className="font-display uppercase font-black text-2xl tracking-tighter italic leading-none">{d}</p>
                         </motion.div>
                       ))}
                    </div>
                  )}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: FRICCIONES PEDAGÓGICAS */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="IV. FRICCIONES" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="TENSIONES CRÍTICAS">Fricciones_Pedagógicas_</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {ARTICLE_DATA.results.tensionQuotes.map((quote, idx) => (
              <BrutalQuote key={idx} className={`text-2xl shadow-[15px_15px_0_0_#000] rotate-${idx % 2 === 0 ? '1' : '-1'}`}>
                 "{quote}"
              </BrutalQuote>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
             {[
               {
                 id: "01",
                 title: "LO QUE SE DICE VS LO QUE SE CALLA",
                 text: "El paper cita a Freire: pensar críticamente es un acto político de liberación. Pero el 86.6% de los estudios provienen de Europa y Asia. ¿Cómo se hace pensamiento crítico-docente en contextos de precariedad?",
                 solution: "Necesitamos estudios locales que documenten cómo hacerlo político sin reproducir violencias sistémicas.",
                 color: "border-blue-600"
               },
               {
                 id: "02",
                 title: "ENTRE LA TEORÍA Y LA PRÁCTICA",
                 text: "Los futuros docentes muestran altos niveles de pensamiento crítico digital pero dificultades para resolver problemas prácticos con IA en el aula. Saben criticar la tecnología, no saben usarla pedagógicamente.",
                 solution: "La formación docente está separando el 'pensar' del 'hacer'. Es vital unir praxis y abstracción.",
                 color: "border-emerald-500"
               },
               {
                 id: "03",
                 title: "POLÍTICA PÚBLICA Y REALIDAD",
                 text: "Cuando existen estándares internacionales (PISA), premian resultados estandarizados, no procesos transformadores. El pensamiento crítico freireano es imposible de estandarizar.",
                 solution: "¿Cómo defendemos lo crítico sin convertirlo en una competencia más del CV medible con escala Likert?",
                 color: "border-amber-400"
               },
               {
                 id: "04",
                 title: "LA VOZ AUSENTE EN EL PROCESO",
                 text: "Quince estudios revisados. Todos con docentes en formación, formadores universitarios, investigadores académicos. Ninguno consulta a los niños de preescolar.",
                 solution: "El pensamiento crítico se estudia como algo que adultos hacen a niños, no como algo que se co-construye.",
                 color: "border-rose-500"
               }
             ].map((fric, i) => (
               <div key={i} className={`bg-zinc-50 border-8 border-black p-12 shadow-[15px_15px_0_0_#000] ${fric.color} relative group`}>
                  <div className="absolute top-0 right-0 p-4 font-display text-6xl font-black text-black/5 group-hover:text-black/10 transition-colors leading-none">{fric.id}</div>
                  <h4 className="font-display text-2xl uppercase font-black mb-8 italic tracking-tighter leading-none">{fric.title}</h4>
                  <p className="text-xl font-serif italic text-black/70 mb-10 leading-relaxed font-medium">"{fric.text}"</p>
                  <div className="bg-black text-white p-6 border-4 border-black rotate-1">
                     <p className="font-display uppercase font-black text-xs tracking-tighter italic text-teal-400">{fric.solution}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL: SÍNTESIS Y LIMITACIONES */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
             <div>
                <BrutalSticker text="V. LIMITACIONES" color="bg-black" className="text-white mb-10 !rotate-0" />
                <PremiumTitle subtitle="DESAFÍOS METODOLÓGICOS">Limitaciones</PremiumTitle>
                <div className="space-y-6 mt-16">
                  {ARTICLE_DATA.limitations.map((l, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex gap-8 items-start group"
                    >
                       <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center font-display text-3xl border-4 border-black group-hover:rotate-12 transition-transform shrink-0">{i+1}</div>
                       <p className="text-2xl font-serif italic text-black/70 font-medium">"{l}"</p>
                    </motion.div>
                  ))}
                </div>
             </div>

             <div className="bg-blue-600 text-white p-12 md:p-24 border-[20px] border-black shadow-[40px_40px_0_0_#000] rotate-1 relative group overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <h2 className="text-6xl md:text-[9rem] font-display uppercase font-black leading-[0.8] mb-12 italic drop-shadow-[10px_10px_0_0_#000]">
                  Formar_ Críticos_
                </h2>
                <div className="pt-12 border-t-8 border-black">
                   <p className="text-2xl md:text-3xl font-serif italic leading-relaxed text-blue-100">
                     "No solo se trata de que el docente piense; se trata de que el docente sepa cómo invitar al niño a pensar el mundo."
                   </p>
                </div>
             </div>
          </div>
          
          <div className="py-24 border-t-8 border-black border-dashed text-center">
            <p className="text-5xl md:text-8xl font-display uppercase font-black tracking-tighter mb-12 italic leading-none">
              ¿Es tu formación docente <span className="text-blue-600">crítica</span> o funcional_?
            </p>
            <div className="w-48 h-10 bg-black mx-auto shadow-[10px_10px_0_0_#34d399]" />
          </div>
        </div>
      </WaveSection>
    </div>
  );
}
