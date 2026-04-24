/**
 * TIPOS DEL SISTEMA MULTICAMINO
 * Experiencia narrativa interactiva para artículos académicos RPP
 * Estilo: Visual Novel / Aventura Gráfica
 */

export type ExitType = 'secuencial' | 'transversal' | 'profundidad' | 'retorno' | 'sintesis' | 'final';

export type NodeType = 'narrative' | 'choice' | 'data' | 'quote' | 'synthesis' | 'ending';

export interface PathExit {
  to: string;
  label: string;
  type: ExitType;
  /** Condición: requiere haber visitado ciertos nodos para desbloquearse */
  requiresVisited?: string[];
  /** Condición: requiere NO haber visitado ciertos nodos */
  requiresNotVisited?: string[];
  /** Ícono opcional para el botón */
  icon?: string;
}

export interface PathNode {
  id: string;
  title: string;
  type: NodeType;
  /** Contenido principal del nodo (puede ser texto largo) */
  content: string;
  /** Subtítulo o contexto opcional */
  subtitle?: string;
  /** Salidas disponibles desde este nodo */
  exits: PathExit[];
  /** Categoría temática para el mapa de progreso */
  category: 'intro' | 'contexto' | 'metodologia' | 'resultados' | 'discusion' | 'conclusiones' | 'profundidad';
  /** Si es un nodo de datos, mostrar visualización */
  dataView?: 'table' | 'chart' | 'network';
  /** Datos asociados (tablas, etc) */
  dataContent?: string;
  /** Si es un nodo de cita, la cita verbatim */
  quote?: {
    text: string;
    author: string;
    context: string;
  };
  /** Color de acento para este nodo */
  accentColor?: string;
}

export interface PathState {
  currentNodeId: string;
  visitedNodes: string[];
  pathHistory: string[];
  unlockedEndings: string[];
  startTime: number;
  lastAccess: number;
}

export interface ArticleGraph {
  id: string;
  title: string;
  author: string;
  doi: string;
  startingNode: string;
  nodes: Record<string, PathNode>;
  endings: {
    id: string;
    title: string;
    condition: string;
    description: string;
  }[];
}
