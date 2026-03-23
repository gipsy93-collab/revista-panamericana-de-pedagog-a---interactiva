import React from 'react';
import { motion } from 'motion/react';

/**
 * Componente de carga para usar con React.Suspense
 * Muestra un indicador elegante mientras se cargan los chunks lazy
 */
export const PageLoader: React.FC = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Spinner animado */}
        <div className="relative w-16 h-16">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 border-4 border-white/10 border-t-zine-red rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-2 border-4 border-white/5 border-b-pop-yellow rounded-full"
          />
        </div>
        
        {/* Texto */}
        <div className="text-center">
          <p className="text-white/60 font-mono text-sm tracking-wider">
            CARGANDO SECCIÓN...
          </p>
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex gap-1 justify-center mt-2"
          >
            <span className="w-2 h-2 bg-zine-red rounded-full" />
            <span className="w-2 h-2 bg-zine-red rounded-full" />
            <span className="w-2 h-2 bg-zine-red rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Versión minimal del loader para usar en componentes pequeños
 */
export const MiniLoader: React.FC = () => (
  <div className="flex items-center justify-center p-8">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      className="w-8 h-8 border-3 border-white/10 border-t-zine-red rounded-full"
    />
  </div>
);
