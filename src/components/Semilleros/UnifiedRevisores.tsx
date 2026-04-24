import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ShieldCheck, Search, Cpu, BookOpen, Edit3, Award, CheckCircle2, Zap, Globe, Rocket } from 'lucide-react';
import { FilmGrain } from '../FilmGrain';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker } from '../BrutalistLib';

interface Props {
  onBack: () => void;
}

const revisors = [
  { 
    name: 'Dr. Alejandro Thorne',
    role: 'Revisión Metodológica', 
    description: 'Evaluación del diseño experimental, rigor estadístico y validación de protocolos de investigación.',
    icon: Search,
    color: '#4f46e5', // INDIGO
    badgeId: 'VC_MET_01',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  { 
    name: 'Dra. Beatriz Sanchis',
    role: 'Revisión Temática', 
    description: 'Expertos que validan la pertinencia, profundidad y vigencia de los hallazgos pedagógicos.',
    icon: BookOpen,
    color: '#7c3aed', // VIOLET
    badgeId: 'VC_TEM_02',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200'
  },
  { 
    name: 'Dr. Julián Castrillón',
    role: 'Revisión Ética', 
    description: 'Asegura el cumplimiento de protocolos bioéticos, integridad académica y derechos de autor.',
    icon: ShieldCheck,
    color: '#059669', // EMERALD
    badgeId: 'VC_ETH_03',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200'
  },
  { 
    name: 'Mtra. Elena G. Riviere',
    role: 'Revisión Editorial', 
    description: 'Control de calidad sobre el estilo, coherencia narrativa y adaptación transmedia del contenido.',
    icon: Edit3,
    color: '#db2777', // PINK
    badgeId: 'VC_EDT_04',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200'
  },
  { 
    name: 'Ing. Marcos F. Valles',
    role: 'Revisión Tecnológica', 
    description: 'Validación de interactividad, accesibilidad digital y rendimiento en entornos multimodales.',
    icon: Cpu,
    color: '#ea580c', // ORANGE
    badgeId: 'VC_TECH_05',
    img: 'https://images.unsplash.com/photo-1519085185750-740d1f501406?auto=format&fit=crop&q=80&w=200&h=200'
  }
];

const RevisorCard = ({ rev, index }: { rev: typeof revisors[0], index: number }) => {
  const Icon = rev.icon;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -15, rotate: index % 2 === 0 ? 1 : -1, scale: 1.02 }}
      className="relative aspect-[3/4.2] rounded-[3rem] border-8 border-black shadow-[15px_15px_0_0_#000] overflow-hidden group cursor-pointer transition-shadow hover:shadow-[25px_25px_0_0_#000]"
      style={{ backgroundColor: rev.color }}
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

      {/* Top Bar - Open Badges 3.0 Branding */}
      <div className="absolute top-10 left-10 right-10 flex justify-between items-center z-10">
        <div className="bg-black text-white px-4 py-1 rounded-full font-mono text-[9px] uppercase font-black tracking-[0.2em] border-2 border-black">
          CERTIFIED: OB 3.0
        </div>
        <div className="w-10 h-10 bg-[#fccb06] border-4 border-black rounded-lg flex items-center justify-center rotate-6 shadow-[4px_4px_0_0_#000]">
          <Award size={20} className="text-black" />
        </div>
      </div>

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center">
        {/* Profile Image with Badge Mask */}
        <div className="relative mb-6 pt-4">
           <div className="w-32 h-32 rounded-full border-8 border-black overflow-hidden shadow-[12px_12px_0_0_#000] bg-white group-hover:scale-110 transition-transform duration-500 relative">
              <img 
                src={rev.img} 
                alt={rev.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
              />
              {/* Badge Verification Seal */}
              <div className="absolute bottom-1 right-1 bg-emerald-500 text-white p-2 rounded-full border-4 border-black animate-pulse z-20">
                <Icon size={16} />
              </div>
           </div>
        </div>

        {/* Text Container */}
        <div className="space-y-6 flex-grow flex flex-col justify-center">
          <div className="space-y-2">
            <h3 className="font-display text-3xl md:text-4xl uppercase leading-[1.1] text-white drop-shadow-[4px_4px_0_#000] tracking-tighter">
              {rev.name}
            </h3>
            <p className="font-mono text-[9px] uppercase font-black text-white/50 tracking-[0.2em] bg-black/40 px-2 py-1 inline-block">
               {rev.role}
            </p>
          </div>
          
          <div className="space-y-4">
             <div className="inline-block bg-white text-black px-4 py-1 font-mono text-[10px] uppercase font-black tracking-widest border-2 border-black rotate-1">
                CREDENTIAL: {rev.badgeId}
             </div>
             <p className="font-serif italic text-white/95 text-base leading-tight px-4 line-clamp-3 font-medium drop-shadow-sm">
                "{rev.description}"
             </p>
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="absolute bottom-8 left-10 right-10">
         <div className="h-[2px] bg-black/10 w-full mb-3" />
         <div className="flex justify-between items-center text-black/40 font-mono text-[8px] uppercase tracking-widest font-black">
            <span>Verifiable Credential</span>
            <span>RPP_NETWORK_V1</span>
         </div>
      </div>
    </motion.div>
  );
};

export default function UnifiedRevisores({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#eebcd1] text-zinc-900 font-sans pt-20 overflow-x-hidden selection:bg-indigo-600 selection:text-white">
      <FilmGrain />
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-[#e81e61] transition-colors shadow-[4px_4px_0_0_#880e4f] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#880e4f] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
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
             <div className="bg-[#e81e61] text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">EDITORES</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">QUALITY // RPP_2026</span>
          </div>
        </div>
      </header>

      {/* HERO SEMILLERO - Estilo Fucsia Cinemático */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-[#880e4f] text-white border-b-[15px] border-black overflow-hidden py-32">
         {/* Orbes flotantes en tonos fucsia/púrpura */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                x: ['-20%', '20%', '-20%'],
                y: ['-10%', '20%', '-10%'],
                scale: [1, 1.4, 1]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 right-0 w-[700px] h-[700px] bg-[#e81e61]/20 blur-[150px] rounded-full"
            />
            <motion.div
              animate={{
                x: ['20%', '-20%', '20%'],
                y: ['20%', '-10%', '20%'],
                scale: [1.4, 1, 1.4]
              }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full"
            />
         </div>
         {/* Gradiente para profundidad */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         
         <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
            <BrutalSticker text="SISTEMA DE CALIDAD CIENTÍFICA" color="bg-[#fccb06]" className="text-black mb-12 !rotate-0 px-8 py-3 text-3xl border-4 shadow-[12px_12px_0_0_#000]" />
            
            <h1 className="text-6xl md:text-[14rem] font-display uppercase leading-[0.8] text-white drop-shadow-[25px_25px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: 'calc(var(--brutal-stroke-width) * 2) black' }}>
              Semillero <br /> Editores
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-6 bg-black/40 backdrop-blur-md text-white p-10 md:p-14 border-2 border-white/20 shadow-[20px_20px_60px_rgba(0,0,0,0.5)] rotate-1 mb-20 relative overflow-hidden rounded-3xl text-left">
               <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-indigo-100">
                 Programa de formación editorial vinculado a la Revista Panamericana de Pedagogía.
               </p>
               <p className="text-lg md:text-xl font-accent font-bold text-slate-300 uppercase tracking-widest leading-snug border-l-4 border-indigo-400 pl-6">
                 El equipo editor realiza curaduría, moderación técnica y armonización textual de manera invisible para las autorías.
               </p>
               <p className="text-base md:text-lg font-mono text-indigo-200/70 uppercase tracking-tighter">
                 Promueve estándares de ciencia abierta y desarrolla competencias profesionales en edición académica dentro del ecosistema RPP Interactivo.
               </p>
            </div>
         </div>
      </section>



      <section className="bg-white py-32 border-y-[20px] border-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
             <h2 className="text-6xl md:text-9xl font-display uppercase italic tracking-tighter">RED EDITORIAL</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {revisors.map((rev, i) => (
              <RevisorCard key={i} rev={rev} index={i} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black py-40 px-6 border-t-[20px] border-zinc-900 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <h4 className="font-display text-5xl uppercase font-black mb-8 italic text-indigo-500">Únete al Comité</h4>
          <p className="font-serif text-2xl italic text-slate-400 mb-16 leading-relaxed text-center">
            Obtén tu certificación internacional en gestión editorial bajo el estándar Open Badges 3.0.
          </p>
          <button className="bg-white text-black px-12 py-6 border-8 border-black font-display text-3xl uppercase shadow-[10px_10px_0_0_#4f46e5] hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all">
            POSTULAR AL COMITÉ
          </button>
        </div>
      </footer>
    </div>
  );
}
