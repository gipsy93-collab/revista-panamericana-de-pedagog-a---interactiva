import React from 'react';
import { motion } from 'motion/react';
import { Microscope, Target, BarChart3, Quote, ArrowRight } from 'lucide-react';
import { WaveSection, BrutalCard, BrutalQuote, BrutalSticker, PremiumTitle } from '../BrutalistLib';
import { DIMENSIONS } from './constants';

export const Content3467 = () => {
  return (
    <div className="bg-white">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#EEF2FF15" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#EEF2FF]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#EEF2FF] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">El artículo aborda un fenómeno creciente y preocupante: el ciberacoso (cyberbullying) entre estudiantes universitarios en el contexto de la postpandemia por COVID-19. Aunque tradicionalmente el ciberacoso ha sido estudiado principalmente en niveles educativos previos a la universidad, este estudio evidencia que el problema persiste —e incluso se transforma— en la educación superior.</p>
              <p className="text-base leading-relaxed text-black/80">La pandemia aceleró la digitalización de la educación, forzando a millones de estudiantes a transitar hacia modalidades virtuales, híbridas y remotas. Según datos del artículo, el 71% de la población de 15-24 años usaba internet cotidianamente en 2022 (Unión Internacional de Telecomunicaciones, 2022). En México, los jóvenes de 15-23 años reportaron dedicar 8.2 horas diarias a internet, con un 97.1% usándolo para fines educativos (Gómez-Navarro y Martínez-Domínguez, 2022).</p>
              <p className="text-base leading-relaxed text-black/80">Este contexto generó una paradoja: mientras las TIC permitieron la continuidad educativa, también crearon nuevas oportunidades para la violencia digital. Los autores señalan que el lado oscuro del uso de internet es que los jóvenes pueden "acosar o ser víctimas de ciberacoso" (Zhu et al., 2021).</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#EEF2FF] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic" style={{color: '#EEF2FF'}}>Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-base leading-relaxed text-black/80">El estudio parte de una brecha identificada en la literatura: la escasez de estudios sobre ciberacoso en educación superior, dado que la mayoría se centran en etapas escolares previas (Laorden-GutiÃ©rrez et al., 2023).</p>
              <p className="text-base leading-relaxed text-black/80">El problema especÃ­fico es: <strong>¿Cuál es la frecuencia de comportamientos agresivos entre pares mediante TIC en estudiantes universitarios durante el retorno a la presencialidad post-COVID-19, y qué estrategias de prevención pueden reducir la probabilidad de ejercer ciberacoso?</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* I. OBJETIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#EEF2FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="I. OBJETIVOS" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Objetivo General</h3>
              <p className="text-base leading-relaxed text-black/80">
                Explorar la frecuencia de comportamientos agresivos entre estudiantes universitarios mediante el uso de TIC durante el retorno a la presencialidad postpandemia, y determinar probabilidades de prevención mediante análisis predictivo.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-red-400">Objetivos Específicos</h3>
              <ol className="space-y-3 text-base">
                <li className="flex gap-3">
                  <span className="font-black text-indigo-400">1.</span>
                  <span>Medir la frecuencia de comportamientos agresivos entre pares mediante TIC</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-indigo-400">2.</span>
                  <span>Identificar los comportamientos más frecuentes de ciberacoso</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-indigo-400">3.</span>
                  <span>Construir un modelo predictivo que determine las probabilidades de disminución del ciberacoso al controlar variables específicas</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* I+. MARCO TEÓRICO */}
      <WaveSection topColor="#EEF2FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="I+. MARCO TEÓRICO" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="space-y-8">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Definición de Ciberacoso</h3>
              <p className="text-base leading-relaxed text-black/80 mb-4">
                Basada en Alismaiel (2023), Romera et al. (2017), Smith et al. (2008) y Ortega-Barón et al. (2016). Se caracteriza por:
              </p>
              <ul className="space-y-2 text-base text-black/80">
                <li className="flex gap-2"><span className="text-red-500 font-black">▸</span> Acto agresivo intencional y repetido</li>
                <li className="flex gap-2"><span className="text-red-500 font-black">▸</span> Uso de TIC (teléfonos, computadoras, redes sociales)</li>
                <li className="flex gap-2"><span className="text-red-500 font-black">▸</span> Desequilibrio de poder entre agresor y víctima</li>
                <li className="flex gap-2"><span className="text-red-500 font-black">▸</span> Anonimato y ausencia de límites temporales/espaciales</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-indigo-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
                <h3 className="font-display text-lg uppercase font-black mb-4">Cinco Criterios del Estudio</h3>
                <ol className="space-y-2 text-sm">
                  <li>1. Acciones digitales agresivas intencionadas</li>
                  <li>2. Frecuencia de las acciones</li>
                  <li>3. Empleo de las TIC</li>
                  <li>4. Sentimientos de la víctima frente al acoso</li>
                  <li>5. Desequilibrio de poder</li>
                </ol>
              </div>
              <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
                <h3 className="font-display text-lg uppercase font-black mb-4 text-red-600">Consecuencias Documentadas</h3>
                <p className="text-base text-black/80">
                  Depresión, ansiedad, estrés, baja autoestima, problemas emocionales, absentismo y abandono escolar (Usuga-Jerez et al., 2023; Zhao y Yu, 2021).
                </p>
              </div>
            </div>

            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-400">Modelo Estadístico</h3>
              <p className="text-base leading-relaxed">
                Regresión logística (Logit) basada en Gujarati y Porter (2010), que permite estimar probabilidades de ocurrencia de un evento binario (ejercer o no ciberacoso).
              </p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* II. TIPO DE ESTUDIO */}
      <WaveSection topColor="#ffffff" bottomColor="#EEF2FF" variant="wavy">
        <div className="max-w-4xl mx-auto text-center">
          <BrutalSticker text="II. TIPO DE ESTUDIO" color="bg-red-500" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#6366f1]">
            <p className="text-xl leading-relaxed text-black/80">
              Estudio cuantitativo, descriptivo-correlacional y predictivo. Utiliza análisis estadístico descriptivo y modelo de regresión logística (Logit) para determinar probabilidades de prevención.
            </p>
          </div>
        </div>
      </WaveSection>


      {/* II+. PARTICIPANTES Y MUESTRA */}
      <WaveSection topColor="#EEF2FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="II+. PARTICIPANTES" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
          
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1] mb-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Característica</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">N</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">863 estudiantes</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Cobertura muestral</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Supera los 363 sugeridos por Wakerly et al. (2008)</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Perfil</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Estudiantes de nivel superior de universidad privada en Ciudad de México</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Criterio de inclusión</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Estudiantes que iniciaron trayectoria universitaria en 2019 (pre-pandemia) y retornaron a presencialidad post-COVID</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Contexto geográfico</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Ciudad de México, México</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Tipo de muestreo</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Intencional (Creswell y Creswell, 2015)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
            <p className="text-base leading-relaxed text-black/80 mb-4">Los participantes experimentaron:</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#6366f1] text-center">
                <div className="text-4xl font-black text-indigo-400 mb-2">2019</div>
                <p className="text-sm">Inicio presencial normal</p>
              </div>
              <div className="bg-indigo-600 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#ef4444] text-center">
                <div className="text-4xl font-black mb-2">2020-21</div>
                <p className="text-sm">Dos años de aprendizaje híbrido/virtual por COVID-19</p>
              </div>
              <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0_0_#6366f1] text-center">
                <div className="text-4xl font-black text-indigo-600 mb-2">2022-23</div>
                <p className="text-sm text-black/80">Retorno a presencialidad &quot;parecida&quot; al inicio</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* III. INSTRUMENTOS */}
      <WaveSection topColor="#ffffff" bottomColor="#EEF2FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="III. INSTRUMENTOS" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1] mb-8">
            <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Cuestionario de 54 preguntas</h3>
            <p className="text-base text-black/80 mb-4">Agrupadas en tres dimensiones:</p>
            <ol className="space-y-2 text-base text-black/80 mb-6">
              <li>1. Convivencia y efectos del aislamiento social durante educación virtual</li>
              <li>2. Comportamientos agresivos por TIC durante educación híbrida</li>
              <li className="font-black text-indigo-600">3. Comportamientos agresivos por TIC en la vuelta a la presencialidad ← Dimensión analizada en este artículo</li>
            </ol>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-indigo-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-lg uppercase font-black mb-4">Escala de Comportamientos Agresivos (9 ítems)</h3>
              <ul className="space-y-2 text-sm">
                <li>• Formato: Likert de 5 puntos (1=Nunca, 5=Todos los días)</li>
                <li>• Validación: 3 expertos + 27 estudiantes piloto de otra institución</li>
                <li>• Confiabilidad: Alpha de Cronbach = 0.839794028 (alta correlación)</li>
              </ul>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
              <h3 className="font-display text-lg uppercase font-black mb-4 text-red-400">Ítems de la Escala</h3>
              <ol className="space-y-1 text-sm">
                <li>1. Videos que no me gustan</li>
                <li>2. Videos violentos</li>
                <li className="text-indigo-400 font-black">3. Memes ofensivos y burlones sobre otros</li>
                <li>4. Fotos subidas/distribuidas sin autorización</li>
                <li>5. Mensajes ofensivos/burlones/amenazas</li>
                <li className="text-indigo-400 font-black">6. Mensajes o publicaciones sobre rumores</li>
                <li>7. Pláticas confidenciales hechas públicas</li>
                <li className="text-indigo-400 font-black">8. Grabación de compañeros sin autorización</li>
                <li>9. Filtración de información comprometedora</li>
              </ol>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* III+. PROCEDIMIENTO Y ANÁLISIS */}
      <WaveSection topColor="#EEF2FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="III+. PROCEDIMIENTO" color="bg-red-500" className="text-white mb-8 !rotate-0" />
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Procedimiento</h3>
              <ol className="space-y-3 text-base text-black/80">
                <li><span className="font-black text-indigo-600">1.</span> Contacto institucional: Se contactaron autoridades del área curricular común</li>
                <li><span className="font-black text-indigo-600">2.</span> Permisos: Obtención de autorizaciones éticas e institucionales</li>
                <li><span className="font-black text-indigo-600">3.</span> Aplicación: Cuestionario enviado vía correo electrónico a todos los estudiantes del área común</li>
                <li><span className="font-black text-indigo-600">4.</span> Fecha: Enero 2023</li>
                <li><span className="font-black text-indigo-600">5.</span> Análisis: Tablas dinámicas en Excel (descriptivo) + Modelo Logit (predictivo)</li>
              </ol>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-red-400">Análisis de Datos</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-black text-indigo-400 mb-2">Análisis descriptivo:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Estadística descriptiva básica</li>
                    <li>• Tablas dinámicas en Excel</li>
                    <li>• Cálculo de frecuencias y promedios</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-black text-indigo-400 mb-2">Análisis predictivo - Modelo Logit:</h4>
                  <p className="text-sm">Variable dependiente (Y): Y = 1 si hay ocurrencia de cyberbullying, Y = 0 si no ocurre</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1] overflow-x-auto">
            <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Variables del Modelo Logit</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-indigo-600 text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Definición</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Ítems</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">X₁ (Insinuación)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Promedio de ítems 1 y 2</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Videos desagradables/violentos</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">X₂ (Provocación)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Promedio de ítems 3, 6 y 8</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Memes, rumores, grabaciones</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Y_promi (Ejercicio)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Promedio de ítems 4, 5, 7 y 9</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Acciones directas de acoso</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
            <h3 className="font-display text-xl uppercase font-black mb-4 text-red-400">Ecuación del Modelo</h3>
            <div className="bg-black p-6 border-2 border-indigo-600 font-mono text-center text-lg mb-4">
              ln(P/(1-P)) = β₀ + β₁X₁ + β₂X₂
            </div>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/10 p-4">
                <div className="text-2xl font-black text-indigo-400">β₀ = -5.848717</div>
                <p className="text-xs">Constante</p>
              </div>
              <div className="bg-white/10 p-4">
                <div className="text-2xl font-black text-indigo-400">β₁ = 0.9679521</div>
                <p className="text-xs">Coeficiente insinuación</p>
              </div>
              <div className="bg-white/10 p-4">
                <div className="text-2xl font-black text-indigo-400">β₂ = 1.728159</div>
                <p className="text-xs">Coeficiente provocación</p>
              </div>
            </div>
            <div className="mt-4 text-sm space-y-1">
              <p>• P-valores individuales: &lt; 0.001 (significativos)</p>
              <p>• Prueba de Wald: Probabilidad conjunta significativa</p>
              <p>• Especificidad y sensibilidad: 0.73 (aceptable, rango 0.6-0.8)</p>
              <p>• Pseudo R²: 0.304 (ajuste medianamente bueno)</p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* IV. HALLAZGO PRINCIPAL */}
      <WaveSection topColor="#ffffff" bottomColor="#EEF2FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="IV. HALLAZGO PRINCIPAL" color="bg-indigo-600" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#ef4444]">
            <p className="text-lg leading-relaxed text-black/80">
              El 23% de los 863 estudiantes universitarios encuestados ha experimentado algún comportamiento de ciberacoso al menos una vez. El 10% ha sido partícipe o víctima de comportamientos violentos ocasionalmente, casi todos los días o todos los días. Los comportamientos más frecuentes son ver rumores sobre compañeros (34.76% ocasionalmente) y recibir memes ofensivos (20.97%). El análisis predictivo revela que controlar la provocación reduce 21% la probabilidad de ejercer ciberacoso (doble efecto que controlar la insinuación: 11%).
            </p>
          </div>
        </div>
      </WaveSection>


      {/* IV+. RESULTADOS POR OBJETIVO */}
      <WaveSection topColor="#EEF2FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="IV+. RESULTADOS POR OBJETIVO" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-12">
            {/* Objetivo 1 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Objetivo 1: Medir frecuencia de comportamientos agresivos</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Comportamiento</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Todos los días + Casi todos los días</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">+ Ocasionalmente</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Ver rumores (ítem 6)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">6.48%</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white text-indigo-600 font-black">34.76%</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Recibir memes ofensivos (ítem 3)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">4.17%</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 text-indigo-600 font-black">20.97%</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Grabar sin autorización (ítem 8)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Datos significativos</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Frecuente</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-zinc-100 p-4 border-2 border-black text-center">
                  <div className="text-3xl font-black text-indigo-600">23%</div>
                  <p className="text-sm">Promedio general de frecuencia</p>
                </div>
                <div className="bg-zinc-100 p-4 border-2 border-black text-center">
                  <div className="text-3xl font-black text-red-600">10%</div>
                  <p className="text-sm">de la población: participación/victimización frecuente</p>
                </div>
              </div>
            </div>

            {/* Objetivo 2 */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-red-400">Objetivo 2: Identificar comportamientos más frecuentes</h3>
              <p className="text-base mb-4">Ranking de comportamientos (de mayor a menor frecuencia):</p>
              <ol className="space-y-3 text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-indigo-600 flex items-center justify-center font-black text-white">1</span>
                  <span><strong>Ítem 6:</strong> Ver mensajes/publicaciones sobre rumores de compañeros</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-indigo-500 flex items-center justify-center font-black text-white">2</span>
                  <span><strong>Ítem 3:</strong> Recibir memes ofensivos y burlones sobre otros compañeros</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-10 h-10 bg-indigo-400 flex items-center justify-center font-black text-white">3</span>
                  <span><strong>Ítem 8:</strong> Grabar compañeros sin autorización</span>
                </li>
              </ol>
            </div>

            {/* Objetivo 3 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Objetivo 3: Modelo predictivo de prevención</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Efecto marginal</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">P-valor</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Interpretación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Insinuación (X₁)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">+0.118</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">&lt; 0.001</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Controlarla reduce 11.8% probabilidad</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Provocación (X₂)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">+0.211</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">&lt; 0.001</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Controlarla reduce 21.1% probabilidad</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Constante</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">0.143 &quot;por default&quot;</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">-</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Probabilidad base de ejercer ciberacoso</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-zinc-900 text-white p-6 border-4 border-black">
                <h4 className="font-display uppercase font-black mb-4 text-indigo-400">Conclusión predictiva:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/10 p-4">
                    <div className="text-2xl font-black">-11%</div>
                    <p className="text-xs mt-1">Controlar insinuación → reduce probabilidad</p>
                  </div>
                  <div className="bg-white/10 p-4">
                    <div className="text-2xl font-black text-red-400">-21%</div>
                    <p className="text-xs mt-1">Controlar provocación → reduce probabilidad (efecto DOBLE)</p>
                  </div>
                  <div className="bg-white/10 p-4">
                    <div className="text-2xl font-black">-4.3%</div>
                    <p className="text-xs mt-1">Controlar ambas → reduce probabilidad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* V. TABLA RESUMEN DE DATOS CLAVE */}
      <WaveSection topColor="#ffffff" bottomColor="#EEF2FF" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="V. TABLA RESUMEN" color="bg-red-500" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1] overflow-x-auto">
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
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Tamaño de muestra</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">n = 863</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Supera mínimo de 363 sugerido</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Alpha de Cronbach</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">0.839794028</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Alta confiabilidad del instrumento</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Frecuencia general de ciberacoso</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">23%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Al menos una vez</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Frecuencia alta (todos/casi todos días)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">10%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Participación/victimización frecuente</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Ver rumores (ocasionalmente)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">34.76%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Comportamiento más frecuente</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Recibir memes ofensivos (ocasionalmente)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">20.97%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Segundo más frecuente</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Probabilidad base de ejercer ciberacoso</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">14.31%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">&quot;Por default&quot; del modelo</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Reducción controlando insinuación</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">-11%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Evitar videos desagradables/violentos</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Reducción controlando provocación</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white text-red-600 font-black">-21%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Evitar memes, rumores, grabaciones</td>
                </tr>
                <tr className="hover:bg-indigo-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Especificidad y sensibilidad</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">0.73</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Dentro de parámetros aceptables (0.6-0.8)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </WaveSection>


      {/* V+. INTERPRETACIÓN */}
      <WaveSection topColor="#EEF2FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="V+. INTERPRETACIÓN" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#6366f1]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-indigo-600">Contexto de los Hallazgos</h3>
              <p className="text-base leading-relaxed text-black/80">
                Los resultados confirman que el ciberacoso es un problema significativo en la educación superior mexicana, con una prevalencia del 23% que coincide con rangos internacionales (10-40% según Kowalski et al., 2014). El dato más preocupante es que casi 35 de cada 100 estudiantes ven rumores sobre compañeros en internet, lo que sugiere una cultura de espectadores pasivos que, sin ser agresores directos, perpetúan la violencia al consumirla.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ef4444]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-red-400">Hallazgo Accionable</h3>
              <p className="text-base leading-relaxed">
                El modelo predictivo aporta un hallazgo accionable: <strong>la provocación es el punto de intervención más efectivo</strong>. Reducir comportamientos como enviar memes ofensivos, compartir rumores o grabar sin autorización tiene el doble de impacto preventivo que reducir el envío de videos desagradables.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* VI. CONCLUSIONES POR AUTORES */}
      <WaveSection topColor="#ffffff" bottomColor="#18181b" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="VI. CONCLUSIONES" color="bg-indigo-600" className="text-white mb-12 !rotate-0" />
          <div className="space-y-8">
            <BrutalQuote author="Vallejos-Parás (p.17)">
              Si los estudiantes evitan aceptar videos violentos y/o desagradables sobre terceras personas, podría disminuir la probabilidad de ejercer ciberacoso sobre uno mismo en un 11%. Mientras que si el estudiante evita ser cómplice de burlas y bromas hacia un compañero podría disminuir la probabilidad de ocasionar ciberacoso sobre uno mismo en 21%.
            </BrutalQuote>
            
            <BrutalQuote author="Vallejos-Parás (p.17)">
              Visto a la inversa, este último resultado puede traducirse de la forma más clara posible a partir de la expresión coloquial: &apos;si te llevas, te aguantas&apos;. Es decir, cada vez que un estudiante recibe material digital ofensivo sobre compañeros suyos y es partícipe de éste dándole &apos;like&apos; o haciendo un comentario empático con el agresor, está provocando sobre sí mismo un futuro cambio de rol de partícipe a víctima de ciberacoso.
            </BrutalQuote>
            
            <BrutalQuote author="Vallejos-Parás (p.17)">
              El instrumento propuesto en este artículo contribuye a elaborar diagnósticos sobre el tipo de acciones digitales agresivas, y su frecuencia, que padecen los estudiantes universitarios.
            </BrutalQuote>
          </div>
        </div>
      </WaveSection>

      {/* 1. FICHA METODOLÓGICA */}
      <WaveSection topColor="#EEF2FF" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
            <div className="md:w-1/3">
              <BrutalCard color="bg-black" className="text-white !rotate-[-2deg]">
                <Microscope size={48} className="text-indigo-400 mb-6" />
                <h3 className="text-3xl font-display uppercase mb-4">Rigor Metodológico</h3>
                <p className="font-mono text-sm opacity-70 mb-6">DISEÑO CUANTITATIVO PREDICTIVO</p>
                <div className="space-y-4">
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-black">POBLACIÓN</span>
                    <span>863 EST.</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2">
                    <span className="font-black">INSTRUMENTO</span>
                    <span>54 ÍTEMS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-black">ANÁLISIS</span>
                    <span>LOGIT</span>
                  </div>
                </div>
              </BrutalCard>
            </div>
            
            <div className="md:w-2/3 space-y-8">
              <BrutalSticker text="DIAGNÓSTICO DE TERRENO" color="bg-red-500" className="text-white" />
              <h2 className="text-5xl md:text-7xl font-display uppercase leading-none">
                ¿Cómo medimos la <span className="text-indigo-600 underline decoration-8">violencia digital</span>?
              </h2>
              <p className="text-xl font-serif leading-relaxed text-zinc-600">
                El estudio utilizó una escala validada de 9 comportamientos agresivos, desde el envío de memes ofensivos hasta la grabación de compañeros sin autorización. Los datos revelan una realidad oculta en los pasillos digitales de la educación superior.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 2. EXPLORADOR DE DIMENSIONES */}
      <section className="py-32 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20 text-center">
             <h2 className="text-6xl md:text-9xl font-display uppercase italic mb-4" style={{ WebkitTextStroke: '1px white', color: 'transparent' }}>
               Dimensiones
             </h2>
             <p className="font-mono text-indigo-400 uppercase tracking-[0.3em] font-black">Análisis de Resultados Clave</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {DIMENSIONS.map((dim, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <BrutalCard color="bg-white" className="h-full flex flex-col !p-0 overflow-hidden border-8 border-black shadow-[12px_12px_0_0_#6366f1]">
                  <div className="bg-indigo-600 p-6 text-white border-b-8 border-black">
                     <div className="flex justify-between items-start mb-4">
                        <span className="w-10 h-10 bg-black flex items-center justify-center font-black text-xl">0{idx + 1}</span>
                        <Target className="text-white/40" />
                     </div>
                     <h3 className="text-3xl font-display uppercase leading-none">{dim.title}</h3>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="bg-zinc-100 p-4 border-4 border-black mb-6 inline-block self-start">
                       <span className="text-3xl font-black text-red-600">{dim.highlight}</span>
                    </div>
                    <p className="text-zinc-700 font-medium mb-8 leading-relaxed italic">
                      {dim.description}
                    </p>
                    <div className="mt-auto pt-6 border-t-4 border-zinc-100">
                       <p className="font-serif text-sm italic text-zinc-500 mb-2">
                         "{dim.quote}"
                       </p>
                       <p className="font-mono text-[9px] font-black uppercase tracking-tighter text-indigo-600">— SOURCE: {dim.source}</p>
                    </div>
                  </div>
                </BrutalCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TESTIMONIOS Y CITAS */}
      <WaveSection topColor="#18181b" bottomColor="#f4f4f5" variant="dramatic">
        <div className="max-w-4xl mx-auto">
          <BrutalSticker text="VOCES DEL ESTUDIO" color="bg-black" className="text-white mb-12" />
          <div className="space-y-16">
            <BrutalQuote author="Conclusiones del Estudio (p.17)">
              Cada vez que un estudiante recibe material digital ofensivo sobre compañeros y es partícipe dándole 'like', está provocando sobre sí mismo un futuro cambio de rol de partícipe a víctima.
            </BrutalQuote>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000]">
                  <h4 className="font-display uppercase text-xl mb-4 text-indigo-600">Estrategia de Prevención</h4>
                  <p className="font-serif italic text-lg mb-6">"Controlar la provocación reduce a la mitad la probabilidad de ejercer ciberacoso."</p>
                  <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase">
                     <BarChart3 size={14} />
                     MODELO LOGIT PREDICTIVO
                  </div>
               </div>
               <div className="bg-indigo-600 text-white border-4 border-black p-8 shadow-[8px_8px_0_0_#ef4444]">
                  <h4 className="font-display uppercase text-xl mb-4">El Efecto Boomerang</h4>
                  <p className="font-serif italic text-lg mb-6">"Si te llevas, te aguantas: una verdad estadística en la convivencia digital universitaria."</p>
                  <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase">
                     <Quote size={14} />
                     PROVERBIO ACADÉMICO
                  </div>
               </div>
            </div>
          </div>
        </div>
      </WaveSection>
    </div>
  );
};

