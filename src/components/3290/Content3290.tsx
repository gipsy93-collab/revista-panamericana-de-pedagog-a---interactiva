import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Monitor, Users, Activity, Mic, Brain, Sparkles, AlertTriangle, MessageSquare, Database, MapPin, Quote } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DIMENSIONS, ARTICLE_META, QUOTES } from './constants';

export const Content3290 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#f5f3ff15" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#f5f3ff]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#f5f3ff] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">La educación superior en Colombia enfrenta hoy una triple presión: debe adaptarse a la diversidad social, expandir la cobertura y asegurar la calidad. El aprendizaje híbrido (blended learning) emerge como respuesta estratégica a estos desafíos, combinando lo virtual con lo presencial para optimizar procesos educativos.</p>
              <p className="text-base leading-relaxed text-black/80">Desde 2021, una universidad del suroccidente colombiano adoptó la multimodalidad como estrategia académica central. Esta experiencia, implementada inicialmente como respuesta a la pandemia, se consolidó como modelo permanente. Pero aquí aparece la paradoja: mientras la literatura destaca los beneficios del aprendizaje híbrido—mayor flexibilidad, mejores resultados académicos, mayor motivación y autonomía—los docentes enfrentan en la práctica una realidad mucho más compleja.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#f5f3ff] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic text-f5f3ff">Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-lg font-serif italic text-white/90 leading-relaxed border-l-4 border-white/40 pl-6"><strong>Pregunta central:</strong> ¿Cuáles son los desafíos pedagógicos y tecnológicos que enfrentan los docentes en la implementación del aprendizaje híbrido?</p>
              <p className="text-base leading-relaxed text-black/80">El estudio parte de una tensión evidente: la promesa teórica del aprendizaje híbrido choca con las dificultades prácticas de su implementación. La literatura previa identifica barreras como la falta de infraestructura tecnológica, la brecha digital y la necesidad de formación docente, pero faltan estudios que exploren estas tensiones desde la voz de los profesores que viven esta experiencia día a día.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 1.5: MARCO TEÓRICO */}
      <WaveSection topColor="#f5f3ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="I+. FUNDAMENTOS" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
            <PremiumTitle subtitle="BASES CONCEPTUALES">Marco Teórico</PremiumTitle>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#4f46e5] relative">
              <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Autores Fundamentales</h3>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-black/80"><strong>Bonk & Graham (2006, 2012):</strong> Integración de dos modelos educativos diferentes (presencial + virtual)</p>
                <p className="text-base leading-relaxed text-black/80"><strong>Garrison & Kanuka (2004):</strong> Potencial transformador en educación superior</p>
                <p className="text-base leading-relaxed text-black/80"><strong>Means et al. (2013):</strong> Efectividad del aprendizaje online e híbrido</p>
                <p className="text-base leading-relaxed text-black/80">Los autores citan investigaciones que muestran resultados positivos: mayor compromiso estudiantil, mejor retención de conocimiento, desarrollo de habilidades. Sin embargo, también reconocen trabajos que señalan la necesidad de infraestructura adecuada, formación docente y adaptación de procesos administrativos.</p>
                <ul className="list-disc list-inside space-y-2">
                  <li className="text-sm leading-relaxed text-black/70"><strong>Blended learning / Aprendizaje híbrido:</strong> Combinación de condiciones virtuales y físicas de aprendizaje</li>
                  <li className="text-sm leading-relaxed text-black/70"><strong>Multimodalidad:</strong> Estrategia que integra diferentes modos de enseñanza</li>
                  <li className="text-sm leading-relaxed text-black/70"><strong>Flexibilidad y accesibilidad:</strong> Beneficios centrales del modelo híbrido</li>
                  <li className="text-sm leading-relaxed text-black/70"><strong>Compromiso estudiantil (student engagement):</strong> Factor crítico para el éxito</li>
                </ul>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-indigo-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-1">
                <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">CONCEPTO CENTRAL</h4>
                <p className="text-2xl font-display uppercase font-black italic leading-tight">Blended Learning</p>
                <p className="text-sm mt-4 leading-relaxed">Combinación estratégica de condiciones virtuales y físicas de aprendizaje que busca optimizar la experiencia educativa.</p>
              </div>
              <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5] -rotate-1">
                <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60 text-indigo-400">PILAR TEÓRICO</h4>
                <p className="text-sm font-bold border-l-4 border-indigo-400 pl-4 italic leading-relaxed">"El aprendizaje híbrido tiene potencial transformador en educación superior, pero requiere infraestructura, formación docente y adaptación de procesos administrativos."</p>
                <p className="text-xs mt-4 opacity-60 text-right">— Garrison & Kanuka (2004)</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 1: INTRODUCCIÓN Y EL PROBLEMA DE LA ATENCIÓN DIVIDIDA */}
      <WaveSection topColor="#ffffff" bottomColor="#f5f3ff" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. EL CONFLICTO HÍBRIDO" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
               <PremiumTitle subtitle="ATENCIÓN FRAGMENTADA"> La Paradoja de la Interacción </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#4f46e5] rotate-[-1deg] relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-4xl font-serif italic text-white/90 leading-tight relative z-10">
                   "Casi la mitad de los docentes (47%) identifica la interacción entre estudiantes presenciales y virtuales como el desafío más apremiante tras la odisea híbrida."
                 </p>
              </div>

              {/* FICHA METODOLÓGICA ACADÉMICA */}
              <BrutalCard title="PROTOCOLO DE INVESTIGACIÓN (FENOMENOLOGÍA)" color="bg-white" className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-indigo-600 font-bold uppercase text-xs">
                      <Database size={16} /> Enfoque Cualitativo
                    </div>
                    <p className="text-sm leading-relaxed text-black/70">
                      Análisis de contenido mediante <strong>Atlas.ti 23</strong> con un esquema de 4 categorías y 22 códigos aplicados a 23 docentes universitarios.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {ARTICLE_META.phases?.map((p, i) => (
                         <span key={i} className="bg-zinc-100 px-2 py-1 text-[9px] font-black uppercase border border-black/10">{p}</span>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-indigo-600 font-bold uppercase text-xs">
                      <MapPin size={16} /> Campus Colombia
                    </div>
                    <p className="text-sm leading-relaxed italic text-black/70">
                      "Estudio desarrollado en una universidad del suroccidente colombiano post-pandemia, consolidando el modelo de multimodalidad estratégica."
                    </p>
                  </div>
                </div>
              </BrutalCard>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <CinematicCard color="bg-zinc-50" title="BRECHA PEDAGÓGICA" icon={Monitor} className="shadow-[10px_10px_0_0_#4f46e5]">
                 <p className="text-lg font-bold leading-snug text-black/80">La tecnología permite la coexistencia, pero no garantiza la integración. El desafío no es técnico, es relacional.</p>
              </CinematicCard>
              
              <div className="bg-indigo-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">TENSIÓN CENTRAL</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   "Intentar atender a estudiantes presenciales y virtuales simultáneamente genera una carga cognitiva extra que fragmenta la enseñanza."
                 </p>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#f472b6] -rotate-1 text-black">
                 <h4 className="font-display text-xl uppercase font-black mb-2 italic">Dilema de Atención</h4>
                 <p className="text-xs font-sans font-medium text-black/50 leading-relaxed uppercase">
                   Es como conducir dos conversaciones al mismo tiempo esperando que ambas tengan la misma profundidad y rigor.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 2: METODOLOGÍA */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="II. PROTOCOLO" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
            <PremiumTitle subtitle="DISEÑO Y EJECUCIÓN">Metodología</PremiumTitle>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.1 Tipo de Estudio</h3>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <p className="text-base leading-relaxed text-black/80">Investigación <strong>cualitativa de corte fenomenológico</strong>. El objetivo es comprender los desafíos pedagógicos y tecnológicos desde la <em>experiencia vivida</em> de los docentes.</p>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.2 Participantes / Muestra</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Característica</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">N</td><td className="p-4 text-sm border-2 border-black/10 bg-white">23 profesores</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Perfil</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Docentes asignados a cursos de aprendizaje híbrido en una institución de educación superior del suroccidente colombiano</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Distribución por facultad</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Ciencias Básicas: 9 (39%)<br/>Ciencias Humanas: 6 (26%)<br/>Instituto de Idiomas: 3 (13%)<br/>Ingeniería: 3 (13%)<br/>Desarrollo Humano: 2 (9%)</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Formación</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Posgrado nivel maestría</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Rango de edad</td><td className="p-4 text-sm border-2 border-black/10 bg-white">26-45 años</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Criterios de selección</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Docentes responsables de asignaturas en modalidad híbrida</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.3 Instrumentos / Técnicas de Recolección</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
                <h4 className="font-display text-lg uppercase font-black mb-4 italic text-indigo-600">Cuestionario Estructurado</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-indigo-600 font-bold">→</span> 4 preguntas abiertas sobre desafíos pedagógicos y tecnológicos</li>
                  <li className="flex gap-2"><span className="text-indigo-600 font-bold">→</span> Validado con tres docentes pares</li>
                  <li className="flex gap-2"><span className="text-indigo-600 font-bold">→</span> Naturaleza divergente y orientadora</li>
                </ul>
              </div>
              <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
                <h4 className="font-display text-lg uppercase font-black mb-4 italic text-indigo-400">Grupos Focales</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Objetivo: complementar y profundizar información</li>
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Mismo instrumento para comparar y expandir datos</li>
                  <li className="flex gap-2"><span className="text-indigo-400 font-bold">→</span> Dimensión pedagógica y tecnológica como ejes</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.5 Análisis de Datos</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Aspecto</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Técnica</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Análisis de contenido (Krippendorff, 1990)</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Software</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Atlas.ti 23</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Esquema</td><td className="p-4 text-sm border-2 border-black/10 bg-white">4 categorías, 22 códigos</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Categorías</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Desafíos pedagógicos, Desafíos tecnológicos (basadas en Galvis-Panqueva, 2019)</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Proceso</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Categorización por dimensiones → Análisis de discurso detallado → Identificación de patrones → Triangulación entre investigadores</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Validación</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Revisión y confirmación conjunta de categorías y códigos</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 2: DIMENSIONES DE LOS DESAFÍOS */}
      <WaveSection topColor="#f5f3ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA DOCENTE" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="MATRIZ CATEGORIAL">Desafíos Fenomenológicos</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-6 border-4 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-indigo-600 text-white shadow-[8px_8px_0_0_#000] -translate-y-1' 
                      : 'bg-white hover:bg-zinc-50 shadow-[4px_4px_0_0_#000]'
                  }`}
                >
                  <div className="flex items-center gap-6">
                    <span className="text-3xl">{dim.emoji}</span>
                    <span className="font-display text-xl uppercase font-black tracking-tighter italic leading-none">{dim.name}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeDimension}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white border-[12px] border-black p-12 md:p-16 shadow-[25px_25px_0_0_#4f46e5] rotate-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 font-display text-9xl font-black text-black/5 leading-none italic">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-4xl uppercase font-black mb-6 italic text-indigo-600 underline decoration-black decoration-8 underline-offset-8 leading-none">
                    {DIMENSIONS[activeDimension].name}
                  </h3>
                  
                  <p className="text-2xl font-serif italic text-black/80 font-medium leading-relaxed mb-10">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-900 text-white p-8 border-4 border-black rotate-[-1deg] relative">
                      <h4 className="font-mono text-[9px] uppercase font-black mb-4 tracking-widest text-indigo-400">PUNTOS_CRÍTICOS</h4>
                      <ul className="space-y-4">
                        {DIMENSIONS[activeDimension].highlights?.map((h, i) => (
                          <li key={i} className="flex gap-3 items-start md:items-center">
                            <span className="bg-indigo-600 w-2 h-2 rounded-full shrink-0 md:mt-0 mt-1" />
                            <span className="font-display text-sm uppercase font-black italic tracking-tighter leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-indigo-50 p-8 border-4 border-black flex flex-col justify-center">
                       <Quote className="text-indigo-600 mb-4" size={32} />
                       <p className="font-serif italic text-lg leading-snug text-black/90">
                          {activeDimension === 0 && "Un desafío fue vincular a los estudiantes remotos con los presenciales, especialmente en lo colaborativo."}
                          {activeDimension === 1 && "El silencio en la virtualidad se percibe como una desconexión que desmotiva al facilitador."}
                          {activeDimension === 2 && "Aunque los equipos están ahí, los fallos de audio generan barreras comunicacionales insalvables."}
                          {activeDimension === 3 && "La planificación híbrida es exponencialmente más exigente que la tradicional."}
                       </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 3: RESULTADOS */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="III. HALLAZGOS" color="bg-indigo-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#312e81]" />
            <PremiumTitle subtitle="EVIDENCIA EMPÍRICA">Resultados</PremiumTitle>
          </div>
          <div className="mb-20">
            <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#4f46e5] rotate-[-1deg] relative group mb-12">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
              <p className="text-5xl md:text-7xl font-display font-black italic text-white leading-none mb-6">47%</p>
              <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-tight relative z-10 font-bold">Identifica la <span className="text-indigo-400">interacción presencial-virtual</span> como el desafío más apremiante</p>
            </div>
            <p className="text-lg leading-relaxed text-black/80 max-w-3xl">Casi la mitad de los docentes señala la <strong>interacción entre estudiantes presenciales y virtuales</strong> como el desafío más apremiante. La tecnología permite la coexistencia de dos mundos, pero no garantiza su integración pedagógica efectiva.</p>
          </div>
          <div className="mb-20">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.2 Desafíos Pedagógicos</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#e11d48] mb-8">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Desafío</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">%</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Interacción presencial-virtual</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black text-lg">47%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Facilitar conexión significativa entre estudiantes en aula física y participantes remotos</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Baja participación y motivación</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black text-lg">26%</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Estudiantes desmotivados o con bajo compromiso</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Estrategias para ambos grupos</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black text-lg">21%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Necesidad de diseñar actividades inclusivas para presenciales y virtuales</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Retroalimentación integral</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">—</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Proporcionar feedback constructivo y oportuno a todos</td></tr>
                </tbody>
              </table>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-rose-50 p-6 border-l-4 border-rose-600"><p className="text-sm italic text-black/80">"Un desafío fue poder vincular a los estudiantes remotos con los presenciales, especialmente al trabajar en actividades colaborativas" <span className="text-rose-600 font-bold">(P20)</span></p></div>
              <div className="bg-rose-50 p-6 border-l-4 border-rose-600"><p className="text-sm italic text-black/80">"El mayor desafío ha sido intentar atender a estudiantes presenciales y virtuales simultáneamente" <span className="text-rose-600 font-bold">(P16)</span></p></div>
            </div>
          </div>
          <div className="mb-20">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.2 Desafíos Tecnológicos</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#059669] mb-8">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Desafío</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">%</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Notas</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Sin problemas tecnológicos</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-emerald-600 font-black text-lg">27%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Condiciones técnicas favorables</td></tr>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50 font-bold">Dificultades en uso de tecnología</td><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50 text-emerald-600 font-black text-lg">18%</td><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50">Familiaridad variable con plataformas</td></tr>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Problemas con micrófono</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-emerald-600 font-black text-lg">18%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Barrera para la comunicación</td></tr>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50 font-bold">Sincronización</td><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50 text-emerald-600 font-black">9%</td><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50">Problemas de timing entre entornos</td></tr>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Diversidad de roles y funciones</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-emerald-600 font-black">6%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Complejidad en permisos de plataformas</td></tr>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50 font-bold">Acceso lento a plataformas</td><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50 text-emerald-600 font-black">6%</td><td className="p-4 text-sm border-2 border-black/10 bg-emerald-50">Problemas de conectividad</td></tr>
                  <tr className="hover:bg-emerald-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Otros</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-emerald-600 font-black">16%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Conectividad estudiantes, pantallas interactivas, Webex</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.3 Resumen de Datos Clave</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Variable/Dato</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Valor</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Contexto/Nota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Docentes encuestados</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-indigo-600 font-black">n=23</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Distribuidos en 5 unidades académicas</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Desafío pedagógico principal</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 text-indigo-600 font-black">47%</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Interacción presencial-virtual</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Segundo desafío pedagógico</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-indigo-600 font-black">26%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Baja participación y motivación</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Tercer desafío pedagógico</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 text-indigo-600 font-black">21%</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Estrategias para ambos grupos</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Docentes sin problemas técnicos</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-indigo-600 font-black">27%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Condiciones favorables reportadas</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Con dificultades tecnológicas</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 text-indigo-600 font-black">18%</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Uso de plataformas</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Problemas de micrófono</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-indigo-600 font-black">18%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Barrera comunicacional</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-bold">Período de recolección</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 text-indigo-600 font-black">Marzo 2023</td><td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Post-pandemia, modelo consolidado</td></tr>
                  <tr className="hover:bg-indigo-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Categorías de análisis</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-indigo-600 font-black">4</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Con 22 códigos en Atlas.ti</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 3: CITAS Y VOCES DOCENTES */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="III. TESTIMONIOS" color="bg-indigo-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#312e81]" />
            <PremiumTitle className="items-center" subtitle="LA EXPERIENCIA VIVIDA">Voces de la Academia</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
             {QUOTES.slice(0, 4).map((q, i) => (
               <BrutalQuote key={i} author={q.author} className={`text-2xl font-serif italic shadow-[15px_15px_0_0_#000] ${i % 2 === 0 ? 'rotate-1' : '-rotate-1 bg-fuchsia-50'}`}>
                 "{q.text}"
               </BrutalQuote>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Activity, color: 'bg-indigo-600', title: 'Carga Cognitiva', desc: 'Atender dos mundos simultáneamente es la barrera invisible de mayor impacto.' },
               { icon: Mic, color: 'bg-zinc-900', title: 'Audio Crítico', desc: 'El 18% de los desafíos técnicos se concentran en problemas de micrófono y sonido.' },
               { icon: Brain, color: 'bg-fuchsia-500', title: 'Giro Pedagógico', desc: 'La multimodalidad requiere inversiones en formación docente sistemática, no solo técnica.' }
             ].map((it, i) => (
               <div key={i} className="group flex flex-col bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] hover:-translate-y-4 transition-transform cursor-pointer">
                  <div className={`${it.color} text-white p-6 border-4 border-black mb-6 w-fit group-hover:rotate-12 transition-transform`}>
                    <it.icon size={44} />
                  </div>
                  <h4 className="font-display text-2xl uppercase font-black mb-4 italic tracking-tighter">{it.title}</h4>
                  <p className="font-sans text-sm font-medium text-black/70 leading-relaxed">{it.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 4: DISCUSIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f5f3ff" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="IV. INTERPRETACIÓN" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
            <PremiumTitle subtitle="SENTIDO DE LOS HALLAZGOS">Discusión</PremiumTitle>
          </div>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#4f46e5] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">5.1 Interpretación de los Hallazgos</h3>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-black/80">Los resultados confirman una <strong>tensión central</strong>: el aprendizaje híbrido no es simplemente sumar tecnología a la clase presencial. Es un <em>cambio de paradigma</em> que exige repensar la interacción pedagógica.</p>
                  <div className="bg-indigo-50 p-6 border-l-4 border-indigo-600">
                    <h4 className="font-display text-lg uppercase font-black mb-2 italic text-indigo-600">La Paradoja de la Interacción</h4>
                    <p className="text-sm leading-relaxed text-black/80">La tecnología promete conectar, pero <strong>47% de los docentes</strong> experimenta dificultades precisamente en ese punto. No se trata de falta de herramientas, sino de complejidad en crear entornos genuinamente integradores.</p>
                  </div>
                  <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
                    <h4 className="font-display text-lg uppercase font-black mb-2 italic text-indigo-400">El Dilema de la Atención Dividida</h4>
                    <p className="text-sm leading-relaxed">Intentar <em>"servir a estudiantes presenciales y virtuales simultáneamente"</em> (P16) genera una carga cognitiva extra sobre el docente. Es como conducir dos conversaciones al mismo tiempo, esperando que ambas tengan la misma profundidad.</p>
                  </div>
                  <div className="bg-fuchsia-50 p-6 border-l-4 border-fuchsia-500">
                    <h4 className="font-display text-lg uppercase font-black mb-2 italic text-fuchsia-600">La Brecha Formación-Tecnología</h4>
                    <p className="text-sm leading-relaxed text-black/80">Aunque <strong>27% no reporta problemas técnicos</strong>, el <strong>18% sí enfrenta dificultades de uso</strong>. Esto sugiere que la infraestructura puede estar, pero la formación pedagógica para usarla efectivamente no siempre acompaña.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-indigo-600 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#000] rotate-1">
                <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest opacity-60">COINCIDENCIAS</h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3"><span className="text-indigo-200 font-bold">→</span> Bates et al. (2020) y Garrison & Kanuka (2004): desafíos de enseñanza en entornos híbridos</li>
                  <li className="flex gap-3"><span className="text-indigo-200 font-bold">→</span> Galvis-Panqueva (2019): necesidad de direccionamiento estratégico</li>
                  <li className="flex gap-3"><span className="text-indigo-200 font-bold">→</span> Stanley & Montero-Fortunato (2020): infraestructura y formación como factores críticos</li>
                </ul>
              </div>
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#4f46e5] -rotate-1">
                <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest opacity-60 text-rose-400">CONTRASTES</h4>
                <p className="text-sm leading-relaxed mb-4">Estudios que reportan aumento de motivación y autonomía <span className="text-rose-400">(Adaobi-Ubah et al., 2020; Portela, 2020; Chen et al., 2023)</span></p>
                <p className="text-sm leading-relaxed">Este estudio muestra lo opuesto: <strong className="text-rose-400">26% reporta baja participación y falta de motivación</strong></p>
                <p className="text-xs mt-4 opacity-60 italic">Los beneficios no son automáticos: dependen de cómo se implemente.</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: CONCLUSIONES */}
      <WaveSection topColor="#f5f3ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="V. CIERRE" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
            <PremiumTitle subtitle="SÍNTESIS Y PROYECCIÓN">Conclusiones</PremiumTitle>
          </div>
          <div className="mb-16">
            <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#4f46e5] rotate-[-1deg] relative group mb-12">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
              <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-tight relative z-10 font-bold">El aprendizaje híbrido en educación superior colombiana enfrenta <span className="text-indigo-400">desafíos pedagógicos profundos</span> y <span className="text-fuchsia-400">tecnológicos significativos</span> que requieren formación docente continua y soporte técnico sistemático.</p>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">6.2 Conclusiones de los Autores</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0_0_#4f46e5]">
                <p className="text-sm italic text-black/80 leading-relaxed">"La falta de infraestructura tecnológica adecuada, la brecha digital y la necesidad de formación docente en el uso de tecnologías educativas requieren inversiones para asegurar la implementación exitosa de la educación virtual."</p>
              </div>
              <div className="bg-indigo-50 p-6 border-4 border-black shadow-[6px_6px_0_0_#4f46e5]">
                <p className="text-sm italic text-black/80 leading-relaxed">"La importancia de abordar desafíos organizacionales, como la necesidad de adaptar procesos administrativos y de gestión, también se destaca. Esto implica repensar modelos de evaluación, seguimiento y apoyo estudiantil."</p>
              </div>
              <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
                <p className="text-sm italic leading-relaxed">"Implementar sistemas de soporte técnico continuo y optimizar equipos y software será esencial para mejorar las actividades tecnológicas en futuros entornos educativos y profesionales."</p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">6.3 Recomendaciones</h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="bg-white p-6 border-4 border-black shadow-[4px_4px_0_0_#e11d48] text-center">
                <div className="text-3xl font-black text-rose-600 mb-2">1</div>
                <h4 className="font-display text-xs uppercase font-black mb-2">Formación Docente</h4>
                <p className="text-[10px] text-black/70">Programas innovadores que combinen desarrollo curricular y uso de tecnología</p>
              </div>
              <div className="bg-white p-6 border-4 border-black shadow-[4px_4px_0_0_#059669] text-center">
                <div className="text-3xl font-black text-emerald-600 mb-2">2</div>
                <h4 className="font-display text-xs uppercase font-black mb-2">Soporte Técnico</h4>
                <p className="text-[10px] text-black/70">Sistemas de soporte técnico continuo</p>
              </div>
              <div className="bg-white p-6 border-4 border-black shadow-[4px_4px_0_0_#2563eb] text-center">
                <div className="text-3xl font-black text-blue-600 mb-2">3</div>
                <h4 className="font-display text-xs uppercase font-black mb-2">Optimización</h4>
                <p className="text-[10px] text-black/70">Mejorar equipos y software para reducir barreras</p>
              </div>
              <div className="bg-white p-6 border-4 border-black shadow-[4px_4px_0_0_#ea580c] text-center">
                <div className="text-3xl font-black text-orange-600 mb-2">4</div>
                <h4 className="font-display text-xs uppercase font-black mb-2">Adaptación</h4>
                <p className="text-[10px] text-black/70">Repensar procesos administrativos y evaluación</p>
              </div>
              <div className="bg-white p-6 border-4 border-black shadow-[4px_4px_0_0_#7c3aed] text-center">
                <div className="text-3xl font-black text-violet-600 mb-2">5</div>
                <h4 className="font-display text-xs uppercase font-black mb-2">Intervenciones</h4>
                <p className="text-[10px] text-black/70">Abordar conectividad y acceso a plataformas</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN FINAL */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-40">
           <div className="inline-block relative mb-20">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
              <div className="relative bg-indigo-600 text-white p-16 md:p-32 border-8 border-black">
                 <h2 className="text-6xl md:text-[8rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Mundo <br/> Híbrido
                 </h2>
                 <div className="w-32 h-6 bg-fuchsia-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-indigo-100 uppercase font-black tracking-widest italic animate-pulse">
                   DENTRO DE LA ODISEA MULTIMODAL
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-16 md:p-24 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#818cf8] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">COLOMBIA_HYBRID_REPORT_3290</div>
              <p className="text-4xl md:text-6xl font-display uppercase font-black leading-tight mb-12 italic">
                La tecnología <span className="text-indigo-400">conecta</span>, pero la pedagogía <br/> <span className="text-fuchsia-400">integra</span> el saber
              </p>
              <div className="w-64 h-4 bg-indigo-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
