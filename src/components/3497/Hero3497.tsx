import { motion } from 'motion/react';
import { Play, Sparkles, Binary, Award, MapPin } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { ARTICLE_META } from './constants';

interface Props {
  onStart: () => void;
}

export default function Hero3497({ onStart }: Props) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-indigo-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-amber-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="ANÁLISIS PEDAGÓGICO / PARAGUAY" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#4f46e5]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ rotate: -10 }}
              animate={{ rotate: 10 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-indigo-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Award size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[14rem] font-display uppercase leading-[0.7] text-indigo-700 drop-shadow-[20px_20px_0_#000] mb-12 italic" style={{ WebkitTextStroke: 'calc(var(--brutal-stroke-width) * 2) black' }}>
              Liderazgo
            </div>
          </div>

          <PremiumTitle subtitle={ARTICLE_META.subtitle} className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            {ARTICLE_META.title}
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#4f46e5] rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black tracking-widest">REF 3497 // PEDAGOGY_CORE</div>
            <p className="text-2xl font-serif italic leading-relaxed text-indigo-50">
              "{ARTICLE_META.abstract}"
            </p>
            <div className="h-2 w-48 bg-indigo-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest text-white">
              {ARTICLE_META.authors} <span className="text-indigo-600">//</span> {ARTICLE_META.institution}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="CONTEXTO" icon={MapPin} className="shadow-[12px_12px_0_0_#4f46e5]">
              <div className="text-5xl font-display font-black text-indigo-600 mb-2 italic uppercase">{ARTICLE_META.stats.context}</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Plan Nacional PNTE 2040</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="MODELO" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-4xl font-display font-black text-black mb-2 uppercase leading-none">{ARTICLE_META.stats.model}</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Liderazgo Ético & Carisma</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="ENFOQUE">
              <div className="text-xl font-display font-black text-indigo-400 mb-2 italic uppercase">{ARTICLE_META.stats.focus}</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Interiorización de Hábitos</p>
            </CinematicCard>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-16 py-10 rounded-full bg-indigo-600 text-white font-display text-4xl uppercase border-8 border-black shadow-[20px_20px_0_0_#000] hover:bg-black transition-colors"
          >
            Iniciar Auditoría <Play className="ml-4" fill="currentColor" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
