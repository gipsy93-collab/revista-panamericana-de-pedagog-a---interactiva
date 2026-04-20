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
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-indigo-600 transition-colors shadow-[4px_4px_0_0_#312e81] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#312e81] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-indigo-600 text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">EDITORES</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">QUALITY // RPP_2026</span>
          </div>
        </div>
      </header>

      {/* HERO SEMILLERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-indigo-700 text-white border-b-[20px] border-black overflow-hidden py-32">
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
         
         <div className="relative z-10 max-w-7xl mx-auto text-center px-6">
            <BrutalSticker text="SISTEMA DE CALIDAD CIENTÍFICA" color="bg-[#fccb06]" className="text-black mb-12 !rotate-0 px-8 py-3 text-3xl border-4 shadow-[12px_12px_0_0_#000]" />
            
            <h1 className="text-6xl md:text-[14rem] font-display uppercase leading-[0.8] text-white drop-shadow-[25px_25px_0_#000] mb-12 italic tracking-tighter" style={{ WebkitTextStroke: 'calc(var(--brutal-stroke-width) * 2) black' }}>
              Semillero <br /> Editores
            </h1>
            
            <div className="max-w-4xl mx-auto space-y-8 bg-zinc-950 text-white p-12 border-8 border-black shadow-[30px_30px_0_0_#312e81] rotate-1 mb-20 relative overflow-hidden">
               <p className="text-4xl font-serif italic leading-tight text-indigo-100">
                 "Certificamos el rigor científico mediante credenciales digitales verificables de última generación."
               </p>
            </div>
         </div>
      </section>

      {/* SECCIÓN 1: OPEN BADGES */}
      <WaveSection topColor="#4338ca" bottomColor="#eebcd1" variant="wavy">
        <div className="max-w-6xl mx-auto py-20 px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-8">
              <PremiumTitle subtitle="CERTIFICACIÓN DIGITAL"> Open Badges 3.0 </PremiumTitle>
              <div className="mt-12 space-y-8 text-3xl font-serif italic text-zinc-700 leading-relaxed text-left">
                <p>Nuestros editores y revisores no solo validan contenido; obtienen reconocimiento global mediante **Verifiable Credentials** (VC).</p>
                <div className="bg-white border-l-[12px] border-indigo-600 p-12 shadow-[15px_15px_0_0_#000] rotate-1">
                   <p className="text-black font-black uppercase text-3xl font-display mb-4 italic tracking-tighter">Estándar W3C</p>
                   <p className="not-italic text-xl">Integridad inmutable que garantiza la idoneidad técnica en cada dictamen editorial.</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-indigo-600" title="CONFIANZA" icon={ShieldCheck} className="text-white shadow-[10px_10px_0_0_#312e81]">
                 <div className="space-y-6 pt-4 text-left">
                    <p className="font-mono text-[9px] uppercase tracking-widest leading-relaxed">Cada acción editorial genera una prueba criptográfica transparente.</p>
                    <div className="flex items-center gap-4 border-t border-white/20 pt-4">
                       <Award className="text-[#fccb06]" size={24} />
                       <span className="font-mono text-[10px] uppercase tracking-widest font-bold">W3C Credential Ready</span>
                    </div>
                 </div>
              </CinematicCard>
            </div>
          </div>
        </div>
      </WaveSection>

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
