import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
// import confetti from 'canvas-confetti'; // TODO: Instalar si se desea el efecto
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const quotes = [
  {
    text: "Un desafío fue poder vincular a los estudiantes remotos con los presenciales, especialmente al trabajar en actividades colaborativas.",
    author: "Docente P20",
    category: "Pedagógico",
  },
  {
    text: "El mayor desafío ha sido intentar atender a estudiantes presenciales y virtuales simultáneamente.",
    author: "Docente P16",
    category: "Pedagógico",
  },
  {
    text: "Se vuelve más exigente en términos de la selección de herramientas y el desarrollo de actividades.",
    author: "Docente P2",
    category: "Tecnológico",
  },
  {
    text: "Asegurar que los estudiantes presentes y remotos tengan iguales oportunidades para interactuar.",
    author: "Docente P8",
    category: "Pedagógico",
  },
];

export default function ChallengeExplorer() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });

    tl.fromTo('.explore-badge',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.5)' }
    );

    tl.fromTo('.explore-content',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      '-=0.3'
    );

  }, { scope: container });

  // Animación para el cambio de slide
  useGSAP(() => {
    if (quoteRef.current) {
      gsap.fromTo(quoteRef.current, 
        { opacity: 0, scale: 0.95, x: 20 }, 
        { opacity: 1, scale: 1, x: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, { dependencies: [currentIndex], scope: container });

  const next = () => {
    if (currentIndex === quotes.length - 1) {
      /* 
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00d2ff', '#3a7bd5', '#F27D26']
      });
      */
    }
    setCurrentIndex((prev) => (prev + 1) % quotes.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <section ref={container} className="py-24 px-6 relative overflow-hidden text-white">
      {/* Background container */}
      <div className="absolute inset-0 bg-white/5" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="explore-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00d2ff1a] text-[#00d2ff] text-xs font-bold uppercase tracking-widest mb-8">
          <Quote size={14} />
          Voces desde el Aula
        </div>

        <div className="explore-content relative min-h-[400px] flex items-center justify-center">
          <div
            ref={quoteRef}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 md:p-20 relative hover:border-[#00d2ff4d] transition-colors w-full"
          >
            <Quote className="absolute top-8 left-8 text-white/10" size={80} />
            
            <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8 relative z-10">
              "{quotes[currentIndex].text}"
            </p>
            
            <div className="flex flex-col items-center gap-2">
              <span className="font-display font-bold text-[#00d2ff]">{quotes[currentIndex].author}</span>
              <span className="text-xs text-white/40 uppercase tracking-widest">{quotes[currentIndex].category}</span>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <button 
              onClick={prev}
              className="p-4 rounded-full bg-black/50 border border-white/10 hover:bg-[#00d2ff] hover:border-transparent hover:text-black transition-all duration-300 backdrop-blur-md"
            >
              <ChevronLeft />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <button 
              onClick={next}
              className="p-4 rounded-full bg-black/50 border border-white/10 hover:bg-[#00d2ff] hover:border-transparent hover:text-black transition-all duration-300 backdrop-blur-md"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div className="explore-content mt-12 flex justify-center gap-2">
          {quotes.map((_, i) => (
            <div 
              key={i}
              className={cn(
                "h-1.5 transition-all duration-300 rounded-full",
                i === currentIndex ? "w-8 bg-[#00d2ff]" : "w-2 bg-white/20"
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
