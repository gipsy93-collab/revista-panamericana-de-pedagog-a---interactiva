import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldAlert, Users, PhoneCall, Sparkles, HeartPulse, GraduationCap, Smartphone, Activity, Target, MapPin, Database, Quote } from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import { DIMENSIONS, ARTICLE_META } from './constants';

export const Content3198 = () => {
  const [activeDimension, setActiveDimension] = useState(0);

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: PROBLEMA Y CONTEXTO + METODOLOGÍA */}
      <WaveSection topColor="#ffffff" bottomColor="#fff1f2" variant="wavy">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#e11d48]" />
               <PremiumTitle subtitle="REALIDAD SILVER"> El Salto Digital </PremiumTitle>
            </div>
            
            <div className="lg:col-span-7">
              <div className="bg-zinc-900 p-12 md:p-20 border-[16px] border-black shadow-[30px_30px_0_0_#e11d48] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-4xl font-serif italic text-white/90 leading-tight relative z-10">
                   "El avance tecnológico relega a los adultos mayores, limitando su autonomía. Se les estigmatiza como 'demasiado mayores' para aprender, cuando en realidad el cerebro mantiene su plasticidad si existe mediación TRIC."
                 </p>
              </div>

              {/* TECHNICAL FICHA: METODOLOGÍA IMRyD */}
              <BrutalCard title="PROTOCOLO METODOLÓGICO" color="bg-white" className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-rose-600 font-bold uppercase text-xs">
                      <Database size={16} /> Diseño del Estudio
                    </div>
                    <p className="text-sm leading-relaxed">
                      Investigación cualitativa bajo el diseño de <strong>Teoría Fundamentada (Grounded Theory)</strong>, permitiendo descubrir conceptos desde el discurso directo de los participantes.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                       {ARTICLE_META.stages?.map((s, i) => (
                         <span key={i} className="bg-zinc-100 px-2 py-1 text-[9px] font-black uppercase border border-black/10">{s}</span>
                       ))}
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-rose-600 font-bold uppercase text-xs">
                      <MapPin size={16} /> Contexto AMBA
                    </div>
                    <p className="text-sm leading-relaxed italic">
                      "Selección teórica estratificada en Avellaneda, Lugano y Barracas, entrevistando a 27 adultos mayores (60-95 años) con asistencia mínima de 3 meses a talleres."
                    </p>
                  </div>
                </div>
              </BrutalCard>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <CinematicCard color="bg-zinc-50" title="BARRERA_ETARIA" icon={ShieldAlert} className="shadow-[10px_10px_0_0_#e11d48]">
                 <p className="text-lg font-bold leading-snug">El temor al error y al fraude bancario frena la adopción en sectores críticos, generando dependencia.</p>
              </CinematicCard>
              
              <div className="bg-rose-600 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2 relative group overflow-hidden">
                 <div className="absolute -bottom-4 -right-4 bg-white/10 w-32 h-32 rounded-full group-hover:scale-150 transition-transform" />
                 <h4 className="font-mono text-[10px] uppercase font-black mb-4 tracking-widest opacity-60">MOTOR_AFECTIVO</h4>
                 <p className="text-sm font-bold border-l-4 border-white pl-4 italic leading-relaxed">
                   "La ayuda de seres queridos fue fundamental para adquirir confianza y habilidades en el uso de dispositivos electrónicos." (Hernández-Silvera, p.19)
                 </p>
              </div>

              <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#9f1239] -rotate-1">
                 <h4 className="font-display text-xl uppercase font-black mb-2 italic">Educomunicación</h4>
                 <p className="text-sm font-sans font-medium text-black/60">
                   Integramos educación y comunicación para facilitar procesos significativos adaptados a la reserva cognitiva.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES DEL DESCUBRIMIENTO */}
      <WaveSection topColor="#fff1f2" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="II. RADIOGRAFÍA ACADÉMICA" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="RESULTADOS EMPÍRICOS">Pilares de la Inclusión</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              {DIMENSIONS.map((dim, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveDimension(idx)}
                  className={`group relative text-left p-6 border-4 border-black transition-all ${
                    activeDimension === idx 
                      ? 'bg-rose-600 text-white shadow-[8px_8px_0_0_#000] -translate-y-1' 
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
                  className="bg-white border-[12px] border-black p-10 md:p-16 shadow-[25px_25px_0_0_#e11d48] rotate-1 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-8 font-display text-9xl font-black text-black/5 leading-none italic">{DIMENSIONS[activeDimension].emoji}</div>
                  
                  <h3 className="font-display text-4xl uppercase font-black mb-6 italic text-rose-600 underline decoration-black decoration-8 underline-offset-8">
                    {DIMENSIONS[activeDimension].name}
                  </h3>
                  
                  <p className="text-2xl font-serif italic text-black/80 font-medium leading-relaxed mb-10">
                    "{DIMENSIONS[activeDimension].desc}"
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900 text-white p-8 border-4 border-black rotate-[-1deg] relative">
                      <h4 className="font-mono text-[9px] uppercase font-black mb-6 tracking-widest text-rose-400">PUNTOS_CLAVE</h4>
                      <ul className="space-y-4">
                        {DIMENSIONS[activeDimension].highlights?.map((h, i) => (
                          <li key={i} className="flex gap-3 items-start md:items-center">
                            <span className="bg-rose-600 w-2 h-2 rounded-full shrink-0 md:mt-0 mt-2" />
                            <span className="font-display text-sm uppercase font-black italic tracking-tighter leading-tight">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-yellow-100 p-8 border-4 border-black flex flex-col justify-center">
                       <Quote className="text-rose-600 mb-4" size={32} />
                       <p className="font-serif italic text-lg leading-snug text-black/90">
                          {activeDimension === 0 && "Participar del taller me dio un motivo para salir de casa y volver a sentirme útil."}
                          {activeDimension === 1 && "YouTube me permitió descubrir música coreana que no sabía que existía; me abrió un mundo."}
                          {activeDimension === 2 && "A veces me da miedo que me saquen la plata del banco, por eso pregunto cien veces."}
                          {activeDimension === 3 && "Que mis nietos me enseñen me hace sentir conectada con su mundo, ya no soy ajena."}
                       </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: ESENCIA Y TRIC (VOZ DE AMBA) */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. VOCES DE AMBA" color="bg-rose-600" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#9f1239]" />
            <PremiumTitle className="items-center" subtitle="EVIDENCIA CUALITATIVA">Testimonios Silver</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
             <BrutalQuote author="Participante Anónimo (82 años)" className="shadow-[15px_15px_0_0_#e11d48]">
               "El uso de teléfonos celulares se ha convertido en una herramienta fundamental para la comunicación, especialmente con hijos y nietos que viven lejos."
             </BrutalQuote>
             <BrutalQuote author="Participante Anónimo (67 años)" className="bg-blue-50/20 shadow-[15px_15px_0_0_#2563eb]">
               "No depender de otros devuelve la dignidad. Valoración inmensa de resolver problemas solos, como los turnos del médico."
             </BrutalQuote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: GraduationCap, color: 'bg-rose-600', title: 'Plasticidad Cerebral', desc: 'Capacidad cerebral para tolerar el deterioro clínico mediante la adquisición de nuevas habilidades.' },
               { icon: HeartPulse, color: 'bg-zinc-900', title: 'Bienestar Afectivo', desc: 'Las TIC contrarrestan el aislamiento social y promueven una vida social activa y satisfactoria.' },
               { icon: ShieldAlert, color: 'bg-blue-600', title: 'Seguridad Digital', desc: 'Deseo de independencia en el manejo tecnológico frente al temor por el robo de información.' }
             ].map((it, i) => (
               <div key={i} className="group flex flex-col bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] hover:-translate-y-4 transition-transform cursor-pointer">
                  <div className={`${it.color} text-white p-6 border-4 border-black mb-6 w-fit group-hover:rotate-12 transition-transform`}>
                    <it.icon size={40} />
                  </div>
                  <h4 className="font-display text-2xl uppercase font-black mb-4 italic tracking-tighter">{it.title}</h4>
                  <p className="font-sans text-sm font-medium text-black/70 leading-relaxed">{it.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto text-center pb-40">
           <div className="inline-block relative mb-20">
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4" />
              <div className="relative bg-rose-600 text-white p-16 md:p-32 border-8 border-black">
                 <h2 className="text-6xl md:text-[8rem] font-display uppercase font-black leading-none drop-shadow-[5px_5px_0_#000] italic">
                   Aprender <br/> es vivir
                 </h2>
                 <div className="w-32 h-6 bg-yellow-400 mx-auto mt-12 mb-16" />
                 <p className="text-2xl font-mono text-rose-100 uppercase font-black tracking-widest italic animate-pulse">
                   HACIA UNA CIUDADANÍA DIGITAL SILVER
                 </p>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-16 md:p-24 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#fde047] rotate-1 mt-20">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">SILVER_TECH_REPORT_3198_CONSOLIDADO</div>
              <p className="text-4xl md:text-6xl font-display uppercase font-black leading-tight mb-12 italic">
                La tecnología no tiene edad; <br/> la <span className="text-rose-500">conexión</span> no tiene límites
              </p>
              <div className="w-64 h-4 bg-rose-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
};
