import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle } from '../BrutalistLib';
import { Target, Clock, Users, Play, Volume2, Sparkles } from 'lucide-react';

export const Hero3543 = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Efecto 3D Tilt interactivo con el mouse en la tarjeta del video
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  // Palabras del título con efecto de caída escalonada ("textos que caen")
  const titleWords = ARTICLE_META.title.split(" ");

  return (
    <section className="relative bg-[#f0f0f0] px-4 sm:px-6 md:px-12 lg:px-24 pt-6 pb-14 sm:pt-8 sm:pb-16 md:pt-12 md:pb-20 overflow-hidden">
      {/* Elemento de fondo con pulso orgánico */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-2/3 h-full bg-[#10b981] -skew-x-12 translate-x-20 z-0 pointer-events-none rounded-[100px]" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-start">
        {/* Columna Izquierda: Textos que caen y cajas interactivas */}
        <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 md:gap-8">
          {/* Sticker con aparición elástica */}
          <motion.div
            initial={{ opacity: 0, y: -40, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="self-start"
          >
            <BrutalSticker 
              text="INVESTIGACIÓN EMPÍRICA // CUALITATIVA" 
              color="bg-[#10b981]" 
              className="text-white !rotate-0 shadow-[4px_4px_0_0_#000] rounded-2xl cursor-default"
            />
          </motion.div>
          
          {/* TÍTULO PRINCIPAL: Animación de palabras que caen en cascada */}
          <div className="flex flex-col gap-3">
            <motion.span 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-mono text-sm uppercase tracking-[0.3em] text-black/50 font-bold flex items-center gap-2"
            >
              <Sparkles size={16} className="text-[#10b981]" /> // CULTURA ACADÉMICA
            </motion.span>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display uppercase font-black leading-[0.94] text-black flex flex-wrap gap-x-2.5 sm:gap-x-4 gap-y-1.5 sm:gap-y-2 break-words">
              {titleWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -50, rotate: (i % 2 === 0 ? -4 : 4) }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{ 
                    delay: 0.15 + i * 0.04, 
                    type: "spring", 
                    stiffness: 350, 
                    damping: 22 
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    color: "#10b981", 
                    transition: { duration: 0.15 } 
                  }}
                  className="inline-block cursor-default select-none transition-colors"
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Abstract que emerge suavemente con blur reveal */}
          <motion.p 
            initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg md:text-xl font-sans font-medium text-black/75 leading-relaxed max-w-2xl"
          >
            {ARTICLE_META.abstract}
          </motion.p>

          {/* Cajas de métricas que saltan e interactúan con el cursor */}
          <div className="flex flex-wrap gap-4 pt-2">
            {[
              { icon: Users, val: ARTICLE_META.stats.n, bg: "bg-black text-white", shadow: "shadow-[6px_6px_0_0_#10b981]" },
              { icon: Clock, val: ARTICLE_META.stats.duration, bg: "bg-white text-black", shadow: "shadow-[6px_6px_0_0_#000]" },
              { icon: Target, val: ARTICLE_META.stats.method, bg: "bg-white text-black", shadow: "shadow-[6px_6px_0_0_#000]" },
            ].map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 400, damping: 20 }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -5,
                    boxShadow: "10px 10px 0px 0px #000",
                    transition: { duration: 0.15 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-2.5 sm:gap-3 px-4 py-2.5 sm:px-5 sm:py-3 border-2 border-black ${stat.bg} ${stat.shadow} rounded-2xl cursor-pointer select-none`}
                >
                  <Icon size={18} className="text-[#10b981] flex-shrink-0" />
                  <span className="font-mono text-xs sm:text-sm font-bold uppercase">{stat.val}</span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Columna Derecha: Tarjeta con efecto 3D Parallax con el mouse */}
        <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-start w-full lg:pt-1 mt-2 lg:mt-0">
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d" 
            }}
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.35, type: "spring", stiffness: 300, damping: 25 }}
            whileHover={{ boxShadow: "20px 20px 0px 0px #000" }}
            className="bg-white border-4 border-black p-4 sm:p-5 md:p-6 shadow-[8px_8px_0_0_#000] sm:shadow-[14px_14px_0_0_#000] rounded-3xl flex flex-col gap-3 sm:gap-4 w-full max-w-md lg:max-w-[460px] relative transition-shadow"
          >
            {/* Sticker Superior con rebote al pasar el mouse */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: -2 }}
              className="absolute -top-3.5 right-3 sm:-right-3 bg-[#10b981] text-white px-3 sm:px-3.5 py-1 font-mono text-[10px] sm:text-xs uppercase font-black border-2 border-black shadow-[3px_3px_0_0_#000] rounded-xl cursor-default z-10"
            >
              VIDEO RESEÑA // TRANSMEDIA
            </motion.div>

            {/* Cabecera de la cápsula */}
            <div className="flex items-center justify-between border-b-2 border-black/10 pb-2">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-pulse" />
                <span className="font-mono text-[10px] uppercase font-black tracking-wider text-black">
                  CÁPSULA AUDIOVISUAL
                </span>
              </div>
              <span className="font-mono text-[9px] uppercase font-bold text-black bg-[#10b981]/25 border border-black px-2 py-0.5 rounded-lg">
                2:00 MIN // HD 1080p
              </span>
            </div>

            {/* Contenedor del Reproductor de Video */}
            <div className="relative aspect-square w-full bg-black border-4 border-black rounded-2xl overflow-hidden shadow-inner group">
              <video
                ref={videoRef}
                src="/archivos/videos/escritura_normalistas.mp4"
                controls
                playsInline
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                className="w-full h-full object-contain rounded-xl bg-black"
              />

              {/* Indicación visual de reproducir */}
              {!isPlaying && (
                <button
                  type="button"
                  onClick={handlePlayClick}
                  className="absolute inset-0 bg-black/45 backdrop-blur-[2px] flex flex-col items-center justify-center gap-3 text-white transition-all group-hover:bg-black/30 group-hover:backdrop-blur-none cursor-pointer rounded-xl"
                  aria-label="Reproducir video reseña"
                >
                  <motion.div 
                    whileHover={{ scale: 1.18, rotate: 6 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-[#10b981] border-4 border-black text-white flex items-center justify-center shadow-[6px_6px_0_0_#000]"
                  >
                    <Play className="w-8 h-8 fill-white translate-x-0.5" />
                  </motion.div>
                  <div className="flex flex-col items-center gap-1">
                    <span className="bg-black text-white border-2 border-white px-4 py-1.5 font-display text-xs uppercase tracking-widest font-black shadow-[4px_4px_0_0_#10b981] rounded-xl hover:bg-[#10b981] transition-colors">
                      ▶ REPRODUCIR VIDEO RESEÑA
                    </span>
                    <span className="font-mono text-[10px] uppercase text-white/90 bg-black/70 px-2.5 py-0.5 tracking-wider font-bold rounded-lg">
                      Cápsula explicativa (120 seg)
                    </span>
                  </div>
                </button>
              )}
            </div>

            {/* Pie del Video */}
            <div className="pt-1 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Volume2 size={16} className="text-[#10b981] flex-shrink-0" />
                <h4 className="font-display uppercase text-xs md:text-sm font-black tracking-normal text-black leading-tight">
                  Reseña en Video: Escritura Normalistas
                </h4>
              </div>
              <p className="font-sans text-[11px] text-black/70 font-medium leading-relaxed">
                Síntesis audiovisual sobre las prácticas de alfabetización académica en la formación inicial docente.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
