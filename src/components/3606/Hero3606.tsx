import { motion } from 'motion/react';
import { BookOpen, MapPin, Users, Sparkles } from 'lucide-react';
import { ARTICLE_DATA } from './constants';
import { PremiumTitle, CinematicCard, BrutalSticker } from '../BrutalistLib';

interface Props {
  onStart: () => void;
}

export default function Hero3606({ onStart }: Props) {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-white px-4 py-32 border-b-[20px] border-black">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] rounded-full bg-teal-500 blur-[120px]" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] rounded-full bg-orange-400 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/graphy.png')] opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="flex flex-col items-center"
        >
          <BrutalSticker text={ARTICLE_DATA.volume} color="bg-black" className="text-white mb-12 !rotate-0 px-8 py-3 text-2xl border-4 shadow-[6px_6px_0_0_#000]" />
          
          <div className="relative inline-block mb-12">
            <motion.div 
              initial={{ x: 20, y: -20 }}
              animate={{ x: -20, y: 20 }}
              transition={{ repeat: Infinity, duration: 2.5, repeatType: "reverse" }}
              className="absolute -top-16 -right-16 w-32 h-32 bg-teal-600 border-8 border-black rounded-full flex items-center justify-center text-white z-20 shadow-[8px_8px_0_0_#000] rotate-12"
            >
              <Sparkles size={48} />
            </motion.div>
            
            <div className="text-[10rem] md:text-[18rem] font-display uppercase leading-[0.7] text-teal-600 drop-shadow-[20px_20px_0_#000] mb-12 italic" style={{ WebkitTextStroke: '4px black' }}>
              Paradoja
            </div>
          </div>

          <PremiumTitle subtitle="GOOD WILL VS SYSTEMIC VOIDS" className="items-center max-w-5xl mx-auto mb-12 leading-tight">
            Gestión Docente y la Inclusión Estructural
          </PremiumTitle>

          <div className="max-w-4xl mx-auto space-y-8 bg-zinc-900 text-white p-12 border-8 border-black shadow-[20px_20px_0_0_#fde047] -rotate-1 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-20 uppercase tracking-widest">N-3606 // RESEARCH</div>
            <p className="text-3xl font-serif italic leading-relaxed text-teal-300">
              "{ARTICLE_DATA.title}"
            </p>
            <div className="h-2 w-48 bg-teal-600 mx-auto" />
            <p className="font-display uppercase text-xl font-black tracking-widest">
              {ARTICLE_DATA.authors}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-left mb-24 max-w-6xl mx-auto">
            <CinematicCard color="bg-white" title="MUESTRA EXP" icon={Users} className="shadow-[12px_12px_0_0_#0d9488]">
              <p className="text-lg font-bold uppercase leading-tight">
                {ARTICLE_DATA.methodology.participants.total} participantes estratégicos: Docentes, Estudiantes y Exalumnos.
              </p>
              <ul className="mt-4 text-xs font-mono font-black italic opacity-60 space-y-1">
                <li>+ Discapacidad Intelectual</li>
                <li>+ Discapacidad Visual</li>
                <li>+ TEA Grado 1</li>
              </ul>
            </CinematicCard>
            <CinematicCard color="bg-white" title="UNIVERSIDAD DE COLIMA" icon={MapPin} className="shadow-[12px_12px_0_0_#000] lg:-translate-y-6">
              <p className="text-lg font-bold uppercase leading-tight">
                Contexto: Licenciatura en Educación Especial. Universidad de Colima.
              </p>
            </CinematicCard>
            <CinematicCard color="bg-black" className="text-white shadow-[12px_12px_0_0_#fde047]" title="KEY INSIGHT">
              <p className="text-xl font-serif italic leading-snug text-teal-300">
                {ARTICLE_DATA.centralFinding}
              </p>
            </CinematicCard>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="group relative inline-flex items-center justify-center px-16 py-10 rounded-full bg-teal-600 text-white font-display text-4xl uppercase border-8 border-black shadow-[20px_20px_0_0_#000] hover:bg-black transition-colors"
          >
            Explorar Inclusión
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
