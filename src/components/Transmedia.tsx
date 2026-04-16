import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Mic, FileText, ChevronRight, Globe } from 'lucide-react';

const TRANSMEDIA_PROJECTS = [
  {
    id: 'podcast',
    type: 'Podcast',
    title: 'Voces de la Pedagogía',
    desc: 'Conversaciones profundas con los autores de la RPP sobre el futuro de la educación en México.',
    icon: Mic,
    color: 'bg-[#fccb06]',
    text: 'text-black',
    link: '#',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1000'
  },
  {
    id: 'etica-ia-video',
    type: 'Aprende jugando',
    title: 'Ética e IA en Salud',
    desc: 'Un recorrido visual por los hallazgos del Dr. Pérez-Duarte sobre la responsabilidad bioética.',
    icon: Play,
    color: 'bg-[#0f3896]',
    text: 'text-white',
    link: '/etica-ia-salud/trailer.html',
    videoUrl: '/etica-ia-salud/trailer-video.mp4'
  },
  {
    id: 'infografias',
    type: 'Mapas de datos interactivos',
    title: 'Data-Mapping Educativo',
    desc: 'Visualización interactiva de las misiones de la Nueva Escuela Mexicana.',
    icon: FileText,
    color: 'bg-[#e81e61]',
    text: 'text-white',
    link: '/etica-ia-salud/projects.html',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000'
  }
];

export default function Transmedia() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="bg-[#0f172a] py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-[#fccb06] selection:text-black">
      {/* Background: Azul noche con degradados */}
      <div className="absolute top-20 right-20 w-[400px] h-[400px] bg-cyan-400/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-20 left-20 w-[300px] h-[300px] bg-[#fccb06]/10 blur-[150px] rounded-full" />
      
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-[#fccb06] border-2 border-black flex items-center justify-center text-black">
                <Globe size={24} />
              </div>
              <span className="font-accent font-black tracking-widest text-[#fccb06] uppercase text-sm">Laboratorio de Contenidos // Transmedia_Labs</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white">
              <span className="text-[#fccb06]">TRANSMEDIA</span>
            </h2>
            
            <p className="text-xl md:text-2xl font-sans text-white/60 leading-relaxed font-light max-w-xl">
              Expandimos el conocimiento científico más allá del papel. Videos, podcasts e infografías diseñadas para la inmersión total.
            </p>
          </div>
          
          <div className="hidden lg:flex flex-col items-end gap-2 text-right opacity-60">
             <div className="flex gap-1 h-32 items-end">
                {[5,8,4,9,12,7,10,14,3,11].map((h, i) => (
                  <motion.div 
                    key={i} 
                    animate={{ height: [`${h*15}%`, `${(h+2)*10}%`, `${h*15}%`] }} 
                    transition={{ duration: 1 + i*0.1, repeat: Infinity }}
                    className="w-1.5 bg-[#fccb06] rounded-full" 
                  />
                ))}
             </div>
             <span className="font-mono text-[9px] tracking-widest uppercase font-black text-white/60">Audiostream_Active_v1</span>
          </div>
        </div>

        {/* Transmedia Projects - Refined Horizontal Layout (Stacking) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {TRANSMEDIA_PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ rotate: i % 2 === 0 ? -5 : 5, y: 100, opacity: 0 }}
                whileInView={{ rotate: i % 2 === 0 ? -1 : 1, y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className={`group relative ${project.color} ${project.text} p-12 overflow-hidden border-4 border-black shadow-[12px_12px_0_#000] hover:shadow-[20px_20px_0_#000] hover:-translate-y-4 hover:rotate-0 transition-all cursor-pointer min-h-[500px] flex flex-col justify-between`}
              >
                 {/* Video background on hover */}
                 <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    {('videoPreview' in project) && project.videoPreview ? (
                      <video 
                        src={project.videoPreview as string} 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        className="w-full h-full object-cover grayscale brightness-50"
                      />
                    ) : (
                      <img 
                        src={(project as any).image} 
                        className="w-full h-full object-cover grayscale brightness-50" 
                      />
                    )}
                 </div>

                 <div className="relative z-10 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between">
                       <span className="font-mono text-[10px] font-black uppercase tracking-widest opacity-60 px-4 py-1 border border-current rounded-full">
                         {project.type}
                       </span>
                       <Icon size={48} className="rotate-12 group-hover:rotate-0 transition-transform duration-500" />
                    </div>

                    <div className="space-y-6">
                       <h3 className="text-4xl md:text-5xl font-display uppercase leading-[0.9] group-hover:text-white transition-colors">
                         {project.title}
                       </h3>
                       <p className="text-sm font-bold opacity-60 uppercase tracking-widest leading-relaxed group-hover:text-white transition-colors">
                         {project.desc}
                       </p>
                    </div>

                    <div className="pt-12">
                       <a 
                         href={project.link}
                         className={`inline-flex items-center gap-4 text-sm font-black uppercase group-hover:text-white transition-colors`}
                       >
                         Explorar Proyecto <ChevronRight size={20} className="group-hover:translate-x-2 transition-transform" />
                       </a>
                    </div>
                 </div>

                 {/* Urban design element (sticker) */}
                 <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-white/10 group-hover:rotate-45 transition-transform" />
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
