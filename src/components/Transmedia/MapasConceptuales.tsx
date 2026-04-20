import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Map, Zap, Leaf, BookOpen, ArrowRight } from 'lucide-react';
import { FilmGrain } from '../FilmGrain';

const MAPAS = [
  {
    id: 'mapa_3497',
    numero: '01',
    titulo: 'Innovación Pedagógica en Bachillerato Técnico Agropecuario',
    autores: 'Dueñas Basurto & Zambrano Vera',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 39',
    tema: 'Prácticas sostenibles · Educación técnica · Ecuador',
    color: '#0ea5e9',
    colorAlt: '#f97316',
    bg: 'from-sky-900 to-cyan-950',
    disponible: true,
  },
  // Placeholder para futuros mapas
  {
    id: 'mapa_proximamente_1',
    numero: '02',
    titulo: 'Próximamente',
    autores: '—',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía',
    tema: 'En preparación',
    color: '#64748b',
    colorAlt: '#94a3b8',
    bg: 'from-gray-800 to-slate-900',
    disponible: false,
  },
  {
    id: 'mapa_proximamente_2',
    numero: '03',
    titulo: 'Próximamente',
    autores: '—',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía',
    tema: 'En preparación',
    color: '#64748b',
    colorAlt: '#94a3b8',
    bg: 'from-gray-800 to-slate-900',
    disponible: false,
  },
];

interface Props {
  onBack: () => void;
  onOpenMapa: (id: string) => void;
}

export default function MapasConceptuales({ onBack, onOpenMapa }: Props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen bg-[#0a1628] text-white font-sans overflow-x-hidden selection:bg-[#0ea5e9] selection:text-white">
      <FilmGrain />

      {/* Ambient orbs */}
      <div className="fixed top-0 right-0 w-[700px] h-[700px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-orange-400/10 blur-[150px] rounded-full pointer-events-none" />

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-[#0ea5e9] transition-all shadow-[4px_4px_0_0_#000] active:shadow-none -translate-y-0.5 active:translate-y-0"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver al transmedia</span>
          </button>

          <div className="hidden md:flex items-center gap-4">
            <div className="bg-[#0ea5e9] text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">
              MAPAS CONCEPTUALES
            </div>
            <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-60 text-black">
              MIND_MAP_LAB // RPP_2026
            </span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#0ea5e9] border-2 border-black flex items-center justify-center">
              <Map size={24} className="text-white" />
            </div>
            <span className="font-mono text-[#0ea5e9] uppercase text-sm font-black tracking-[0.3em]">
              Laboratorio Visual // Conceptual_Maps
            </span>
          </div>

          <h1 className="text-6xl md:text-9xl font-display uppercase leading-[0.85] text-white mb-8">
            <span className="text-[#0ea5e9]">MAPAS</span>{' '}
            <span className="text-[#f97316]">MENTALES</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 font-sans font-light max-w-2xl leading-relaxed">
            Visualizaciones interactivas de investigaciones publicadas en la RPP. 
            Explora los ejes temáticos, datos y conclusiones de cada artículo de forma inmersiva.
          </p>
        </motion.div>

        {/* Grid de mapas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MAPAS.map((mapa, i) => (
            <motion.div
              key={mapa.id}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.15, type: 'spring', damping: 20 }}
            >
              {mapa.disponible ? (
                <button
                  onClick={() => onOpenMapa(mapa.id)}
                  className="group w-full text-left"
                >
                  <div className={`relative bg-gradient-to-br ${mapa.bg} border-4 border-black shadow-[12px_12px_0_0_#000] hover:shadow-[18px_18px_0_0_#000] hover:-translate-y-4 transition-all duration-300 overflow-hidden min-h-[420px] flex flex-col justify-between p-10 rounded-[2rem]`}>
                    {/* BG decoration */}
                    <div
                      className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-30"
                      style={{ background: mapa.color }}
                    />
                    <div
                      className="absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl opacity-20"
                      style={{ background: mapa.colorAlt }}
                    />

                    {/* Top row */}
                    <div className="relative z-10 flex items-start justify-between">
                      <span
                        className="font-mono text-[11px] font-black uppercase tracking-[0.3em] px-4 py-2 border-2 border-current rounded-full"
                        style={{ color: mapa.color, borderColor: mapa.color + '60' }}
                      >
                        MAPA {mapa.numero}
                      </span>
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-black/30 group-hover:scale-110 transition-transform"
                        style={{ background: mapa.color }}
                      >
                        <Zap size={20} className="text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-8">
                      <h2
                        className="text-3xl md:text-4xl font-display uppercase leading-tight mb-4 group-hover:translate-x-2 transition-transform duration-500"
                        style={{ color: mapa.color }}
                      >
                        {mapa.titulo}
                      </h2>
                      <p className="text-white/70 font-mono text-xs uppercase tracking-widest mb-2">
                        {mapa.autores} · {mapa.año}
                      </p>
                      <p className="text-white/50 text-sm mb-6">{mapa.revista}</p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {mapa.tema.split(' · ').map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] font-black uppercase tracking-widest px-3 py-1 border border-white/20 text-white/60 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div
                        className="inline-flex items-center gap-3 font-black uppercase tracking-[0.2em] text-sm border-t-2 border-white/10 group-hover:border-white/30 pt-4 transition-colors"
                        style={{ color: mapa.color }}
                      >
                        Explorar mapa <ArrowRight size={20} className="group-hover:translate-x-3 transition-transform" />
                      </div>
                    </div>
                  </div>
                </button>
              ) : (
                <div
                  className={`relative bg-gradient-to-br ${mapa.bg} border-4 border-white/10 overflow-hidden min-h-[420px] flex flex-col justify-between p-10 rounded-[2rem] opacity-40`}
                >
                  <div className="relative z-10 flex items-start justify-between">
                    <span className="font-mono text-[11px] font-black uppercase tracking-[0.3em] px-4 py-2 border-2 border-white/20 rounded-full text-white/40">
                      MAPA {mapa.numero}
                    </span>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/10 bg-white/5">
                      <BookOpen size={20} className="text-white/30" />
                    </div>
                  </div>
                  <div className="relative z-10 mt-8">
                    <h2 className="text-3xl font-display uppercase leading-tight mb-4 text-white/30">
                      {mapa.titulo}
                    </h2>
                    <p className="text-white/20 font-mono text-xs uppercase tracking-widest mb-4">
                      {mapa.tema}
                    </p>
                    <div className="inline-flex items-center gap-2 text-white/20 text-xs font-black uppercase tracking-widest border-t border-white/10 pt-4">
                      <Leaf size={14} /> En preparación
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer deco */}
      <footer className="py-16 border-t-4 border-white/5 text-center opacity-20 mt-16">
        <div className="font-display text-6xl md:text-9xl uppercase tracking-tighter italic">
          MIND_MAPS // LAB
        </div>
      </footer>
    </div>
  );
}
