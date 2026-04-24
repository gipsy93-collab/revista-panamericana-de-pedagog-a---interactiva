import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Users, Star, GraduationCap, Award, Rocket, Globe, Zap } from 'lucide-react';
import { FilmGrain } from '../FilmGrain';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

interface Props {
  onBack: () => void;
  onEnviarArticulo?: () => void;
}

const authors = [
  { 
    name: 'Dra. Elena Valenzuela', 
    institution: 'Universidad Panamericana', 
    formation: 'Ph.D. Investigación Pedagógica', 
    workTitle: 'El arte de aprender: Transmedia en el aula y narratividades emergentes.',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#3b82f6', // Bright Blue
    vol: 'VOL. 42'
  },
  { 
    name: 'Mtro. Roberto G. Mendoza', 
    institution: 'Univ. de los Andes', 
    formation: 'Maestría en Tecnología Educativa', 
    workTitle: 'Algoritmos Éticos: El futuro de la IA en la evaluación docente contemporánea.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#22c55e', // Green
    vol: 'VOL. 40'
  },
  { 
    name: 'Dra. Lucía S. Ferreri', 
    institution: 'Univ. de Buenos Aires', 
    formation: 'Doctorado en Ciencias Sociales', 
    workTitle: 'Narrativas de Resistencia: El Docente como Autor en entornos digitales.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#8b5cf6', // Purple
    vol: 'VOL. 41'
  },
  { 
    name: 'Mtra. Sofía J. Villalobos', 
    institution: 'TEC de Monterrey', 
    formation: 'Especialidad en Innovación', 
    workTitle: 'Visualizando el Pensamiento: Estrategias Meta-cognitivas mediante Mapas 3D.',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#0ea5e9', // Sky Blue
    vol: 'VOL. 39'
  },
  { 
    name: 'Dr. Carlos H. Silvera', 
    institution: 'Universidad de Chile', 
    formation: 'Ph.D. en Humanidades', 
    workTitle: 'Eco-Sistemas de Aprendizaje: La biodiversidad cultural en la escuela.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#f43f5e', // Rose
    vol: 'VOL. 43'
  },
  { 
    name: 'Dra. Carmen M. Villalaz', 
    institution: 'UNAM México', 
    formation: 'Especialista en Bioética', 
    workTitle: 'Humanizando la Medicina: Una perspectiva pedagógica del cuidado intensivo.',
    imageUrl: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#fbbf24', // Amber
    vol: 'VOL. 38'
  },
  { 
    name: 'Gallardo-Herrerías, C.', 
    institution: 'Univ. de Almería, España', 
    formation: 'Dra. en Inclusión Educativa', 
    workTitle: 'Las actitudes docentes frente a la inclusión educativa del TEA: Un estudio comparado.',
    imageUrl: 'https://images.unsplash.com/photo-1548179532-a50d4816e992?auto=format&fit=crop&q=80&w=200&h=200',
    color: '#0d9488', // Teal
    vol: 'VOL. 41'
  }
];

const AuthorCover = ({ author, index }: { author: typeof authors[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
      className="relative aspect-[3/4.2] rounded-[3rem] border-8 border-black shadow-[15px_15px_0_0_#000] overflow-hidden group cursor-pointer transition-shadow hover:shadow-[25px_25px_0_0_#000]"
      style={{ backgroundColor: author.color }}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]" />

      {/* Top Bar Labels */}
      <div className="absolute top-10 left-10 right-10 flex justify-between items-center z-10">
        <div className="bg-black text-white px-5 py-1.5 rounded-full font-mono text-[11px] uppercase font-black tracking-[0.2em] border-2 border-black">
          {author.vol}
        </div>
        <div className="w-11 h-11 bg-white/20 backdrop-blur-xl rounded-full border-4 border-white/50 flex items-center justify-center">
          <div className="w-5 h-5 border-4 border-white rounded-full opacity-60 animate-pulse" />
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
        {/* Photo with Circular Mask and Brutal Border */}
        <div className="relative mb-10 pt-10">
           <div className="w-36 h-36 rounded-full border-8 border-black overflow-hidden shadow-[8px_8px_0_0_#000] bg-white group-hover:scale-110 transition-transform duration-500">
              <img 
                src={author.imageUrl} 
                alt={author.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 delay-75" 
              />
           </div>
           
           {/* Floating Icons Style stickers */}
           <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
             className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0_0_#000] -rotate-12"
           >
              <Zap size={20} className="text-black fill-current" />
           </motion.div>
        </div>

        {/* Text Container */}
        <div className="space-y-6">
          <h3 className="font-display text-4xl uppercase leading-[0.85] text-white drop-shadow-[4px_4px_0_#000] tracking-tighter">
            {author.name}
          </h3>
          
          <div className="space-y-2">
             <div className="inline-block bg-black text-white px-3 py-1 font-accent text-[10px] uppercase font-black tracking-widest border-2 border-black rotate-1">
                {author.institution}
             </div>
             <p className="font-mono text-[10px] uppercase font-black text-black block tracking-tighter opacity-80">
                {author.formation}
             </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-2 bg-black my-8 rounded-full opacity-20" />

        {/* Work Title */}
        <div className="relative">
           <p className="font-serif italic text-white text-lg leading-tight px-2 line-clamp-3 font-semibold drop-shadow-sm">
              "{author.workTitle}"
           </p>
        </div>
      </div>

      {/* Bottom Interface Icon */}
      <div className="absolute bottom-10 right-10">
         <div className="w-14 h-14 bg-black text-white rounded-2xl border-4 border-black shadow-[6px_6px_0_0_rgba(255,255,255,0.2)] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all group-hover:-translate-x-1 group-hover:-translate-y-1">
            <Rocket size={24} />
         </div>
      </div>
    </motion.div>
  );
};

export default function UnifiedAutores({ onBack, onEnviarArticulo }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f5ece0] text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-rose-600 selection:text-white">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-rose-600 transition-colors shadow-[4px_4px_0_0_#9f1239] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#9f1239] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          <a
            href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="font-display uppercase text-xs tracking-widest font-black">Revista Acad�mica</span>
          </a>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-rose-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">AUTORES</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">NETWORK // RPP_2026</span>
          </div>
        </div>
      </header>

      {/* HERO SEMILLERO - Estilo Cinemático Hero Principal */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0f172a] text-white border-b-[15px] border-black overflow-hidden py-32">
         {/* Orbes flotantes idénticos al Hero */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: ['-20%', '20%', '-20%'],
                y: ['-10%', '20%', '-10%'],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-[600px] h-[600px] bg-cyan-500/10 blur-[150px] rounded-full"
            />
            <motion.div
              animate={{
                x: ['20%', '-20%', '20%'],
                y: ['20%', '-10%', '20%'],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-emerald-500/10 blur-[150px] rounded-full"
            />
         </div>
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/graphy.png')]" />
         
         <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <BrutalSticker text="RED DE INVESTIGACIÓN ACTIVA" color="bg-black" className="text-white mb-12 !rotate-1 px-8 py-3 text-3xl border-4 shadow-[12px_12px_0_0_#000]" />
            </motion.div>
            
            <h1 className="text-[5rem] md:text-[14rem] font-display uppercase leading-[0.8] text-white drop-shadow-[25px_25px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: 'calc(var(--brutal-stroke-width) * 2) black' }}>
              Semillero <br /> Autores
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6 bg-black/40 backdrop-blur-md text-white p-10 md:p-14 border-2 border-white/20 shadow-[20px_20px_60px_rgba(0,0,0,0.5)] -rotate-1 mb-20 relative overflow-hidden rounded-3xl text-left">
               <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-cyan-100">
                 Espacio formativo de la Revista Panamericana de Pedagogía para publicar ensayos y trabajos académicos destacados desarrollados a lo largo de la formación universitaria.
               </p>
               <p className="text-lg md:text-xl font-accent font-bold text-slate-300 uppercase tracking-widest leading-snug border-l-4 border-cyan-400 pl-6">
                 Funciona con moderación técnica, sin arbitraje académico ni jerarquías entre autorías.
               </p>
               <p className="text-base md:text-lg font-mono text-cyan-200/70 uppercase tracking-tighter">
                 Cada contribución se preserva con DOI y se integra al ecosistema interactivo de ciencia abierta de RPP.
               </p>
            </div>
         </div>
      </section>



      {/* GALERÍA DE AUTORES */}
      <section className="bg-white py-32 border-y-[20px] border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <span className="font-mono text-sm uppercase font-black bg-rose-600 text-white px-4 py-1 border-2 border-black mb-6 inline-block">PORTAFOLIO DE TALENTO</span>
             <h2 className="text-6xl md:text-9xl font-display uppercase italic tracking-tighter">AUTORES PUBLICADOS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {authors.map((author, i) => (
              <AuthorCover key={i} author={author} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <footer className="bg-black py-40 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
        
        <div className="max-w-4xl mx-auto relative z-10 text-white text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mb-12"
          >
            <div className="w-24 h-24 bg-rose-600 rounded-full flex items-center justify-center mx-auto border-8 border-white mb-8 animate-bounce">
               <GraduationCap size={48} className="text-white" />
            </div>
            <h4 className="font-display text-6xl md:text-8xl uppercase font-black mb-8 italic text-rose-500 drop-shadow-[4px_4px_0_#fff]">
              ¿Tienes un <br /> Manuscrito?
            </h4>
          </motion.div>
          
          <p className="font-serif text-3xl italic text-slate-400 mb-20 leading-relaxed max-w-2xl mx-auto">
            Buscamos investigadores audaces dispuestos a romper el molde de la publicación tradicional.
          </p>
          
          <button 
            onClick={onEnviarArticulo}
            className="group relative bg-[#fccb06] text-black px-16 py-8 border-8 border-black font-display text-4xl uppercase shadow-[12px_12px_0_0_#e11d48] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[18px_18px_0_0_#e11d48] transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="relative z-10">ENVIAR AHORA</span>
            <div className="absolute inset-0 bg-white translate-x-3 translate-y-3 -z-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
