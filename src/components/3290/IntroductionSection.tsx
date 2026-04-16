import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function IntroductionSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.intro-badge', { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.intro-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.intro-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' }, '-=0.4');

  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="mb-16">
            <div className="intro-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00f2fe1a] text-[#00f2fe] text-xs font-bold uppercase tracking-widest mb-4">
              <BookOpen size={14} />
              IMRyD: Introducción
            </div>
            <h2 className="intro-title text-4xl md:text-6xl font-display font-bold mb-8 text-white">
              El Marco <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Teórico</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="intro-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                    <h3 className="text-xl font-display font-bold mb-4 text-[#00d2ff]">La Promesa Híbrida</h3>
                    <p className="text-white/70 leading-relaxed font-light">
                    Construyendo sobre teorías de Bonk & Graham y Garrison & Kanuka, el aprendizaje híbrido o <em>blended learning</em> se concibe como la integración transformadora de presencialidad y virtualidad. La literatura le asocia beneficios como mayores niveles de autonomía, motivación estudiantil y profunda flexibilidad cognitiva. 
                    </p>
                </div>
                <div className="intro-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <h3 className="text-xl font-display font-bold mb-4 text-red-400">El Conflicto Práctico</h3>
                    <p className="text-white/70 leading-relaxed font-light">
                    Sin embargo, la implementación rápida y post-pandémica reveló tensiones ocultas. Prevalecen barreras silenciosas como la brecha digital, la rigidez de infraestructura y la necesidad urgente de formación docente, contradiciendo la perfecta fluidez prometida por la teoría.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
