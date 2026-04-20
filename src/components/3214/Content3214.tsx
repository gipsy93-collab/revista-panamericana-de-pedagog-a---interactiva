import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Target, Leaf, Cpu, Map, Trees, Sparkles, Activity, AlertTriangle, MessageCircle, CheckCircle, Database, MapPin, Quote } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DIMENSIONS, ARTICLE_META } from './constants';
import { SimuladorParcela3214 } from './SimuladorParcela3214';

export const Content3214 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN Y CONTEXTO RURAL + METODOLOGÍA */}
      <WaveSection topColor="#ffffff" bottomColor="#f0fdf4" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#059669]" />
               <PremiumTitle subtitle="REALIDAD AGROPECUARIA"> El Pulso del Campo </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#059669] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-4xl font-serif italic text-white/90 leading-tight relative z-10">
                   "¿Explotar recursos o cultivar el futuro? Un dilema que define la formación técnica en Manabí, donde la innovación no es solo digital, sino estructural y humana."
                 </p>
              </div>

              {/* FICHA METODOLÓGICA TÉCNICA */}
              <BrutalCard title="PROTOCOLO METODOLÓGICO IMRyD" color="bg-white" className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-600 font-bold uppercase text-xs">
                      <Database size={16} /> Diseño Cuasiexperimental
                    </div>
                    <p className="text-sm leading-relaxed text-black/70">
                      Investigación mixta con aplicación de <strong>Pre-test</strong> y <strong>Post-test</strong> para evaluar cambios significativos tras una intervención de 12 semanas.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {ARTICLE_META.phases?.map((p, i) => (
                         <span key={i} className="bg-zinc-100 px-2 py-1 text-[9px] font-black uppercase border border-black/10">{p}</span>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-emerald-600 font-bold uppercase text-xs">
                      <MapPin size={16} /> Ubicación Manabí
                    </div>
                    <p className="text-sm leading-relaxed italic text-black/70">
                      "Unidad Educativa Fiscal San Isidro, cantón Sucre. Se trabajó con el 100% de la población del bachillerato técnico agropecuario."
                    </p>
                  </div>
                </div>
              </BrutalCard>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <CinematicCard color="bg-zinc-50" title="BRECHA HISTÓRICA" icon={Trees} className="shadow-[10px_10px_0_0_#059669]">
                 <p className="text-lg font-bold leading-snug text-black/80">La educación tradicional rural prioriza el academicismo rígido sobre el desarrollo sostenible real.</p>
              </CinematicCard>
              
              <div className="bg-emerald-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">HIPÓTESIS CENTRAL</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   "La innovación basada en aprendizaje experiencial y TIC demuestra mayor disposición para implementar prácticas agrícolas sostenibles."
                 </p>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#10b981] -rotate-1">
                 <h4 className="font-display text-xl uppercase font-black mb-2 italic">Desarrollo Sostenible</h4>
                 <p className="text-xs font-sans font-medium text-black/50 leading-relaxed uppercase">
                   Enfoque holístico: Integración de ejes económicos, sociales y ambientales en el proceso de enseñanza.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES DEL GIRO PEDAGÓGICO */}
      <WaveSection topColor="#f0fdf4" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA ACADÉMICA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="MATRIZ DE RESULTADOS">Giro Pedagógico</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-6 border-4 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-emerald-600 text-white shadow-[8px_8px_0_0_#000] -translate-y-1' 
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
                  className="bg-white border-[12px] border-black p-12 md:p-16 shadow-[25px_25px_0_0_#059669] rotate-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 font-display text-9xl font-black text-black/5 leading-none italic">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-4xl uppercase font-black mb-6 italic text-emerald-600 underline decoration-black decoration-8 underline-offset-8 leading-none">
                    {DIMENSIONS[activeDimension].name}
                  </h3>
                  
                  <p className="text-2xl font-serif italic text-black/80 font-medium leading-relaxed mb-10">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-zinc-900 text-white p-8 border-4 border-black rotate-[-1deg] relative">
                      <h4 className="font-mono text-[9px] uppercase font-black mb-4 tracking-widest text-emerald-400">PUNTOS_CLAVE</h4>
                      <ul className="space-y-4">
                        {DIMENSIONS[activeDimension].highlights?.map((h, i) => (
                          <li key={i} className="flex gap-3 items-start md:items-center">
                            <span className="bg-emerald-600 w-2 h-2 rounded-full shrink-0 md:mt-0 mt-1" />
                            <span className="font-display text-sm uppercase font-black italic tracking-tighter leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-emerald-50 p-8 border-4 border-black flex flex-col justify-center">
                       <Quote className="text-emerald-600 mb-4" size={32} />
                       <p className="font-serif italic text-lg leading-snug text-black/90">
                          {activeDimension === 0 && "El campo ya no es solo tierra; ahora es dato, cálculo y monitorización desde el celular."}
                          {activeDimension === 1 && "Ver el impacto de mi proyecto en la finca de mi familia me motivó a seguir estudiando."}
                          {activeDimension === 2 && "Aprender haciendo, con las manos en la tierra, fue lo que más nos conectó con los temas."}
                          {activeDimension === 3 && "Sin recursos tecnológicos reales, la innovación es difícil de sostener a largo plazo."}
                       </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: IMPLICACIONES Y CORAZÓN */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="III. ESENCIA" color="bg-emerald-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#064e3b]" />
            <PremiumTitle className="items-center" subtitle="REFLEXIÓN CRÍTICA">Implicaciones del Bachillerato Técnica</PremiumTitle>
          </div>

          <BrutalQuote author="Dueñas Basurto & Zambrano Vera (2025)" className="text-3xl font-serif italic mb-32 shadow-[30px_30px_0_0_#000] rotate-1">
             "La educación agropecuaria afronta desafíos ambientales y sociales en el siglo XXI, necesita una transformación profunda en la formación de sus futuros profesionales."
          </BrutalQuote>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: Map, color: 'bg-emerald-600', title: 'Pertinencia Rural', desc: 'Adaptar las estrategias al contexto local de Manabí facilitó un aprendizaje 4.0 con arraigo.' },
               { icon: Cpu, color: 'bg-zinc-900', title: 'Reducción de Brecha', desc: 'Las TIC se integraron como herramientas dinámicas, aumentando un 15% su uso docente.' },
               { icon: Activity, color: 'bg-yellow-400', title: 'Aprobación Parental', desc: 'Involucrar a las familias resultó en un incremento del 10% en la satisfacción del modelo.' }
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

      {/* SECCIÓN FINAL CON SIMULADOR */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-7xl mx-auto text-center pb-40">
           <div className="mb-20">
              <BrutalSticker text="SIMULADOR PEDAGÓGICO" color="bg-yellow-400" className="text-black mb-12 shadow-[4px_4px_0_0_#000]" />
              <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic mb-16">
                Elige tu <br/><span className="text-emerald-600">Parcela</span>
              </h2>
              <SimuladorParcela3214 />
           </div>

           <div className="bg-zinc-950 text-white p-16 md:p-24 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">RURAL_TECH_REPORT_3214_CONSOLIDADO</div>
              <p className="text-4xl md:text-6xl font-display uppercase font-black leading-tight mb-12 italic">
                La técnica <span className="text-emerald-500">sin arraigo</span> es <br/> tierra estéril
              </p>
              <div className="w-64 h-4 bg-emerald-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
