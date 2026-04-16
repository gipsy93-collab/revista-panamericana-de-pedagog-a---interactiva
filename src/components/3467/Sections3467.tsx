import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { BrutalCard, BrutalQuote, BrutalSticker, WaveSection, PremiumTitle, CinematicCard } from '../BrutalistLib';

export const Intro3467: React.FC = () => {
  const { t } = useLanguage();
  const s = t.vallejos.intro;

  return (
    <div className="bg-white relative overflow-hidden">
      {/* Patrón de fondo para densificar el espacio */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] z-0" />
      
      <section className="py-48 px-6 bg-white z-10 relative">
        <div className="max-w-6xl mx-auto space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="max-w-2xl space-y-12">
              <BrutalSticker text={s.title} color="bg-[#ef4444]" className="text-white !rotate-0" />
              <PremiumTitle subtitle="PREVENCIÓN EN EDUCACIÓN SUPERIOR">
                ¿Azar o Predicción?
              </PremiumTitle>
              <p className="text-2xl font-sans text-black/70 leading-relaxed border-l-[12px] border-black pl-8 font-medium italic">
                {s.context}
              </p>
            </div>
            <div className="w-full md:w-96 shrink-0 pt-12">
              <CinematicCard color="bg-[#0f172a]" title="Research_Question" className="text-white rotate-3">
                <p className="text-xl font-serif italic">{s.research_question}</p>
              </CinematicCard>
            </div>
          </div>

          <BrutalQuote author="Hallazgo Central" className="shadow-[20px_20px_0_rgba(239,68,68,0.1)]">
            {s.central_quote}
          </BrutalQuote>

          <div className="grid md:grid-cols-2 gap-12">
             <div className="space-y-6">
                <h3 className="text-3xl font-pop uppercase text-black border-b-8 border-[#ef4444] pb-2 inline-block">Objetivos</h3>
                <ul className="space-y-6">
                  {s.objectives.map((obj, i) => (
                    <motion.li 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4 items-start text-xl font-black bg-zinc-50 border-2 border-black p-4 shadow-[4px_4px_0_#000]"
                    >
                      <span className="w-10 h-10 bg-[#ef4444] text-white flex items-center justify-center shrink-0 border-2 border-black rotate-3">
                        {i+1}
                      </span>
                      <p>{obj}</p>
                    </motion.li>
                  ))}
                </ul>
             </div>
             <div className="p-10 bg-[#f5ece0] border-8 border-black shadow-[15px_15px_0_#ef4444] relative overflow-hidden">
                <div className="absolute top-0 right-0 p-2 font-mono text-[8px] opacity-20 uppercase">Core_Framework_v.3</div>
                <h3 className="text-3xl font-pop uppercase mb-6 text-black">Marco Teórico</h3>
                <p className="text-xl mb-6 font-bold leading-tight">{s.theoretical_framework.definition}</p>
                <div className="flex flex-wrap gap-3 mb-8">
                   {s.theoretical_framework.criteria.map((c, i) => (
                     <span key={i} className="px-4 py-2 bg-white border-4 border-black text-sm font-black uppercase italic shadow-[4px_4px_0_#000]">{c}</span>
                   ))}
                </div>
                <div className="p-6 bg-black text-white text-md font-pop uppercase tracking-widest border-l-8 border-[#ef4444]">
                  Consecuencias: {s.theoretical_framework.consequences}
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Methodology3467: React.FC = () => {
  const { t } = useLanguage();
  const s = t.vallejos.methodology;

  return (
    <WaveSection topColor="#ffffff" bottomColor="#f5ece0" variant="wavy">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="flex items-center gap-12 border-b-12 border-black pb-10">
           <div className="text-[12rem] font-display uppercase text-black leading-none drop-shadow-[8px_8px_0_#ef4444]">M</div>
           <div className="flex flex-col gap-2">
              <PremiumTitle subtitle="PROCEDIMIENTOS">
                {s.title}
              </PremiumTitle>
              <p className="text-3xl font-pop font-black text-[#ef4444] italic uppercase tracking-tighter">{s.approach}</p>
           </div>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
           <CinematicCard color="bg-black" className="text-white h-full shadow-[12px_12px_0_#ef4444]">
              <span className="text-lg font-pop uppercase tracking-widest text-[#ef4444] block mb-4 italic">Población / N</span>
              <span className="text-9xl font-display block mb-6 leading-none text-white">863</span>
              <p className="text-xl font-bold leading-tight uppercase bg-white/10 p-4 border border-white/20">{s.sample}</p>
              <p className="mt-6 text-sm opacity-60 font-serif italic text-white/70">{s.inclusion}</p>
           </CinematicCard>

           <CinematicCard color="bg-white" className="h-full">
              <span className="text-lg font-pop uppercase tracking-widest text-[#ef4444] block mb-4 italic">Instrumentos</span>
              <span className="text-4xl font-display block mb-6 border-b-8 border-black pb-4 leading-none">{s.instrument.title}</span>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm font-black text-white bg-[#ef4444] px-4 py-2 border-2 border-black shadow-[4px_4px_0_#000]">ALPHA: {s.instrument.reliability}</span>
              </div>
              <div className="flex flex-col gap-3">
                {s.instrument.items.map((item, i) => (
                  <span key={i} className="text-sm font-black uppercase border-b-2 border-black/10 pb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#ef4444] rounded-full" /> {item}
                  </span>
                ))}
              </div>
           </CinematicCard>

           <CinematicCard color="bg-[#ef4444]" className="text-white h-full shadow-[12px_12px_0_#0f172a]">
              <span className="text-lg font-pop uppercase tracking-widest text-black block mb-4 italic">Logit_Modelo</span>
              <div className="space-y-6">
                 <div className="p-6 bg-black text-white border-4 border-black">
                    <p className="text-xs uppercase font-black text-[#ef4444] mb-3">Variables_Predictoras</p>
                    <p className="text-lg font-serif italic mb-2">→ {s.model.x1}</p>
                    <p className="text-lg font-serif italic">→ {s.model.x2}</p>
                 </div>
                 <div className="flex flex-col gap-2">
                    <span className="text-xs font-black uppercase text-black/60">Constant_Val</span>
                    <span className="text-6xl font-display leading-tight">{s.model.constant}</span>
                 </div>
                 <div className="p-4 bg-white/20 border-2 border-white/40">
                   <p className="text-[11px] font-bold uppercase tracking-widest">Target_Y: {s.model.y}</p>
                 </div>
              </div>
           </CinematicCard>
        </div>
      </div>
    </WaveSection>
  );
};

export const Results3467: React.FC = () => {
  const { t } = useLanguage();
  const s = t.vallejos.results;

  return (
    <WaveSection topColor="#f5ece0" bottomColor="#ffffff" variant="dramatic">
      <div className="max-w-6xl mx-auto space-y-32">
        <div className="text-center">
           <PremiumTitle subtitle="DATA_SCIENCE_EXTRACTION" className="items-center">
             {s.title}
           </PremiumTitle>
           <p className="mt-8 text-3xl font-serif italic text-black/40 max-w-2xl mx-auto italic">Hallazgos y Poder Predictivo del Modelo Logit</p>
        </div>

        <div className="grid md:grid-cols-2 gap-24 items-start">
           {/* Frecuencias */}
           <div className="space-y-16">
              <div className="p-10 border-8 border-black bg-[#f5ece0] shadow-[15px_15px_0_#ef4444] relative">
                 <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#ef4444] text-white flex items-center justify-center font-display text-4xl border-4 border-black rotate-12">%</div>
                 <h3 className="text-3xl font-pop uppercase mb-10 border-b-4 border-black pb-4 inline-block">Prevalencia</h3>
                 <div className="flex items-center gap-8 mb-10">
                    <span className="text-[10rem] font-display text-[#ef4444] leading-none">23</span>
                    <p className="text-2xl font-black uppercase italic leading-none text-black mt-4">{s.prevalence_general}</p>
                 </div>
                 <div className="p-6 bg-black text-white flex justify-between items-center border-4 border-black">
                    <span className="text-sm font-black uppercase tracking-widest text-[#ef4444]">Frecuencia_Alta:</span>
                    <span className="text-5xl font-display">{s.prevalence_high}</span>
                 </div>
              </div>

              <div className="space-y-10">
                 <h3 className="text-3xl font-pop uppercase border-l-[16px] border-[#ef4444] pl-6">Comportamientos</h3>
                 {s.ranking.map((row, i) => (
                    <div key={i} className="group">
                       <div className="flex justify-between items-end mb-4 group-hover:translate-x-2 transition-transform">
                          <span className="font-pop text-lg uppercase font-black">{row.item}</span>
                          <span className="text-5xl font-display text-[#ef4444]">{row.value}</span>
                       </div>
                       <div className="h-8 w-full bg-zinc-100 border-4 border-black relative overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: row.value }}
                            transition={{ duration: 1.5, ease: "circOut" }}
                            className={`h-full ${i === 0 ? 'bg-black' : 'bg-[#ef4444]'}`}
                          />
                       </div>
                    </div>
                 ))}
              </div>
           </div>

           {/* Predictivo */}
           <div className="flex flex-col gap-16 lg:sticky lg:top-32">
              <CinematicCard color="bg-[#0f172a]" title="MODEL_PREDICTION" className="text-white shadow-[25px_25px_0_#ef4444]">
                 <div className="space-y-10 mt-6">
                    <div className="border-b-4 border-white/10 pb-8 flex justify-between items-center group">
                       <span className="font-serif italic text-2xl group-hover:text-[#ef4444] transition-colors">Control de Insinuación [X1]</span>
                       <span className="text-7xl font-display text-[#ef4444]">-11%</span>
                    </div>
                    <div className="border-b-4 border-white/10 pb-8 flex justify-between items-center group">
                       <span className="font-serif italic text-2xl group-hover:text-[#ef4444] transition-colors">Control de Provocación [X2]</span>
                       <span className="text-7xl font-display bg-white text-black px-6 rotate-2">-21%</span>
                    </div>
                    <div className="p-6 bg-white/5 border-2 border-white/20">
                      <p className="text-xs font-black uppercase text-center tracking-[0.4em] text-white/60">{s.predictive_power.total_impact}</p>
                    </div>
                 </div>
              </CinematicCard>

              <div className="p-12 border-8 border-black border-dashed bg-[#ef4444] text-white rotate-[-2deg] shadow-[15px_15px_0_#000]">
                 <p className="text-5xl font-display uppercase italic leading-none mb-6 text-black opacity-30">EL DATO_KEY</p>
                 <p className="text-3xl font-black uppercase leading-tight">{s.fact}</p>
              </div>
           </div>
        </div>
      </div>
    </WaveSection>
  );
};

export const Limitaciones3467: React.FC = () => {
  const { t } = useLanguage();
  const s = t.vallejos.limitations;

  return (
    <div className="bg-[#f5ece0] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/absurd-dad.png')] z-0" />
      
      <section className="py-48 px-6 z-10 relative">
        <div className="max-w-6xl mx-auto space-y-20">
          <div className="flex items-center gap-12 border-b-12 border-black pb-12">
             <div className="text-[12rem] font-display uppercase text-black italic opacity-20">L</div>
             <PremiumTitle>
               {s.title}
             </PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
             {s.items.map((item, i) => (
               <CinematicCard key={i} color="bg-white" className="h-full group">
                  <span className="text-xl font-pop uppercase tracking-widest text-[#ef4444] block mb-6 font-black group-hover:scale-110 transition-transform origin-left">0{i+1}</span>
                  <p className="text-2xl font-bold font-serif leading-snug text-black/80">{item}</p>
               </CinematicCard>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const Discussion3467: React.FC = ({ onBack }: { onBack: () => void }) => {
  const { t } = useLanguage();
  const s = t.vallejos.discussion;
  const c = t.vallejos.conclusions;

  return (
    <WaveSection topColor="#f5ece0" bottomColor="#ef4444" variant="dramatic">
      <div className="max-w-6xl mx-auto space-y-32 py-20 pb-48">
        <h2 className="text-[12rem] md:text-[18rem] font-display uppercase leading-none text-black text-center" style={{ WebkitTextStroke: '4px white' }}>{s.title}</h2>
        
        <div className="grid md:grid-cols-2 gap-24 items-start">
           <div className="space-y-16">
              <BrutalCard color="bg-white" className="text-black p-16 rotate-[-2deg] shadow-[25px_25px_0_#000]">
                 <div className="w-20 h-2 bg-[#ef4444] mb-10" />
                 <p className="text-sm font-black uppercase text-[#ef4444] mb-6 tracking-widest">{s.boomerang_title}</p>
                 <p className="text-5xl font-serif italic mb-10 leading-tight text-black">
                    "{s.boomerang_quote}"
                 </p>
                 <p className="text-lg border-t-4 border-black/5 pt-8 opacity-60 font-medium italic">{s.comparison}</p>
              </BrutalCard>
              
              <div className="bg-black text-white p-12 border-8 border-white shadow-[20px_20px_0_#ef4444] relative overflow-hidden">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#ef4444] rotate-45 opacity-20" />
                 <p className="font-display text-4xl uppercase tracking-widest mb-10 text-[#ef4444]">Recomendaciones_Action</p>
                 <ul className="space-y-6">
                   {c.recommendations.map((item, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="flex gap-6 items-start text-lg font-bold"
                      >
                         <span className="text-[#ef4444] text-2xl shrink-0">◢</span>
                         <p className="leading-snug">{item}</p>
                      </motion.li>
                   ))}
                 </ul>
              </div>
           </div>

           <div className="space-y-16 lg:pt-32">
              <PremiumTitle subtitle="VEREDICTO FINAL" className="text-black">
                {c.title}
              </PremiumTitle>
              <p className="text-4xl font-serif italic leading-relaxed text-black/80">{c.main}</p>
              
              <CinematicCard color="bg-[#0f172a]" className="p-12 text-white space-y-10 shadow-[20px_20px_0_white]">
                 <p className="text-3xl font-bold italic text-center leading-quote leading-relaxed">"{c.final_thought}"</p>
                 <div className="flex justify-center gap-4">
                    {[1,2,3].map(i => <div key={i} className="w-20 h-3 bg-[#ef4444]" />)}
                 </div>
              </CinematicCard>

              <button 
                onClick={onBack}
                className="w-full bg-black text-white text-6xl py-12 font-display uppercase border-[12px] border-white shadow-[20px_20px_0_#0f172a] hover:bg-white hover:text-black hover:translate-x-[-4px] hover:translate-y-[-4px] active:translate-x-[4px] active:translate-y-[4px] transition-all"
              >
                Cerrar Análisis_
              </button>
           </div>
        </div>
      </div>
    </WaveSection>
  );
};
