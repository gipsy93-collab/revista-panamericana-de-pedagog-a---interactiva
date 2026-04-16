import React from 'react';
import { motion } from 'motion/react';
import { BrutalCard, BrutalSticker, BrutalQuote, WaveSection, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { useLanguage } from '../../LanguageContext';
import { 
  ChevronRight, AlertTriangle, Users, BookOpen, 
  Database, TrendingUp, ShieldAlert, Award, Lightbulb, Globe
} from 'lucide-react';

// --- SECCIÓN: INTRODUCCIÓN (Radiografía de la Realidad) ---
export const Intro3476 = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0" />
      
      <section className="py-32 px-6 bg-white z-10 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <BrutalSticker text="I. INTRODUCCIÓN" color="bg-[#38bdf8]" className="mb-10 text-white !rotate-0" />
              <PremiumTitle subtitle="LA BRECHA INVISIBILIZADA">
                Inclusión Vital
              </PremiumTitle>
              <div className="mt-10 space-y-8 text-2xl leading-relaxed text-black/70 font-sans font-medium border-l-[12px] border-[#e81e61] pl-10 mb-10">
                <p>{t.pacheco.intro.talking_intro}</p>
              </div>
              <CinematicCard color="bg-black" title="RESEARCH_QUERY" className="text-white shadow-[12px_12px_0_#fbbf24]">
                 <p className="italic text-xl font-serif">"{t.pacheco.intro.research_question}"</p>
              </CinematicCard>
            </div>
            
            <div className="flex flex-col gap-8">
               <CinematicCard color="bg-[#fbbf24]" title="ESTADÍSTICA_UNESCO" icon={ShieldAlert}>
                  <div className="text-8xl font-display mb-2 drop-shadow-[4px_4px_0_white]">17%</div>
                  <p className="font-mono text-sm leading-tight uppercase font-black">
                      {t.pacheco.intro.unesco_stat}
                  </p>
               </CinematicCard>
               <CinematicCard color="bg-[#e81e61]" className="text-white shadow-[15px_15px_0_#000]" icon={TrendingUp}>
                  <div className="text-8xl font-display mb-2 drop-shadow-[4px_4px_0_black]">2.5X</div>
                  <p className="font-mono text-sm leading-tight uppercase font-bold text-white/90">
                      {t.pacheco.intro.exclusion_risk}
                  </p>
               </CinematicCard>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-10 mb-32">
              <CinematicCard color="bg-zinc-50" title="CONTEXTO_GLOBAL" icon={Users}>
                  <p className="font-sans text-lg leading-snug text-gray-700 font-medium">
                      {t.pacheco.intro.global_context}
                  </p>
              </CinematicCard>
              <CinematicCard color="bg-zinc-50" title="EL_PROBLEMA" icon={AlertTriangle} className="shadow-[10px_10px_0_#fbbf24]">
                  <p className="font-sans text-lg leading-snug text-gray-700 font-medium">
                      {t.pacheco.intro.problem}
                  </p>
              </CinematicCard>
              <CinematicCard color="bg-zinc-50" title="LAS_METAS" icon={Award} className="shadow-[10px_10px_0_#e81e61]">
                  <ul className="font-mono text-xs uppercase space-y-4 list-none font-black">
                      {t.pacheco.intro.objectives.map((obj: string, i: number) => (
                          <li key={i} className="flex gap-3 border-b border-black/5 pb-2">
                            <span className="text-[#e81e61]">■</span> {obj}
                          </li>
                      ))}
                  </ul>
              </CinematicCard>
          </div>

          <div className="bg-[#0f172a] text-white p-16 border-[10px] border-black shadow-[25px_25px_0_#fbbf24] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 font-mono text-xs opacity-20 uppercase tracking-widest group-hover:opacity-100 transition-opacity">Chronos_Module_3476</div>
              <h3 className="font-display text-6xl uppercase mb-16 text-center text-[#fbbf24]">{t.pacheco.intro.evolution.title}</h3>
              <div className="grid md:grid-cols-4 gap-8">
                  {t.pacheco.intro.evolution.stages.map((stage: any, i: number) => (
                      <motion.div 
                        key={i} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="border-4 border-white/10 p-6 hover:bg-white hover:text-black transition-all cursor-help relative group/stage"
                      >
                          <div className="font-display text-4xl mb-4 text-[#e81e61] group-hover/stage:text-black italic">0{i+1}</div>
                          <div className="font-pop font-black text-xl mb-4 leading-none uppercase">{stage.name}</div>
                          <p className="font-mono text-xs leading-tight opacity-40 group-hover/stage:opacity-100 transition-opacity font-bold">{stage.detail}</p>
                      </motion.div>
                  ))}
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- SECCIÓN: METODOLOGÍA (Rutas de Conocimiento) ---
export const Methodology3476 = () => {
  const { t } = useLanguage();

  return (
    <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <BrutalSticker text="II. METODOLOGÍA" color="bg-[#e81e61]" className="mb-10 text-white !rotate-0" />
          <PremiumTitle subtitle="SCANNING_PROCEDURE" className="items-center">
            El Escaneo Vital
          </PremiumTitle>
          <p className="mt-8 font-serif text-3xl max-w-4xl mx-auto italic text-black/60 leading-relaxed">
            {t.pacheco.methodology.approach}
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-10 mb-20">
            <div className="md:col-span-8">
                <CinematicCard color="bg-white" title="DATA_BASES_RESOURCES" icon={Database} className="h-full">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
                        {t.pacheco.methodology.databases.map((db: any, i: number) => (
                            <div key={i} className="bg-zinc-50 border-4 border-black p-6 text-center shadow-[6px_6px_0_#000] hover:-translate-x-1 hover:-translate-y-1 transition-transform cursor-crosshair group">
                                <div className="text-5xl font-display mb-2 text-[#e81e61] group-hover:scale-110 transition-transform">{db.count}</div>
                                <div className="font-mono text-[10px] uppercase font-black opacity-60 leading-none">{db.name}</div>
                            </div>
                        ))}
                    </div>
                    <p className="mt-12 font-serif italic text-2xl leading-relaxed border-l-8 border-[#38bdf8] pl-8 text-black/80">
                        {t.pacheco.methodology.prisma_p}
                    </p>
                </CinematicCard>
            </div>
            <div className="md:col-span-4">
              <CinematicCard color="bg-black" className="text-white h-full shadow-[15px_15px_0_#fbbf24]" title="FILTRO_PRISMA">
                  <div className="space-y-6 mt-4">
                      <div className="flex justify-between items-end border-b-2 border-white/10 pb-4">
                          <span className="font-mono text-xs uppercase opacity-40 font-bold">Identificados</span>
                          <span className="font-display text-4xl">{t.pacheco.methodology.process.initial}</span>
                      </div>
                      <div className="flex justify-between items-end border-b-2 border-white/10 pb-4">
                          <span className="font-mono text-xs uppercase opacity-40 font-bold">Depurados</span>
                          <span className="font-display text-4xl">{t.pacheco.methodology.process.screened}</span>
                      </div>
                      <div className="flex justify-between items-end border-b-2 border-white/10 pb-4">
                          <span className="font-mono text-xs uppercase opacity-40 font-bold">Elegibles</span>
                          <span className="font-display text-4xl">{t.pacheco.methodology.process.eligible}</span>
                      </div>
                      <div className="bg-[#fbbf24] text-black p-6 border-4 border-black rotate-1 shadow-[8px_8px_0_white]">
                          <span className="font-pop text-sm uppercase font-black block mb-2">Corpus Final</span>
                          <span className="font-display text-6xl leading-none">{t.pacheco.methodology.process.final}</span>
                      </div>
                  </div>
              </CinematicCard>
            </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-24">
            <CinematicCard color="bg-[#38bdf8]" title="DISTRIBUCIÓN_MÉTODO" className="shadow-[12px_12px_0_#000]">
                <div className="space-y-8 mt-4">
                    {t.pacheco.methodology.distribution.map((item: any, i: number) => (
                        <div key={i} className="group">
                            <div className="flex justify-between font-mono text-sm uppercase font-black mb-3 group-hover:text-white transition-colors">
                                <span>{item.label}</span>
                                <span>{item.value}</span>
                            </div>
                            <div className="w-full h-10 bg-black/20 border-4 border-black overflow-hidden p-1">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    whileInView={{ width: item.value }}
                                    transition={{ duration: 1.2, ease: "circOut" }}
                                    className="h-full bg-white border-r-4 border-black"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </CinematicCard>
            <CinematicCard color="bg-white" title="MAPA_GEOGRÁFICO" icon={Globe}>
                <p className="font-sans text-xl mb-6 font-black leading-tight border-b-4 border-black pb-4 uppercase italic">{t.pacheco.methodology.geography.desc}</p>
                <div className="p-8 bg-black text-[#e81e61] border-4 border-black font-mono text-xs uppercase leading-relaxed rotate-1">
                    <span className="font-black text-white block mb-2 border-b border-white/20 pb-2">OTRAS_NACIONES:</span> 
                    {t.pacheco.methodology.geography.others}
                </div>
            </CinematicCard>
        </div>
      </div>
    </WaveSection>
  );
};

// --- SECCIÓN: RESULTADOS (Hallazgos Críticos) ---
export const Results3476 = () => {
  const { t } = useLanguage();

  return (
    <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="dramatic">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-start mb-32">
          <div className="lg:w-1/3 lg:sticky lg:top-32">
            <BrutalSticker text="III. RESULTADOS" color="bg-[#fbbf24]" className="mb-10 !rotate-0" />
            <PremiumTitle>
              Hallazgos Críticos
            </PremiumTitle>
            <div className="space-y-10 mt-12">
                <BrutalQuote className="shadow-[15px_15px_0_#38bdf8]">
                    {t.pacheco.results.main_discovery}
                </BrutalQuote>
                <div className="grid grid-cols-2 gap-4">
                    {t.pacheco.results.critical_data.map((item: any, i: number) => (
                        <div key={i} className="bg-black text-white p-6 border-4 border-black hover:rotate-2 transition-transform shadow-[6px_6px_0_#fbbf24]">
                            <div className="text-4xl font-display text-[#fbbf24] mb-2">{item.value}</div>
                            <div className="font-mono text-[10px] uppercase font-black opacity-60 leading-none tracking-tighter">{item.note}</div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-12">
            <p className="font-serif text-4xl italic leading-tight text-black border-l-[16px] border-[#e81e61] pl-10 py-10 mb-16 bg-zinc-50 shadow-[10px_10px_0_rgba(0,0,0,0.05)]">
              "{t.pacheco.results.intro_talking}"
            </p>
            
            {t.pacheco.results.categories.map((cat: any, i: number) => (
                <div key={i} className="relative group">
                    <CinematicCard color="bg-white" className="relative z-10 shadow-[15px_15px_0_#000]" title={`EJE_0${i+1}`}>
                        <div className="flex justify-between items-start mb-6">
                            <h3 className="font-display text-5xl italic uppercase leading-none text-[#e81e61]">{cat.name}</h3>
                            <Lightbulb size={40} className="text-[#38bdf8] opacity-20 group-hover:opacity-100 transition-opacity" />
                        </div>
                        <p className="font-sans text-xl leading-snug font-medium text-black/80">
                            {cat.detail}
                        </p>
                    </CinematicCard>
                </div>
            ))}

            <div className="bg-[#fbbf24] p-12 border-8 border-black rotate-1 mt-20 shadow-[20px_20px_0_#000] relative">
                <div className="absolute -top-6 left-12 bg-black text-white px-6 py-2 font-black uppercase text-xs border-4 border-white rotate-[-3deg]">PARADOJA_DETECTADA</div>
                <h4 className="font-pop font-black uppercase text-3xl mb-8 underline italic decoration-8">La Paradoja de la Voluntad</h4>
                <p className="font-mono text-lg uppercase leading-tight font-black mb-10 text-black/70">
                    {t.pacheco.results.barrier_desc}
                </p>
                <div className="p-8 bg-white border-4 border-black -rotate-2">
                  <p className="font-serif text-3xl italic leading-tight text-black">
                      "{t.pacheco.results.personal_will_quote}"
                  </p>
                </div>
            </div>
            
            <CinematicCard color="bg-[#0f172a]" className="text-white mt-10" title="THE_GAP_ANALYSIS">
                <p className="font-display text-4xl md:text-5xl uppercase leading-none text-[#38bdf8] italic">
                    {t.pacheco.results.the_gap}
                </p>
            </CinematicCard>
          </div>
        </div>
      </div>
    </WaveSection>
  );
};

// --- SECCIÓN: LIMITACIONES ---
export const Limitaciones3476 = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-[#f0f0f0] relative overflow-hidden py-32 border-b-[12px] border-black">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/absurd-dad.png')] z-0" />
      
      <div className="max-w-6xl mx-auto z-10 relative px-6">
        <div className="text-center mb-24">
          <BrutalSticker text="IV. LIMITACIONES" color="bg-[#fbbf24]" className="mb-10 !rotate-0" />
          <PremiumTitle className="items-center" subtitle="VACÍOS_ENCONTRADOS">
            Límites del Estudio
          </PremiumTitle>
        </div>
        <div className="grid md:grid-cols-2 gap-10">
          {t.pacheco.limitations.map((item: string, i: number) => (
            <CinematicCard key={i} color="bg-white" className="h-full shadow-[12px_12px_0_#38bdf8]">
              <span className="block text-xl font-display uppercase text-[#e81e61] font-black mb-4">L_0{i + 1}</span>
              <p className="text-2xl font-serif italic leading-snug font-medium text-black/70 italic">"{item}"</p>
            </CinematicCard>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- SECCIÓN: DISCUSIÓN Y CONCLUSIÓN ---
export const Discussion3476 = ({ onBack }: { onBack: () => void }) => {
    const { t } = useLanguage();
  
    return (
      <WaveSection topColor="#f0f0f0" bottomColor="#000000" variant="dramatic">
        <div className="max-w-6xl mx-auto py-20 pb-40 px-6">
          <div className="text-center mb-32">
            <BrutalSticker text="IV. DISCUSIÓN & CRÍTICA" color="bg-[#e81e61]" className="mb-10 text-white !rotate-0" />
            <h2 className="font-display text-[8rem] md:text-[14rem] uppercase leading-none drop-shadow-[15px_15px_0_#fbbf24]">El <span className="italic">Desafío</span></h2>
          </div>
  
          <div className="grid md:grid-cols-2 gap-20 mb-32 items-start">
             <div className="border-[12px] border-white p-16 relative bg-white/5 backdrop-blur-xl rotate-[-2deg] shadow-[25px_25px_0_rgba(232,30,97,0.3)]">
                <div className="absolute -top-10 -left-10 bg-[#fbbf24] text-black font-display px-10 py-5 uppercase font-black rotate-[-5deg] border-8 border-white text-5xl">
                   SENTENCIA
                </div>
                <p className="text-5xl leading-[1.05] italic font-serif text-white mt-10">
                   {t.pacheco.discussion.collaborative_model}
                </p>
                <div className="w-32 h-2 bg-[#38bdf8] mt-12 mb-6" />
                <p className="font-mono text-md uppercase opacity-60 tracking-widest font-black text-[#38bdf8]">
                    {t.pacheco.discussion.perspective}
                </p>
             </div>
  
             <div className="space-y-10 lg:pt-20">
                <h3 className="font-pop text-4xl uppercase font-black border-b-[12px] border-[#38bdf8] pb-4 inline-block text-white">Implicaciones_Críticas</h3>
                {Object.entries(t.pacheco.discussion.implications).map(([key, value]: any, i: number) => (
                    <motion.div 
                      key={key} 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-8 group"
                    >
                        <div className="w-16 h-16 shrink-0 bg-[#38bdf8] text-black flex items-center justify-center font-display text-4xl group-hover:rotate-[360deg] transition-all duration-700 border-4 border-white">
                            {i+1}
                        </div>
                        <div>
                            <span className="font-display text-lg tracking-widest text-[#fbbf24] uppercase italic">{key}</span>
                            <p className="font-sans text-xl leading-snug font-bold mt-2 text-white/90">{value}</p>
                        </div>
                    </motion.div>
                ))}
             </div>
          </div>
  
          <div className="mb-32">
             <h3 className="font-display text-6xl uppercase border-b-8 border-[#e81e61] pb-6 inline-block mb-16 text-white italic">Tensiones_Críticas</h3>
             <div className="grid md:grid-cols-2 gap-10">
                {t.pacheco.discussion.tensionQuotes.map((quote: string, idx: number) => (
                  <CinematicCard key={idx} color="bg-white" className="shadow-[15px_15px_0_#e81e61]">
                    <p className="text-3xl font-serif italic text-black/80 leading-relaxed">"{quote}"</p>
                  </CinematicCard>
                ))}
             </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-32">
              <CinematicCard color="bg-white" title="ESTUDIO_FORTALEZAS" icon={BookOpen} className="shadow-[15px_15px_0_#22c55e]">
                <p className="font-sans text-xl leading-relaxed font-bold text-gray-800">
                    {t.pacheco.discussion.critique.strengths}
                </p>
              </CinematicCard>
              <CinematicCard color="bg-white" title="VACÍOS_DEBILIDADES" icon={ShieldAlert} className="shadow-[15px_15px_0_#ef4444]">
                <p className="font-sans text-xl leading-relaxed font-bold text-gray-800">
                    {t.pacheco.discussion.critique.weaknesses}
                </p>
              </CinematicCard>
          </div>
  
          <div className="bg-white text-black p-16 md:p-32 text-center border-[20px] border-[#e81e61] relative shadow-[30px_30px_0_rgba(255,255,255,0.1)]">
             <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-black text-[#fbbf24] font-display text-4xl md:text-7xl px-16 py-6 border-[8px] border-[#fbbf24] uppercase tracking-tighter italic shadow-[10px_10px_0_#e81e61]">
                {t.pacheco.conclusions.title}
             </div>
             
             <h3 className="font-serif text-4xl md:text-7xl italic leading-[1.05] mb-20 mt-16 max-w-5xl mx-auto text-black/90">
                "{t.pacheco.conclusions.final_thought}"
             </h3>

             <div className="max-w-4xl mx-auto mb-24 bg-zinc-50 p-12 border-4 border-black border-dashed">
                <h4 className="font-display text-4xl uppercase mb-12 bg-[#fbbf24] text-black py-4 inline-block px-12 border-4 border-black rotate-[-2deg]">Ruta de Acción</h4>
                <ul className="text-left space-y-8 font-sans text-2xl uppercase font-black tracking-tighter">
                    {t.pacheco.conclusions.recommendations.map((rec: string, i: number) => (
                        <li key={i} className="flex gap-6 items-start group">
                            <span className="text-[#e81e61] text-4xl group-hover:scale-150 transition-transform">▶</span>
                            <span className="border-b-2 border-black/5 pb-2 w-full">{rec}</span>
                        </li>
                    ))}
                </ul>
             </div>

             <div className="bg-black text-[#fbbf24] p-16 border-[12px] border-[#e81e61] mb-20 text-4xl md:text-6xl font-display uppercase italic tracking-tighter leading-none">
                {t.pacheco.conclusions.sentence}
             </div>
             
             <motion.button 
               whileHover={{ scale: 1.05, rotate: -2 }}
               whileTap={{ scale: 0.95 }}
               onClick={onBack}
               className="bg-[#e81e61] text-white px-20 py-10 font-display text-5xl uppercase border-8 border-black shadow-[20px_20px_0_#38bdf8] hover:bg-black transition-colors"
             >
               Finalizar_Lectura_
             </motion.button>
          </div>
        </div>
      </WaveSection>
    );
};
