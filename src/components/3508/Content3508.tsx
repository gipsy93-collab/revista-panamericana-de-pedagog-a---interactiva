import React from 'react';
import { motion } from 'motion/react';
import { Search, Compass, BarChart3, Quote, Users } from 'lucide-react';
import { WaveSection, BrutalCard, BrutalQuote, BrutalSticker, PremiumTitle } from '../BrutalistLib';
import { DIMENSIONS } from './constants';

export const Content3508 = () => {
  return (
    <div className="bg-white">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#ec489915" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#ec4899]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#ec4899] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">El artículo se sitúa en el corazón de una tensión educativa global: la brecha entre la retórica inclusiva de los sistemas escolares y la realidad cotidiana del aula. La autora parte de una premisa innegable: la educación es un derecho humano universal, pero su implementación efectiva para personas con diversidad funcional —especialmente aquellas con TEA— enfrenta obstáculos sistémicos y culturales.</p>
              <p className="text-base leading-relaxed text-black/80">El TEA se presenta como uno de los desafíos más complejos para la inclusión educativa debido a su heterogeneidad clínica: no existe "un solo autismo", sino un espectro de manifestaciones que requieren respuestas altamente individualizadas. Esto complica cualquier intento de estandarización pedagógica.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#ec4899] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic" style={{color: "#ec4899"}}>Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-lg font-serif italic text-white/90 leading-relaxed border-l-4 border-white/40 pl-6">"Determinar si las actitudes del profesorado influyen significativamente en la respuesta educativa ofrecida a los niños con dificultades de aprendizaje y participación."</p>
              <p className="text-base leading-relaxed text-black/80">La pregunta subyacente es incómoda: ¿Por qué, a pesar de las políticas inclusivas, la implementación real sigue siendo tan desigual? La autora sospecha que la respuesta no está solo en los recursos materiales, sino en algo más difuso y potente: las actitudes, creencias y prejuicios del profesorado.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* I. OBJETIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#FAF5FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="I. OBJETIVOS" color="bg-violet-600" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#8b5cf6]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-violet-600">Objetivo General</h3>
              <p className="text-base leading-relaxed text-black/80">
                Determinar si las actitudes del profesorado influyen significativamente en la respuesta educativa ofrecida a niños con dificultades de aprendizaje y participación.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-pink-400">Objetivos Específicos</h3>
              <ol className="space-y-3 text-base">
                <li className="flex gap-3">
                  <span className="font-black text-violet-400">1.</span>
                  <span>Identificar las actitudes predominantes del profesorado que interactúa con alumnado con TEA en sistemas educativos de España y Ecuador.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-violet-400">2.</span>
                  <span>Analizar el impacto de las actitudes del profesorado en la planificación y organización de la respuesta educativa dirigida al alumnado con TEA.</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* II. TIPO DE ESTUDIO */}
      <WaveSection topColor="#FAF5FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-4xl mx-auto text-center">
          <BrutalSticker text="II. TIPO DE ESTUDIO" color="bg-pink-500" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#8b5cf6]">
            <p className="text-xl leading-relaxed text-black/80">
              Investigación cualitativa con diseño descriptivo de método mixto que combina enfoques cuantitativos y cualitativos. Es un estudio comparativo internacional (España-Ecuador) de carácter exploratorio.
            </p>
          </div>
        </div>
      </WaveSection>


      {/* II+. PARTICIPANTES Y MUESTRA */}
      <WaveSection topColor="#ffffff" bottomColor="#FAF5FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="II+. PARTICIPANTES" color="bg-violet-600" className="text-white mb-8 !rotate-0" />
          
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#8b5cf6] mb-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-violet-600 text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Característica</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">N total</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">10 docentes</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50 font-black">España</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50">7 docentes (Educación Primaria)</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Ecuador</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">3 docentes (Educación General Básica)</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50 font-black">Criterio de selección</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50">Mínimo 3 años de experiencia; tener al menos un alumno con TEA o sospecha de TEA en el aula</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Garantía ética</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Anonimato total garantizado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899] overflow-x-auto">
            <h3 className="font-display text-xl uppercase font-black mb-4 text-pink-600">Perfil Sociodemográfico</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-pink-500 text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Distribución</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Edad</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">21-30 (1), 31-40 (5), 41-50 (3), 51-60 (1)</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Género</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">Femenino 60% (6), Masculino 40% (4)</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Formación</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Diplomatura 60% (6), Máster 30% (3), Doctorado 10% (1)</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Tipo de centro</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">Público 70% (7), Privado 20% (2), Concertado 10% (1)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </WaveSection>


      {/* III. RESULTADOS POR OBJETIVO */}
      <WaveSection topColor="#FAF5FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="III. RESULTADOS POR OBJETIVO" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-12">
            {/* Objetivo 1 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#8b5cf6]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-violet-600">Objetivo 1: Identificar actitudes predominantes</h3>
              <p className="text-base leading-relaxed text-black/80 mb-6">
                Los docentes muestran actitudes aparentemente positivas hacia la inclusión en el discurso abstracto, pero estas actitudes cambian cuando se enfrentan a las presiones del marco legal y la falta de apoyo.
              </p>
              <BrutalQuote author="E1, PedEcu6">
                Somos vulnerables debido a la falta de recursos humanos y materiales para que cada estudiante con TEA pueda recibir atención individualizada. Si bien se han diseñado algunas medidas hasta ahora, diría que no son suficientes.
              </BrutalQuote>
            </div>

            {/* Objetivo 2 */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-pink-400">Objetivo 2: Analizar impacto en planificación educativa</h3>
              <p className="text-base mb-4">Diferencia España vs Ecuador:</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-violet-600 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Aspecto</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Docentes ecuatorianos</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Docentes españoles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-violet-900 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">Prioridad</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">80% priorizan cumplimiento del currículo oficial</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Mayor flexibilidad hacia aprendizaje significativo</td>
                    </tr>
                    <tr className="hover:bg-violet-900 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Enfoque</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Cumplimiento normativo</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Funcionalidad y sentido de los contenidos</td>
                    </tr>
                    <tr className="hover:bg-violet-900 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">Adaptación</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Resistencia a modificar contenidos</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Voluntad de adaptar a intereses del estudiante</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="space-y-4">
                <BrutalQuote author="E1, PedEcu5">
                  El currículo es la base de nuestra práctica docente y, por lo tanto, afecta directamente a la acción pedagógica de los profesionales.
                </BrutalQuote>
                <BrutalQuote author="E1, PedEsp2">
                  Debe partir de la experiencia curricular de cada alumno y de su capacidad para comprender el funcionamiento social que le rodea más allá de la memorización rotatoria.
                </BrutalQuote>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* IV. TABLA RESUMEN DE DATOS CLAVE */}
      <WaveSection topColor="#ffffff" bottomColor="#FAF5FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="IV. TABLA RESUMEN" color="bg-pink-500" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#8b5cf6] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-violet-600 text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable/Dato</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Valor</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Contexto/Nota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Docentes ecuatorianos centrados en currículo</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">80%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Priorizan cumplimiento sobre adaptación</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50 font-black">Nivel de formación de la muestra</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50">60% diplomatura</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50">Solo 10% con doctorado</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Tipo de centro predominante</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">70% público</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Representatividad del sector público</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50 font-black">Factor determinante en metodología</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50">Gravedad del autismo</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-violet-50">Coincidieron 7 de 10 entrevistados</td>
                </tr>
                <tr className="hover:bg-violet-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Variable clave para actitudes positivas</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Interacción personal directa</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Contacto directo con alumnado TEA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </WaveSection>


      {/* V. INTERPRETACIÓN */}
      <WaveSection topColor="#FAF5FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="V. INTERPRETACIÓN" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#8b5cf6]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-violet-600">La Paradoja Pedagógica</h3>
              <p className="text-base leading-relaxed text-black/80">
                Los resultados revelan una paradoja pedagógica: mientras la normativa española y ecuatoriana promueven modelos inclusivos, la implementación real depende de variables subjetivas (actitudes, prejuicios, autoeficacia docente) más que de elementos objetivos (formación, recursos).
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-pink-400">El Factor &quot;Gravedad&quot;</h3>
              <p className="text-base leading-relaxed">
                La autora identifica que la &quot;gravedad del autismo&quot; es usada por los docentes como factor determinante para decidir el nivel de inclusión, lo que contradice el principio de diversidad inherente al modelo inclusivo.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* VI. CONCLUSIONES ESPECÍFICAS */}
      <WaveSection topColor="#ffffff" bottomColor="#09090b" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="VI. CONCLUSIONES" color="bg-violet-600" className="text-white mb-12 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#8b5cf6]">
            <h3 className="font-display text-2xl uppercase font-black mb-8 text-violet-600">Conclusiones Específicas de la Autora</h3>
            <ol className="space-y-6 text-lg">
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-violet-600 flex items-center justify-center font-black text-white flex-shrink-0">1</span>
                <span className="text-black/80">El compromiso y la vocación son fundamentales para buscar nuevas metodologías.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-violet-500 flex items-center justify-center font-black text-white flex-shrink-0">2</span>
                <span className="text-black/80">La expresión de respuesta inclusiva no se limita a la presencia física en el aula.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-violet-400 flex items-center justify-center font-black text-white flex-shrink-0">3</span>
                <span className="text-black/80">Es necesario difundir información para evitar falsos estereotipos sobre NEE.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-pink-500 flex items-center justify-center font-black text-white flex-shrink-0">4</span>
                <span className="text-black/80">El profesorado necesita apoyo durante TODO el proceso (planificación a evaluación).</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-pink-400 flex items-center justify-center font-black text-white flex-shrink-0">5</span>
                <span className="text-black/80">La actitud hacia cambios curriculares y metodológicos es clave para abandonar prácticas homogeneizadoras.</span>
              </li>
            </ol>
          </div>
        </div>
      </WaveSection>

      {/* 1. FICHA METODOLÓGICA (CUALITATIVA) */}
      <WaveSection topColor="#FAF5FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center mb-24">
            <div className="md:w-1/3">
              <BrutalCard color="bg-violet-900" className="text-white !rotate-[-2deg] shadow-[15px_15px_0_0_#000]">
                <Search size={48} className="text-pink-400 mb-6" />
                <h3 className="text-3xl font-display uppercase mb-4">Metodología Mixta</h3>
                <p className="font-mono text-[10px] opacity-70 mb-8 tracking-widest">DISEÑO DESCRIPTIVO COMPARADO</p>
                <div className="space-y-6">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-black text-pink-400">ESPAÑA</span>
                    <span className="font-mono">7 DOCENTES</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-black text-pink-400">ECUADOR</span>
                    <span className="font-mono">3 DOCENTES</span>
                  </div>
                  <div className="bg-white/10 p-4 border border-white/20">
                    <p className="text-xs font-mono mb-2 uppercase opacity-60">Instrumentos</p>
                    <p className="text-sm font-black italic">Entrevistas semiestructuradas + Cuestionario MTAI</p>
                  </div>
                </div>
              </BrutalCard>
            </div>
            
            <div className="md:w-2/3 space-y-10">
              <BrutalSticker text="TERRITORIO DE TENSIONES" color="bg-pink-500" className="text-white font-black px-6" />
              <h2 className="text-5xl md:text-8xl font-display uppercase leading-none italic">
                La <span className="text-violet-600 underline decoration-[12px]">Vulnerabilidad</span> del Espectro
              </h2>
              <p className="text-2xl font-serif leading-relaxed text-zinc-700 italic">
                El estudio revela que las actitudes del profesorado hacia la inclusión del TEA no dependen de su formación formal, sino de variables subjetivas derivadas de preconcepciones. Se detecta una sensación compartida de vulnerabilidad por falta de recursos materiales y humanos.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 2. EXPLORADOR DE DIMENSIONES */}
      <section className="py-32 bg-zinc-950 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-violet-500/30" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
             <div className="max-w-3xl">
                <h2 className="text-7xl md:text-[10rem] font-display uppercase italic text-violet-500/10 leading-none">
                  Hallazgos
                </h2>
                <p className="font-mono text-pink-400 uppercase tracking-[0.5em] font-black -mt-6">Dimensiones Actitudinales</p>
             </div>
             <div className="bg-violet-600 text-white px-10 py-5 border-4 border-black font-display text-2xl font-black uppercase shadow-[8px_8px_0_0_#ec4899]">
               EDICIÓN 2026
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {DIMENSIONS.map((dim, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
              >
                <BrutalCard color="bg-white" className="h-full flex flex-col !p-0 overflow-hidden border-8 border-black shadow-[15px_15px_0_0_#8b5cf6]">
                  <div className="bg-violet-600 p-8 text-white border-b-8 border-black relative overflow-hidden">
                     <div className="absolute bottom-0 right-0 opacity-10">
                        <Users size={120} className="-rotate-12 translate-x-8 translate-y-8" />
                     </div>
                     <div className="flex justify-between items-center mb-6">
                        <span className="bg-black text-white w-10 h-10 flex items-center justify-center font-display text-2xl">0{idx + 1}</span>
                        <Compass className="text-white/40" />
                     </div>
                     <h3 className="text-4xl font-display uppercase leading-[0.85]">{dim.title}</h3>
                  </div>
                  
                  <div className="p-10 flex-1 flex flex-col">
                    <div className="bg-pink-100 p-4 border-4 border-black mb-8 transform -rotate-1">
                       <span className="font-mono text-[10px] text-pink-600 font-black block mb-1 uppercase">HIGHLIGHT</span>
                       <span className="text-2xl font-black text-black leading-tight italic">{dim.highlight}</span>
                    </div>
                    <p className="text-zinc-800 font-sans text-lg mb-10 leading-relaxed font-semibold">
                      {dim.description}
                    </p>
                    <div className="mt-auto pt-8 border-t-8 border-violet-50">
                       <Quote className="text-violet-200 mb-4" size={48} />
                       <p className="font-serif text-xl italic text-violet-950 mb-4 leading-relaxed">
                         "{dim.quote}"
                       </p>
                       <p className="font-mono text-[10px] font-black uppercase tracking-widest text-violet-600">— REF: {dim.source}</p>
                    </div>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPARATIVA Y CITAS */}
      <WaveSection topColor="#09090b" bottomColor="#f5f3ff" variant="dramatic">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center mb-20">
            <BrutalSticker text="VOCES DEL PROFESORADO" color="bg-black" className="text-white mb-10" />
            <h2 className="text-5xl font-display uppercase text-center border-b-8 border-violet-600 pb-4">La Paradoja de la Formación</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <BrutalQuote author="Celia Gallardo-Herrerías (2026)">
                La inclusión educativa no depende de la buena voluntad legislativa ni de la formación académica del docente, sino de su capacidad para transformar sus propios prejuicios.
              </BrutalQuote>
              <div className="bg-white border-8 border-black p-10 shadow-[10px_10px_0_0_#9333ea]">
                 <div className="flex items-center gap-4 mb-8">
                    <BarChart3 className="text-pink-600" size={40} />
                    <h4 className="font-display uppercase text-3xl">Brecha Curricular</h4>
                 </div>
                 <div className="space-y-6">
                    <div className="flex justify-between items-center bg-zinc-100 p-4 border-r-8 border-pink-500">
                       <span className="font-black italic">ECUADOR</span>
                       <span className="text-3xl font-black text-red-600">80%</span>
                    </div>
                    <p className="text-sm font-mono opacity-60 uppercase font-black tracking-tighter">Prioridad cumplimiento del currículo oficial vs. Adaptación individualizada.</p>
                 </div>
              </div>
            </div>

            <div className="flex flex-col gap-8 h-full">
               <BrutalCard color="bg-violet-600" className="text-white flex-1 shadow-[12px_12px_0_0_#000]">
                  <h4 className="font-display text-3xl uppercase mb-6 leading-none italic">El Reto del Espectro</h4>
                   <p className="font-serif text-xl opacity-90 leading-relaxed italic mb-8">
                    "No se trata de diseñar materiales para el alumnado, sino de diseñar estrategias pedagógicas adecuadas para cada uno de ellos."
                  </p>
                  <div className="bg-black/20 p-4 border-l-4 border-white font-mono text-[10px] uppercase font-black">
                    NIVEL DE APOYO: INDIVIDUALIZADO
                  </div>
               </BrutalCard>
               
               <div className="bg-white text-black p-10 border-8 border-black shadow-[15px_15px_0_0_#ec4899] rotate-1">
                  <h4 className="font-display text-2xl uppercase mb-4">Recomendación Clave</h4>
                  <p className="font-sans font-bold text-lg text-zinc-600 leading-snug">
                    Fomentar la interacción personal directa con alumnado TEA para transformar prejuicios en redes de apoyo profesional.
                  </p>
               </div>
            </div>
          </div>
        </div>
      </WaveSection>
    </div>
  );
};

