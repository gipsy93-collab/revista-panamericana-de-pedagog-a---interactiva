import { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, HelpCircle, Sparkles, BookOpen, Cpu } from 'lucide-react';
// import confetti from 'canvas-confetti';
import { cn } from '../../lib/utils';

gsap.registerPlugin(ScrollTrigger);

const questions = [
  {
    id: 1,
    title: "Dimensión Pedagógica",
    question: "¿Qué desafíos pedagógicos ha encontrado al desarrollar estas clases?",
    placeholder: "Ej: Interacción entre remotos y presenciales, motivación...",
    icon: BookOpen,
    color: "text-[#00d2ff]",
    bg: "bg-[#00d2ff1a]",
  },
  {
    id: 2,
    title: "Estrategias Pedagógicas",
    question: "¿Qué estrategias o recursos ha utilizado para abordarlos?",
    placeholder: "Ej: Actividades colaborativas integradas, feedback en tiempo real...",
    icon: Sparkles,
    color: "text-[#00f2fe]",
    bg: "bg-[#00f2fe1a]",
  },
  {
    id: 3,
    title: "Dimensión Tecnológica",
    question: "¿Qué desafíos tecnológicos ha encontrado al desarrollar estas clases?",
    placeholder: "Ej: Problemas de audio, conectividad, uso de plataformas...",
    icon: Cpu,
    color: "text-[#4facfe]",
    bg: "bg-[#4facfe1a]",
  },
  {
    id: 4,
    title: "Estrategias Tecnológicas",
    question: "¿Qué estrategias o recursos ha utilizado para abordarlos?",
    placeholder: "Ej: Soporte técnico inmediato, optimización de software...",
    icon: Send,
    color: "text-[#F27D26]",
    bg: "bg-[#F27D261a]",
  },
];

export default function InteractiveSurvey() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isComplete, setIsComplete] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const stepContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      }
    });

    tl.fromTo('.survey-badge', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .fromTo('.survey-title', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.3')
      .fromTo(stepContainerRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1, ease: 'back.out(1.2)' }, '-=0.5');

  }, { scope: containerRef });

  // Animation for step transitions
  useGSAP(() => {
    if (stepContainerRef.current) {
      gsap.fromTo(
        stepContainerRef.current.children,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 0.5, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, { dependencies: [currentStep, isComplete], scope: containerRef });

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsComplete(true);
      /*
      confetti({
        particleCount: 150,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#00d2ff', '#3a7bd5', '#00f2fe', '#F27D26']
      });
      */
    }
  };

  const handleInputChange = (val: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: val });
  };

  const currentQ = questions[currentStep];

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-5xl mx-auto text-white">
      <div className="text-center mb-16">
        <div className="survey-badge inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-white/60 text-xs font-bold uppercase tracking-widest mb-4">
          <HelpCircle size={14} />
          Tu Turno: Autodiagnóstico
        </div>
        <h2 className="survey-title text-4xl md:text-6xl font-display font-bold">
          ¿Cómo vives la <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00d2ff] via-[#00f2fe] to-[#4facfe]">Multimodalidad</span>?
        </h2>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 relative overflow-hidden min-h-[500px] flex flex-col">
        <div ref={stepContainerRef} className="flex-grow flex flex-col">
          {!isComplete ? (
            <>
              <div className="flex items-center gap-4 mb-8">
                <div className={cn("p-4 rounded-2xl", currentQ.bg, currentQ.color)}>
                  <currentQ.icon size={32} />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] opacity-40">
                    Paso {currentStep + 1} de {questions.length}
                  </span>
                  <h3 className="text-xl font-display font-bold">{currentQ.title}</h3>
                </div>
              </div>

              <h4 className="text-2xl md:text-3xl font-display font-medium mb-8 leading-tight">
                {currentQ.question}
              </h4>

              <textarea
                value={answers[currentQ.id] || ''}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={currentQ.placeholder}
                className="w-full flex-grow bg-white/5 border border-white/10 rounded-2xl p-6 text-lg focus:outline-none focus:border-[#00d2ff80] transition-colors resize-none placeholder:text-white/20"
              />

              <div className="mt-8 flex justify-between items-center">
                <div className="flex gap-2">
                  {questions.map((_, i) => (
                    <div 
                      key={i}
                      className={cn(
                        "h-1 rounded-full transition-all duration-500",
                        i === currentStep ? "w-8 bg-[#00d2ff]" : i < currentStep ? "w-4 bg-[#00d2ff66]" : "w-2 bg-white/10"
                      )}
                    />
                  ))}
                </div>
                <button
                  onClick={handleNext}
                  disabled={!answers[currentQ.id]}
                  className="px-8 py-4 bg-white text-black font-bold rounded-full disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#00d2ff] hover:text-white transition-all transform active:scale-95 flex items-center gap-2"
                >
                  {currentStep === questions.length - 1 ? 'Finalizar' : 'Siguiente'}
                  <Send size={18} />
                </button>
              </div>
            </>
          ) : (
            <div className="flex-grow flex flex-col items-center justify-center text-center py-12">
              <div className="w-24 h-24 bg-[#00d2ff1a] rounded-full flex items-center justify-center text-[#00d2ff] mb-8">
                <Sparkles size={48} />
              </div>
              <h3 className="text-4xl font-display font-bold mb-4">¡Diagnóstico Completado!</h3>
              <p className="text-white/60 max-w-md mb-12">
                Has reflexionado sobre los mismos ejes que los 23 docentes del estudio. Tus respuestas ahora forman parte de tu propia "Odisea Híbrida".
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <button 
                  onClick={() => { setIsComplete(false); setCurrentStep(0); setAnswers({}); }}
                  className="px-8 py-4 border border-white/10 rounded-full font-bold hover:bg-white/5 transition-colors"
                >
                  Reiniciar
                </button>
                <button 
                  onClick={() => {
                    // 1. Generate text
                    let reportText = "Reporte de Diagnóstico Multimodal\n\n";
                    questions.forEach((q) => {
                      reportText += `--- ${q.title} ---\n`;
                      reportText += `P: ${q.question}\n`;
                      reportText += `R: ${answers[q.id] || "Sin respuesta"}\n\n`;
                    });
                    
                    // 2. Create Blob and Download
                    const element = document.createElement("a");
                    const file = new Blob([reportText], { type: "text/plain" });
                    element.href = URL.createObjectURL(file);
                    element.download = "diagnostico-multimodal.txt";
                    document.body.appendChild(element);
                    element.click();
                    document.body.removeChild(element);
                  }}
                  className="px-8 py-4 bg-[#00d2ff] text-white rounded-full font-bold hover:shadow-[0_0_30px_rgba(0,210,255,0.3)] transition-all"
                >
                  Descargar Reporte
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
