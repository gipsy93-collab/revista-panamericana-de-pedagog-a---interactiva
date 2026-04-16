import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Users, Target, BookOpen } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export default function MethodologyLab() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brutal-method-card', {
        scale: 0.8,
        rotate: -5,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="method" ref={containerRef} className="relative w-full max-w-6xl mx-auto px-6 z-10 py-24 text-black">
      <div className="flex flex-col items-center mb-24 text-center">
        <BrutalSticker text="[ MÉTODO ]" color="bg-[#a855f7]" className="text-white mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
          Diseño <span className="text-[#a855f7]">Fenomenológico</span>
        </h2>
        <p className="font-pop font-bold text-xl md:text-2xl max-w-3xl">
          Se optó por explorar y comprender las vivencias directamente desde quienes enfrentan el problema diariamente. Una investigación cualitativa descriptiva transversal.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <BrutalCard color="bg-white" className="brutal-method-card border-[6px]">
          <div className="bg-[#a855f7] p-4 inline-block border-4 border-black mb-6 shadow-[4px_4px_0_#000]">
            <Users size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-black uppercase mb-4">Población</h3>
          <p className="font-pop font-bold text-lg mb-6 leading-tight">
            8 Profesores Jefes de enseñanza media (edades entre 28 y 64 años, con 3 a 30 años de experiencia).
          </p>
          <div className="px-4 py-2 bg-black text-white font-mono font-black uppercase text-sm inline-block">
            N = 8 Docentes
          </div>
        </BrutalCard>

        <BrutalCard color="bg-white" className="brutal-method-card border-[6px]">
          <div className="bg-[#ff6b9d] p-4 inline-block border-4 border-black mb-6 shadow-[4px_4px_0_#000]">
            <Target size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-black uppercase mb-4">Zonificación</h3>
          <p className="font-pop font-bold text-lg mb-6 leading-tight">
            Escuchamos voces de escuelas públicas y particulares subvencionadas de la Zona Sur de Chile.
          </p>
          <div className="flex gap-4 font-mono font-black text-xs uppercase text-[#ff6b9d]">
            <span>Bío-Bío</span> • <span>Los Lagos</span> • <span>Los Ríos</span>
          </div>
        </BrutalCard>

        <BrutalCard color="bg-black" className="brutal-method-card border-[6px] text-white">
          <div className="bg-[#06b6d4] p-4 inline-block border-4 border-white mb-6 shadow-[4px_4px_0_#fff]">
            <BookOpen size={40} className="text-white" />
          </div>
          <h3 className="text-2xl font-black uppercase mb-4 text-white">Recolección</h3>
          <p className="font-pop font-bold text-lg mb-6 leading-tight opacity-90">
            Entrevistas semiestructuradas que continuaron hasta alcanzar el punto de saturación teórica.
          </p>
          <p className="font-mono text-xs font-black uppercase text-[#06b6d4]">
            * 100% de los docentes había acompañado casos de consumo.
          </p>
        </BrutalCard>
      </div>
    </section>
  );
}

