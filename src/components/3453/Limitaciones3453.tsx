import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AlertTriangle, Users, MapPin, MessageSquare, BarChart3 } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

const LIMITACIONES = [
  {
    icon: Users,
    title: 'Muestra reducida',
    text: '8 docentes limitan la generalización de resultados.'
  },
  {
    icon: MessageSquare,
    title: 'Dificultades de reclutamiento',
    text: 'Falta de informantes interesados en la provincia de Concepción.'
  },
  {
    icon: MapPin,
    title: 'Cobertura geográfica limitada',
    text: 'Solo tres regiones del sur de Chile.'
  },
  {
    icon: AlertTriangle,
    title: 'Perspectiva unilateral',
    text: 'Solo se entrevistó a docentes, no a estudiantes ni familias.'
  },
  {
    icon: BarChart3,
    title: 'Método cualitativo',
    text: 'No permite establecer relaciones causales ni generalizaciones estadísticas.'
  }
];

export default function Limitaciones3453() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.limitacion-item', {
        opacity: 0,
        y: 30,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%'
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full max-w-6xl mx-auto px-6 z-10 py-24 text-white">
      <div className="flex flex-col items-center mb-16 text-center">
        <BrutalSticker text="[ LIMITACIONES ]" color="bg-[#e81e61]" className="text-white mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-[0.9]">
          Alcances y <span className="text-[#e81e61]">Límites</span>
        </h2>
        <p className="font-bold text-xl md:text-2xl max-w-4xl text-black">
          Consideraciones metodológicas que enmarcan la interpretación de los hallazgos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LIMITACIONES.map((item, idx) => {
          const Icon = item.icon;
          return (
            <BrutalCard
              key={idx}
              className="limitacion-item bg-[#0f172a] border-white text-white hover:bg-[#1e293b]"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#e81e61] border-2 border-white shrink-0">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-black text-lg uppercase mb-2">{item.title}</h4>
                  <p className="font-mono text-sm normal-case opacity-90">{item.text}</p>
                </div>
              </div>
            </BrutalCard>
          );
        })}
      </div>
    </section>
  );
}
