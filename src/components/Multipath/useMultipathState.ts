/**
 * HOOK: useMultipathState
 * Gestiona el estado del recorrido multicamino con persistencia en localStorage
 */

import { useState, useEffect, useCallback } from 'react';
import type { PathState, ArticleGraph } from './types';

const STORAGE_KEY = 'rpp_multipath_state';

interface StoredState {
  [articleId: string]: PathState;
}

function getInitialState(graph: ArticleGraph): PathState {
  return {
    currentNodeId: graph.startingNode,
    visitedNodes: [graph.startingNode],
    pathHistory: [graph.startingNode],
    unlockedEndings: [],
    startTime: Date.now(),
    lastAccess: Date.now(),
  };
}

function loadState(articleId: string): PathState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const stored: StoredState = JSON.parse(raw);
    const state = stored[articleId];
    if (!state) return null;
    // Validar que el estado tenga la estructura correcta
    if (!state.currentNodeId || !Array.isArray(state.visitedNodes)) return null;
    return state;
  } catch {
    return null;
  }
}

function saveState(articleId: string, state: PathState) {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const stored: StoredState = raw ? JSON.parse(raw) : {};
    stored[articleId] = {
      ...state,
      lastAccess: Date.now(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
  } catch (e) {
    console.warn('No se pudo guardar el estado multicamino:', e);
  }
}

export function useMultipathState(graph: ArticleGraph) {
  const [state, setState] = useState<PathState>(() => {
    const saved = loadState(graph.id);
    return saved || getInitialState(graph);
  });

  // Guardar en localStorage cada vez que cambia el estado
  useEffect(() => {
    saveState(graph.id, state);
  }, [graph.id, state]);

  const navigateTo = useCallback(
    (nodeId: string) => {
      setState((prev) => {
        const visited = prev.visitedNodes.includes(nodeId)
          ? prev.visitedNodes
          : [...prev.visitedNodes, nodeId];

        // Verificar si es un final
        const isEnding = graph.nodes[nodeId]?.type === 'ending';
        const unlockedEndings = isEnding
          ? [...new Set([...prev.unlockedEndings, nodeId])]
          : prev.unlockedEndings;

        return {
          ...prev,
          currentNodeId: nodeId,
          visitedNodes: visited,
          pathHistory: [...prev.pathHistory, nodeId],
          unlockedEndings,
          lastAccess: Date.now(),
        };
      });
    },
    [graph]
  );

  const canAccessExit = useCallback(
    (exit: { requiresVisited?: string[]; requiresNotVisited?: string[] }): boolean => {
      if (exit.requiresVisited) {
        const hasAll = exit.requiresVisited.every((id) => state.visitedNodes.includes(id));
        if (!hasAll) return false;
      }
      if (exit.requiresNotVisited) {
        const hasAny = exit.requiresNotVisited.some((id) => state.visitedNodes.includes(id));
        if (hasAny) return false;
      }
      return true;
    },
    [state.visitedNodes]
  );

  const reset = useCallback(() => {
    const fresh = getInitialState(graph);
    setState(fresh);
    saveState(graph.id, fresh);
  }, [graph]);

  const getProgress = useCallback((): number => {
    const totalNodes = Object.keys(graph.nodes).length;
    const visitedCount = state.visitedNodes.length;
    return Math.round((visitedCount / totalNodes) * 100);
  }, [graph, state.visitedNodes]);

  const getCategoryProgress = useCallback((): Record<string, number> => {
    const categories: Record<string, string[]> = {};
    Object.values(graph.nodes).forEach((node) => {
      if (!categories[node.category]) categories[node.category] = [];
      categories[node.category].push(node.id);
    });

    const progress: Record<string, number> = {};
    Object.entries(categories).forEach(([cat, ids]) => {
      const visitedInCat = ids.filter((id) => state.visitedNodes.includes(id)).length;
      progress[cat] = Math.round((visitedInCat / ids.length) * 100);
    });
    return progress;
  }, [graph, state.visitedNodes]);

  return {
    state,
    navigateTo,
    canAccessExit,
    reset,
    getProgress,
    getCategoryProgress,
  };
}
