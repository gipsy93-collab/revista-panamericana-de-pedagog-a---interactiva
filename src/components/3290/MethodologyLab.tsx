import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Beaker, Users, ClipboardList, Database, Search } from 'lucide-react';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 'sample',
    title: 'Muestra Cualitativa',
    icon: Users,
    content: '23 docentes con nivel de maestría.',
    detail: 'Participación voluntaria / Fenomenológica.',
    color: 'bg-blue-500',
  },
  {
    id: 'tools',
    title: 'Instrumentos',
    icon: ClipboardList,
    content: 'Cuestionario estructurado y Grupos focales.',
    detail: 'Validado con tres docentes pares.',
    color: 'bg-purple-500',
  },
  {
    id: 'process',
    title: 'Trabajo de Campo',
    icon: Search,
    content: 'Recolección en marzo 2023.',
    detail: 'Modelos post-pandemia consolidados.',
    color: 'bg-[#00d2ff]',
  },
  {
    id: 'analysis',
    title: 'Procesamiento',
    icon: Database,
    content: 'Análisis de contenido (Krippendorff, 1990).',
    detail: '4 categorías y 22 códigos identificados.',
    color: 'bg-[#4facfe]',
  },
];

const faculties = [
  { name: 'C. Básicas', val: 39 },
  { name: 'C. Humanas', val: 26 },
  { name: 'Idiomas', val: 13 },
  { name: 'Ingeniería', val: 13 },
  { name: 'D. Humano', val: 9 },
];

export default function MethodologyLab() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.methodology-header',
        start: 'top 80%',
      }
    });

    tl.fromTo('.meth-badge', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo('.meth-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, '-=0.5')
      .fromTo('.meth-box', { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.2)' }, '-=0.6')
      .fromTo('.meth-quote', { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.8 }, '-=0.6');

    // Steps cards
    gsap.fromTo('.meth-step', 
      { opacity: 0, y: 50, rotationZ: -2 },
      {
        opacity: 1, y: 0, rotationZ: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.meth-steps-container',
          start: 'top 85%'
        }
      }
    );

    // Terminal and Bars
    const dataTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.meth-data-container',
        start: 'top 80%'
      }
    });

    dataTl.fromTo('.meth-data-container', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
    
    faculties.forEach((f, i) => {
      dataTl.fromTo(`.bar-${i}`, { width: 0 }, { width: `${f.val}%`, duration: 1, ease: 'power3.inOut' }, `-=0.8`);
    });

    dataTl.fromTo('.terminal-text', { opacity: 0 }, { opacity: 1, stagger: 0.2, duration: 0.1, ease: 'none' }, '-=0.5');

  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden text-white">
      <div className="methodology-header flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-white">
        <div className="max-w-2xl">
          <div className="meth-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4facfe1a] text-[#4facfe] text-xs font-bold uppercase tracking-widest mb-4">
            <Beaker size={14} />
            IMRyD: Método | Laboratorio
          </div>
          <h2 className="meth-title text-4xl md:text-6xl font-display font-bold mb-8">
            El Proceso de <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Descubrimiento</span>
          </h2>
          <div className="meth-box bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm mt-6 shadow-2xl">
            <h3 className="text-[#4facfe] font-bold text-xs tracking-widest uppercase mb-3">Objetivos del Estudio</h3>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              <strong className="text-white">Objetivo General:</strong> Analizar los desafíos pedagógicos y tecnológicos asociados al aprendizaje híbrido, centrándose en las experiencias y percepciones de los docentes.
            </p>
            <ul className="text-white/60 text-sm space-y-2 list-disc list-inside">
              <li>Identificar los principales desafíos pedagógicos reportados.</li>
              <li>Identificar los principales desafíos tecnológicos enfrentados.</li>
              <li>Explorar estrategias utilizadas para abordar estos desafíos.</li>
            </ul>
          </div>
        </div>
        <div className="text-right meth-quote">
          <p className="text-white/40 text-sm max-w-xs italic mb-4">
            "Comprender la experiencia vivida requiere profundidad fenomenológica, no solo métricas."
          </p>
        </div>
      </div>

      <div className="meth-steps-container grid grid-cols-1 lg:grid-cols-4 gap-4 mb-12">
        {steps.map((step) => (
          <div
            key={step.id}
            className="meth-step bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col h-full hover:border-[#00d2ff80] transition-all hover:-translate-y-2 cursor-default"
          >
            <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-white transition-transform group-hover:scale-110", step.color)}>
              <step.icon size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">{step.title}</h3>
            <p className="text-white/70 text-sm mb-4 flex-grow">{step.content}</p>
            <div className="pt-4 border-t border-white/5">
              <p className="text-[10px] uppercase tracking-widest text-white/30 font-bold">
                {step.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="meth-data-container bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00d2ff0d] blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h4 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
              <Users className="text-[#00d2ff]" />
              Distribución de la Muestra
            </h4>
            <div className="space-y-6">
              {faculties.map((f, i) => (
                <div key={f.name} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-tighter text-white">
                    <span className="text-white/60">{f.name}</span>
                    <span className="text-[#00d2ff]">{f.val}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className={`bar-${i} h-full bg-gradient-to-r from-[#00d2ff] to-[#4facfe]`} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/5 rounded-3xl p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#4facfe] flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(79,172,254,0.5)]">
                <Database size={20} />
              </div>
              <div>
                <h5 className="font-display font-bold text-white">Motor Cualitativo</h5>
                <p className="text-[10px] text-white/40 uppercase tracking-widest">Atlas.ti 23 Active</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="p-4 bg-black/40 rounded-xl border border-white/5 font-mono text-[10px] text-[#00d2ffcc]">
                <p className="mb-1 terminal-text">{'>'} EXTRAYENDO PATRONES...</p>
                <p className="mb-1 terminal-text">{'>'} PROCESANDO MUESTRA: N=23...</p>
                <p className="text-white/40 terminal-text">{'>'} 22 CÓDIGOS IDENTIFICADOS</p>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="terminal-text p-3 bg-white/5 rounded-xl text-center border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00d2ff] to-white">4</div>
                  <div className="text-[8px] uppercase text-white/40">Categorías</div>
                </div>
                <div className="terminal-text p-3 bg-white/5 rounded-xl text-center border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4facfe] to-white">Triang.</div>
                  <div className="text-[8px] uppercase text-white/40">De Investigadores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
