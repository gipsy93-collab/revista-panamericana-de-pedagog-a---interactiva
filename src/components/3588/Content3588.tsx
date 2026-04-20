import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Binary, Ruler, ShieldCheck, Activity, Zap, HardDrive, ListChecks, CheckSquare, Microscope, TrendingDown, Target, HelpCircle, Users } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalCard, BrutalQuote } from '../BrutalistLib';
import { DIMENSIONS, ARTICLE_META, LIMITATIONS } from './constants';

export const Content3588 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#eef2ff15" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#eef2ff]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#eef2ff] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">La deserción escolar en educación superior es un fenómeno global con consecuencias individuales y sociales significativas. Según la OECD (2024), la tasa de deserción puede alcanzar hasta un 24% a nivel internacional, duplicándose en algunas regiones específicas. Las consecuencias abarcan desde efectos individuales (baja autoestima, pérdida de sentido de pertenencia) hasta implicaciones sistémicas (pérdidas económicas institucionales, aumento de desigualdad social).</p>
              <p className="text-base leading-relaxed text-black/80">El estudio de la <strong>intención de deserción</strong> —definida como los pensamientos o consideración del estudiante de interrumpir definitivamente sus estudios antes de obtener el título— se convierte en una señal de alerta temprana crucial. Como señalan Findeisen et al. (2024), estudiar la intención es más factible porque permite acceder a estudiantes que aún están en el sistema educativo.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#eef2ff] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic text-eef2ff">Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-base leading-relaxed text-black/80">El artículo identifica <strong>cuatro limitaciones críticas</strong> en la medición actual de la intención de deserción:</p>
              <p className="text-base leading-relaxed text-black/80">1. <strong>Uso de ítems únicos:</strong> Muchos estudios evalúan el fenómeno con una sola pregunta, limitando la comprensión profunda.</p>
              <p className="text-base leading-relaxed text-black/80">2. <strong>Confusión conceptual:</strong> Algunos instrumentos miden indistintamente intención de abandonar estudios e intención de cambiar de carrera, fenómenos conceptualmente distintos.</p>
              <p className="text-base leading-relaxed text-black/80">3. <strong>Escasez de validación psicométrica:</strong> Una revisión sistemática de Muñoz-Inostroza et al. (2024) solo identificó seis instrumentos validados psicométricamente.</p>
              <p className="text-base leading-relaxed text-black/80">4. <strong>Ausencia de definición conceptual:</strong> Solo un instrumento (el de Bäulke et al., 2022) explicita la definición operacional de intención de deserción.</p>
              <p className="text-base leading-relaxed text-black/80"><strong>Vacío específico en México:</strong> Revisiones sistemáticas recientes no han identificado estudios sobre el fenómeno realizados en el país ni instrumentos desarrollados en este contexto. Solo se encontró una escala validada: la Escala de Intención de Abandonar los Estudios de Frostad et al. (2015) adaptada por Jacobo-Galicia et al. (2021), que tiene la limitación de contextualizar ítems en motivos específicos.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* A. OBJETIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#eef2ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="A. OBJETIVOS" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Objetivo General</h3>
              <p className="text-base leading-relaxed text-black/80">
                Traducir y analizar algunas propiedades psicomÃ©tricas de la Escala para medir la intenciÃ³n de deserciÃ³n de BÃ¤ulke et al. (2022) en el contexto mexicano a travÃ©s de un estudio piloto.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-400">Objetivos EspecÃ­ficos</h3>
              <ol className="space-y-3 text-base">
                <li className="flex gap-3">
                  <span className="font-black text-indigo-400">1.</span>
                  <span>Traducir el instrumento al espaÃ±ol y revisar su claridad.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-indigo-400">2.</span>
                  <span>Analizar su confiabilidad a travÃ©s del alfa de Cronbach y el omega de McDonald.</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-indigo-400">3.</span>
                  <span>Medir la validez externa convergente mediante correlaciÃ³n con instrumento previamente validado en MÃ©xico y con constructos teÃ³ricamente relacionados (motivaciÃ³n y autoeficacia acadÃ©micas).</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* B. METODOLOGÃA */}
      <WaveSection topColor="#eef2ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="B. METODOLOGÃA" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-12">
            {/* 3.1 Tipo de estudio */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">B.1 Tipo de Estudio</h3>
              <p className="text-base text-black/80 mb-4">Estudio piloto cuantitativo con diseÃ±o:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-4 border-2 border-black">
                  <span className="font-black text-indigo-600">Instrumental:</span>
                  <span className="text-sm text-black/80"> AnÃ¡lisis de propiedades psicomÃ©tricas de escala</span>
                </div>
                <div className="bg-indigo-50 p-4 border-2 border-black">
                  <span className="font-black text-indigo-600">No experimental:</span>
                  <span className="text-sm text-black/80"> Sin manipulaciÃ³n de variables</span>
                </div>
                <div className="bg-indigo-50 p-4 border-2 border-black">
                  <span className="font-black text-indigo-600">Transversal:</span>
                  <span className="text-sm text-black/80"> RecolecciÃ³n en un solo momento</span>
                </div>
                <div className="bg-indigo-50 p-4 border-2 border-black">
                  <span className="font-black text-indigo-600">Correlacional:</span>
                  <span className="text-sm text-black/80"> BÃºsqueda de asociaciones sin establecer causalidad</span>
                </div>
              </div>
            </div>

            {/* 3.2 Participantes */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-400">B.2 Participantes / Muestra</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">CaracterÃ­stica</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Detalle</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">N</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">71 estudiantes universitarios</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Perfil</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Diversas carreras de universidades de YucatÃ¡n, MÃ©xico</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">GÃ©nero</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">87% mujeres (n=60), 13% hombres (n=9)</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Edad media</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">21.6 aÃ±os (IC 95% = 20.5 â€“ 22.6; DE = 4.35)</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">Rango de edad</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">18 a 50 aÃ±os</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Instituciones</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">2 privadas, 1 pÃºblica</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-indigo-400 mb-3">DistribuciÃ³n por Ã¡rea de estudio</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between"><span>EducaciÃ³n:</span><span className="font-black">62% (n=18)</span></li>
                    <li className="flex justify-between"><span>IntervenciÃ³n educativa:</span><span className="font-black">11.3% (n=8)</span></li>
                    <li className="flex justify-between"><span>Relaciones internacionales:</span><span className="font-black">9.9% (n=7)</span></li>
                    <li className="flex justify-between"><span>PsicologÃ­a:</span><span className="font-black">5.6% (n=4)</span></li>
                    <li className="flex justify-between"><span>PsicopedagogÃ­a:</span><span className="font-black">5.6% (n=4)</span></li>
                    <li className="flex justify-between"><span>EnseÃ±anza del inglÃ©s:</span><span className="font-black">5.6% (n=4)</span></li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-indigo-400 mb-3">DistribuciÃ³n por semestre</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex justify-between"><span>Tercer semestre:</span><span className="font-black">36.6% (n=26)</span></li>
                    <li className="flex justify-between"><span>Octavo semestre:</span><span className="font-black">29.6% (n=21)</span></li>
                    <li className="flex justify-between"><span>SÃ©ptimo semestre:</span><span className="font-black">18.3% (n=13)</span></li>
                    <li className="flex justify-between"><span>Segundo, cuarto, quinto, sexto:</span><span className="font-black">resto</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3.3 Instrumentos */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">B.3 Instrumentos / TÃ©cnicas de recolecciÃ³n</h3>
              <div className="space-y-6">
                <div className="bg-indigo-50 p-6 border-2 border-black">
                  <h4 className="font-black text-indigo-600 mb-2">Instrumento principal (a validar)</h4>
                  <p className="text-sm text-black/80"><strong>Escala BÃ¤ulke et al. (2022)</strong> â€” subescala de intenciÃ³n de deserciÃ³n. 15 Ã­tems en 5 dimensiones (3 Ã­tems cada una). Escala Likert 1-6. Dimensiones: percepciÃ³n de no encajar, pensamientos sobre desertar, anÃ¡lisis, bÃºsqueda de informaciÃ³n, decisiÃ³n final.</p>
                </div>
                <div className="bg-zinc-100 p-6 border-2 border-black">
                  <h4 className="font-black text-indigo-600 mb-2">Instrumento de validez convergente</h4>
                  <p className="text-sm text-black/80"><strong>Escala Frostad et al. (2015)</strong> en Jacobo-Galicia et al. (2021). 6 Ã­tems, escala Likert 1-7. Previamente validada en MÃ©xico.</p>
                </div>
                <div className="bg-indigo-50 p-6 border-2 border-black">
                  <h4 className="font-black text-indigo-600 mb-2">Instrumentos de constructos relacionados</h4>
                  <p className="text-sm text-black/80"><strong>EACA</strong> (Blanco et al., 2011): 13 Ã­tems, escala 0-10. <strong>CEMA</strong> (Hayamizu y Weiner, 1991; Gaeta et al., 2015): subescala metas orientadas al aprendizaje, 6 Ã­tems, escala 1-5.</p>
                </div>
              </div>
            </div>

            {/* 3.4 Procedimiento */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-400">B.4 Procedimiento</h3>
              <div className="space-y-6">
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-indigo-400 mb-2">Fase 1: TraducciÃ³n al espaÃ±ol</h4>
                  <ul className="space-y-1 text-sm">
                    <li>â€¢ TraducciÃ³n del inglÃ©s al espaÃ±ol por docente experta en enseÃ±anza del inglÃ©s (Universidad AutÃ³noma de YucatÃ¡n)</li>
                    <li>â€¢ EvaluaciÃ³n de significado original y concordancia semÃ¡ntica (escala 0-3)</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-indigo-400 mb-2">Fase 2: RecolecciÃ³n presencial</h4>
                  <ul className="space-y-1 text-sm">
                    <li>â€¢ AplicaciÃ³n en formato impreso a estudiantes de instituciÃ³n privada y pÃºblica</li>
                    <li>â€¢ RetroalimentaciÃ³n de claridad con grupo piloto de octavo semestre</li>
                    <li>â€¢ AplicaciÃ³n al resto de participantes</li>
                    <li>â€¢ Consentimiento informado previo</li>
                  </ul>
                </div>
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-indigo-400 mb-2">Fase 3: RecolecciÃ³n online</h4>
                  <ul className="space-y-1 text-sm">
                    <li>â€¢ Formulario Microsoft Forms para segunda instituciÃ³n privada</li>
                    <li>â€¢ Consentimiento informado integrado</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3.5 AnÃ¡lisis de datos */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">B.5 AnÃ¡lisis de Datos</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-indigo-50 p-6 border-2 border-black">
                  <h4 className="font-black text-indigo-600 mb-2">Confiabilidad</h4>
                  <ul className="space-y-1 text-sm text-black/80">
                    <li>â€¢ Alfa de Cronbach (dimensiones)</li>
                    <li>â€¢ Omega de McDonald (dimensiones y escala total)</li>
                  </ul>
                </div>
                <div className="bg-indigo-50 p-6 border-2 border-black">
                  <h4 className="font-black text-indigo-600 mb-2">Validez convergente</h4>
                  <ul className="space-y-1 text-sm text-black/80">
                    <li>â€¢ CorrelaciÃ³n de Spearman</li>
                    <li>â€¢ CorrelaciÃ³n con escala de Jacobo-Galicia et al. (2021)</li>
                    <li>â€¢ CorrelaciÃ³n con motivaciÃ³n y autoeficacia</li>
                  </ul>
                </div>
                <div className="bg-zinc-900 text-white p-6 border-2 border-black">
                  <h4 className="font-black text-indigo-400 mb-2">Software</h4>
                  <p className="text-sm">Jamovi 2.7.6.0</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* C. HALLAZGO PRINCIPAL */}
      <WaveSection topColor="#ffffff" bottomColor="#eef2ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="C. HALLAZGO PRINCIPAL" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#4f46e5]">
            <p className="text-lg leading-relaxed text-black/80 mb-6">
              La escala BÃ¤ulke traducida al espaÃ±ol muestra <strong>propiedades psicomÃ©tricas adecuadas</strong> para el contexto mexicano: confiabilidad alta en todas las dimensiones (Î± = .829 - .970), correlaciones moderadas a fuertes con instrumento validado previo (r = .406 - .570), y correlaciones inversas significativas con motivaciÃ³n (r = -.326) y autoeficacia (r = -.436), consistentes con la literatura teÃ³rica.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-indigo-600 text-white p-6 border-4 border-black text-center">
                <div className="text-4xl font-black">Î± = .829-.970</div>
                <p className="text-xs mt-2">Confiabilidad por dimensiÃ³n</p>
              </div>
              <div className="bg-zinc-900 text-white p-6 border-4 border-black text-center">
                <div className="text-4xl font-black">r = .570</div>
                <p className="text-xs mt-2">CorrelaciÃ³n mÃ¡xima (validez)</p>
              </div>
              <div className="bg-indigo-600 text-white p-6 border-4 border-black text-center">
                <div className="text-4xl font-black">Ï‰ = .959</div>
                <p className="text-xs mt-2">Omega escala total</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* D. RESULTADOS POR OBJETIVO */}
      <WaveSection topColor="#eef2ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="D. RESULTADOS POR OBJETIVO" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-12">
            {/* Objetivo 1 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Objetivo 1: TraducciÃ³n y claridad</h3>
              <ul className="space-y-2 text-base text-black/80">
                <li className="flex gap-2"><span className="text-indigo-600 font-black">â–¸</span> Los participantes reportaron comprensiÃ³n correcta de los reactivos</li>
                <li className="flex gap-2"><span className="text-indigo-600 font-black">â–¸</span> No se encontraron tÃ©rminos fuera de vocabulario</li>
                <li className="flex gap-2"><span className="text-indigo-600 font-black">â–¸</span> Estructura de oraciones clara y fluida</li>
                <li className="flex gap-2"><span className="text-indigo-600 font-black">â–¸</span> <strong>ObservaciÃ³n:</strong> Algunos estudiantes dificultaron diferenciar Ã­tems 1 y 2 de &quot;bÃºsqueda de informaciÃ³n&quot; e Ã­tems 2 y 3 de &quot;decisiÃ³n final&quot; por similitud</li>
              </ul>
            </div>

            {/* Objetivo 2 */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-400">Objetivo 2: Confiabilidad</h3>
              <div className="overflow-x-auto mb-4">
                <table className="w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">DimensiÃ³n</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Î± Cronbach</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Ï‰ McDonald</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">PercepciÃ³n de no encajar</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">.873</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">.877</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Pensamientos sobre desertar</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">.764 (.829*)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">.827 (.850*)</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">AnÃ¡lisis</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">.858</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">.863</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">BÃºsqueda de informaciÃ³n</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">.858</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">.862</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">DecisiÃ³n final</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">.969</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">.970</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-600 text-white font-black">Escala total</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-600 text-white">N/A</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-600 text-white font-black">.959</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm">*Eliminando Ã­tem 4 del instrumento. La dimensiÃ³n &quot;pensamientos sobre desertar&quot; mejorarÃ­a su alfa de .764 a .829 eliminando el primer Ã­tem de esa dimensiÃ³n (Ã­tem 4 global).</p>
            </div>

            {/* Objetivo 3 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Objetivo 3: Validez convergente</h3>
              <p className="text-base text-black/80 mb-4">CorrelaciÃ³n con escala previamente validada (Jacobo-Galicia et al., 2021):</p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">DimensiÃ³n BÃ¤ulke</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">r</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Magnitud</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">PercepciÃ³n de no encajar</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">.406</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Moderada</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Pensamientos sobre desertar</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">.476</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Moderada</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">AnÃ¡lisis</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">.544</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Fuerte</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">BÃºsqueda de informaciÃ³n</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">.540</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Fuerte</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">DecisiÃ³n final</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">.473</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Moderada</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-600 text-white font-black">PuntuaciÃ³n total</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-600 text-white font-black">.570</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-600 text-white font-black">Fuerte</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-black/80 mb-4">Todas las correlaciones fueron positivas y estadÃ­sticamente significativas (p &lt; .001).</p>
              
              <p className="text-base text-black/80 mb-4">CorrelaciÃ³n con constructos teÃ³ricamente relacionados:</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">r</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">p</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">InterpretaciÃ³n</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">MotivaciÃ³n acadÃ©mica</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">-.326</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">&lt; .01</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Inversa moderada</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Autoeficacia acadÃ©mica</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">-.436</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">&lt; .001</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Inversa moderada</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-black/80 mt-4">Ambas correlaciones fueron inversas y estadÃ­sticamente significativas: mayor motivaciÃ³n/autoeficacia = menor intenciÃ³n de deserciÃ³n.</p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* E. TABLA RESUMEN DE DATOS CLAVE */}
      <WaveSection topColor="#ffffff" bottomColor="#eef2ff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="E. TABLA RESUMEN" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable/Dato</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Valor</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Contexto/Nota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">TamaÃ±o muestral</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">n = 71</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Estudio piloto</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Mujeres</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">87% (n=60)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Sesgo de gÃ©nero notable</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Edad media</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">21.6 aÃ±os</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">DE = 4.35</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Alfa mÃ­nimo dimensiÃ³n</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">.764</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Pensamientos sobre desertar</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Alfa mÃ¡ximo dimensiÃ³n</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">.969</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">DecisiÃ³n final</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Omega escala total</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">.959</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Excelente confiabilidad</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">CorrelaciÃ³n mÃ¡xima (validez)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">r = .570</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Con escala Jacobo-Galicia</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">CorrelaciÃ³n motivaciÃ³n</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">r = -.326</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">p &lt; .01</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">CorrelaciÃ³n autoeficacia</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">r = -.436</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">p &lt; .001</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">NÃºmero de dimensiones</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">5</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Modelo de fases</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Ãtems totales</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">15</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">3 por dimensiÃ³n</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </WaveSection>


      {/* F. INTERPRETACIÃ“N */}
      <WaveSection topColor="#eef2ff" bottomColor="#000000" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="F. INTERPRETACIÃ“N" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Consistencia con el original</h3>
              <p className="text-base leading-relaxed text-black/80">
                Los resultados indican que la escala BÃ¤ulke traducida mantiene las propiedades psicomÃ©tricas del estudio original (alfas entre .80-.95 en estudio original vs. .829-.970 en este estudio). La traducciÃ³n fue adecuada, aunque la muestra pequeÃ±a limita la generalizaciÃ³n.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-400">Estructura de fases</h3>
              <p className="text-base leading-relaxed">
                La estructura de cinco fases del proceso de deserciÃ³n se respalda empÃ­ricamente mediante las correlaciones con el instrumento validado previo, especialmente fuertes en las dimensiones de &quot;anÃ¡lisis&quot; y &quot;bÃºsqueda de informaciÃ³n&quot;.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* G. CONCLUSIONES */}
      <WaveSection topColor="#000000" bottomColor="#f9fafb" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="G. CONCLUSIONES" color="bg-indigo-600" className="text-white mb-12 !rotate-0" />
          <div className="space-y-8">
            <BrutalQuote author="Euan-Catzin (p. 16)">
              Los resultados son valiosos para orientar la mediciÃ³n del fenÃ³meno en el contexto y muestran la pertinencia de realizar futuras investigaciones que consideren muestras de mayor tamaÃ±o y diversidad.
            </BrutalQuote>
            
            <BrutalQuote author="Euan-Catzin (p. 16)">
              Este estudio contribuye al avance del conocimiento en el campo de la intenciÃ³n de deserciÃ³n escolar universitaria en MÃ©xico, ya que los instrumentos validados en el paÃ­s son limitados.
            </BrutalQuote>
            
            <BrutalQuote author="Euan-Catzin (p. 16)">
              Contar con instrumentos validados en el contexto permite a las instituciones de educaciÃ³n superior detectar seÃ±ales tempranas de abandono acadÃ©mico, lo que plantea la posibilidad de diseÃ±ar estrategias oportunas para prevenir o reducir la deserciÃ³n escolar.
            </BrutalQuote>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÃ“N 1: EL INSTRUMENTO DE PRECISIÃ“N */}
      <WaveSection topColor="#ffffff" bottomColor="#eef2ff" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. ARQUITECTURA PSICOMÃ‰TRICA" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
               <PremiumTitle subtitle="VALIDACIÃ“N EN CONTEXTO MEXICANO"> Escala BÃ¤ulke </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-indigo-600 p-12 md:p-20 border-[12px] border-black shadow-[25px_25px_0_0_#000] rotate-[-1deg] relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
                 <p className="text-3xl md:text-5xl font-display font-black italic text-white leading-none mb-4 uppercase">
                   "ð›š = .959"
                 </p>
                 <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-tight relative z-10 font-bold">
                   Una confiabilidad casi perfecta que valida el uso de esta herramienta para detectar la intenciÃ³n de abandono antes de que ocurra.
                 </p>
              </div>

              {/* FICHA METODOLÃ“GICA TÃ‰CNICA */}
              <BrutalCard title="PROTOCOLO DE ESTUDIO PILOTO" color="bg-white" className="mb-12 border-indigo-600">
                <div className="grid md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-indigo-600 font-black uppercase text-xs">
                      <ListChecks size={16} /> Fases de ValidaciÃ³n
                    </div>
                    <p className="text-sm leading-relaxed text-black/70">
                      AdaptaciÃ³n al espaÃ±ol con equivalencia semÃ¡ntica, seguida de aplicaciones hÃ­bridas (presencial/online).
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {ARTICLE_META.phases?.map((p, i) => (
                         <span key={i} className="bg-indigo-50 px-3 py-1 text-[9px] font-black uppercase border border-indigo-200 text-indigo-700">{p}</span>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-indigo-600 font-black uppercase text-xs">
                       <Ruler size={16} /> 5 Dimensiones â€¢ 15 Ãtems
                    </div>
                    <p className="text-sm leading-relaxed italic text-black/70 italic border-l-4 border-indigo-600 pl-4">
                      "Diferencia claramente entre la intenciÃ³n de desertar y la intenciÃ³n de cambiar de carrera, evitando sesgos institucionales."
                    </p>
                  </div>
                </div>
              </BrutalCard>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <CinematicCard color="bg-white" title="CONVERGENCIA" icon={Target} className="shadow-[10px_10px_0_0_#4f46e5]">
                 <p className="text-lg font-bold leading-snug text-black/80">CorrelaciÃ³n fuerte (<strong>r = .570</strong>) con instrumentos previos, confirmando la solidez de la mediciÃ³n en YucatÃ¡n.</p>
              </CinematicCard>
              
              <div className="bg-black text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#4f46e5] rotate-2 relative group overflow-hidden">
                 <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-30 uppercase tracking-[0.3em]">UADY_RPP_3588</div>
                 <h4 className="font-display text-xl uppercase font-black mb-6 italic text-indigo-400 underline decoration-white/20">Alerta Temprana</h4>
                 <p className="text-sm font-sans font-medium leading-relaxed italic">
                   "La intenciÃ³n es un proceso secuencial. Detectarla en fases iniciales permite intervenciones preventivas eficaces."
                 </p>
              </div>

              <div className="bg-white border-8 border-black p-10 shadow-[10px_10px_0_0_#000] -rotate-1 text-black">
                 <h4 className="font-display text-2xl uppercase font-black mb-4 flex items-center gap-3 italic">
                   <Users className="text-indigo-600" /> Sesgo de GÃ©nero
                 </h4>
                 <p className="text-6xl font-display font-black text-indigo-600 italic text-center">87% <span className="text-xl">F</span></p>
                 <p className="text-xs font-mono font-black uppercase mt-2 opacity-60">LimitaciÃ³n reconocida: Alta prevalencia femenina en la muestra piloto.</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÃ“N 2: DIMENSIONES SECUENCIALES */}
      <WaveSection topColor="#eef2ff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. EL PROCESO DE DESAFILIACIÃ“N" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="FASES COGNITIVAS SEGÃšN BÃ„ULKE">Â¿CÃ³mo se construye el abandono?</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-8 border-8 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-indigo-600 text-white shadow-[12px_12px_0_0_#000] -translate-y-2' 
                      : 'bg-white hover:bg-indigo-50 shadow-[6px_6px_0_0_#4f46e5]'
                  }`}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-5xl group-hover:scale-125 transition-transform">{dim.emoji}</span>
                    <div className="flex flex-col">
                      <span className="font-display text-2xl uppercase font-black tracking-tighter italic leading-none mb-1 text-inherit">{dim.name}</span>
                      <span className="font-mono text-[9px] uppercase font-black opacity-60 tracking-widest">{dim.code} // DIMENSIÃ“N</span>
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
                  className="bg-white border-[16px] border-black p-12 md:p-20 shadow-[35px_35px_0_0_#4f46e5] rotate-1 relative overflow-hidden min-h-[500px] flex flex-col justify-center"
                >
                   <div className="absolute -top-10 -right-10 p-8 font-display text-[15rem] font-black text-black/5 leading-none italic select-none">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-5xl md:text-6xl uppercase font-black mb-8 italic text-indigo-600 leading-none relative z-10">
                    {DIMENSIONS[activeDimension].name}
                  </h3>
                  
                  <p className="text-2xl md:text-3xl font-serif italic text-black/80 font-medium leading-tight mb-12 relative z-10 border-l-[10px] border-black pl-8">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="grid md:grid-cols-1 gap-6 relative z-10">
                    <div className="bg-zinc-950 text-white p-10 border-4 border-black rotate-[-1deg] shadow-[10px_10px_0_0_#000]">
                      <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest text-indigo-400 border-b border-white/10 pb-2">CRITERIOS_PSICOMÃ‰TRICOS</h4>
                      <ul className="space-y-5">
                        {DIMENSIONS[activeDimension].highlights?.map((h, i) => (
                          <li key={i} className="flex gap-4 items-start">
                             <CheckSquare size={18} className="text-indigo-500 shrink-0 mt-1" />
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

      {/* SECCIÃ“N 3: CORRELACIONES INVERSAS */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. DINÃMICAS PROTECTORAS" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="RELACIONES ESTADÃSTICAS">El Escudo PsicolÃ³gico</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="order-2 md:order-1">
                <h3 className="text-5xl md:text-7xl font-display uppercase font-black mb-8 italic leading-none">Autoeficacia <br/> <span className="text-indigo-600">vs</span> DeserciÃ³n</h3>
                <p className="text-xl font-serif italic leading-relaxed text-black/80 mb-10">
                   El estudio confirma una <strong>correlaciÃ³n inversa (r = -.436)</strong>. Los estudiantes que confÃ­an en sus propias habilidades acadÃ©micas presentan pensamientos significativamente menores sobre abandonar la carrera.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 p-8 border-4 border-black bg-indigo-50 -rotate-1 shadow-[8px_8px_0_0_#000]">
                    <ShieldCheck size={48} className="text-indigo-600 shrink-0" />
                    <div>
                      <span className="block font-display text-3xl font-black uppercase italic">r = -.436</span>
                      <span className="text-xs font-mono uppercase font-black opacity-60">Efecto Protector de la Autoeficacia</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6 p-8 border-4 border-black bg-zinc-50 rotate-1">
                    <TrendingDown size={48} className="text-black shrink-0" />
                    <div>
                      <span className="block font-display text-3xl font-black uppercase italic">r = -.326</span>
                      <span className="text-xs font-mono uppercase font-black opacity-60">Efecto Protector de la MotivaciÃ³n</span>
                    </div>
                  </div>
                </div>
             </div>
             
             <div className="order-1 md:order-2">
                <div className="relative group">
                   <div className="absolute inset-0 bg-indigo-600 translate-x-10 translate-y-10" />
                   <div className="relative bg-black text-white p-14 border-8 border-black">
                      <Microscope size={64} className="text-indigo-400 mb-8" />
                      <h4 className="font-display text-4xl font-black uppercase italic mb-8">Omega (ð›š) vs Alfa (Î±)</h4>
                      <p className="font-mono text-sm leading-relaxed text-zinc-400 border-l-4 border-indigo-500 pl-6 mb-10">
                        "El uso del coeficiente Omega de McDonald para la escala total (.959) proporciona un indicador de confiabilidad mÃ¡s robusto que el Alfa de Cronbach para escalas multidimensionales."
                      </p>
                      <div className="bg-indigo-900/30 p-6 border border-white/10 uppercase">
                         <div className="text-center font-display text-2xl font-black italic text-indigo-300">Confiabilidad Excelente</div>
                         <div className="flex justify-between mt-4 font-mono text-xs opacity-60">
                            <span>BÃ¤ulke Original: .80 - .95</span>
                            <span>ValidaciÃ³n YucatÃ¡n: .76 - .97</span>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÃ“N FINAL: LIMITACIONES */}
      <WaveSection topColor="#ffffff" bottomColor="#f9fafb" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border-[12px] border-black p-12 md:p-24 shadow-[25px_25px_0_0_#4f46e5] relative overflow-hidden text-center">
             <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black italic">PILOT_3588 // LIMITACIONES</div>
             <HelpCircle size={80} className="mx-auto text-indigo-600 mb-8 animate-pulse" />
             <h3 className="text-5xl md:text-7xl font-display uppercase font-black leading-tight mb-10 italic">
               Un Estudio <span className="text-indigo-600 underline">PILOTO</span>
             </h3>
             <p className="text-2xl font-serif italic text-black/70 mb-12 max-w-4xl mx-auto">
              "71 participantes son suficientes para validar la claridad del instrumento, pero insuficientes para generalizar los resultados a todo el paÃ­s. El sesgo de gÃ©nero del 87% es un llamado a equilibrar la muestra en futuras fases."
             </p>
             <div className="grid grid-cols-2 md:grid-cols-2 gap-6 text-left">
                {LIMITATIONS.map((limit, l) => (
                  <div key={l} className="p-6 bg-zinc-50 border-4 border-black font-mono text-[10px] uppercase font-black leading-tight flex items-start gap-4">
                    <span className="text-indigo-600 font-bold">â€¢</span>
                    <span>{limit}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </WaveSection>

      {/* CALL TO ACTION ACADÃ‰MICO */}
      <div className="py-40 bg-zinc-950 text-white border-t-[20px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 px-6">
           <h2 className="text-6xl md:text-8xl font-display uppercase font-black italic tracking-tighter leading-none mb-12">
             Prevenir es <span className="text-indigo-600 underline">Medir</span> <br/> con <span className="bg-indigo-600 px-4">Evidencia</span>
           </h2>
           <div className="w-40 h-8 bg-indigo-600 mx-auto mb-16 shadow-[10px_10px_0_0_#000]" />
           <p className="text-xl font-mono text-indigo-500 uppercase font-black tracking-widest italic animate-pulse">
             INVESTIGACIÃ“N INSTRUMENTAL RPP NÂ° 41
           </p>
        </div>
      </div>
    </div>
  );
};
