import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const limitations = [
  "Tamaño muestral reducido: n=23, aunque apropiado para enfoque cualitativo, limita generalización.",
  "Una sola institución: Resultados específicos de la Universidad Autónoma de Occidente.",
  "Enfoque solo en docentes: No incluye perspectiva estudiantil.",
  "Representaciones subjetivas: Los autores señalan que 'se necesitan más datos' dado el papel de las representaciones de los docentes sobre qué constituye un obstáculo.",
  "Contexto específico: Modelo implementado desde 2021, en consolidación."
];

export default function LimitacionesSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.lim-badge', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.lim-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.lim-item', { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out' }, '-=0.4');
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden text-white">
      <div className="mb-12">
        <div className="lim-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
          <span className="shrink-0"><AlertTriangle size={14} /></span>
          IMRyD: Limitaciones
        </div>
        <h2 className="lim-title text-4xl md:text-6xl font-display font-bold mb-8">
          Alcances y <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-rose-300 to-rose-500">Restricciones</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {limitations.map((item, idx) => (
          <div
            key={idx}
            className="lim-item bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 border-l-4 border-l-rose-400"
          >
            <p className="text-white/80 leading-relaxed font-light">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
