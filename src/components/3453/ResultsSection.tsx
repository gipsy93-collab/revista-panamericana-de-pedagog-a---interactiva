import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Eye, MessageCircle, Flag, ClipboardCheck, Link as LinkIcon, HeartPulse } from 'lucide-react';
import { BrutalCard, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export default function ResultsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    { title: 'Detección', desc: 'El profesor jefe observa cambios de conducta: agresividad, ausentismo, aislamiento.', icon: Eye, color: 'text-white', bg: 'bg-[#ff6b9d]' },
    { title: 'Entrevista', desc: 'Conversación privada para recoger información y expresar preocupación, no sanción.', icon: MessageCircle, color: 'text-black', bg: 'bg-[#f59e0b]' },
    { title: 'Notificación', desc: 'Se contacta al apoderado o tutor legal de manera cuidadosa y empática.', icon: Flag, color: 'text-white', bg: 'bg-[#a855f7]' },
    { title: 'Protocolo', desc: 'Se involucra al equipo psicosocial (convivencia) del establecimiento.', icon: ClipboardCheck, color: 'text-white', bg: 'bg-[#06b6d4]' },
    { title: 'Redes', desc: 'Derivación a SENDA, CESFAM, Tribunales de Familia o Fiscalía.', icon: LinkIcon, color: 'text-white', bg: 'bg-[#34d399]' },
    { title: 'Seguimiento', desc: 'Apoyo psicosocial continuo y acompañamiento del proceso.', icon: HeartPulse, color: 'text-black', bg: 'bg-[#fbbf24]' }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.brutal-step-item', {
        opacity: 0,
        x: -40,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="results" ref={containerRef} className="relative w-full max-w-6xl mx-auto px-6 z-10 py-24 text-black font-pop">
      
      <div className="flex flex-col items-center mb-24 text-center">
        <BrutalSticker text="[ RESULTADOS ]" color="bg-[#06b6d4]" className="text-white mb-8" />
        <h2 className="font-display text-5xl md:text-7xl uppercase mb-8 leading-[0.9]">
          El Protocolo de <span className="text-[#06b6d4]">Actuación</span>
        </h2>
        <p className="font-bold text-xl md:text-2xl max-w-4xl text-black">
          Las experiencias están mediadas por los protocolos internos (Circular N° 482). Flujo de acción que los docentes deben seguir, revelando la discrepancia entre las reglas y los recursos.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Interactive Steps */}
        <div className="space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <div 
                key={idx}
                className={`brutal-step-item cursor-pointer border-4 border-black p-6 transition-all uppercase
                  ${isActive ? 'bg-white shadow-none translate-x-2 translate-y-2' : 'bg-white shadow-[6px_6px_0_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0_#000]'}
                `}
                onClick={() => setActiveStep(idx)}
              >
                <div className="flex gap-6 items-center">
                  <div className={`p-4 border-2 border-black ${step.bg} ${step.color} shrink-0 shadow-[3px_3px_0_#000]`}>
                    <Icon size={32} />
                  </div>
                  <div>
                    <h4 className="font-black text-xl">{step.title}</h4>
                    {isActive && (
                      <p className="font-mono font-bold text-sm mt-4 normal-case border-t-2 border-black pt-4">
                        {step.desc}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Text Quotes */}
        <div className="flex flex-col gap-12">
          <BrutalQuote className="bg-white">
            "...empezamos a poner las alertas, en mi caso como profesora jefe, lo que hice inmediatamente cuando empecé a sospechar... Primero hicimos lo que dice el protocolo: entrevistar al estudiante, al apoderado, darles pistas sobre lo que observamos..."
            <div className="mt-8 text-sm font-black uppercase text-[#ff6b9d]">— Participante N° 2</div>
          </BrutalQuote>

          <BrutalQuote className="bg-white border-l-[#06b6d4]">
            "...un estudiante expuesto al consumo ve vulneradas sus necesidades más básicas, y llega al aula sin haber descansado bien (...) eso puede generar mayor agresividad en la conducta."
            <div className="mt-8 text-sm font-black uppercase text-[#06b6d4]">— Participante N° 1</div>
          </BrutalQuote>
        </div>
      </div>
    </section>
  );
}
