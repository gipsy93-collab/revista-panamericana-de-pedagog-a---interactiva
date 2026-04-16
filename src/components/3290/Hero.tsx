import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const container = useRef<HTMLElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    // Badge
    tl.fromTo('.hero-badge', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 1, delay: 0.2 }
    );

    // Title lines
    tl.fromTo('.hero-title-line', 
      { y: 150, opacity: 0, rotationX: -30, transformOrigin: '0% 50% -50' },
      { y: 0, opacity: 1, rotationX: 0, stagger: 0.15, duration: 1.2, ease: 'back.out(1.5)' },
      '-=0.6'
    );

    // Meta Info
    tl.fromTo('.hero-meta',
      { opacity: 0, x: -20 },
      { opacity: 1, x: 0, duration: 0.8 },
      '-=0.8'
    );

    // Description text
    tl.fromTo('.hero-desc',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.2, duration: 1 },
      '-=0.8'
    );

    // Question box
    tl.fromTo('.hero-quote',
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 1, ease: 'back.out(1.2)' },
      '-=0.8'
    );

    // Buttons
    tl.fromTo('.hero-btn',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, stagger: 0.15, duration: 0.8, ease: 'back.out(2)' },
      '-=0.6'
    );

    // Chevron infinite bounce handled by GSAP
    gsap.to('.hero-chevron', {
      y: 15,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Parallax decor elements on scroll
    gsap.to('.hero-decor-1', {
      y: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.hero-decor-2', {
      y: -200,
      ease: 'none',
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

  }, { scope: container });

  const scrollToSurvey = () => {
    document.getElementById('tu-turno')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToMethodology = () => {
    document.getElementById('metodo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={container} className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden" style={{ perspective: '1000px' }}>
      <div className="max-w-7xl w-full z-10 text-white">
        <div className="space-y-4">
          <span className="hero-badge inline-block text-[#00d2ff] font-display font-semibold tracking-widest uppercase text-sm">
            Investigación Fenomenológica (N=23)
          </span>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.9] tracking-tighter">
            <div className="overflow-hidden"><div className="hero-title-line">La Paradoja</div></div>
            <div className="overflow-hidden"><div className="hero-title-line bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Multimodal</div></div>
          </h1>
          
          <div className="max-w-2xl space-y-6 pt-4">
            <div className="hero-meta flex flex-col gap-2 border-l-2 border-[#00d2ff] pl-4 py-1 mb-6">
              <span className="text-white/80 font-bold text-sm tracking-wide">
                Challenges in hybrid learning at a university in Southwestern Colombia
              </span>
              <span className="text-white/50 text-xs flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>C.A. Roldán-Morales & A.F. Torres-Tovar</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span className="flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" className="w-4 h-auto rounded-[1px] shadow-sm">
                    <rect width="3" height="2" fill="#FCD116"/>
                    <rect width="3" height="1" y="1" fill="#003893"/>
                    <rect width="3" height="0.5" y="1.5" fill="#CE1126"/>
                  </svg>
                  Universidad Autónoma de Occidente
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>Revista Panamericana de Pedagogía (n. 39, 2025)</span>
              </span>
            </div>

            <p className="hero-desc text-lg md:text-xl text-white/60 font-light leading-relaxed">
              La educación superior en Colombia enfrenta una triple presión: adaptarse a la diversidad, expandir cobertura y asegurar calidad. Desde 2021, la multimodalidad emergió como estrategia central, pero desveló una paradoja: la promesa teórica choca con una dura realidad práctica.
            </p>
            <div className="hero-quote border-l-4 border-[#00d2ff] pl-6 py-4 bg-white/5 rounded-r-2xl backdrop-blur-sm relative shadow-2xl">
              <h3 className="text-[#00d2ff] font-bold text-xs tracking-widest uppercase mb-2">Pregunta de Investigación</h3>
              <p className="text-white text-lg font-serif italic">
                "¿Cuáles son los desafíos pedagógicos y tecnológicos que enfrentan los docentes en la implementación del aprendizaje híbrido?"
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <button onClick={scrollToSurvey} className="hero-btn px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-[#00d2ff] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]">
            Comenzar Diagnóstico
          </button>
          <button onClick={scrollToMethodology} className="hero-btn px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all duration-300">
            Ver Metodología
          </button>
        </div>
      </div>

      <div className="hero-chevron absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 z-10">
        <ChevronDown size={32} />
      </div>
      
      {/* Decorative elements setup for parallax */}
      <div className="hero-decor-1 absolute top-1/4 right-10 w-64 h-64 bg-[#00d2ff1a] rounded-full blur-3xl" />
      <div className="hero-decor-2 absolute bottom-1/4 left-10 w-96 h-96 bg-[#4facfe1a] rounded-full blur-3xl delay-700" />
    </section>
  );
}
