import React from 'react';
import { motion } from 'motion/react';
import { Brain, BookOpen, Play } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export default function Hero3570({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gray-950 px-6">
      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle,rgba(59,130,246,0.12)_0%,transparent_60%)]" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-widest"
        >
          <Brain size={16} />
          <span>Revisión Sistemática PRISMA // N° 41 (2026)</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-6"
        >
          Critical Teacher
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 font-light mb-4"
        >
          Formación docente para el desarrollo del pensamiento crítico
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Análisis de 15 estudios empíricos (2015-2025) sobre cómo formar docentes de educación preescolar en pensamiento crítico.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button
            onClick={onStart}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold uppercase tracking-widest rounded-xl overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center gap-3"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explorar investigación <Play size={18} />
            </span>
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">Scroll para leer</p>
        <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-emerald-500 mx-auto" />
      </div>
    </section>
  );
}
