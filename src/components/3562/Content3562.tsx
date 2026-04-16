import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Users,
  BarChart3,
  BookOpen,
  MessageCircle,
  HeartHandshake,
  Lightbulb,
  CheckCircle2,
  Quote,
  ChevronLeft,
  ChevronRight,
  X,
  AlertTriangle,
  Sparkles,
} from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import { Profile } from './types';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

function getColorClasses(color: string) {
  const map: Record<string, string> = {
    rose: 'bg-rose-100 text-rose-700 border-rose-400 border-4 shadow-[4px_4px_0_0_#000]',
    sky: 'bg-sky-100 text-sky-700 border-sky-400 border-4 shadow-[4px_4px_0_0_#000]',
    amber: 'bg-amber-100 text-amber-700 border-amber-400 border-4 shadow-[4px_4px_0_0_#000]',
    emerald: 'bg-emerald-100 text-emerald-700 border-emerald-400 border-4 shadow-[4px_4px_0_0_#000]',
  };
  return map[color] || map.rose;
}

export default function Content3562() {
  const [activeProfile, setActiveProfile] = useState<Profile | null>(null);
  const [theoryTab, setTheoryTab] = useState<'bourdieu' | 'goffman' | 'curso'>('bourdieu');
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const nextTestimonial = () => setTestimonialIndex((i) => (i + 1) % ARTICLE_DATA.testimonials.length);
  const prevTestimonial = () => setTestimonialIndex((i) => (i - 1 + ARTICLE_DATA.testimonials.length) % ARTICLE_DATA.testimonials.length);

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. PROBLEMÁTICA" color="bg-black" className="text-white mb-6 !rotate-0" />
               <PremiumTitle subtitle="CONTEXTURACIÓN SOCIAL">
                 Introducción & Desafíos
               </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-10">
              <div className="text-3xl leading-relaxed text-black/70 font-serif italic border-l-[12px] border-rose-600 pl-10 py-6">
                <p>{ARTICLE_DATA.introduction.context}</p>
              </div>
              
              <CinematicCard color="bg-zinc-900" title="RESEARCH_QUERY" className="text-white shadow-[12px_12px_0_0_#e11d48]">
                <p className="text-2xl font-display uppercase tracking-tight italic font-black text-rose-500 mb-4">Pregunta de investigación:</p>
                <p className="text-3xl font-serif leading-tight">"{ARTICLE_DATA.introduction.problem}"</p>
              </CinematicCard>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                <Sparkles size={24} className="text-rose-600" /> Dimensiones clave
              </h4>
              {ARTICLE_DATA.introduction.dimensions.map((d, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.02 }}
                  className="bg-white p-6 border-4 border-black border-dashed flex items-center gap-6 shadow-[6px_6px_0_0_#000]"
                >
                  <span className="text-4xl font-display font-black text-rose-600">0{i+1}</span>
                  <span className="text-xl font-sans font-bold uppercase tracking-tighter">{d}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: TRAYECTORIAS */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. TRAYECTORIAS" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="PERFILES DE ESTUDIO">
              Explora las Historias
            </PremiumTitle>
            <p className="mt-8 text-2xl text-black/60 font-medium max-w-3xl mx-auto">
              Selecciona un perfil para conocer su historia. Cada una representa experiencias reales documentadas en el estudio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {ARTICLE_DATA.profiles.map((p) => (
              <motion.button
                key={p.key}
                whileHover={{ y: -10, rotate: 1 }}
                onClick={() => setActiveProfile(p)}
                className="text-left bg-white border-8 border-black p-8 shadow-[12px_12px_0_0_#000] relative group overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-10 uppercase group-hover:opacity-40">{p.key}</div>
                <div className={`w-20 h-20 flex items-center justify-center text-4xl font-display font-black mb-6 ${getColorClasses(p.color)}`}>
                  {p.name[0]}
                </div>
                <h3 className="font-display text-3xl uppercase font-black leading-none mb-3">{p.name}</h3>
                <p className="font-mono text-sm font-black uppercase tracking-widest text-slate-500 mb-2">{p.age} años // {p.semester}</p>
                <p className="font-mono text-[10px] text-slate-400 uppercase font-black">{p.location}</p>
                
                <div className="flex flex-wrap gap-2 mt-8">
                  {p.tags.slice(0, 2).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-tighter">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t-4 border-black group-hover:bg-rose-600 group-hover:text-white transition-colors p-2 text-center font-display uppercase text-xs font-black">
                  Ver trayectoria_
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </WaveSection>

      {/* MODAL DE PERFIL NEOBRUTALISTA */}
      <AnimatePresence>
        {activeProfile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-6 backdrop-blur-xl bg-black/40"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="relative bg-white border-[12px] border-black p-10 md:p-20 max-w-4xl w-full shadow-[30px_30px_0_0_#e11d48] max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setActiveProfile(null)} 
                className="absolute top-8 right-8 bg-black text-white p-4 hover:bg-rose-600 transition-colors border-4 border-black"
              >
                <X className="w-8 h-8 font-black" />
              </button>
              
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className={`w-32 h-32 shrink-0 flex items-center justify-center text-6xl font-display font-black ${getColorClasses(activeProfile.color)}`}>
                  {activeProfile.name[0]}
                </div>
                <div>
                  <h3 className="text-6xl font-display uppercase font-black text-black leading-none">{activeProfile.name}</h3>
                  <p className="font-mono text-xl font-black text-slate-500 mt-4 uppercase">
                    {activeProfile.age} AÑOS // {activeProfile.semester} // {activeProfile.location}
                  </p>
                </div>
              </div>

              <div className="mt-12 space-y-8">
                <p className="text-3xl font-serif leading-relaxed text-black/80 italic">
                  "{activeProfile.story}"
                </p>
                
                {activeProfile.quote && (
                  <BrutalQuote className="bg-zinc-50 border-rose-600 mt-10 text-2xl !py-10">
                    "{activeProfile.quote}"
                  </BrutalQuote>
                )}
              </div>
              
              <div className="mt-16 flex justify-end">
                <button 
                  onClick={() => setActiveProfile(null)}
                  className="bg-black text-white px-12 py-6 font-display text-2xl uppercase border-4 border-black hover:bg-rose-600 transition-colors"
                >
                  Continuar_Leyendo_
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SECCIÓN 3: DATOS */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. DATOS DUROS" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="RADIOGRAFÍA CUANTITATIVA">
              Impacto en Números
            </PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
            {ARTICLE_DATA.stats.map((s, i) => (
              <CinematicCard key={i} color="bg-zinc-50" title={`VARIABLE_0${i+1}`} className="text-center group shadow-[10px_10px_0_0_#000]">
                <div className="text-8xl font-display font-black text-rose-600 mb-6 drop-shadow-[4px_4px_0_#000] group-hover:scale-110 transition-transform">{s.value}</div>
                <div className="text-2xl font-display font-black uppercase text-black leading-tight border-b-4 border-black inline-block pb-1">{s.label}</div>
                <div className="text-xs font-mono font-black uppercase text-slate-400 mt-6 tracking-widest">{s.context}</div>
              </CinematicCard>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Gráfico de Edades */}
            <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#fde047]">
              <h3 className="font-display text-4xl uppercase font-black mb-12 italic">Distribución por Edades</h3>
              <div className="space-y-8">
                {ARTICLE_DATA.ageDistribution.map((bar, i) => (
                  <div key={i} className="flex flex-col gap-3">
                    <div className="flex justify-between font-mono text-sm font-black uppercase tracking-tighter">
                      <span>{bar.label}</span>
                      <span className="text-rose-600">{bar.count} CASOS</span>
                    </div>
                    <div className="w-full h-12 bg-zinc-200 border-4 border-black p-1">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.widthPercent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "circOut" }}
                        className="bg-rose-600 h-full border-r-4 border-black"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comparación Capital */}
            <div className="space-y-10">
              <h3 className="font-display text-4xl uppercase font-black mb-12 italic text-center lg:text-left">Divergencia de Capital</h3>
              <CinematicCard color="bg-emerald-50" title="ALTO_CAPITAL" icon={Sparkles} className="shadow-[12px_12px_0_0_#10b981]">
                <p className="text-xl font-sans font-bold leading-tight">{ARTICLE_DATA.capitalComparison.high}</p>
              </CinematicCard>
              <CinematicCard color="bg-rose-50" title="BAJO_CAPITAL" icon={AlertTriangle} className="shadow-[12px_12px_0_0_#e11d48]">
                <p className="text-xl font-sans font-bold leading-tight">{ARTICLE_DATA.capitalComparison.low}</p>
              </CinematicCard>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: MARCO TEÓRICO */}
      <WaveSection topColor="#ffffff" bottomColor="#0f172a" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="IV. SUSTENTO" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="ABSTRACCIÓN CONCEPTUAL">
              Marco Teórico Interactivo
            </PremiumTitle>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {[
              { key: 'bourdieu', label: 'Bourdieu' },
              { key: 'goffman', label: 'Goffman' },
              { key: 'curso', label: 'Curso de vida' },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => setTheoryTab(t.key as any)}
                className={`px-10 py-5 border-[6px] border-black font-display uppercase font-black text-xl transition-all shadow-[8px_8px_0_0_#000] active:shadow-none active:translate-x-[8px] active:translate-y-[8px] ${
                  theoryTab === t.key
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-black hover:bg-rose-100'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="bg-zinc-50 border-[10px] border-black p-10 md:p-20 shadow-[25px_25px_0_0_rgba(0,0,0,0.1)] min-h-[400px]">
            <AnimatePresence mode="wait">
              {theoryTab === 'bourdieu' && (
                <motion.div
                  key="bourdieu"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <h3 className="font-display text-5xl uppercase font-black mb-12 text-rose-600 italic">Teoría de la Reproducción Social</h3>
                  <div className="grid md:grid-cols-3 gap-10">
                    {[
                      { title: "C. ECONÓMICO", desc: "Recursos monetarios. Determina si puedes pagar guardería, tener equipo, internet." },
                      { title: "C. SOCIAL", desc: "Red de apoyo. Familia, pareja, amistades que cuidan al bebé mientras estudias." },
                      { title: "C. CULTURAL", desc: "Conocimientos simbólicos. Saber 'moverse' en el sistema universitario." }
                    ].map((c, i) => (
                      <CinematicCard key={i} color="bg-white" title={`MODALIDAD_0${i+1}`} className="shadow-[8px_8px_0_0_#000]">
                        <h4 className="font-display text-2xl uppercase font-black mb-4 leading-none">{c.title}</h4>
                        <p className="text-lg font-serif italic text-black/70 leading-snug">{c.desc}</p>
                      </CinematicCard>
                    ))}
                  </div>
                </motion.div>
              )}

              {theoryTab === 'goffman' && (
                <motion.div
                  key="goffman"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <h3 className="font-display text-5xl uppercase font-black mb-12 text-rose-600 italic">Teoría del Estigma</h3>
                  <p className="text-3xl font-serif leading-relaxed italic text-black/80 max-w-4xl border-l-[16px] border-black pl-12 py-6 mb-16">
                    "El estigma es un fenómeno social que surge a partir de la desacreditación a las personas por ciertas condiciones."
                  </p>
                  <div className="grid md:grid-cols-3 gap-10">
                    {ARTICLE_DATA.stigmaExamples.map((s, i) => (
                      <CinematicCard key={i} color="bg-black" className="text-white shadow-[10px_10px_0_0_#e11d48]" title={s.label}>
                        <p className="text-xl font-display uppercase font-black tracking-tighter leading-tight italic">{s.text}</p>
                      </CinematicCard>
                    ))}
                  </div>
                </motion.div>
              )}

              {theoryTab === 'curso' && (
                <motion.div
                  key="curso"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <h3 className="font-display text-5xl uppercase font-black mb-12 text-rose-600 italic">Enfoque de Curso de Vida</h3>
                  <p className="text-2xl font-serif leading-relaxed mb-16 text-black/80 lg:max-w-3xl">
                    El modelo normativo asume una secuencia lineal. Las trayectorias reales son <span className="text-rose-600 font-black uppercase">simultáneas, improvisadas y no planificadas</span>.
                  </p>
                  <div className="flex flex-col lg:flex-row items-stretch gap-10">
                    <CinematicCard color="bg-white" title="MODELO_NORMATIVO" className="flex-1 border-dashed">
                      <div className="flex items-center gap-4 flex-wrap text-xl font-display uppercase font-black italic">
                        <span className="bg-slate-100 p-2">Estudios</span>
                        <span className="text-rose-600">→</span>
                        <span className="bg-slate-100 p-2">Trabajo</span>
                        <span className="text-rose-600">→</span>
                        <span className="bg-slate-100 p-2">Matrimonio</span>
                        <span className="text-rose-600">→</span>
                        <span className="bg-slate-100 p-2">Hijos</span>
                      </div>
                    </CinematicCard>
                    <CinematicCard color="bg-rose-50" title="TRAYECTORIA_REAL" className="flex-1 shadow-[15px_15px_0_0_#e11d48]">
                      <div className="flex items-center gap-4 flex-wrap text-xl font-display uppercase font-black italic mb-6">
                        <span className="bg-rose-600 text-white p-2">Estudios</span>
                        <span className="bg-amber-400 text-black p-2">Hijos</span>
                        <span className="bg-sky-400 text-black p-2">Trabajo</span>
                        <span className="bg-zinc-200 line-through opacity-40 p-2">Matrimonio</span>
                      </div>
                      <p className="font-mono text-xs uppercase font-black tracking-widest bg-black text-white p-2 inline-block">Sincronía // Imprevisibilidad // Resiliencia</p>
                    </CinematicCard>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: VOCES */}
      <section className="py-40 bg-[#0f172a] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent opacity-10 pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="bg-white border-[16px] border-black p-12 md:p-24 shadow-[40px_40px_0_0_#e11d48] relative overflow-hidden group">
            <Quote className="absolute -top-10 -left-10 w-64 h-64 text-rose-500/5 group-hover:rotate-12 transition-transform duration-1000" />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonialIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "circOut" }}
                className="relative z-10"
              >
                <p className="text-4xl md:text-7xl font-serif leading-[1.1] italic text-black/90 mb-12">
                  "{ARTICLE_DATA.testimonials[testimonialIndex].text}"
                </p>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-4 bg-rose-600" />
                  <p className="text-3xl font-display uppercase font-black tracking-tighter">
                    — {ARTICLE_DATA.testimonials[testimonialIndex].author}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex flex-col md:flex-row items-center justify-between mt-20 gap-8">
              <button 
                onClick={prevTestimonial} 
                className="bg-black text-white px-10 py-5 border-4 border-black font-display uppercase font-black flex items-center gap-4 hover:bg-rose-600 transition-colors shadow-[6px_6px_0_0_#000] active:shadow-none"
              >
                <ChevronLeft className="w-8 h-8" /> Anterior
              </button>
              <div className="flex gap-4">
                {ARTICLE_DATA.testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setTestimonialIndex(i)}
                    className={`h-4 border-2 border-black transition-all ${i === testimonialIndex ? 'w-24 bg-rose-600' : 'w-8 bg-zinc-200'}`}
                  />
                ))}
              </div>
              <button 
                onClick={nextTestimonial} 
                className="bg-black text-white px-10 py-5 border-4 border-black font-display uppercase font-black flex items-center gap-4 hover:bg-rose-600 transition-colors shadow-[6px_6px_0_0_#000] active:shadow-none"
              >
                Siguiente <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: REDES Y ESTRATEGIAS */}
      <WaveSection topColor="#0f172a" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <BrutalSticker text="V. SOPORTE" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
              <PremiumTitle subtitle="INFRAESTRUCTURA HUMANA">Redes de Apoyo</PremiumTitle>
              <div className="grid grid-cols-2 gap-6 mt-16">
                {ARTICLE_DATA.supportNetworks.map((net, i) => (
                  <CinematicCard key={i} color="bg-zinc-50" title={net.name} className="shadow-[8px_8px_0_0_#000]">
                    <div className="text-5xl mb-4 text-center">{net.icon}</div>
                    <p className="text-sm font-sans font-bold leading-snug text-center">{net.desc}</p>
                  </CinematicCard>
                ))}
              </div>
            </div>

            <div className="lg:pt-20">
              <BrutalSticker text="VI. RESILIENCIA" color="bg-black" className="text-white mb-8 !rotate-0" />
              <PremiumTitle subtitle="AGENCIA PERSONAL">Estrategias</PremiumTitle>
              <div className="space-y-6 mt-16">
                {ARTICLE_DATA.strategies.map((s, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-8 bg-white border-8 border-black p-8 shadow-[12px_12px_0_0_#fde047] rotate-[-1deg] hover:rotate-0 transition-transform"
                  >
                    <span className="w-16 h-16 shrink-0 bg-rose-600 text-white flex items-center justify-center font-display text-4xl border-4 border-black">{i + 1}</span>
                    <p className="text-2xl font-display uppercase font-black leading-none tracking-tighter">{s}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center">
          <BrutalSticker text="VII. CONCLUSIONES" color="bg-black" className="text-white mb-12 !rotate-0" />
          <PremiumTitle className="items-center" subtitle="HACIA LA EQUIDAD MATERIAL">¿Qué se necesita?</PremiumTitle>
          
          <div className="bg-rose-600 text-white p-12 md:p-24 border-[16px] border-black shadow-[40px_40px_0_0_#000] my-24 rotate-1 relative group overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
            <p className="text-4xl md:text-6xl font-display uppercase font-black leading-none tracking-tighter mb-12 italic drop-shadow-[4px_4px_0_#000]">
              "Las universidades deben transitar de políticas de equidad numérica a políticas de <span className="text-black bg-white px-4">equidad material</span>"
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
              {ARTICLE_DATA.solutions.map((sol) => (
                <div key={sol.id} className="bg-white text-black p-8 border-8 border-black shadow-[10px_10px_0_0_#000] hover:scale-105 transition-transform group/card">
                  <CheckCircle2 className="w-12 h-12 text-rose-600 mb-6 group-hover/card:scale-125 transition-transform" />
                  <span className="text-2xl font-display uppercase font-black leading-none tracking-tighter">{sol.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-20 text-left mb-40">
            <div>
              <h3 className="font-display text-4xl uppercase font-black mb-12 text-rose-600 underline decoration-8">Limitaciones</h3>
               <ul className="space-y-6">
                 {ARTICLE_DATA.limitations.map((c, i) => (
                   <li key={i} className="flex gap-6 items-start font-serif text-2xl italic text-black/70">
                     <span className="text-rose-600 font-black">●</span> {c}
                   </li>
                 ))}
               </ul>
            </div>
            <div>
              <h3 className="font-display text-4xl uppercase font-black mb-12 text-black underline decoration-8">Conclusiones_Fin_</h3>
               <ul className="space-y-6">
                 {ARTICLE_DATA.conclusions.map((c, i) => (
                   <li key={i} className="flex gap-6 items-start font-sans text-xl font-bold uppercase tracking-tighter">
                     <span className="text-rose-600 font-black">▶</span> {c}
                   </li>
                 ))}
               </ul>
            </div>
          </div>

          <div className="py-24 border-t-8 border-black border-dashed">
            <p className="text-5xl md:text-8xl font-display uppercase font-black tracking-tighter mb-12 italic leading-none">
              ¿Tu universidad está diseñada para las <span className="text-rose-600">madres estudiantes?</span>
            </p>
            <div className="w-32 h-8 bg-black mx-auto" />
          </div>
        </div>
      </WaveSection>
    </div>
  );
}
