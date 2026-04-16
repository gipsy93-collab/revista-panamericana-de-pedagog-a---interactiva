import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CheckCircle2, Lightbulb, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const insights = [
  {
    title: "Formación Pedagógica",
    desc: "Invertir en programas que combinen desarrollo curricular y uso estratégico de tecnología.",
    icon: BookOpen,
  },
  {
    title: "Soporte Continuo",
    desc: "Implementar sistemas de soporte técnico en tiempo real para reducir la fricción tecnológica.",
    icon: Lightbulb,
  },
  {
    title: "Adaptación Organizacional",
    desc: "Repensar modelos de evaluación y seguimiento para el contexto multimodal.",
    icon: CheckCircle2,
  },
];

export default function Insights() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Floating animations for decorations
    gsap.to('.float-el-1', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    gsap.to('.float-el-2', {
      y: 20,
      duration: 5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: 1
    });

    // Scroll Triggered animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });

    tl.fromTo('.insight-badge', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo('.insight-title', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5')
      .fromTo('.insight-desc', { opacity: 0, x: -30 }, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');

    gsap.fromTo('.insight-item',
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.insights-list',
          start: 'top 85%'
        }
      }
    );

    gsap.fromTo('.insight-card-main',
      { opacity: 0, scale: 0.9, rotationY: 15 },
      {
        opacity: 1, scale: 1, rotationY: 0, duration: 1, ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: '.insight-card-main',
          start: 'top 80%'
        }
      }
    );

  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden text-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="insight-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">
            <CheckCircle2 size={14} />
            IMRyD: Conclusión
          </div>
          <h2 className="insight-title text-4xl md:text-6xl font-display font-bold mb-8">
            Hacia la <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Maestría</span> Híbrida
          </h2>
          <p className="insight-desc text-white/60 text-lg mb-12 leading-relaxed">
            El aprendizaje híbrido en educación superior colombiana enfrenta desafíos pedagógicos profundos—principalmente la integración de estudiantes presenciales y virtuales—y tecnológicos significativos que requieren formación docente continua y soporte técnico sistemático. La implementación exitosa no depende solo de infraestructura, sino de diseños pedagógicos que reconozcan y aborden activamente la complejidad de atender dos mundos simultáneamente.
          </p>
          
          <div className="insights-list space-y-6">
            {insights.map((item) => (
              <div
                key={item.title}
                className="insight-item flex gap-4 items-start"
              >
                <div className="mt-1 p-2 rounded-lg bg-[#00d2ff1a] text-[#00d2ff]">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4 className="font-display font-bold text-white/90">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative pt-12 lg:pt-0">
          <div className="insight-card-main bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl aspect-square flex items-center justify-center p-12 relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00d2ff1a] to-[#4facfe1a] animate-pulse" />
            <div className="relative z-10 text-center">
              <div className="text-8xl font-display font-bold text-white/10 mb-4">2026</div>
              <p className="text-2xl font-serif italic text-white/80 drop-shadow-lg">
                "El desafío no es técnico: es relacional."
              </p>
            </div>
          </div>
          
          {/* Decorative floating elements */}
          <div
            className="float-el-1 absolute -top-8 -right-8 w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center text-[#00d2ff] shadow-[0_0_20px_rgba(42,245,152,0.3)] z-20"
          >
            <BookOpen size={32} />
          </div>
          <div
            className="float-el-2 absolute -bottom-12 -left-12 w-32 h-32 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl flex items-center justify-center text-[#4facfe] shadow-[0_0_30px_rgba(79,172,254,0.3)] z-20"
          >
            <Lightbulb size={40} />
          </div>
        </div>
      </div>
    </section>
  );
}
