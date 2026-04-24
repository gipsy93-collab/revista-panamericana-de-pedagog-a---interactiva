/**
 * FACTORY: createMultipathArticle
 * Genera un componente React listo para usar a partir de una configuración de grafo.
 *
 * Uso:
 *   const Multipath3604 = createMultipathArticle(graph3604, { theme: 'cool' });
 *   // Luego usar como: <Multipath3604 onBack={() => ...} />
 */

import React from 'react';
import MultipathEngine from './MultipathEngine';
import type { ArticleGraph } from './types';

interface CreateOptions {
  /** Tema visual: 'dark' | 'warm' | 'cool' | 'academic' */
  theme?: 'dark' | 'warm' | 'cool' | 'academic';
}

export function createMultipathArticle(graph: ArticleGraph, options: CreateOptions = {}) {
  const { theme = 'dark' } = options;

  return function MultipathArticle({ onBack }: { onBack: () => void }) {
    return <MultipathEngine graph={graph} onBack={onBack} theme={theme} />;
  };
}

export default createMultipathArticle;
