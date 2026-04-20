import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, CinematicCard, ArticleFicha } from '../BrutalistLib';
import { AlertCircle, Users, Scale, ShieldAlert } from 'lucide-react';

export default function Hero3453() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-[#FAF9F6] overflow-hidden border-b-[20px] border-black">
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
      
      {/* Vertical Stats Sidebar */}
      <div className="hidden xl:flex flex-col gap-8 absolute left-12 top-1/2 -translate-y-1/2 z-30">
        <div className="bg-white border-4 border-black p-5 shadow-[10px_10px_0_0_#E11D48] flex flex-col items-center rotate-[-2deg]">
          <AlertCircle size={32} className="mb-2 text-[#E11D48]" />
          <span className="font-display font-black text-2xl">62.3%</span>
          <span className="font-mono text-[8px] uppercase font-black text-black/60 text-center leading-none mt-1">Venta Droga<br/>Cercanías</span>
        </div>
        <div className="bg-white border-4 border-black p-5 shadow-[10px_10px_0_0_#E11D48] flex flex-col items-center rotate-[1deg]">
          <Users size={32} className="mb-2 text-[#E11D48]" />
          <span className="font-display font-black text-2xl">100%</span>
          <span className="font-mono text-[8px] uppercase font-black text-black/60 text-center leading-none mt-1">Docentes con<br/>Experiencia</span>
        </div>
        <div className="bg-white border-4 border-black p-5 shadow-[10px_10px_0_0_#E11D48] flex flex-col items-center rotate-[-1deg]">
          <Scale size={32} className="mb-2 text-[#E11D48]" />
          <span className="font-display font-black text-2xl">C.482</span>
          <span className="font-mono text-[8px] uppercase font-black text-black/60 text-center leading-none mt-1">Marco<br/>Normativo</span>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center max-w-7xl mx-auto"
      >
        <BrutalSticker 
          text={`ESTUDIO FENOMENOLÓGICO // ITEM-${ARTICLE_META.id}`} 
          color="bg-[#E11D48]" 
          className="text-white mb-10 !rotate-0 px-8 py-3 text-xl border-4 shadow-[8px_8px_0_0_#000]" 
        />
        
        <div className="relative mb-12">
          <motion.div 
            initial={{ rotate: -20, opacity: 0 }}
            animate={{ rotate: 5, opacity: 1 }}
            transition={{ delay: 0.4, type: 'spring' }}
            className="absolute -top-12 -left-12 w-28 h-28 bg-[#E11D48] border-6 border-black rounded-xl flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000]"
          >
            <ShieldAlert size={50} />
          </motion.div>
          
          <PremiumTitle subtitle="ROL DOCENTE / FACTORES DE RIESGO" className="items-center text-center max-w-5xl mx-auto">
            Abordaje del Consumo de Drogas
          </PremiumTitle>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full mt-10 items-start text-left">
          {/* Abstract Box */}
          <div className="lg:col-span-8 bg-white border-[10px] border-black p-12 shadow-[25px_25px_0_0_#E11D48] relative group">
            <div className="absolute top-0 right-0 p-5 font-mono text-[10px] opacity-40 uppercase font-black italic">3453 // CORE_FINDINGS</div>
            <h3 className="font-display text-3xl mb-8 border-b-8 border-[#E11D48] inline-block pb-2">Resumen de la Investigación</h3>
            <p className="text-2xl font-serif italic leading-relaxed text-black/80">
              "{ARTICLE_META.abstract}"
            </p>
            <div className="mt-10 flex items-center gap-6">
              <div className="h-0.5 flex-1 bg-black/10" />
              <div className="font-display uppercase text-lg font-black tracking-widest text-[#E11D48]">
                CHILE_SUR
              </div>
            </div>
          </div>

          {/* Technical Metadata Box */}
          <div className="lg:col-span-4 flex flex-col gap-10">
            <ArticleFicha 
              doi={ARTICLE_META.doi}
              authors={ARTICLE_META.authors}
              institution={ARTICLE_META.institution}
              vol={ARTICLE_META.volume}
              date={ARTICLE_META.date}
              className="w-full rotate-1 shadow-[15px_15px_0_0_#000]"
            />
            
            <div className="bg-black border-4 border-black p-8 text-white shadow-[12px_12px_0_0_#E11D48] rotate-[-1deg]">
              <span className="block font-mono text-[10px] uppercase font-black mb-4 text-[#E11D48] tracking-widest">Alerta Temprana</span>
              <p className="text-2xl font-display uppercase leading-none italic font-black">
                "El 52% admite haber visto consumo dentro del establecimiento."
              </p>
            </div>
          </div>
        </div>

        {/* Quick Findings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mt-20">
          <CinematicCard color="bg-white" className="border-4 rotate-[-1deg]" title="MUESTRA n=8">
            <p className="text-lg font-bold uppercase leading-tight">Profesores jefes de enseñanza media en el sur de Chile.</p>
          </CinematicCard>
          <CinematicCard color="bg-[#E11D48]" className="text-white border-4 shadow-[12px_12px_0_0_#000]" title="NODAL POINT">
            <p className="text-lg font-bold uppercase leading-tight">El Protocolo Escolar Interno es el eje central de significados.</p>
          </CinematicCard>
          <CinematicCard color="bg-zinc-100" className="border-4 rotate-[1deg]" title="CIRCULAR 482">
            <p className="text-lg font-serif italic text-black/70">Regula los protocolos de actuación obligatorios para todos los establecimientos.</p>
          </CinematicCard>
        </div>
      </motion.div>
    </section>
  );
}
