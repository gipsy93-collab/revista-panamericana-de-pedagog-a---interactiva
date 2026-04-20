import React from 'react';

interface Props {
  onBack?: () => void;
}

export function ArticleError({ onBack }: Props) {
  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center p-6">
      <div className="max-w-lg text-center">
        <h1 className="text-3xl text-white mb-4">⚠️ Artículo no disponible</h1>
        <p className="text-zinc-400 mb-6">Este contenido no pudo cargarse. Puedes volver a la galería e intentar con otro artículo.</p>
        {onBack && (
          <button 
            onClick={onBack}
            className="px-6 py-3 bg-zine-red text-white rounded hover:bg-red-600 transition-colors"
          >
            Volver a la galería
          </button>
        )}
      </div>
    </div>
  );
}
