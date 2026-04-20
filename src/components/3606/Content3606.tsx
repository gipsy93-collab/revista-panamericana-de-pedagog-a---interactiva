import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Fingerprint, ShieldAlert, Award, BookOpen, Compass, HeartHandshake, CheckSquare, ListChecks, HelpCircle, HardDrive, BarChart, AlertTriangle } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalCard, BrutalQuote } from '../BrutalistLib';
import { DIMENSIONS, ARTICLE_META, LIMITATIONS, GEPIA_DATA, BARRIERS } from './constants';

export const Content3606 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#10b98115" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#10b981]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#10b981] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic" style={{color: '#10b981'}}>Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-base leading-relaxed text-black/80">Los autores identifican una <strong>brecha crítica</strong> entre el marco normativo internacional y nacional sobre educación inclusiva y la práctica real en las aulas universitarias mexicanas. Como señalan:</p>
              <p className="text-lg font-serif italic text-white/90 leading-relaxed border-l-4 border-white/40 pl-6">"*Analizar los ajustes razonables implementados en las aulas universitarias permite identificar tanto los avances como los desafíos pendientes en la práctica docente y en la consolidación de una educación verdaderamente inclusiva*" (p. 2).</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN A: MARCO TEÓRICO */}
      <WaveSection topColor="#f9fafb" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <BrutalSticker text="A. MARCO TEÓRICO" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#10b981]" />
            <PremiumTitle subtitle="FUNDAMENTOS CONCEPTUALES">Tres Pilares de Análisis</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <div className="text-4xl mb-4">🏛️</div>
              <h4 className="font-display text-xl uppercase font-black mb-3 italic">1. Modelo de Educación Inclusiva</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">(Ainscow & Booth, 2002; UNESCO, 2017)</p>
              <p className="text-sm leading-relaxed text-black/80">Propone tres dimensiones de transformación escolar —cultura inclusiva, políticas inclusivas y prácticas inclusivas—.</p>
              <div className="mt-4 p-4 bg-emerald-50 border-l-4 border-emerald-600">
                <p className="text-xs font-serif italic text-black/70">"El Modelo de Educación Inclusiva es un enfoque que aboga e intercede por el derecho de todas las personas a participar plenamente en los entornos escolares y recibir educación, sin importar sus habilidades, características, orígenes o condiciones socioeconómicas" (Ainscow & Booth, 2002, citado en p. 4).</p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <div className="text-4xl mb-4">♿</div>
              <h4 className="font-display text-xl uppercase font-black mb-3 italic">2. Modelo Social de la Discapacidad</h4>
              <p className="text-sm leading-relaxed text-black/80">Contrario al modelo médico tradicional, define la discapacidad como:</p>
              <div className="mt-4 p-4 bg-zinc-900 text-white border-4 border-black">
                <p className="text-xs font-serif italic leading-relaxed">"la consecuencia de la presencia de una deficiencia o limitación en una persona, que al interactuar con las barreras que le impone el entorno social, pueda impedir su inclusión plena y efectiva en la sociedad" (Diario Oficial de la Federación, 2023, p. 2, citado en p. 6).</p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <div className="text-4xl mb-4">🚧</div>
              <h4 className="font-display text-xl uppercase font-black mb-3 italic">3. Barreras para el Aprendizaje y la Participación (BAP)</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">(Ainscow y Booth, 2002)</p>
              <p className="text-sm leading-relaxed text-black/80">Refiere a las dificultades emergentes de la interacción entre estudiantes y sus contextos.</p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-black">
                  <span className="w-3 h-3 bg-emerald-600"></span> Estructurales
                </div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-black">
                  <span className="w-3 h-3 bg-emerald-600"></span> Normativas
                </div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-black">
                  <span className="w-3 h-3 bg-emerald-600"></span> Didácticas
                </div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase font-black">
                  <span className="w-3 h-3 bg-emerald-600"></span> Actitudinales
                </div>
                <p className="text-[10px] text-black/50 mt-2">(Secretaría de Educación Pública, 2023)</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN B: OBJETIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f0fdf4" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <BrutalSticker text="B. OBJETIVOS" color="bg-emerald-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <PremiumTitle subtitle="PROPÓSITO DE LA INVESTIGACIÓN">¿Qué busca el estudio?</PremiumTitle>
          </div>

          <div className="bg-emerald-600 text-white p-12 md:p-20 border-[12px] border-black shadow-[25px_25px_0_0_#000] rotate-[-1deg] relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            <p className="text-2xl md:text-3xl font-serif italic leading-tight relative z-10 font-bold">
              El estudio busca examinar las estrategias y ajustes razonables que realizan los docentes para favorecer la inclusión de estudiantes con discapacidad y trastorno del espectro autista (TEA), destacando buenas prácticas y áreas de oportunidad.
            </p>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN C: METODOLOGÍA */}
      <WaveSection topColor="#f0fdf4" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <BrutalSticker text="C. METODOLOGÍA" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#10b981]" />
            <PremiumTitle subtitle="DISEÑO Y PROCEDIMIENTO">Cualitativo Descriptivo</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Enfoque y Diseño</h4>
              <p className="text-sm leading-relaxed text-black/80">La investigación se sitúa desde un <strong>enfoque cualitativo de carácter descriptivo</strong> (Creswell & Clark, 2017). El diseño metodológico privilegia la comprensión profunda de las prácticas docentes inclusivas en un contexto universitario específico.</p>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Contexto</h4>
              <p className="text-sm leading-relaxed text-black/80">El estudio se realizó en la <strong>Universidad de Colima, México</strong>, específicamente en el <strong>Programa de Licenciatura en Educación Especial</strong>.</p>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Participantes</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="text-left py-2 font-display uppercase text-xs">Tipo</th>
                      <th className="text-left py-2 font-display uppercase text-xs">N</th>
                      <th className="text-left py-2 font-display uppercase text-xs">Características</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/20">
                      <td className="py-2 font-bold">Docentes</td>
                      <td className="py-2">4</td>
                      <td className="py-2">Profesores de licenciatura</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 font-bold">Estudiantes</td>
                      <td className="py-2">2</td>
                      <td className="py-2">Estd1: discapacidad intelectual leve; Estd2: discapacidad visual</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 font-bold">Exalumno</td>
                      <td className="py-2">1</td>
                      <td className="py-2">Diagnóstico de TEA (Grado I), desertó a mitad de carrera</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="py-2 font-black">Total</td>
                      <td className="py-2 font-black">7</td>
                      <td className="py-2 font-bold">Muestreo no probabilístico por conveniencia</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Técnicas e Instrumentos</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-black">
                      <th className="text-left py-2 font-display uppercase text-xs">Instrumento</th>
                      <th className="text-left py-2 font-display uppercase text-xs">Descripción</th>
                      <th className="text-left py-2 font-display uppercase text-xs">Aplicación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/20">
                      <td className="py-2 font-bold">Entrevistas semiestructuradas</td>
                      <td className="py-2">Guión flexible con preguntas abiertas</td>
                      <td className="py-2">Docentes, estudiantes y exalumno</td>
                    </tr>
                    <tr className="bg-emerald-50">
                      <td className="py-2 font-bold">GEPIA-A</td>
                      <td className="py-2">Guía de Evaluación de las Prácticas Inclusivas en el Aula Regular, Formato de Autorreporte. Adaptación del Índice de Inclusión de Ainscow y Booth (2002)</td>
                      <td className="py-2">Solo docentes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-4 p-4 bg-zinc-100 border-2 border-black">
                <p className="text-xs font-mono uppercase font-black mb-2">Estructura GEPIA-A:</p>
                <ol className="text-xs space-y-1 list-decimal list-inside">
                  <li>Prácticas inclusivas relacionadas con condiciones físicas, planeación, uso del tiempo, metodología y evaluación</li>
                  <li>Culturas y políticas inclusivas (relación docente-alumnos, personal de apoyo, reflexión, formación docente)</li>
                  <li>Sugerencias para mejorar el programa educativo</li>
                </ol>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Procedimiento</h4>
              <p className="text-sm leading-relaxed text-black/80">Las entrevistas presenciales tuvieron una duración de <strong>60 a 80 minutos</strong> y se realizaron durante <strong>3 semanas y 4 días</strong> (inicialmente previsto para una semana). Las sesiones fueron grabadas con consentimiento informado para su posterior transcripción y análisis.</p>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Análisis de Datos</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">Se realizó un <strong>cruce entre resultados de entrevistas y cuestionario GEPIA</strong>, sistematizando la información en tablas y capturando datos relevantes en Excel. El análisis produjo <strong>cuatro categorías</strong>:</p>
              <ol className="text-sm space-y-2 list-decimal list-inside">
                <li>Conceptualización de los ajustes razonables y la discapacidad</li>
                <li>Perspectiva sobre la inclusividad de la Licenciatura en Educación Especial</li>
                <li>Atención a estudiantes con discapacidad o trastorno</li>
                <li>Ajustes en la práctica docente dentro del nivel de educación superior</li>
              </ol>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN D: RESULTADOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f0fdf4" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <BrutalSticker text="D. RESULTADOS" color="bg-emerald-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <PremiumTitle subtitle="HALLAZGOS EMPÍRICOS">Datos del GEPIA-A y Análisis por Categorías</PremiumTitle>
          </div>

          {/* Tabla GEPIA-A */}
          <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981] mb-12">
            <h3 className="font-display text-2xl uppercase font-black mb-6 italic">Resultados del GEPIA-A</h3>
            <p className="text-sm text-black/70 mb-6">La tabla 1 presenta las puntuaciones obtenidas por los 4 docentes:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-4 border-black bg-zinc-900 text-white">
                    <th className="text-left py-3 px-4 font-display uppercase text-xs">Subescala</th>
                    <th className="text-left py-3 px-4 font-display uppercase text-xs">Media</th>
                    <th className="text-left py-3 px-4 font-display uppercase text-xs">Moda</th>
                    <th className="text-left py-3 px-4 font-display uppercase text-xs">Desviación estándar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Condiciones físicas del aula</td>
                    <td className="py-2 px-4 font-mono">3.65</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.49</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Planeación</td>
                    <td className="py-2 px-4 font-mono">3.53</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.49</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Uso del tiempo</td>
                    <td className="py-2 px-4 font-mono">3.66</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.44</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Metodología</td>
                    <td className="py-2 px-4 font-mono">3.50</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.56</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Evaluación</td>
                    <td className="py-2 px-4 font-mono">3.75</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.37</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Relación docente-alumnos</td>
                    <td className="py-2 px-4 font-mono">3.58</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.50</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Práctica del personal de apoyo</td>
                    <td className="py-2 px-4 font-mono">3.41</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.68</td>
                  </tr>
                  <tr className="border-b border-black/20 bg-emerald-100">
                    <td className="py-2 px-4 font-bold">Reflexión y sensibilización</td>
                    <td className="py-2 px-4 font-mono font-bold text-emerald-700">3.87</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.21</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Formación docente</td>
                    <td className="py-2 px-4 font-mono">3.68</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.42</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Práctica del personal de apoyo y docentes</td>
                    <td className="py-2 px-4 font-mono">3.50</td>
                    <td className="py-2 px-4 font-mono">4</td>
                    <td className="py-2 px-4 font-mono">0.56</td>
                  </tr>
                  <tr className="border-b border-black/20 bg-rose-100">
                    <td className="py-2 px-4 font-bold">Práctica del personal de ER y familias</td>
                    <td className="py-2 px-4 font-mono font-bold text-rose-700">1.75</td>
                    <td className="py-2 px-4 font-mono">2</td>
                    <td className="py-2 px-4 font-mono">0.50</td>
                  </tr>
                  <tr className="bg-zinc-900 text-white">
                    <td className="py-3 px-4 font-display uppercase font-black">Escala total</td>
                    <td className="py-3 px-4 font-mono font-black text-emerald-400">3.44</td>
                    <td className="py-3 px-4 font-mono">4</td>
                    <td className="py-3 px-4 font-mono">0.081</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 grid md:grid-cols-3 gap-4">
              <div className="bg-emerald-50 p-4 border-2 border-black">
                <p className="text-xs font-mono uppercase font-black text-emerald-700">Puntuación más alta</p>
                <p className="text-lg font-display font-black">Reflexión y sensibilización (3.87)</p>
              </div>
              <div className="bg-rose-50 p-4 border-2 border-black">
                <p className="text-xs font-mono uppercase font-black text-rose-700">Puntuación más baja</p>
                <p className="text-lg font-display font-black">Vinculación con familias (1.75)</p>
              </div>
              <div className="bg-zinc-100 p-4 border-2 border-black">
                <p className="text-xs font-mono uppercase font-black">Promedio general</p>
                <p className="text-lg font-display font-black">3.44/4.0 (escala Likert 1-4)</p>
              </div>
            </div>
          </div>

          {/* Sugerencias docentes */}
          <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981] mb-12">
            <h3 className="font-display text-2xl uppercase font-black mb-6 italic">Sugerencias de Docentes (Parte III GEPIA-A)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-4 border-black bg-zinc-900 text-white">
                    <th className="text-left py-3 px-4 font-display uppercase text-xs">Aspectos por mejorar</th>
                    <th className="text-left py-3 px-4 font-display uppercase text-xs">Temáticas por abordar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Capacitar personal administrativo en comunicación inclusiva (LSM)</td>
                    <td className="py-2 px-4">Materiales diversificados y especializados</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Establecer protocolos de atención claros</td>
                    <td className="py-2 px-4">Adecuaciones metodológicas y didácticas</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Mejorar espacios físicos</td>
                    <td className="py-2 px-4">Métodos actuales de evaluación</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Potenciar asesorías y rol tutor</td>
                    <td className="py-2 px-4">Diseño universal de aprendizaje</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Precisar límites del currículo para estudiantes con discapacidad</td>
                    <td className="py-2 px-4">Uso de tecnología adaptada</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4">Crear biblioteca especializada</td>
                    <td className="py-2 px-4">Curso de primeros auxilios</td>
                  </tr>
                  <tr className="border-b border-black/20">
                    <td className="py-2 px-4"></td>
                    <td className="py-2 px-4">Capacitación en comunicación (LSM, Braille)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Análisis por categorías */}
          <div className="space-y-8">
            <h3 className="font-display text-3xl uppercase font-black italic">Análisis por Categorías</h3>

            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981]">
              <h4 className="font-display text-xl uppercase font-black mb-4 italic text-emerald-600">Categoría 1: Conceptualización de ajustes razonables y discapacidad</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4"><strong>Contraste docente-estudiante:</strong> Los docentes demostraron conocimiento experto sobre ajustes razonables:</p>
              <div className="bg-zinc-900 text-white p-6 border-4 border-black mb-4">
                <p className="text-sm font-serif italic leading-relaxed">"[...] modificaciones que se realizan, o las adaptaciones, o los materiales que una persona requiere para acceder a información, a conocimiento, a contextos que otras personas típicas, neuróticas, no requieren" (Doc1, p. 12).</p>
              </div>
              <p className="text-sm leading-relaxed text-black/80 mb-4">Mientras que estudiantes y exalumno mostraron comprensión más incipiente. Notablemente, un estudiante con discapacidad visual <strong>no recordaba el significado del término</strong>.</p>
              <p className="text-sm leading-relaxed text-black/80 mb-4">Los docentes confirmaron que las prácticas inclusivas en educación superior son <strong>"limitadas"</strong> y carecen de protocolos institucionales claros:</p>
              <div className="bg-rose-50 p-6 border-l-4 border-rose-500">
                <p className="text-sm font-serif italic leading-relaxed text-rose-900">"No hay protocolos. No existen protocolos que nos digan a los profesores cómo actuar respecto a situaciones que requieran ajustes razonables" (Doc4, p. 12).</p>
              </div>
            </div>

            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981]">
              <h4 className="font-display text-xl uppercase font-black mb-4 italic text-emerald-600">Categoría 2: Perspectiva sobre la inclusividad</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">El programa se encuentra en <strong>transición de modelo integrador a modelo inclusivo</strong>. Los estudiantes confirmaron haber recibido información sobre ajustes razonables durante la inscripción.</p>
              <p className="text-sm leading-relaxed text-black/80 mb-4">Los docentes identificaron un <strong>dilema profesional</strong>: la Licenciatura en Educación Especial forma profesionales para <em>atender</em> a personas con discapacidad, no para <em>ser atendidos</em> por su condición:</p>
              <div className="bg-zinc-900 text-white p-6 border-4 border-black">
                <p className="text-sm font-serif italic leading-relaxed">"Van a ser ellos quienes atiendan a las personas que presentan alguna condición no ellos quienes vienen aquí para ser atendidos por su condición" (Doc4, p. 16).</p>
              </div>
            </div>

            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981]">
              <h4 className="font-display text-xl uppercase font-black mb-4 italic text-emerald-600">Categoría 3: Atención a estudiantes con discapacidad o trastorno</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">La atención se caracteriza por ser <strong>principalmente individual y voluntaria</strong>, no institucional. Los docentes comparten estrategias entre pares sin respaldo formal de la universidad.</p>
              <p className="text-sm leading-relaxed text-black/80 mb-4"><strong>Retos identificados:</strong></p>
              <ul className="text-sm space-y-2 list-disc list-inside mb-4">
                <li>Aplicación de pruebas estandarizadas sin perder validez</li>
                <li>Prácticas de observación directa (ej. "como el PAC")</li>
                <li>Adaptación de metodología sin comprometer objetivos académicos</li>
              </ul>
              <p className="text-sm leading-relaxed text-black/80">El exalumno con TEA <strong>desertó</strong> tras rechazar un diplomado alternativo que no otorgaba título de licenciatura.</p>
            </div>

            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#10b981]">
              <h4 className="font-display text-xl uppercase font-black mb-4 italic text-emerald-600">Categoría 4: Ajustes en la práctica docente</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">Los docentes implementaron diversas estrategias:</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-4 border-black bg-zinc-900 text-white">
                      <th className="text-left py-3 px-4 font-display uppercase text-xs">Ajuste</th>
                      <th className="text-left py-3 px-4 font-display uppercase text-xs">Descripción</th>
                      <th className="text-left py-3 px-4 font-display uppercase text-xs">Docente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Monitores entre pares</td>
                      <td className="py-2 px-4">Asignación de compañeros para reforzar contenidos</td>
                      <td className="py-2 px-4">Doc4</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Lengua de Señas Digital</td>
                      <td className="py-2 px-4">Método táctil para enseñar LSM a estudiante con discapacidad visual</td>
                      <td className="py-2 px-4">Doc2</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Evidencias alternativas</td>
                      <td className="py-2 px-4">Cuento en lugar de organizador gráfico (partes del oído)</td>
                      <td className="py-2 px-4">Doc2</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Preguntas de pensamiento crítico</td>
                      <td className="py-2 px-4">Verificación de comprensión durante clase</td>
                      <td className="py-2 px-4">Doc3</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Extensiones de tiempo</td>
                      <td className="py-2 px-4">Más días para entregas cuando comprometen funciones intelectuales</td>
                      <td className="py-2 px-4">Doc3</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Lectores de voz</td>
                      <td className="py-2 px-4">Evaluaciones digitales con apoyo auditivo</td>
                      <td className="py-2 px-4">Doc1, Doc2</td>
                    </tr>
                    <tr className="border-b border-black/20">
                      <td className="py-2 px-4 font-bold">Diplomado adaptado</td>
                      <td className="py-2 px-4">Rediseño curricular para estudiante con TEA (no exitoso)</td>
                      <td className="py-2 px-4">Doc1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-emerald-50 p-6 border-4 border-black">
                <p className="text-sm font-bold mb-2">🎯 Notable:</p>
                <p className="text-sm leading-relaxed">El Doc2 adaptó la enseñanza de Lengua de Señas Mexicana para una estudiante con discapacidad visual mediante el <strong>"método de Lengua de Señas Digital"</strong>, que utiliza el tacto para percibir la posición de las manos.</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN E: DISCUSIÓN */}
      <WaveSection topColor="#f0fdf4" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <BrutalSticker text="E. DISCUSIÓN" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#10b981]" />
            <PremiumTitle subtitle="INTERPRETACIÓN Y SÍNTESIS">Principales Hallazgos en Contexto</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Dependencia de la voluntad docente</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">El estudio confirma hallazgos de <strong>Perera et al. (2022)</strong> en España: aunque existe actitud favorable hacia la inclusión, las acciones dependen de la <strong>iniciativa personal</strong> más que de formación sistemática o respaldo institucional.</p>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Brecha normativa-práctica</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">A pesar de un marco legal robusto (Constitución Política de los Estados Unidos Mexicanos, Ley General de Educación, Ley General para la Inclusión de las Personas con Discapacidad, Convención sobre los Derechos de las Personas con Discapacidad), existe una <strong>disonancia crítica</strong>:</p>
              <div className="bg-rose-50 p-4 border-l-4 border-rose-500">
                <p className="text-sm font-serif italic text-rose-900">"Existe una brecha importante entre lo que se establece en el papel y lo que ocurre en la práctica" (p. 19).</p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Inclusión condicionada y capacitismo</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">Los autores visibilizan un fenómeno preocupante: la <strong>inclusión selectiva</strong> basada en el nivel intelectual. Los docentes muestran disposición condicionada a que los estudiantes posean "capacidad intelectual suficiente" para responder a exigencias académicas. Esto reproduce lo que <strong>Mareño-Sempertegui (2021)</strong> denomina <strong>capacitismo académico</strong>.</p>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Contraste con Booth y Ainscow (2015)</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">La "inclusión condicionada" encontrada contradice el modelo inclusivo ideal, que sostiene que una escuela inclusiva:</p>
              <div className="bg-zinc-900 text-white p-4 border-4 border-black">
                <p className="text-sm font-serif italic">"no selecciona ni discrimina según el nivel de competencia, sino que transforma su estructura para acoger a todos" (p. 20).</p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981] md:col-span-2">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-emerald-600">Corresponsabilidad en la inclusión</h4>
              <p className="text-sm leading-relaxed text-black/80 mb-4">El estudio revela una dinámica mutua de adaptación. El Doc1 ejemplifica:</p>
              <div className="bg-emerald-50 p-6 border-4 border-black mb-4">
                <p className="text-sm font-serif italic leading-relaxed">"Mi estudiante ciego me dijo, ¿se lo puedo dar en braille? Y le dije, sí. Entonces, ahí el reto es para mí, [...] yo también tengo que aprender, reaprender y poner en práctica eso" (p. 14).</p>
              </div>
              <p className="text-sm leading-relaxed text-black/80">Esta corresponsabilidad estudiante-docente emerge como factor facilitador, aunque también evidencia la <strong>falta de preparación previa</strong> del profesorado.</p>
            </div>
          </div>

          {/* Paradoja del contexto */}
          <div className="bg-rose-500 text-white p-12 md:p-20 border-[12px] border-black shadow-[25px_25px_0_0_#000] rotate-1 relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            <h3 className="font-display text-3xl md:text-5xl uppercase font-black italic mb-6 relative z-10">La Paradoja del Contexto</h3>
            <p className="text-xl md:text-2xl font-serif italic leading-tight relative z-10 font-bold">
              Resulta paradójico que estos hallazgos provengan de la <strong>Licenciatura en Educación Especial</strong>, donde se esperaría mayor infraestructura inclusiva. Esto sugiere que la problemática podría ser aún más grave en otros programas universitarios sin formación especializada en diversidad.
            </p>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN F: CONCLUSIÓN PRINCIPAL */}
      <WaveSection topColor="#ffffff" bottomColor="#f9fafb" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <BrutalSticker text="F. CONCLUSIÓN" color="bg-emerald-600" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <PremiumTitle subtitle="SÍNTESIS FINAL">De la Buena Voluntad al Protocolo</PremiumTitle>
          </div>

          <div className="bg-black text-white p-12 md:p-20 border-[12px] border-emerald-600 shadow-[25px_25px_0_0_#10b981] rotate-[-1deg] relative mb-12">
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
            <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-30 uppercase tracking-[0.3em]">CONCLUSIÓN PRINCIPAL // p. 18</div>
            <p className="text-2xl md:text-4xl font-serif italic leading-tight relative z-10 font-bold text-emerald-400">
              "Los ajustes razonables dependen, en gran medida, de la iniciativa personal de los docentes, más que de una política institucional clara y estructurada"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic">Aportaciones del Estudio</h4>
              <ol className="text-sm space-y-3 list-decimal list-inside">
                <li><strong>Documentación de prácticas inclusivas reales</strong> en contexto universitario mexicano, un área poco explorada empíricamente.</li>
                <li><strong>Identificación de tensiones</strong> entre formación profesional (educación especial) y atención a estudiantes con discapacidad en el mismo programa.</li>
                <li><strong>Evidencia de inclusión condicionada</strong> por criterios de rendimiento académico, visibilizando prácticas capacitistas sutiles.</li>
                <li><strong>Modelo de corresponsabilidad</strong> entre docentes y estudiantes como estrategia emergente.</li>
              </ol>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#10b981]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic">Recomendaciones Implícitas</h4>
              <ul className="text-sm space-y-3 list-disc list-inside">
                <li>Transitar de atención de "buena voluntad" a atención con <strong>fundamento estructural</strong></li>
                <li>Establecer <strong>protocolos formales</strong> para solicitud y otorgamiento de ajustes razonables</li>
                <li>Fortalecer <strong>formación docente</strong> en comunicación alternativa (LSM, Braille)</li>
                <li>Mejorar <strong>vinculación con familias</strong>, identificada como área crítica</li>
                <li>Crear <strong>lineamientos institucionales</strong> que transformen la inclusión de excepción a norma</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-emerald-50 p-10 border-[8px] border-black shadow-[20px_20px_0_0_#000] text-center">
            <p className="text-xl md:text-2xl font-serif italic text-black/80 font-bold leading-relaxed">
              "Se vuelve indispensable pasar de una atención de buena voluntad a una atención con fundamento estructural, donde la inclusión no sea una excepción, sino una norma" (p. 19).
            </p>
          </div>
        </div>
      </WaveSection>



      {/* SECCIÓN 1: EL LENGUAJE DE LA BUENA VOLUNTAD */}
      <WaveSection topColor="#ffffff" bottomColor="#f0fdf4" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. LA PARADOJA INSTITUCIONAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#10b981]" />
               <PremiumTitle subtitle="ANÁLISIS DE LA INCLUSIÓN REAL"> Ajustes Razonables </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-emerald-600 text-white p-12 md:p-20 border-[12px] border-black shadow-[25px_25px_0_0_#000] rotate-[-1deg] relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
                 <p className="text-3xl md:text-5xl font-display font-black italic text-black leading-none mb-4 uppercase">
                   "Voluntad vs Protocolo"
                 </p>
                 <p className="text-2xl md:text-3xl font-serif italic text-white leading-tight relative z-10 font-bold">
                   La inclusión en educación superior depende de la iniciativa individual de los docentes; existe sensibilidad pero faltan marcos estructurales claros para actuar sin improvisar.
                 </p>
              </div>

              {/* MATRIZ GEPIA-A */}
              <BrutalCard title="MÉTRICAS GEPIA-A (CULTURA Y PRÁCTICA)" color="bg-white" className="mb-12 border-emerald-600">
                <div className="space-y-10">
                  {GEPIA_DATA.map((item, idx) => (
                    <div key={idx} className="space-y-3">
                       <div className="flex justify-between items-end">
                          <span className="font-display text-lg uppercase font-black italic tracking-tighter">{item.label}</span>
                          <span className="font-mono text-2xl font-black text-emerald-600">{item.value}/4</span>
                       </div>
                       <div className="h-6 w-full bg-zinc-100 border-2 border-black relative">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.value / 4) * 100}%` }}
                            transition={{ duration: 1, delay: idx * 0.1 }}
                            className={`h-full border-r-4 border-black ${item.color}`}
                          />
                       </div>
                    </div>
                  ))}
                  <div className="pt-6 border-t-2 border-black/10 flex items-center gap-4">
                     <AlertTriangle className="text-rose-500" />
                     <p className="text-[10px] font-mono font-black uppercase text-zinc-500 tracking-widest">Alerta: La vinculación con familias es el punto más débil del sistema.</p>
                  </div>
                </div>
              </BrutalCard>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <CinematicCard color="bg-white" title="METODOLOGÍA" icon={BarChart} className="shadow-[10px_10px_0_0_#10b981]">
                 <p className="text-lg font-bold leading-snug text-black/80">Uso de <strong>GEPIA-A</strong> y entrevistas a profundidad para triangular la perspectiva de 4 docentes y 3 estudiantes (incluyendo un desertor con TEA).</p>
              </CinematicCard>
              
              <div className="bg-black text-emerald-400 p-10 border-4 border-black shadow-[10px_10px_0_0_#10b981] rotate-2 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-30 uppercase tracking-[0.3em]">MEX_EDUC_ESPECIAL_3606</div>
                 <h4 className="font-display text-xl uppercase font-black mb-6 italic text-white underline decoration-emerald-600">El Caso ASD</h4>
                 <p className="text-sm font-sans font-medium leading-relaxed italic text-white/90">
                   "Aun en grados leves (TEA 1), la falta de ajustes específicos para el procesamiento social conduce a la deserción, visibilizando la brecha de comprensión institucional."
                 </p>
              </div>

              <div className="bg-white border-8 border-black p-10 shadow-[10px_10px_0_0_#000] -rotate-1 text-black">
                 <h4 className="font-display text-2xl uppercase font-black mb-4 flex items-center gap-3 italic">
                   <HardDrive className="text-emerald-600" /> Ajustes
                 </h4>
                 <ul className="text-[10px] font-mono font-black uppercase space-y-2 opacity-70">
                   <li>• Monitores entre pares</li>
                   <li>• Lengua de señas táctil</li>
                   <li>• Evidencias alternativas</li>
                   <li>• Flexibilidad de tiempos</li>
                 </ul>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES CRÍTICAS */}
      <WaveSection topColor="#f0fdf4" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. EJES DE TRANSFORMACIÓN" color="bg-emerald-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="DIMENSIONES DE LA INCLUSIÓN UNIVERSITARIA">¿De qué depende el cambio?</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-8 border-8 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-emerald-600 text-white shadow-[12px_12px_0_0_#000] -translate-y-2' 
                      : 'bg-white hover:bg-emerald-50 shadow-[6px_6px_0_0_#10b981]'
                  }`}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-5xl group-hover:scale-125 transition-transform">{dim.emoji}</span>
                    <div className="flex flex-col">
                      <span className="font-display text-2xl uppercase font-black tracking-tighter italic leading-none mb-1 text-inherit">{dim.name}</span>
                      <span className="font-mono text-[9px] uppercase font-black opacity-60 tracking-widest">{dim.code} // RESULTADO</span>
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
                  className="bg-zinc-950 text-white border-[16px] border-black p-12 md:p-20 shadow-[35px_35px_0_0_#10b981] rotate-1 relative overflow-hidden min-h-[500px] flex flex-col justify-center"
                >
                   <div className="absolute -top-10 -right-10 p-8 font-display text-[15rem] font-black text-white/5 leading-none italic select-none">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-5xl md:text-6xl uppercase font-black mb-8 italic text-emerald-400 leading-none relative z-10">
                    {DIMENSIONS[activeDimension].name}
                  </h3>
                  
                  <p className="text-2xl md:text-3xl font-serif italic text-zinc-100 font-medium leading-tight mb-12 relative z-10 border-l-[10px] border-emerald-600 pl-8">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="grid md:grid-cols-1 gap-6 relative z-10">
                    <div className="bg-black text-white p-10 border-4 border-emerald-600 rotate-[-1deg] shadow-[10px_10px_0_0_#000]">
                      <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest text-emerald-400 border-b border-emerald-900 pb-2">CRITERIOS_DOCENTES</h4>
                      <ul className="space-y-5">
                        {DIMENSIONS[activeDimension].highlights?.map((h, i) => (
                          <li key={i} className="flex gap-4 items-start">
                             <CheckSquare size={18} className="text-emerald-500 shrink-0 mt-1" />
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

      {/* SECCIÓN 3: BARRERAS (BAPS) */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. LAS BARRERAS (BAP)" color="bg-rose-500" className="text-white mb-8 !rotate-0 shadow-[8px_8px_0_0_#000]" />
            <PremiumTitle className="items-center" subtitle="OBSTÁCULOS PARA LA PARTICIPACIÓN">Las Grietas del Sistema</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-32">
             {BARRIERS.map((bar, bi) => (
               <div key={bi} className="p-10 border-8 border-black bg-white shadow-[12px_12px_0_0_#10b981] hover:-rotate-1 transition-transform group">
                  <h4 className="font-display text-3xl uppercase font-black mb-4 italic text-emerald-600 leading-none">{bar.title}</h4>
                  <p className="text-lg font-serif italic text-black/80 font-bold border-t-2 border-black pt-4">
                    {bar.desc}
                  </p>
               </div>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1 space-y-12">
                <BrutalQuote author="Doc4 (2025)" className="rotate-2 shadow-[20px_20px_0_0_#000] bg-zinc-50 border-emerald-600">
                  "No hay protocolos. No existen protocolos que nos digan cómo actuar ante situaciones que requieren ajustes razonables."
                </BrutalQuote>
                <BrutalQuote author="Macías-Rosado (2026)" className="-rotate-1 shadow-[15px_15px_0_0_#10b981] bg-black text-white">
                  "Se vuelve indispensable pasar de una atención de buena voluntad a una atención con fundamento estructural."
                </BrutalQuote>
             </div>
             
             <div className="order-1 md:order-2">
                <div className="relative group">
                   <div className="absolute inset-0 bg-emerald-600 translate-x-10 translate-y-10" />
                   <div className="relative bg-white border-[12px] border-black p-12">
                      <HeartHandshake size={64} className="text-emerald-600 mb-8" />
                      <h4 className="font-display text-5xl font-black uppercase italic mb-8">El Reto Docente</h4>
                      <p className="font-serif text-2xl leading-relaxed text-black/80 mb-10 border-l-8 border-emerald-600 pl-8 font-bold italic">
                        "Mi estudiante ciego me pidió entregar en Braille. El reto fue para mí: tuve que aprender, reaprender y poner en práctica eso."
                      </p>
                      <div className="bg-emerald-50 p-6 border-4 border-black font-mono text-xs font-black uppercase italic animate-pulse">
                         RETAR A CADA VEZ HACER MÁS COSAS.
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL: LIMITACIONES */}
      <WaveSection topColor="#ffffff" bottomColor="#f9fafb" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-50 border-[12px] border-black p-12 md:p-24 shadow-[25px_25px_0_0_#000] relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black italic">Pilot_3606 // LIMITACIONES</div>
             <HelpCircle size={80} className="mx-auto text-emerald-600 mb-8 animate-pulse" />
             <h3 className="text-5xl md:text-7xl font-display uppercase font-black leading-tight mb-10 italic">
               Más allá del <span className="text-emerald-600 underline">Compromiso</span>
             </h3>
             <p className="text-2xl font-serif italic text-black/70 mb-12 max-w-4xl mx-auto">
              "7 participantes en un programa especializado en discapacidad ofrecen un caso crítico, pero no representan la realidad de facultades sin tradición en educación especial."
             </p>
             <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-left">
                {LIMITATIONS.map((limit, l) => (
                  <div key={l} className="p-6 bg-white border-4 border-black font-mono text-[10px] uppercase font-black leading-tight flex items-start gap-4">
                    <span className="text-emerald-600 font-bold">•</span>
                    <span>{limit}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </WaveSection>

      {/* CALL TO ACTION ACADÃ‰MICO */}
      <div className="py-40 bg-zinc-950 text-white border-t-[20px] border-emerald-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 px-6">
           <h2 className="text-6xl md:text-8xl font-display uppercase font-black italic tracking-tighter leading-none mb-12">
             InclusiÃ³n: <br/> de la voluntad <br/> al <span className="bg-emerald-600 px-4">protocolo</span>
           </h2>
           <div className="w-40 h-8 bg-emerald-600 mx-auto mb-16 shadow-[10px_10px_0_0_#000]" />
           <p className="text-xl font-mono text-emerald-500 uppercase font-black tracking-widest italic animate-pulse">
             INVESTIGACIÃ“N INSTRUMENTAL RPP e3606
           </p>
        </div>
      </div>
    </div>
  );
};

