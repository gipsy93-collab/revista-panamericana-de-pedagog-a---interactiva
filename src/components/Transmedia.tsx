import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, Mic, FileText, ChevronRight, Globe, Gamepad2, Volume2, Pause, SkipForward, SkipBack, Share2, Plus, Info } from 'lucide-react';

const TRANSMEDIA_PROJECTS = [
  {
    id: 'podcast',
    type: 'Podcast',
    title: 'Voces de la Pedagogía',
    episode: 'Ep 12 | Dra. Elena Rivas',
    topic: 'Navegando el Futuro: Desafíos de la Lectura Digital en Iberoamérica',
    desc: 'Exploramos cómo la tecnología está redefiniendo los hábitos de lectura y la retención cognitiva en la educación superior.',
    icon: Mic,
    color: '#4F46E5',
    link: 'podcast_laboratory',
    background: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=2000',
    cutout: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop', 
    platforms: ['Spotify', 'Apple music', 'YouTube']
  },
  {
    id: 'piramide-game',
    type: 'Game',
    title: 'Pirámide Arcade',
    episode: 'Nivel 01 | El Origen',
    topic: 'Aprende Jugando: La Gamificación como Herramienta de Evaluación',
    desc: 'Un desafío interactivo donde cada escalón de la pirámide pone a prueba tu comprensión crítica de los artículos.',
    icon: Gamepad2,
    color: '#fb923c',
    link: 'piramide_arcade',
    background: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000',
    cutout: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=600&auto=format&fit=crop', 
    platforms: ['Play now', 'High Scores', 'Tutorial']
  },
  {
    id: 'mapas-conceptuales',
    type: 'Interactivo',
    title: 'Data-Mapping',
    episode: 'Visualización de la Nueva Escuela',
    topic: 'Exploración Semántica de Conceptos',
    desc: 'Navega por las misiones y dimensiones de la reforma educativa a través de un mapa conceptual dinámico.',
    icon: FileText,
    color: '#e81e61',
    link: 'mapas_conceptuales',
    background: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000',
    cutout: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop',
    platforms: ['Explorar Mapa', 'Descargar PDF']
  }
];

interface Props {
  onOpenSubPage?: (id: string) => void;
}

export default function Transmedia({ onOpenSubPage }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const active = TRANSMEDIA_PROJECTS[currentIndex];

  return (
    <section className="bg-zinc-950 py-24 relative overflow-hidden min-h-screen flex flex-col justify-between">
      {/* Absolute Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(9, 9, 11, 0.3) 0%, rgba(9, 9, 11, 0.95) 80%, rgba(9,9,11,1) 100%), url(${active.background})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px) saturate(1.2)'
            }}
          />
        </AnimatePresence>
      </div>

      <div className="container mx-auto relative z-10 flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-16 opacity-60">
            <h2 className="text-3xl md:text-5xl font-display font-black text-white uppercase tracking-widest">
              Trans<span className="text-rose-500">medio</span>teca
            </h2>
            <div className="flex items-center gap-4 text-white font-mono text-xs uppercase tracking-widest">
              <span>{active.type} +</span>
              <span>About</span>
              <Globe size={16} />
            </div>
        </div>

        {/* PROTAGONIST: Massive Immersive Hero Player */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-7xl mx-auto"
          >
            <div className="relative bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col lg:flex-row items-center gap-12 group">
                
                {/* Glow Effect */}
                <div 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full blur-[120px] opacity-20 pointer-events-none"
                  style={{ backgroundColor: active.color }}
                />

                {/* Left Side: Cutout / Cover Image */}
                <div className="relative w-full lg:w-1/3 flex justify-center z-20">
                   <motion.img 
                     src={active.cutout}
                     alt={active.title}
                     className="w-64 md:w-80 lg:w-[400px] h-auto rounded-[2rem] shadow-2xl object-cover aspect-square md:aspect-auto"
                     initial={{ scale: 0.9, rotate: -5 }}
                     animate={{ scale: 1, rotate: 0 }}
                     transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
                   />
                   <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-800 flex items-center justify-center shadow-xl">
                      <active.icon size={40} style={{ color: active.color }} />
                   </div>
                </div>

                {/* Right Side: Content & Player */}
                <div className="relative w-full lg:w-2/3 z-20 flex flex-col justify-center">
                   <p className="font-mono text-xs md:text-sm uppercase tracking-[0.3em] font-black mb-4" style={{ color: active.color }}>
                     {active.type} Destacado • {active.episode}
                   </p>
                   
                   <h3 className="text-5xl md:text-7xl font-display font-medium text-white mb-6 leading-tight">
                     {active.title}
                   </h3>
                   
                   <p className="text-xl md:text-2xl text-white/60 font-serif italic mb-10 max-w-2xl">
                     {active.topic}
                   </p>

                   {/* Custom Player Controls */}
                   <div className="bg-black/40 rounded-3xl p-6 md:p-8 backdrop-blur-md border border-white/5 mb-8">
                      <div className="flex items-center gap-6">
                         <button 
                           onClick={() => setIsPlaying(!isPlaying)}
                           className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                           style={{ backgroundColor: active.color, color: 'white' }}
                         >
                            {isPlaying ? <Pause size={32} /> : <Play size={32} fill="currentColor" />}
                         </button>
                         
                         <div className="flex-1">
                            <div className="flex justify-between text-xs font-mono text-white/40 mb-2">
                               <span>0:00</span>
                               <span>{active.id === 'podcast' ? '22:40' : 'Nivel 1'}</span>
                            </div>
                            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden relative">
                               <motion.div 
                                 animate={{ width: isPlaying ? '100%' : '30%' }}
                                 transition={{ duration: 100, ease: 'linear' }}
                                 className="absolute top-0 left-0 h-full"
                                 style={{ backgroundColor: active.color }}
                               />
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Actions */}
                   <div className="flex flex-wrap items-center gap-4">
                      <button 
                        onClick={() => onOpenSubPage?.(active.link)}
                        className="px-10 py-5 rounded-full font-display font-black text-sm uppercase tracking-widest transition-all hover:scale-105"
                        style={{ backgroundColor: active.color, color: 'white' }}
                      >
                         {active.id === 'podcast' ? 'Escuchar Ahora' : 'Jugar Ahora'}
                      </button>
                      
                      {active.platforms.map((platform, i) => (
                        <button key={i} className="px-6 py-4 rounded-full bg-white/5 hover:bg-white/10 text-white text-xs font-medium backdrop-blur-md border border-white/10 transition-colors flex items-center gap-2">
                          {platform}
                        </button>
                      ))}
                   </div>
                </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* BOTTOM SECTION: The Small Carousel */}
        <div className="mt-24 w-full max-w-7xl mx-auto">
           <h4 className="text-white/40 font-mono text-[10px] uppercase tracking-[0.2em] mb-6 pl-4 border-l-2 border-white/20">
             Siguiente en Transmedioteca
           </h4>
           
           <div className="flex gap-6 overflow-x-auto pb-8 snap-x no-scrollbar">
              {TRANSMEDIA_PROJECTS.map((project, idx) => (
                <button
                  key={project.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-72 md:w-80 rounded-2xl overflow-hidden snap-start transition-all duration-500 text-left border-2 ${
                    currentIndex === idx ? 'border-white/40 scale-100 opacity-100' : 'border-transparent scale-95 opacity-50 hover:opacity-80'
                  }`}
                >
                  <div className="h-32 w-full relative">
                    <img src={project.background} className="absolute inset-0 w-full h-full object-cover" alt="" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute top-4 left-4 p-2 rounded-full bg-white/20 backdrop-blur-md">
                      <project.icon size={16} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 bg-zinc-900/80 backdrop-blur-md">
                    <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">{project.type}</p>
                    <h5 className="text-lg font-display text-white mb-2 line-clamp-1">{project.title}</h5>
                    <p className="text-sm text-white/40 line-clamp-2">{project.episode}</p>
                  </div>
                </button>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
}
/section>
  );
}

