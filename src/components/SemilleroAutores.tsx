import React from 'react';
import { motion } from 'motion/react';
import { Users, Stars, GraduationCap } from 'lucide-react';

interface Props {
  onOpenSubPage?: (id: string) => void;
}

export default function SemilleroAutores({ onOpenSubPage }: Props) {
  return (
    <section className="bg-[#e81e61] py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden relative selection:bg-[#fccb06] selection:text-black">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b9d]/30 blur-[150px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fccb06]/20 blur-[150px] rounded-full mix-blend-screen" />
      
      <div className="container mx-auto">
        {/* Header global */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center text-[#fccb06]">
            <Users size={24} />
          </div>
          <span className="font-accent font-black tracking-widest text-black uppercase text-sm">Semillero Científico // RPP 2026</span>
        </motion.div>

        {/* Two identical typographic blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-stretch">
          
          {/* Autores */}
          <button 
            onClick={() => onOpenSubPage?.('semillero_autores')}
            className="text-left group flex flex-col h-full"
          >
            <div className="space-y-8 flex-grow">
              <h2 className="text-6xl md:text-8xl font-display uppercase leading-tight text-white transition-colors">
                SEMILLERO DE<br /><span className="text-black group-hover:text-white transition-colors">AUTORES</span>
              </h2>

              <p className="text-xl md:text-2xl font-sans text-white/90 leading-relaxed font-light max-w-xl">
                Nuestra red de investigadores no es estática. Son nodos activos de conocimiento que órbitan alrededor del rigor académico y la innovación transmedia.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/20 mt-auto">
               <div className="space-y-4">
                  <Stars className="text-[#fccb06]" size={32} />
                  <h4 className="text-white font-display text-2xl uppercase">Excelencia</h4>
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest">Scientific Peer Review</p>
               </div>
               <div className="space-y-4">
                  <GraduationCap className="text-[#fccb06]" size={32} />
                  <h4 className="text-white font-display text-2xl uppercase">Academia</h4>
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest">UdeG Institutional Core</p>
               </div>
            </div>
          </button>

          {/* Editores */}
          <button 
            onClick={() => onOpenSubPage?.('semillero_editores')}
            className="text-left group flex flex-col h-full"
          >
            <div className="space-y-8 flex-grow">
              <h2 className="text-6xl md:text-8xl font-display uppercase leading-tight text-white transition-colors">
                SEMILLERO DE<br /><span className="text-black group-hover:text-white transition-colors">EDITORES</span>
              </h2>

              <p className="text-xl md:text-2xl font-sans text-white/90 leading-relaxed font-light max-w-xl">
                El equipo editorial que garantiza el rigor científico, la calidad narrativa y la integridad de cada publicación que sale de RPP.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-black/20 mt-auto">
               <div className="space-y-4">
                  <Stars className="text-[#fccb06]" size={32} />
                  <h4 className="text-white font-display text-2xl uppercase">Rigor</h4>
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest">Editorial Quality</p>
               </div>
               <div className="space-y-4">
                  <GraduationCap className="text-[#fccb06]" size={32} />
                  <h4 className="text-white font-display text-2xl uppercase">Narrativa</h4>
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest">Transmedia Standards</p>
               </div>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}
