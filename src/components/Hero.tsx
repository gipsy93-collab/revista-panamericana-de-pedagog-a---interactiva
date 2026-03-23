import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, ArrowRight } from 'lucide-react';



// Círculo flotante que se mueve constantemente
const FloatingOrb = ({ 
  color, 
  size, 
  duration,
  delay = 0 
}: { 
  color: string; 
  size: string; 
  duration: number;
  delay?: number;
}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} blur-[120px] mix-blend-screen pointer-events-none`}
      style={{ 
        width: size, 
        height: size,
        filter: 'blur(120px)'
      }}
      initial={{ 
        x: '-20%', 
        y: '-20%',
        opacity: 0.6 
      }}
      animate={{
        x: [
          '-20%', '120%', '100%', '-10%', '50%', '120%', '-20%'
        ],
        y: [
          '-10%', '20%', '120%', '100%', '-20%', '80%', '-10%'
        ],
        scale: [1, 1.2, 0.9, 1.1, 1]
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        ease: 'linear'
      }}
    />
  );
};

export const Hero = ({ onExplore }: { onExplore: () => void }) => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  const titleText = "INTERACTIVO";

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center justify-center p-12 overflow-hidden bg-[#0f172a]"
    >
      {/* FONDO PEDAGÓGICO: Azul noche con orbes flotantes */}
      {/* Orbe 1: Cyan - Movimiento lento y constante */}
      <FloatingOrb 
        color="bg-cyan-400/20" 
        size="500px" 
        duration={45}
        delay={0}
      />
      
      {/* Orbe 2: Esmeralda - Movimiento contrario */}
      <FloatingOrb 
        color="bg-emerald-400/20" 
        size="600px" 
        duration={55}
        delay={2}
      />
      
      {/* Orbe 3: Amarillo pedagógico - Más sutil */}
      <FloatingOrb 
        color="bg-[#fccb06]/10" 
        size="700px" 
        duration={65}
        delay={4}
      />

      {/* Gradiente de fondo estático para profundidad */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f172a]/50 to-[#0f172a] pointer-events-none" />
      
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col items-center">
        {/* Floating Author Batch */}
        <motion.div 
          initial={{ rotate: -5, opacity: 0, y: 50 }}
          animate={{ rotate: -5, opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8, type: 'spring' }}
          className="bg-[#fccb06] text-black font-mono font-black text-[10px] px-6 py-2 border-2 border-black shadow-[4px_4px_0_#000] rotate-[-5deg] mb-12 sm:mb-24 md:absolute md:top-10 md:left-10 z-20 hover:scale-110 transition-transform cursor-pointer"
        >
          DISRUPCIÓN_EDUCATIVA_v2.6
        </motion.div>

        <div className="w-full flex flex-col items-center text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[#fccb06] font-accent font-black tracking-[0.4em] uppercase mb-12 text-sm selection:bg-white selection:text-black"
          >
            Revista Panamericana de Pedagogía
          </motion.p>
          
          {/* TÍTULO CON LETRAS ANIMADAS INDIVIDUALMENTE */}
          <h1 className="text-huge font-display text-white mb-16 selection:bg-[#e81e61] selection:text-white relative perspective-1000">
            {titleText.split('').map((char, index) => (
              <motion.span
                key={index}
                className="inline-block"
                style={{ transformStyle: 'preserve-3d' }}
                initial={{ y: 100, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.05,
                  ease: [0.215, 0.61, 0.355, 1]
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Main Hero Image Container */}
          <motion.div 
            ref={imageRef}
            initial={{ scale: 1.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 1.5, ease: [0.19, 1, 0.22, 1] }}
            className="relative w-full max-w-4xl aspect-[21/9] mb-16 px-4 md:px-0 group"
          >
             <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10" />
             <div className="absolute -inset-4 border-2 border-white/10 rounded-3xl -z-10 group-hover:border-[#fccb06]/30 transition-colors" />
             
             <div className="w-full h-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border border-white/10 group-hover:border-white/20 transition-all">
                <img 
                  src="/3549/image1.jpg"
                  alt="RPP Interactivo Cover"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2000";
                  }}
                />
             </div>
             
             {/* Accent shapes */}
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#e81e61] rounded-full mix-blend-multiply opacity-20 blur-2xl group-hover:opacity-100 transition-opacity" />
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0f3896] rounded-full mix-blend-multiply opacity-20 blur-2xl group-hover:opacity-100 transition-opacity" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex flex-col items-center gap-12"
          >
            <p className="max-w-2xl text-white/60 font-sans text-xl font-light leading-relaxed selection:bg-white selection:text-black italic">
              "Donde la ciencia se encuentra con la narrativa visual. 
              Explora una nueva dimensión del conocimiento académico."
            </p>
            
            <motion.button 
              onClick={onExplore}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-12 py-6 bg-white text-[#0f172a] font-display text-3xl uppercase transition-all hover:bg-[#fccb06] hover:text-black overflow-hidden flex items-center gap-4"
            >
              <span className="relative z-10">EXPLORAR EDICIÓN 2026</span>
              <ArrowRight size={32} className="relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-[#e81e61] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Decorative lines */}
      <div className="absolute bottom-10 left-10 flex gap-4 text-white/10">
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="w-1 h-20 bg-current rounded-full" />
        ))}
      </div>

      <motion.div 
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 group cursor-pointer"
        onClick={onExplore}
      >
        <span className="text-[10px] font-mono tracking-widest font-bold group-hover:text-[#fccb06] transition-colors">SCROLL_DOWN</span>
        <ChevronDown size={20} className="group-hover:text-[#fccb06] transition-colors" />
      </motion.div>
    </section>
  );
};
