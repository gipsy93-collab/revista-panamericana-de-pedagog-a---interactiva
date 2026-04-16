import { motion } from 'motion/react';
import { Heart, Play, Sparkles, Binary } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { ARTICLE_DATA } from './constants';

interface HeroProps {
  onStart: () => void;
}

export default function Hero3508({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full bg-teal-500 blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-amber-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <BrutalSticker text="INVESTIGACIÓN ORIGINAL // RPP" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#0d9488]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ x: -10, y: -10 }}
              animate={{ x: 10, y: 10 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-teal-600 border-8 border-black rounded-full hidden md:flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Heart size={48} />
            </motion.div>
            
            <div className="text-8xl md:text-[10rem] font-display uppercase leading-[0.8] text-teal-600 drop-shadow-[15px_15px_0_#000] mb-8" style={{ WebkitTextStroke: '3px black' }}>
              TEA_
            </div>
          </div>

          <PremiumTitle subtitle="TÍTULO ORIGINAL DEL PDF" className="lg:items-start max-w-4xl mb-12">
            {ARTICLE_DATA.title}
          </PremiumTitle>

          <div className="max-w-4xl space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#0d9488] rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">REF_3508 // ABSTRACT_VIEW</div>
            <p className="text-2xl font-serif italic leading-relaxed text-teal-200">
              "{ARTICLE_DATA.centralFinding}"
            </p>
            <div className="h-1 w-32 bg-teal-500" />
            <p className="font-display text-xl uppercase tracking-tighter text-white/50">{ARTICLE_DATA.author}</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.05, rotate: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onStart}
              className="group relative inline-flex items-center justify-center px-16 py-10 bg-teal-600 text-white font-display text-4xl uppercase border-8 border-black shadow-[20px_20px_0_0_#000] hover:bg-black transition-colors"
            >
              Explorar_Estudio_ <Play className="ml-4" fill="currentColor" />
            </motion.button>
          </div>
        </motion.div>

        {/* COLUMNA DERECHA: FICHA TÉCNICA Y CARDS */}
        <div className="lg:w-1/3 w-full flex flex-col gap-10">
          <ArticleFicha 
            doi={ARTICLE_DATA.doi}
            authors={ARTICLE_DATA.author}
            institution={ARTICLE_DATA.institution}
            vol={ARTICLE_DATA.volume}
            date="Noviembre 2025"
          />

          <div className="grid grid-cols-2 gap-6">
            <CinematicCard color="bg-white" title="METODO_CUAL" icon={Binary} className="shadow-[8px_8px_0_0_#0d9488]">
              <div className="text-5xl font-display font-black text-teal-600 mb-2">10</div>
              <p className="text-[10px] font-mono font-black border-t-2 border-black pt-2 uppercase">Docentes participantes_</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="ALCANCE_LOC" icon={Sparkles} className="shadow-[8px_8px_0_0_#000]">
              <div className="text-5xl font-display font-black text-black mb-2">02</div>
              <p className="text-[10px] font-mono font-black border-t-2 border-black pt-2 uppercase">ES & EC_</p>
            </CinematicCard>
          </div>
        </div>
      </div>
    </section>
  );
}
