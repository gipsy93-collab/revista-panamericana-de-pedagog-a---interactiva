import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, MessageCircle, Users, Activity, Palette, Brain, Layers, Layout, MousePointer2, Database, Quote, BrainCircuit, CheckSquare, GraduationCap, Search, FileText, CheckCircle } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DIMENSIONS, ARTICLE_META } from './constants';
import { DataLab3378 } from './DataLab3378';

export const Content3378 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* 2. INTRODUCCIÓN / PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="2. INTRODUCCIÓN / PROBLEMÁTICA" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#fff1f2]" />
               <PremiumTitle subtitle="CONTEXTO Y PROBLEMA">Marco de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#fff1f2] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">2.1 Contexto General</h3>
                <div className="space-y-4 text-base leading-relaxed text-black/80">
                  <p>En el contexto educativo contemporáneo, los entornos virtuales han ganado relevancia significativa, particularmente en programas de posgrado. Las Instituciones de Educación Superior (IES) juegan un papel fundamental en cerrar la brecha de desarrollo, y una forma de lograrlo es mediante la transferencia de conocimiento a través de fronteras. Las modalidades virtuales en posgrado emergen como una respuesta innovadora que expande el alcance de la educación superior (Román, 2019).</p>
                  <p>Sin embargo, la transición de la educación presencial a la virtual no siempre garantiza el mismo nivel de compromiso y participación. Flores-Fernández y Durán-Riquelme (2022) señalan que aunque la participación activa es esencial para lograr resultados de aprendizaje positivos, diversas experiencias de aula virtual en educación superior han mostrado que existe poca interacción entre estudiantes y docentes, entre los propios estudiantes, e incluso entre los contenidos y los recursos disponibles.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#fff1f2] relative">
                <h3 className="font-display text-xl uppercase font-black mb-6 italic text-white">2.2 Problema de Investigación</h3>
                <div className="space-y-4 relative z-10 text-white/80">
                  <p>El artículo aborda la pregunta: ¿Cómo pueden los paisajes de aprendizaje transformar la participación activa en entornos virtuales de posgrado?</p>
                  <p>Se identifica que los Entornos Virtuales de Aprendizaje (EVA) presentan desafíos significativos en términos de garantizar y mantener el compromiso activo del estudiantado. La falta de estrategias didácticas que fomenten la colaboración, la sobrecarga de información y la comunicación limitada entre estudiantes y docentes son barreras que requieren soluciones innovadoras.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 2.3 OBJETIVOS */}
      <div className="bg-black text-white p-16 md:p-24 border-y-[12px] border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2.3 OBJETIVOS" color="bg-pink-600" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8 text-white">
              <h3 className="font-display text-4xl uppercase font-black italic text-white">Objetivo General</h3>
              <p className="text-2xl font-serif italic border-l-8 border-pink-600 pl-8 leading-tight">
                Investigar el impacto de los paisajes de aprendizaje como estrategia didáctica sobre la participación del estudiantado en entornos virtuales, particularmente en el Módulo de Praxis Pedagógica de la Maestría en Educación con Énfasis en Aprendizaje del Inglés.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="font-display text-4xl uppercase font-black italic text-white">Objetivos Específicos</h3>
              <ul className="space-y-6">
                {[
                  "Identificar las contradicciones y desafíos existentes en la participación activa del estudiantado en entornos virtuales",
                  "Diseñar un paisaje de aprendizaje que promueva un enfoque participativo y reflexivo",
                  "Evaluar el impacto del paisaje en la participación del estudiantado"
                ].map((obj, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 bg-pink-600 flex items-center justify-center font-display font-black shrink-0">{i + 1}</span>
                    <p className="text-lg font-sans font-bold uppercase">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2.4 MARCO TEÓRICO */}
      <WaveSection topColor="#000000" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="2.4 MARCO TEÓRICO" color="bg-black" className="text-white mb-12 !rotate-0" />
          <PremiumTitle subtitle="CONSTRUCTOS TEÓRICOS">Fundamentación del Paisaje</PremiumTitle>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <BrutalCard title="APRENDIZAJE ACTIVO" color="bg-[#f5f5f5]">
              <p className="text-sm leading-relaxed text-black/70">
                <strong>(Active Learning):</strong> Según Mendoza-Zambrano et al. (2023), el objetivo principal es proporcionar las condiciones, tareas y estímulos necesarios para desarrollar habilidades de búsqueda de información, análisis, síntesis, resolución de problemas, discusión y expresión. Boada y Mayorca (2019) enfatizan que fomentar la actividad de cada participante implica aceptar responsabilidades, autorregulación y colaboración mutua.
              </p>
            </BrutalCard>
            <BrutalCard title="PAISAJES DE APRENDIZAJE" color="bg-pink-50">
              <p className="text-sm leading-relaxed text-black/70">
                Mosquera-Gende (2019) los define como representaciones visuales de una asignatura, predominantemente gráficas, que incluyen enlaces a otras páginas, recursos o mini-paisajes. Hernando-Calvo (2015) complementa que en un paisaje de aprendizaje los docentes diseñan experiencias que delinean objetivos, herramientas de evaluación y resultados de cada actividad.
              </p>
            </BrutalCard>
            <BrutalCard title="TAXONOMÍA DE BLOOM" color="bg-zinc-900" className="text-white">
              <p className="text-sm leading-relaxed text-white/70">
                Zomeño (2019) destaca que mientras otras metodologías tradicionales se enfocan en recordar, entender y aplicar, el diseño de paisajes de aprendizaje prioriza las habilidades de orden superior: <strong>crear, analizar y evaluar</strong>, con énfasis especial en la creatividad.
              </p>
            </BrutalCard>
          </div>
        </div>
      </WaveSection>

      {/* 3. METODOLOGÍA */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-12 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16 items-start text-black">
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.1 Tipo de estudio</h3>
                <p className="text-xl font-sans font-medium text-black/80 leading-relaxed">
                  Investigación de carácter <strong>exploratorio</strong> con enfoque <strong>cualitativo</strong>. Ramos-Galarza (2020) señala que el alcance exploratorio se aplica a fenómenos no estudiados previamente. Este enfoque permitió una investigación flexible y abierta. La implementación de métodos cualitativos permitió la <strong>triangulación de datos</strong>.
                </p>
              </div>
              <div>
                <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.2 Participantes / Muestra</h3>
                <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
                  <div className="flex items-center gap-6 mb-4">
                    <span className="text-7xl font-display font-black text-pink-600">09</span>
                    <p className="text-sm font-mono uppercase tracking-widest text-white/60">Estudiantes del módulo de Praxis Pedagógica de la Maestría en Educación con Énfasis en Aprendizaje del Inglés (Univ. Nacional de Costa Rica).</p>
                  </div>
                  <p className="text-xs text-white/40 italic">Muestra diversa en edades para analizar interacción con herramientas propuestas.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.3 Instrumentos</h3>
              {[
                { name: "Cuestionario pre-implementación", desc: "Evaluó percepción y nivel de participación activa en cursos virtuales previos." },
                { name: "Cuestionario post-implementación", desc: "Midió cambios en percepción y nivel de participación tras implementación." },
                { name: "Análisis de contenido", desc: "Estudio de caso instrumental de interacciones en Padlet durante 12 semanas." }
              ].map((inst, i) => (
                <div key={i} className="flex gap-6 items-center p-6 border-4 border-black bg-white shadow-[8px_8px_0_0_#db2777]">
                  <Search className="text-pink-600 shrink-0" size={32} />
                  <div>
                    <h4 className="font-display text-lg uppercase font-black leading-none mb-1 text-black">{inst.name}</h4>
                    <p className="text-xs font-sans font-bold text-black/40 uppercase">{inst.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS & DATALAB (4.1, 4.2, 4.3) */}
      <WaveSection topColor="#ffffff" bottomColor="#f5f5f5" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="4. RESULTADOS" color="bg-pink-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="4.1 HALLAZGO PRINCIPAL">Cambio en la Praxis</PremiumTitle>
            <p className="text-xl text-center text-black/70 max-w-4xl mx-auto mt-8 font-serif italic">
              Los paisajes de aprendizaje mejoraron significativamente la participación activa, incrementaron la motivación y el interés por los contenidos, y facilitaron la autorregulación. La participación constante en foros pasó del 33.3% al 57.1%.
            </p>
          </div>

          {/* INTEGRACIÓN DEL DATALAB PARA PUNTOS 4.2 Y 4.3 */}
          <DataLab3378 />
        </div>
      </WaveSection>

      {/* RADIOGRAFÍA DE DIMENSIONES (EXISTING) */}
      <WaveSection topColor="#f5f5f5" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-12 mb-16 text-center">
              <h3 className="font-display text-4xl uppercase font-black italic leading-none mb-4">Análisis Dimensional</h3>
              <p className="text-black/50 font-mono text-xs uppercase tracking-[0.3em]">Qualitative Categorization // Article 3378</p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-6">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-8 border-8 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-pink-600 text-white shadow-[12px_12px_0_0_#000] -translate-y-2' 
                      : 'bg-white hover:bg-pink-50 shadow-[6px_6px_0_0_#db2777]'
                  }`}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-5xl group-hover:scale-125 transition-transform">{dim.emoji}</span>
                    <div className="flex flex-col">
                      <span className="font-display text-2xl uppercase font-black tracking-tighter italic leading-none mb-1">{dim.name}</span>
                      <span className="font-mono text-[9px] uppercase font-black opacity-60 tracking-widest">{dim.code} // ANALYSIS</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDimension}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  className="bg-white border-[16px] border-black p-12 md:p-20 shadow-[35px_35px_0_0_#db2777] rotate-1 relative overflow-hidden min-h-[500px] flex flex-col justify-center"
                >
                  <div className="absolute -top-10 -right-10 p-8 font-display text-[15rem] font-black text-black/5 leading-none italic select-none">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-5xl md:text-6xl uppercase font-black mb-8 italic text-pink-600 leading-none relative z-10">
                    {DIMENSIONS[activeDimension].name}
                  </h3>
                  
                  <p className="text-2xl md:text-3xl font-serif italic text-black/80 font-medium leading-tight mb-12 relative z-10 border-l-[10px] border-black pl-8">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="grid md:grid-cols-1 gap-6 relative z-10">
                    <div className="bg-zinc-950 text-white p-10 border-4 border-black rotate-[-1deg] shadow-[10px_10px_0_0_#000]">
                      <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest text-pink-400 border-b border-white/10 pb-2">EVIDENCIA.QUALITATIVA</h4>
                      <ul className="space-y-5">
                        {DIMENSIONS[activeDimension].highlights?.map((h, i) => (
                          <li key={i} className="flex gap-4 items-start text-white">
                             <CheckSquare size={18} className="text-pink-500 shrink-0 mt-1" />
                             <span className="font-display text-lg uppercase font-black italic tracking-tighter leading-none">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 5. DISCUSIÓN & 6. CONCLUSIONES */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="steps">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* 5.1 INTERPRETACIÓN */}
          <div>
            <BrutalSticker text="5. DISCUSIÓN" color="bg-black" className="text-white mb-12 !rotate-0" />
            <div className="bg-white border-[12px] border-black p-12 md:p-24 shadow-[25px_25px_0_0_#db2777]">
              <h3 className="font-display text-5xl uppercase font-black italic mb-8 text-pink-600">5.1 Interpretación de Hallazgos</h3>
              <div className="space-y-8">
                <p className="text-2xl font-serif italic leading-relaxed text-black/80">
                  "Los resultados demuestran que los paisajes de aprendizaje transforman positivamente la experiencia estudiantil en entornos virtuales. El salto del 33.3% al 57.1% en participación constante representa un incremento de casi 24 puntos porcentuales —un cambio cualitativo significativo."
                </p>
                <p className="text-lg font-sans font-bold uppercase text-black/60 border-l-4 border-black pl-6">
                  La metáfora de las burbujas de diálogo no es meramente decorativa: simboliza procesos reflexivos e interactivos, creando coherencia entre forma y contenido. La navegación flexible permite que cada estudiante transite el "paisaje" a su propio ritmo.
                </p>
              </div>
            </div>
          </div>

          {/* 6.2 CONCLUSIONES DE LOS AUTORES */}
          <div className="space-y-16">
            <BrutalSticker text="6. CONCLUSIONES" color="bg-pink-600" className="text-white mb-12 !rotate-0" />
            <div className="grid md:grid-cols-1 gap-12">
              <BrutalQuote author="Conclusiones de la Investigación" className="bg-white text-3xl font-serif italic border-[8px]">
                <div className="space-y-12 py-10">
                   <p>"La implementación del paisaje de aprendizaje en el módulo de Praxis Pedagógica refuerza la necesidad de fomentar entornos virtuales de aprendizaje más enriquecedores, significativos y proactivos, particularmente en programas de posgrado."</p>
                   <div className="h-px bg-black opacity-10" />
                   <p>"La novedad de esta investigación radica en el diseño e implementación de un recurso educativo enfocado en la personalización del aprendizaje, que integra elementos gráficos, multimedia y colaborativos."</p>
                   <div className="h-px bg-black opacity-10" />
                   <p>"La evaluación del impacto del paisaje de aprendizaje reveló mejoras en la participación activa, la motivación y el interés por el contenido, lo que sugiere que su implementación puede ser una estrategia efectiva para fortalecer la interacción en entornos virtuales."</p>
                </div>
              </BrutalQuote>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#000000" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-48">
           <div className="inline-block relative mb-24">
              <div className="absolute inset-0 bg-pink-600 translate-x-3 translate-y-3" />
              <div className="relative bg-black text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-[0.8] tracking-tighter italic">
                   Paisaje <br/> <span className="text-pink-500">Activo</span>
                 </h2>
                 <div className="w-40 h-8 bg-pink-600 mx-auto mt-16 mb-16" />
                 <p className="text-2xl font-mono text-pink-100 uppercase font-black tracking-widest italic animate-pulse">
                   TRANSFORMANDO LA PRAXIS DE POSGRADO
                 </p>
              </div>
           </div>

           <div className="bg-pink-50 text-black p-16 md:p-24 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#000] rotate-1 mt-20">
              <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">COSTA_RICA_UNIV_NACIONAL_3378</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-tight mb-16 italic">
                La pedagogía <span className="text-pink-600">no es</span> informativa, <br/> <span className="underline decoration-black decoration-8 underline-offset-8">es exploratoria</span>
              </p>
              <div className="w-80 h-6 bg-black mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};

export default Content3378;
