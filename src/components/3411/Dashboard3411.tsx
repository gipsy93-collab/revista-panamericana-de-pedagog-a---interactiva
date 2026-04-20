import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from 'recharts';
import { STUDY_DATA } from './constants';
import { BrutalSticker, PremiumTitle, WaveSection, BrutalCard } from '../BrutalistLib';

const COLORS = {
  baja: '#f43f5e',
  activo: '#10b981',
  hombre: '#3b82f6',
  mujer: '#F4A261',
  general: '#10b981',
  tecnica: '#3b82f6',
  tele: '#f43f5e',
  nodata: '#64748b',
};

const TABS = [
  { id: 'cohorte', label: 'COHORTE' },
  { id: 'sexo', label: 'SEXO' },
  { id: 'origen', label: 'ORIGEN' },
  { id: 'modelos', label: 'MODELOS' },
] as const;

type TabId = typeof TABS[number]['id'];

export default function Dashboard3411() {
  const [activeTab, setActiveTab] = useState<TabId>('cohorte');

  const cohorteData = [
    { name: 'Baja', value: STUDY_DATA.cohort.baja, color: COLORS.baja },
    { name: 'Activo', value: STUDY_DATA.cohort.activo, color: COLORS.activo },
  ];

  const sexoData = [
    { name: 'Hombre (Baja)', value: STUDY_DATA.sexo.baja.hombre, color: COLORS.hombre },
    { name: 'Mujer (Baja)', value: STUDY_DATA.sexo.baja.mujer, color: COLORS.mujer },
    { name: 'Hombre (Activo)', value: STUDY_DATA.sexo.activo.hombre, color: '#1d4ed8' },
    { name: 'Mujer (Activo)', value: STUDY_DATA.sexo.activo.mujer, color: '#d97706' },
  ];

  const origenData = STUDY_DATA.origenSecundaria.map((o) => ({
    name: o.tipo,
    value: o.frecuencia,
    pct: o.pct,
    color:
      o.tipo.includes('general') ? COLORS.general :
      o.tipo.includes('técnica') ? COLORS.tecnica :
      o.tipo.includes('Tele') ? COLORS.tele : COLORS.nodata,
  }));

  const modeloData = STUDY_DATA.modelos.map((m) => ({
    name: m.nombre,
    r2: m.r2 ?? 0,
    or: m.or,
    p: m.p,
    b: m.b,
  }));

  return (
    <WaveSection topColor="#0F172A" bottomColor="#1e293b" variant="wavy">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <BrutalSticker text="0. DATOS" color="bg-white" className="text-black mb-8 !rotate-0 shadow-[6px_6px_0_0_#F4A261]" />
          <PremiumTitle subtitle="PANEL DE EVIDENCIA EMPIRICA" className="text-white items-center">
            Dashboard Interactivo
          </PremiumTitle>
          <p className="mt-6 text-xl text-slate-400 max-w-3xl mx-auto">
            Visualización de los datos extraídos directamente del estudio. Navega por las pestañas para explorar la muestra, los predictores y el poder explicativo del modelo.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 border-4 border-black font-display uppercase text-sm font-black tracking-widest transition-all shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-[6px] active:translate-y-[6px] ${
                activeTab === tab.id
                  ? 'bg-[#F4A261] text-black'
                  : 'bg-zinc-800 text-slate-300 hover:bg-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'cohorte' && (
            <motion.div
              key="cohorte"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <BrutalCard color="bg-black" className="border-zinc-800 shadow-[20px_20px_0_0_#F4A261] h-[420px] flex flex-col">
                <h3 className="text-2xl font-display uppercase font-black mb-6 text-white">Distribución de la Cohorte</h3>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cohorteData}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={80}
                        outerRadius={130}
                        stroke="#000"
                        strokeWidth={4}
                      >
                        {cohorteData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip contentStyle={{ backgroundColor: '#0F172A', border: '4px solid #000', fontFamily: 'monospace', fontWeight: 800 }} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </BrutalCard>

              <div className="grid grid-cols-1 gap-8">
                <BrutalCard color="bg-white" className="text-black border-black shadow-[15px_15px_0_0_#10b981]">
                  <div className="text-7xl font-display font-black text-rose-600 mb-2">{STUDY_DATA.cohort.bajaPct}%</div>
                  <p className="text-xl font-display uppercase font-black">Tasa de Baja</p>
                  <p className="text-sm font-mono mt-2 opacity-60">{STUDY_DATA.cohort.baja} estudiantes de {STUDY_DATA.cohort.total}</p>
                </BrutalCard>
                <BrutalCard color="bg-white" className="text-black border-black shadow-[15px_15px_0_0_#3b82f6]">
                  <div className="text-7xl font-display font-black text-blue-600 mb-2">{STUDY_DATA.cohort.activoPct}%</div>
                  <p className="text-xl font-display uppercase font-black">Permanencia Activa</p>
                  <p className="text-sm font-mono mt-2 opacity-60">{STUDY_DATA.cohort.activo} estudiantes de {STUDY_DATA.cohort.total}</p>
                </BrutalCard>
              </div>
            </motion.div>
          )}

          {activeTab === 'sexo' && (
            <motion.div
              key="sexo"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-10"
            >
              <BrutalCard color="bg-black" className="border-zinc-800 shadow-[20px_20px_0_0_#F4A261] md:col-span-2 h-[420px] flex flex-col">
                <h3 className="text-2xl font-display uppercase font-black mb-6 text-white">Distribución por Sexo</h3>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sexoData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                      <Tooltip cursor={{ fill: '#1e293b' }} contentStyle={{ backgroundColor: '#0F172A', border: '4px solid #000', fontFamily: 'monospace', fontWeight: 800 }} />
                      <Bar dataKey="value" stroke="#000" strokeWidth={3}>
                        {sexoData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </BrutalCard>

              <div className="space-y-8">
                <BrutalCard color="bg-[#1e293b]" className="text-white border-zinc-700 shadow-[15px_15px_0_0_#000]">
                  <p className="text-sm font-mono uppercase opacity-50 mb-2">Baja</p>
                  <div className="text-5xl font-display font-black text-rose-500">{STUDY_DATA.sexo.baja.hombre}</div>
                  <p className="text-lg font-display uppercase">Hombres</p>
                </BrutalCard>
                <BrutalCard color="bg-[#1e293b]" className="text-white border-zinc-700 shadow-[15px_15px_0_0_#000]">
                  <p className="text-sm font-mono uppercase opacity-50 mb-2">Baja</p>
                  <div className="text-5xl font-display font-black text-[#F4A261]">{STUDY_DATA.sexo.baja.mujer}</div>
                  <p className="text-lg font-display uppercase">Mujeres</p>
                </BrutalCard>
                <BrutalCard color="bg-white" className="text-black border-black shadow-[15px_15px_0_0_#3b82f6]">
                  <p className="text-xs font-mono uppercase opacity-60">Dato Clave</p>
                  <p className="text-lg font-serif italic mt-2 leading-snug">
                    Ser hombre reduce la probabilidad de permanencia (OR = 0.516, p = 0.001).
                  </p>
                </BrutalCard>
              </div>
            </motion.div>
          )}

          {activeTab === 'origen' && (
            <motion.div
              key="origen"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-3 gap-10"
            >
              <BrutalCard color="bg-black" className="border-zinc-800 shadow-[20px_20px_0_0_#F4A261] md:col-span-2 h-[420px] flex flex-col">
                <h3 className="text-2xl font-display uppercase font-black mb-6 text-white">Origen de la Secundaria</h3>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={origenData} layout="vertical" margin={{ top: 10, right: 30, left: 40, bottom: 10 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                      <XAxis type="number" tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                      <YAxis type="category" dataKey="name" width={140} tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 700 }} />
                      <Tooltip cursor={{ fill: '#1e293b' }} contentStyle={{ backgroundColor: '#0F172A', border: '4px solid #000', fontFamily: 'monospace', fontWeight: 800 }} />
                      <Bar dataKey="value" stroke="#000" strokeWidth={3}>
                        {origenData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </BrutalCard>

              <div className="space-y-6">
                {STUDY_DATA.origenSecundaria.map((o, i) => (
                  <BrutalCard key={i} color="bg-[#1e293b]" className="text-white border-zinc-700 shadow-[12px_12px_0_0_#000]">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-display uppercase font-black">{o.tipo}</span>
                      <span className="text-2xl font-display font-black text-[#F4A261]">{o.pct}%</span>
                    </div>
                    <p className="text-xs font-mono opacity-50 mt-1">{o.frecuencia} estudiantes</p>
                  </BrutalCard>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'modelos' && (
            <motion.div
              key="modelos"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid md:grid-cols-2 gap-10"
            >
              <BrutalCard color="bg-black" className="border-zinc-800 shadow-[20px_20px_0_0_#F4A261] h-[420px] flex flex-col">
                <h3 className="text-2xl font-display uppercase font-black mb-6 text-white">R² de Nagelkerke por Modelo</h3>
                <div className="flex-1 min-h-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={modeloData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                      <XAxis dataKey="name" tick={{ fill: '#e2e8f0', fontSize: 12, fontWeight: 700 }} />
                      <YAxis tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 700 }} />
                      <Tooltip cursor={{ fill: '#1e293b' }} contentStyle={{ backgroundColor: '#0F172A', border: '4px solid #000', fontFamily: 'monospace', fontWeight: 800 }} />
                      <Bar dataKey="r2" fill="#F4A261" stroke="#000" strokeWidth={3} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </BrutalCard>

              <div className="space-y-6">
                {STUDY_DATA.modelos.map((m, i) => (
                  <BrutalCard key={i} color="bg-white" className="text-black border-black shadow-[15px_15px_0_0_#000]">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-mono uppercase opacity-50">Variable</p>
                        <p className="text-3xl font-display font-black uppercase">{m.nombre}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-mono uppercase opacity-50">OR</p>
                        <p className="text-3xl font-display font-black text-blue-600">{m.or}</p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-6 text-sm font-mono font-black">
                      <span className="bg-zinc-100 px-3 py-1 border-2 border-black">p = {m.p.toFixed(3)}</span>
                      {m.r2 !== null && (
                        <span className="bg-[#F4A261] px-3 py-1 border-2 border-black">R² = {m.r2.toFixed(3)}</span>
                      )}
                    </div>
                  </BrutalCard>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </WaveSection>
  );
}
