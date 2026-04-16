import React from 'react';
import { motion } from 'motion/react';
import { Play, Sparkles, Binary, Sprout } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

export const Hero3214 = () => {
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
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="ANÁLISIS DE REFORMAS // ECUADOR" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#059669]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1.1 }}
              transition={{ repeat: Infinity, duration: 3, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-emerald-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Sprout size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[18rem] font-display uppercase leading-[0.7] text-emerald-600 drop-shadow-[20px_20px_0_#000] mb-12 italic" style={{ WebkitTextStroke: '4px black' }}>
              Reforma_
            </div>
          </div>

          <PremiumTitle subtitle="DOCENTES Y CAMBIO EDUCATIVO" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            Entre la Resistencia y el Futuro
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#059669] rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">REF_3214 // POLICY_ADAPTATION</div>
            <p className="text-3xl font-serif italic leading-relaxed text-emerald-100">
              "{ARTICLE_META.title}. Investigando la brecha entre la política pública y la práctica en el aula rural de Manabí."
            </p>
            <div className="h-2 w-48 bg-emerald-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest text-[#F8FAFC]">
              {ARTICLE_META.authors} <span className="text-emerald-600">//</span> {ARTICLE_META.institution}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="MUESTRA_ACTORES" icon={Binary} className="shadow-[12px_12px_0_0_#059669]">
              <div className="text-7xl font-display font-black text-emerald-600 mb-2">119</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Actores educativos analizados_</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="UBICACIÓN" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-3xl font-display font-black text-black mb-2 uppercase leading-none">Manabí, ECU</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Contexto Rural & Urbano_</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="MODELO">
              <div className="text-xl font-display font-black text-emerald-400 mb-2 italic uppercase">EXPERIENCIAL</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">"{ARTICLE_META.subtitle}"</p>
            </CinematicCard>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
             <p className="font-display uppercase text-xs font-black tracking-[0.5em] mb-8 text-emerald-600 animate-pulse">Scroll para explorar_datos_interactivos</p>
             <div className="w-px h-24 bg-black mx-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
