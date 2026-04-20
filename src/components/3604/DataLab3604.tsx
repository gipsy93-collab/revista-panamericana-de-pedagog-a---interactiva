import React from 'react';
import { motion } from 'motion/react';
import { 
  Film, FilmIcon, Users, Microscope, Layers, 
  Search, ClipboardList, BookOpen, Share2,
  Calendar, MapPin, PlayCircle, Eye, MessageSquare
} from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export const DataLab3604 = () => {
  const movies = [
    { 
      t: "Romeo y Julieta", 
      d: "Baz Luhrmann", 
      o: "Romeo y Julieta (Shakespeare)", 
      theme: "Amor, Destino",
      color: "bg-rose-500"
    },
    { 
      t: "Crónica de una muerte anunciada", 
      d: "Francesco Rosi", 
      o: "Crónica de una muerte anunciada (GGM)", 
      theme: "Violencia Social",
      color: "bg-zinc-800",
      dark: true
    },
    { 
      t: "Rebelión en la granja", 
      d: "John Halas & Joy Batchelor", 
      o: "Rebelión en la granja (Orwell)", 
      theme: "Libertad, Poder",
      color: "bg-white"
    }
  ];

  const phases = [
    {
      title: "Diagnóstico",
      desc: "Reconocimiento de condiciones del grupo, hábitos de estudio y prácticas mediáticas.",
      icon: Search,
      color: "bg-rose-100"
    },
    {
      title: "Planeación",
      desc: "Diseño de secuencia didáctica reflexiva: antes, durante y después de la proyección.",
      icon: Calendar,
      color: "bg-rose-200"
    },
    {
      title: "Acción",
      desc: "Implementación con películas adaptadas de obras literarias universales.",
      icon: PlayCircle,
      color: "bg-rose-600",
      dark: true
    },
    {
      title: "Observación",
      desc: "Registro sistemático mediante bitácora docente y seguimiento de retroalimentación.",
      icon: Eye,
      color: "bg-zinc-900",
      dark: true
    },
    {
       title: "Reflexión",
       desc: "Análisis conjunto mediante focus group virtual de aprendizajes alcanzados.",
       icon: MessageSquare,
       color: "bg-rose-400"
    }
  ];

  return (
    <div className="py-24 bg-[#0a0a0a] border-y-[12px] border-black px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 font-mono text-[200px] font-black text-rose-600/[0.05] leading-none pointer-events-none select-none italic">
         CINE_MED
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <BrutalSticker text="DATA_LAB // INVESTIGACIÓN ACCIÓN" color="bg-rose-600" className="text-white mb-4" />
            <h2 className="text-6xl md:text-8xl font-display uppercase font-black leading-none text-white">
              Mediador <br /> <span className="text-rose-600 italic">Pedagógico</span>
            </h2>
          </div>
          <div className="bg-white text-black p-8 border-4 border-black shadow-[10px_10px_0_0_#be123c] -rotate-1">
             <div className="flex items-center gap-4 mb-2">
                <Users className="text-rose-600" />
                <span className="font-mono text-xs uppercase font-black tracking-widest">Población</span>
             </div>
             <div className="text-4xl font-display font-black leading-none">N=30</div>
             <p className="font-mono text-[10px] uppercase opacity-40 italic">Bachilleres Quintana Roo</p>
          </div>
        </div>

        {/* METODOLOGÍA PHASES */}
        <div className="grid md:grid-cols-5 gap-4 mb-32">
          {phases.map((phase, idx) => (
            <BrutalCard key={idx} color={phase.color} className={`${phase.dark ? "text-white" : "text-black"} text-left p-6 flex flex-col h-full`}>
              <div className="flex items-start justify-between mb-6">
                <phase.icon size={32} className={phase.dark ? "text-rose-400" : "text-rose-700"} />
                <span className="font-mono text-[9px] font-black opacity-30 italic">P_0{idx+1}</span>
              </div>
              <h4 className="font-display text-lg font-black uppercase italic mb-4 leading-tight">{phase.title}</h4>
              <p className={`font-sans font-bold uppercase text-[9px] leading-relaxed flex-1 ${phase.dark ? "text-white/60" : "text-black/60"}`}>
                {phase.desc}
              </p>
            </BrutalCard>
          ))}
        </div>

        {/* MOVIE MATRIX */}
        <div className="flex items-center gap-4 mb-10 border-b-2 border-white/10 pb-4">
          <FilmIcon className="text-rose-600" size={32} />
          <h3 className="font-display text-3xl uppercase font-black italic text-white underline decoration-rose-600 decoration-8 underline-offset-8">Matriz Audiovisual</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {movies.map((m, idx) => (
            <div key={idx} className={`${m.color} ${m.dark ? 'text-white' : 'text-black'} p-10 border-8 border-black shadow-[15px_15px_0_0_#be123c] hover:-translate-y-4 transition-transform group relative overflow-hidden h-full`}>
               <div className="absolute top-0 right-0 p-4 font-mono text-4xl font-black opacity-10 uppercase italic">FILM_{idx+1}</div>
               <div className="relative z-10 flex flex-col h-full">
                  <h4 className="font-display text-3xl font-black uppercase italic mb-6 leading-[0.9] border-b-4 border-black/10 pb-4">
                    {m.t}
                  </h4>
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-2">
                      <Film size={14} className="opacity-40" />
                      <p className="font-mono text-[10px] uppercase font-black tracking-widest leading-none">DIR: {m.d.toUpperCase()}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} className="opacity-40" />
                      <p className="font-mono text-[10px] uppercase font-black tracking-widest leading-none">OBRA: {m.o.toUpperCase()}</p>
                    </div>
                  </div>
                  <div className={`mt-10 px-4 py-2 border-2 border-black inline-block text-xs font-black uppercase italic tracking-widest ${m.dark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    {m.theme}
                  </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-8 border-4 border-white/10 bg-white/5 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md">
           <p className="font-mono text-[11px] text-white/60 uppercase font-black italic max-w-2xl">
              * El 21% de los alumnos utilizaban material audiovisual de forma sistemática previo a la intervención. La brecha tecnológica (celulares vs PC) fue mitigada mediante WhatsApp y Classroom.
           </p>
           <div className="flex items-center gap-4 bg-rose-600 text-white px-8 py-4 border-4 border-black font-display text-xl font-black italic shadow-[8px_8px_0_0_#000]">
             <span>OCT 2020 - ENE 2021</span>
           </div>
        </div>
      </div>
    </div>
  );
};
