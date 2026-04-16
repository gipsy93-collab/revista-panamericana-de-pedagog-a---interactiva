import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquareWarning } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function DiscussionSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.disc-badge', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.disc-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.disc-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.4');

  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden text-white">
        <div className="mb-16">
            <div className="disc-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F27D261a] text-[#F27D26] text-xs font-bold uppercase tracking-widest mb-4">
              <span className="shrink-0"><MessageSquareWarning size={14} /></span>
              IMRyD: Discusión
            </div>
            <h2 className="disc-title text-4xl md:text-6xl font-display font-bold mb-8">
              Interpretación y <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Tensiones</span>
            </h2>
            
            <div className="space-y-6">
                <div className="disc-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 border-l-4 border-l-[#00d2ff]">
                    <h3 className="text-2xl font-display font-bold mb-2">La Paradoja de la Interacción</h3>
                    <p className="text-white/70 leading-relaxed font-light">
                        La tecnología tiene el objetivo fundacional de conectar, pero el 47% de los docentes experimenta dificultades precisamente en ese punto. No se trata de falta de herramientas funcionales, sino de la complejidad cognitiva y relacional para crear entornos genuinamente integradores entre el aula física y remota.
                    </p>
                </div>

                <div className="disc-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 border-l-4 border-l-[#4facfe] flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-bold mb-2">El Dilema de la Atención Dividida</h3>
                    <p className="text-white/70 leading-relaxed font-light">
                        Intentar "servir a estudiantes presenciales y virtuales simultáneamente" genera una sobrecarga extra sobre el docente. Equivale a conducir dos conversaciones espaciales paralelas esperando la misma profundidad fenomenológica en ambas, corriendo el riesgo de alienar a uno de los dos grupos.
                    </p>
                </div>

                <div className="disc-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 border-l-4 border-l-[#F27D26] flex flex-col justify-center">
                    <h3 className="text-2xl font-display font-bold mb-2">La Brecha Formación-Tecnología</h3>
                    <p className="text-white/70 leading-relaxed font-light">
                        El 27% no reporta problemas técnicos físicos, pero un gran porcentaje lidia con choques metodológicos. Esto sugiere algo vital: la infraestructura institucional puede estar lista (ancho de banda, displays), pero la formación puramente pedagógica para orquestarla de modo híbrido va pasos por detrás del hardware.
                    </p>
                </div>
            </div>

        </div>
    </section>
  )
}
