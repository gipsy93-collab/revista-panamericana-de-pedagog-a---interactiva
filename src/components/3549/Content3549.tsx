import { motion } from 'motion/react';
import { 
  History, 
  Cpu, 
  BookOpen, 
  Users, 
  Layout, 
  Lightbulb,
  Heart
} from 'lucide-react';
import { ARTICLE_META, DIMENSIONS } from './constants';
import { WaveSection, PremiumTitle, BrutalCard, CinematicCard, BrutalSticker, BrutalQuote } from '../BrutalistLib';
import DataExplorer3549 from './DataExplorer3549';

export const Content3549 = () => {
  return (
    <div className="bg-[#f0f0f0]">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#4f46e515" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#4f46e5]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#4f46e5] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
              <p className="text-base leading-relaxed text-black/80">El artículo aborda el análisis de las características de la educación primaria dentro del marco de la <strong>Nueva Escuela Mexicana (NEM)</strong>, reforma educativa implementada a partir de 2019.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#4f46e5] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic" style={{color: "#4f46e5"}}>Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
              <p className="text-base leading-relaxed text-black/80">La problemática central que plantean los autores radica en comprender cómo los nuevos modelos y enfoques educativos se sustentan en ideas y conceptos tradicionales que, aunque desarrollados hace siglos, continúan vigentes en las políticas educativas contemporáneas.</p>
              <p className="text-base leading-relaxed text-black/80">La <strong>tesis central</strong> del artículo, tal como la enuncian los autores, consiste en "demostrar cómo los nuevos modelos y enfoques educativos, se sustentan en ideas y conceptos tradicionales, algunos de los cuales tienen siglos de haberse desarrollado, por lo cual es importante volver la mirada al pasado con una visión futurista que permita dar rumbo a una nueva educación de calidad" (p. 1).</p>
              <p className="text-base leading-relaxed text-black/80">El contexto que motiva esta investigación es la transformación educativa impulsada por la Secretaría de Educación Pública (SEP) en México, que busca formar "ciudadanos críticos, responsables y solidarios, integrando a la familia y la comunidad en el aprendizaje" (p. 3). Los autores destacan que la educación constituye "el pilar fundamental para el desarrollo de las capacidades individuales y es esencial en la consolidación de una sociedad democrática" (p. 2).</p>
              <p className="text-base leading-relaxed text-black/80">El artículo se organiza en tres grandes apartados:
1. Política educativa, ideas, rol del docente y del alumno en la NEM
2. Recorrido histórico de las ideas de grandes pensadores educativos
3. Integración de la tecnología como elemento disruptivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* I. METODOLOGÍA */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="I. METODOLOGÍA" color="bg-[#4f46e5]" className="text-white mb-8 !rotate-0" />
          <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5] mb-8">
            <p className="text-base leading-relaxed text-black/80 mb-6">
              El estudio se fundamenta en una <strong>revisión documental</strong> que aborda dos dimensiones complementarias:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#4f46e5] text-white">
                    <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Dimensión</th>
                    <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Análisis de políticas</td>
                    <td className="p-4 text-sm border-2 border-black/10 bg-white">Examen de políticas y lineamientos de la Nueva Escuela Mexicana establecidos en documentos oficiales de la SEP</td>
                  </tr>
                  <tr className="hover:bg-indigo-50 transition-colors">
                    <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Análisis pedagógico</td>
                    <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Estudio de los aportes de cuatro educadores fundamentales: Rousseau, Pestalozzi, Dewey y Freire</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
            <p className="text-base leading-relaxed">
              Los autores explicitan que la revisión documental &quot;hace referencia a un estudio metódico y sistemático, ordenado con objetivos bien definidos, que se realiza en datos, documentos y diferentes fuentes de información, que sirve como base para la comprensión del problema y como orientación en la construcción de conocimiento&quot; (p. 3), citando a Guevara-Patiño (2016).
            </p>
            <p className="text-base leading-relaxed mt-4">
              El diseño metodológico privilegia el análisis hermenéutico-comparativo entre los principios de la NEM y las teorías pedagógicas clásicas, estableciendo vínculos conceptuales que evidencian la continuidad histórica de ciertos postulados educativos.
            </p>
          </div>
        </div>
      </WaveSection>


      {/* II. RESULTADOS */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="II. RESULTADOS" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-12">
            {/* 4.1 Caracterización */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#4f46e5]">4.1 Caracterización de la Nueva Escuela Mexicana</h3>
              <p className="text-base leading-relaxed text-black/80 mb-6">
                La NEM surge con la reforma educativa de 2019 y se formaliza mediante el Plan y Programas de Estudio 2022. Sus elementos fundamentales incluyen:
              </p>
              <div className="overflow-x-auto mb-6">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#4f46e5] text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Aspecto</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Origen</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Reforma educativa 2019, formalizada con Plan de Estudios 2022</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Horizonte temporal</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">23 años de implementación proyectada</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Estructura curricular</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Fases 3, 4 y 5 para educación primaria</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Fundamento legal</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Art. 3° Constitucional, Ley General de Educación, Ley General de los Derechos de Niñas, Niños y Adolescentes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h4 className="font-display text-lg uppercase font-black mb-4 text-black">Principios pedagógicos identificados en la NEM:</h4>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-zinc-900 text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Principio</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Definición según el documento</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Responsabilidad ciudadana</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Implica la aceptación de derechos y deberes personales y comunes (SEP, 2019, p. 4)</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Aprendizaje significativo</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Aprendizajes con sentido práctico y utilidad en la vida diaria (SEP, 2020)</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Participación en la transformación social</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Educar personas críticas, participativas y activas (SEP, 2019, p. 6)</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Enfoque holístico</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Desarrollo de habilidades socioemocionales: empatía, trabajo en equipo, resiliencia</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Aprendizaje basado en competencias</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Capacidad de enfrentar situaciones reales mediante trabajo en equipo y pensamiento crítico</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Inclusión educativa</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Acceso a formación integral independientemente del contexto económico, cultural o discapacidad</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Humanismo clásico</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">La persona como eje central del modelo educativo (SEP, 2019, p. 7)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.2 Roles */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#4f46e5]">4.2 Roles del docente y del estudiante</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#4f46e5] text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Rol del Docente</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Rol del Estudiante</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Intelectual que promueve el conocimiento en espacios escolares y comunitarios</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Individuo crítico con sensibilidad humana y formación integral</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Orientador del aprendizaje</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Actor social que colabora con su comunidad</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Mediador que fomenta autonomía</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Constructor activo de conocimiento</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Facilitador de retroalimentación constante</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Participante en la construcción de sociedad más justa</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Promotor de ambiente equitativo, inclusivo y respetuoso</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Tomador de decisiones responsables con visión crítica y solidaria</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.3 Influencias */}
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#4f46e5]">4.3 Influencias pedagógicas identificadas</h3>
              <p className="text-base leading-relaxed text-black/80 mb-6">
                El artículo establece correspondencias entre la NEM y cuatro pensadores fundamentales:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#4f46e5] text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Pensador</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Ideas centrales</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Vínculo con la NEM</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Rousseau</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Educación centrada en el niño; aprendizaje por experiencia directa; valoración del juego</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Estudiante como centro del proceso; autonomía y pensamiento crítico; pausas activas</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Pestalozzi</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Educación integral (cabeza, corazón y mano); relación maestro-alumno basada en respeto y amor</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Desarrollo cognitivo, afectivo y social; competencias socioemocionales</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-white font-black">Dewey</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">&quot;Aprender haciendo&quot;; escuela como vida misma; educación para la democracia</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-white">Aprendizaje basado en proyectos; proyectos comunitarios; trabajo interdisciplinario</td>
                    </tr>
                    <tr className="hover:bg-indigo-50 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50 font-black">Freire</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Pedagogía crítica; rechazo de la &quot;educación bancaria&quot;; concientización</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-indigo-50">Formación de ciudadanos críticos; &quot;Un libro sin recetas&quot;; didácticas decoloniales</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 4.4 Tecnología */}
            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#4f46e5]">4.4 Integración tecnológica</h3>
              <p className="text-base mb-4">Los autores identifican herramientas TIC que pueden fortalecer la educación primaria:</p>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#4f46e5] text-white">
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Herramienta</th>
                      <th className="p-4 text-left font-display uppercase text-sm border-2 border-black">Aplicación pedagógica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">Pizarras digitales interactivas</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Trabajo colaborativo, resolución de problemas en grupo, juegos educativos</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Tabletas con aplicaciones educativas</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Personalización del aprendizaje (Khan Academy Kids, Duolingo)</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">Videos educativos animados</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">Explicación de conceptos complejos de forma accesible</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Gamificación (Kahoot, Quizizz, ClassDojo)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Experiencia lúdica y motivadora; desarrollo de habilidades socioemocionales</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800 font-black">Realidad aumentada (Google Expeditions)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-800">&quot;Viajes&quot; virtuales a museos y lugares históricos</td>
                    </tr>
                    <tr className="hover:bg-zinc-800 transition-colors">
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900 font-black">Portafolios digitales (Seesaw)</td>
                      <td className="p-4 text-sm border-2 border-black/10 bg-zinc-900">Autoevaluación y construcción de identidad escolar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* III. DISCUSIÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f0f0f0" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="III. DISCUSIÓN" color="bg-black" className="text-white mb-8 !rotate-0" />
          
          <div className="space-y-8">
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#4f46e5]">Continuidad histórica de las ideas pedagógicas</h3>
              <p className="text-base leading-relaxed text-black/80">
                El artículo desarrolla una argumentación consistente sobre la <strong>continuidad histórica de las ideas pedagógicas</strong>. Los autores demuestran que la NEM, aunque presentada como reforma contemporánea, recupera y actualiza principios establecidos por pensadores clásicos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
                <h3 className="font-display text-lg uppercase font-black mb-4 text-[#4f46e5]">Comenio (1997)</h3>
                <BrutalQuote author="Comenio (1997, pp. 105-106)">
                  Por lo tanto no deben enseñarse y aprender las palabras sin las cosas [...] de este modo las escuelas serán verdaderamente la preparación para la vida
                </BrutalQuote>
                <p className="text-sm mt-4">Ilustra cómo el aprendizaje práctico y experiencial tiene raíces centenarias.</p>
              </div>
              <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
                <h3 className="font-display text-lg uppercase font-black mb-4 text-[#4f46e5]">Rousseau (2024)</h3>
                <BrutalQuote author="Rousseau (2024, pp. 126-127)">
                  No hay nada más útil y agradable que semejantes juegos si son ordenados con un poco de habilidad
                </BrutalQuote>
                <p className="text-sm mt-4 text-black/80">Estableciendo su pertinencia en las actividades de la NEM como las pausas activas.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
                <h3 className="font-display text-lg uppercase font-black mb-4 text-[#4f46e5]">Pestalozzi (2006)</h3>
                <BrutalQuote author="Pestalozzi (2006, p. 29)">
                  Debemos tener presente que el fin último de la educación no es la perfección en las tareas de la escuela, sino la preparación para la vida
                </BrutalQuote>
                <p className="text-sm mt-4 text-black/80">Concordante con el enfoque de competencias de la NEM.</p>
              </div>
              <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
                <h3 className="font-display text-lg uppercase font-black mb-4 text-[#4f46e5]">Dewey (1897)</h3>
                <BrutalQuote author="Dewey (1897, p. 80)">
                  I believe that education is a regulation of the process of coming to share in the social consciousness
                </BrutalQuote>
                <p className="text-sm mt-4">Vinculándola con la formación de ciudadanos comprometidos.</p>
              </div>
            </div>

            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-lg uppercase font-black mb-4 text-[#4f46e5]">Freire (1998)</h3>
              <BrutalQuote author="Freire (1998, p. 73)">
                En la educación bancaria de la educación, el &quot;saber&quot;, el &quot;conocimiento&quot;, es una donación de aquellos que se juzgan sabios a los que juzgan ignorantes
              </BrutalQuote>
              <p className="text-sm mt-4 text-black/80">Contrapuesta a la propuesta dialógica de la NEM.</p>
            </div>

            <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#4f46e5]">
              <h3 className="font-display text-xl uppercase font-black mb-4 text-[#4f46e5]">Tecnología educativa</h3>
              <p className="text-base leading-relaxed">
                Los autores introducen una discusión relevante sobre la <strong>tecnología educativa</strong>, argumentando que &quot;el uso que se haga de esta tecnología por parte de docentes y estudiantes, debe realizarse con base en los principios pedagógicas que orientan a los modelos educativos&quot; (p. 16), evitando dejarse llevar por modas pasajeras.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>


      {/* IV. CONCLUSIONES */}
      <WaveSection topColor="#f0f0f0" bottomColor="#000000" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <BrutalSticker text="IV. CONCLUSIONES" color="bg-[#4f46e5]" className="text-white mb-12 !rotate-0" />
          <div className="bg-white p-10 border-8 border-black shadow-[16px_16px_0_0_#4f46e5]">
            <h3 className="font-display text-2xl uppercase font-black mb-8 text-[#4f46e5]">Conclusiones del artículo</h3>
            <ol className="space-y-6 text-lg">
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#4f46e5] flex items-center justify-center font-black text-white flex-shrink-0">1</span>
                <div>
                  <strong className="text-black">Continuidad histórica de las ideas pedagógicas:</strong>
                  <p className="text-black/80 mt-1">Las políticas educativas actuales no surgen de la nada, sino que están profundamente arraigadas en teorías pedagógicas clásicas y contemporáneas que han marcado el rumbo de la educación (p. 15).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#4f46e5] flex items-center justify-center font-black text-white flex-shrink-0">2</span>
                <div>
                  <strong className="text-black">Fundamentación teórica de la NEM:</strong>
                  <p className="text-black/80 mt-1">Se identificaron los principios fundamentales de la NEM y se estableció su relación con el constructivismo, el humanismo, y las propuestas de Rousseau, Pestalozzi, Dewey y Freire (p. 15).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#4f46e5] flex items-center justify-center font-black text-white flex-shrink-0">3</span>
                <div>
                  <strong className="text-black">Visión integral de la educación:</strong>
                  <p className="text-black/80 mt-1">&quot;El reto no es sólo enseñar mejor, sino enseñar con sentido, con corazón y con visión de futuro&quot; (p. 16), recuperando la noción freireana de que &quot;enseñar no es transferir conocimiento, sino crear las posibilidades para su producción o construcción&quot;.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#4f46e5] flex items-center justify-center font-black text-white flex-shrink-0">4</span>
                <div>
                  <strong className="text-black">Indispensabilidad de la tecnología:</strong>
                  <p className="text-black/80 mt-1">El uso de tecnología educativa es un elemento presente en la NEM, impulsado por la pandemia de COVID-19 y la irrupción de la Inteligencia Artificial (p. 16).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#4f46e5] flex items-center justify-center font-black text-white flex-shrink-0">5</span>
                <div>
                  <strong className="text-black">Compromiso social:</strong>
                  <p className="text-black/80 mt-1">Los principios de la NEM &quot;deben ser desarrollados no sólo dentro de las escuelas por maestros y estudiantes, sino que exigen el compromiso de toda la sociedad&quot; (p. 16).</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="w-10 h-10 bg-[#4f46e5] flex items-center justify-center font-black text-white flex-shrink-0">6</span>
                <div>
                  <strong className="text-black">Rol transformador del docente:</strong>
                  <p className="text-black/80 mt-1">La importancia del docente se ve reflejada en la NEM como &quot;un docente activo que no sólo repita información, sino que participe en la creación de sus metodologías de enseñanza&quot; (p. 16).</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 1: FUNDAMENTOS LEGALES Y PEDAGÓGICOS */}
      <WaveSection topColor="#f0f0f0" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-4">
              <BrutalSticker text="ANÁLISIS DOCUMENTAL" color="bg-[#4f46e5]" className="text-white self-start" />
              <PremiumTitle subtitle="BASES DE LA REFORMA">Mandato y Tradición</PremiumTitle>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <CinematicCard title="CONSTITUCIONAL" icon={Layout} color="bg-white">
                Basado en el Art. 3° y la Ley General de Educación. La educación como derecho efectivo.
              </CinematicCard>
              <CinematicCard title="GENEALOGÍA" icon={History} color="bg-white">
                Rastrea aportes desde Rousseau (1712) hasta Freire (1997) en el discurso oficial.
              </CinematicCard>
              <CinematicCard title="HORIZONTAL" icon={Heart} color="bg-white">
                Enfoque humanista centrado en la persona y el compromiso social comunitario.
              </CinematicCard>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: TRANSFORMACIÓN CULTURAL */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <BrutalSticker text="REORDENAMIENTO" color="bg-[#4f46e5]" className="text-white self-start" />
              <PremiumTitle subtitle="DE LA IDEA A LA POLÍTICA" className="text-white invert">Ejes de la Nueva Escuela</PremiumTitle>
            </div>

            <div className="grid grid-cols-1 gap-12">
              {DIMENSIONS.map((dim, idx) => (
                <BrutalCard 
                  key={dim.id} 
                  title={dim.title}
                  color={idx % 2 === 0 ? "bg-white" : "bg-[#4f46e5]"}
                  className="flex flex-col gap-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-6">
                      <p className="text-2xl font-serif text-black/80 leading-relaxed italic">
                        {dim.content}
                      </p>
                      <div className="bg-black text-white p-6 border-b-8 border-r-8 border-[#333]">
                        <span className="font-mono text-xs uppercase opacity-50 block mb-2">PUNTO DE INFLEXIÓN</span>
                        <span className="text-2xl font-display uppercase">{dim.highlight}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-4">
                      <span className="font-mono text-xs uppercase opacity-30">PENSAMIENTO OPERATIVO_</span>
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

      {/* SECCIÓN 3: FUTURO Y TECNOLOGÍA */}
      <WaveSection topColor="#000000" bottomColor="#f0f0f0" variant="dramatic">
        <div className="max-w-4xl mx-auto flex flex-col gap-12 py-20 text-center">
          <div className="bg-white border-4 border-black p-12 shadow-[15px_15px_0_0_#000] rotate-[1deg]">
            <h3 className="text-4xl font-display uppercase mb-6 flex items-center justify-center gap-4">
              <Lightbulb className="text-[#4f46e5]" /> Visión 2042
            </h3>
            <p className="text-xl font-sans text-black/70 leading-relaxed italic">
              &quot;El reto no es solo enseñar mejor, sino enseñar con sentido, con corazón y con visión de futuro.&quot;
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 grayscale opacity-40">
             <Cpu size={40} />
             <Users size={40} />
             <History size={40} />
             <BookOpen size={40} />
             <Layout size={40} />
             <Heart size={40} />
          </div>
        </div>
      </WaveSection>
      {/* SECCIÓN 3: LABORATORIO DE DATOS INTERACTIVO */}
      <WaveSection topColor="#000000" bottomColor="#f0f0f0" variant="steps">
        <div className="max-w-6xl mx-auto pb-20">
          <div className="text-center mb-16">
            <BrutalSticker text="IV. LABORATORIO INTERACTIVO" color="bg-rose-600" className="text-white mb-6 !rotate-0" />
            <PremiumTitle subtitle="EVIDENCIA DINÁMICA" className="text-white invert">Explora el ADN Pedagógico</PremiumTitle>
          </div>
          
          <DataExplorer3549 />
          
          <div className="grid lg:grid-cols-2 gap-8 mt-16 pb-12">
             <BrutalCard color="bg-[#4f46e5]" className="text-white border-4 rotate-1 shadow-[8px_8px_0_0_#000]" title="VISIÓN ESTRATÉGICA">
                <div className="text-6xl font-display font-black text-white mb-4">2019-2042</div>
                <p className="font-display text-lg uppercase font-black leading-tight">Casi un cuarto de siglo de implementaciÃ³n para consolidar el cambio sistÃ©mico.</p>
             </BrutalCard>
             <BrutalCard color="bg-white" className="border-4 -rotate-1 shadow-[8px_8px_0_0_#4f46e5]" title="ALIANZA TIC">
                <div className="text-2xl font-display font-black text-black mb-4 flex items-center gap-2">
                   <Sparkles className="text-[#4f46e5]" /> Herramientas Digitales
                </div>
                <p className="font-display text-lg uppercase font-black leading-tight text-black/80">Pizarras, tabletas y gamificaciÃ³n como puentes para los principios clÃ¡sicos.</p>
             </BrutalCard>
          </div>
        </div>
      </WaveSection>
    </div>
  );
};

