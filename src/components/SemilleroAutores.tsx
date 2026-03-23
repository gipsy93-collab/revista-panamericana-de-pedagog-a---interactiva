import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { Users, Stars, GraduationCap, School } from 'lucide-react';

const authors = [
  { name: 'Antonio Quintero', role: 'Investigador Principal', image: '/3549/author1.jpg' },
  { name: 'Citlalli Bautista', role: 'Co-Autora & Revisora', image: '/3549/author2.jpg' },
  { name: 'Oswaldo Pérez', role: 'Investigador Salud & IA', image: '/etica-ia-salud/author1.jpg' },
  { name: 'Carmen Villalaz', role: 'Co-Autora Salud', image: '/etica-ia-salud/author2.jpg' },
  { name: 'Equipo Editorial', role: 'Revisión RPP', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=400' }
];

export default function SemilleroAutores() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!orbitRef.current) return;
    
    // Animación continua con GSAP solamente
    const tl = gsap.to(orbitRef.current, {
      rotation: "+=360",
      duration: 60,
      repeat: -1,
      ease: "none"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="bg-[#e81e61] py-48 px-6 md:px-12 lg:px-24 overflow-hidden relative selection:bg-[#fccb06] selection:text-black">
      <style>{`
        @keyframes counterRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#ff6b9d]/30 blur-[150px] rounded-full mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#fccb06]/20 blur-[150px] rounded-full mix-blend-screen" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-24">
          
          <div className="w-full md:w-1/2 space-y-12">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-black border-2 border-black flex items-center justify-center text-[#fccb06]">
                <Users size={24} />
              </div>
              <span className="font-accent font-black tracking-widest text-black uppercase text-sm">Semillero Científico // RPP 2026</span>
            </motion.div>

            <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white">
              SEMILLERO DE<br /><span className="text-black">AUTORES</span>
            </h2>

            <p className="text-xl md:text-2xl font-sans text-white/90 leading-relaxed font-light max-w-xl">
              Nuestra red de investigadores no es estática. Son nodos activos de conocimiento que órbitan alrededor del rigor académico y la innovación transmedia.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-12 border-t border-black/20">
               <div className="space-y-4">
                  <Stars className="text-[#fccb06]" size={32} />
                  <h4 className="text-white font-display text-2xl uppercase">Excelencia</h4>
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest">Scientific_Peer_Review</p>
               </div>
               <div className="space-y-4">
                  <GraduationCap className="text-[#fccb06]" size={32} />
                  <h4 className="text-white font-display text-2xl uppercase">Academia</h4>
                  <p className="text-white/70 text-xs font-mono uppercase tracking-widest">UdeG_Institutional_Core</p>
               </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex items-center justify-center py-20 pointer-events-none md:pointer-events-auto">
            <div className="relative z-10 w-48 h-48 md:w-64 md:h-64 bg-black border-8 border-white shadow-[20px_20px_0_#fccb06] flex flex-col items-center justify-center hover:scale-105 transition-transform duration-500 group cursor-pointer overflow-hidden">
               <School size={80} className="text-white mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />
               <span className="font-display text-4xl text-white group-hover:text-[#fccb06] transition-colors">RPP_OS</span>
            </div>

            <motion.div 
               ref={orbitRef}
               className="absolute w-[450px] h-[450px] md:w-[700px] md:h-[700px] rounded-full border border-white/20 flex items-center justify-center"
            >
               {authors.map((author, i) => {
                 const angle = (i / authors.length) * (Math.PI * 2);
                 const radius = typeof window !== 'undefined' && window.innerWidth < 768 ? 200 : 350;
                 const x = Math.cos(angle) * radius;
                 const y = Math.sin(angle) * radius;
                 
                 return (
                   <motion.div key={author.name} className="absolute" style={{ x, y }}>
                     <motion.div style={{ 
                       animation: 'counterRotate 60s linear infinite',
                       transformOrigin: 'center center'
                     }}>
                       <div className="group/item relative flex flex-col items-center">
                         <div className="w-20 h-20 md:w-28 md:h-28 rounded-full border-4 border-white bg-black overflow-hidden shadow-[8px_8px_0_#fccb06] group-hover/item:shadow-[8px_8px_0_#fff] transition-all cursor-pointer">
                           <img 
                             src={author.image} 
                             alt={author.name}
                             className="w-full h-full object-cover grayscale brightness-90 group-hover/item:grayscale-0 group-hover/item:scale-110 transition-all duration-500"
                             onError={(e) => {
                               const target = e.target as HTMLImageElement;
                               target.src = `https://api.dicebear.com/7.x/avataaars/svg?seed=${author.name}`;
                             }}
                           />
                         </div>
                         <div className="absolute -bottom-16 opacity-0 group-hover/item:opacity-100 transition-all scale-90 group-hover/item:scale-100 bg-black border-2 border-white p-4 whitespace-nowrap z-20 shadow-[6px_6px_0_#fccb06]">
                           <p className="text-white font-display text-xl uppercase leading-none">{author.name}</p>
                           <p className="text-[#fccb06] font-mono text-[9px] font-black uppercase tracking-widest mt-2">{author.role}</p>
                         </div>
                       </div>
                     </motion.div>
                   </motion.div>
                 );
               })}
               
               {[1,2,3,4,5,6,7,8].map(i => {
                 const angle = (i / 8) * (Math.PI * 2) + Math.PI/16;
                 const x = Math.cos(angle) * (window.innerWidth < 768 ? 160 : 300);
                 const y = Math.sin(angle) * (window.innerWidth < 768 ? 160 : 300);
                 return (
                   <div 
                     key={`dot-${i}`} 
                     className="absolute w-1.5 h-1.5 bg-white/30 rounded-full" 
                     style={{ transform: `translate(${x}px, ${y}px)` }} 
                   />
                 );
               })}
            </motion.div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
