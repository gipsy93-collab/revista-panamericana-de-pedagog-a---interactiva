import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft, X, Plus, MapPin, Users, Target, Zap, BarChart2, BookOpen,
  CheckCircle, AlertTriangle, Lightbulb, GraduationCap,
  Leaf, FlaskConical
} from 'lucide-react';

// ─── DATA ────────────────────────────────────────────────────────────────────

const BUBBLES = [
  {
    id: 'contexto',
    label: 'Contexto',
    sublabel: 'de la\nInvestigación',
    color: '#0ea5e9',       // turquoise/sky
    colorDark: '#0369a1',
    textColor: '#fff',
    icon: MapPin,
    size: 'lg',
    pos: { top: '8%', left: '5%' },
    modal: {
      title: '📊 Contexto de la Investigación',
      sections: [
        { label: 'Ubicación', value: 'Unidad Educativa Fiscal San Isidro, cantón Sucre, Manabí, Ecuador' },
        { label: 'Año', value: '2023' },
        { label: 'Diseño', value: 'Cuasiexperimental, mixto, exploratorio y descriptivo' },
        { label: 'Duración intervención', value: '12 semanas' },
      ],
      muestra: [
        { grupo: 'Estudiantes', n: 60 },
        { grupo: 'Padres de familia', n: 45 },
        { grupo: 'Docentes', n: 14 },
      ]
    }
  },
  {
    id: 'objetivo',
    label: 'Objetivo &',
    sublabel: 'Pregunta\nClave',
    color: '#f97316',       // orange
    colorDark: '#c2410c',
    textColor: '#fff',
    icon: Target,
    size: 'md',
    pos: { top: '6%', right: '8%' },
    modal: {
      title: '🧭 Objetivo y Pregunta de Investigación',
      sections: [
        { label: 'Objetivo', value: 'Analizar el potencial de la innovación pedagógica en la formación de bachilleres técnicos agropecuarios en prácticas sostenibles.' },
        { label: 'Pregunta clave', value: '¿Cómo puede la innovación pedagógica contribuir eficazmente a formar estudiantes capaces de implementar prácticas agrícolas sostenibles?' },
        { label: 'Hipótesis', value: 'Estudiantes en espacios con innovación pedagógica demostrarán mayor comprensión de principios de desarrollo sostenible.' },
      ]
    }
  },
  {
    id: 'estrategias',
    label: 'Estrategias',
    sublabel: 'Pedagógicas',
    color: '#0ea5e9',
    colorDark: '#0369a1',
    textColor: '#fff',
    icon: FlaskConical,
    size: 'md',
    pos: { top: '32%', left: '2%' },
    modal: {
      title: '🔧 Estrategias Pedagógicas Implementadas',
      lista: [
        { item: 'Aprendizaje experiencial', detalle: 'Proyectos, visitas a fincas agropecuarias' },
        { item: 'Uso de tecnologías digitales', detalle: 'Apps móviles, plataformas en línea' },
        { item: 'Trabajo colaborativo', detalle: 'Dinámicas grupales y cooperativas' },
        { item: 'Aprendizaje Basado en Problemas (ABP)', detalle: 'Resolución de casos reales del sector agro' },
        { item: 'Recursos Educativos Abiertos (REA)', detalle: 'Materiales libres y adaptados al contexto rural' },
      ]
    }
  },
  {
    id: 'resultados',
    label: 'Resultados',
    sublabel: 'Cuantitativos',
    color: '#f97316',
    colorDark: '#c2410c',
    textColor: '#fff',
    icon: BarChart2,
    size: 'lg',
    pos: { top: '30%', right: '3%' },
    modal: {
      title: '📈 Resultados Cuantitativos Clave',
      subsections: [
        {
          subtitle: 'Comprensión del desarrollo sostenible (estudiantes)',
          rows: [
            { label: '"Mucho" + "Bastante"', pre: '30%', post: '55%', delta: '+25%', up: true },
            { label: '"Muy poco" + "Algo"', pre: '30%', post: '15%', delta: '-15%', up: false },
          ]
        },
        {
          subtitle: 'Motivación para implementar prácticas sostenibles',
          rows: [
            { label: '"Mucho" + "Bastante"', pre: '30%', post: '55%', delta: '+25%', up: true },
          ]
        },
        {
          subtitle: 'Importancia de la innovación pedagógica',
          rows: [
            { label: '"Muy importante"', pre: '80%', post: '85%', delta: '+5%', up: true },
          ]
        },
        {
          subtitle: 'Estrategias preferidas (post-test estudiantes)',
          lista: [
            'Aprendizaje experiencial: 45%',
            'Tecnologías digitales: 40%',
            'Trabajo colaborativo: 35% (+5%)',
            'ABP: 25% (+5%)',
          ]
        }
      ]
    }
  },
  {
    id: 'padres',
    label: 'Percepción',
    sublabel: 'de Padres',
    color: '#0ea5e9',
    colorDark: '#0369a1',
    textColor: '#fff',
    icon: Users,
    size: 'sm',
    pos: { top: '58%', left: '4%' },
    modal: {
      title: '👨‍👩‍👧‍👦 Percepciones de Padres de Familia',
      subsections: [
        {
          subtitle: 'Satisfacción con estrategias pedagógicas',
          rows: [
            { label: 'Muy satisfechos', pre: '15', post: '25', delta: '+10%', up: true, unit: 'personas' },
            { label: 'Satisfechos', pre: '35', post: '40', delta: '+5%', up: true, unit: 'personas' },
            { label: 'Insatisfechos + Muy insatisfechos', pre: '20', post: '10', delta: '-10%', up: false, unit: 'personas' },
          ]
        },
        {
          subtitle: 'Estrategias más efectivas (post-test)',
          lista: [
            'Aprendizaje experiencial: 70% (+10%)',
            'Trabajo colaborativo: 50% (+10%)',
            'Tecnologías digitales: 40% (+10%)',
            'ABP: 30% (+5%)',
          ]
        },
        {
          subtitle: 'Importancia de la innovación',
          rows: [
            { label: '"Muy importante"', pre: '70%', post: '80%', delta: '+10%', up: true },
            { label: '"Neutral"', pre: '5%', post: '0%', delta: '-5%', up: false },
          ]
        }
      ]
    }
  },
  {
    id: 'docentes',
    label: 'Perspectiva',
    sublabel: 'Docente',
    color: '#f97316',
    colorDark: '#c2410c',
    textColor: '#fff',
    icon: GraduationCap,
    size: 'md',
    pos: { top: '56%', right: '4%' },
    modal: {
      title: '👩‍🏫 Perspectiva Docente',
      subsections: [
        {
          subtitle: 'Uso de estrategias innovadoras (variación)',
          rows: [
            { label: 'Tecnologías digitales', pre: '', post: '+15%', delta: '+15%', up: true },
            { label: 'Trabajo colaborativo', pre: '', post: '+10%', delta: '+10%', up: true },
            { label: 'Aprendizaje experiencial', pre: '', post: '+5%', delta: '+5%', up: true },
          ]
        },
        {
          subtitle: 'Barreras identificadas',
          tabla: [
            { concepto: 'Falta de recursos y tiempo', pct: 70 },
            { concepto: 'Falta de formación docente', pct: 60 },
            { concepto: 'Resistencia al cambio', pct: 40 },
            { concepto: 'Falta de apoyo institucional', pct: 30 },
          ]
        },
        {
          subtitle: 'Necesidades expresadas',
          tabla: [
            { concepto: 'Formación docente', pct: 85 },
            { concepto: 'Acceso a recursos tecnológicos', pct: 80 },
            { concepto: 'Tiempo para planificación', pct: 70 },
            { concepto: 'Apoyo institucional', pct: 60 },
          ]
        }
      ]
    }
  },
  {
    id: 'conclusiones',
    label: 'Conclusiones',
    sublabel: 'y Hallazgos',
    color: '#0ea5e9',
    colorDark: '#0369a1',
    textColor: '#fff',
    icon: CheckCircle,
    size: 'md',
    pos: { bottom: '8%', left: '18%' },
    modal: {
      title: '🎯 Conclusiones Principales',
      positivas: [
        'La innovación pedagógica incrementa la comprensión de principios de desarrollo sostenible (+25%).',
        'Aumenta la motivación para implementar prácticas sostenibles (+25%).',
        'Mejora la satisfacción de padres de familia (+10% en "muy satisfechos").',
        'El aprendizaje experiencial es la estrategia más valorada por los tres grupos.',
      ],
      alertas: [
        'Persisten barreras: acceso a tecnología, formación docente y apoyo institucional.',
      ]
    }
  },
  {
    id: 'recomendaciones',
    label: 'Recomend-',
    sublabel: 'aciones',
    color: '#f97316',
    colorDark: '#c2410c',
    textColor: '#fff',
    icon: Lightbulb,
    size: 'sm',
    pos: { bottom: '6%', right: '18%' },
    modal: {
      title: '💡 Recomendaciones',
      lista: [
        { item: 'Adaptar estrategias al contexto rural específico', detalle: 'Personalización curricular para comunidades agropecuarias' },
        { item: 'Invertir en infraestructura tecnológica y conectividad', detalle: 'Prioridad en zonas rurales de Manabí' },
        { item: 'Fortalecer la formación docente continua', detalle: 'Programas de actualización pedagógica' },
        { item: 'Fomentar investigación colaborativa academia-comunidad', detalle: 'Alianzas entre universidades y comunidades rurales' },
        { item: 'Desarrollar políticas educativas con enfoque en sostenibilidad', detalle: 'Marcos institucionales para la innovación pedagógica' },
      ]
    }
  },
];

const STATS_CARDS = [
  {
    id: 'estudiantes',
    n: 60,
    label: 'Estudiantes',
    sublabel: 'Bachillerato Técnico Agropecuario',
    icon: GraduationCap,
    color: '#0ea5e9',
    bg: '#e0f2fe',
    detalle: {
      title: 'Grupo de Estudiantes',
      items: [
        'Nivel bachillerato técnico agropecuario',
        'Unidad Educativa Fiscal San Isidro — Manabí',
        'Participaron en pre-test y post-test (12 semanas)',
        'Estrategia preferida (post): Aprendizaje experiencial 45%',
        'Comprensión sostenibilidad: +25% (30% → 55%)',
        'Motivación prácticas sostenibles: +25%',
      ]
    }
  },
  {
    id: 'padres',
    n: 45,
    label: 'Padres de familia',
    sublabel: 'Evaluaron impacto en el hogar',
    icon: Users,
    color: '#f97316',
    bg: '#fff7ed',
    detalle: {
      title: 'Grupo de Padres de Familia',
      items: [
        'Representantes del grupo familiar de los estudiantes',
        'Evaluaron la efectividad de cada estrategia pedagógica',
        '"Muy satisfechos" pasó de 15 a 25 personas (+10%)',
        'Estrategia más valorada: Aprendizaje experiencial 70%',
        '"Muy importante" la innovación pedagógica: 70% → 80%',
      ]
    }
  },
  {
    id: 'docentes',
    n: 14,
    label: 'Docentes',
    sublabel: 'Formadores del área agropecuaria',
    icon: BookOpen,
    color: '#0ea5e9',
    bg: '#e0f2fe',
    detalle: {
      title: 'Grupo de Docentes',
      items: [
        'Profesores del área técnica agropecuaria',
        'Aplicaron las estrategias innovadoras durante 12 semanas',
        'Mayor adopción: Tecnologías digitales (+15%)',
        'Barrera principal: Falta de recursos y tiempo (70%)',
        'Necesidad prioritaria: Formación docente (85%)',
      ]
    }
  },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function BubbleSize(size: string) {
  if (size === 'lg') return { w: 180, h: 180, font: 16, subfont: 13 };
  if (size === 'md') return { w: 150, h: 150, font: 14, subfont: 11 };
  return { w: 118, h: 118, font: 12, subfont: 10 };
}

// ─── MODAL ───────────────────────────────────────────────────────────────────

function Modal({ bubble, onClose }: { bubble: typeof BUBBLES[0]; onClose: () => void }) {
  const m = bubble.modal as any;
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.8, y: 60, opacity: 0 }}
          transition={{ type: 'spring', damping: 22, stiffness: 260 }}
          className="relative bg-white border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b-4 border-black"
            style={{ background: bubble.color }}>
            <h2 className="text-2xl font-black text-white uppercase tracking-wide leading-tight">{m.title}</h2>
            <button onClick={onClose} className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors flex-shrink-0 ml-4">
              <X size={20} />
            </button>
          </div>

          <div className="p-8 space-y-6">
            {/* sections (key-value pairs) */}
            {m.sections?.map((s: any, i: number) => (
              <div key={i} className="border-l-4 pl-4" style={{ borderColor: bubble.color }}>
                <p className="text-[11px] font-black uppercase tracking-widest mb-1" style={{ color: bubble.colorDark }}>{s.label}</p>
                <p className="text-gray-800 font-medium leading-snug">{s.value}</p>
              </div>
            ))}

            {/* muestra */}
            {m.muestra && (
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: bubble.colorDark }}>Muestra del estudio</p>
                <div className="grid grid-cols-3 gap-4">
                  {m.muestra.map((g: any, i: number) => (
                    <div key={i} className="border-2 border-black rounded-xl p-4 text-center" style={{ background: bubble.color + '18' }}>
                      <p className="text-4xl font-black" style={{ color: bubble.colorDark }}>{g.n}</p>
                      <p className="text-sm font-bold text-gray-700 mt-1">{g.grupo}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* lista */}
            {m.lista?.map((item: any, i: number) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ background: bubble.color }} />
                <div>
                  <p className="font-black text-gray-900">{item.item ?? item}</p>
                  {item.detalle && <p className="text-sm text-gray-500 mt-0.5">{item.detalle}</p>}
                </div>
              </div>
            ))}

            {/* subsections */}
            {m.subsections?.map((sub: any, si: number) => (
              <div key={si}>
                <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: bubble.colorDark }}>{sub.subtitle}</p>
                {sub.rows && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-2 border-black">
                      <thead>
                        <tr style={{ background: bubble.color + '22' }}>
                          {['Indicador', sub.rows[0]?.unit ? 'Antes' : 'Pre', sub.rows[0]?.unit ? 'Después' : 'Post', 'Δ'].map(h => (
                            <th key={h} className="border border-gray-300 px-3 py-2 text-left font-black text-xs uppercase">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sub.rows.map((r: any, ri: number) => (
                          <tr key={ri} className={ri % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                            <td className="border border-gray-200 px-3 py-2 font-medium">{r.label}</td>
                            <td className="border border-gray-200 px-3 py-2 text-center text-gray-500">{r.pre}</td>
                            <td className="border border-gray-200 px-3 py-2 text-center font-bold">{r.post}</td>
                            <td className={`border border-gray-200 px-3 py-2 text-center font-black ${r.up ? 'text-emerald-600' : 'text-red-500'}`}>{r.delta}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {sub.lista && (
                  <ul className="space-y-1.5 mt-2">
                    {sub.lista.map((l: string, li: number) => (
                      <li key={li} className="flex gap-2 items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: bubble.color }} />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
                {sub.tabla && (
                  <div className="space-y-2 mt-2">
                    {sub.tabla.map((t: any, ti: number) => (
                      <div key={ti}>
                        <div className="flex justify-between text-sm mb-0.5">
                          <span className="font-medium text-gray-700">{t.concepto}</span>
                          <span className="font-black" style={{ color: bubble.colorDark }}>{t.pct}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full border border-gray-200 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${t.pct}%` }}
                            transition={{ delay: ti * 0.1, duration: 0.6, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ background: bubble.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* positivas / alertas */}
            {m.positivas?.map((p: string, i: number) => (
              <div key={i} className="flex gap-3 items-start bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg px-4 py-3">
                <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">{p}</p>
              </div>
            ))}
            {m.alertas?.map((a: string, i: number) => (
              <div key={i} className="flex gap-3 items-start bg-amber-50 border-l-4 border-amber-500 rounded-r-lg px-4 py-3">
                <AlertTriangle size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-800">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── STAT CARD MODAL ─────────────────────────────────────────────────────────
function StatModal({ card, onClose }: { card: typeof STATS_CARDS[0]; onClose: () => void }) {
  const Icon = card.icon;
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[500] flex items-center justify-center p-4"
        style={{ background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.85, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.85, y: 40 }}
          transition={{ type: 'spring', damping: 22 }}
          className="bg-white border-4 border-black shadow-[10px_10px_0_0_#000] rounded-2xl max-w-md w-full overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="px-8 py-6 flex items-center gap-4 border-b-4 border-black" style={{ background: card.color }}>
            <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
              <Icon size={32} className="text-white" />
            </div>
            <div>
              <p className="text-4xl font-black text-white">{card.n}</p>
              <p className="text-white/90 font-bold text-lg">{card.label}</p>
            </div>
            <button onClick={onClose} className="ml-auto w-10 h-10 bg-black/30 text-white rounded-full flex items-center justify-center hover:bg-black/50 transition-colors">
              <X size={18} />
            </button>
          </div>
          <div className="p-8 space-y-3">
            <p className="text-[11px] font-black uppercase tracking-widest mb-4" style={{ color: card.color }}>{card.detalle.title}</p>
            {card.detalle.items.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: card.color }} />
                <p className="text-gray-700 text-sm leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── FLOATING BUBBLE ─────────────────────────────────────────────────────────
function Bubble({ b, onClick }: { b: typeof BUBBLES[0]; onClick: () => void }) {
  const Icon = b.icon;
  const sz = BubbleSize(b.size);
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 18, stiffness: 200, delay: Math.random() * 0.4 }}
      whileHover={{ scale: 1.08, y: -6 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="absolute group"
      style={{
        ...b.pos,
        width: sz.w,
        height: sz.h,
      }}
      aria-label={`Ver detalle: ${b.label} ${b.sublabel}`}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-full blur-xl transition-opacity duration-300"
        style={{ background: b.color, opacity: hovered ? 0.4 : 0.15, transform: 'scale(1.2)' }}
      />
      {/* Circle */}
      <div
        className="relative w-full h-full rounded-full border-4 border-black flex flex-col items-center justify-center shadow-[6px_6px_0_0_#000] transition-shadow duration-200 overflow-hidden"
        style={{ background: hovered ? b.colorDark : b.color }}
      >
        {/* Icon bg */}
        <div className="absolute top-3 right-3 opacity-20">
          <Icon size={sz.w * 0.45} />
        </div>
        <Icon size={sz.w * 0.22} className="text-white mb-1 relative z-10" />
        <p className="text-white font-black text-center leading-tight relative z-10 px-2" style={{ fontSize: sz.font }}>
          {b.label}
        </p>
        <p className="text-white/80 text-center leading-tight relative z-10 px-2 whitespace-pre-line" style={{ fontSize: sz.subfont }}>
          {b.sublabel}
        </p>
        {/* Plus badge */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-[2px_2px_0_0_#000] z-10 border-2 border-black">
          <Plus size={12} style={{ color: b.color }} strokeWidth={3} />
        </div>
      </div>
    </motion.button>
  );
}

// ─── CONNECTOR LINES (SVG decorative) ────────────────────────────────────────
function ConnectorLines() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow-teal" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" opacity="0.5" />
        </marker>
        <marker id="arrow-orange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L8,3 z" fill="#f97316" opacity="0.5" />
        </marker>
      </defs>
      {/* Central radial lines from center */}
      {[
        { x1: '50%', y1: '50%', x2: '14%', y2: '18%', color: '#0ea5e9' },
        { x1: '50%', y1: '50%', x2: '87%', y2: '16%', color: '#f97316' },
        { x1: '50%', y1: '50%', x2: '10%', y2: '42%', color: '#0ea5e9' },
        { x1: '50%', y1: '50%', x2: '92%', y2: '42%', color: '#f97316' },
        { x1: '50%', y1: '50%', x2: '12%', y2: '68%', color: '#0ea5e9' },
        { x1: '50%', y1: '50%', x2: '90%', y2: '68%', color: '#f97316' },
        { x1: '50%', y1: '50%', x2: '28%', y2: '88%', color: '#0ea5e9' },
        { x1: '50%', y1: '50%', x2: '72%', y2: '88%', color: '#f97316' },
      ].map((l, i) => (
        <line
          key={i}
          x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
          stroke={l.color}
          strokeWidth="1.5"
          strokeDasharray="6 4"
          opacity="0.35"
          markerEnd={l.color === '#0ea5e9' ? 'url(#arrow-teal)' : 'url(#arrow-orange)'}
        />
      ))}
    </svg>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────
interface Props {
  onBack: () => void;
}

export default function MapaConceptual3497({ onBack }: Props) {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [activeStatModal, setActiveStatModal] = useState<string | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const activeBubble = BUBBLES.find(b => b.id === activeModal);
  const activeStatCard = STATS_CARDS.find(c => c.id === activeStatModal);

  return (
    <div className="relative min-h-screen bg-[#f0f9ff] font-sans overflow-x-hidden selection:bg-[#0ea5e9] selection:text-white">
      {/* Ambient BG */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-sky-300/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-300/15 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-teal-200/20 blur-[100px] rounded-full" />
      </div>

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-5 py-2.5 border-4 border-black hover:bg-[#0ea5e9] transition-all shadow-[4px_4px_0_0_#000] active:shadow-none translate-y-[-2px] active:translate-y-0 flex-shrink-0"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-black uppercase text-xs tracking-widest hidden sm:inline">Volver</span>
          </button>

          <div className="flex-1 min-w-0 text-center">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="bg-[#0ea5e9] text-white px-3 py-1 border-4 border-black font-black text-xs uppercase tracking-widest shadow-[3px_3px_0_0_#000] hidden md:block">MAPA MENTAL</div>
              <h1 className="font-black text-sm md:text-base uppercase tracking-tight text-gray-900 truncate">
                Innovación Pedagógica en Bachillerato Técnico Agropecuario
              </h1>
              <div className="bg-[#f97316] text-white px-3 py-1 border-4 border-black font-black text-xs uppercase tracking-widest shadow-[3px_3px_0_0_#000] hidden md:block">N.39 · 2025</div>
            </div>
            <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-0.5 hidden md:block">
              Dueñas Basurto &amp; Zambrano Vera · Revista Panamericana de Pedagogía
            </p>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Leaf size={20} className="text-[#0ea5e9]" />
            <span className="font-mono text-[10px] uppercase font-black tracking-widest text-gray-400 hidden lg:inline">
              RPP_2025 // INTERACTIVO
            </span>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="pt-28 pb-16 px-4 max-w-7xl mx-auto">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-white border-4 border-black shadow-[4px_4px_0_0_#000] px-6 py-3 mb-4">
            <Leaf size={16} className="text-[#0ea5e9]" />
            <span className="font-black text-xs uppercase tracking-widest text-gray-700">Haz click en cada burbuja para explorar el contenido</span>
            <Plus size={16} className="text-[#f97316]" />
          </div>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Explora los ejes temáticos del artículo. Cada nodo abre un modal con datos detallados, tablas comparativas y hallazgos clave.
          </p>
        </motion.div>

        {/* ── MIND MAP CANVAS ── */}
        <div className="relative w-full" style={{ height: 680, maxHeight: '80vw', minHeight: 520 }}>
          <ConnectorLines />

          {/* Central Node */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 14, stiffness: 180, delay: 0.1 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 20 }}
          >
            <div className="relative">
              {/* Outer ring pulse */}
              <motion.div
                animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.15, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-0 rounded-full border-4 border-[#0ea5e9] scale-125"
              />
              <div
                className="relative w-[200px] h-[200px] rounded-full border-4 border-black bg-gradient-to-br from-[#0ea5e9] to-[#0369a1] flex flex-col items-center justify-center shadow-[8px_8px_0_0_#000] text-center px-4"
              >
                <Zap size={32} className="text-white mb-2" />
                <p className="text-white font-black text-sm leading-tight">Innovación</p>
                <p className="text-white font-black text-sm leading-tight">Pedagógica</p>
                <p className="text-white/70 font-bold text-[10px] mt-1 leading-tight">Bachillerato Técnico</p>
                <p className="text-white/70 font-bold text-[10px] leading-tight">Agropecuario</p>
                <div className="mt-2 bg-[#f97316] text-white text-[9px] font-black uppercase tracking-widest px-2 py-0.5 border-2 border-black rounded-full">
                  Dueñas &amp; Zambrano · 2025
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bubbles */}
          {BUBBLES.map(b => (
            <Bubble key={b.id} b={b} onClick={() => setActiveModal(b.id)} />
          ))}
        </div>

        {/* ── LEGEND ── */}
        <div className="flex items-center justify-center gap-6 mt-4 mb-10">
          {[
            { color: '#0ea5e9', label: 'Ejes Turquesa' },
            { color: '#f97316', label: 'Ejes Naranja' },
          ].map(l => (
            <div key={l.label} className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-black" style={{ background: l.color }} />
              <span className="text-xs font-black uppercase tracking-wide text-gray-600">{l.label}</span>
            </div>
          ))}
        </div>

        {/* ── STATS CARDS ── */}
        <div className="mt-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 flex-1 bg-black/10 rounded-full" />
            <h2 className="text-sm font-black uppercase tracking-[0.3em] text-gray-500">Participantes del estudio</h2>
            <div className="h-1 flex-1 bg-black/10 rounded-full" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {STATS_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.button
                  key={card.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.12, type: 'spring', damping: 18 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setActiveStatModal(card.id)}
                  className="group relative bg-white border-4 border-black shadow-[8px_8px_0_0_#000] hover:shadow-[12px_12px_0_0_#000] transition-all text-left overflow-hidden rounded-2xl"
                >
                  {/* Color bar top */}
                  <div className="h-2" style={{ background: card.color }} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className="w-14 h-14 rounded-full flex items-center justify-center border-4 border-black shadow-[4px_4px_0_0_#000] group-hover:scale-110 transition-transform"
                        style={{ background: card.color }}
                      >
                        <Icon size={26} className="text-white" />
                      </div>
                      <div className="bg-white border-2 border-black rounded-full w-8 h-8 flex items-center justify-center shadow-[2px_2px_0_0_#000]">
                        <Plus size={14} style={{ color: card.color }} strokeWidth={3} />
                      </div>
                    </div>
                    <p className="text-5xl font-black leading-none mb-1" style={{ color: card.color }}>{card.n}</p>
                    <p className="font-black text-gray-900 text-lg uppercase tracking-tight">{card.label}</p>
                    <p className="text-gray-500 text-xs mt-1 font-medium">{card.sublabel}</p>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4 pointer-events-none">
                    <span className="text-[10px] font-black uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full">Ver detalle</span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Citation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 p-6 bg-white border-4 border-black shadow-[6px_6px_0_0_#000] rounded-2xl max-w-3xl mx-auto"
        >
          <p className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] mb-2">Referencia bibliográfica</p>
          <p className="text-sm text-gray-700 font-medium leading-relaxed">
            Dueñas Basurto, C. G., &amp; Zambrano Vera, E. M. (2025). La innovación pedagógica y su aporte en la formación de bachilleres técnicos agropecuarios para implementar prácticas sostenibles.{' '}
            <em>Revista Panamericana de Pedagogía</em>, <em>39</em>.{' '}
            <a
              href="https://orcid.org/0009-0003-9258-2780"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0ea5e9] underline hover:text-[#0369a1] transition-colors"
            >
              ORCID: 0009-0003-9258-2780
            </a>
          </p>
        </motion.div>
      </main>

      {/* Modals */}
      {activeBubble && <Modal bubble={activeBubble} onClose={() => setActiveModal(null)} />}
      {activeStatCard && <StatModal card={activeStatCard} onClose={() => setActiveStatModal(null)} />}
    </div>
  );
}
