import React from 'react';
import { motion } from 'motion/react';
import { Users, Stars, GraduationCap, Zap, ArrowRight } from 'lucide-react';

interface Props {
  onOpenSubPage?: (id: string) => void;
}

export default function SemilleroAutores({ onOpenSubPage }: Props) {
  const previewAuthors = [
    { name: 'Elena Valenzuela', color: '#3b82f6', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100' },
    { name: 'Roberto Mendoza', color: '#22c55e', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100' },
    { name: 'Lucía Ferreri', color: '#8b5cf6', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100' },
  ];

  return (
    <section className="bg-[#e81e61] py-32 md:py-48 px-6 md:px-12 lg:px-24 overflow-hidden relative selection:bg-black selection:text-[#fccb06]">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b9d]/30 blur-[150px] rounded-full mix-blend-screen animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fccb06]/20 blur-[150px] rounded-full mix-blend-screen" />
      
      <div className="container mx-auto">
        {/* Header global */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-14 h-14 bg-black border-4 border-black flex items-center justify-center text-[#fccb06] shadow-[4px_4px_0_0_#fff]">
            <Users size={28} />
          </div>
          <span className="font-accent font-black tracking-[0.3em] text-black uppercase text-sm bg-white/20 px-4 py-1">Semillero Científico // RPP 2026</span>
        </motion.div>

        {/* Two main blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-stretch">
          
          {/* Section: Autores */}
          <motion.button 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onClick={() => onOpenSubPage?.('semillero_autores')}
            className="text-left group flex flex-col h-full bg-white/5 p-10 border-8 border-transparent hover:border-black hover:bg-white/10 transition-all duration-500 rounded-[2rem] relative overflow-hidden"
          >
            {/* Visual Preview Overlay (Floating Cards) - Fixed Positioning */}
            <div className="absolute -top-4 -right-4 hidden xl:flex -space-x-12 rotate-12 group-hover:rotate-6 transition-transform duration-700 pointer-events-none opacity-40 group-hover:opacity-100">
               {previewAuthors.map((auth, i) => (
                 <div 
                   key={i} 
                   className="w-20 h-28 border-4 border-black shadow-[6px_6px_0_0_#000] rounded-2xl overflow-hidden relative"
                   style={{ backgroundColor: auth.color, zIndex: 10 - i }}
                 >
                    <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-white">
                          <img src={auth.img} alt="" className="w-full h-full object-cover grayscale" />
                       </div>
                    </div>
                 </div>
               ))}
            </div>

            <div className="space-y-8 flex-grow relative z-10">
              <div className="flex items-center gap-3 text-black mb-4">
                 <Zap size={20} className="fill-current" />
                 <span className="font-mono text-[10px] font-black uppercase tracking-widest">Published Authors</span>
              </div>
              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display uppercase leading-[0.9] text-white transition-all group-hover:tracking-tighter italic">
                SEMILLERO DE<br />
                <span className="text-black group-hover:text-[#fccb06] drop-shadow-[4px_4px_0_#fff] transition-colors">AUTORES</span>
              </h2>

              <p className="text-base md:text-xl font-sans text-white/90 leading-snug font-light max-w-xl italic">
                Espacio formativo y abierto de RPP Interactivo donde estudiantes, docentes y jóvenes investigadores publican objetos de conocimiento en acceso abierto, con DOI y preservación en repositorios.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t-4 border-black/20 mt-12 relative z-10">
               <div className="space-y-4">
                  <Stars className="text-[#fccb06]" size={40} />
                  <h4 className="text-white font-display text-3xl uppercase italic leading-none">Excelencia</h4>
                  <p className="text-white/60 text-[10px] font-mono uppercase tracking-[0.2em] font-black">Scientific Peer Review</p>
               </div>
               <div className="space-y-4">
                  <GraduationCap className="text-[#fccb06]" size={40} />
                  <h4 className="text-white font-display text-3xl uppercase italic leading-none">Academia</h4>
                  <p className="text-white/60 text-[10px] font-mono uppercase tracking-[0.2em] font-black">UdeG Institutional Hub</p>
               </div>
            </div>
          </motion.button>

          {/* Section: Editores */}
          <motion.button 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            onClick={() => onOpenSubPage?.('semillero_editores')}
            className="text-left group flex flex-col h-full bg-black/5 p-10 border-8 border-transparent hover:border-black hover:bg-black/10 transition-all duration-500 rounded-[2rem] relative overflow-hidden"
          >
            <div className="space-y-8 flex-grow relative z-10">
              <div className="flex items-center gap-3 text-black mb-4">
                 <Stars size={20} className="fill-current" />
                 <span className="font-mono text-[10px] font-black uppercase tracking-widest">Quality Control</span>
              </div>

              <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display uppercase leading-[0.9] text-white transition-all group-hover:tracking-tighter italic">
                SEMILLERO DE<br />
                <span className="text-black group-hover:text-rose-400 drop-shadow-[4px_4px_0_#fff] transition-colors">EDITORES</span>
              </h2>

              <p className="text-base md:text-xl font-sans text-white/90 leading-snug font-light max-w-xl italic">
                Programa de formación editorial de RPP Interactivo en el que estudiantes de posgrado desarrollan competencias profesionales en edición académica, moderación técnica, curaduría de contenidos y prácticas de ciencia abierta.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t-4 border-black/20 mt-12 relative z-10">
               <div className="space-y-4">
                  <Stars className="text-[#fccb06]" size={40} />
                  <h4 className="text-white font-display text-3xl uppercase italic leading-none">Rigor</h4>
                  <p className="text-white/60 text-[10px] font-mono uppercase tracking-[0.2em] font-black">Editorial Standards</p>
               </div>
               <div className="space-y-4">
                  <GraduationCap className="text-[#fccb06]" size={40} />
                  <h4 className="text-white font-display text-3xl uppercase italic leading-none">Narrativa</h4>
                  <p className="text-white/60 text-[10px] font-mono uppercase tracking-[0.2em] font-black">Transmedia Vision</p>
               </div>
            </div>
          </motion.button>

        </div>
      </div>
    </section>
  );
}
