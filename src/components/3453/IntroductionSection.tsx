import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BookOpen } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

export default function IntroductionSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brutal-intro-card', {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const riskFactors = [
    "Dificultad de adaptación escolar",
    "Sentimientos de inutilidad",
    "Ausentismo escolar",
    "Falta de modelos positivos",
    "Experiencias de fracaso"
  ];

  const protectiveFactors = [
    "Integración adecuada",
    "Motivación educativa",
    "Figuras docentes significativas",
    "Sentido de pertenencia",
    "Adhesión a normas escolares"
  ];

  return (
    <section id="intro" ref={containerRef} className="relative w-full max-w-6xl mx-auto px-6 z-10 py-24 text-black">
      
      <div className="flex flex-col items-center mb-24 text-center">
        <BrutalSticker text="[ INTRODUCCIÓN ]" color="bg-black" className="text-white mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
          Radiografía del <span className="text-[#ff6b9d]">Contexto Nacional</span>
        </h2>
        <p className="font-pop font-bold text-xl md:text-2xl max-w-3xl">
          La educación es un espacio formativo vital, pero el ambiente escolar chileno enfrenta una crisis de microtráfico y uso de drogas.
        </p>
      </div>

      {/* SENDA Stats Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
        <BrutalCard color="bg-[#ff6b9d]" className="brutal-intro-card text-center text-white">
          <span className="text-7xl font-display mb-2 block">62.3%</span>
          <p className="font-mono font-bold uppercase text-sm leading-none">Ha visto venta de drogas cerca de su escuela.</p>
        </BrutalCard>
        
        <BrutalCard color="bg-[#f59e0b]" className="brutal-intro-card text-center text-black">
          <span className="text-7xl font-display mb-2 block">52%</span>
          <p className="font-mono font-bold uppercase text-sm leading-none">Admite haber visto consumo dentro del establecimiento.</p>
        </BrutalCard>
        
        <BrutalCard color="bg-[#a855f7]" className="brutal-intro-card text-center text-white">
          <span className="text-7xl font-display mb-2 block">32.8%</span>
          <p className="font-mono font-bold uppercase text-sm leading-none">De estudiantes de enseñanza media consume marihuana.</p>
        </BrutalCard>
        
        <div className="md:col-span-3 text-center">
            <span className="bg-black text-white px-3 py-1 font-mono text-xs font-bold uppercase">
                *Datos oficiales extraídos de estudios SENDA (2021) e INJUV.
            </span>
        </div>
      </div>

      {/* Problematic Framework - Arbex */}
      <BrutalCard color="bg-white" className="max-w-5xl mx-auto border-[6px]">
        <div className="flex flex-col md:flex-row items-center gap-6 mb-12 pb-8 border-b-4 border-black">
          <div className="p-4 bg-[#06b6d4] border-4 border-black shadow-[4px_4px_0_#000]">
            <BookOpen size={40} className="text-white" />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Factores de Riesgo vs. Protección</h3>
            <p className="font-mono font-bold text-[#06b6d4] uppercase">Teoría de Carmen Arbex et al. (2002)</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Risk Factors */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-4 text-2xl font-black uppercase text-[#f87171]">
              <div className="w-4 h-4 bg-[#f87171] border-2 border-black" />
              Riesgo / Vulnerabilidad
            </h4>
            <div className="flex flex-wrap gap-3">
              {riskFactors.map((factor, i) => (
                <div key={i} className="px-4 py-2 bg-white border-2 border-black font-pop font-bold text-sm uppercase shadow-[3px_3px_0_#f87171]">
                  {factor}
                </div>
              ))}
            </div>
            <p className="font-mono text-xs font-bold uppercase opacity-60 italic pt-4">
              * El juego original desafiaba al usuario a categorizar estos factores. Todos generan desmotivación o aislamiento.
            </p>
          </div>

          {/* Protective Factors */}
          <div className="space-y-6">
            <h4 className="flex items-center gap-4 text-2xl font-black uppercase text-[#34d399]">
              <div className="w-4 h-4 bg-[#34d399] border-2 border-black" />
              Sostenes Reales
            </h4>
            <div className="flex flex-wrap gap-3">
              {protectiveFactors.map((factor, i) => (
                <div key={i} className="px-4 py-2 bg-white border-2 border-black font-pop font-bold text-sm uppercase shadow-[3px_3px_0_#34d399]">
                  {factor}
                </div>
              ))}
            </div>
          </div>
        </div>
      </BrutalCard>
    </section>
  );
}
