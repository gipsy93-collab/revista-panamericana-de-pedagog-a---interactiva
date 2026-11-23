import React from 'react';
import { motion } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText, Globe, Filter, ShieldCheck,
  TrendingUp, BarChart3, HelpCircle, PenTool, LayoutTemplate, MessageSquareQuote
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';

export default function Content3543() {
  return (
    <div className="bg-white">
      {/* 2.3 OBJETIVOS */}
      <section className="bg-indigo-950 text-white p-12 md:p-24 lg:p-32 border-b-[12px] border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <BrutalSticker text="2.3 OBJETIVOS" color="bg-indigo-600" className="text-white mb-10 !rotate-0 shadow-[6px_6px_0_0_#f59e0b] rounded-xl" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, type: "spring" }}
            >
               <h3 className="font-display text-4xl md:text-5xl uppercase font-black italic mb-6 leading-tight text-indigo-400">Objetivo General_</h3>
               <motion.p 
                 whileHover={{ x: 8 }}
                 transition={{ type: "spring", stiffness: 300 }}
                 className="text-2xl md:text-4xl font-serif italic border-l-8 border-indigo-600 pl-8 leading-snug text-white/95 cursor-default"
               >
                 "Describir las prácticas docentes dirigidas al desarrollo de la escritura académica."
               </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            >
               <h3 className="font-display text-2xl uppercase font-black italic mb-6 border-b-2 border-white/20 pb-4 tracking-normal">Objetivos Específicos</h3>
               <ul className="space-y-4 font-display text-base md:text-lg uppercase font-bold tracking-normal">
                  {[
                    "Conceptualización de la escritura académica.",
                    "Frecuencia de las actividades asignadas.",
                    "Tipos de trabajos de escritura académica.",
                    "Evaluación y acompañamiento brindado.",
                    "Relación entre asignación e importancia."
                  ].map((obj, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i, type: "spring", stiffness: 300 }}
                      whileHover={{ x: 10, transition: { duration: 0.15 } }}
                      className="flex gap-4 items-center cursor-default p-2 rounded-xl hover:bg-white/5 transition-colors"
                    >
                       <span className="w-8 h-8 bg-indigo-600 text-white flex items-center justify-center font-black rotate-2 flex-shrink-0 rounded-xl shadow-[2px_2px_0_0_#000]">{i+1}</span>
                       <span>{obj}</span>
                    </motion.li>
                  ))}
               </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. METODOLOGÍA */}
      <WaveSection topColor="#0f172a" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto py-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-12"
          >
            <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white !rotate-0 shadow-[6px_6px_0_0_#10b981] rounded-xl" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
             {[
               { icon: PenTool, title: "3.1 Tipo", desc: "Enfoque Cualitativo, estudio de caso descriptivo de profundidad y transeccional.", border: "#000", bg: "bg-white text-black" },
               { icon: LayoutTemplate, title: "3.3 Instrumentos", desc: "Entrevista semiestructurada (11 preguntas) y revisión de planeaciones de clase.", border: "#4f46e5", bg: "bg-white text-black" },
               { icon: SearchCode, title: "3.5 Análisis", desc: "Categorización emergente en torno a conceptualización, evaluación, retroalimentación e importancia.", border: "#f59e0b", bg: "bg-zinc-950 text-white", iconColor: "text-amber-500" },
             ].map((box, i) => {
               const Icon = box.icon;
               return (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 45, scale: 0.9 }}
                   whileInView={{ opacity: 1, y: 0, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.15, type: "spring", stiffness: 350, damping: 22 }}
                   whileHover={{ 
                     y: -8, 
                     scale: 1.02,
                     boxShadow: `14px 14px 0px 0px ${box.border}`,
                     transition: { duration: 0.15 }
                   }}
                   className={`${box.bg} border-4 border-black p-8 shadow-[8px_8px_0_0_${box.border}] rounded-3xl cursor-pointer select-none transition-shadow`}
                 >
                    <h4 className={`font-display text-2xl font-black uppercase italic mb-4 flex items-center gap-3 ${box.iconColor || ''}`}>
                      <Icon size={28} /> {box.title}
                    </h4>
                    <p className="font-sans font-bold uppercase text-xs leading-relaxed opacity-75">{box.desc}</p>
                 </motion.div>
               );
             })}
          </div>
        </div>
      </WaveSection>

      {/* 4.1 HALLAZGO PRINCIPAL */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block mb-10"
          >
            <BrutalSticker text="4.1 HALLAZGO PRINCIPAL" color="bg-rose-600" className="text-white !rotate-0 shadow-[6px_6px_0_0_#000] rounded-xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, rotate: 0.5, transition: { duration: 0.2 } }}
          >
            <BrutalQuote author="Ríos-Higuera & Sotomayor-Andrade (2026)" className="bg-zinc-50 border-[8px] border-black text-2xl md:text-3xl font-serif italic shadow-[18px_18px_0_0_#f59e0b] leading-relaxed rounded-3xl cursor-default">
               "Aunque 13 de 14 docentes consideran importante la escritura académica, hay quienes la trabajan con poca frecuencia o no la trabajan. No existe acompañamiento durante el proceso ni uniformidad en criterios de evaluación."
            </BrutalQuote>
          </motion.div>
        </div>
      </section>

      {/* 5.1 INTERPRETACIÓN DE LOS HALLAZGOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-7xl mx-auto py-20">
          <BrutalSticker text="5.1 INTERPRETACIÓN" color="bg-black" className="text-white mb-12 !rotate-0 shadow-[6px_6px_0_0_#4f46e5] rounded-xl" />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ type: "spring", stiffness: 300 }}
               className="space-y-8"
             >
                <h3 className="font-display text-4xl md:text-6xl uppercase font-black italic text-black leading-tight tracking-tight">
                  La Brecha del <br/> 
                  <span className="text-indigo-600 underline decoration-8 decoration-indigo-200 uppercase">Acompañamiento_</span>
                </h3>
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-black/80 font-medium border-l-8 border-indigo-600 pl-8">
                  Los docentes muestran conciencia de la complejidad de la escritura como proceso cognitivo e instrumento epistémico, coincidiendo con el marco de Carlino (2008). Sin embargo, esta conciencia no se traduce necesariamente en práctica docente.
                </p>
             </motion.div>
             <motion.div 
               initial={{ opacity: 0, x: 40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               whileHover={{ y: -6, boxShadow: "26px 26px 0px 0px #4f46e5", transition: { duration: 0.15 } }}
               className="bg-white border-[8px] md:border-[12px] border-black p-8 md:p-12 shadow-[20px_20px_0_0_#4f46e5] rounded-3xl space-y-8 transition-shadow cursor-default"
             >
                <p className="font-sans font-bold uppercase text-black/70 leading-relaxed text-sm tracking-wide">
                   COINCIDENCIA CON CASTELLÓ Y MATEOS (2015): LOS DOCENTES VALORAN LA ESCRITURA PERO REALIZAN POCAS PRÁCTICAS PARA APOYAR A LOS ESTUDIANTES REALMENTE.
                </p>
                <div className="h-px bg-black opacity-10" />
                <p className="font-sans font-bold uppercase text-black/70 leading-relaxed text-sm tracking-wide">
                   COINCIDENCIA CON ORTIZ-CASALLAS (2015): DOCENTES ASUMEN QUE OTROS (ÁREA DE LENGUA) DEBEN ENSEÑAR ESCRITURA.
                </p>
             </motion.div>
          </div>
        </div>
      </WaveSection>

      {/* 6.2 CONCLUSIONES ESPECÍFICAS: Cajas que aparecen en cascada con hover reactivo */}
      <section className="py-28 bg-indigo-900 border-y-[12px] border-black px-6 overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <BrutalSticker text="6.2 CONCLUSIONES ESPECÍFICAS" color="bg-amber-500" className="text-black mb-16 !rotate-0 shadow-[6px_6px_0_0_#fff] rounded-xl" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { t: "Conceptualización", c: "Los docentes ven la escritura como un proceso complejo que beneficia cognitivamente al estudiante." },
              { t: "Liderazgo de Inglés", c: "La especialidad con mayor práctica activa, influenciada por formación bilingüe específica." },
              { t: "El Ensayo", c: "Es el tipo de texto más solicitado transversalmente en todas las especialidades." },
              { t: "Falta de Uniformidad", c: "No hay criterios de evaluación compartidos ni estandarizados entre el profesorado." },
              { t: "Vacío de Acompañamiento", c: "No existe acompañamiento sistemático durante el proceso interno de escritura." },
              { t: "Brecha Valor-Acción", c: "No existe una relación directa entre la importancia declarada y la práctica docente real." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, type: "spring", stiffness: 350, damping: 20 }}
                whileHover={{ 
                  scale: 1.04, 
                  y: -6, 
                  rotate: (i % 2 === 0 ? 1 : -1),
                  boxShadow: "16px 16px 0px 0px #000",
                  transition: { duration: 0.15 } 
                }}
                className="bg-white text-black border-4 border-black p-8 md:p-10 shadow-[10px_10px_0_0_#000] rounded-3xl flex flex-col h-full cursor-pointer select-none transition-shadow"
              >
                 <h4 className="font-display text-2xl font-black uppercase italic mb-4 border-b-4 border-indigo-600 pb-2 inline-block tracking-normal">{item.t}</h4>
                 <p className="font-sans font-bold uppercase text-[11px] opacity-75 leading-relaxed italic flex-1">"{item.c}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="py-32 md:py-40 bg-white border-t-[12px] border-black relative overflow-hidden text-center">
         <div className="max-w-6xl mx-auto px-6">
            <motion.h2 
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.03 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display uppercase font-black italic tracking-tight leading-[1.05] mb-12 cursor-default"
            >
              Escritura<br/> 
              <span className="text-indigo-600 italic">Transversal_</span>
            </motion.h2>
            <div className="relative z-10">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.85, y: 30 }}
                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
                 viewport={{ once: true }}
                 whileHover={{ scale: 1.02, rotate: 0, boxShadow: "28px 28px 0px 0px #f59e0b" }}
                 className="inline-block bg-zinc-950 text-white p-8 md:p-14 border-8 border-black shadow-[20px_20px_0_0_#f59e0b] -rotate-1 max-w-5xl rounded-3xl cursor-default transition-shadow"
               >
                  <p className="text-2xl md:text-4xl font-serif italic font-semibold leading-relaxed tracking-normal text-white/95 max-w-4xl mx-auto mb-8">
                    "La escritura académica es una responsabilidad institucional compartida."
                  </p>
                  <p className="font-mono text-xs font-bold uppercase text-white/60 italic tracking-widest leading-none">
                    Ríos-Higuera & Sotomayor-Andrade // RPP N. 41 // 2026
                  </p>
               </motion.div>
            </div>
         </div>
      </section>
    </div>
  );
}
