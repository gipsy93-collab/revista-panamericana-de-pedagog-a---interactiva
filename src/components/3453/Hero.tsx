import { useEffect, useRef } from 'react';
import { BookOpen } from 'lucide-react';
import gsap from 'gsap';
import { BrutalTitle, BrutalSticker, BrutalCard } from '../BrutalistLib';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      tl.from(".brutal-hero-element", {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        skewY: 10
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-[90vh] flex flex-col justify-center items-center px-6 pt-32 pb-20 text-black overflow-hidden">
      
      <div className="max-w-5xl w-full flex flex-col items-center text-center gap-12 relative z-10">
        
        <div className="brutal-hero-element">
          <BrutalSticker 
            text="ESTUDIO EMPÍRICO FENOMENOLÓGICO" 
            color="bg-[#ff6b9d]" 
            className="text-white text-lg py-2 px-6"
          />
        </div>

        <div className="space-y-4 brutal-hero-element">
          <BrutalTitle className="text-6xl md:text-9xl text-black">
            Experiencias <br/>
            <span className="text-[#a855f7]">Docentes</span>
          </BrutalTitle>
          <h2 className="font-pop font-black text-2xl md:text-4xl uppercase tracking-tighter mt-8 bg-black text-white px-4 inline-block">
            en el Abordaje del Consumo de Drogas
          </h2>
        </div>

        <div className="brutal-hero-element w-full max-w-4xl">
          <BrutalCard color="bg-white" className="text-left border-[6px]">
            <p className="font-pop font-bold text-xl md:text-2xl leading-tight mb-8">
              Experiencias de profesores jefes de enseñanza media en el abordaje del consumo de drogas entre estudiantes en el sur de Chile.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t-4 border-black">
              <div className="space-y-2">
                <span className="text-xs uppercase font-black opacity-40">Autores</span>
                <p className="font-mono font-bold text-sm">
                  D. Inostroza-Fuentes, F. Torres-Moreno, M. Vera-Jackson & P. Castillo-Mardones
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 border-2 border-black flex flex-col">
                    <div className="flex-1 bg-white" />
                    <div className="flex-1 bg-[#D52B1E]" />
                    <div className="absolute w-4 h-4 bg-[#0039A6] border-r-2 border-b-2 border-black" />
                  </div>
                  <span className="font-mono font-bold text-xs">Universidad de Concepción</span>
                </div>
                
                <a 
                  href="https://doi.org/10.21555/rpp.3453" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-block bg-black text-white px-4 py-1 text-xs font-mono hover:bg-[#06b6d4] transition-colors"
                >
                  DOI: 10.21555/rpp.3453
                </a>
              </div>
            </div>
          </BrutalCard>
        </div>
      </div>
    </section>
  );
}
