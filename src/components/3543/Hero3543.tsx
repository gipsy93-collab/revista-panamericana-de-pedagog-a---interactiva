import { motion } from 'motion/react';
import { Play, Sparkles, Binary, Globe } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';
import { ARTICLE_DATA } from './constants';

interface Props {
  onStart: () => void;
}

export default function Hero3543({ onStart }: Props) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-orange-600 blur-[150px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-blue-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="ANÁLISIS DE IMPACTO // COVID-19" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#ea580c]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-orange-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Globe size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[18rem] font-display uppercase leading-[0.7] text-orange-600 drop-shadow-[20px_20px_0_#000] mb-12 italic" style={{ WebkitTextStroke: '4px black' }}>
              Crisis_
            </div>
          </div>

          <PremiumTitle subtitle="DESAFÍOS DE LA EDUCACIÓN SUPERIOR" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            La Gran Ruptura Pedagógica
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#ea580c] -rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">REF_3543 // COVID_EFFECT</div>
            <p className="text-3xl font-serif italic leading-relaxed text-orange-100">
              "{ARTICLE_DATA.title}. Un análisis sobre la transición forzada a la virtualidad y el impacto en la formación docente."
            </p>
            <div className="h-2 w-48 bg-orange-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest text-[#F8FAFC]">
              {ARTICLE_DATA.authors} <span className="text-orange-600">//</span> {ARTICLE_DATA.institution}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="MUESTRA_TOTAL" icon={Binary} className="shadow-[12px_12px_0_0_#ea580c]">
              <div className="text-7xl font-display font-black text-orange-600 mb-2">{ARTICLE_DATA.methodology.sample.total}</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Docentes de Escuela Normal Superior_</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="ENFOQUE" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:translate-y-8">
              <div className="text-3xl font-display font-black text-black mb-2 uppercase leading-none">{ARTICLE_DATA.methodology.type}</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Metodología de investigación_</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#38bdf8]" title="CORE_FINDING">
              <div className="text-xl font-display font-black text-orange-400 mb-2 italic">DÉFICIT_TIC</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">"{ARTICLE_DATA.centralFinding}"</p>
            </CinematicCard>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-16 py-10 rounded-full bg-orange-600 text-white font-display text-4xl uppercase border-8 border-black shadow-[20px_20px_0_0_#000] hover:bg-black transition-colors"
          >
            Explorar_Datos_ <Play className="ml-4" fill="currentColor" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
