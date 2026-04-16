import { motion } from 'motion/react';
import { Activity, Play, Sparkles, TrendingDown } from 'lucide-react';
import { BrutalSticker, PremiumTitle, CinematicCard } from '../BrutalistLib';

interface HeroProps {
  onStart: () => void;
}

export default function Hero3588({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full bg-rose-600 blur-[150px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-orange-400 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text="ANÁLISIS PSICOMÉTRICO // MÉXICO" color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[8px_8px_0_0_#be123c]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-white border-8 border-black rounded-full flex items-center justify-center text-rose-600 z-20 shadow-[8px_8px_0_0_#000]"
            >
              <TrendingDown size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[18rem] font-display uppercase leading-[0.7] text-rose-600 drop-shadow-[20px_20px_0_#000] mb-12 italic" style={{ WebkitTextStroke: '4px black' }}>
              Deserción_
            </div>
          </div>

          <PremiumTitle subtitle="VALIDACIÓN DE LA ESCALA BÄULKE" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            Intención de Abandono Universitario
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[25px_25px_0_0_#be123c] rotate-1 mb-20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase font-black">REF_3588 // RESEARCH</div>
            <p className="text-3xl font-serif italic leading-relaxed text-rose-200">
              "Validación preliminar de la escala Bäulke en estudiantes de 3 universidades de Yucatán. n=71 participantes clave."
            </p>
            <div className="h-2 w-32 bg-white mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest text-[#F8FAFC]">
              Euan-Catzín <span className="text-rose-600">&</span> Canto-Herrera
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="MUESTRA_EST" icon={Activity} className="shadow-[12px_12px_0_0_#be123c]">
              <div className="text-7xl font-display font-black text-rose-600 mb-2">n=71</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase">Estudiantes de 3 universidades de Yucatán_</p>
            </CinematicCard>
            <CinematicCard color="bg-white" title="METRICA_VALIDA" icon={Sparkles} className="shadow-[12px_12px_0_0_#000] lg:-translate-y-8">
              <div className="text-7xl font-display font-black text-black mb-2">ω=.959</div>
              <p className="text-sm font-mono font-black border-t-2 border-black pt-2 uppercase tracking-tighter">Confiabilidad escala total (Alfa casi perfecto)_</p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="DIMENSIONES">
              <div className="text-7xl font-display font-black text-rose-600 mb-2 italic">05</div>
              <p className="text-sm font-mono font-black border-t-2 border-white/20 pt-2 uppercase">Estructura factorial validada para México_</p>
            </CinematicCard>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-16 py-10 rounded-full bg-rose-600 text-white font-display text-4xl uppercase border-8 border-black shadow-[20px_20px_0_0_#000] hover:bg-black transition-colors"
          >
            Explorar_Datos_ <Play className="ml-4" fill="currentColor" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
