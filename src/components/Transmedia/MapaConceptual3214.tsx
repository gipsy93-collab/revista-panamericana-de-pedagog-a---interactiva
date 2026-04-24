import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring, useMotionTemplate } from 'motion/react';
import {
  ChevronLeft, X, Plus, MapPin, Users, Target, Zap, BarChart2, BookOpen,
  CheckCircle, Lightbulb, GraduationCap, Award, Sparkles, Binary, FlaskConical,
  TrendingUp, AlertTriangle, Leaf, Smartphone, Handshake, ArrowRight,
  Minimize2, Maximize2, RotateCcw, Info
} from 'lucide-react';

// ─── TYPES ───────────────────────────────────────────────────────────────────

type IconComponent = React.ComponentType<{ size?: number; className?: string; style?: React.CSSProperties; strokeWidth?: number }>;

interface BubbleData {
  id: string;
  label: string;
  sublabel: string;
  color: string;
  icon: IconComponent;
  size: number;
  initialPos: { x: number; y: number };
  modal: {
    title: string;
    sections?: { label: string; value: string }[];
    muestra?: { grupo: string; n: number }[];
    lista?: string[];
    tabla?: { header: string[]; rows: (string | number)[][] };
    positivas?: string[];
    citas?: string[];
  };
}

interface StatCard {
  id: string;
  n: number;
  label: string;
  icon: IconComponent;
  color: string;
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const BUBBLES_DATA: BubbleData[] = [
  {
    id: 'contexto',
    label: 'Contexto',
    sublabel: 'Ecuador Rural',
    color: '#4f46e5',
    icon: MapPin,
    size: 140,
    initialPos: { x: 18, y: 18 },
    modal: {
      title: '📍 Contexto de la Investigación',
      sections: [
        { label: 'Ubicación', value: 'Parroquia San Isidro, cantón Sucre, provincia de Manabí, Ecuador' },
        { label: 'Institución', value: 'Unidad Educativa Fiscal San Isidro (UEFSI)' },
        { label: 'Año', value: '2023' },
        { label: 'Nivel', value: 'Bachillerato Técnico Agropecuario' },
        { label: 'Contexto', value: 'Ecuador presenta brecha significativa en acceso a educación entre zonas rurales y urbanas' },
      ],
      muestra: [
        { grupo: 'Estudiantes', n: 60 },
        { grupo: 'Padres de familia', n: 45 },
        { grupo: 'Docentes', n: 14 },
      ],
      citas: [
        '"La educación agropecuaria afronta desafíos ambientales y sociales en el siglo XXI, necesita una transformación profunda en la formación de sus futuros profesionales" — Dueñas Basurto & Zambrano Vera, 2025',
      ],
    }
  },
  {
    id: 'objetivo',
    label: 'Objetivo',
    sublabel: 'Hipótesis & Diseño',
    color: '#f59e0b',
    icon: Target,
    size: 130,
    initialPos: { x: 82, y: 18 },
    modal: {
      title: '🎯 Objetivo e Hipótesis',
      sections: [
        { label: 'Objetivo General', value: 'Analizar el potencial de la innovación pedagógica en la formación de bachilleres técnicos agropecuarios en prácticas sostenibles.' },
        { label: 'Tipo de Estudio', value: 'Cuasiexperimental, mixto, exploratorio y descriptivo' },
        { label: 'Diseño', value: 'Pre-test → Intervención (12 semanas) → Post-test' },
        { label: 'Muestreo', value: 'Aleatorio simple probabilístico, 100% de la población' },
      ],
      citas: [
        '"Los estudiantes que participan en espacios con innovación pedagógica, basada en el aprendizaje experiencial y el uso de tecnologías digitales, demostrarán mayor comprensión de los principios de desarrollo sostenible y mayor disposición para implementar prácticas agrícolas sostenibles" — Dueñas Basurto & Zambrano Vera, 2025',
      ],
    }
  },
  {
    id: 'marco',
    label: 'Marco Teórico',
    sublabel: '4 Pilares',
    color: '#10b981',
    icon: BookOpen,
    size: 125,
    initialPos: { x: 12, y: 48 },
    modal: {
      title: '📚 Fundamentación Teórica',
      lista: [
        'Aprendizaje Basado en Proyectos (ABP): desarrollo de habilidades técnicas y analíticas para prácticas agrícolas sostenibles — Bernal Serpa & Santander Patiño, 2020',
        'Integración de TIC en educación rural: expanden conocimiento sobre prácticas agrícolas sostenibles y desarrollan habilidades digitales — Mendoza-Saltos & Bolívar, 2022',
        'Desarrollo Sostenible: enfoque holístico que integra aspectos económicos, sociales y ambientales — Lara-Tambaco, 2022',
        'Aprendizaje Experiencial: conecta conceptos teóricos con la realidad agrícola, fomentando reflexión crítica',
      ],
      sections: [
        { label: 'Referencia internacional', value: 'Declaración de Bonn sobre Educación para el Desarrollo Sostenible' },
        { label: 'Alineación', value: 'Objetivos de Desarrollo Sostenible (ODS)' },
      ],
    }
  },
  {
    id: 'estrategias',
    label: 'Estrategias',
    sublabel: 'Intervención',
    color: '#4f46e5',
    icon: FlaskConical,
    size: 130,
    initialPos: { x: 88, y: 48 },
    modal: {
      title: '🔧 Estrategias Implementadas (12 semanas)',
      lista: [
        'Aprendizaje experiencial: proyectos, visitas a fincas, práctica en campo',
        'Tecnologías digitales: apps móviles para agricultura, simuladores, plataformas educativas',
        'Trabajo colaborativo: dinámicas grupales, resolución de problemas reales',
        'Aprendizaje Basado en Problemas (ABP): casos reales del sector agropecuario local',
      ],
      sections: [
        { label: 'Instrumentos', value: 'Cuestionarios, entrevistas, hojas de observación' },
        { label: 'Fase 1', value: 'Pre-test (1 semana): evaluación inicial' },
        { label: 'Fase 2', value: 'Intervención (12 semanas): implementación de estrategias innovadoras' },
        { label: 'Fase 3', value: 'Post-test (1 semana): evaluación de cambios' },
      ],
    }
  },
  {
    id: 'resultados',
    label: 'Resultados',
    sublabel: 'Impacto Medido',
    color: '#f59e0b',
    icon: BarChart2,
    size: 150,
    initialPos: { x: 22, y: 72 },
    modal: {
      title: '📈 Hallazgos Clave Pre/Post',
      tabla: {
        header: ['Variable', 'Pre-test', 'Post-test', 'Cambio'],
        rows: [
          ['Comprensión desarrollo sostenible ("Mucho")', '20%', '40%', '+20%'],
          ['Motivación prácticas sostenibles ("Mucho")', '20%', '40%', '+20%'],
          ['Apps móviles para agricultura', '20%', '40%', '+20%'],
          ['Redes sociales para información', '40%', '50%', '+10%'],
          ['Padres "Muy satisfechos"', '15%', '25%', '+10%'],
          ['Padres: innovación "muy importante"', '70%', '80%', '+10%'],
        ],
      },
      sections: [
        { label: 'Hallazgo clave', value: 'El uso de apps móviles para agricultura aumentó 20%, indicando mayor accesibilidad en contextos rurales con conectividad limitada' },
        { label: 'Estrategia preferida', value: 'Aprendizaje experiencial (45% post-test), seguido de uso de tecnologías digitales (40%)' },
      ],
    }
  },
  {
    id: 'docentes',
    label: 'Docentes',
    sublabel: 'Desafíos',
    color: '#ef4444',
    icon: AlertTriangle,
    size: 120,
    initialPos: { x: 78, y: 68 },
    modal: {
      title: '⚠️ Perspectiva Docente',
      tabla: {
        header: ['Desafío', '% Docentes'],
        rows: [
          ['Falta de recursos y tiempo', '70%'],
          ['Falta de capacitación docente', '60%'],
          ['Resistencia al cambio', '40%'],
          ['Falta de apoyo institucional', '30%'],
        ],
      },
      sections: [
        { label: 'Necesidad #1', value: 'Capacitación docente (85%)' },
        { label: 'Necesidad #2', value: 'Acceso a recursos educativos y tecnológicos (80%)' },
        { label: 'Necesidad #3', value: 'Tiempo para planificación (70%)' },
        { label: 'Necesidad #4', value: 'Apoyo de la institución educativa (60%)' },
      ],
      positivas: [
        'Uso de tecnologías digitales aumentó 15% en frecuencia docente',
        'Trabajo colaborativo incrementó 10%',
        'Aprendizaje experiencial mantuvo estabilidad (+5%)',
      ],
    }
  },
  {
    id: 'conclusiones',
    label: 'Conclusiones',
    sublabel: '5 Hallazgos',
    color: '#4f46e5',
    icon: CheckCircle,
    size: 125,
    initialPos: { x: 50, y: 85 },
    modal: {
      title: '🎯 Conclusiones del Estudio',
      lista: [
        'La innovación pedagógica mejora significativamente el aprendizaje de prácticas sostenibles en bachillerato técnico agropecuario',
        'El aprendizaje experiencial y el trabajo colaborativo fomentan mayor compromiso ambiental y visión a largo plazo',
        'Las herramientas digitales enfrentan desafíos: falta de familiaridad, dificultades de acceso a internet y dispositivos, integración curricular insuficiente',
        'El impacto positivo en comprensión y motivación destaca el potencial transformador de la educación para fomentar actitudes responsables hacia el medio ambiente',
        'Persisten barreras estructurales que requieren mayor inversión en infraestructura y capacitación docente en zonas rurales',
      ],
      citas: [
        '"Este aumento se observó cuando se implementaron herramientas de innovación pedagógica. Sin embargo, a pesar de estos avances, persisten algunas barreras que limitan la plena integración de estas prácticas" — Dueñas Basurto & Zambrano Vera, 2025',
      ],
    }
  },
  {
    id: 'recomendaciones',
    label: 'Implicaciones',
    sublabel: '4 Ámbitos',
    color: '#f59e0b',
    icon: Lightbulb,
    size: 120,
    initialPos: { x: 88, y: 80 },
    modal: {
      title: '💡 Implicaciones y Recomendaciones',
      lista: [
        'Política educativa: invertir en infraestructura tecnológica y capacitación docente en zonas rurales para reducir la brecha digital',
        'Instituciones educativas: revisar y adaptar currículos para cobertura integral de principios de desarrollo sostenible',
        'Práctica docente: acceso a recursos educativos adecuados y tiempo dedicado para desarrollar materiales y planificar lecciones',
        'Formación técnica: integración prioritaria de metodologías activas (ABP, resolución de problemas reales)',
      ],
      sections: [
        { label: 'Limitación #1', value: 'Muestra reducida, sin grupo control, dificulta generalización' },
        { label: 'Limitación #2', value: 'Contexto específico (solo 20% de establecimientos de la parroquia)' },
        { label: 'Limitación #3', value: '12 semanas pueden ser insuficientes para consolidar cambios de largo plazo' },
        { label: 'Inconsistencia', value: 'Abstract menciona 30/20/10 vs. resumen 60/45/14 en datos muestrales' },
      ],
    }
  },
];

// ─── SUB-COMPONENTS ─────────────────────────────────────────────────────────

const ConnectorLine = ({ fromX, fromY, toX, toY }: { fromX: any, fromY: any, toX: any, toY: any }) => {
  // Usar resortes para un movimiento más fluido y "premium"
  const springConfig = { damping: 25, stiffness: 200 };
  const sx1 = useSpring(useTransform(fromX, (v: number) => `${v}%`), springConfig);
  const sy1 = useSpring(useTransform(fromY, (v: number) => `${v}%`), springConfig);
  const sx2 = useSpring(useTransform(toX, (v: number) => `${v}%`), springConfig);
  const sy2 = useSpring(useTransform(toY, (v: number) => `${v}%`), springConfig);

  return (
    <motion.line
      x1={sx1}
      y1={sy1}
      x2={sx2}
      y2={sy2}
      stroke="rgba(0,0,0,0.15)"
      strokeWidth="4"
      strokeDasharray="10 6"
      markerEnd="url(#arrow-blk)"
    />
  );
};

const BubbleNode = ({ bubble, pos, containerRef, index, onSelect }: { bubble: BubbleData, pos: { x: any, y: any }, containerRef: React.RefObject<HTMLDivElement>, index: number, onSelect: () => void }) => {
  const x = useMotionTemplate`calc(${pos.x}vw - 50%)`;
  const y = useMotionTemplate`calc(${pos.y}vh - 50%)`;

  return (
    <motion.div
      style={{
        x, y,
        width: bubble.size,
        height: bubble.size,
        left: 0, top: 0,
        position: 'absolute'
      }}
      className="z-20 cursor-grab active:cursor-grabbing flex flex-col items-center"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', damping: 15, delay: index * 0.1 }}
    >
      <motion.button
        onClick={onSelect}
        onPan={(_e, info) => {
          if (containerRef.current) {
            const { width, height } = containerRef.current.getBoundingClientRect();
            const nextX = pos.x.get() + (info.delta.x / width) * 100;
            const nextY = pos.y.get() + (info.delta.y / height) * 100;
            pos.x.set(Math.max(5, Math.min(95, nextX)));
            pos.y.set(Math.max(12, Math.min(88, nextY)));
          }
        }}
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.95 }}
        className="w-full h-full rounded-full border-[6px] border-black flex flex-col items-center justify-center shadow-[10px_10px_0_0_#000] active:shadow-none text-white relative"
        style={{ background: bubble.color }}
      >
        <div className="absolute inset-0 halftone opacity-20 pointer-events-none rounded-full" />
        <bubble.icon size={Math.round(bubble.size * 0.25)} className="mb-1 drop-shadow-[2px_2px_0_#000]" />
        <span
          className="font-display text-center leading-[0.8] px-2 drop-shadow-[2px_2px_0_#000]"
          style={{ fontSize: bubble.size * 0.16 }}
        >
          {bubble.label}
        </span>
        <span className="font-mono text-[9px] uppercase font-black opacity-60 mt-1">{bubble.sublabel}</span>
        <div className="absolute bottom-2 right-2 bg-white text-black border-2 border-black rounded-full p-1 shadow-[2px_2px_0_0_#000]">
          <Plus size={10} strokeWidth={4} />
        </div>
      </motion.button>
    </motion.div>
  );
};

const Modal = ({ bubble, onClose }: { bubble: BubbleData; onClose: () => void }) => {
  const m = bubble.modal;
  return (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[600] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          key="modal-content"
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="bg-white border-[6px] border-black shadow-[15px_15px_0_0_#000] max-w-2xl w-full max-h-[85vh] overflow-y-auto"
          onClick={e => e.stopPropagation()}
        >
          <div className="p-8 border-b-[6px] border-black text-white" style={{ background: bubble.color }}>
            <h2 className="text-3xl md:text-4xl font-display uppercase leading-[0.8] drop-shadow-[3px_3px_0_#000]">
              {m.title}
            </h2>
          </div>
          <div className="p-8 space-y-6">
            {m.sections?.map((s, i) => (
              <div key={i} className="border-l-8 pl-6 border-black/10 transition-colors hover:border-black">
                <p className="text-[10px] font-mono font-black uppercase opacity-40 mb-1">// {s.label}</p>
                <p className="text-lg font-bold">{s.value}</p>
              </div>
            ))}
            {m.muestra && (
              <div className="grid grid-cols-3 gap-4">
                {m.muestra.map((g, i) => (
                  <div key={i} className="border-4 border-black p-4 text-center halftone-md">
                    <p className="text-4xl font-display" style={{ color: bubble.color }}>{g.n}</p>
                    <p className="text-[10px] font-mono font-black uppercase">{g.grupo}</p>
                  </div>
                ))}
              </div>
            )}
            {m.tabla && (
              <div className="overflow-x-auto">
                <table className="w-full border-4 border-black">
                  <thead>
                    <tr className="bg-black text-white">
                      {m.tabla.header.map((h, i) => (
                        <th key={i} className="p-3 text-left text-[10px] font-mono font-black uppercase">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {m.tabla.rows.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? 'bg-zinc-50' : 'bg-white'}>
                        {row.map((cell, j) => (
                          <td key={j} className={`p-3 text-sm font-bold ${j === row.length - 1 ? 'text-emerald-600' : ''}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            {m.lista && (
              <ul className="space-y-4">
                {m.lista.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start bg-zinc-50 p-4 border-2 border-black">
                    <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-display text-xl shrink-0">
                      {i + 1}
                    </div>
                    <p className="font-bold text-sm leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            )}
            {m.positivas && (
              <ul className="space-y-3">
                {m.positivas.map((item, i) => (
                  <li key={i} className="flex gap-3 items-center bg-emerald-50 p-3 border-2 border-emerald-200">
                    <TrendingUp size={18} className="text-emerald-600 shrink-0" />
                    <p className="font-bold text-sm text-emerald-800">{item}</p>
                  </li>
                ))}
              </ul>
            )}
            {m.citas && (
              <div className="space-y-3">
                {m.citas.map((cita, i) => (
                  <blockquote key={i} className="border-l-4 border-amber-400 pl-4 py-2 bg-amber-50 italic text-sm text-zinc-700">
                    {cita}
                  </blockquote>
                ))}
              </div>
            )}
            <button
              onClick={onClose}
              className="w-full py-4 bg-black text-white font-display text-2xl uppercase hover:bg-zinc-800 transition-colors shadow-[6px_6px_0_0_#aaa]"
            >
              Cerrar
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function MapaConceptual3214({ onBack }: { onBack: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);

  // MotionValues (Sincronizados con la captura de pantalla del usuario)
  const centralX = useMotionValue(50);
  const centralY = useMotionValue(42);

  const posContextoX = useMotionValue(22);     const posContextoY = useMotionValue(22);
  const posObjetivoX = useMotionValue(78);     const posObjetivoY = useMotionValue(22);
  const posMarcoX = useMotionValue(11);        const posMarcoY = useMotionValue(42);
  const posEstrategiasX = useMotionValue(89);  const posEstrategiasY = useMotionValue(42);
  const posResultadosX = useMotionValue(18);    const posResultadosY = useMotionValue(65);
  const posRecomendacionesX = useMotionValue(80); const posRecomendacionesY = useMotionValue(63);
  const posDocentesX = useMotionValue(69);     const posDocentesY = useMotionValue(80);
  const posConclusionesX = useMotionValue(50); const posConclusionesY = useMotionValue(76);

  const bubblePositions: Record<string, { x: any, y: any }> = {
    contexto: { x: posContextoX, y: posContextoY },
    objetivo: { x: posObjetivoX, y: posObjetivoY },
    marco: { x: posMarcoX, y: posMarcoY },
    estrategias: { x: posEstrategiasX, y: posEstrategiasY },
    resultados: { x: posResultadosX, y: posResultadosY },
    docentes: { x: posDocentesX, y: posDocentesY },
    conclusiones: { x: posConclusionesX, y: posConclusionesY },
    recomendaciones: { x: posRecomendacionesX, y: posRecomendacionesY },
  };

  // Pre-compute transforms at top level (MUST NOT be conditional)
  const springConfig = { damping: 30, stiffness: 300 };
  const sCentralX = useSpring(centralX, springConfig);
  const sCentralY = useSpring(centralY, springConfig);
  
  const centralTransformX = useMotionTemplate`calc(${sCentralX}vw - 50%)`;
  const centralTransformY = useMotionTemplate`calc(${sCentralY}vh - 50%)`;

  useEffect(() => {
    setIsReady(true);
    const timer = setTimeout(() => setShowInstructions(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const resetPositions = useCallback(() => {
    centralX.set(50); centralY.set(42);
    posContextoX.set(22); posContextoY.set(22);
    posObjetivoX.set(78); posObjetivoY.set(22);
    posMarcoX.set(11); posMarcoY.set(42);
    posEstrategiasX.set(89); posEstrategiasY.set(42);
    posResultadosX.set(18); posResultadosY.set(65);
    posRecomendacionesX.set(80); posRecomendacionesY.set(63);
    posDocentesX.set(69); posDocentesY.set(80);
    posConclusionesX.set(50); posConclusionesY.set(76);
  }, [centralX, centralY, posContextoX, posContextoY, posObjetivoX, posObjetivoY, posMarcoX, posMarcoY, posEstrategiasX, posEstrategiasY, posResultadosX, posResultadosY, posDocentesX, posDocentesY, posConclusionesX, posConclusionesY, posRecomendacionesX, posRecomendacionesY]);

  const activeBubble = BUBBLES_DATA.find(b => b.id === activeModal);

  return (
    <div className="relative h-screen w-full bg-white font-sans overflow-hidden select-none" ref={containerRef}>
      <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-[#FDFD96] opacity-10 pointer-events-none" />

      <header className="absolute top-0 left-0 right-0 z-50 bg-white border-b-8 border-black p-4 md:p-6 flex items-center justify-between shadow-[0_10px_0_rgba(0,0,0,0.05)]">
        <button
          onClick={onBack}
          className="bg-black text-white px-4 md:px-8 py-3 border-4 border-black font-display text-sm md:text-xl uppercase hover:bg-indigo-600 transition-all shadow-[6px_6px_0_0_#000]"
        >
          ← Salir del Lab
        </button>
        <div className="text-center hidden md:block">
          <h1 className="font-display text-2xl md:text-5xl uppercase tracking-tighter leading-none italic">
            Laboratorio de Auditoría Panamericana
          </h1>
          <p className="font-mono text-[10px] uppercase font-black opacity-30 tracking-[0.3em]">
            REF_3214 // MANABÍ // ECUADOR // 2025
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={resetPositions}
            className="w-10 h-10 md:w-12 md:h-12 bg-zinc-100 border-4 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center hover:bg-zinc-200 transition-colors"
          >
            <RotateCcw size={18} />
          </button>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-600 border-4 border-black shadow-[4px_4px_0_0_#000] flex items-center justify-center rotate-3">
            <Award className="text-white" size={20} />
          </div>
        </div>
      </header>

      <AnimatePresence>
        {showInstructions && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[150] bg-black text-white px-6 py-3 border-4 border-white shadow-[8px_8px_0_0_#4f46e5] font-mono text-xs uppercase font-black"
          >
            <span className="flex items-center gap-2">
              <Info size={16} />
              Arrastra los nodos para reorganizar el mapa • Click para ver detalles
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-24 md:pt-32 h-screen relative">
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <marker id="arrow-blk" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
              <path d="M0,0 L0,10 L10,5 z" fill="#000" />
            </marker>
          </defs>
          {isReady && BUBBLES_DATA.map(b => (
            <ConnectorLine 
              key={`line-${b.id}`}
              fromX={centralX} 
              fromY={centralY} 
              toX={bubblePositions[b.id].x} 
              toY={bubblePositions[b.id].y} 
            />
          ))}
        </svg>

        {isReady && BUBBLES_DATA.map((b, index) => (
          <BubbleNode 
            key={`bubble-${b.id}`}
            bubble={b}
            pos={bubblePositions[b.id]}
            containerRef={containerRef}
            index={index}
            onSelect={() => setActiveModal(b.id)}
          />
        ))}

        {isReady && (
          <motion.div
            key="central-node"
            onPan={(_e, info) => {
              if (containerRef.current) {
                const { width, height } = containerRef.current.getBoundingClientRect();
                const nextX = centralX.get() + (info.delta.x / width) * 100;
                const nextY = centralY.get() + (info.delta.y / height) * 100;
                centralX.set(Math.max(20, Math.min(80, nextX)));
                centralY.set(Math.max(25, Math.min(75, nextY)));
              }
            }}
            style={{
              x: centralTransformX,
              y: centralTransformY,
              left: 0, top: 0,
              position: 'absolute'
            }}
            className="z-40 cursor-grab active:cursor-grabbing"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.01 }}
            whileTap={{ cursor: 'grabbing' }}
            transition={{ type: 'spring', damping: 12, delay: 0.5 }}
          >
            <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#4f46e5] max-w-[340px] md:max-w-[420px] w-full relative">
              <div className="absolute -top-3 -right-3 w-10 h-10 bg-indigo-600 border-2 border-black text-white flex items-center justify-center rotate-12 shadow-[2px_2px_0_0_#000]">
                <Binary size={18} />
              </div>
              
              <div className="space-y-4">
                <p className="font-mono text-[9px] font-black uppercase opacity-40 tracking-widest leading-none">
                  Artículo de Investigación // RPP_3214
                </p>
                
                <h2 className="font-display text-lg md:text-xl uppercase leading-[1.1] font-black border-b-4 border-black pb-4">
                  La innovación pedagógica y su aporte en la formación de bachilleres técnicos agropecuarios para implementar prácticas sostenibles
                </h2>
                
                <div className="space-y-2">
                  <p className="font-serif italic text-sm text-zinc-700 leading-tight">
                    Dueñas Basurto, C. G. & Zambrano Vera, E. M.
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-400 text-black px-2 py-0.5 border-2 border-black text-[9px] font-mono font-black uppercase">
                      DOI: 10.21555/rpp.3214
                    </span>
                    <span className="text-[9px] font-mono font-black uppercase opacity-30">
                      Ecuador · 2025
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t-2 border-black/5 flex items-center justify-between">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-600" />
                  <div className="w-2 h-2 rounded-full bg-amber-500" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <Sparkles size={14} className="opacity-20" />
              </div>
            </div>
          </motion.div>
        )}

        <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 z-[100] bg-white border-4 border-black p-3 md:p-4 shadow-[6px_6px_0_0_#000]">
          <p className="font-mono text-[8px] md:text-[10px] font-black uppercase opacity-40 text-right">DOI: 10.21555/rpp.3214<br />Rev. Panamericana de Pedagogía, N° 39 (2025)</p>
        </div>
      </main>

      {activeModal && activeBubble && (
        <Modal bubble={activeBubble} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
