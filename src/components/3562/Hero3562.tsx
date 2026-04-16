import { motion } from 'motion/react';
import { BookOpen, MapPin, Users, Sparkles } from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import { PremiumTitle, CinematicCard, BrutalSticker } from '../BrutalistLib';

interface Props {
  onStart: () => void;
}

export default function Hero3562({ onStart }: Props) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[16px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-[600px] h-[600px] rounded-full bg-rose-500 blur-[120px]" />
        <div className="absolute bottom-20 left-20 w-[500px] h-[500px] rounded-full bg-orange-400 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text={ARTICLE_DATA.volume} color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ x: -20, y: -20 }}
              animate={{ x: 20, y: 20 }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-rose-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
            >
              <Sparkles size={48} />
            </motion.div>
            
            <div className="text-[12rem] md:text-[22rem] font-display uppercase leading-[0.7] text-rose-600 drop-shadow-[20px_20px_0_#000]" style={{ WebkitTextStroke: '4px black' }}>
              8 de 12
            </div>
          </div>

          <PremiumTitle subtitle="REALIDADES DE LAS MADRES UNIVERSITARIAS" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            Interrupción, Voluntad y Diseño Institucional
          </PremiumTitle>

          <div className="max-w-3xl mx-auto space-y-8 bg-zinc-50 p-12 border-8 border-black shadow-[15px_15px_0_0_#000] rotate-1 mb-16">
            <p className="text-3xl font-serif italic text-black/80 leading-relaxed">
              "{ARTICLE_DATA.title}"
            </p>
            <div className="h-4 w-32 bg-rose-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black text-black">
              {ARTICLE_DATA.author} <span className="text-rose-600">//</span> {ARTICLE_DATA.institution}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-20">
            <CinematicCard color="bg-white" title="MUESTRA_ST" icon={Users} className="shadow-[12px_12px_0_0_#e11d48]">
              <p className="text-lg font-bold uppercase leading-tight">
                {ARTICLE_DATA.methodology.interviews} entrevistas + {ARTICLE_DATA.methodology.questionnaires} cuestionarios
              </p>
              <p className="text-xs mt-4 font-mono font-black italic opacity-60">Sede: UPN 153 Ecatepec</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="GEOGRAFÍA_LOC" icon={MapPin} className="shadow-[12px_12px_0_0_#000] lg:translate-y-6">
              <p className="text-lg font-bold uppercase leading-tight">
                Estado de México: Municipio con 9.7 años de escolaridad promedio.
              </p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="CORE_FINDING">
              <p className="text-xl font-serif italic leading-snug">
                {ARTICLE_DATA.centralFinding}
              </p>
            </CinematicCard>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-16 py-10 rounded-full bg-rose-600 text-white font-display text-4xl uppercase border-8 border-black shadow-[20px_20px_0_0_#000] hover:bg-black transition-colors"
          >
            Explorar_Estudio_
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
