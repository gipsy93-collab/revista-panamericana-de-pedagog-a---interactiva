import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, ClipboardList, Microscope, Award, Sparkles, TrendingUp, AlertTriangle, Binary, Settings } from 'lucide-react';
import { DIMENSIONS, NSE_BASE, MET_MULTIPLIER, LIMITATIONS } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

const studyCards = [
  {
    icon: Users,
    title: 'Muestra_Poblacional',
    text: '228 estudiantes de 15 escuelas del AMBA. Equidad de género (52/48). Segmento 13-20 años.',
  },
  {
    icon: ClipboardList,
    title: 'El_Instrumento',
    text: 'Inventario de 32 ítems en 4 dimensiones críticas. Escala Likert de alta resolución.',
  },
  {
    icon: Microscope,
    title: 'Metodología_AN',
    text: 'Descriptivo-comparativo. Pruebas no paramétricas para validación estadística robusta.',
  },
  {
    icon: Award,
    title: 'Validación_K',
    text: 'Kappa de Cohen = 0.95. Concordancia casi absoluta entre evaluadores expertos.',
  },
];

function AnimatedBar({
  label,
  value,
  max,
  colorClass,
  delay = 0,
}: {
  label: string;
  value: number;
  max: number;
  colorClass: string;
  delay?: number;
}) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100));
  return (
    <div className="mb-8 group">
      <div className="flex justify-between font-display font-black uppercase text-sm mb-3 group-hover:text-rose-600 transition-colors">
        <span>{label}</span>
        <span>{value} pts</span>
      </div>
      <div className="h-12 bg-zinc-100 border-4 border-black p-1">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${pct}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "circOut", delay }}
          className={`h-full border-r-4 border-black flex items-center pl-4 text-white font-black italic text-xl ${colorClass}`}
        >
          {value}
        </motion.div>
      </div>
    </div>
  );
}

export default function Content3412() {
  const [nseIndex, setNseIndex] = useState(2); // Media-baja default
  const [metIndex, setMetIndex] = useState(1); // Convivencia default

  const nseLabels = Object.keys(NSE_BASE);
  const metLabels = Object.keys(MET_MULTIPLIER);

  const computed = useMemo(() => {
    const nse = nseLabels[nseIndex];
    const met = metLabels[metIndex];
    const val = NSE_BASE[nse] * MET_MULTIPLIER[met];
    return { nse, met, val: parseFloat(val.toFixed(2)) };
  }, [nseIndex, metIndex, nseLabels, metLabels]);

  const resultColor = computed.val > 130 ? 'text-emerald-500' : computed.val > 100 ? 'text-amber-500' : 'text-rose-500';

  return (
    <div className="bg-white">
      {/* SECCIÓN 1: EL ESTUDIO */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <BrutalSticker text="I. CONFIGURACIÓN" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#1E3A5F]" />
            <PremiumTitle subtitle="DESARROLLO DE INVESTIGACIÓN">
              La Matriz del Estudio
            </PremiumTitle>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {studyCards.map((card, i) => (
              <CinematicCard
                key={i}
                color="bg-white"
                title={card.title}
                icon={card.icon}
                className="shadow-[12px_12px_0_0_#000] hover:-translate-y-2 transition-transform"
              >
                <p className="text-lg font-sans font-bold leading-tight text-black/70">
                  {card.text}
                </p>
              </CinematicCard>
            ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: DIMENSIONES */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. MÉTRICA" color="bg-[#1E3A5F]" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="CONSTRUCTOS TEÓRICOS">
              Las 4 Dimensiones Vitales
            </PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {DIMENSIONS.map((d, i) => (
              <div key={d.code} className="relative group">
                 <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5" />
                 <div className="relative bg-white border-4 border-black p-8 h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-5">
                    <div className="text-6xl mb-6 group-hover:scale-125 transition-transform inline-block">{d.emoji}</div>
                    <h4 className="font-display text-4xl font-black uppercase mb-4 leading-none text-[#1E3A5F]">
                      {d.code}
                    </h4>
                    <p className="font-display text-sm font-black uppercase mb-6 tracking-widest border-b-4 border-black pb-2 inline-block">{d.name}</p>
                    <p className="text-xl font-serif italic text-black/70 leading-relaxed font-medium">"{d.desc}"</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: DATOS QUE DUELEN */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-12">
               <BrutalSticker text="III. BRECHAS" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
               <PremiumTitle subtitle="EVIDENCIA CRÍTICA">Los Datos que Duelen</PremiumTitle>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <CinematicCard color="bg-white" className="border-8 border-black shadow-[15px_15px_0_0_#000]" title="VARIABLE // HI">
                <h3 className="font-display text-2xl uppercase font-black mb-10 italic">Brecha Socioeconómica en Habilidades Interpersonales</h3>
                <AnimatedBar label="Clase Media" value={140.19} max={160} colorClass="bg-emerald-500" delay={0.1} />
                <AnimatedBar label="Clase Media-Baja" value={93.56} max={160} colorClass="bg-rose-600" delay={0.3} />
                <div className="mt-10 bg-black text-white p-6 font-display uppercase font-black text-4xl italic text-center rotate-1">
                  -46.63 Puntos_
                </div>
              </CinematicCard>

              <CinematicCard color="bg-white" className="border-8 border-black shadow-[15px_15px_0_0_#000]" title="VARIABLE // HINT">
                <h3 className="font-display text-2xl uppercase font-black mb-10 italic">Brecha Socioeconómica en Hab. Intrapersonales</h3>
                <AnimatedBar label="Clase Media" value={138.76} max={160} colorClass="bg-emerald-500" delay={0.5} />
                <AnimatedBar label="Clase Media-Baja" value={101.51} max={160} colorClass="bg-[#1E3A5F]" delay={0.7} />
                <div className="mt-8 font-mono text-xs uppercase font-black opacity-40 text-center tracking-widest">
                  Diferencia Estadística Significativa: p = .021
                </div>
              </CinematicCard>
            </div>

            <div className="lg:col-span-5 space-y-10">
              <h3 className="font-display text-3xl uppercase font-black mb-10 italic text-center lg:text-left">Métricas_Adicionales</h3>
              <div className="bg-zinc-50 border-8 border-black p-10 shadow-[12px_12px_0_0_#fde047] rotate-[-2deg]">
                <div className="text-7xl font-display font-black text-rose-600 mb-2">28.86</div>
                <p className="font-display text-xl uppercase font-black leading-tight">Diferencia entre vulnerables y no-vulnerables acad.</p>
              </div>
              <div className="bg-black text-white border-8 border-black p-10 shadow-[12px_12px_0_0_#3b82f6] rotate-1">
                <div className="text-7xl font-display font-black text-teal-400 mb-2">~18</div>
                <p className="font-display text-xl uppercase font-black leading-tight">Puntos a favor de Mujeres sobre Varones en HI/HINT.</p>
              </div>
              <div className="bg-rose-600 text-white border-8 border-black p-10 shadow-[12px_12px_0_0_#000] rotate-2">
                <div className="text-7xl font-display font-black text-white mb-2">50+</div>
                <p className="font-display text-xl uppercase font-black leading-tight">Caída drástica en HI a los 15 años (4° Sec).</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: ESPERANZA */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
               <BrutalSticker text="IV. INTERVENCIÓN" color="bg-emerald-600" className="text-white mb-8 !rotate-0" />
               <PremiumTitle subtitle="PEDAGOGÍA DE IMPACTO">La Ventana de Esperanza</PremiumTitle>
               <p className="mt-10 text-3xl font-serif italic text-black/80 leading-relaxed border-l-[16px] border-emerald-500 pl-10">
                 "El Aprendizaje Basado en Proyectos (ABP) no es solo una moda; es un ecualizador social."
               </p>
            </div>
            
            <div className="lg:w-1/2 w-full space-y-8">
               <AnimatedBar label="ABP (Activo)" value={144.97} max={160} colorClass="bg-emerald-600" />
               <AnimatedBar label="Sin Proyecto" value={121.94} max={160} colorClass="bg-zinc-400" />
               <AnimatedBar label="ABR (Retos)" value={81.85} max={160} colorClass="bg-rose-600" />
               
               <div className="bg-emerald-600 text-white p-12 border-8 border-black rotate-1 shadow-[20px_20px_0_0_#000] relative group">
                  <Sparkles className="absolute top-4 right-4 w-12 h-12 opacity-20 group-hover:scale-150 transition-transform" />
                  <div className="text-9xl font-display font-black leading-none italic">+63</div>
                  <div className="text-3xl font-display uppercase font-black tracking-tighter mt-4">Puntos de Diferencia con ABP</div>
               </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: CALCULADORA */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="V. SIMULACIÓN" color="bg-black" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="ALGORITMO DE BRECHA">Explora la Evidencia</PremiumTitle>
          </div>

          <div className="bg-white border-[12px] border-black p-10 md:p-20 shadow-[30px_30px_0_0_#1E3A5F] relative">
            <div className="absolute top-0 right-0 p-6 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">UCA_DATA_SIMULATOR_41</div>
            
            <div className="space-y-16">
              <div className="bg-zinc-50 p-10 border-4 border-black border-dashed">
                <div className="flex justify-between items-end mb-8">
                  <label className="font-display text-2xl uppercase font-black text-[#1E3A5F]">Nivel Socioeconómico_</label>
                  <span className="font-display text-4xl font-black italic text-rose-600">{computed.nse}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={nseLabels.length - 1}
                  step={1}
                  value={nseIndex}
                  onChange={(e) => setNseIndex(parseInt(e.target.value))}
                  className="w-full h-10 appearance-none bg-black border-4 border-black accent-[#FF6B6B]"
                />
              </div>

              <div className="bg-zinc-50 p-10 border-4 border-black border-dashed">
                <div className="flex justify-between items-end mb-8">
                  <label className="font-display text-2xl uppercase font-black text-[#1E3A5F]">Metodología Pedagógica_</label>
                  <span className="font-display text-4xl font-black italic text-emerald-600">{computed.met}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={metLabels.length - 1}
                  step={1}
                  value={metIndex}
                  onChange={(e) => setMetIndex(parseInt(e.target.value))}
                  className="w-full h-10 appearance-none bg-black border-4 border-black accent-[#10b981]"
                />
              </div>
            </div>

            <div className="mt-20 bg-black text-white p-16 text-center border-l-[30px] border-rose-600 relative group overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/black-thread.png')]" />
              <p className="text-xl font-display font-black uppercase text-slate-500 mb-8 tracking-[0.4em]">Puntuación Esperada (HI)</p>
              <motion.div
                key={computed.val}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-[12rem] font-display font-black leading-none drop-shadow-[15px_15px_0_rgba(255,255,255,0.1)] ${resultColor}`}
              >
                {computed.val}
              </motion.div>
              <div className="mt-12 flex justify-center gap-6">
                <div className="w-16 h-2 bg-white" />
                <div className="w-16 h-2 bg-rose-600" />
                <div className="w-16 h-2 bg-white" />
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 6: IMPLICACIONES */}
      <section className="py-40 bg-zinc-950 text-white relative overflow-hidden border-t-[20px] border-black">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <BrutalSticker text="VI. ACCIÓN" color="bg-white" className="text-black mb-8 !rotate-0" />
            <PremiumTitle className="text-white items-center" subtitle="ESTRATEGIAS DE CAMBIO">¿Qué Hacer con Esto?</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'PARA DOCENTES', icon: Users, items: ['Implementar ABP sistemáticamente', 'Fomentar trabajo colaborativo', 'Usar debates y simulaciones', 'Diagnóstico preventivo'] },
              { title: 'PARA DIRECTIVOS', icon: Settings, items: ['Priorizar metodologías activas', 'Usar inventario como GPS', 'Intervenciones focalizadas', 'Capacitación sistémica'] },
              { title: 'PARA POLÍTICOS', icon: Binary, items: ['Brechas estructurales', 'Recursos diferenciales', 'Intervención material', 'Condiciones de escala'] },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-zinc-900 border-4 border-white p-10 shadow-[10px_10px_0_0_#FF6B6B] group transition-all"
              >
                <card.icon size={48} className="text-[#FF6B6B] mb-8 group-hover:scale-125 transition-transform" />
                <h4 className="font-display text-3xl uppercase font-black mb-10 text-white border-b-2 border-white/10 pb-4 italic">{card.title}</h4>
                <ul className="space-y-6">
                  {card.items.map((it, idx) => (
                    <li key={idx} className="flex gap-4 items-start font-mono text-xs uppercase font-black tracking-widest text-slate-400">
                      <span className="text-teal-400">▶</span> {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 bg-white text-black p-16 md:p-32 border-[20px] border-black text-center shadow-[40px_40px_0_0_#FF6B6B] rotate-[-1deg]">
            <BrutalQuote className="border-0 bg-transparent text-black text-5xl md:text-7xl font-serif italic mb-16 leading-[1.1]">
              "¿Tenemos herramientas técnicas para problemas que son estrictamente políticos?"
            </BrutalQuote>
            <div className="w-48 h-4 bg-rose-600 mx-auto mb-16" />
            <p className="font-display text-4xl md:text-6xl uppercase font-black leading-none tracking-tighter">
              Las competencias blandas no deberían depender de un <span className="text-rose-600">Código Postal_</span>
            </p>
          </div>
        </div>
      </section>

      {/* LIMITACIONES */}
      <WaveSection topColor="#000000" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-4xl mx-auto py-20 pb-40">
          <div className="text-center mb-20">
            <BrutalSticker text="VII. LIMITES" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="AUTOCRÍTICA METODOLÓGICA">Limitaciones</PremiumTitle>
          </div>
          <div className="space-y-8">
            {LIMITATIONS.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white border-4 border-black p-8 shadow-[8px_8px_0_0_#000] flex gap-8 items-center"
              >
                <span className="w-16 h-16 bg-black text-white shrink-0 flex items-center justify-center font-display text-4xl font-black">{i + 1}</span>
                <p className="text-2xl font-serif italic text-black/70 leading-snug">"{item}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </WaveSection>
    </div>
  );
}
