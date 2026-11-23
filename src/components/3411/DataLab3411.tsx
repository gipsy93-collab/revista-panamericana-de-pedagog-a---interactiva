import React from 'react';
import { motion } from 'motion/react';
import { BarChart, Users, TrendingDown, School, Settings, AlertCircle, CheckCircle2 } from 'lucide-react';
import { BrutalCard, CinematicCard, RapidCounter, FallingWords, Tilt3DCard } from '../BrutalistLib';

export const DataLab3411 = () => {
  const origins = [
    { label: 'S. Técnica', value: 45.0, count: 225 },
    { label: 'S. General', value: 36.2, count: 181 },
    { label: 'Telesecundaria', value: 5.0, count: 25 },
    { label: 'Sin Datos', value: 13.8, count: 69 },
  ];

  const predictors = [
    { label: 'Promedio Secundaria', prefix: '+', num: 2.04, suffix: 'x', decimals: 2, desc: 'Cada punto adicional duplica las probabilidades de permanecer.', r2: '8.9%' },
    { label: 'Computadora en Casa', prefix: 'OR ', num: 0.399, suffix: '', decimals: 3, desc: 'Factor protector: reduce el riesgo de baja al 40% (2.5 veces más probabilidad de permanecer activo).', r2: '5.7%' },
    { label: 'Sexo (Hombres)', prefix: '', num: 0.516, suffix: '', decimals: 3, desc: 'Ser hombre reduce la probabilidad de permanecer (58% de bajas).', r2: '3.1%' },
  ];

  const summaryData = [
    { label: 'Tasa de deserción', value: '28%', note: '141 de 500 estudiantes (Primer año)' },
    { label: 'Hombres en bajas', value: '58.16%', note: 'Desproporcionado (solo son 46.4% matrícula)' },
    { label: 'Mujeres en bajas', value: '41.84%', note: 'Subrepresentadas en el abandono' },
    { label: 'Sin computadora en bajas', value: '68.79%', note: 'Predictor inverso significativo' },
    { label: 'Con Internet en bajas', value: '85.82%', note: 'No significativo en modelo final' },
    { label: 'Promedio común bajas', value: '7.1 - 8.0', note: 'Calificaciones escala 0-10' },
  ];

  return (
    <div className="bg-[#f8fafc] py-24 px-6 md:px-12 border-y-[12px] border-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-20 border-b-4 border-black pb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-rose-600 rounded-full" />
              <span className="font-mono text-xs font-black uppercase tracking-widest opacity-50">
                Data Explorer // Regresión Logística
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-[0.95] text-black tracking-normal">
              <FallingWords text="LABORATORIO 3411" accentColor="#e11d48" highlightWords={['3411']} />
            </h2>
          </div>
          <div className="flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              className="bg-white border-2 border-black p-4 shadow-[6px_6px_0_0_#000] flex items-center gap-4 rounded-2xl cursor-default"
            >
              <Settings size={24} className="text-rose-600 animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-mono text-[10px] font-black uppercase">Live_Analysis_ON</span>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* I. HALLAZGO CENTRAL */}
          <div className="lg:col-span-12">
            <Tilt3DCard intensity={4}>
              <div className="bg-white border-8 border-black shadow-[24px_24px_0_0_#000] overflow-hidden group rounded-3xl">
                <div className="grid lg:grid-cols-2">
                  <div className="p-10 md:p-16 flex flex-col justify-center border-b-8 lg:border-b-0 lg:border-r-8 border-black bg-rose-50/40">
                    <span className="font-mono text-xs font-black uppercase text-rose-600 mb-4 tracking-widest italic">
                      # Métrica Primaria
                    </span>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-8xl md:text-9xl font-display font-black leading-none text-black">
                        <RapidCounter target={28} />
                      </span>
                      <span className="text-5xl md:text-7xl font-display font-black text-rose-600">%</span>
                    </div>
                    <h3 className="text-3xl font-display uppercase font-black mb-4 tracking-normal">
                      Tasa de Desafiliación Crítica
                    </h3>
                    <p className="text-lg font-serif italic text-black/70 leading-relaxed max-w-md">
                      Un total de <RapidCounter target={141} /> estudiantes rompieron su vínculo institucional antes de concluir el primer ciclo académico.
                    </p>
                  </div>
                  <div className="p-10 md:p-16 flex flex-col justify-between">
                    <div className="space-y-8">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center shrink-0">
                          <AlertCircle />
                        </div>
                        <div>
                          <h4 className="font-display text-xl uppercase font-black tracking-normal">Periodo de Riesgo</h4>
                          <p className="text-sm font-sans font-medium text-black/70 mt-1">
                            El primer semestre se consolida como el mayor filtro excluyente del bachillerato tecnológico.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-rose-600 text-white rounded-2xl flex items-center justify-center shrink-0">
                          <CheckCircle2 />
                        </div>
                        <div>
                          <h4 className="font-display text-xl uppercase font-black tracking-normal">
                            Universo N = <RapidCounter target={500} />
                          </h4>
                          <p className="text-sm font-sans font-medium text-black/70 mt-1">
                            Seguimiento exhaustivo de la cohorte 2023 en Ensenada, Baja California.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10 pt-6 border-t-2 border-black/10 flex justify-between items-center">
                      <span className="font-mono text-[10px] font-black uppercase opacity-40">
                        Jiménez-Moreno & Feria-Juárez // RPP Vol. 41
                      </span>
                      <div className="w-20 h-3 bg-black rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* II. ORIGEN & DISTRIBUCIÓN */}
          <div className="lg:col-span-8">
            <CinematicCard
              title="Dinámica de Secundaria de Origen"
              icon={School}
              color="bg-zinc-900"
              className="text-white h-full !p-10 !border-[6px] shadow-[18px_18px_0_0_#e11d48]"
            >
              <div className="space-y-8 mt-6">
                {origins.map((o, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-display text-xl md:text-2xl uppercase font-black text-white group-hover:text-rose-400 transition-colors tracking-normal">
                        {o.label}
                      </span>
                      <div className="flex gap-4 font-mono text-sm font-black">
                        <span className="text-rose-500">
                          <RapidCounter target={o.value} decimals={1} suffix="%" />
                        </span>
                        <span className="text-white/40">
                          n=<RapidCounter target={o.count} />
                        </span>
                      </div>
                    </div>
                    <div className="h-4 w-full bg-white/10 border border-white/20 rounded-full overflow-hidden group-hover:border-rose-500 transition-all">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${o.value}%` }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full bg-rose-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 bg-white/5 p-5 border border-white/10 rounded-2xl">
                <p className="text-xs font-mono uppercase font-bold tracking-wider text-white/60">
                  * El modelo omitió 69 casos por falta de antecedente escolar (13.8% del universo total).
                </p>
              </div>
            </CinematicCard>
          </div>

          {/* III. QUICK METRICS */}
          <div className="lg:col-span-4 grid gap-6">
            <Tilt3DCard>
              <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_0_#000] flex flex-col items-center justify-center text-center group hover:bg-rose-600 hover:text-white transition-all rounded-3xl">
                <Users className="mb-3 group-hover:scale-110 transition-transform" size={44} />
                <h5 className="font-display text-4xl font-black uppercase">
                  <RapidCounter target={46.4} decimals={1} suffix="%" />
                </h5>
                <p className="font-mono text-[10px] uppercase font-black opacity-70 mt-1">Matrícula Masculina</p>
              </div>
            </Tilt3DCard>
            <Tilt3DCard>
              <div className="bg-black text-white border-4 border-black p-8 shadow-[12px_12px_0_0_#e11d48] flex flex-col items-center justify-center text-center group rounded-3xl">
                <Users className="text-rose-500 mb-3 group-hover:scale-110 transition-transform" size={44} />
                <h5 className="font-display text-4xl font-black uppercase">
                  <RapidCounter target={53.0} decimals={1} suffix="%" />
                </h5>
                <p className="font-mono text-[10px] uppercase font-black opacity-60 mt-1">Matrícula Femenina</p>
              </div>
            </Tilt3DCard>
            <Tilt3DCard>
              <div className="bg-rose-50 border-4 border-black p-7 shadow-[12px_12px_0_0_#000] flex items-center gap-5 rounded-3xl">
                <div className="w-14 h-14 bg-white border-2 border-black flex items-center justify-center shrink-0 rounded-2xl">
                  <TrendingDown className="text-rose-600" />
                </div>
                <div>
                  <h5 className="font-display text-xl font-black uppercase tracking-normal">Filtro Temprano</h5>
                  <p className="text-xs font-sans font-medium leading-snug text-black/70 mt-1">
                    La mayor tasa de deserción se concentra en el tránsito al 2do semestre.
                  </p>
                </div>
              </div>
            </Tilt3DCard>
          </div>

          {/* IV. VARIABLES PREDICTIVAS */}
          <div className="lg:col-span-12">
            <div className="bg-black text-white p-10 md:p-12 border-8 border-black shadow-[22px_22px_0_0_#e11d48] relative overflow-hidden rounded-3xl">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 mb-12">
                  <h3 className="text-3xl md:text-5xl font-display uppercase font-black tracking-normal">
                    Influencia Predictiva (Odds Ratio)
                  </h3>
                  <div className="bg-rose-600 text-white px-5 py-2 rounded-2xl font-mono text-xs font-black uppercase tracking-widest">
                    Nagelkerke R²: <RapidCounter target={8.9} decimals={1} suffix="%" />
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {predictors.map((p, i) => (
                    <Tilt3DCard key={i}>
                      <div className="bg-zinc-900 border-2 border-white/15 hover:border-rose-500 p-8 group transition-all rounded-3xl h-full flex flex-col justify-between">
                        <div>
                          <div className="text-5xl md:text-6xl font-display font-black text-rose-500 mb-4 group-hover:scale-105 transition-transform origin-left">
                            <RapidCounter
                              target={p.num}
                              decimals={p.decimals}
                              prefix={p.prefix}
                              suffix={p.suffix}
                            />
                          </div>
                          <h5 className="font-mono text-xs font-black uppercase border-b border-white/15 pb-3 mb-3 tracking-widest text-[#F4A261]">
                            {p.label}
                          </h5>
                          <p className="text-sm font-sans font-medium text-white/75 leading-relaxed mb-6">
                            {p.desc}
                          </p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="h-[1px] flex-1 bg-white/15" />
                          <span className="text-xs font-mono font-black text-rose-400 uppercase">
                            Varianza: {p.r2}
                          </span>
                        </div>
                      </div>
                    </Tilt3DCard>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* V. RESUMEN TABULAR */}
          <div className="lg:col-span-12">
            <BrutalCard
              title="MATRIZ DE DATOS CLAVE // CONSOLIDADO"
              color="bg-white"
              className="!border-[6px] shadow-[20px_20px_0_0_#000]"
            >
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-zinc-100 border-b-4 border-black font-display uppercase text-xs tracking-widest">
                      <th className="p-6 border-r-4 border-black">Variable Analítica</th>
                      <th className="p-6 border-r-4 border-black text-rose-600">Métrica Impacto</th>
                      <th className="p-6">Inferencias del Estudio</th>
                    </tr>
                  </thead>
                  <tbody className="font-sans font-bold uppercase text-xs">
                    {summaryData.map((row, i) => (
                      <tr
                        key={i}
                        className="border-b-2 border-black/10 hover:bg-rose-50/50 transition-colors group"
                      >
                        <td className="p-6 border-r-4 border-black font-mono font-black">{row.label}</td>
                        <td className="p-6 border-r-4 border-black font-display text-3xl text-black group-hover:text-rose-600 transition-colors">
                          {row.value}
                        </td>
                        <td className="p-6 text-black/70 italic font-serif text-base normal-case group-hover:text-black transition-colors">
                          {row.note}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </BrutalCard>
          </div>
        </div>
      </div>
    </div>
  );
};
