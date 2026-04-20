import { motion } from 'motion/react';
import { 
  Building2, 
  AlertTriangle, 
  Zap, 
  Users, 
  Baby, 
  Home,
  Heart
} from 'lucide-react';
import { ARTICLE_META, DIMENSIONS } from './constants';
import { WaveSection, PremiumTitle, BrutalCard, CinematicCard, BrutalSticker, BrutalQuote } from '../BrutalistLib';
import DataExplorer3562 from './DataExplorer3562';

export const Content3562 = () => {
  return (
    <div className="bg-[#f0f0f0]">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f015" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#f0f0f0]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#f0f0f0] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">En México, el sistema de educación superior ha experimentado un crecimiento significativo: 4,336 instituciones (1,078 públicas y 3,258 privadas) con casi 4.9 millones de estudiantes matriculados en 2023-2024. Sin embargo, este crecimiento cuantitativo oculta desafíos estructurales persistentes.</p>
              <p className="text-base leading-relaxed text-black/80">El estudio se sitúa en la UPN 153 Ecatepec, una universidad pública en el Estado de México, municipio con escolaridad promedio de 9.7 años (por debajo del promedio estatal de 10.2). Sorprendentemente, en Ecatepec las mujeres tienen ligeramente más escolaridad que los hombres (9.8 vs 9.5 años), lo que evidencia una brecha de género en reversión en el acceso, aunque no necesariamente en las condiciones de permanencia.</p>
              <p className="text-base leading-relaxed text-black/80">El artículo aborda un vacío de investigación: las madres universitarias son invisibles en las políticas educativas. Si bien existen estudios sobre embarazo adolescente, pocos exploran la experiencia de quienes ya están en la universidad cuando se convierten en madres. El autor propone entender estas transiciones como "puntos de inflexión" que reorganizan trayectorias educativas, laborales y familiares.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#f0f0f0] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic text-f0f0f0">Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-lg font-serif italic text-white/90 leading-relaxed border-l-4 border-white/40 pl-6">¿Cómo construyen su transición a la maternidad las jóvenes estudiantes de la UPN 153 que están embarazadas o tienen hijos menores de 22 años? ¿Qué retos enfrentan al compatibilizar estudios universitarios, maternidad y, frecuentemente, trabajo remunerado?</p>
              <p className="text-base leading-relaxed text-black/80">El problema se articula en tres dimensiones:
- <strong>Personal:</strong> Reorganización del tiempo, prioridades y expectativas
- <strong>Institucional:</strong> Ausencia de políticas de apoyo (lactarios, guarderías, flexibilidad)
- <strong>Social:</strong> Estigmas asociados a la condición de "madre estudiante"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* I. OBJETIVOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="I. OBJETIVOS" color="bg-[#ec4899]" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Objetivo General</h3>
              <p className="text-base leading-relaxed text-black/80">
                Analizar los retos y experiencias subjetivas de jÃ³venes madres universitarias de la UPN 153 Ecatepec, considerando sus condiciones de vida familiares, conyugales e institucionales.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Objetivos EspecÃ­ficos</h3>
              <ol className="space-y-3 text-base">
                <li className="flex gap-3">
                  <span className="font-black text-[#ec4899]">1.</span>
                  <span>Visibilizar las desigualdades y similitudes entre jÃ³venes madres segÃºn su condiciÃ³n familiar y social de origen</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-[#ec4899]">2.</span>
                  <span>Identificar las redes de apoyo (familiares e institucionales) disponibles</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-[#ec4899]">3.</span>
                  <span>Contribuir al conocimiento de esta poblaciÃ³n estudiantil frecuentemente en desventaja</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-black text-[#ec4899]">4.</span>
                  <span>Generar reflexiones propositivas sobre polÃ­ticas universitarias inclusivas</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* II. TIPO DE ESTUDIO */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="steps">
        <div className="max-w-4xl mx-auto text-center">
          <BrutalSticker text="II. TIPO DE ESTUDIO" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#ec4899]">
            <p className="text-xl leading-relaxed text-black/80">
              Cualitativo, exploratorio, con <strong>enfoque de curso de vida (life course)</strong>. El enfoque de curso de vida permite analizar trayectorias (educativas, laborales) y transiciones (a la adultez, maternidad, paternidad) como procesos interconectados y no necesariamente lineales.
            </p>
          </div>
        </div>
      </WaveSection>


      {/* II+. PARTICIPANTES Y MUESTRA */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="II+. PARTICIPANTES" color="bg-[#ec4899]" className="text-white mb-8 !rotate-0" />
          
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899] mb-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#ec4899] text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">CaracterÃ­stica</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Detalle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">N (entrevistas)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">9 jÃ³venes</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">N (cuestionarios)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">12 (mismo grupo, 3 no entrevistadas)</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Perfil</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Estudiantes de licenciatura en PedagogÃ­a, UPN 153</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Ciclo escolar</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">2024-2025</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Criterio de selecciÃ³n</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Madres con hijos menores de 22 aÃ±os O embarazadas en momento de entrevista</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Rango de edades</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">18-34 aÃ±os</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">PerÃ­odo de recolecciÃ³n</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Enero - mayo de 2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0_0_#ec4899]">
              <h4 className="font-display text-lg uppercase font-black mb-4 text-[#ec4899]">DistribuciÃ³n por edad</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>18-20 aÃ±os:</span><span className="font-black">2</span></li>
                <li className="flex justify-between"><span>21-23 aÃ±os:</span><span className="font-black">4</span></li>
                <li className="flex justify-between"><span>24-26 aÃ±os:</span><span className="font-black">2</span></li>
                <li className="flex justify-between"><span>27-29 aÃ±os:</span><span className="font-black">1</span></li>
                <li className="flex justify-between"><span>29-34 aÃ±os:</span><span className="font-black">3</span></li>
              </ul>
            </div>
            <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
              <h4 className="font-display text-lg uppercase font-black mb-4 text-[#ec4899]">DistribuciÃ³n por semestre</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>2Â° semestre:</span><span className="font-black">6</span></li>
                <li className="flex justify-between"><span>4Â° semestre:</span><span className="font-black">4</span></li>
                <li className="flex justify-between"><span>6Â° semestre:</span><span className="font-black">1</span></li>
                <li className="flex justify-between"><span>8Â° semestre:</span><span className="font-black">1</span></li>
              </ul>
            </div>
            <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0_0_#ec4899]">
              <h4 className="font-display text-lg uppercase font-black mb-4 text-[#ec4899]">Contexto familiar</h4>
              <ul className="space-y-2 text-sm text-black/80">
                <li>â€¢ Casi todas (salvo una) son pioneras en sus familias en estudiar licenciatura</li>
                <li>â€¢ Padres/madres con estudios entre primaria y preparatoria/tÃ©cnica</li>
                <li>â€¢ Solo una madre de participante tiene licenciatura</li>
                <li>â€¢ En un caso, hermanos mayores tienen estudios superiores</li>
              </ul>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* III. INSTRUMENTOS */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="III. INSTRUMENTOS" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">1. Entrevistas narrativas biogrÃ¡ficas</h3>
              <p className="text-base text-black/80">9 entrevistas semiestructuradas con preguntas abiertas sobre trayectoria educativa, embarazo, redes de apoyo, proyectos de vida.</p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">2. Cuestionario Google Forms</h3>
              <p className="text-base">12 cuestionarios para &quot;reforzar narrativas e ideas particulares&quot; (datos demogrÃ¡ficos, informaciÃ³n complementaria).</p>
            </div>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">3. SeudÃ³nimos</h3>
              <p className="text-base text-black/80">Para proteger identidad de participantes.</p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* III+. PROCEDIMIENTO */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="III+. PROCEDIMIENTO" color="bg-[#ec4899]" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
            <ol className="space-y-4 text-lg">
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">1</span>
                <span className="text-black/80">IdentificaciÃ³n de poblaciÃ³n objetivo en UPN 153</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">2</span>
                <span className="text-black/80">Contacto y consentimiento informado</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">3</span>
                <span className="text-black/80">AplicaciÃ³n de entrevistas (enero-mayo 2025)</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">4</span>
                <span className="text-black/80">AplicaciÃ³n de cuestionarios</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">5</span>
                <span className="text-black/80">AnÃ¡lisis cualitativo de narrativas</span>
              </li>
            </ol>
          </div>
        </div>
      </WaveSection>


      {/* IV. ANÃLISIS DE DATOS */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="IV. ANÃLISIS DE DATOS" color="bg-black" className="text-white mb-8 !rotate-0" />
          <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
            <p className="text-base leading-relaxed mb-4">AnÃ¡lisis cualitativo interpretativo de narrativas biogrÃ¡ficas, articulando:</p>
            <ul className="space-y-3 text-base">
              <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> CategorÃ­as del curso de vida (Elder, 2000)</li>
              <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Conceptos bourdianos (capitales, reproducciÃ³n social)</li>
              <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> AnÃ¡lisis de estigma (Goffman)</li>
            </ul>
          </div>
        </div>
      </WaveSection>


      {/* V. HALLAZGO PRINCIPAL */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="V. HALLAZGO PRINCIPAL" color="bg-[#ec4899]" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#000]">
            <h3 className="font-display text-2xl uppercase font-black mb-6 text-[#ec4899]">La paradoja de la maternidad universitaria</h3>
            <p className="text-lg leading-relaxed text-black/80 mb-6">
              Contrario al estigma social e institucional que asocia maternidad con abandono escolar, las jÃ³venes madres de la UPN 153 muestran mayor motivaciÃ³n y resiliencia para completar sus estudios. El problema no es la maternidad en sÃ­, sino la <strong>ausencia de polÃ­ticas institucionales de apoyo</strong> (lactarios, guarderÃ­as, flexibilidad horaria) y la disponibilidad desigual de capitales familiares.
            </p>
            <div className="bg-zinc-900 text-white p-6 border-4 border-black">
              <span className="font-mono text-xs uppercase opacity-50 block mb-2">Dato central</span>
              <div className="text-4xl font-display font-black">8 de 12</div>
              <p className="text-base mt-2">jÃ³venes interrumpieron sus estudios durante o despuÃ©s del embarazo, evidenciando la fragilidad de sus trayectorias ante eventos de transiciÃ³n.</p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* VI. RESULTADOS POR OBJETIVO */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="VI. RESULTADOS POR OBJETIVO" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-12">
            {/* Objetivo 1 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Objetivo 1: Desigualdades segÃºn condiciÃ³n de origen</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#ec4899] text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Capital disponible</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Experiencia de transiciÃ³n</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-pink-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Alto capital econÃ³mico + red de apoyo familiar</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Mayor facilidad para conciliar estudios y maternidad; pueden delegar cuidado a abuelas/madres</td>
                    </tr>
                    <tr className="hover:bg-pink-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Bajo capital econÃ³mico + red de apoyo limitada</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">AcumulaciÃ³n de desventajas; estrategias de supervivencia; mayor riesgo de interrupciÃ³n</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-base text-black/80">El capital econÃ³mico permite pagar guarderÃ­as, tener equipo de cÃ³mputo, internet, tiempo para estudiar. El capital social (red de apoyo familiar/pareja) es determinante para el cuidado de los hijos mientras la madre asiste a clase.</p>
            </div>

            {/* Objetivo 2 */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Objetivo 2: Redes de apoyo</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-[#ec4899] mb-2">Familia de origen</h4>
                  <p className="text-sm">Principal red de apoyo. Madres y abuelas que cuidan a los nietos/hijos.</p>
                </div>
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-[#ec4899] mb-2">Pareja</h4>
                  <p className="text-sm">Variable. Algunas reciben apoyo econÃ³mico y emocional; otras quedan solas.</p>
                </div>
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-[#ec4899] mb-2">Universidad</h4>
                  <p className="text-sm">Ausencia sistemÃ¡tica de apoyo institucional. La empatÃ­a es &quot;acto de buena voluntad individual&quot; de profesores, no polÃ­tica.</p>
                </div>
                <div className="bg-white/10 p-6">
                  <h4 className="font-black text-[#ec4899] mb-2">Pares</h4>
                  <p className="text-sm">Estrategias colectivas (dividir lecturas, apoyo mutuo en tareas).</p>
                </div>
              </div>
            </div>

            {/* Objetivo 3 */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Objetivo 3: Estrategias de agenciamiento</h3>
              <p className="text-base text-black/80 mb-4">Las jÃ³venes desarrollan mÃºltiples estrategias:</p>
              <ul className="space-y-2 text-base text-black/80 mb-6">
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> OrganizaciÃ³n extrema del tiempo (&quot;sacar adelante&quot; mÃºltiples responsabilidades)</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> DinÃ¡micas de equipo con compaÃ±eras (dividir lecturas, colaborar en tareas)</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Estudio nocturno cuando los hijos duermen</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> PriorizaciÃ³n de la carrera como inversiÃ³n familiar</li>
              </ul>
              <BrutalQuote author="Gloria">
                Una de las dificultades mÃ¡s grandes es la administraciÃ³n del tiempo, ya que en mi experiencia tengo que dividir mi dÃ­a entre universidad, tareas, trabajo, bebÃ©, responsabilidades del hogar y hasta doctor... Este tipo de responsabilidades en esta etapa me han generado estrÃ©s por la preocupaciÃ³n y carga de responsabilidad, ansiedad; no descanso lo suficiente, casi no duermo.
              </BrutalQuote>
            </div>

            {/* Objetivo 4 */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Objetivo 4: El estigma institucional y social</h3>
              <ul className="space-y-3 text-base">
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Profesores que desaprueban traer bebÃ©s a clase</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> SeÃ±alamiento de &quot;distracciÃ³n&quot; para el grupo</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> PercepciÃ³n de irresponsabilidad asociada a la maternidad durante estudios</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> PresiÃ³n para cumplir roles tradicionales de gÃ©nero</li>
              </ul>
              <div className="mt-6">
                <BrutalQuote author="Antonia">
                  Me embaracÃ© a los 16 aÃ±os... Yo no querÃ­a ser mamÃ¡! pero mi mamÃ¡ me dijo que tenÃ­a que hacerme cargo de mis tonterÃ­as. Y entonces tuve que continuar con el embarazo, el papÃ¡ me dejÃ³ y pues aquÃ­ andamos haciÃ©ndonos cargo de nuestras tonterÃ­as.
                </BrutalQuote>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* VII. TABLA RESUMEN DE DATOS CLAVE */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="VII. TABLA RESUMEN" color="bg-[#ec4899]" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899] overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#ec4899] text-white">
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Variable/Dato</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Valor</th>
                  <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Contexto/Nota</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">InterrupciÃ³n estudios por embarazo</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">8 de 12 (67%)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">InterrupciÃ³n temporal o indefinida</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Madres pioneras en familia</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">11 de 12 (92%)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">Primera generaciÃ³n con acceso a universidad</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Escolaridad promedio padres</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Primaria a preparatoria</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Limitado capital cultural de origen</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Embarazos durante carrera</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">~50% de casos</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">Deseados y con buen recibimiento familiar</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Embarazos previos a universidad</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">~50% de casos</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">Algunos no deseados, con presiÃ³n familiar</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">MatrÃ­cula mujeres CDMX + EdoMex</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">850,247</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">Supera a matrÃ­cula masculina (744,478) segÃºn ANUIES 2023-2024</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Madres mexicanas con universidad</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">17%</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-white">SegÃºn INEGI 2020; 57% solo tienen primaria/secundaria</td>
                </tr>
                <tr className="hover:bg-pink-50 transition-colors">
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50 font-black">Embarazos adolescentes 2021</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">147,279 (15-19 aÃ±os) + 3,019 (&lt;15 aÃ±os)</td>
                  <td className="p-4 text-sm border-2 border-black/10 bg-pink-50">ENAPEA 2018</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </WaveSection>


      {/* VIII. INTERPRETACIÃ“N */}
      <WaveSection topColor="#f0f0f0" bottomColor="#000000" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="VIII. INTERPRETACIÃ“N" color="bg-[#ec4899]" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#ec4899]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Punto de inflexiÃ³n</h3>
              <p className="text-base leading-relaxed text-black/80">
                Los resultados confirman que la transiciÃ³n a la maternidad durante la universidad es un &quot;punto de inflexiÃ³n&quot; que reorganiza completamente la vida de las jÃ³venes. Sin embargo, el impacto de esta transiciÃ³n estÃ¡ mediado radicalmente por la disponibilidad de capitales.
              </p>
            </div>
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#ec4899]">Desmontando el mito</h3>
              <p className="text-base leading-relaxed mb-4">El estudio desmonta el mito de que la maternidad causa abandono escolar. Lo que causa abandono es la combinaciÃ³n de:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Ausencia de polÃ­ticas institucionales de cuidado</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Falta de capital econÃ³mico para contratar cuidados alternativos</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Ausencia de redes de apoyo familiar</li>
                <li className="flex gap-2"><span className="text-[#ec4899] font-black">â–¸</span> Estigma que deslegitima su condiciÃ³n de estudiantes</li>
              </ul>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* IX. CONCLUSIONES ESPECÃFICAS */}
      <WaveSection topColor="#000000" bottomColor="#f0f0f0" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="IX. CONCLUSIONES" color="bg-[#ec4899]" className="text-white mb-12 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#ec4899]">
            <h3 className="font-display text-2xl uppercase font-black mb-8 text-[#ec4899]">Conclusiones especÃ­ficas del autor</h3>
            <ol className="space-y-6 text-lg">
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">1</span>
                <span className="text-black/80">Las trayectorias acadÃ©micas de madres universitarias estÃ¡n marcadas por su capital familiar de origen: quienes tienen mayores recursos logran conciliar maternidad y carrera; quienes no, acumulan desventajas.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">2</span>
                <span className="text-black/80">La familia (especialmente madres/abuelas) es la red de apoyo mÃ¡s importante, lo que evidencia que la supervivencia acadÃ©mica de estas jÃ³venes depende del trabajo de cuidado no remunerado de otras mujeres.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">3</span>
                <span className="text-black/80">Las madres universitarias consideran sus estudios como medio de movilidad ascendente y capital para compartir con sus hijos.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">4</span>
                <span className="text-black/80">El estigma institucional opera como violencia simbÃ³lica que desacredita la identidad de madres estudiantes.</span>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#ec4899] flex items-center justify-center font-black text-white flex-shrink-0">5</span>
                <span className="text-black/80">La ausencia de polÃ­ticas universitarias especÃ­ficas (lactarios, guarderÃ­as, flexibilidad) reproduce desigualdades de gÃ©nero y clase.</span>
              </li>
            </ol>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÃ“N 1: FRAGILIDAD EDUCATIVA */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <BrutalSticker text="NARRATIVAS DE TRANSICIÃ“N" color="bg-[#ec4899]" className="text-white self-start" />
              <PremiumTitle subtitle="PUNTOS DE INFLEXIÃ“N">Trayectorias en Riesgo</PremiumTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CinematicCard title="PIONERAS" icon={Users} color="bg-white">
                92% (11 de 12) son la primera generaciÃ³n de su familia en acceder a la universidad.
              </CinematicCard>
              <CinematicCard title="INTERRUPCIÃ“N" icon={AlertTriangle} color="bg-white">
                67% pausaron su formaciÃ³n por embarazo ante la falta de redes de apoyo material.
              </CinematicCard>
              <CinematicCard title="CUIDADOS" icon={Baby} color="bg-white">
                Dependencia total del trabajo de cuidado no remunerado de madres y abuelas.
              </CinematicCard>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÃ“N 2: DIMENSIONES DEL ESTIGMA */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <BrutalSticker text="REPRODUCCIÃ“N SOCIAL" color="bg-[#ec4899]" className="text-white self-start" />
              <PremiumTitle subtitle="DESIGUALDADES MATERIALES" className="text-white invert">Ejes de la Experiencia</PremiumTitle>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {DIMENSIONS.map((dim, idx) => (
                <BrutalCard 
                  key={dim.id} 
                  title={dim.title}
                  color={idx % 2 === 0 ? "bg-white" : "bg-[#ec4899]"}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6">
                      <p className="text-2xl font-serif text-black/80 leading-relaxed italic">
                        {dim.content}
                      </p>
                      <div className="bg-black text-white p-6 border-b-8 border-r-8 border-[#333]">
                        <span className="font-mono text-xs uppercase opacity-50 block mb-2">HALLAZGO CENTRAL</span>
                        <span className="text-2xl font-display uppercase">{dim.highlight}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-xs uppercase opacity-30">NARRATIVAS BIOGRÃFICAS_</span>
                      {dim.testimonies.map((quote, qIdx) => (
                        <BrutalQuote key={qIdx} author={quote.author} className="text-lg bg-black/5 border-l-black">
                          {quote.text}
                        </BrutalQuote>
                      ))}
                    </div>
                  </div>
                </BrutalCard>
              ))}
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÃ“N 3: POLÃTICA Y JUSTICIA */}
      <WaveSection topColor="#000000" bottomColor="#f0f0f0" variant="dramatic">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 py-20 text-center">
          <div className="bg-white border-4 border-black p-12 shadow-[15px_15px_0_0_#000] rotate-[1deg] relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">UPN_ECATEPEC_REPORT</div>
            <h3 className="text-4xl font-display uppercase mb-6 flex items-center justify-center gap-4 text-[#ec4899]">
              Equidad Material
            </h3>
            <p className="text-xl font-sans text-black/70 leading-relaxed">
              "Las universidades mexicanas deben transitar de polÃ­ticas de equidad numÃ©rica (acceso) a polÃ­ticas de equidad material (permanencia con condiciones dignas)."
            </p>
          </div>
          
          <div className="flex justify-center gap-12 grayscale opacity-40">
             <Home size={48} />
             <Heart size={48} />
             <Building2 size={48} />
             <Zap size={48} />
          </div>
        </div>
      </WaveSection>
      {/* SECCIÃ“N: LABORATORIO DE DATOS INTERACTIVO */}
      <WaveSection topColor="#000000" bottomColor="#f0f0f0" variant="steps">
        <div className="max-w-6xl mx-auto pb-20">
          <div className="text-center mb-16">
            <BrutalSticker text="IV. LABORATORIO INTERACTIVO" color="bg-rose-600" className="text-white mb-6 !rotate-0" />
            <PremiumTitle subtitle="EVIDENCIA DINÃMICA" className="text-white invert">Simulador de Trayectoria</PremiumTitle>
          </div>
          
          <DataExplorer3562 />
          
          <div className="grid lg:grid-cols-2 gap-8 mt-16 pb-12">
             <BrutalCard color="bg-[#ec4899]" className="text-white border-4 rotate-1 shadow-[8px_8px_0_0_#000]" title="FRAGILIDAD ESTRUCTURAL">
                <div className="text-6xl font-display font-black text-white mb-4">67%</div>
                <p className="font-display text-lg uppercase font-black leading-tight">Es la tasa de interrupciÃ³n acadÃ©mica ante la ausencia de polÃ­ticas de cuidado.</p>
             </BrutalCard>
             <BrutalCard color="bg-white" className="border-4 -rotate-1 shadow-[8px_8px_0_0_#ec4899]" title="JUSTICIA DE CUIDADOS">
                <div className="text-2xl font-display font-black text-black mb-4 flex items-center gap-2">
                   <Baby className="text-[#ec4899]" /> Reto Institucional
                </div>
                <p className="font-display text-lg uppercase font-black leading-tight text-black/80">Lactarios y guarderÃ­as universales son la clave para transformar el estigma en Ã©xito.</p>
             </BrutalCard>
          </div>
        </div>
      </WaveSection>
    </div>
  );
};
