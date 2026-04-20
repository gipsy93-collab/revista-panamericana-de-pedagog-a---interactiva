import React, { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  Check,
  Upload,
  FileText,
  User,
  Mail,
  Building2,
  BookOpen,
  AlertCircle,
  Send,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  ShieldCheck,
  ScrollText,
  X
} from 'lucide-react';
import { FilmGrain } from '../FilmGrain';
import { BrutalSticker, BrutalCard } from '../BrutalistLib';

interface Props {
  onBack: () => void;
}

// ─── CHECKLIST DATA ───────────────────────────────────────────────────────────
interface CheckItem {
  id: string;
  label: string;
}

interface CheckSection {
  title: string;
  icon: React.ElementType;
  color: string;
  items: CheckItem[];
}

const CHECKLIST: CheckSection[] = [
  {
    title: 'Originalidad y ética',
    icon: ShieldCheck,
    color: 'bg-rose-600',
    items: [
      { id: 'orig_1', label: 'El trabajo es original e inédito.' },
      { id: 'orig_2', label: 'No está en evaluación en otra revista.' },
      { id: 'orig_3', label: 'Todas las fuentes están citadas correctamente.' },
      { id: 'orig_4', label: 'No contiene plagio ni reutilización no declarada de textos previos.' },
    ],
  },
  {
    title: 'Identidad académica sin jerarquías',
    icon: User,
    color: 'bg-pop-blue',
    items: [
      { id: 'id_1', label: 'El manuscrito incluye tu institución y tu área de formación (p. ej., "Universidad X – Filosofía").' },
      { id: 'id_2', label: 'El manuscrito NO incluye tu nivel académico (pregrado, maestría, doctorado, semestre).' },
      { id: 'id_3', label: 'La biografía (si se incluye) solo menciona intereses de investigación.' },
      { id: 'id_4', label: 'No aparecen agradecimientos que revelen estatus estudiantil.' },
    ],
  },
  {
    title: 'Formato del manuscrito',
    icon: FileText,
    color: 'bg-pop-teal',
    items: [
      { id: 'fmt_1', label: 'Extensión entre 3.000 y 6.000 palabras.' },
      { id: 'fmt_2', label: 'Formato en APA, MLA o Chicago.' },
      { id: 'fmt_3', label: 'Archivo en formato editable (Word o equivalente).' },
      { id: 'fmt_4', label: 'Tablas, figuras y anexos correctamente rotulados.' },
    ],
  },
  {
    title: 'Estándares de Ciencia Abierta',
    icon: Sparkles,
    color: 'bg-pop-yellow',
    items: [
      { id: 'oa_1', label: 'Los datos, materiales o códigos (si aplica) están disponibles o descritos.' },
      { id: 'oa_2', label: 'El texto es claro, comprensible y estructurado.' },
      { id: 'oa_3', label: 'El resumen y las palabras clave están incluidos.' },
    ],
  },
  {
    title: 'Cesión de derechos',
    icon: ScrollText,
    color: 'bg-pop-pink',
    items: [
      { id: 'rights_1', label: 'Acepto la publicación en acceso abierto en repositorios (Zenodo/Mendeley).' },
      { id: 'rights_2', label: 'Comprendo que retengo la autoría, pero cedo derechos de difusión.' },
    ],
  },
  {
    title: 'Tipo de revisión y proceso editorial',
    icon: Eye,
    color: 'bg-zinc-800',
    items: [
      { id: 'rev_1', label: 'Entiendo que el Semillero no realiza revisión por pares.' },
      { id: 'rev_2', label: 'Comprendo que el proceso consiste en moderación técnica, que revisa ética, claridad y formato.' },
      { id: 'rev_3', label: 'Acepto que el editor puede solicitar ajustes formales.' },
      { id: 'rev_4', label: 'Comprendo que el trabajo será publicado como Objeto de Ciencia Abierta con DOI.' },
    ],
  },
];

const TOTAL_CHECKS = CHECKLIST.reduce((sum, s) => sum + s.items.length, 0);

// ─── FORM STEPS ───────────────────────────────────────────────────────────────
type Step = 'registro' | 'checklist' | 'manuscrito' | 'confirmacion';

export default function EnviarArticulo({ onBack }: Props) {
  // ── Step state ──
  const [step, setStep] = useState<Step>('registro');
  const [direction, setDirection] = useState(1);

  // ── Registro ──
  const [registro, setRegistro] = useState({
    nombre: '',
    email: '',
    institucion: '',
    area: '',
    password: '',
    confirmPassword: '',
    aceptaTerminos: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [registroErrors, setRegistroErrors] = useState<Record<string, string>>({});

  // ── Modal de términos ──
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
  const termsScrollRef = useRef<HTMLDivElement>(null);

  // ── Checklist ──
  const [checked, setChecked] = useState<Set<string>>(new Set());
  const [expandedSection, setExpandedSection] = useState<number | null>(0);

  // ── Manuscrito ──
  const [manuscrito, setManuscrito] = useState({
    titulo: '',
    resumen: '',
    palabrasClave: '',
    formato: 'apa',
    archivo: null as File | null,
    datosDisponibles: '',
    comentarios: '',
  });
  const [manuscritoErrors, setManuscritoErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<'success' | 'error' | null>(null);

  // ─── HELPERS ─────────────────────────────────────────────────────────────────
  const progress = Math.round((checked.size / TOTAL_CHECKS) * 100);

  const toggleCheck = useCallback((id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleSection = (i: number) => {
    setExpandedSection((prev) => (prev === i ? null : i));
  };

  const goTo = (next: Step, dir: number) => {
    setDirection(dir);
    setStep(next);
    window.scrollTo(0, 0);
  };

  // ─── VALIDATION ──────────────────────────────────────────────────────────────
  const validateRegistro = (): boolean => {
    const errs: Record<string, string> = {};
    if (!registro.nombre.trim()) errs.nombre = 'El nombre es obligatorio';
    if (!registro.email.trim()) errs.email = 'El correo es obligatorio';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registro.email)) errs.email = 'Correo inválido';
    if (!registro.institucion.trim()) errs.institucion = 'La institución es obligatoria';
    if (!registro.area.trim()) errs.area = 'El área de formación es obligatoria';
    if (!registro.password) errs.password = 'La contraseña es obligatoria';
    else if (registro.password.length < 6) errs.password = 'Mínimo 6 caracteres';
    if (registro.password !== registro.confirmPassword) errs.confirmPassword = 'Las contraseñas no coinciden';
    if (!registro.aceptaTerminos) errs.aceptaTerminos = 'Debes aceptar los términos';
    setRegistroErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateChecklist = (): boolean => checked.size === TOTAL_CHECKS;

  const validateManuscrito = (): boolean => {
    const errs: Record<string, string> = {};
    if (!manuscrito.titulo.trim()) errs.titulo = 'El título es obligatorio';
    if (!manuscrito.resumen.trim()) errs.resumen = 'El resumen es obligatorio';
    if (!manuscrito.palabrasClave.trim()) errs.palabrasClave = 'Las palabras clave son obligatorias';
    if (!manuscrito.archivo) errs.archivo = 'Debes adjuntar el manuscrito';
    setManuscritoErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // ─── SUBMIT ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!validateManuscrito()) return;
    setIsSubmitting(true);

    // Formspree endpoint — reemplazar con el tuyo tras crear la cuenta
    const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xnnpqrzl';

    const formData = new FormData();
    formData.append('nombre', registro.nombre);
    formData.append('email', registro.email);
    formData.append('institucion', registro.institucion);
    formData.append('area', registro.area);
    formData.append('titulo', manuscrito.titulo);
    formData.append('resumen', manuscrito.resumen);
    formData.append('palabras_clave', manuscrito.palabrasClave);
    formData.append('formato', manuscrito.formato.toUpperCase());
    formData.append('datos_disponibles', manuscrito.datosDisponibles);
    formData.append('comentarios', manuscrito.comentarios);
    formData.append('checklist_completo', 'Sí — ' + checked.size + '/' + TOTAL_CHECKS);
    if (manuscrito.archivo) {
      formData.append('manuscrito', manuscrito.archivo, manuscrito.archivo.name);
    }

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitResult('success');
        goTo('confirmacion', 1);
      } else {
        setSubmitResult('error');
      }
    } catch {
      setSubmitResult('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // ─── RENDER ──────────────────────────────────────────────────────────────────
  return (
    <div className="relative min-h-screen bg-white text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-rose-600 selection:text-white">
      <FilmGrain />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-rose-600 transition-colors shadow-[4px_4px_0_0_#9f1239] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#9f1239] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-rose-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">
              ENVIAR ARTÍCULO
            </div>
            <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">
              SEMILLERO AUTORES // RPP_2026
            </span>
          </div>
        </div>
      </header>

      {/* PROGRESS BAR */}
      <div className="fixed top-20 left-0 right-0 z-[90] h-2 bg-zinc-100 border-b-4 border-black">
        <motion.div
          className="h-full bg-rose-600"
          initial={{ width: 0 }}
          animate={{ width: `${((['registro', 'checklist', 'manuscrito', 'confirmacion'].indexOf(step) + 1) / 4) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24">
        <AnimatePresence mode="wait" custom={direction}>
          {step === 'registro' && (
            <motion.div
              key="registro"
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.35 }}
            >
              <StepHeader
                step={1}
                title="Registro de Autor"
                subtitle="Crea tu perfil para enviar tu manuscrito al Semillero RPP."
              />

              <div className="space-y-8">
                <BrutalCard className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field
                      label="Nombre completo"
                      icon={User}
                      value={registro.nombre}
                      onChange={(v) => setRegistro((p) => ({ ...p, nombre: v }))}
                      error={registroErrors.nombre}
                      placeholder="María González"
                    />
                    <Field
                      label="Correo electrónico"
                      icon={Mail}
                      value={registro.email}
                      onChange={(v) => setRegistro((p) => ({ ...p, email: v }))}
                      error={registroErrors.email}
                      placeholder="maria@universidad.edu"
                      type="email"
                    />
                    <Field
                      label="Institución"
                      icon={Building2}
                      value={registro.institucion}
                      onChange={(v) => setRegistro((p) => ({ ...p, institucion: v }))}
                      error={registroErrors.institucion}
                      placeholder="Universidad Nacional de Colombia"
                    />
                    <Field
                      label="Área de formación"
                      icon={BookOpen}
                      value={registro.area}
                      onChange={(v) => setRegistro((p) => ({ ...p, area: v }))}
                      error={registroErrors.area}
                      placeholder="Pedagogía, Filosofía, Sociología..."
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                        Contraseña
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={registro.password}
                          onChange={(e) => setRegistro((p) => ({ ...p, password: e.target.value }))}
                          placeholder="Mínimo 6 caracteres"
                          className={`w-full pl-12 pr-12 py-4 border-4 ${registroErrors.password ? 'border-rose-600 bg-rose-50' : 'border-black bg-white'} font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((p) => !p)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-black"
                        >
                          {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                      </div>
                      {registroErrors.password && (
                        <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {registroErrors.password}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                        Confirmar contraseña
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={registro.confirmPassword}
                          onChange={(e) => setRegistro((p) => ({ ...p, confirmPassword: e.target.value }))}
                          placeholder="Repite tu contraseña"
                          className={`w-full pl-12 pr-4 py-4 border-4 ${registroErrors.confirmPassword ? 'border-rose-600 bg-rose-50' : 'border-black bg-white'} font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20`}
                        />
                      </div>
                      {registroErrors.confirmPassword && (
                        <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {registroErrors.confirmPassword}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Términos */}
                  <div className={`border-4 p-6 ${registroErrors.aceptaTerminos ? 'border-rose-600 bg-rose-50' : 'border-zinc-200 bg-zinc-50'}`}>
                    {!registro.aceptaTerminos ? (
                      <button
                        type="button"
                        onClick={() => {
                          setShowTermsModal(true);
                          setHasScrolledToBottom(false);
                        }}
                        className="w-full flex items-center justify-between gap-4 text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 bg-black text-white flex items-center justify-center border-4 border-black shrink-0">
                            <ScrollText className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-base">Ver términos y condiciones</p>
                            <p className="text-sm text-zinc-500">Debes leer la política completa para poder aceptarla</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                      </button>
                    ) : (
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-pop-teal text-white flex items-center justify-center border-4 border-black shrink-0">
                          <Check className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-base">Has aceptado los términos y condiciones</p>
                          <p className="text-sm text-zinc-500 mb-3">Política del Semillero de Autores RPP leída y aceptada</p>
                          <button
                            type="button"
                            onClick={() => {
                              setRegistro((p) => ({ ...p, aceptaTerminos: false }));
                              setHasScrolledToBottom(false);
                            }}
                            className="text-xs font-mono uppercase text-rose-600 hover:text-rose-800 underline"
                          >
                            Revocar aceptación
                          </button>
                        </div>
                      </div>
                    )}
                    {registroErrors.aceptaTerminos && (
                      <p className="mt-3 text-rose-600 font-mono text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {registroErrors.aceptaTerminos}
                      </p>
                    )}
                  </div>
                </BrutalCard>

                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      if (validateRegistro()) goTo('checklist', 1);
                    }}
                    className="group flex items-center gap-3 bg-black text-white px-8 py-4 border-4 border-black font-display text-xl uppercase shadow-[6px_6px_0_0_#e11d48] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#e11d48] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
                  >
                    Continuar
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'checklist' && (
            <motion.div
              key="checklist"
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.35 }}
            >
              <StepHeader
                step={2}
                title="Checklist de Envío"
                subtitle="Verifica que tu manuscrito cumpla todos los requisitos antes de continuar."
              />

              {/* Progress */}
              <div className="mb-10">
                <div className="flex justify-between items-end mb-3">
                  <span className="font-mono text-[10px] uppercase font-black tracking-widest">
                    Progreso del checklist
                  </span>
                  <span className="font-display text-4xl text-rose-600">
                    {checked.size}/{TOTAL_CHECKS}
                  </span>
                </div>
                <div className="h-6 bg-zinc-100 border-4 border-black">
                  <motion.div
                    className="h-full bg-rose-600"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                {progress === 100 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 bg-pop-teal/20 border-l-[8px] border-pop-teal p-4 flex items-center gap-3"
                  >
                    <Check className="w-6 h-6 text-pop-teal" />
                    <span className="font-bold">¡Todos los requisitos verificados! Puedes continuar.</span>
                  </motion.div>
                )}
              </div>

              {/* Checklist sections */}
              <div className="space-y-4">
                {CHECKLIST.map((section, i) => {
                  const SectionIcon = section.icon;
                  const sectionChecked = section.items.filter((it) => checked.has(it.id)).length;
                  const sectionTotal = section.items.length;
                  const isComplete = sectionChecked === sectionTotal;
                  const isOpen = expandedSection === i;

                  return (
                    <div
                      key={i}
                      className={`border-4 ${isComplete ? 'border-pop-teal' : 'border-black'} transition-colors`}
                    >
                      <button
                        onClick={() => toggleSection(i)}
                        className="w-full flex items-center justify-between p-5 bg-white hover:bg-zinc-50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-10 h-10 flex items-center justify-center border-4 border-black ${isComplete ? 'bg-pop-teal text-white' : 'bg-zinc-100 text-zinc-600'}`}
                          >
                            <SectionIcon className="w-5 h-5" />
                          </div>
                          <div className="text-left">
                            <h3 className="font-display text-xl uppercase font-black italic tracking-tighter">
                              {section.title}
                            </h3>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-400">
                              {sectionChecked}/{sectionTotal} verificados
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          {isComplete && (
                            <div className="bg-pop-teal text-white px-3 py-1 font-mono text-[10px] uppercase font-black border-2 border-black">
                              OK
                            </div>
                          )}
                          <motion.div animate={{ rotate: isOpen ? 90 : 0 }}>
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="p-5 pt-0 space-y-3">
                              {section.items.map((item) => {
                                const isChecked = checked.has(item.id);
                                return (
                                  <label
                                    key={item.id}
                                    className={`flex items-start gap-4 p-4 border-4 cursor-pointer transition-all ${isChecked ? 'bg-pop-teal/10 border-pop-teal' : 'bg-white border-zinc-200 hover:border-zinc-400'}`}
                                  >
                                    <div className="relative mt-0.5">
                                      <input
                                        type="checkbox"
                                        checked={isChecked}
                                        onChange={() => toggleCheck(item.id)}
                                        className="sr-only"
                                      />
                                      <div
                                        className={`w-6 h-6 border-4 border-black flex items-center justify-center transition-colors ${isChecked ? 'bg-rose-600' : 'bg-white'}`}
                                      >
                                        {isChecked && <Check className="w-4 h-4 text-white" />}
                                      </div>
                                    </div>
                                    <span className="text-base leading-relaxed">{item.label}</span>
                                  </label>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-between mt-10">
                <button
                  onClick={() => goTo('registro', -1)}
                  className="group flex items-center gap-3 bg-white text-black px-6 py-4 border-4 border-black font-display text-lg uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  Atrás
                </button>
                <button
                  onClick={() => {
                    if (validateChecklist()) goTo('manuscrito', 1);
                    else {
                      // Scroll to first unchecked
                      const firstUnchecked = CHECKLIST.flatMap((s, si) =>
                        s.items.map((it) => ({ ...it, sectionIndex: si }))
                      ).find((it) => !checked.has(it.id));
                      if (firstUnchecked) setExpandedSection(firstUnchecked.sectionIndex);
                    }
                  }}
                  className={`group flex items-center gap-3 px-8 py-4 border-4 border-black font-display text-xl uppercase shadow-[6px_6px_0_0_#e11d48] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#e11d48] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all ${progress === 100 ? 'bg-black text-white' : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'}`}
                  disabled={progress !== 100}
                >
                  Continuar
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 'manuscrito' && (
            <motion.div
              key="manuscrito"
              custom={direction}
              initial={{ opacity: 0, x: direction * 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -50 }}
              transition={{ duration: 0.35 }}
            >
              <StepHeader
                step={3}
                title="Datos del Manuscrito"
                subtitle="Completa la información de tu artículo y adjunta el archivo."
              />

              <div className="space-y-8">
                <BrutalCard className="space-y-6">
                  <div>
                    <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                      Título del manuscrito
                    </label>
                    <input
                      type="text"
                      value={manuscrito.titulo}
                      onChange={(e) => setManuscrito((p) => ({ ...p, titulo: e.target.value }))}
                      placeholder="Título completo de tu investigación"
                      className={`w-full px-4 py-4 border-4 ${manuscritoErrors.titulo ? 'border-rose-600 bg-rose-50' : 'border-black bg-white'} font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20`}
                    />
                    {manuscritoErrors.titulo && (
                      <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {manuscritoErrors.titulo}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                      Resumen / Abstract
                    </label>
                    <textarea
                      value={manuscrito.resumen}
                      onChange={(e) => setManuscrito((p) => ({ ...p, resumen: e.target.value }))}
                      placeholder="Resumen de 150-250 palabras..."
                      rows={5}
                      className={`w-full px-4 py-4 border-4 ${manuscritoErrors.resumen ? 'border-rose-600 bg-rose-50' : 'border-black bg-white'} font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20 resize-y`}
                    />
                    {manuscritoErrors.resumen && (
                      <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {manuscritoErrors.resumen}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                        Palabras clave
                      </label>
                      <input
                        type="text"
                        value={manuscrito.palabrasClave}
                        onChange={(e) => setManuscrito((p) => ({ ...p, palabrasClave: e.target.value }))}
                        placeholder="pedagogía, tecnología, educación..."
                        className={`w-full px-4 py-4 border-4 ${manuscritoErrors.palabrasClave ? 'border-rose-600 bg-rose-50' : 'border-black bg-white'} font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20`}
                      />
                      {manuscritoErrors.palabrasClave && (
                        <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {manuscritoErrors.palabrasClave}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                        Formato de citación
                      </label>
                      <select
                        value={manuscrito.formato}
                        onChange={(e) => setManuscrito((p) => ({ ...p, formato: e.target.value }))}
                        className="w-full px-4 py-4 border-4 border-black bg-white font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20 appearance-none"
                      >
                        <option value="apa">APA (7ª edición)</option>
                        <option value="mla">MLA (9ª edición)</option>
                        <option value="chicago">Chicago (17ª edición)</option>
                      </select>
                    </div>
                  </div>

                  {/* File upload */}
                  <div>
                    <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                      Archivo del manuscrito
                    </label>
                    <div
                      className={`relative border-4 border-dashed ${manuscritoErrors.archivo ? 'border-rose-600 bg-rose-50' : 'border-black bg-zinc-50'} p-10 text-center transition-colors hover:bg-zinc-100`}
                    >
                      <input
                        type="file"
                        accept=".doc,.docx,.odt,.rtf"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setManuscrito((p) => ({ ...p, archivo: file }));
                        }}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <Upload className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
                      {manuscrito.archivo ? (
                        <div>
                          <p className="font-bold text-lg">{manuscrito.archivo.name}</p>
                          <p className="font-mono text-xs text-zinc-500">
                            {(manuscrito.archivo.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      ) : (
                        <div>
                          <p className="font-bold text-lg">Arrastra tu archivo aquí o haz clic para seleccionar</p>
                          <p className="font-mono text-xs text-zinc-500 mt-2">
                            Word (.doc, .docx), OpenDocument (.odt), RTF — Máx. 10 MB
                          </p>
                        </div>
                      )}
                    </div>
                    {manuscritoErrors.archivo && (
                      <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {manuscritoErrors.archivo}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                      Disponibilidad de datos / materiales (opcional)
                    </label>
                    <input
                      type="text"
                      value={manuscrito.datosDisponibles}
                      onChange={(e) => setManuscrito((p) => ({ ...p, datosDisponibles: e.target.value }))}
                      placeholder={'URL de repositorio, descripción de materiales, o "No aplica"'}
                      className="w-full px-4 py-4 border-4 border-black bg-white font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">
                      Comentarios para el editor (opcional)
                    </label>
                    <textarea
                      value={manuscrito.comentarios}
                      onChange={(e) => setManuscrito((p) => ({ ...p, comentarios: e.target.value }))}
                      placeholder="Notas adicionales, declaraciones de conflicto de intereses, etc."
                      rows={3}
                      className="w-full px-4 py-4 border-4 border-black bg-white font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20 resize-y"
                    />
                  </div>
                </BrutalCard>

                {submitResult === 'error' && (
                  <div className="bg-rose-600 text-white p-6 border-4 border-black shadow-[6px_6px_0_0_#000]">
                    <div className="flex items-center gap-3">
                      <AlertCircle className="w-6 h-6" />
                      <div>
                        <p className="font-bold">Error al enviar el manuscrito</p>
                        <p className="text-sm opacity-90">
                          Por favor intenta de nuevo o contacta al equipo editorial.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between">
                  <button
                    onClick={() => goTo('checklist', -1)}
                    className="group flex items-center gap-3 bg-white text-black px-6 py-4 border-4 border-black font-display text-lg uppercase shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none transition-all"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Atrás
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 bg-rose-600 text-white px-8 py-4 border-4 border-black font-display text-xl uppercase shadow-[6px_6px_0_0_#000] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        >
                          <Sparkles className="w-6 h-6" />
                        </motion.div>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        Enviar manuscrito
                      </>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 'confirmacion' && (
            <motion.div
              key="confirmacion"
              custom={direction}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, type: 'spring' }}
              className="text-center py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', damping: 10 }}
                className="w-24 h-24 bg-pop-teal border-8 border-black mx-auto mb-10 flex items-center justify-center shadow-[8px_8px_0_0_#000]"
              >
                <Check className="w-12 h-12 text-white" />
              </motion.div>

              <h2 className="font-display text-5xl md:text-7xl uppercase font-black italic tracking-tighter mb-6">
                ¡Manuscrito enviado!
              </h2>

              <p className="font-serif text-2xl italic text-zinc-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                Hemos recibido tu trabajo. El equipo editorial realizará la moderación técnica y te contactará en los próximos 15 días hábiles.
              </p>

              <div className="max-w-xl mx-auto bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#000] mb-12 text-left space-y-4">
                <h3 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                  Resumen de tu envío
                </h3>
                <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                  <span className="text-zinc-400">Autor</span>
                  <span className="font-bold">{registro.nombre}</span>
                  <span className="text-zinc-400">Email</span>
                  <span className="font-bold">{registro.email}</span>
                  <span className="text-zinc-400">Institución</span>
                  <span className="font-bold">{registro.institucion}</span>
                  <span className="text-zinc-400">Área</span>
                  <span className="font-bold">{registro.area}</span>
                  <span className="text-zinc-400">Título</span>
                  <span className="font-bold">{manuscrito.titulo}</span>
                  <span className="text-zinc-400">Formato</span>
                  <span className="font-bold uppercase">{manuscrito.formato}</span>
                  <span className="text-zinc-400">Archivo</span>
                  <span className="font-bold">{manuscrito.archivo?.name}</span>
                </div>
              </div>

              <button
                onClick={onBack}
                className="group inline-flex items-center gap-3 bg-black text-white px-8 py-4 border-4 border-black font-display text-xl uppercase shadow-[6px_6px_0_0_#e11d48] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#e11d48] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                Volver al Semillero
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* MODAL DE TÉRMINOS Y CONDICIONES */}
        <AnimatePresence>
          {showTermsModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-black/80 flex items-center justify-center p-4 md:p-8"
              onClick={() => setShowTermsModal(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ type: 'spring', damping: 20 }}
                className="bg-white border-8 border-black w-full max-w-3xl max-h-[90vh] flex flex-col shadow-[16px_16px_0_0_#000]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header del modal */}
                <div className="flex items-center justify-between p-6 border-b-8 border-black bg-rose-600 text-white shrink-0">
                  <div className="flex items-center gap-4">
                    <ScrollText className="w-8 h-8" />
                    <h3 className="font-display text-2xl uppercase font-black italic tracking-tighter">
                      Términos y Condiciones
                    </h3>
                  </div>
                  <button
                    onClick={() => setShowTermsModal(false)}
                    className="w-10 h-10 bg-black text-white flex items-center justify-center border-4 border-white hover:bg-white hover:text-black transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Contenido scrolleable */}
                <div
                  ref={termsScrollRef}
                  onScroll={(e) => {
                    const el = e.currentTarget;
                    const isBottom = el.scrollHeight - el.scrollTop <= el.clientHeight + 10;
                    if (isBottom && !hasScrolledToBottom) {
                      setHasScrolledToBottom(true);
                    }
                  }}
                  className="flex-1 overflow-y-auto p-8 space-y-8"
                >
                  <div className="space-y-6 text-base leading-relaxed">
                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      1. Objeto y Alcance
                    </h4>
                    <p>
                      El presente documento establece los términos y condiciones que regulan la participación de los autores en el Semillero de Autores de la Revista Panamericana de Pedagogía (RPP). Al enviar un manuscrito, el autor acepta íntegramente estas condiciones y se compromete a cumplirlas durante todo el proceso editorial.
                    </p>
                    <p>
                      El Semillero de Autores RPP es un espacio de incubación académica destinado a investigadores en formación y profesionales de la educación que desean publicar trabajos originales en un entorno de acceso abierto, con los estándares de rigor científico y calidad narrativa que caracterizan a la revista.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      2. Originalidad y Ética Académica
                    </h4>
                    <p>
                      El autor garantiza que el trabajo enviado es original e inédito, que no ha sido publicado previamente en ningún medio ni está sometido a evaluación en otra revista o publicación académica simultáneamente.
                    </p>
                    <p>
                      El autor se compromete a citar correctamente todas las fuentes utilizadas y a no incurrir en plagio, autoplagio o reutilización no declarada de textos previos. La detección de cualquier forma de conducta académica deshonesta resultará en la descalificación inmediata del trabajo y la suspensión de la participación en el semillero.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      3. Identidad Académica sin Jerarquías
                    </h4>
                    <p>
                      En coherencia con el principio de equidad del Semillero RPP, el manuscrito debe incluir únicamente la institución de afiliación y el área de formación del autor (por ejemplo, "Universidad Nacional de Colombia – Filosofía").
                    </p>
                    <p>
                      <strong>Queda expresamente prohibido</strong> incluir el nivel académico del autor (pregrado, maestría, doctorado, semestre cursado) en el cuerpo del manuscrito o en cualquier elemento identificatorio. La biografía, si se incluye, debe limitarse a mencionar los intereses de investigación del autor. No se permiten agradecimientos que revelen el estatus estudiantil del investigador.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      4. Formato y Extensión
                    </h4>
                    <p>
                      Los manuscritos deben tener una extensión entre 3.000 y 6.000 palabras, incluyendo referencias bibliográficas. El formato de citación debe seguir los estándares de APA (7ª edición), MLA (9ª edición) o Chicago (17ª edición), manteniendo consistencia a lo largo de todo el documento.
                    </p>
                    <p>
                      El archivo debe enviarse en formato editable (Microsoft Word, OpenDocument o equivalente). Las tablas, figuras, gráficos y anexos deben estar correctamente rotulados, numerados y referenciados en el texto principal.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      5. Estándares de Ciencia Abierta
                    </h4>
                    <p>
                      El autor se compromete a que los datos, materiales de investigación o códigos (si aplica) estén disponibles o debidamente descritos en el manuscrito, facilitando la reproducibilidad y transparencia del trabajo.
                    </p>
                    <p>
                      El texto debe ser claro, comprensible y estructurado, incluyendo obligatoriamente un resumen de 150-250 palabras y un mínimo de tres palabras clave que describan el contenido del artículo.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      6. Cesión de Derechos y Acceso Abierto
                    </h4>
                    <p>
                      Al aceptar estos términos, el autor autoriza la publicación de su trabajo en acceso abierto en repositorios académicos como Zenodo y Mendeley, así como en la plataforma digital de la Revista Panamericana de Pedagogía.
                    </p>
                    <p>
                      El autor <strong>retiene la autoría intelectual</strong> de su trabajo en todo momento. No obstante, cede los derechos de difusión, distribución y comunicación pública necesarios para que la RPP pueda publicar, archivar y promover el artículo en sus canales digitales y redes asociadas.
                    </p>
                    <p>
                      Esta cesión es no exclusiva, lo que significa que el autor puede publicar versiones derivadas o ampliadas del trabajo en otros medios, siempre citando la publicación original en RPP.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      7. Proceso Editorial y Moderación Técnica
                    </h4>
                    <p>
                      El Semillero de Autores RPP <strong>no realiza revisión por pares tradicional</strong> (peer review). En su lugar, aplica un proceso de <strong>moderación técnica</strong> que evalúa:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Ética académica y originalidad del trabajo</li>
                      <li>Claridad expositiva y estructura argumentativa</li>
                      <li>Cumplimiento de normas de formato y citación</li>
                      <li>Adecuación a los estándares de ciencia abierta</li>
                    </ul>
                    <p>
                      El equipo editorial se reserva el derecho de solicitar ajustes formales, correcciones o modificaciones al manuscrito antes de su publicación. El autor se compromete a atender estas solicitudes en un plazo máximo de 30 días calendario.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      8. Publicación como Objeto de Ciencia Abierta
                    </h4>
                    <p>
                      Los trabajos aprobados serán publicados como <strong>Objetos de Ciencia Abierta</strong> con asignación de DOI (Digital Object Identifier), garantizando su citabilidad, trazabilidad y permanencia en el registro académico internacional.
                    </p>
                    <p>
                      La publicación incluirá los metadatos académicos correspondientes (autoría, institución, fecha, volumen, palabras clave) y se archivará en repositorios de acceso abierto con licencias Creative Commons que permitan la reutilización con atribución.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      9. Confidencialidad y Protección de Datos
                    </h4>
                    <p>
                      Los datos personales proporcionados por el autor (nombre, correo electrónico, institución, área de formación) serán tratados con estricta confidencialidad y utilizados únicamente para los fines del proceso editorial del Semillero RPP.
                    </p>
                    <p>
                      En ningún caso estos datos serán compartidos con terceros ajenos al equipo editorial de la revista, ni utilizados para fines comerciales o de mercadeo.
                    </p>

                    <h4 className="font-display text-xl uppercase font-black border-b-4 border-black pb-2">
                      10. Aceptación y Vigencia
                    </h4>
                    <p>
                      La aceptación de estos términos y condiciones es obligatoria para participar en el Semillero de Autores RPP. El hecho de enviar un manuscrito constituye una declaración expresa de conformidad con todas las disposiciones aquí establecidas.
                    </p>
                    <p>
                      La Revista Panamericana de Pedagogía se reserva el derecho de modificar estos términos en cualquier momento, notificando a los autores registrados sobre cualquier cambio sustancial. Las modificaciones entrarán en vigor a partir de su publicación en la plataforma de la revista.
                    </p>
                    <p className="font-bold text-lg pt-4">
                      Al hacer clic en "Acepto los términos y condiciones", confirmas que has leído íntegramente este documento y que aceptas cumplir con todas las disposiciones aquí establecidas.
                    </p>
                  </div>

                  {/* Indicador de scroll */}
                  {!hasScrolledToBottom && (
                    <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-transparent pt-12 pb-4 text-center">
                      <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="inline-flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-widest"
                      >
                        <ArrowRight className="w-4 h-4 rotate-90" />
                        Desplázate hasta el final para activar la aceptación
                      </motion.div>
                    </div>
                  )}
                </div>

                {/* Footer del modal */}
                <div className="p-6 border-t-8 border-black bg-zinc-50 shrink-0">
                  <button
                    onClick={() => {
                      if (hasScrolledToBottom) {
                        setRegistro((p) => ({ ...p, aceptaTerminos: true }));
                        setShowTermsModal(false);
                        setRegistroErrors((prev) => {
                          const next = { ...prev };
                          delete next.aceptaTerminos;
                          return next;
                        });
                      }
                    }}
                    disabled={!hasScrolledToBottom}
                    className={`w-full flex items-center justify-center gap-3 px-8 py-4 border-4 border-black font-display text-xl uppercase shadow-[6px_6px_0_0_#000] transition-all ${
                      hasScrolledToBottom
                        ? 'bg-pop-teal text-black hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[9px_9px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'
                        : 'bg-zinc-300 text-zinc-500 cursor-not-allowed'
                    }`}
                  >
                    {hasScrolledToBottom ? (
                      <>
                        <Check className="w-6 h-6" />
                        Acepto los términos y condiciones
                      </>
                    ) : (
                      <>
                        <Lock className="w-6 h-6" />
                        Lee todo el documento para activar
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────

function StepHeader({ step, title, subtitle }: { step: number; title: string; subtitle: string }) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-rose-600 text-white flex items-center justify-center border-4 border-black font-display text-2xl font-black shadow-[4px_4px_0_0_#000]">
          {step}
        </div>
        <BrutalSticker text={`PASO ${step} DE 4`} color="bg-black" className="text-white !rotate-0" />
      </div>
      <h2 className="font-display text-4xl md:text-6xl uppercase font-black italic tracking-tighter mb-4">
        {title}
      </h2>
      <p className="font-serif text-xl italic text-zinc-500">{subtitle}</p>
    </div>
  );
}

function Field({
  label,
  icon: Icon,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
}: {
  label: string;
  icon: React.ElementType;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase font-black tracking-widest mb-2">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full pl-12 pr-4 py-4 border-4 ${error ? 'border-rose-600 bg-rose-50' : 'border-black bg-white'} font-sans text-lg focus:outline-none focus:ring-4 focus:ring-rose-600/20`}
        />
      </div>
      {error && (
        <p className="mt-2 text-rose-600 font-mono text-xs flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
}
