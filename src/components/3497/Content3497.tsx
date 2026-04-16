import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Target,
  Triangle,
  Scale,
  MapPin,
  CheckCircle2,
  Lightbulb,
  Quote,
  Zap,
  AlertTriangle,
  Home,
  Users,
  Sparkles
} from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export default function Content3497() {
  const [activeDim, setActiveDim] = useState<string | null>('professional');

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#fffbeb" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#d97706]" />
               <PremiumTitle subtitle="REALIDAD PEDAGÓGICA"> El Hogar como Eje </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#d97706] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "{ARTICLE_DATA.centralFinding}"
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Target className="text-amber-600" /> Pregunta_Crítica_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    {ARTICLE_DATA.introduction.problem}
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="CONTEXTO_REG" icon={MapPin} className="shadow-[10px_10px_0_0_#d97706]">
                 <p className="text-lg font-bold leading-snug">{ARTICLE_DATA.introduction.context}</p>
              </CinematicCard>
              
              <div className="bg-amber-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2">
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">RELEVANCIA_ESTUDIO</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   {ARTICLE_DATA.introduction.relevance}
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: LIDERAZGO Y DIMENSIONES */}
      <WaveSection topColor="#fffbeb" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. LIDERAZGO" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="TIPOLOGÍAS Y DIMENSIONES">La Matriz del Líder</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-3 gap-10 mb-32">
            {ARTICLE_DATA.leadershipTypes.map((t, i) => (
              <div key={i} className={`bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] rotate-${i % 2 === 0 ? '1' : '-1'} group hover:scale-105 transition-transform`}>
                 <h3 className="font-display text-3xl uppercase font-black mb-6 italic underline decoration-amber-500 decoration-8">{t.name}</h3>
                 <p className="text-xl font-serif italic text-black/70 mb-8 leading-relaxed font-medium">"{t.features}"</p>
                 <div className="bg-black text-white p-4 font-display text-[10px] font-black uppercase tracking-widest italic group-hover:bg-amber-600 transition-colors">Impacto: {t.impact}</div>
              </div>
            ))}
          </div>

          <div className="bg-zinc-900 border-[12px] border-black p-12 md:p-24 shadow-[35px_35px_0_0_#d97706] rotate-1">
             <div className="grid lg:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square flex items-center justify-center">
                   <svg viewBox="0 0 360 360" className="w-full h-full drop-shadow-[10px_10px_0_#000]">
                      <polygon points="180,40 60,300 300,300" className="fill-zinc-800 stroke-zinc-700" strokeWidth="10" />
                      
                      {/* Profesional */}
                      <g className="cursor-pointer" onClick={() => setActiveDim('professional')}>
                         <circle cx="180" cy="40" r="40" className={`${activeDim === 'professional' ? 'fill-amber-500' : 'fill-zinc-600'} border-4 border-black transition-colors`} />
                         <text x="180" y="55" textAnchor="middle" className="fill-white text-4xl">🧠</text>
                      </g>
                      
                      {/* Afectiva */}
                      <g className="cursor-pointer" onClick={() => setActiveDim('affective')}>
                         <circle cx="60" cy="300" r="40" className={`${activeDim === 'affective' ? 'fill-rose-600' : 'fill-zinc-600'} transition-colors`} />
                         <text x="60" y="315" textAnchor="middle" className="fill-white text-4xl">❤️</text>
                      </g>
                      
                      {/* Carismática */}
                      <g className="cursor-pointer" onClick={() => setActiveDim('charismatic')}>
                         <circle cx="300" cy="300" r="40" className={`${activeDim === 'charismatic' ? 'fill-emerald-500' : 'fill-zinc-600'} transition-colors`} />
                         <text x="300" y="315" textAnchor="middle" className="fill-white text-4xl">✨</text>
                      </g>
                   </svg>
                </div>
                
                <div className="text-white min-h-[400px] flex flex-col justify-center">
                   <AnimatePresence mode="wait">
                      {activeDim && (
                        <motion.div
                          key={activeDim}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                        >
                           {(() => {
                             const d = ARTICLE_DATA.dimensions.find(x => x.key === activeDim)!;
                             return (
                               <>
                                 <h4 className="font-display text-5xl uppercase font-black mb-8 italic text-amber-500">{d.name}</h4>
                                 <p className="text-2xl font-serif italic text-white/70 mb-10 leading-relaxed font-medium">"{d.description}"</p>
                                 <ul className="grid grid-cols-1 gap-4">
                                    {d.elements.map((el, i) => (
                                      <li key={i} className="flex items-center gap-4 font-mono text-xs uppercase font-black tracking-widest text-slate-400 border-l-4 border-amber-600 pl-4">
                                         {el}
                                      </li>
                                    ))}
                                 </ul>
                               </>
                             );
                           })()}
                        </motion.div>
                      )}
                   </AnimatePresence>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: VALORES VS CARÁCTER */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. EDUCACIÓN" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#d97706]" />
            <PremiumTitle className="items-center" subtitle="SISTEMA VS PERSONA">Valores_ vs_ Carácter_</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
             <div className="bg-zinc-50 border-8 border-black p-12 shadow-[20px_20px_0_0_#94a3b8] rotate-1">
                <div className="flex justify-between items-center mb-10">
                   <h4 className="font-display text-4xl uppercase font-black italic">{ARTICLE_DATA.comparison.values.label}</h4>
                   <span className="bg-zinc-200 px-4 py-2 border-2 border-black font-display text-[10px] font-black uppercase italic">{ARTICLE_DATA.comparison.values.tag}</span>
                </div>
                <ul className="space-y-6">
                   {ARTICLE_DATA.comparison.values.items.map((it, i) => (
                     <li key={i} className={`flex gap-6 items-start font-mono text-xs uppercase font-black ${it.negative ? 'text-rose-600' : 'text-slate-500'}`}>
                        <span className="shrink-0">{it.negative ? '✖' : '▶'}</span>
                        <span><strong>{it.label}</strong>: {it.text}</span>
                     </li>
                   ))}
                </ul>
             </div>

             <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#d97706] -rotate-1">
                <div className="flex justify-between items-center mb-10">
                   <h4 className="font-display text-4xl uppercase font-black italic">{ARTICLE_DATA.comparison.character.label}</h4>
                   <span className="bg-amber-100 px-4 py-2 border-2 border-black font-display text-[10px] font-black uppercase italic text-amber-900">{ARTICLE_DATA.comparison.character.tag}</span>
                </div>
                <ul className="space-y-6">
                   {ARTICLE_DATA.comparison.character.items.map((it, i) => (
                     <li key={i} className={`flex gap-6 items-start font-mono text-xs uppercase font-black ${it.positive ? 'text-emerald-600' : 'text-amber-800'}`}>
                        <span className="shrink-0">{it.positive ? '✔' : '▶'}</span>
                        <span><strong>{it.label}</strong>: {it.text}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          <BrutalQuote className="text-3xl font-serif italic mb-20 shadow-[20px_20px_0_0_#000]">
             "{ARTICLE_DATA.comparison.quote}"
          </BrutalQuote>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: TIMELINE PARAGUAY */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="IV. HISTORIAL" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="REFORMAS Y PROGRAMAS">Línea_de_Tiempo_Paraguay_</PremiumTitle>
          </div>

          <div className="relative space-y-12">
             <div className="absolute left-1/2 top-0 bottom-0 w-4 bg-zinc-100 -translate-x-1/2 hidden md:block" />
             {ARTICLE_DATA.timeline.map((ev, i) => (
               <div key={i} className={`relative flex flex-col md:flex-row items-center gap-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                     <span className="font-display text-9xl font-black text-amber-600/10 leading-none mb-4 absolute -top-10 scale-150 opacity-20">{ev.year}</span>
                     <h4 className="font-display text-3xl uppercase font-black italic mb-4 relative z-10">{ev.title}</h4>
                     <p className="text-xl font-serif italic text-black/70 font-medium leading-relaxed relative z-10">"{ev.description}"</p>
                  </div>
                  
                  <div className="w-20 h-20 bg-black border-8 border-white rounded-full flex items-center justify-center shrink-0 z-20 shadow-[8px_8px_0_0_#d97706] relative group">
                     <div className={`w-full h-full rounded-full animate-ping opacity-20 absolute inset-0 ${ev.status === 'active' ? 'bg-emerald-500' : 'bg-rose-500'}`} />
                     <span className="text-white font-display text-[9px] font-black uppercase tracking-tighter leading-none text-center px-2">
                       {ev.status === 'active' ? 'VIGENTE' : 'CANCEL'}
                     </span>
                  </div>

                  <div className="md:w-1/2" />
               </div>
             ))}
          </div>

          <div className="mt-32 bg-rose-600 text-white p-16 md:p-24 border-[16px] border-black shadow-[40px_40px_0_0_#000] rotate-1 text-center relative group overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <AlertTriangle className="mx-auto mb-8 w-16 h-16 group-hover:rotate-12 transition-transform" />
             <p className="text-4xl md:text-6xl font-display uppercase font-black leading-tight italic tracking-tighter">
                EL DATO QUE DUELE: No hay evidencia empírica sólida de impacto. Sabemos qué debería funcionar, pero no qué está funcionando_
             </p>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: FRICCIONES */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="V. FRICCIONES" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#ef4444]" />
            <PremiumTitle className="items-center" subtitle="TENSIONES CRÍTICAS">Debates_Abiertos_</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             {[
               { id: "01", title: "ENTRE EL DISCURSO Y EL PAGO", text: "El artículo propone tres dimensiones de liderazgo, pero calla las estructuras de poder que determinan cuál prevalece: solo la profesional se evalúa y paga formalmente.", solution: "¿Cómo pretendemos docentes con tres dimensiones si el sistema solo paga por una?" },
               { id: "02", title: "MODELOS DE PRIMER MUNDO", text: "Cita programas internacionales exitosos como modelos, pero no analiza la brecha entre sus condiciones y la realidad de las escuelas paraguayas.", solution: "¿No estamos sugiriendo políticas de 'primero mundo' en un contexto de 'tercera realidad'?" },
               { id: "03", title: "EL PROBLEMA ES POLÍTICO", text: "Atribuye el fracaso del Plan 2040 a 'ausencia de liderazgo pedagógico', individualizando un problema que es estructural y de presiones ideológicas.", solution: "Si el problema fue político, ¿por qué la solución propuesta es estrictamente pedagógica?" },
               { id: "04", title: "EL PLURALISMO MORAL", text: "Moverse de 'valores' a 'carácter' no aborda quién decide qué conductas son correctas en una sociedad plural.", solution: "¿Quién y cómo define los valores a formar sin caer en la imposición cultural?" }
             ].map((fric, i) => (
               <div key={i} className="bg-zinc-50 border-8 border-black p-12 shadow-[15px_15px_0_0_#000] border-rose-600 relative group">
                  <div className="absolute top-0 right-0 p-4 font-display text-8xl font-black text-black/5 group-hover:text-black/10 transition-colors leading-none">{fric.id}</div>
                  <h4 className="font-display text-2xl uppercase font-black mb-8 italic tracking-tighter leading-none">{fric.title}</h4>
                  <p className="text-2xl font-serif italic text-black/70 mb-10 leading-relaxed font-medium">"{fric.text}"</p>
                  <div className="bg-black text-rose-500 p-6 border-4 border-black rotate-1">
                     <p className="font-display uppercase font-black text-xs tracking-tighter italic">{fric.solution}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* CONCLUSIONES FINALES */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
              <div className="bg-amber-600 text-white p-16 md:p-32 border-[24px] border-black shadow-[50px_50px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-[0.7] mb-12 italic drop-shadow-[10px_10px_0_0_#000]">
                   Liderar_ Socializar_
                 </h2>
              </div>
              
              <div className="space-y-12">
                 <BrutalSticker text="VI. CONCLUSIONES" color="bg-black" className="text-white mb-8 !rotate-0" />
                 <div className="space-y-10">
                    {ARTICLE_DATA.conclusions.slice(0, 3).map((c, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-16 h-16 bg-white border-4 border-black text-black shrink-0 flex items-center justify-center font-display text-4xl font-black group-hover:bg-amber-600 group-hover:text-white transition-all italic">{i+1}</div>
                         <p className="text-3xl font-serif italic text-black/80 font-medium leading-tight">"{c}"</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="py-24 border-t-8 border-black border-dashed text-center">
             <p className="text-5xl md:text-8xl font-display uppercase font-black tracking-tighter mb-12 italic leading-none">
               ¿Es tu liderazgo <span className="text-amber-600">transformador</span> o burocrático_?
             </p>
             <div className="w-48 h-10 bg-black mx-auto shadow-[10px_10px_0_0_#fde047]" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
}
