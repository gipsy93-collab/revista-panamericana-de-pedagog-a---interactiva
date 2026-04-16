import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Users,
  Settings,
  Puzzle,
  Lightbulb,
  CheckCircle2,
  Quote,
  TrendingUp,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export default function Content3606() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f0fdfa" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. INTRODUCCIÓN" color="bg-black" className="text-white mb-6 !rotate-0" />
               <PremiumTitle subtitle="REALIDAD CONTEXTUAL">
                 La Paradoja de la Inclusión
               </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-10">
              <div className="text-3xl leading-relaxed text-black/70 font-serif italic border-l-[16px] border-teal-600 pl-10 py-10 bg-zinc-50 shadow-[10px_10px_0_0_rgba(0,0,0,0.05)]">
                <p>La inclusión en la educación superior ha transitado de la invisibilidad a la prescripción normativa, pero la praxis cotidiana revela tensiones profundas entre el discurso y la realidad material.</p>
              </div>
              
              <CinematicCard color="bg-zinc-900" title="RESEARCH QUERY" className="text-white shadow-[15px_15px_0_0_#0d9488]">
                <p className="text-3xl font-serif leading-tight italic">"¿Cómo se gestiona el proceso de inclusión de los estudiantes con discapacidad desde la perspectiva de docentes, estudiantes y egresados de una licenciatura en educación especial?"</p>
              </CinematicCard>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <h4 className="font-display text-2xl uppercase font-black text-black italic border-b-4 border-teal-600 pb-2 inline-block mb-4">Dimensiones Emergentes</h4>
              {[
                { label: "Políticas Institucionales", icon: FileText },
                { label: "Cultura Inclusiva", icon: Users },
                { label: "Prácticas Pedagógicas", icon: Lightbulb }
              ].map((d, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05, x: 10 }}
                  className="bg-white p-6 border-4 border-black flex items-center gap-6 shadow-[8px_8px_0_0_#000]"
                >
                  <div className="bg-teal-600 text-white p-3 border-2 border-black">
                    <d.icon size={24} />
                  </div>
                  <span className="text-xl font-display font-black uppercase tracking-tighter">{d.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: METODOLOGÍA */}
      <WaveSection topColor="#f0fdfa" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. METODOLOGÍA" color="bg-teal-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="CONSTRUCCIÓN DEL CONOCIMIENTO">
              Enfoque Cualitativo
            </PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <CinematicCard color="bg-zinc-50" title="EL PROCEDIMIENTO" className="shadow-[10px_10px_0_0_#000]">
                <p className="text-2xl font-serif leading-relaxed italic text-black/80">
                  Estudio cualitativo descriptivo con un universo de 7 actores clave. Se utilizó la codificación en tres niveles (abierta, axial y selectiva) para identificar categorías latentes en los discursos.
                </p>
              </CinematicCard>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-teal-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-1">
                  <div className="text-6xl font-display font-black mb-2">4</div>
                  <div className="font-mono text-sm uppercase font-black">Docentes</div>
                </div>
                <div className="bg-black text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] -rotate-1">
                  <div className="text-6xl font-display font-black mb-2">3</div>
                  <div className="font-mono text-sm uppercase font-black">Estudiantes/Egresados</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-teal-600/10 blur-[100px] -z-10" />
              <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#fde047] relative z-10">
                <h3 className="font-display text-4xl uppercase font-black mb-10 italic">Discapacidades Representadas</h3>
                <div className="space-y-6">
                  {["Visual", "Intelectual Leve", "TEA Grado 1"].map((d, i) => (
                    <div key={i} className="flex items-center gap-6 group">
                      <div className="w-12 h-12 shrink-0 bg-black text-white flex items-center justify-center font-display text-2xl group-hover:bg-teal-600 transition-colors">
                        {i+1}
                      </div>
                      <span className="text-2xl font-display uppercase font-black tracking-tighter border-b-4 border-black inline-block flex-1 group-hover:border-teal-600 transition-colors">
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: RESULTADOS (LOS 4 MOMENTOS) */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="III. RESULTADOS" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="EL PROCESO DE GESTIÓN">
              Las 4 Fases de la Inclusión
            </PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-20">
            {ARTICLE_DATA.results.management_process.map((p, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className={`text-left p-8 border-8 border-black transition-all ${
                  activeStep === i 
                    ? 'bg-teal-600 text-white translate-x-3 translate-y-3 shadow-none' 
                    : 'bg-white text-black shadow-[10px_10px_0_0_#000] hover:bg-teal-50'
                }`}
              >
                <div className="font-display text-5xl font-black mb-4">0{i+1}</div>
                <h3 className="font-display text-2xl uppercase font-black leading-none">{p.title}</h3>
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-black text-white p-12 md:p-20 border-[12px] border-black shadow-[30px_30px_0_0_#fde047]"
            >
              <div className="flex items-center gap-6 mb-12">
                <Settings className="w-16 h-16 text-teal-400 animate-spin-slow" />
                <h3 className="text-5xl md:text-7xl font-display uppercase font-black tracking-tighter leading-none italic text-teal-400">
                  {ARTICLE_DATA.results.management_process[activeStep].title}
                </h3>
              </div>
              <p className="text-3xl leading-relaxed font-serif italic text-white/90">
                "{ARTICLE_DATA.results.management_process[activeStep].key_idea}"
              </p>
              <div className="mt-12 h-2 w-full bg-white/20 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1 }}
                  className="h-full bg-teal-400"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: VOCES CRÍTICAS */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <BrutalSticker text="IV. VOCES" color="bg-black" className="text-white mb-8 !rotate-0" />
              <PremiumTitle subtitle="NARRATIVAS DOCENTES">¿Qué dicen los actores?</PremiumTitle>
              <div className="space-y-6">
                {ARTICLE_DATA.results.findings.voices.map((v, i) => (
                  <BrutalQuote key={i} className="text-xl shadow-[10px_10px_0_0_#0d9488]">
                    "{v.quote}"
                    <span className="block mt-4 text-sm font-display uppercase font-black text-teal-600">— {v.author}</span>
                  </BrutalQuote>
                ))}
              </div>
            </div>

            <div className="lg:pt-20">
               <CinematicCard color="bg-zinc-900" className="text-white shadow-[20px_20px_0_0_#fde047] h-full" title="SÍNTESIS DEL HALLAZGO">
                  <h4 className="text-4xl font-display uppercase font-black mb-10 text-teal-400 italic">La Paradoja de la Buena Voluntad</h4>
                  <p className="text-2xl font-serif leading-relaxed mb-12 italic">
                    "Existe una predisposición actitudinal favorable, pero el proceso de inclusión se percibe como una carga adicional autogestionada por el docente, ante la ausencia de protocolos sistémicos institucionales."
                  </p>
                  <div className="p-8 bg-white text-black border-4 border-black rotate-2">
                    <p className="font-mono text-sm font-black uppercase tracking-widest leading-tight">
                      AGOTAMIENTO // IMPROVISACIÓN // COMPROMISO ÉTICO // VACÍO PROTOCOLAR
                    </p>
                  </div>
               </CinematicCard>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: LIMITACIONES Y PROPUESTA */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="bg-white border-8 border-black p-12 shadow-[15px_15px_0_0_#ef4444]">
              <h3 className="font-display text-4xl uppercase font-black mb-12 italic">Limitaciones</h3>
              <ul className="space-y-8">
                {ARTICLE_DATA.limitations.map((l, i) => (
                  <li key={i} className="flex gap-6 items-start font-serif text-2xl italic text-black/70">
                    <span className="text-red-600 font-black">!</span> {l}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-12">
               <BrutalSticker text="V. PROPUESTAS" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#fde047]" />
               <PremiumTitle subtitle="RUTA DE ACCIÓN" className="text-white">Líneas Estratégicas</PremiumTitle>
               <div className="space-y-6">
                 {ARTICLE_DATA.results.lines_of_action.map((line, i) => (
                   <motion.div 
                     key={i} 
                     initial={{ opacity: 0, x: 20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     transition={{ delay: i * 0.1 }}
                     className="bg-zinc-800 border-4 border-white p-8 flex items-center gap-8 group hover:-translate-x-2 transition-transform"
                   >
                     <div className="w-16 h-16 bg-white text-black flex items-center justify-center font-display text-4xl group-hover:rotate-12 transition-transform">
                       0{i+1}
                     </div>
                     <span className="text-2xl font-display uppercase font-black tracking-tighter text-white">{line}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
          </div>

          <div className="mt-40 bg-teal-600 text-white p-16 md:p-32 border-[20px] border-black shadow-[40px_40px_0_0_#fde047] relative group overflow-hidden text-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
            <h2 className="text-6xl md:text-[9rem] font-display uppercase font-black leading-[0.8] mb-12 italic drop-shadow-[10px_10px_0_#000]">
              Inclusión Sistémica
            </h2>
            <div className="max-w-4xl mx-auto border-t-8 border-black pt-12">
              <p className="text-3xl md:text-5xl font-serif italic mb-12">
                "No basta con abrir la puerta; es imperativo construir los puentes que permitan habitar el espacio."
              </p>
              <div className="flex justify-center gap-10">
                <div className="h-4 w-24 bg-white" />
                <div className="h-4 w-24 bg-black shadow-[4px_4px_0_0_#fff]" />
                <div className="h-4 w-24 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </WaveSection>
    </div>
  );
}
