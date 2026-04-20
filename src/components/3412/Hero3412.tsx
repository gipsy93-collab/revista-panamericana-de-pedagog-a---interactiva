import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { Brain, Users, Clock, Database } from 'lucide-react';

export default function Hero3412() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-[#F0F0F0] overflow-hidden border-b-[20px] border-black">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      {/* Sidebar Quick Stats - Premium Feature */}
      <div className="hidden lg:flex flex-col gap-6 absolute left-10 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#4F46E5] flex flex-col items-center">
          <Users size={32} className="mb-2" />
          <span className="font-display font-black text-2xl">N={ARTICLE_META.n}</span>
          <span className="font-mono text-[8px] uppercase font-black">Muestra Total</span>
        </div>
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#4F46E5] flex flex-col items-center">
          <Clock size={32} className="mb-2" />
          <span className="font-display font-black text-lg text-center leading-none">2025</span>
          <span className="font-mono text-[8px] uppercase font-black">Ciclo Lectivo</span>
        </div>
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#4F46E5] flex flex-col items-center">
          <Database size={32} className="mb-2" />
          <span className="font-display font-black text-2xl">α=.93</span>
          <span className="font-mono text-[8px] uppercase font-black">Precision Score</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto"
      >
        <BrutalSticker 
          text={`ITEM-ID: ${ARTICLE_META.id} // ${ARTICLE_META.carouselTitle}`} 
          color="bg-[#4F46E5]" 
          className="text-white mb-8 !rotate-0 px-6 py-2 text-xl border-4 shadow-[6px_6px_0_0_#000]" 
        />
        
        <div className="relative mb-8">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center text-[#4F46E5] z-20 shadow-[6px_6px_0_0_#000]"
          >
            <Brain size={40} />
          </motion.div>
          
          <PremiumTitle subtitle="INVESTIGACIÓN EMPÍRICA / PSICOPEDAGOGÍA" className="items-center text-center">
            {ARTICLE_META.title}
          </PremiumTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mt-12 items-start text-left">
          {/* Abstract Box */}
          <div className="lg:col-span-8 bg-white border-8 border-black p-10 shadow-[20px_20px_0_0_#4F46E5] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black bg-black text-white">ABSTRACT // DATA_CORE</div>
            <h3 className="font-display text-2xl mb-6 underline decoration-4 decoration-[#4F46E5]">Resumen del Estudio</h3>
            <p className="text-2xl font-serif italic leading-relaxed text-black/90">
              "{ARTICLE_META.abstract}"
            </p>
            <div className="mt-8 flex items-center gap-4 border-t-4 border-black pt-6">
              <div className="font-display uppercase text-lg font-black tracking-tighter">
                {ARTICLE_META.authors}
              </div>
            </div>
          </div>

          {/* Technical Metadata Box */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            <ArticleFicha 
              doi={ARTICLE_META.doi}
              authors={ARTICLE_META.authors}
              institution={ARTICLE_META.institution}
              vol={ARTICLE_META.volume}
              date={ARTICLE_META.date}
              className="w-full"
            />
            
            <div className="bg-[#4F46E5] border-4 border-black p-6 text-white shadow-[10px_10px_0_0_#000]">
              <span className="block font-mono text-[10px] uppercase font-black mb-2">Impacto Central</span>
              <p className="text-xl font-display uppercase leading-tight italic">
                "Brechas de hasta 46.63 puntos en habilidades según nivel socioeconómico."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16">
          <CinematicCard color="bg-white" className="border-4" title="LA MUESTRA">
            <div className="space-y-2">
              <p className="text-lg font-bold uppercase leading-none">n={ARTICLE_META.n} Estudiantes</p>
              <p className="text-sm opacity-70">15 Instituciones educativas del AMBA (Argentina).</p>
            </div>
          </CinematicCard>
          <CinematicCard color="bg-[#FDE047]" className="border-4 shadow-[10px_10px_0_0_#4F46E5]" title="HALLAZGO HI">
            <p className="text-lg font-bold uppercase leading-tight">
              Diferencia altamente significativa (p &lt; .001) en Habilidades Interpersonales.
            </p>
          </CinematicCard>
          <CinematicCard color="bg-black" className="text-white border-4" title="METODOLOGÍA">
            <p className="text-lg font-serif italic text-indigo-300">
              El ABP obtuvo las puntuaciones más elevadas en todas las dimensiones analizadas.
            </p>
          </CinematicCard>
        </div>
      </motion.div>
    </section>
  );
}

