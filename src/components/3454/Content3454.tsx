import { motion } from 'motion/react';
import { Microscope, Users, ClipboardList, Database, ShieldAlert, Heart, MessageSquare, Scale } from 'lucide-react';
import { DIMENSIONS, METHODOLOGY, DATA_HIGHLIGHTS, TESTIMONIALS, LIMITATIONS } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import SafetyExplorer3454 from './SafetyExplorer3454';

export default function Content3454() {
  return (
    <div className="bg-[#F3F4F6]">
      {/* SECCIÓN 1: ESPECIFICACIONES TÉCNICAS */}
      <WaveSection topColor="#F3F4F6" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <BrutalSticker text="I. AUDITORÍA METODOLÓGICA" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#059669]" />
            <PremiumTitle subtitle="PARADIGMA DE INVESTIGACIÓN">
              Ficha Técnica del Estudio
            </PremiumTitle>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <CinematicCard color="bg-white" title="DISEÑO" icon={Microscope} className="border-4 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.design}</p>
              <p className="text-[10px] mt-4 font-mono opacity-50 uppercase font-black italic">{METHODOLOGY.approach}</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="MUESTRA" icon={Users} className="border-4 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.sample}</p>
              <p className="text-[10px] mt-4 font-mono opacity-50 uppercase font-black italic">Aleatorio Simple</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="INSTRUMENTO" icon={ClipboardList} className="border-4 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.instruments}</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="TÉCNICA" icon={Database} className="border-4 shadow-[8px_8px_0_0_#000]">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.analysis}</p>
            </CinematicCard>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: MAPEO DE SEGURIDAD INTERACTIVO */}
      <WaveSection topColor="#ffffff" bottomColor="#F3F4F6" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <SafetyExplorer3454 />
        </div>
      </WaveSection>

      {/* SECCIÓN 3: EXPLORADOR DIMENSIONAL */}
      <WaveSection topColor="#F3F4F6" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="III. DIMENSIONES" color="bg-white" className="text-black mb-6 !rotate-0 border-4 shadow-[4px_4px_0_0_#059669]" />
            <PremiumTitle className="items-center" subtitle="CATEGORÍAS DE ANÁLISIS">
              Estructura de la Cultura de Paz
            </PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {DIMENSIONS.map((d) => (
              <BrutalCard key={d.code} color="bg-white" className="border-4" title={`${d.code}: ${d.name}`}>
                 <div className="flex gap-8 items-start">
                   <div className="text-7xl bg-zinc-50 p-6 border-4 border-black shadow-[6px_6px_0_0_#059669] rotate-[-2deg]">
                     {d.emoji}
                   </div>
                   <div className="space-y-6">
                     <p className="text-2xl font-serif italic text-black/70 leading-relaxed font-medium">"{d.desc}"</p>
                     <div className="bg-[#059669]/5 border-l-8 border-[#059669] p-6 shadow-[8px_8px_0_0_#000]">
                        <span className="block font-mono text-[10px] uppercase font-black text-[#059669] mb-2 tracking-widest">Métrica Clave //</span>
                        <p className="text-lg font-black uppercase text-black italic leading-none tracking-tighter">{d.highlight}</p>
                     </div>
                   </div>
                 </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: VOCES Y CITAS */}
      <WaveSection topColor="#ffffff" bottomColor="#F3F4F6" variant="dramatic">
        <div className="max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5">
                <BrutalSticker text="IV. INSIGHTS" color="bg-black" className="text-white mb-10 !rotate-0" />
                <PremiumTitle subtitle="RESULTADOS CUALITATIVOS">Lo que dicen los estudiantes</PremiumTitle>
                <div className="mt-12 space-y-8">
                  <BrutalCard color="bg-[#059669]" title="ACCIÓN PROPUESTA" className="text-white border-4 rotate-1 shadow-[10px_10px_0_0_#000]">
                    <div className="text-6xl font-display font-black mb-4 leading-none italic">70%</div>
                    <p className="text-xl font-display uppercase font-black">Demanda de cursos, conferencias y pláticas formativas.</p>
                  </BrutalCard>
                  <BrutalCard color="bg-white" title="VALOR COMÚN" className="border-4 -rotate-1 shadow-[10px_10px_0_0_#059669]">
                    <div className="text-6xl font-display font-black text-[#059669] mb-4 leading-none italic">20%</div>
                    <p className="text-xl font-display uppercase font-black">Priorización del respeto en espacios educativos.</p>
                  </BrutalCard>
                </div>
              </div>
              
              <div className="lg:col-span-7 space-y-12 pt-20 lg:pt-0 text-left">
                {TESTIMONIALS.map((t, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative group"
                  >
                    <BrutalQuote author={t.author} className="bg-white border-4 border-black p-12 shadow-[15px_15px_0_0_#000] group-hover:shadow-[20px_20px_0_0_#059669] transition-all">
                       <p className="text-3xl md:text-4xl font-display uppercase font-black italic leading-[1.1] tracking-tighter">
                         "{t.quote}"
                       </p>
                    </BrutalQuote>
                    <div className="absolute -bottom-6 right-10 bg-black text-white px-8 py-3 font-mono text-xs uppercase font-black border-4 border-black rotate-[-2deg]">
                      {t.role}
                    </div>
                  </motion.div>
                ))}
              </div>
           </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: DISCUSIÓN Y FUTURO */}
      <section className="bg-zinc-950 text-white py-40 border-t-[20px] border-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
           <div className="flex flex-col md:flex-row gap-20 items-center">
              <div className="md:w-1/2">
                 <BrutalSticker text="V. CONCLUSIONES" color="bg-white" className="text-black mb-10 !rotate-0" />
                 <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none mb-12 tracking-tighter">
                   Universidad como <span className="text-[#059669] italic underline decoration-white decoration-8">Refugio_</span>
                 </h2>
                 <p className="text-2xl font-serif italic text-zinc-400 leading-relaxed border-l-8 border-[#059669] pl-10">
                   "Fortalecer una cultura institucional basada en la inclusión y la paz posiciona a la universidad como agente transformador de sociedades justas."
                 </p>
              </div>

              <div className="md:w-1/2 grid grid-cols-1 gap-8">
                 <BrutalCard color="bg-zinc-900 shadow-[10px_10px_0_0_#059669]" title="ROL DOCENTE" className="border-zinc-800">
                    <p className="text-lg font-serif italic text-zinc-400">Los profesores no solo brindan conocimiento, actúan como muros de contención ética frente a la violencia circundante.</p>
                 </BrutalCard>
                 <BrutalCard color="bg-zinc-900 shadow-[10px_10px_0_0_#059669]" title="CURRÍCULO" className="border-zinc-800">
                    <p className="text-lg font-serif italic text-zinc-400">La paz debe ser un eje transversal, no una charla aislada. Es una competencia ciudadana fundamental.</p>
                 </BrutalCard>
              </div>
           </div>

           {/* LIMITACIONES LIST */}
           <div className="mt-40 bg-white text-black p-12 md:p-24 border-[15px] border-black shadow-[40px_40px_0_0_#059669] rotate-1">
              <div className="text-center mb-16 underline decoration-[#059669] decoration-8 underline-offset-8">
                <h3 className="font-display text-5xl uppercase font-black">Limitaciones Académicas</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {LIMITATIONS.map((limit, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <span className="w-12 h-12 bg-black text-white shrink-0 flex items-center justify-center font-display text-2xl font-black">
                      {i + 1}
                    </span>
                    <p className="text-xl font-serif italic text-zinc-600 leading-tight">
                      "{limit}"
                    </p>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
