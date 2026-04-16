import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Binary, Calculator, Target } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';

export const Hero3455 = () => {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-emerald-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-yellow-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="ENSEÑANZA MATEMÁTICA // MÉXICO" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#059669]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.1 }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-emerald-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Calculator size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[15rem] font-display uppercase leading-[0.7] text-emerald-600 drop-shadow-[20px_20px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: '4px black' }}>
              Sumar_
            </div>
          </div>

          <PremiumTitle subtitle="APRENDIZAJE ACTIVO" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            Estrategias para el Aula de Hoy
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#059669] -rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">REF_3455 // MATH_EDUCATION</div>
            <p className="text-3xl font-serif italic leading-relaxed text-emerald-100">
              "Un análisis profundo sobre cómo el aprendizaje activo rompe la apatía en la enseñanza de las matemáticas de nivel superior."
            </p>
            <div className="h-2 w-48 bg-emerald-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest text-[#F8FAFC]">
              Chan-Chi & Poot-May <span className="text-emerald-600">//</span> CIENCIA TRANSMEDIA
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="MODALIDAD" icon={Binary} className="shadow-[12px_12px_0_0_#059669]">
              <div className="text-5xl font-display font-black text-emerald-600 mb-2 uppercase italic leading-none">ACTIVO</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Participación Estudiantil Directa_</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="UBICACIÓN" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-4xl font-display font-black text-black mb-2 uppercase leading-none italic">México</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Nivel Universitario_</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="FOCO">
              <div className="text-xl font-display font-black text-emerald-400 mb-2 italic uppercase">DIFERENCIACIÓN</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Atención a la Diversidad_</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-8 text-emerald-600 animate-pulse">Scroll para resolver_datos_</p>
             <div className="w-px h-24 bg-black mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
