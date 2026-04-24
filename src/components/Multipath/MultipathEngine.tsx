/**
 * MULTIPATH ENGINE v2.0 — Plantilla Genérica
 * Motor visual reutilizable para experiencias multicamino de artículos RPP
 *
 * Este componente NO contiene contenido específico de ningún artículo.
 * Recibe toda la configuración por props y renderiza la experiencia visual novel.
 *
 * Características:
 * - Detección automática de categorías
 * - Soporte para artículos cualitativos, cuantitativos y mixtos
 * - Finales alternativos con condiciones de desbloqueo
 * - Persistencia en localStorage
 * - Estilo visual novel / aventura gráfica
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ArrowRight,
  ArrowLeft,
  Lock,
  Unlock,
  RotateCcw,
  X,
  Eye,
  GitBranch,
  BarChart3,
  BookOpen,
  Microscope,
  Users,
  MessageSquare,
  Scale,
  Heart,
  AlertTriangle,
  Table,
  Globe,
  GraduationCap,
  MessageCircle,
  CheckCircle,
  TrendingUp,
  AlertCircle,
  Award,
  Menu,
  Bookmark,
  Clock,
  MapPin,
  Network,
  FileText,
  Lightbulb,
  Target,
  Zap,
  Layers,
  type LucideIcon,
} from 'lucide-react';
import { FilmGrain } from '../FilmGrain';
import type { ArticleGraph, PathState, PathNode, PathExit } from './types';

// ─── Icon Map ───
const ICON_MAP: Record<string, LucideIcon> = {
  MapPin, Microscope, Users, AlertTriangle, Scale, ArrowLeft, ArrowRight,
  GitBranch, Network, Heart, MessageSquare, BarChart3, Table, Globe,
  GraduationCap, MessageCircle, CheckCircle, TrendingUp,
  AlertCircle, Award, RotateCcw, Menu, X, Bookmark, Clock, Eye, Lock, Unlock,
  BookOpen, FileText, Lightbulb, Target, Zap, Layers,
};

// ─── Paleta de colores por categoría (auto-asignada) ───
const CATEGORY_PALETTE: Record<string, { label: string; color: string; icon: LucideIcon }> = {
  intro:        { label: 'Inicio',         color: '#ff6b9d', icon: BookOpen },
  contexto:     { label: 'Contexto',       color: '#e74c3c', icon: Globe },
  marco_teorico:{ label: 'Marco Teórico',  color: '#9b59b6', icon: Lightbulb },
  hipotesis:    { label: 'Hipótesis',      color: '#f39c12', icon: Target },
  metodologia:  { label: 'Metodología',    color: '#3498db', icon: Microscope },
  muestra:      { label: 'Muestra',        color: '#1abc9c', icon: Users },
  instrumentos: { label: 'Instrumentos',   color: '#16a085', icon: FileText },
  resultados:   { label: 'Resultados',     color: '#e67e22', icon: BarChart3 },
  analisis:     { label: 'Análisis',       color: '#d35400', icon: Zap },
  discusion:    { label: 'Discusión',      color: '#8e44ad', icon: MessageCircle },
  conclusiones: { label: 'Conclusiones',   color: '#27ae60', icon: CheckCircle },
  limitaciones: { label: 'Limitaciones',   color: '#7f8c8d', icon: AlertCircle },
  proyecciones: { label: 'Proyecciones',   color: '#2980b9', icon: TrendingUp },
  profundidad:  { label: 'Profundidad',    color: '#c0392b', icon: Layers },
  datos:        { label: 'Datos',          color: '#2ecc71', icon: Table },
  citas:        { label: 'Voces',          color: '#e74c3c', icon: MessageSquare },
  sintesis:     { label: 'Síntesis',       color: '#f1c40f', icon: Award },
  // Fallback
  default:      { label: 'Sección',        color: '#95a5a6', icon: Layers },
};

function getCategoryMeta(category: string) {
  return CATEGORY_PALETTE[category] || CATEGORY_PALETTE.default;
}

// ─── Props del motor ───
interface MultipathEngineProps {
  graph: ArticleGraph;
  onBack: () => void;
  /** Tema visual opcional: 'dark' (default), 'warm', 'cool', 'academic', 'neobrutalist', 'visualnovel' */
  theme?: 'dark' | 'warm' | 'cool' | 'academic' | 'neobrutalist' | 'visualnovel';
}

// ─── Themes visuales ───
const THEMES = {
  dark: {
    bg: '#1a0f0f',
    bgGradient: 'from-[#1a0f0f] via-[#2d1f1f] to-[#1a0f0f]',
    panelBg: 'rgba(20,15,15,0.95)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.8)',
    textMuted: 'rgba(255,255,255,0.5)',
    border: 'rgba(255,255,255,0.1)',
  },
  warm: {
    bg: '#1f1510',
    bgGradient: 'from-[#1f1510] via-[#2d2018] to-[#1f1510]',
    panelBg: 'rgba(30,20,15,0.95)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.8)',
    textMuted: 'rgba(255,255,255,0.5)',
    border: 'rgba(255,200,100,0.1)',
  },
  cool: {
    bg: '#0f1a2e',
    bgGradient: 'from-[#0f1a2e] via-[#152238] to-[#0f1a2e]',
    panelBg: 'rgba(15,25,45,0.95)',
    textPrimary: '#ffffff',
    textSecondary: 'rgba(255,255,255,0.8)',
    textMuted: 'rgba(255,255,255,0.5)',
    border: 'rgba(100,180,255,0.1)',
  },
  academic: {
    bg: '#f5f0e8',
    bgGradient: 'from-[#f5f0e8] via-[#ebe5d9] to-[#f5f0e8]',
    panelBg: 'rgba(250,248,245,0.95)',
    textPrimary: '#1a1a1a',
    textSecondary: 'rgba(0,0,0,0.75)',
    textMuted: 'rgba(0,0,0,0.5)',
    border: 'rgba(0,0,0,0.08)',
    isBrutalist: true,
  },
  neobrutalist: {
    bg: '#0f172a',
    bgGradient: 'from-[#0f172a] via-[#1e293b] to-[#0f172a]',
    panelBg: '#fdf8f1', // Creamy "Zine" paper feel
    textPrimary: '#000000',
    textSecondary: 'rgba(0,0,0,0.8)',
    textMuted: 'rgba(0,0,0,0.4)',
    border: '#000000',
    isBrutalist: true,
  },
  visualnovel: {
    bg: '#0a0a0c',
    bgGradient: 'from-[#0f172a] via-[#1e293b] to-[#0a0a0c]',
    panelBg: 'rgba(253, 248, 241, 0.85)', // Más transparente para ver el arte
    textPrimary: '#000000',
    textSecondary: 'rgba(0,0,0,0.8)',
    textMuted: 'rgba(0,0,0,0.4)',
    border: '#000000',
    isBrutalist: true,
    isCinematic: true,
  },
};

// ─── localStorage helpers ───
const STORAGE_KEY = 'rpp_multipath_state';

function loadState(articleId: string): PathState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored = JSON.parse(raw) as Record<string, PathState>;
    const state = stored[articleId];
    if (!state || !state.currentNodeId || !Array.isArray(state.visitedNodes)) return null;
    return state;
  } catch { return null; }
}

function saveState(articleId: string, state: PathState) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const stored = raw ? (JSON.parse(raw) as Record<string, PathState>) : {};
    stored[articleId] = { ...state, lastAccess: Date.now() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch (e) { console.warn('Error guardando estado:', e); }
}

// ─── Formatear contenido markdown simple ───
function formatContent(text: string | string[], isDark: boolean): React.ReactNode {
  const lines = Array.isArray(text) ? text : text.split('\n');
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: React.ReactNode[] = [];

  const flushList = () => {
    if (inList && listItems.length > 0) {
      elements.push(
        <ul key={`list-${elements.length}`} className="space-y-2 my-4 ml-4">
          {listItems}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  };

  lines.forEach((line, i) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('**') && trimmed.endsWith('**') && !trimmed.includes('•') && trimmed.length < 80) {
      flushList();
      elements.push(
        <h3 key={i} className={`text-lg font-bold mt-6 mb-3 ${isDark ? 'text-white/90' : 'text-black/90'}`}>
          {trimmed.replace(/\*\*/g, '')}
        </h3>
      );
      return;
    }

    if (trimmed.startsWith('•') || trimmed.startsWith('-')) {
      if (!inList) inList = true;
      const content = trimmed.replace(/^[•-]\s*/, '');
      const parts = content.split(/(\*\*.*?\*\*)/g);
      listItems.push(
        <li key={i} className={`flex items-start gap-2 text-sm leading-relaxed ${isDark ? 'text-white/80' : 'text-black/75'}`}>
          <span className="text-amber-400 mt-1.5 shrink-0">◆</span>
          <span>
            {parts.map((part, j) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={j} className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>{part.slice(2, -2)}</strong>;
              }
              return part;
            })}
          </span>
        </li>
      );
      return;
    }

    if (trimmed.startsWith('>')) {
      flushList();
      const content = trimmed.replace(/^>\s*/, '');
      elements.push(
        <blockquote key={i} className={`border-l-4 border-amber-500/60 pl-4 my-4 italic text-sm ${isDark ? 'text-white/70' : 'text-black/60'}`}>
          {content.replace(/\*\*/g, '')}
        </blockquote>
      );
      return;
    }

    if (!trimmed) { flushList(); return; }

    flushList();
    const parts = trimmed.split(/(\*\*.*?\*\*)/g);
    elements.push(
      <p key={i} className={`text-sm leading-relaxed mb-3 ${isDark ? 'text-white/80' : 'text-black/75'}`}>
        {parts.map((part, j) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={j} className={isDark ? 'text-white font-semibold' : 'text-black font-semibold'}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </p>
    );
  });

  flushList();
  return <>{elements}</>;
}

// ═══════════════════════════════════════════════════════════
// COMPONENTE PRINCIPAL: MULTIPATH ENGINE
// ═══════════════════════════════════════════════════════════
export default function MultipathEngine({ graph, onBack, theme = 'dark' }: MultipathEngineProps) {
  const t = THEMES[theme as keyof typeof THEMES] || THEMES.dark;
  const isDark = theme === 'dark' || theme === 'warm' || theme === 'cool';
  const isBrutalist = (t as any).isBrutalist || false;
  const isCinematic = (t as any).isCinematic || false;

  // ─── Estado ───
  const [state, setState] = useState<PathState>(() => {
    const saved = loadState(graph.id);
    return saved || {
      currentNodeId: graph.startingNode || 'root',
      visitedNodes: [graph.startingNode || 'root'],
      pathHistory: [graph.startingNode || 'root'],
      unlockedEndings: [],
      startTime: Date.now(),
      lastAccess: Date.now(),
    };
  });

  const [showMap, setShowMap] = useState(false);
  const [direction, setDirection] = useState(1);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  // Guardar en localStorage
  useEffect(() => { saveState(graph.id, state); }, [graph.id, state]);

  const currentNode = graph.nodes[state.currentNodeId];

  // ─── Navegación ───
  const navigateTo = useCallback((nodeId: string) => {
    setDirection(1);
    setState(prev => {
      // Si ya estamos en ese nodo, no hacer nada
      if (prev.currentNodeId === nodeId) return prev;

      const visited = prev.visitedNodes.includes(nodeId)
        ? prev.visitedNodes
        : [...prev.visitedNodes, nodeId];
      const isEnding = graph.nodes[nodeId]?.type === 'ending';
      return {
        ...prev,
        currentNodeId: nodeId,
        visitedNodes: visited,
        pathHistory: [...prev.pathHistory, nodeId],
        unlockedEndings: isEnding
          ? [...new Set([...prev.unlockedEndings, nodeId])]
          : prev.unlockedEndings,
        lastAccess: Date.now(),
      };
    });
    
    // Evitar conflicto con Lenis que causa la vibración (timbre)
    // @ts-ignore
    if (window.lenis) {
      // @ts-ignore
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [graph]);

  const canAccessExit = useCallback((exit: PathExit): boolean => {
    if (exit.requiresVisited) {
      if (!exit.requiresVisited.every(id => state.visitedNodes.includes(id))) return false;
    }
    if (exit.requiresNotVisited) {
      if (exit.requiresNotVisited.some(id => state.visitedNodes.includes(id))) return false;
    }
    return true;
  }, [state.visitedNodes]);

  const reset = useCallback(() => {
    const fresh: PathState = {
      currentNodeId: graph.startingNode,
      visitedNodes: [graph.startingNode],
      pathHistory: [graph.startingNode],
      unlockedEndings: [],
      startTime: Date.now(),
      lastAccess: Date.now(),
    };
    setState(fresh);
    saveState(graph.id, fresh);
  }, [graph]);

  // ─── Cálculos de progreso ───
  const totalNodes = Object.keys(graph.nodes).length;
  const progress = Math.round((state.visitedNodes.length / totalNodes) * 100);

  const catProgress: Record<string, number> = {};
  const catNodes: Record<string, string[]> = {};
  Object.values(graph.nodes).forEach(node => {
    if (!catNodes[node.category]) catNodes[node.category] = [];
    catNodes[node.category].push(node.id);
  });
  Object.entries(catNodes).forEach(([cat, ids]) => {
    const visitedInCat = ids.filter(id => state.visitedNodes.includes(id)).length;
    catProgress[cat] = Math.round((visitedInCat / ids.length) * 100);
  });

  // ─── Categorías detectadas automáticamente ───
  const detectedCategories = Object.keys(catNodes);

  // ─── Escape key ───
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setShowMap(false); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  if (!currentNode) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-[#1a0f0f] text-white' : 'bg-[#f5f0e8] text-black'}`}>
        <p>Nodo no encontrado</p>
      </div>
    );
  }

  const isEnding = currentNode.type === 'ending';
  const accent = currentNode.accentColor || getCategoryMeta(currentNode.category).color;
  const CategoryIcon = getCategoryMeta(currentNode.category).icon;

  return (
    <div className={`relative min-h-screen font-sans overflow-x-hidden selection:bg-amber-500/30 ${isDark ? 'text-white' : 'text-black'}`}>
      <FilmGrain />

      {/* ═══ FONDO ═══ */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Cinematic Parallax Background */}
        {((t as any).isCinematic) ? (
          <motion.div 
            className="absolute inset-0 w-[110%] h-[110%] -left-[5%] -top-[5%]"
            animate={{ 
              x: direction * 10,
              y: direction * 5,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            style={{
              backgroundColor: '#0a0a0c',
              backgroundImage: `url('/archivos/imágenes/bg_${graph.id}.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.6) contrast(1.2)'
            }}
          >
            {/* Ambient Lighting Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c]/80" />
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{ background: `radial-gradient(circle at 50% 50%, ${accent}33 0%, transparent 60%)` }}
            />
          </motion.div>
        ) : isBrutalist ? (
          <div className={`absolute inset-0 bg-gradient-to-b ${
            graph.id.includes('3453') ? 'from-[#1a0b0b] via-[#2d1212] to-[#1a0b0b]' : 
            graph.id.includes('3588') ? 'from-[#0b0b1a] via-[#12122d] to-[#0b0b1a]' : 
            t.bgGradient
          }`} />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-b ${t.bgGradient}`} />
        )}
        
        {isBrutalist && (
          <>
            {/* High-end patterns for Neobrutalism */}
            <div className="absolute inset-0 halftone opacity-[0.1] mix-blend-overlay pointer-events-none" />
            <div className={`absolute inset-0 opacity-5 pointer-events-none ${
               graph.id.includes('3453') ? 'bg-red-500/10' : 'bg-blue-500/10'
            }`} />
            
            {/* Dynamic glow based on accent */}
            <motion.div 
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-0 left-0 w-full h-full"
              style={{ background: `radial-gradient(circle at 50% 30%, ${accent}44 0%, transparent 70%)` }}
            />

            <div className="absolute inset-0 opacity-[0.15]"
              style={{ 
                backgroundImage: `
                  linear-gradient(90deg, #fff 1px, transparent 1px),
                  linear-gradient(0deg, #fff 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px'
              }}
            />
          </>
        )}
      </div>

      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className={`backdrop-blur-xl border-b ${
          isBrutalist 
            ? 'bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.05)]' 
            : (isDark ? 'bg-black/60 border-white/10' : 'bg-white/80 border-black/10')
        }`}>
          <div className="max-w-5xl mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={onBack} 
                className={`group flex items-center gap-2 transition-all ${
                  isBrutalist 
                    ? 'bg-black text-white px-5 py-2 border-4 border-black shadow-[4px_4px_0_0_#000] hover:bg-zinc-800 active:shadow-none active:translate-x-1 active:translate-y-1' 
                    : (isDark ? 'text-white/70 hover:text-white' : 'text-black/60 hover:text-black')
                }`}
              >
                <ChevronLeft className={`w-5 h-5 ${!isBrutalist && 'group-hover:-translate-x-1 transition-transform'}`} />
                <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">Volver</span>
              </button>
              <div className={`w-px h-4 ${isDark ? 'bg-white/20' : 'bg-black/20'} ${isBrutalist && 'hidden'}`} />
              <span className={`text-[10px] font-mono uppercase tracking-[0.2em] font-black ${isDark ? 'text-white/40' : 'text-black/40'}`}>
                {isBrutalist ? `LAB // ${graph.id}` : `Art. ${graph.id} · Multicamino`}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-3">
              {isBrutalist && <div className="w-8 h-8 bg-black flex items-center justify-center rotate-12"><Zap size={14} className="text-white" /></div>}
              <span className={`text-xs font-black uppercase tracking-tight truncate max-w-[250px] ${isDark ? 'text-white/60' : 'text-black/80'}`}>
                {currentNode.title}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2">
                <span className={`text-[10px] font-mono font-black ${isDark ? 'text-white/40' : 'text-black/40'}`}>{progress}%</span>
                <div className={`w-20 h-2 border-2 ${isBrutalist ? 'border-black bg-zinc-100' : (isDark ? 'bg-white/10' : 'bg-black/10')}`}>
                  <motion.div className="h-full" style={{ background: accent }}
                    initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
                </div>
              </div>
              <button onClick={() => setShowMap(true)}
                className={`flex items-center gap-2 px-4 py-2 border-4 border-black transition-all ${
                  isBrutalist 
                    ? 'bg-white hover:bg-zinc-100 shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1' 
                    : (isDark ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-black/5 border-black/10 hover:bg-black/10')
                }`}>
                <Eye className={`w-4 h-4 ${isDark ? 'text-white/50' : 'text-black/50'}`} />
                <span className={`text-[10px] font-black uppercase tracking-widest ${isDark ? 'text-white/50' : 'text-black/80'}`}>Explorar</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ CONTENIDO PRINCIPAL ═══ */}
      <main className={`relative z-10 pt-24 pb-12 px-4 min-h-screen flex flex-col items-center ${isCinematic ? 'justify-end' : 'justify-center'}`}>
        <div className={`w-full ${isCinematic ? 'max-w-5xl' : 'max-w-3xl'} mx-auto`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentNode.id}
              initial={{ opacity: 0, y: direction * 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: direction * -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={isCinematic ? "flex flex-col gap-6" : ""}
            >
              {/* ─── Botones de elección (SI ES CINEMÁTICO, ARRIBA DEL DIÁLOGO) ─── */}
              {isCinematic && (
                <div className="flex flex-wrap justify-center gap-4 mb-2">
                  {currentNode.exits.map((exit, index) => {
                    const accessible = canAccessExit(exit);
                    const ExitIcon = ICON_MAP[exit.icon || 'ArrowRight'] || ArrowRight;
                    return (
                      <motion.button
                        key={exit.to}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                        onClick={() => accessible && navigateTo(exit.to)}
                        disabled={!accessible}
                        className={`group flex items-center gap-3 px-6 py-4 border-4 border-black transition-all ${
                          accessible 
                            ? 'bg-[#fccb06] hover:bg-white shadow-[6px_6px_0_0_#000] active:shadow-none active:translate-x-1 active:translate-y-1' 
                            : 'bg-zinc-200 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <ExitIcon size={20} className="text-black" />
                        <span className="text-xs font-black uppercase tracking-tighter text-black">{exit.label}</span>
                        {!accessible && <Lock size={14} className="text-black/30" />}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ─── Panel de diálogo / Contenido ─── */}
              <div className={`relative overflow-hidden transition-all duration-700 ${
                isBrutalist 
                  ? `${isCinematic ? 'border-[6px]' : 'border-[10px]'} border-black shadow-[20px_20px_0_0_#000] rounded-none` 
                  : 'rounded-3xl border shadow-2xl'
                }`}
                style={{
                  background: isBrutalist ? t.panelBg : `linear-gradient(180deg, ${t.panelBg} 0%, ${t.panelBg} 100%)`,
                  borderColor: isBrutalist ? '#000000' : t.border,
                  boxShadow: isBrutalist ? (isCinematic ? `12px 12px 0 0 #000` : `25px 25px 0 0 #000, 25px 25px 60px ${accent}44`) : `0 0 60px ${accent}15, inset 0 1px 0 ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.03)'}`,
                }}>
                {isBrutalist && (
                  <>
                    <div className="absolute inset-0 halftone opacity-[0.05] pointer-events-none" />
                    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-5" style={{ background: accent }} />
                  </>
                )}
                
                {/* Cabecera del Panel (Simplificada en Cinematic) */}
                <div className={`flex items-center justify-between px-6 py-3 ${isBrutalist ? 'bg-zinc-900 text-white border-b-4 border-black' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rotate-45 border border-white`} style={{ background: getCategoryMeta(currentNode.category).color }} />
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white">
                      {getCategoryMeta(currentNode.category).label.toUpperCase()}
                    </span>
                  </div>
                  {isEnding && (
                    <span className="text-[9px] font-black uppercase tracking-widest bg-[#fccb06] text-black px-3 py-0.5 border-2 border-black">FINAL</span>
                  )}
                </div>

                <div className={`flex flex-col md:flex-row ${isCinematic ? 'items-start' : ''}`}>
                  {/* Título y Subtítulo */}
                  <div className={`px-8 pt-8 pb-4 relative ${isCinematic ? 'md:w-1/3 border-r-0 md:border-r-4 border-black' : ''}`}>
                    <h2 className={`${isCinematic ? 'text-2xl md:text-3xl' : 'text-3xl md:text-5xl'} font-black leading-[0.9] uppercase tracking-tighter italic text-black`}>
                      {currentNode.title}
                    </h2>
                    {currentNode.subtitle && (
                      <p className="text-[10px] mt-4 font-mono font-black uppercase tracking-widest opacity-60 border-l-4 border-black pl-3 text-black">
                        {currentNode.subtitle}
                      </p>
                    )}
                  </div>

                  {/* Cuerpo del Diálogo */}
                  <div className={`px-8 py-6 ${isCinematic ? 'md:w-2/3 max-h-[300px] overflow-y-auto custom-scrollbar' : ''}`}>
                    {/* Cita */}
                    {currentNode.quote && (
                      <div className="mb-4 p-4 border-l-4 border-[#fccb06] bg-zinc-50">
                        <blockquote className="text-sm italic text-black/80 leading-snug">
                          "{currentNode.quote.text}"
                        </blockquote>
                        <p className="text-[9px] font-black uppercase mt-2 text-black/40">— {currentNode.quote.author}</p>
                      </div>
                    )}

                    {/* Texto Principal */}
                    <div className={isCinematic ? "text-sm" : ""}>
                      {formatContent(currentNode.content, isDark)}
                    </div>

                    {/* Datos */}
                    {currentNode.dataView === 'table' && currentNode.dataContent && (
                      <div className="mt-4 p-3 bg-zinc-100 border-2 border-black text-[10px] text-black/70">
                        <div className="font-black uppercase mb-1 flex items-center gap-1"><Table size={10}/> Data_Entry</div>
                        {currentNode.dataContent}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* ─── Botones de elección (SI NO ES CINEMÁTICO, ABAJO) ─── */}
              {!isCinematic && (
                <div className="mt-8 space-y-3">
                  {currentNode.exits.map((exit, index) => {
                    const accessible = canAccessExit(exit);
                    const ExitIcon = ICON_MAP[exit.icon || 'ArrowRight'] || ArrowRight;

                    return (
                      <motion.button
                        key={exit.to}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                        onClick={() => accessible && navigateTo(exit.to)}
                        disabled={!accessible}
                        className={`group w-full text-left relative overflow-hidden transition-all duration-300 rounded-none border-[6px] border-black ${
                          accessible
                            ? `bg-white hover:bg-zinc-50 hover:shadow-[10px_10px_0_0_#000] hover:-translate-x-2 hover:-translate-y-2 cursor-pointer`
                            : `bg-zinc-100 cursor-not-allowed opacity-40`
                        }`}
                      >
                        <div className={`flex items-center gap-5 p-6 ${accessible ? 'group-hover:bg-[#fccb06]/10' : ''}`}>
                          <div className={`shrink-0 w-14 h-14 flex items-center justify-center transition-all border-[5px] border-black bg-white group-hover:rotate-[15deg]`}>
                            {accessible ? (
                              <ExitIcon className="w-8 h-8 text-black" />
                            ) : (
                              <Lock className="w-6 h-6 text-black/20" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <span className="text-base md:text-lg font-black uppercase tracking-tighter block leading-none mb-1 text-black">
                              {exit.label}
                            </span>
                            {!accessible && exit.requiresVisited && (
                              <span className="text-[10px] mt-0.5 block font-mono uppercase tracking-[0.2em] font-black text-black/30">
                                DATOS_BLOQUEADOS // REQUERIDO: {exit.requiresVisited.map(id => graph.nodes[id]?.title || id).join(', ')}
                              </span>
                            )}
                          </div>
                          <div className="shrink-0">
                            {accessible ? (
                              <ArrowRight className="w-6 h-6 transition-all group-hover:translate-x-3 text-black" />
                            ) : (
                              <Lock className="w-4 h-4 text-black/20" />
                            )}
                          </div>
                        </div>
                        {accessible && <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-black opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: accent }} />}
                      </motion.button>
                    );
                  })}
                </div>
              )}

              {/* ─── Progreso por categorías (auto-detectadas) ─── */}
              {!isEnding && detectedCategories.length > 0 && (
                <div className={`mt-12 p-6 transition-all duration-500 ${
                  isBrutalist 
                    ? 'border-[6px] border-black bg-black shadow-[10px_10px_0_0_rgba(0,0,0,0.3)]' 
                    : `rounded-2xl border ${isDark ? 'border-white/5 bg-white/[0.02]' : 'border-black/5 bg-black/[0.02]'}`
                }`}>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] ${isBrutalist ? 'text-white' : (isDark ? 'text-white/30' : 'text-black/30')}`}>
                      {isBrutalist ? 'EXPLORACIÓN_LAB // STATUS' : 'Tu recorrido'}
                    </span>
                    <span className={`text-[10px] font-mono font-black uppercase ${isBrutalist ? 'text-white/60' : (isDark ? 'text-white/30' : 'text-black/30')}`}>
                      {state.visitedNodes.length} NODOS_VISITADOS
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {detectedCategories.map(cat => {
                      const meta = getCategoryMeta(cat);
                      const pct = catProgress[cat] || 0;
                      const isActive = currentNode.category === cat;
                      return (
                        <div key={cat}
                          className={`flex items-center gap-2 px-3 py-1.5 transition-all text-[10px] font-black uppercase tracking-wider ${
                            isBrutalist
                              ? `border-2 ${isActive ? 'border-white bg-white text-black' : pct > 0 ? 'border-white/40 bg-white/10 text-white' : 'border-white/10 text-white/20'}`
                              : `rounded-full border ${isActive ? (isDark ? 'border-white/20 bg-white/10 text-white' : 'border-black/20 bg-black/10 text-black') : pct > 0 ? (isDark ? 'border-white/10 bg-white/5 text-white/50' : 'border-black/10 bg-black/5 text-black/50') : (isDark ? 'border-white/5 text-white/20' : 'border-black/5 text-black/20')}`
                          }`}>
                          <div className={`w-1.5 h-1.5 ${isBrutalist ? '' : 'rounded-full'}`} style={{ background: pct > 0 ? meta.color : (isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)') }} />
                          {meta.label}
                          {pct > 0 && <span className={isBrutalist ? 'text-white/50 ml-1' : (isDark ? 'text-white/30 ml-1' : 'text-black/30 ml-1')}>{pct}%</span>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ─── Acciones de final ─── */}
              {isEnding && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
                  className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button onClick={() => setShowResetConfirm(true)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full border text-sm font-medium transition-all ${
                      isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white/70' : 'bg-black/5 border-black/10 hover:bg-black/10 text-black/70'
                    }`}>
                    <RotateCcw className="w-4 h-4" /> Reiniciar experiencia
                  </button>
                  <button onClick={onBack}
                    className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium"
                    style={{ background: accent, color: isDark ? '#1a0f0f' : '#ffffff' }}>
                    <ChevronLeft className="w-4 h-4" /> Volver a Mapas
                  </button>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* ═══ MAPA DEL RECORRIDO (Modal) ═══ */}
      <AnimatePresence>
        {showMap && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={() => setShowMap(false)} />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-2xl max-h-[80vh] overflow-y-auto p-10 transition-all ${
                isBrutalist 
                  ? 'border-[10px] border-black bg-[#fdf8f1] shadow-[25px_25px_0_0_#000] rounded-none' 
                  : `rounded-3xl border ${isDark ? 'border-white/10 bg-[#1a0f0f]/95' : 'border-black/10 bg-[#f5f0e8]/95'}`
              }`}
              style={{ boxShadow: isBrutalist ? `30px 30px 0 0 #000, 0 0 80px ${accent}33` : `0 0 60px ${accent}10` }}>
              <div className="flex items-center justify-between mb-8 border-b-4 border-black pb-4">
                <h3 className={`text-2xl font-black uppercase italic tracking-tighter ${isBrutalist ? 'text-black' : (isDark ? 'text-white' : 'text-black')}`}>Mapa del Recorrido</h3>
                <button onClick={() => setShowMap(false)} className={`p-2 rounded-full transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}>
                  <X className={`w-5 h-5 ${isDark ? 'text-white/50' : 'text-black/50'}`} />
                </button>
              </div>

              {/* Progreso */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-black uppercase tracking-widest ${isBrutalist ? 'text-black' : (isDark ? 'text-white/50' : 'text-black/50')}`}>Exploración Total</span>
                  <span className="text-sm font-mono font-black" style={{ color: accent }}>{progress}%</span>
                </div>
                <div className={`w-full h-4 border-4 ${isBrutalist ? 'border-black bg-zinc-100' : (isDark ? 'bg-white/10' : 'bg-black/10 rounded-full')} overflow-hidden`}>
                  <div className="h-full transition-all duration-500" style={{ width: `${progress}%`, background: accent }} />
                </div>
              </div>

              {/* Categorías detectadas */}
              <div className="mb-8">
                <h4 className={`text-[10px] font-black uppercase tracking-[0.3em] mb-4 ${isBrutalist ? 'text-black/40' : (isDark ? 'text-white/30' : 'text-black/30')}`}>Taxonomía del Artículo</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {detectedCategories.map(cat => {
                    const meta = getCategoryMeta(cat);
                    const pct = catProgress[cat] || 0;
                    return (
                      <div key={cat} className={`flex items-center gap-2 p-3 border-4 transition-colors ${
                        isBrutalist 
                          ? 'border-black bg-white hover:bg-zinc-50' 
                          : `border-white/5 ${isDark ? 'bg-white/5' : 'bg-black/5'}`
                      } ${!isBrutalist && 'rounded-lg'}`}>
                        <meta.icon className="w-4 h-4 shrink-0" style={{ color: meta.color }} />
                        <span className={`text-xs font-black uppercase tracking-tight ${isBrutalist ? 'text-black' : (isDark ? 'text-white/60' : 'text-black/60')}`}>{meta.label}</span>
                        <span className={`text-[10px] font-mono ml-auto font-black ${isBrutalist ? 'text-black/30' : (isDark ? 'text-white/30' : 'text-black/30')}`}>{pct}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Finales */}
              {graph.endings && graph.endings.length > 0 && (
                <div className="mb-6">
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Finales desbloqueados</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {graph.endings.map(ending => {
                      const unlocked = state.unlockedEndings.includes(ending.id);
                      return (
                        <div key={ending.id} className={`flex items-center gap-3 p-3 rounded-xl border ${
                          unlocked
                            ? 'border-amber-500/20 bg-amber-500/5'
                            : (isDark ? 'border-white/5 bg-white/[0.02] opacity-40' : 'border-black/5 bg-black/[0.02] opacity-40')
                        }`}>
                          {unlocked ? <Unlock className="w-4 h-4 text-amber-400" /> : <Lock className={`w-4 h-4 ${isDark ? 'text-white/20' : 'text-black/20'}`} />}
                          <div>
                            <span className={`text-sm ${unlocked ? (isDark ? 'text-white' : 'text-black') : (isDark ? 'text-white/30' : 'text-black/30')}`}>{ending.title}</span>
                            <p className={`text-[10px] ${isDark ? 'text-white/30' : 'text-black/30'}`}>{ending.condition}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Historial */}
              <div>
                <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${isDark ? 'text-white/30' : 'text-black/30'}`}>Tu camino</h4>
                <div className="space-y-2">
                  {state.pathHistory.map((nodeId, i) => {
                    const node = graph.nodes[nodeId];
                    if (!node) return null;
                    const isCurrent = nodeId === state.currentNodeId;
                    const meta = getCategoryMeta(node.category);
                    return (
                      <button key={`${nodeId}-${i}`} onClick={() => { navigateTo(nodeId); setShowMap(false); }}
                        className={`w-full flex items-center gap-3 p-3 transition-all ${
                          isBrutalist 
                            ? `border-4 border-black ${isCurrent ? 'bg-[#fccb06]/20 shadow-[4px_4px_0_0_#000]' : 'bg-[#fdf8f1] hover:bg-zinc-50'}` 
                            : `rounded-lg ${isCurrent ? (isDark ? 'bg-white/10' : 'bg-black/10') : (isDark ? 'hover:bg-white/5' : 'hover:bg-black/5')}`
                        }`}>
                        <span className={`text-[10px] font-mono font-black w-6 ${isDark ? 'text-white/20' : 'text-black/30'}`}>{String(i + 1).padStart(2, '0')}</span>
                        <div className={`w-3 h-3 shrink-0 ${isBrutalist ? '' : 'rounded-full'}`} style={{ background: meta.color }} />
                        <span className={`text-xs font-black uppercase tracking-tight ${isCurrent ? (isBrutalist ? 'text-black' : (isDark ? 'text-white' : 'text-black')) : (isDark ? 'text-white/50' : 'text-black/50')}`}>{node.title}</span>
                        {isCurrent && <span className={`ml-auto text-[10px] font-black uppercase px-2 py-0.5 ${isBrutalist ? 'bg-black text-white' : (isDark ? 'bg-white/10 text-white/50' : 'bg-black/10 text-black/50')}`}>Actual</span>}
                      </button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ CONFIRMACIÓN REINICIO ═══ */}
      <AnimatePresence>
        {showResetConfirm && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-xl" onClick={() => setShowResetConfirm(false)} />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              className={`relative w-full max-w-sm p-8 text-center transition-all ${
                isBrutalist 
                  ? 'border-8 border-black bg-white shadow-[15px_15px_0_0_#000] rounded-none' 
                  : `rounded-3xl border ${isDark ? 'border-white/10 bg-[#1a0f0f]' : 'border-black/10 bg-[#f5f0e8]'}`
              }`}>
              <RotateCcw className={`w-10 h-10 mx-auto mb-4 ${isDark ? 'text-white/30' : 'text-black/30'}`} />
              <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-black'}`}>¿Reiniciar experiencia?</h3>
              <p className={`text-sm mb-6 ${isDark ? 'text-white/50' : 'text-black/50'}`}>Perderás tu progreso actual y comenzarás desde el inicio.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowResetConfirm(false)}
                  className={`flex-1 py-3 border-4 font-black uppercase tracking-widest text-xs transition-all ${
                    isBrutalist 
                      ? 'border-black bg-zinc-100 hover:bg-zinc-200 shadow-[4px_4px_0_0_#000] active:shadow-none' 
                      : (isDark ? 'border-white/10 text-white/60 hover:bg-white/5 rounded-xl' : 'border-black/10 text-black/60 hover:bg-black/5 rounded-xl')
                  }`}>
                  Cancelar
                </button>
                <button onClick={() => { reset(); setShowResetConfirm(false); }}
                  className={`flex-1 py-3 border-4 font-black uppercase tracking-widest text-xs transition-all ${
                    isBrutalist 
                      ? 'border-black shadow-[4px_4px_0_0_#000] active:shadow-none translate-y-0 active:translate-y-1' 
                      : 'rounded-xl'
                  }`} 
                  style={{ background: accent, color: isBrutalist ? '#000' : (isDark ? '#1a0f0f' : '#ffffff'), borderColor: isBrutalist ? '#000' : 'transparent' }}>
                  Reiniciar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
