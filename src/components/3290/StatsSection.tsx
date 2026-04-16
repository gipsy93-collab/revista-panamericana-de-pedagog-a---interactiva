import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Zap, Target, Mic, Monitor, CheckCircle, BarChart2 } from 'lucide-react';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    label: "Interacción Híbrida",
    value: 47,
    description: "EL DATO QUE DUELE: Casi la mitad lucha con que sus estudiantes se hablen entre sí (remotos vs presenciales).",
    icon: Users,
    color: "from-[#00d2ff] to-[#3a7bd5]",
  },
  {
    label: "Sin Fricción Técnica",
    value: 27,
    description: "Docentes sin problemas técnicos. Prueba de que la infraestructura puede estar, pero falta formación.",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-400",
  },
  {
    label: "Compromiso",
    value: 26,
    description: "Reportan baja participación y desmotivación (contrario a la creencia popular de mayor autonomía).",
    icon: Zap,
    color: "from-[#00f2fe] to-[#4facfe]",
  },
  {
    label: "Estrategia Activa",
    value: 21,
    description: "Dificultad para diseñar actividades verdaderamente inclusivas para presenciales y virtuales.",
    icon: Target,
    color: "from-[#F27D26] to-orange-600",
  },
  {
    label: "Audio & Voz",
    value: 18,
    description: "Problemas técnicos constantes con micrófonos que rompen la comunicación fluida.",
    icon: Mic,
    color: "from-purple-500 to-[#3a7bd5]",
  },
  {
    label: "Alfabetización",
    value: 18,
    description: "Dificultades directas en el uso, sincronización y asignación de roles en plataformas.",
    icon: Monitor,
    color: "from-emerald-500 to-[#00d2ff]",
  },
];

export default function StatsSection() {
  const container = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    // Título parallax simple
    gsap.fromTo('.stat-title',
      { y: 80, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 1, ease: 'power3.out',
        scrollTrigger: {
          trigger: '.stat-title',
          start: 'top 85%',
        }
      }
    );

    // Stagger para que las tarjetas aparezcan en secuencia con animación 3D
    gsap.fromTo('.stat-card',
      { y: 150, opacity: 0, rotationY: -15, scale: 0.9 },
      {
        y: 0, opacity: 1, rotationY: 0, scale: 1, stagger: 0.1, duration: 1, ease: 'back.out(1.5)',
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        }
      }
    );

    // Animar las barras de progreso cuando las tarjetas están visibles
    const bars = gsap.utils.toArray('.stat-bar-fill');
    bars.forEach((bar: any) => {
      const width = bar.getAttribute('data-width');
      gsap.fromTo(bar, 
        { width: 0 },
        { 
          width: width + '%', 
          duration: 1.5, 
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: bar,
            start: 'top 95%'
          }
        }
      );
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto text-white" style={{ perspective: '1200px' }}>
      <div className="mb-16 stat-title">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d2ff1a] text-[#00d2ff] text-xs font-bold uppercase tracking-widest mb-4">
          <BarChart2 size={14} />
          IMRyD: Resultados
        </div>
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">
          El Mapa de los <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Desafíos</span>
        </h2>
        <p className="text-white/60 max-w-xl text-lg">
          Datos clave extraídos de la experiencia fenomenológica de 23 docentes universitarios.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stats-grid">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="stat-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 group relative overflow-hidden transition-all duration-300 hover:border-[#00d2ff80]"
          >
            <div className={cn(
              "absolute top-0 right-0 w-40 h-40 bg-gradient-to-br opacity-10 blur-3xl transition-opacity duration-500 group-hover:opacity-30",
              stat.color
            )} />
            
            <div className="flex items-start justify-between mb-8 relative z-10">
              <div className="p-3 bg-white/5 border border-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                <stat.icon className="text-[#00d2ff]" size={24} />
              </div>
              <span className="text-5xl font-display font-bold text-white/90 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:-translate-y-1 transition-all duration-300" style={{ backgroundImage: `linear-gradient(to right, #00d2ff, #4facfe)` }}>
                {stat.value}%
              </span>
            </div>

            <h3 className="text-xl font-display font-bold mb-2 relative z-10">{stat.label}</h3>
            <p className="text-white/50 text-sm leading-relaxed relative z-10">
              {stat.description}
            </p>

            <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden relative z-10">
              <div
                className={cn("stat-bar-fill h-full bg-gradient-to-r", stat.color)}
                data-width={stat.value}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
