import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { Sparkles, Terminal, Activity } from 'lucide-react';

export default function Hero3411() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-[#0F172A] relative overflow-hidden border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-40 left-20 w-[600px] h-[600px] rounded-full bg-blue-600 blur-[150px]" />
        <div className="absolute bottom-40 right-20 w-[500px] h-[500px] rounded-full bg-[#F4A261] blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/3px-tile.png')] opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto"
      >
        <BrutalSticker text={`RPP // ${ARTICLE_META.volume}`} color="bg-white" className="text-black mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#F4A261]" />
        
        <div className="relative mb-8">
          <motion.div 
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute -top-12 -right-12 w-32 h-32 bg-[#F4A261] border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
          >
            <Activity size={48} />
          </motion.div>
          
          <div className="text-[12rem] md:text-[24rem] font-display uppercase leading-[0.7] text-white drop-shadow-[20px_20px_0_#F4A261]" style={{ WebkitTextStroke: 'calc(var(--brutal-stroke-width) * 2) black' }}>
            28<span className="text-[0.4em] italic">%</span>
          </div>
        </div>

        <PremiumTitle subtitle="DESAFILIACIÓN EN BACHILLERATO TECNOLÓGICO" className="items-center text-white max-w-5xl mx-auto mb-10 leading-none">
          El Filtro de la Deserción Premura
        </PremiumTitle>

        <div className="max-w-4xl mx-auto space-y-10 bg-white text-black p-12 border-8 border-black shadow-[25px_25px_0_0_#3b82f6] rotate-1 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-10 uppercase group-hover:opacity-100 transition-opacity font-black">CETis 74 ANALYTICS</div>
          <p className="text-3xl font-serif italic leading-relaxed text-black/80">
            "28% de los estudiantes abandonan el bachillerato antes del segundo semestre. Una paradoja incómoda: tener computadora predice deserción."
          </p>
          <div className="h-4 w-48 bg-rose-600 mx-auto" />
          <p className="font-display uppercase text-xl font-black tracking-widest leading-none">
            {ARTICLE_META.authors} <span className="text-rose-600"> / </span> {ARTICLE_META.date.split(' ')[1]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left w-full max-w-6xl">
          <CinematicCard color="bg-[#1e293b]" className="text-white shadow-[12px_12px_0_0_#F4A261] border-teal-500" title="LA MUESTRA">
            <p className="text-lg font-bold uppercase leading-tight">
              Población: n={ARTICLE_META.n} estudiantes de la Cohorte {ARTICLE_META.cohort}.
            </p>
            <p className="text-xs mt-4 font-mono font-black italic opacity-40">Entorno: CETis 74, Ensenada, México.</p>
          </CinematicCard>
          <CinematicCard color="bg-[#1e293b]" className="text-white shadow-[12px_12px_0_0_#000] lg:translate-y-8" title="OBJETIVO ST">
            <p className="text-lg font-bold uppercase leading-tight font-sans">
              Analizar determinantes de la permanencia en el primer semestre mediante regresión logística.
            </p>
          </CinematicCard>
          <CinematicCard color="bg-white" className="text-black shadow-[12px_12px_0_0_#3b82f6]" title="DATO CRÍTICO">
            <div className="text-5xl font-display font-black mb-2 text-rose-600">8.9%</div>
            <p className="text-sm font-mono font-black leading-tight uppercase">
              Es la capacidad explicativa del modelo estadístico (R² de Nagelkerke).
            </p>
          </CinematicCard>
        </div>
      </motion.div>
    </section>
  );
}
