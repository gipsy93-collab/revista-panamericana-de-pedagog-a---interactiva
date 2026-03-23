import React from 'react';
import { motion } from 'motion/react';
import SpaceMap from './SpaceMap';
import Timeline from './Timeline';
import ModelBuilder from './ModelBuilder';
import Scenarios from './Scenarios';
import Detector from './Detector';
import { ArrowLeft, Quote, Sparkles } from 'lucide-react';

export default function Unified3549({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#f5ece0] text-black font-sans selection:bg-[#fccb06] selection:text-black">
      
      {/* Article Header (Floating Back Button) */}
      <button 
        onClick={onBack}
        className="fixed top-8 left-8 z-[100] btn-brutal bg-white text-black p-4 flex items-center gap-2 hover:bg-[#e81e61] hover:text-white transition-colors"
      >
        <ArrowLeft size={24} /> VOLVER A RPP
      </button>

      {/* Hero Section 3549 */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#fccb06] border-b-[12px] border-black">
         <motion.div 
           initial={{ scale: 0.8, rotate: -20, opacity: 0 }}
           animate={{ scale: 1, rotate: -5, opacity: 1 }}
           className="blob-shape w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-white absolute z-0 opacity-20"
         />
         
         <div className="z-10 text-center px-6">
            <motion.span 
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-black text-white px-8 py-2 font-pop text-2xl uppercase border-4 border-white shadow-[8px_8px_0_#000]"
            >
              Arqueología Pedagógica
            </motion.span>
            
            <motion.h1 
              initial={{ scale: 1.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="text-8xl md:text-[15rem] font-pop uppercase leading-[0.8] mt-12 mb-8 drop-shadow-[15px_15px_0_#0f3896]" 
              style={{ WebkitTextStroke: '4px black' }}
            >
              3549
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="max-w-2xl mx-auto text-2xl md:text-4xl font-serif italic text-[#0f3896] leading-tight"
            >
              "Un linaje de 250 años que hoy se reempaqueta como innovación radical para la Nueva Escuela Mexicana."
            </motion.p>
         </div>

         <div className="absolute bottom-12 flex flex-col items-center gap-4 text-black font-pop">
            <span>SCROLL_TO_DISCOVER</span>
            <div className="w-1 h-20 bg-black animate-bounce" />
         </div>
      </section>

      {/* Introduction */}
      <section className="py-48 px-6 md:px-12 bg-white flex flex-col items-center justify-center border-b-[12px] border-black">
         <div className="max-w-4xl space-y-16">
            <div className="p-12 border-4 border-black border-dashed flex items-start gap-12 bg-[#f5ece0]">
               <Quote size={64} className="text-[#e81e61] shrink-0" />
               <p className="text-3xl md:text-5xl font-serif italic leading-relaxed text-[#0f3896]">
                  ¿Cómo puede una propuesta del Siglo XVIII ser la vanguardia del Siglo XXI en México?
               </p>
            </div>
            
            <p className="text-2xl md:text-3xl font-sans leading-relaxed text-zinc-700">
               Este interactivo rastrea las <span className="text-[#e81e61] font-bold">coincidencias genéticas</span> entre los teóricos clásicos de la pedagogía y los nuevos Libros de Texto Gratuitos (2023). No es solo una crítica, es una radiografía del reciclaje teórico.
            </p>

            <div className="flex gap-4">
               {[1,2,3,4].map(i => <div key={i} className="w-4 h-4 rounded-full bg-[#fccb06] border-2 border-black" />)}
            </div>
         </div>
      </section>

      {/* The Map */}
      <SpaceMap />

      {/* Timeline */}
      <Timeline />

      {/* Detector */}
      <Detector />

      {/* Builder */}
      <ModelBuilder />

      {/* Scenarios */}
      <Scenarios />

      {/* Article Closure */}
      <section className="py-64 px-6 bg-[#5bc2a8] text-black border-t-[12px] border-black text-center flex flex-col items-center">
         <Sparkles size={80} className="mb-12 animate-pulse text-[#0f3896]" />
         <h2 className="text-6xl md:text-[10rem] font-pop uppercase leading-none mb-12" style={{ WebkitTextStroke: '3px black' }}>CODA FINAL</h2>
         <p className="max-w-3xl text-3xl font-serif italic mb-24 text-[#0f3896]">
            La deuda con los clásicos es inmensa. La innovación real no está en la palabra, sino en la capacidad de resistir la domesticación burocrática del aula.
         </p>
         
         <button 
           onClick={onBack}
           className="btn-brutal bg-black text-white text-5xl px-20 py-10 rounded-full hover:bg-white hover:text-black transition-colors"
         >
            TERMINAR EXPERIENCIA
         </button>
      </section>

    </div>
  );
};
