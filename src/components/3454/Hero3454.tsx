import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { Bird, ShieldCheck, MapPin, AlertTriangle } from 'lucide-react';

export default function Hero3454() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-[#F3F4F6] overflow-hidden border-b-[20px] border-black">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]" />
      
      {/* Floating Side Info */}
      <div className="hidden lg:flex flex-col gap-6 absolute right-10 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#059669] flex flex-col items-center rotate-3">
          <MapPin size={32} className="text-[#059669]" />
          <span className="font-display font-black text-xl">COLIMA</span>
          <span className="font-mono text-[8px] uppercase font-black opacity-40">Contexto MX</span>
        </div>
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0_0_#059669] flex flex-col items-center -rotate-2">
          <ShieldCheck size={32} className="text-[#059669]" />
          <span className="font-display font-black text-xl">PAZ</span>
          <span className="font-mono text-[8px] uppercase font-black opacity-40">Meta Institucional</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto"
      >
        <BrutalSticker 
          text={`ESTUDIO EXPLORATORIO // N-${ARTICLE_META.id}`} 
          color="bg-[#059669]" 
          className="text-white mb-10 !rotate-0 px-8 py-3 text-xl border-4 shadow-[8px_8px_0_0_#000]" 
        />
        
        <div className="relative mb-12">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="absolute -top-10 -left-10 w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center text-[#059669] z-20 shadow-[6px_6px_0_0_#000]"
          >
            <Bird size={48} />
          </motion.div>
          
          <PremiumTitle subtitle="EDUCACIÓN SUPERIOR / JUSTICIA SOCIAL" className="items-center text-center">
            Inclusión y Cultura de Paz
          </PremiumTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mt-10 items-start text-left">
          {/* Abstract Box */}
          <div className="lg:col-span-8 bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#000] relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-5 font-mono text-[10px] opacity-20 uppercase font-black bg-[#059669] text-white">DATA_INDEX: CORE</div>
            <h3 className="font-display text-2xl mb-8 underline decoration-8 decoration-[#059669] underline-offset-8">Resumen Crítico</h3>
            <p className="text-2xl font-serif italic leading-relaxed text-black/90">
              "{ARTICLE_META.abstract}"
            </p>
            <div className="mt-10 flex items-center gap-6 border-t-4 border-black pt-8">
              <div className="font-display uppercase text-lg font-black tracking-widest">
                {ARTICLE_META.authors}
              </div>
            </div>
          </div>

          {/* Metadata Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <ArticleFicha 
              doi={ARTICLE_META.doi}
              authors={ARTICLE_META.authors}
              institution={ARTICLE_META.institution}
              vol={ARTICLE_META.volume}
              date={ARTICLE_META.date}
              className="w-full shadow-[10px_10px_0_0_#059669]"
            />
            
            <div className="bg-black border-4 border-black p-8 text-white shadow-[12px_12px_0_0_#059669] relative">
              <AlertTriangle className="absolute top-4 right-4 text-[#059669]" size={24} />
              <span className="block font-mono text-[10px] uppercase font-black mb-4 text-[#059669] tracking-widest">Alerta de Contexto</span>
              <p className="text-2xl font-display uppercase leading-tight italic font-black">
                "El 64.6% ha sido testigo de eventos de violencia delictiva."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-20">
          <CinematicCard color="bg-white" className="border-4" title="LA MUESTRA">
            <p className="text-lg font-bold uppercase leading-tight">n={ARTICLE_META.n} Estudiantes universitarios de 20 licenciaturas.</p>
          </CinematicCard>
          <CinematicCard color="bg-[#059669]" className="text-white border-4 shadow-[12px_12px_0_0_#000]" title="RESULTADO CLAVE">
            <p className="text-lg font-bold uppercase leading-tight">92.7% considera necesario promover la cultura de paz en el currículo.</p>
          </CinematicCard>
          <CinematicCard color="bg-zinc-100" className="border-4" title="PERCEPCIÓN DOCENTE">
            <p className="text-lg font-serif italic text-black/70 italic">77.7% reconoce acciones docentes positivas como promotores de paz.</p>
          </CinematicCard>
        </div>
      </motion.div>
    </section>
  );
}
