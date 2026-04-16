import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Scale, ShieldAlert } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export default function DiscussionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brutal-paradox-box', {
        scale: 0.9,
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="discussion" ref={containerRef} className="relative w-full max-w-6xl mx-auto px-6 z-10 py-24 text-black font-pop">
      
      <div className="flex flex-col items-center mb-24 text-center">
        <BrutalSticker text="[ DISCUSIÓN ]" color="bg-[#f59e0b]" className="text-black mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
          La Paradoja de la <span className="text-[#f59e0b]">Tensión Paradigmática</span>
        </h2>
        <p className="font-bold text-xl md:text-2xl max-w-4xl">
          Esto representa una tensión normativa profunda. Los protocolos actúan bajo lógicas sancionatorias, contrariando el bienestar garantizado en los derechos de la niñez.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Ley Normativa */}
        <BrutalCard color="bg-white" className="brutal-paradox-box border-[6px] border-[#f87171]">
          <div className="text-[#f87171] mb-8 bg-black p-4 inline-block border-4 border-black shadow-[4px_4px_0_#f87171]">
            <Scale size={48} />
          </div>
          <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">Enfoque Normativo y Sancionatorio</h3>
          <p className="font-bold text-lg leading-tight mb-8">
            <span className="bg-[#f87171] text-white px-2">Leyes 20.000 y 20.084</span>. Enfocadas en el tráfico y la persecución. Fuerzan a las escuelas a operar como oficinas de control burocrático.
          </p>
        </BrutalCard>

        {/* Ley de Derechos */}
        <BrutalCard color="bg-white" className="brutal-paradox-box border-[6px] border-[#34d399]">
          <div className="text-[#34d399] mb-8 bg-black p-4 inline-block border-4 border-black shadow-[4px_4px_0_#34d399]">
            <ShieldAlert size={48} />
          </div>
          <h3 className="text-3xl font-black uppercase mb-6 tracking-tighter">Enfoque de Derechos</h3>
          <p className="font-bold text-lg leading-tight mb-8">
            <span className="bg-[#34d399] text-white px-2">Ley 21.430</span>. Exige medidas restitutivas del bienestar y protección integral. La verdadera vocación de la escuela es ser el sostén del desarrollo.
          </p>
        </BrutalCard>
        
        {/* Conclusión Paradoja */}
        <div className="md:col-span-2 brutal-paradox-box">
          <BrutalCard color="bg-[#fbbf24]" className="text-center py-6 border-4">
            <p className="font-mono font-black uppercase text-sm">
                <strong>La Paradoja:</strong> Se activan trámites legales automatizados porque el sistema carece de formación y recursos para actuar de otra manera.
            </p>
          </BrutalCard>
        </div>
      </div>
    </section>
  );
}
