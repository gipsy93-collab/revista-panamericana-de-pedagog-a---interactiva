import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { Heart, Sparkles, Brain, Lock } from 'lucide-react';

export default function Hero3455() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-[#F8F7FF] overflow-hidden border-b-[20px] border-black">
      {/* Introspective Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      {/* Floating Personal Tokens */}
      <div className="hidden lg:flex flex-col gap-10 absolute left-12 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white border-4 border-black p-5 shadow-[10px_10px_0_0_#7C3AED] flex flex-col items-center rotate-[-3deg]">
          <Heart size={32} className="text-[#7C3AED]" />
          <span className="font-display font-black text-2xl">M</span>
          <span className="font-mono text-[8px] uppercase font-black opacity-40">61.4%</span>
        </div>
        <div className="bg-white border-4 border-black p-5 shadow-[10px_10px_0_0_#7C3AED] flex flex-col items-center rotate-[2deg]">
          <Brain size={32} className="text-[#7C3AED]" />
          <span className="font-display font-black text-2xl">H</span>
          <span className="font-mono text-[8px] uppercase font-black opacity-40">38.6%</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto"
      >
        <BrutalSticker 
          text={`ESTUDIO INTERPRETATIVO // RPP-${ARTICLE_META.id}`} 
          color="bg-[#7C3AED]" 
          className="text-white mb-10 !rotate-0 px-8 py-3 text-xl border-4 shadow-[8px_8px_0_0_#000]" 
        />
        
        <div className="relative mb-16">
          <motion.div 
            initial={{ rotate: 45, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute -top-14 -right-20 w-32 h-32 bg-yellow-400 border-4 border-black rounded-lg flex items-center justify-center text-black z-20 shadow-[10px_10px_0_0_#000]"
          >
            <Sparkles size={50} />
          </motion.div>
          
          <PremiumTitle subtitle="FORMACIÓN DOCENTE / GESTIÓN EMOCIONAL" className="items-center text-center">
            Dimensión Personal y Paz
          </PremiumTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full items-start text-left">
          {/* Main Content Box */}
          <div className="lg:col-span-8 bg-white border-[12px] border-black p-14 shadow-[30px_30px_0_0_#7C3AED] relative group">
            <div className="absolute top-0 right-0 p-6 font-mono text-xs opacity-30 uppercase font-black italic">3455 // PERSONAL_CORE</div>
            <h3 className="font-display text-3xl mb-10 text-[#7C3AED] uppercase font-black italic">La Paradoja de la Formación</h3>
            <p className="text-3xl font-serif italic leading-relaxed text-black/80">
              "{ARTICLE_META.abstract}"
            </p>
            <div className="mt-12 flex items-center gap-10 border-t-4 border-black pt-10">
               <div className="w-20 h-2 bg-[#7C3AED]" />
               <div className="font-display uppercase text-2xl font-black tracking-tighter italic">
                 ¿Aprender a Enseñar o Aprender a Ser?
               </div>
            </div>
          </div>

          {/* Metadata & Secondary Stats */}
          <div className="lg:col-span-4 flex flex-col gap-12">
            <ArticleFicha 
              doi={ARTICLE_META.doi}
              authors={ARTICLE_META.authors}
              institution={ARTICLE_META.institution}
              vol={ARTICLE_META.volume}
              date={ARTICLE_META.date}
              className="w-full shadow-[15px_15px_0_0_#000] rotate-1"
            />
            
            <div className="bg-black border-4 border-black p-10 text-white shadow-[12px_12px_0_0_#7C3AED] -rotate-1 group hover:rotate-0 transition-transform">
              <Lock className="text-[#7C3AED] mb-6" size={32} />
              <span className="block font-mono text-[10px] uppercase font-black mb-4 text-[#7C3AED] tracking-[0.5em]">Brecha Detectada</span>
              <p className="text-2xl font-display uppercase leading-tight italic font-black">
                "Dificultad crítica para compartir reflexiones personales ante pares."
              </p>
            </div>
          </div>
        </div>

        {/* Triple Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full mt-24">
          <CinematicCard color="bg-white" className="border-4" title="LA MUESTRA">
            <p className="text-xl font-bold uppercase leading-tight">n={ARTICLE_META.n} Futuros docentes en formación inicial (Yucatán).</p>
          </CinematicCard>
          <CinematicCard color="bg-[#7C3AED]" className="text-white border-4 shadow-[15px_15px_0_0_#000] scale-105" title="DESCUBRIMIENTO">
            <p className="text-xl font-bold uppercase leading-tight italic">Responsabilidad y Respeto son los valores ancla detectados.</p>
          </CinematicCard>
          <CinematicCard color="bg-yellow-400" className="border-4 text-black" title="EMOCIÓN">
            <p className="text-xl font-serif italic font-black leading-tight">El trabajo personal genera estrés cuando no hay protocolos de cuidado.</p>
          </CinematicCard>
        </div>
      </motion.div>
    </section>
  );
}
