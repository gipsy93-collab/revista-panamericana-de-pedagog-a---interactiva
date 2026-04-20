import { motion } from 'motion/react';
import { Microscope, Users, ClipboardList, Database, AlertTriangle, Scale, Lock, HeartPulse } from 'lucide-react';
import { DIMENSIONS, METHODOLOGY, TESTIMONIALS, DATA_HIGHLIGHTS } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';

export default function Content3453() {
  return (
    <div className="bg-[#FAF9F6]">
      {/* SECCIÓN INTRODUCTORIA: CONTEXTO Y PROBLEMÁTICA */}
      <WaveSection topColor="#ffffff" bottomColor="#FAF9F615" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="0. MARCO INICIAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#FAF9F6]" />
               <PremiumTitle subtitle="INTRODUCCIÓN Y PROBLEMÁTICA">Contexto de Investigación</PremiumTitle>
            </div>
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#FAF9F6] relative">
                <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">Contexto General</h3>
                <div className="space-y-4">
                  <p className="text-base leading-relaxed text-black/80">La educación constituye un espacio formativo por excelencia en las primeras etapas del ciclo vital, donde el profesorado juega un rol trascendental. En Chile, uno de los problemas más graves en el ambiente escolar es el uso, tenencia o microtráfico de drogas entre estudiantes.</p>
                  <p className="text-base leading-relaxed text-black/80"><strong>Datos contextuales alarmantes (SENDA, 2023):</strong> 62.3% de estudiantes reporta haber visto personalmente a un estudiante vendiendo o pasando drogas en las cercanías de su establecimiento educativo. 52% admite haber visto a alguien consumiendo drogas dentro del establecimiento. 32.8% de estudiantes de enseñanza media consume marihuana (INJUV, 2021).</p>
                  <p className="text-base leading-relaxed text-black/80">Dependiendo de la etapa de desarrollo, los adolescentes están expuestos a riesgos de consumo de drogas, desde alcohol y nicotina hasta sustancias ilícitas. Las motivaciones incluyen curiosidad, placer y el denominado "sostén artificial" (Maturana, 2010). Cualquier consumo en adolescencia se considera consumo de riesgo porque pone en peligro el desarrollo integral de la persona.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#FAF9F6] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic" style={{color: '#FAF9F6'}}>Problema de Investigación</h3>
                <div className="space-y-4 relative z-10">
                  <p className="text-base leading-relaxed">El estudio adopta la teoría de <strong>Carmen Arbex et al. (2002)</strong> sobre factores de riesgo y protección asociados al consumo de drogas en contexto escolar. Esta perspectiva entiende los factores de riesgo como circunstancias socioculturales y/o características individuales que aumentan la vulnerabilidad de los estudiantes al uso problemático.</p>
                  <p className="text-sm leading-relaxed"><strong>Factores de riesgo escolares:</strong> dificultad de adaptación, desmotivación, ausentismo, falta de modelos positivos, deficiente integración al grupo de pares, fracaso escolar repetido, expectativas reducidas.</p>
                  <p className="text-sm leading-relaxed"><strong>Factores protectores:</strong> integración adecuada, motivación, figuras docentes significativas, sentido de pertenencia, adhesión a normas escolares.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>


            {/* SECCIÓN 0.5: OBJETIVOS Y MARCO TEÓRICO */}
      <WaveSection topColor="#FAF9F6" bottomColor="#f4f4f5" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#E11D48] relative">
              <BrutalSticker text="OBJETIVOS" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[4px_4px_0_0_#E11D48]" />
              <h3 className="font-display text-2xl uppercase font-black mb-6 italic text-black">2.3 Objetivos</h3>
              <div className="space-y-4">
                <p className="text-base leading-relaxed text-black/80"><strong>Objetivo general:</strong></p>
                <p className="text-base leading-relaxed text-black/80">Caracterizar las experiencias de docentes con rol de jefatura de curso respecto al abordaje del consumo de drogas entre estudiantes de secundaria de establecimientos educacionales públicos y particulares subvencionados de la zona sur de Chile.</p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#E11D48] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <h3 className="font-display text-xl uppercase font-black mb-6 italic text-rose-400">2.4 Marco Teórico</h3>
                <div className="space-y-4 relative z-10">
                  <p className="text-sm leading-relaxed">El estudio se fundamenta en:</p>
                  <p className="text-sm leading-relaxed"><strong>1. Teoría de Arbex et al. (2002):</strong> Análisis de factores de riesgo y protección desde una perspectiva integral</p>
                  <p className="text-sm leading-relaxed"><strong>2. Normativa chilena vigente:</strong></p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li><strong>Circular N° 482 (2018):</strong> Establece el contenido mínimo obligatorio para protocolos de actuación ante situaciones de consumo de drogas</li>
                    <li><strong>Ley 21.430:</strong> Sobre Garantías y Protección Integral de los Derechos de la Niñez y Adolescencia</li>
                    <li><strong>Convención sobre los Derechos del Niño:</strong> Ratificada por Chile en 1990 (Art. 33 sobre protección contra el consumo de drogas)</li>
                  </ul>
                  <p className="text-sm leading-relaxed"><strong>3. Estándares Internacionales sobre Prevención del Uso de Drogas (UNODC/OMS, 2018):</strong> Enfoque integral centrado en la salud, adaptado a diferentes etapas del desarrollo</p>
                  <p className="text-sm leading-relaxed"><strong>4. Estudios previos:</strong> Investigaciones de Agostinelli y Hernández-Silvera (2024) en Argentina, Martini y Furegato (2008) en Brasil, y Ordoñez-Rodríguez (2022) en Colombia sobre el rol docente en contextos complejos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 1: FICHA METODOLÓGICA */}
      <WaveSection topColor="#FAF9F6" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center lg:text-left">
            <BrutalSticker text="I. MÉTODO & RIGOR" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[4px_4px_0_0_#E11D48]" />
            <PremiumTitle subtitle="ESPECIFICACIONES TÉCNICAS DEL ESTUDIO">
              Ficha Metodológica
            </PremiumTitle>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <CinematicCard color="bg-white" title="ENFOQUE" icon={Microscope} className="border-4">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.design}</p>
              <p className="text-[10px] mt-2 font-mono opacity-60 uppercase font-black italic">Diseño: {METHODOLOGY.approach}</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="PARTICIPANTES" icon={Users} className="border-4">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.sample}</p>
              <p className="text-[10px] mt-2 font-mono opacity-60 uppercase font-black italic">Saturación teórica alcanzada</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="TÉCNICA" icon={ClipboardList} className="border-4">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.instruments}</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="ANÁLISIS" icon={Database} className="border-4">
              <p className="text-sm font-bold uppercase leading-tight">{METHODOLOGY.analysis}</p>
            </CinematicCard>
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 1.5: METODOLOGÍA DETALLADA */}
      <WaveSection topColor="#f4f4f5" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="I+. PROTOCOLO COMPLETO" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#E11D48]" />
            <PremiumTitle subtitle="DISEÑO Y EJECUCIÓN">Metodología</PremiumTitle>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.1 Tipo de Estudio</h3>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#E11D48]">
              <p className="text-base leading-relaxed text-black/80"><strong>Enfoque:</strong> Cualitativo con diseño <strong>descriptivo transversal</strong></p>
              <p className="text-base leading-relaxed text-black/80 mt-4"><strong>Diseño específico:</strong> Fenomenológico, cuyo propósito es "explorar, describir y comprender las experiencias de las personas con respecto a un fenómeno y descubrir los elementos comunes de dichas experiencias" (Hernández-Sampieri et al., 2014, p. 493)</p>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.2 Participantes / Muestra</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#E11D48] mb-8">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Característica</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Detalle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">N</td><td className="p-4 text-sm border-2 border-black/10 bg-white">8 docentes</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Perfil</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Profesores jefes de enseñanza media</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Edad</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Entre 28 y 64 años</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Experiencia profesional</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Entre 3 y 30 años</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Distribución geográfica</td><td className="p-4 text-sm border-2 border-black/10 bg-white">6 de la Región del Bío-Bío, 1 de Los Lagos, 1 de Los Ríos</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Tipo de establecimiento</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">4 escuelas públicas, 4 escuelas particulares subvencionadas</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-rose-50 p-6 border-l-4 border-rose-600">
              <h4 className="font-display text-sm uppercase font-black mb-2">Criterios de inclusión:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-black/80">
                <li>Ser profesor jefe de enseñanza media</li>
                <li>Trabajar actualmente en establecimientos públicos y particulares subvencionados de la zona sur de Chile</li>
                <li>Tener experiencia en abordaje de consumo de drogas en sus estudiantes</li>
              </ul>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.3 Instrumentos / Técnicas de Recolección</h3>
            <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#E11D48]">
              <h4 className="font-display text-lg uppercase font-black mb-4 italic text-rose-600">Entrevista semiestructurada:</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><span className="text-rose-600 font-bold">→</span> Desarrollada por las investigadoras</li>
                <li className="flex gap-2"><span className="text-rose-600 font-bold">→</span> Validación mediante juicio de expertos (dos evaluaciones)</li>
                <li className="flex gap-2"><span className="text-rose-600 font-bold">→</span> Prueba piloto para ajustes</li>
                <li className="flex gap-2"><span className="text-rose-600 font-bold">→</span> Preguntas abiertas que permitieron ampliar respuestas</li>
                <li className="flex gap-2"><span className="text-rose-600 font-bold">→</span> <strong>Matriz de Coherencia Metodológica</strong> desarrollada para facilitar la construcción del instrumento y análisis posterior</li>
              </ul>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.4 Procedimiento</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#E11D48] mb-8">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Etapa</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Descripción</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Difusión</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Entrega presencial de información en establecimientos, redes sociales (sin resultados), difusión entre contactos conocidos</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Entrevistas</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Aplicación de entrevistas semiestructuradas hasta saturación teórica</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Tiempo</td><td className="p-4 text-sm border-2 border-black/10 bg-white">A pesar de dificultades para encontrar informantes, se alcanzó adecuadamente el punto de saturación</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
              <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60 text-rose-400">LIMITACIONES DE RECLUTAMIENTO</h4>
              <ul className="space-y-2 text-sm">
                <li>• Dificultad para encontrar informantes interesados en la provincia de Concepción</li>
                <li>• Escasez de espacios disponibles para docentes con roles de jefatura de curso</li>
              </ul>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.5 Análisis de Datos</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 border-4 border-black shadow-[6px_6px_0_0_#E11D48]">
                <h4 className="font-display text-sm uppercase font-black mb-2 text-rose-600">Unidades de análisis</h4>
                <p className="text-sm text-black/80">Significados, episodios, roles y procesos</p>
              </div>
              <div className="bg-rose-50 p-6 border-4 border-black shadow-[6px_6px_0_0_#E11D48]">
                <h4 className="font-display text-sm uppercase font-black mb-2 text-rose-600">Proceso</h4>
                <p className="text-sm text-black/80">No lineal ni simultáneo, con etapas de observación, recolección y análisis constante</p>
              </div>
              <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
                <h4 className="font-display text-sm uppercase font-black mb-2 text-rose-400">Frecuencias</h4>
                <p className="text-sm">Se calcularon frecuencias de categorías y códigos</p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-xl uppercase font-black mb-6 italic">3.6 Criterios Éticos y de Rigor</h3>
            <p className="text-base leading-relaxed text-black/80 mb-6">Basados en la <strong>Declaración de Singapur sobre Integridad en la Investigación (2010):</strong></p>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#E11D48] mb-8">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Principio</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Aplicación</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Honestidad</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Recolección y análisis de datos transparente sin manipulación de información</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Responsabilidad</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Asumir responsabilidad por planificación, conducción, ejecución y reporte</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Cortesía profesional e imparcialidad</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Relación de respeto, equidad y justicia con participantes</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Buena gestión</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Uso apropiado de recursos y protección de confidencialidad</td></tr>
                </tbody>
              </table>
            </div>
            <div className="bg-rose-50 p-6 border-l-4 border-rose-600">
              <p className="text-sm text-black/80"><strong>Evaluación externa:</strong> Resultados revisados por el Departamento de Trabajo Social de la Universidad de Concepción</p>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 2: DATOS CRÍTICOS (SENDA) */}
      <WaveSection topColor="#ffffff" bottomColor="#f4f4f5" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-12 mb-10 text-center">
              <BrutalSticker text="II. CONTEXTO" color="bg-[#E11D48]" className="text-white mb-6 !rotate-0" />
              <PremiumTitle className="items-center" subtitle="ESTADÍSTICAS NACIONALES (CHILE)">
                Pulsaciones de la Realidad
              </PremiumTitle>
            </div>

            <div className="lg:col-span-6 space-y-8">
              {DATA_HIGHLIGHTS.map((item, i) => (
                <div key={i} className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_#000] flex justify-between items-center group hover:bg-[#E11D48] hover:text-white transition-colors">
                  <span className="font-display text-2xl uppercase font-black italic">{item.label}</span>
                  <div className="text-right">
                    <span className="text-6xl font-display font-black leading-none">{item.value}</span>
                    <span className="text-2xl font-black ml-1">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-6">
              <div className="bg-black text-white p-12 border-8 border-black shadow-[20px_20px_0_0_#E11D48] rotate-2 relative overflow-hidden group">
                <AlertTriangle className="absolute -top-4 -right-4 w-24 h-24 opacity-10 group-hover:scale-125 transition-transform" />
                <h3 className="font-display text-3xl uppercase font-black mb-6 italic text-[#E11D48]">Alerta de Riesgo Escol_</h3>
                <p className="text-2xl font-serif italic leading-relaxed text-zinc-300">
                  "El entorno educativo, tradicionalmente visto como protector, se ha convertido en un espacio de visualización y contacto directo con el consumo."
                </p>
                <div className="mt-8 pt-8 border-t-2 border-zinc-800 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase font-black tracking-widest text-zinc-500">Fuente: SENDA 2023</span>
                  <div className="w-12 h-1 bg-[#E11D48]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: EXPLORADOR DE DIMENSIONES */}
      <WaveSection topColor="#f4f4f5" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="III. RESULTADOS" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[4px_4px_0_0_#FDE047]" />
            <PremiumTitle className="items-center" subtitle="CATEGORÍAS DE ANÁLISIS">
              Dimensiones de la Experiencia
            </PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {DIMENSIONS.map((d) => (
              <BrutalCard key={d.code} color="bg-white" className="border-4" title={`${d.code}: ${d.name}`}>
                <div className="flex gap-8 items-start">
                  <div className="text-7xl bg-zinc-100 p-6 border-4 border-black shadow-[6px_6px_0_0_#000] rotate-[-3deg] group-hover:rotate-0 transition-transform">
                    {d.emoji}
                  </div>
                  <div className="space-y-4">
                    <p className="text-xl font-serif italic text-black/70 leading-relaxed font-medium">"{d.desc}"</p>
                    <div className="bg-[#E11D48]/10 border-l-4 border-[#E11D48] p-4 shadow-[4px_4px_0_0_#000]">
                      <span className="block font-mono text-[10px] uppercase font-black text-[#E11D48] mb-1">HALLAZGO HI-RES //</span>
                      <p className="text-sm font-black uppercase text-black/90 tracking-tight">{d.highlight}</p>
                    </div>
                  </div>
                </div>
              </BrutalCard>
            ))}
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 2.5: RESULTADOS DETALLADOS */}
      <WaveSection topColor="#ffffff" bottomColor="#f4f4f5" variant="dramatic">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="II+. HALLAZGOS EMPÍRICOS" color="bg-[#E11D48]" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <PremiumTitle subtitle="EVIDENCIA DEL ESTUDIO">Resultados</PremiumTitle>
          </div>
          <div className="mb-20">
            <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#E11D48] rotate-[-1deg] relative group mb-12">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
              <p className="text-2xl md:text-3xl font-serif italic text-white/90 leading-tight relative z-10 font-bold">Las experiencias de los profesores jefes están fuertemente mediadas por la aplicación del <span className="text-rose-400">Protocolo Escolar Interno</span> de sus establecimientos.</p>
            </div>
            <p className="text-lg leading-relaxed text-black/80">En la mayoría de los casos, el profesor jefe asume un rol activo al inicio del proceso, focalizando sus acciones en realizar la entrevista inicial con el estudiante involucrado, notificar al apoderado y contactar la red de apoyo interna institucional.</p>
          </div>
          <div className="mb-20">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.2 Frecuencias de Categorías y Códigos</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#E11D48] mb-8">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Categoría</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Código</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Frec.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold" rowSpan="3">Enfoque docente (72)</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Percepción docente del consumo</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">27</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Impacto en el docente</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">23</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white">Formas de brindar apoyo y contención</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">22</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold" rowSpan="2">Acciones derivativas (38)</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Contacto y vinculación con otras instituciones</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">27</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white">Generación de informes</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">11</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold" rowSpan="3">Acciones de seguimiento (60)</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Redes con instituciones de derivación</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">25</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white">Apoyo psicosocial a estudiantes</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">18</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Monitoreo y evaluación continua de avances</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">17</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold" rowSpan="2">Mecanismos de apoyo del establecimiento (41)</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Redes de apoyo institucional</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">23</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Recursos disponibles</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">18</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold" rowSpan="3">Protocolo interno de actuación (42)</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Protocolo escolar interno</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">26</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Canales de denuncia</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">10</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white">Procedimientos legales</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">6</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold" rowSpan="3">Recolección de información (36)</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Recolección de información</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">21</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white">Entrevista al estudiante</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">12</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Entrevista con otros docentes</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">3</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold" rowSpan="2">Salvaguarda de intimidad e identidad (28)</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Manejo de información sensible</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">15</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Derecho al honor</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">13</td></tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mb-20">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.3 Resultados por Objetivo</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#E11D48]">
                <h4 className="font-display text-lg uppercase font-black mb-4 italic text-rose-600">Protocolo de actuación</h4>
                <p className="text-sm leading-relaxed text-black/80">Todos los colegios donde trabajaban los profesores entrevistados tienen un protocolo escolar interno para abordar situaciones de consumo. El protocolo comienza con el profesor jefe, quien debe notificar al equipo de apoyo de la escuela, donde se coordinan entrevistas con el estudiante y sus apoderados.</p>
              </div>
              <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000]">
                <h4 className="font-display text-lg uppercase font-black mb-4 italic text-rose-400">Rol del equipo de apoyo</h4>
                <p className="text-sm leading-relaxed mb-4">En su mayoría, es el equipo de apoyo de las escuelas quien contacta, vincula a los estudiantes y desarrolla redes con instituciones externas como:</p>
                <ul className="space-y-1 text-sm">
                  <li>• SENDA</li>
                  <li>• Carabineros de Chile</li>
                  <li>• Policía de Investigaciones</li>
                  <li>• Centros de Salud Familiar Comunitarios (CECOSF)</li>
                  <li>• Tribunales de Familia (casos complejos)</li>
                  <li>• Fiscalía (casos complejos)</li>
                </ul>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-rose-50 p-8 border-4 border-black shadow-[8px_8px_0_0_#E11D48]">
                <h4 className="font-display text-lg uppercase font-black mb-4 italic text-rose-600">Desigualdad de recursos</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="bg-zinc-900 text-white p-3 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Tipo</th>
                        <th className="bg-zinc-900 text-white p-3 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Recursos</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="hover:bg-rose-100 transition-colors"><td className="p-3 text-sm border-2 border-black/10 bg-white font-bold">Particulares subvencionados</td><td className="p-3 text-sm border-2 border-black/10 bg-white">Tienen recursos humanos y financieros, aunque insuficientes para toda la comunidad escolar</td></tr>
                      <tr className="hover:bg-rose-100 transition-colors"><td className="p-3 text-sm border-2 border-black/10 bg-rose-50 font-bold">Municipales</td><td className="p-3 text-sm border-2 border-black/10 bg-rose-50">Recursos mínimos, claramente insuficientes para las necesidades</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white p-8 border-4 border-black shadow-[8px_8px_0_0_#E11D48]">
                <h4 className="font-display text-lg uppercase font-black mb-4 italic text-rose-600">Protección de identidad</h4>
                <p className="text-sm leading-relaxed text-black/80">La identidad de los estudiantes involucrados en situaciones de consumo sospechado o confirmado es respetada y protegida en las escuelas. Los profesores deben manejar información sensible con certeza.</p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.4 Citas Textuales de Participantes</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#E11D48] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <p className="text-lg font-serif italic leading-relaxed relative z-10">"(...) empezamos a poner las alertas, en mi caso como profesora jefe, lo que hice inmediatamente cuando empecé a sospechar, eh... Primero hicimos lo que dice el protocolo: tenemos que entrevistar al estudiante, entrevistar al apoderado, darles pistas sobre lo que observamos, que generalmente, eh... Es un cambio en la conducta"</p>
                <p className="text-sm mt-6 text-rose-400 font-bold text-right">— Entrevista Participante N° 2</p>
              </div>
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#E11D48] relative">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                <p className="text-lg font-serif italic leading-relaxed relative z-10">"Hay un protocolo muy claro aquí, que lo sigue el profesor jefe, convivencia. Desde convivencia se hacen las derivaciones dentro del mismo área. Tenemos psicólogos especialistas en drogas, y si no la piden, ¿cierto? Es verdad, donde puedan ser derivados, ya sea a Senda o a un hogar de tratamiento de drogas. Sí, tenemos claridad de eso. Dependiendo de las necesidades y vulnerabilidad del estudiante, decidimos dónde va a ser derivado, y lo solicitamos"</p>
                <p className="text-sm mt-6 text-rose-400 font-bold text-right">— Entrevista Participante N° 6</p>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-display text-2xl uppercase font-black mb-8 italic">4.5 Tabla Resumen de Datos Clave</h3>
            <div className="overflow-x-auto border-4 border-black shadow-[8px_8px_0_0_#E11D48]">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Variable/Dato</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Valor</th>
                    <th className="bg-zinc-900 text-white p-4 text-left font-display uppercase text-xs tracking-wider border-2 border-black">Contexto/Nota</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Estudiantes que han visto drogas cerca del colegio</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">62.3%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Estudio SENDA 2021</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Estudiantes que han visto consumo dentro del establecimiento</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">52%</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Estudio SENDA 2021</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Estudiantes de enseñanza media que consumen marihuana</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">32.8%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">INJUV 2020-2021</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Profesores entrevistados con experiencia en abordaje</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">100% (8/8)</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Todos habían acompañado al menos a un estudiante</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-white font-bold">Colegios con protocolo interno</td><td className="p-4 text-sm border-2 border-black/10 bg-white text-rose-600 font-black">100%</td><td className="p-4 text-sm border-2 border-black/10 bg-white">Circular 482</td></tr>
                  <tr className="hover:bg-rose-100 transition-colors"><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 font-bold">Frecuencia "Enfoque docente" en análisis</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50 text-rose-600 font-black">72</td><td className="p-4 text-sm border-2 border-black/10 bg-rose-50">Categoría más frecuente</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 4: VOCES DESDE EL TERRENO */}
      <WaveSection topColor="#ffffff" bottomColor="#FAF9F6" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/3 sticky top-32">
              <BrutalSticker text="IV. INSIGHTS" color="bg-[#E11D48]" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#000]" />
              <PremiumTitle subtitle="NARRATIVAS DOCENTES">
                Voces del Aula
              </PremiumTitle>
              <p className="mt-8 text-xl font-serif italic text-black/70 leading-relaxed">
                Relatos que evidencian la complejidad emocional y técnica de abordar el consumo en la jefatura de curso.
              </p>
            </div>
            
            <div className="lg:w-2/3 space-y-12">
              {TESTIMONIALS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  <BrutalQuote author={t.author} className="bg-white border-4 border-black p-12 shadow-[12px_12px_0_0_#000]">
                    <p className="text-2xl md:text-3xl font-display uppercase font-black leading-tight italic -tracking-widest">
                      "{t.quote}"
                    </p>
                  </BrutalQuote>
                  <div className="absolute -bottom-4 right-8 bg-black text-white px-6 py-2 font-mono text-xs uppercase font-black border-2 border-black rotate-1">
                    {t.role}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </WaveSection>

            {/* SECCIÓN 4.5: INTERPRETACIÓN DE LOS HALLAZGOS */}
      <WaveSection topColor="#f4f4f5" bottomColor="#FAF9F6" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="IV+. INTERPRETACIÓN" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#E11D48]" />
            <PremiumTitle subtitle="SENTIDO DE LOS RESULTADOS">5.1 Interpretación de los Hallazgos</PremiumTitle>
          </div>
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7 space-y-8">
              <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#E11D48] relative">
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-black/80">Los resultados revelan que la experiencia de los docentes con roles de jefatura de curso respecto al abordaje del consumo de drogas está fuertemente mediada por la aplicación del <strong>Reglamento Interno Escolar</strong> del establecimiento donde trabajan.</p>
                  <div className="bg-rose-50 p-6 border-l-4 border-rose-600">
                    <h4 className="font-display text-lg uppercase font-black mb-2 italic text-rose-600">El Nodo Central</h4>
                    <p className="text-sm leading-relaxed text-black/80">El <strong>"Protocolo Escolar Interno"</strong> es el eje central de la red de significados. Las experiencias docentes están guiadas en gran medida por los procedimientos establecidos dentro de la institución educativa.</p>
                  </div>
                  <div className="bg-zinc-900 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
                    <h4 className="font-display text-lg uppercase font-black mb-4 italic text-rose-400">Proceso Estructurado</h4>
                    <ol className="space-y-3 text-sm list-decimal list-inside">
                      <li>El profesor jefe detecta <strong>señales de alerta</strong> (cambios de conducta)</li>
                      <li>Realiza <strong>entrevistas</strong> al estudiante y apoderado</li>
                      <li><strong>Notifica</strong> al equipo de convivencia</li>
                      <li>Se activan <strong>derivaciones</strong> según corresponda</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-rose-600 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#000] rotate-1">
                <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest opacity-60">INSIGHT CLAVE</h4>
                <p className="text-2xl font-display uppercase font-black italic leading-tight">El protocolo no es solo una guía</p>
                <p className="text-sm mt-4 leading-relaxed">Es el <strong>marco de sentido</strong> a través del cual los docentes construyen su experiencia profesional ante situaciones de consumo.</p>
              </div>
              <div className="bg-zinc-900 text-white p-10 border-4 border-black shadow-[10px_10px_0_0_#E11D48] -rotate-1">
                <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest opacity-60 text-rose-400">PARADOJA IDENTIFICADA</h4>
                <p className="text-sm leading-relaxed">La normativa que busca <em>proteger</em> puede también <em>limitar</em> la capacidad de respuesta personalizada del docente, generando una tensión entre procedimiento y sensibilidad.</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

{/* SECCIÓN 5: DISCUSIÓN Y ACCIÓN */}
      <WaveSection topColor="#FAF9F6" bottomColor="#000000" variant="dramatic">
        <div className="max-w-5xl mx-auto space-y-16 py-20">
          <div className="text-center">
             <BrutalSticker text="V. DISCUSIÓN" color="bg-black" className="text-white mb-6 !rotate-0" />
             <PremiumTitle className="items-center" subtitle="TENSIONES PARADIGMÁTICAS">El Cruce de Caminos</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-rose-100 border-4 border-black p-10 shadow-[15px_15px_0_0_#000] rotate-[-1deg]">
              <Scale size={48} className="text-[#E11D48] mb-8" />
              <h4 className="font-display text-3xl uppercase font-black mb-6">Enfoque Sancionatorio</h4>
              <p className="text-xl font-serif italic text-black/80 leading-relaxed">
                Leyes 20.000 y 20.084. Una lógica punitiva que prioriza la regulación de la conducta sobre el bienestar.
              </p>
            </div>
            <div className="bg-emerald-100 border-4 border-black p-10 shadow-[15px_15px_0_0_#000] rotate-[1deg]">
              <HeartPulse size={48} className="text-emerald-600 mb-8" />
              <h4 className="font-display text-3xl uppercase font-black mb-6">Enfoque de Derechos</h4>
              <p className="text-xl font-serif italic text-black/80 leading-relaxed">
                Ley 21.430. Exige medidas restitutivas del bienestar. El estudiante como sujeto de protección integral.
              </p>
            </div>
          </div>

          <div className="bg-black text-white border-8 border-black p-12 md:p-24 shadow-[30px_30px_0_0_#E11D48] text-center rotate-[-0.5deg]">
         {/* SECCIÓN 5.5: CONCLUSIONES ESPECÍFICAS */}
      <WaveSection topColor="#FAF9F6" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <BrutalSticker text="V+. CONCLUSIONES ESPECÍFICAS" color="bg-[#E11D48]" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#000]" />
            <PremiumTitle subtitle="APORTES DE LOS AUTORES">6.2 Conclusiones Específicas</PremiumTitle>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#E11D48] relative">
              <div className="text-6xl font-black text-rose-600 mb-4">1</div>
              <h3 className="font-display text-xl uppercase font-black mb-4 italic">Normatividad predominante</h3>
              <p className="text-base leading-relaxed text-black/80">En los discursos de los participantes predomina la presencia de la <strong>normatividad y regulación</strong> a la hora de mediar conductas o acciones de consumo</p>
            </div>
            <div className="bg-zinc-900 text-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#000] relative">
              <div className="text-6xl font-black text-rose-400 mb-4">2</div>
              <h3 className="font-display text-xl uppercase font-black mb-4 italic text-rose-400">Necesidad de formación</h3>
              <p className="text-base leading-relaxed">Se reconoce la necesidad de <strong>más formación y herramientas</strong> para el adecuado abordaje de estas situaciones</p>
            </div>
            <div className="bg-rose-50 p-10 border-[8px] border-black shadow-[20px_20px_0_0_#E11D48] relative">
              <div className="text-6xl font-black text-rose-600 mb-4">3</div>
              <h3 className="font-display text-xl uppercase font-black mb-4 italic">Habilidades personales</h3>
              <p className="text-base leading-relaxed text-black/80">Se reconoce que la labor de docentes responsables de cursos se relaciona con las <strong>habilidades propias de contención y manejo</strong> que posee cada profesor</p>
            </div>
            <div className="bg-white p-10 border-[8px] border-black shadow-[20px_20px_0_0_#E11D48] relative">
              <div className="text-6xl font-black text-rose-600 mb-4">4</div>
              <h3 className="font-display text-xl uppercase font-black mb-4 italic">Desigualdad estructural</h3>
              <p className="text-base leading-relaxed text-black/80">Existen <strong>diferencias significativas en recursos</strong> entre establecimientos municipales y particulares subvencionados</p>
            </div>
          </div>
        </div>
      </WaveSection>

          <BrutalSticker text="VEREDICTO" color="bg-[#E11D48]" className="mb-10 !rotate-0" />
             <h2 className="text-4xl md:text-6xl font-display uppercase font-black leading-[0.9] mb-12 tracking-tighter">
               Se necesita una cultura del <span className="text-[#E11D48] italic">Cuidado_</span> en lugar de una del <span className="underline decoration-[#E11D48] decoration-wavy">Castigo_</span>
             </h2>
             <div className="flex gap-4 justify-center">
                <div className="w-16 h-2 bg-[#E11D48]" />
                <div className="w-16 h-2 bg-white" />
                <div className="w-16 h-2 bg-[#E11D48]" />
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 6: ACCIÓN DOCENTE */}
      <section className="bg-zinc-950 text-white py-40 border-t-[20px] border-black overflow-hidden relative">
        <div className="absolute top-0 right-0 p-10 font-display text-[15rem] font-black opacity-[0.02] rotate-12 leading-none">ACTION</div>
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between mb-24 gap-12">
            <div className="md:w-1/2">
              <BrutalSticker text="VI. RECOMENDACIONES" color="bg-white" className="text-black mb-8 !rotate-0" />
              <h2 className="text-5xl md:text-7xl font-display uppercase font-black leading-none italic tracking-tighter">
                Hoja de Ruta para Establecimientos
              </h2>
            </div>
            <div className="md:w-1/3 bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_#E11D48] rotate-2">
               <p className="font-mono text-sm uppercase font-black">"Los protocolos no deben ser solo reglamentos; deben ser GPS de contención."</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                title: 'SOCIALIZACIÓN', 
                icon: Users, 
                desc: 'Fortalecer espacios de diálogo sobre protocolos existentes para que no sean solo letra muerta.' 
              },
              { 
                title: 'FORMACIÓN CRM', 
                icon: HeartPulse, 
                desc: 'Dotar a los docentes de herramientas concretas de contención y no solo derivación administrativa.' 
              },
              { 
                title: 'RECURSOS REALES', 
                icon: Database, 
                desc: 'Cerrar la brecha de recursos entre establecimientos públicos y particulares para una equidad de intervención.' 
              }
            ].map((card, i) => (
              <BrutalCard key={i} color="bg-zinc-900" title={card.title} className="border-zinc-800 hover:border-[#E11D48] transition-colors h-full">
                <card.icon size={48} className="text-[#E11D48] mb-8" />
                <p className="text-xl font-serif italic text-zinc-400 group-hover:text-white transition-colors">{card.desc}</p>
              </BrutalCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
