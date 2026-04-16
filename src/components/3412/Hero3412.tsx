import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { Sparkles, Brain } from 'lucide-react';

export default function Hero3412() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-white relative overflow-hidden border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-[#FF6B6B] blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-[#1E3A5F] blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto"
      >
        <BrutalSticker text={`N-3412 // INVESTIGACIÓN`} color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-4 text-2xl border-4 shadow-[8px_8px_0_0_#FF6B6B]" />
        
        <div className="relative mb-12">
          <motion.div 
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            className="absolute -top-16 -right-16 w-32 h-32 bg-[#FF6B6B] border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000] rotate-12"
          >
            <Brain size={48} />
          </motion.div>
          
          <div className="text-[12rem] md:text-[24rem] font-display uppercase leading-[0.7] text-[#FF6B6B] drop-shadow-[20px_20px_0_#1E3A5F]" style={{ WebkitTextStroke: '4px black' }}>
            46<span className="text-[0.4em] italic">pts</span>
          </div>
        </div>

        <PremiumTitle subtitle="COMPETENCIAS BLANDAS // EDUCACIÓN SECUNDARIA" className="items-center max-w-5xl mx-auto mb-12 leading-none">
          La Brecha del Código Postal
        </PremiumTitle>

        <div className="max-w-4xl mx-auto space-y-10 bg-zinc-50 text-black p-12 border-8 border-black shadow-[25px_25px_0_0_#000] -rotate-1 mb-20 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-10 uppercase group-hover:opacity-100 transition-opacity font-black">UCA_SOCIAL_LAB</div>
          <p className="text-3xl font-serif italic leading-relaxed text-black/80">
            "Diferencias significativas en competencias interpersonales basadas en el nivel socioeconómico. Un estudio de la UCA con 228 estudiantes del AMBA."
          </p>
          <div className="h-4 w-48 bg-[#1E3A5F] mx-auto" />
          <p className="font-display uppercase text-xl font-black tracking-widest leading-none">
            {ARTICLE_META.authors} <span className="text-[#FF6B6B]">//</span> {ARTICLE_META.date.split(' ')[1]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left w-full max-w-6xl">
          <CinematicCard color="bg-white" className="shadow-[12px_12px_0_0_#FF6B6B]" title="LA_MUESTRA">
            <p className="text-lg font-bold uppercase leading-tight">
              Población: n={ARTICLE_META.n} alumnos de 15 escuelas del AMBA.
            </p>
            <p className="text-xs mt-4 font-mono font-black italic opacity-40">Género: 52% mujeres // 48% varones.</p>
          </CinematicCard>
          <CinematicCard color="bg-white" className="shadow-[12px_12px_0_0_#1E3A5F] lg:translate-y-8" title="CONFIABILIDAD">
            <div className="text-5xl font-display font-black text-[#1E3A5F] mb-2">α = 0.93</div>
            <p className="text-sm font-mono font-black leading-tight uppercase">
              Consistencia interna casi perfecta en el instrumento de medición.
            </p>
          </CinematicCard>
          <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="MÉTODO_ABP">
            <p className="text-xl font-serif italic leading-tight text-teal-400">
              "63 puntos de diferencia a favor de metodologías activas (ABP)."
            </p>
          </CinematicCard>
        </div>
      </motion.div>
    </section>
  );
}
