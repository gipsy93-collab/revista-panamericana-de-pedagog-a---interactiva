import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Shield, MessageCircle, AlertCircle, Quote, BrainCircuit, Activity, 
  Map, Sparkles, Target, Zap, Waves, Scale, Users, GraduationCap, ClipboardCheck
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import TeacherLab3455 from './TeacherLab3455';

export default function Content3455() {
  const [activeDiscussion, setActiveDiscussion] = useState(0);

  const discussionBlocks = [
    {
      title: "EQUILIBRIO INTERNO",
      content: "Los resultados evidencian que la dimensión personal constituye un pilar fundamental en la formación inicial docente para la promoción de una cultura de paz. Para convertirse en agentes de paz, es necesario lograr el equilibrio interno, lo cual es posible a partir de la introspección que se realiza desde el ser de la propia persona.",
      source: "Perales (2018)"
    },
    {
      title: "RESPONSABILIDAD ESCOLAR",
      content: "La primera categoría de resultados vincula el desarrollo personal con el crecimiento y aprendizaje, posicionando a la escuela como responsable no solo de la formación profesional sino también de la formación personal. Atender la dimensión personal constituye un elemento clave para la formación integral.",
      source: "Escobedo-Peiro (2023)"
    },
    {
      title: "VALORES Y PAZ",
      content: "En cuanto a las características personales, la identificación de valores (responsabilidad, compromiso, respeto) y actitudes (amabilidad, perseverancia, paciencia) como elementos vinculados a la cultura de paz, se relaciona con educar para la paz como camino para la prevención de violencia escolar.",
      source: "López (2020)"
    },
    {
      title: "TRABAJAR EL SER",
      content: "Los retos identificados —particularmente la dificultad para compartir experiencias, la falta de confianza y la gestión emocional— representan el aporte más novedoso. La cultura de paz requiere trabajar primeramente en la dimensión del ser, para después trabajar con los demás.",
      source: "Hernández-Arteaga (2017)"
    },
    {
      title: "REFORMA CURRICULAR",
      content: "Se propone incluir asignaturas enfocadas en la dimensión personal en la malla curricular. Los autores argumentan que es tarea pendiente de la educación atender la dimensión personal considerando el componente humano y social del aprendizaje.",
      source: "Chan-Chi & Poot-May (2026)"
    }
  ];

  return (
    <div className="bg-white">
      {/* 2. INTRODUCCIÓN / PROBLEMÁTICA */}
      <section className="bg-black text-white p-16 md:p-32 border-b-[12px] border-black relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-white/[0.03] leading-none pointer-events-none select-none">
          P_3455
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2. INTRODUCCIÓN / PROBLEMÁTICA" color="bg-[#7C3AED]" className="text-white mb-12 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
               <h3 className="text-6xl font-display font-black uppercase italic leading-none text-[#A78BFA]">
                 La Dimensión <br/> <span className="text-white">Personal_</span>
               </h3>
               <p className="text-2xl font-serif italic border-l-8 border-[#7C3AED] pl-8 leading-relaxed opacity-90">
                 "La violencia escolar es una realidad que enfrentan las instituciones educativas. Si bien existe consenso sobre el rol transformador de la educación, las universidades han privilegiado el enfoque cognitivo, dejando de lado el desarrollo del ser del alumnado."
               </p>
            </div>
            <div className="space-y-10 bg-zinc-900 p-12 border-4 border-[#7C3AED] shadow-[20px_20px_0_0_#7C3AED]">
               <p className="text-lg font-sans font-medium text-zinc-300 leading-relaxed">
                 Existen necesidades de formación en aspectos de la dimensión personal como la inteligencia emocional, la resolución de conflictos y el autoconocimiento, resultando en deficiencias de la competencia docente para identificar situaciones de violencia.
               </p>
               <div className="pt-8 border-t-2 border-white/10">
                  <p className="font-mono text-[10px] uppercase font-black text-[#A78BFA] tracking-widest">Contexto Político // ANUIES 2020</p>
                  <p className="text-sm font-sans font-bold uppercase mt-4">Compromiso institucional con ambientes pacíficos en Educación Superior.</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. METODOLOGÍA & LAB */}
      <WaveSection topColor="#000000" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-16 !rotate-0" />
          
          <div className="grid md:grid-cols-3 gap-8 mb-24">
             <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
                <h4 className="font-display text-xl font-black uppercase mb-4 flex items-center gap-3"><Map size={24} /> 3.1 Enfoque</h4>
                <p className="text-sm font-sans font-bold uppercase leading-tight">Cualitativo, exploratorio e interpretativo. Análisis de contenido y comparación constante.</p>
             </div>
             <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#7C3AED]">
                <h4 className="font-display text-xl font-black uppercase mb-4 flex items-center gap-3"><ClipboardCheck size={24} /> 3.4 Procedimiento</h4>
                <p className="text-sm font-sans font-bold uppercase leading-tight">Uso de triangulación para asegurar confiabilidad y validez (Okuda y Gómez, 2005).</p>
             </div>
             <div className="bg-black text-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
                <h4 className="font-display text-xl font-black uppercase mb-4 flex items-center gap-3 text-[#A78BFA]"><Scale size={24} /> 3.2 Muestra</h4>
                <p className="text-sm font-sans font-bold uppercase leading-tight">57 docentes en formación de una universidad pública del Sureste de México.</p>
             </div>
          </div>

          <TeacherLab3455 />
        </div>
      </WaveSection>

      {/* 4. RESULTADOS */}
      <section className="py-24 bg-zinc-50 border-y-[12px] border-black px-6">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="4. RESULTADOS" color="bg-black" className="text-white mb-16 !rotate-0" />
          
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <div className="space-y-12">
               <div>
                  <h3 className="font-display text-4xl font-black uppercase italic mb-6">4.1 Significados</h3>
                  <div className="bg-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
                     <p className="text-xl font-serif italic text-black/80">"Desarrollo personal significa trabajar en ti mismo a partir de las fortalezas, habilidades y valores, pero también atender las debilidades."</p>
                  </div>
               </div>
               <div>
                  <h3 className="font-display text-4xl font-black uppercase italic mb-6">4.2 Características</h3>
                  <div className="grid grid-cols-2 gap-6">
                     <div className="bg-white border-4 border-black p-6">
                        <span className="bg-black text-white px-3 py-1 text-[10px] font-black uppercase mb-4 inline-block tracking-tighter">Valores</span>
                        <p className="font-sans font-bold uppercase text-xs">Responsabilidad, Compromiso, Respeto.</p>
                     </div>
                     <div className="bg-white border-4 border-black p-6">
                        <span className="bg-[#7C3AED] text-white px-3 py-1 text-[10px] font-black uppercase mb-4 inline-block tracking-tighter">Actitudes</span>
                        <p className="font-sans font-bold uppercase text-xs">Amabilidad, Perseverancia, Paciencia.</p>
                     </div>
                  </div>
               </div>
               <div>
                  <h3 className="font-display text-4xl font-black uppercase italic mb-6 text-rose-600 italic underline">4.3 Retos críticos</h3>
                  <ul className="space-y-4">
                     {["Gestión de emociones (regulación)", "Falta de confianza / Inseguridades", "Estrés al compartir vivencias"].map((r, i) => (
                       <li key={i} className="flex gap-4 items-center bg-black text-white p-4 font-display uppercase font-black italic">
                          <AlertCircle size={20} className="text-rose-500" /> {r}
                       </li>
                     ))}
                  </ul>
               </div>
            </div>

            <div className="sticky top-24">
               <BrutalCard title="4.4 RESUMEN DE HALLAZGOS PRINCIPALES" color="bg-white" className="!border-[8px] shadow-[20px_20px_0_0_#7C3AED]">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-black text-white font-display uppercase text-xs tracking-widest">
                           <th className="p-4 border-r border-white/20">Eje de Análisis</th>
                           <th className="p-4 border-r border-white/20">Hallazgo Principal</th>
                        </tr>
                     </thead>
                     <tbody className="font-sans font-bold uppercase text-[10px]">
                        <tr className="border-b-2 border-black/10">
                           <td className="p-4 bg-zinc-50 border-r-2 border-black/10">Dimensión Personal</td>
                           <td className="p-4 italic">Valoración positiva vinculada al crecimiento y potencialización.</td>
                        </tr>
                        <tr className="border-b-2 border-black/10">
                           <td className="p-4 bg-zinc-50 border-r-2 border-black/10">Características</td>
                           <td className="p-4 italic">Valores y actitudes orientan conductas hacia ideales de paz.</td>
                        </tr>
                        <tr>
                           <td className="p-4 bg-zinc-50 border-r-2 border-black/10">Retos</td>
                           <td className="p-4 italic text-rose-600">Dificultad para expresarse, falta de confianza y gestión emocional.</td>
                        </tr>
                     </tbody>
                  </table>
               </BrutalCard>
            </div>
          </div>
        </div>
      </section>

      {/* 5. DISCUSIÓN: TARJETAS INTERACTIVAS */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-7xl mx-auto py-24">
          <div className="text-center mb-20">
            <BrutalSticker text="5. DISCUSIÓN" color="bg-[#7C3AED]" className="text-white mb-6 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="PILARES DE LA PAZ">Análisis de la Dimensión Personal</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-5 gap-4">
             {discussionBlocks.map((block, i) => (
               <button
                 key={i}
                 onClick={() => setActiveDiscussion(i)}
                 className={`p-6 border-4 border-black font-display uppercase text-xs font-black transition-all rotate-${i%2 === 0 ? '1' : '-1'} h-24 flex items-center justify-center text-center leading-tight shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1 ${activeDiscussion === i ? 'bg-[#7C3AED] text-white' : 'bg-white hover:bg-zinc-100'}`}
               >
                 {block.title}
               </button>
             ))}
          </div>

          <div className="mt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDiscussion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-zinc-950 text-white p-12 md:p-20 border-[12px] border-black shadow-[30px_30px_0_0_#7C3AED] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-8 font-mono text-[100px] font-black text-white/[0.03] pointer-events-none select-none">
                  {activeDiscussion + 1}
                </div>
                <div className="relative z-10">
                   <p className="text-3xl md:text-5xl font-serif italic mb-10 leading-tight">
                     "{discussionBlocks[activeDiscussion].content}"
                   </p>
                   <div className="flex items-center gap-6 pt-10 border-t-2 border-white/10">
                      <div className="w-16 h-2 bg-[#7C3AED]" />
                      <span className="font-display text-xl uppercase font-black text-[#A78BFA]">{discussionBlocks[activeDiscussion].source}</span>
                   </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </WaveSection>

      {/* CONCLUSIONES PRINCIPALES */}
      <section className="bg-white py-24 px-6 border-t-[12px] border-black">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="CONCLUSIONES PRINCIPALES" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { t: "POTENCIAL HUMANO", c: "La dimensión personal potencia el desarrollo humano, direccionando la conducta hacia una cultura de paz donde prevalecen el respeto y la amabilidad." },
              { t: "TAREA PENDIENTE", c: "Es tarea pendiente de la educación atender la dimensión personal en la formación inicial, considerando el componente humano y social." },
              { t: "MALLA CURRICULAR", c: "Las instituciones formadoras deben incluir asignaturas enfocadas en la formación de la dimensión personal de manera transversal." },
              { t: "CLIMAS PROPICIOS", c: "La educación tiene que ser vista como un proceso integral, con escenarios y climas propicios para la formación integral del estudiantado." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 border-8 border-black p-10 shadow-[15px_15px_0_0_#000] group hover:bg-white transition-colors">
                 <h4 className="font-display text-2xl font-black uppercase italic mb-4 border-b-4 border-[#7C3AED] pb-2 inline-block">{item.t}</h4>
                 <p className="font-sans font-bold uppercase text-sm leading-relaxed text-black/70 italic">"{item.c}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <section className="py-32 bg-[#7C3AED] border-t-[12px] border-black overflow-hidden relative">
         <div className="max-w-7xl mx-auto text-center px-6">
            <h2 className="text-7xl md:text-[12rem] font-display uppercase font-black text-white italic leading-[0.8] tracking-tighter mb-16">
              Educación <br/> Para la <span className="text-black">Paz_</span>
            </h2>
            <div className="inline-block bg-white text-black p-12 border-8 border-black shadow-[20px_20px_0_0_#000] rotate-2">
               <p className="text-4xl font-display font-black uppercase italic tracking-tighter">
                 "Trabajar el ser para poder trabajar con los demás"
               </p>
               <p className="font-mono text-xs font-black uppercase mt-6 opacity-40">Chan-Chi & Poot-May // RPP 2026</p>
            </div>
         </div>
      </section>
    </div>
  );
}
