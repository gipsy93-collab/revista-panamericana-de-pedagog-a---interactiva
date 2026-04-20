import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sprout, Droplets, Users, RotateCcw, ArrowRight, ShieldAlert, CheckCircle2, Leaf } from 'lucide-react';
import { BrutalCard, BrutalSticker } from '../BrutalistLib';

interface Scene {
  text: string;
  choices?: { 
    text: string; 
    next: string; 
    effects: { soil: number; water: number; community: number } 
  }[];
  end?: boolean;
  profile?: string;
  reflection?: string;
}

const scenes: Record<string, Scene> = {
  inicio: {
    text: "Heredas una parcela en Manabí. El suelo está agotado y la temporada de lluvias se retrasa. ¿Qué haces primero?",
    choices: [
      { text: "Aplicar fertilizante químico rápido", next: "quimico", effects: { soil: -2, water: -1, community: 0 } },
      { text: "Sembrar abono verde y esperar", next: "abono", effects: { soil: 3, water: 1, community: 1 } },
      { text: "Consultar a vecinos y técnicos", next: "consulta", effects: { soil: 1, water: 0, community: 3 } }
    ]
  },
  quimico: {
    text: "La cosecha inicial es buena, pero tras 2 meses el suelo se compacta y el agua de riego se estanca. Los vecinos critican el uso de químicos.",
    choices: [
      { text: "Continuar con el mismo método", next: "final_agotado", effects: { soil: -3, water: -2, community: -1 } },
      { text: "Rotar con cultivos de cobertura", next: "final_transicion", effects: { soil: 2, water: 1, community: 1 } }
    ]
  },
  abono: {
    text: "Tras 3 semanas, el suelo mejora su textura. Un vecino te pide consejo para su parcela por el éxito que ve.",
    choices: [
      { text: "Organizar una jornada comunitaria", next: "final_sostenible", effects: { soil: 1, water: 0, community: 3 } },
      { text: "Enfocarte solo en tu parcela", next: "final_solo", effects: { soil: 1, water: 1, community: 0 } }
    ]
  },
  consulta: {
    text: "El grupo decide implementar barreras vivas y recolección de agua lluvia. La comunidad se organiza y comparte herramientas.",
    choices: [
      { text: "Documentar el proceso técnico", next: "final_sostenible", effects: { soil: 2, water: 2, community: 2 } }
    ]
  },
  final_agotado: { 
    end: true,
    profile: "PRODUCCIÓN CORTOPLACISTA",
    text: "📉 El suelo perdió su vida y el agua escasea. La rentabilidad inmediata hipotecó el futuro de la parcela.",
    reflection: "¿Qué práctica alternativa hubiera evitado el colapso sistemático del ecosistema?"
  },
  final_transicion: { 
    end: true,
    profile: "TRANSICIÓN CONSCIENTE",
    text: "🌿 Reconoces el error y ajustas. La sostenibilidad no es un destino, es un proceso de rectificación constante.",
    reflection: "¿Cómo escalar esta mejora de tu parcela individual a una política de nivel comunitario?"
  },
  final_sostenible: { 
    end: true,
    profile: "AGROECOLOGÍA COMUNITARIA",
    text: "✅ ¡ÉXITO! Suelo, agua y vínculos sociales se fortalecen. Has creado un sistema resiliente al cambio climático.",
    reflection: "¿Qué conocimiento técnico aplicarías el próximo año para mantener este equilibrio dinámico?"
  },
  final_solo: { 
    end: true,
    profile: "PRODUCTOR INDIVIDUAL",
    text: "🌾 Tu parcela avanza, pero el contexto rural es frágil sin cooperación. Eres una isla de éxito en un mar de riesgo.",
    reflection: "¿Qué ganaría tu familia y tu producción si decidieras integrar a otros productores locales?"
  }
};

export const SimuladorParcela3214 = () => {
  const [stats, setStats] = useState({ soil: 5, water: 5, community: 5 });
  const [currentSceneId, setCurrentSceneId] = useState('inicio');
  const [history, setHistory] = useState<string[]>([]);

  const currentScene = scenes[currentSceneId];

  const handleChoice = (choice: any) => {
    setStats(prev => ({
      soil: Math.max(0, Math.min(10, prev.soil + choice.effects.soil)),
      water: Math.max(0, Math.min(10, prev.water + choice.effects.water)),
      community: Math.max(0, Math.min(10, prev.community + choice.effects.community)),
    }));
    setHistory([...history, currentSceneId]);
    setCurrentSceneId(choice.next);
  };

  const reset = () => {
    setStats({ soil: 5, water: 5, community: 5 });
    setCurrentSceneId('inicio');
    setHistory([]);
  };

  return (
    <div className="max-w-4xl mx-auto my-20">
      <BrutalCard color="bg-white" className="overflow-hidden border-[12px] shadow-[20px_20px_0_0_#059669]">
        {/* STATS HEADER */}
        <div className="flex border-b-[8px] border-black -mx-8 -mt-8 mb-8 overflow-hidden bg-zinc-900 group">
          <div className="flex-1 p-6 border-r-4 border-black text-center group-hover:bg-emerald-600 transition-colors">
            <Sprout className="mx-auto mb-2 text-emerald-400 group-hover:text-white" size={24} />
            <div className="font-display text-2xl text-white font-black leading-none">{stats.soil}<span className="text-[10px] opacity-40 ml-1">/10</span></div>
            <div className="font-mono text-[9px] uppercase font-bold text-white/40 tracking-widest mt-1">Suelo</div>
          </div>
          <div className="flex-1 p-6 border-r-4 border-black text-center group-hover:bg-blue-600 transition-colors">
            <Droplets className="mx-auto mb-2 text-blue-400 group-hover:text-white" size={24} />
            <div className="font-display text-2xl text-white font-black leading-none">{stats.water}<span className="text-[10px] opacity-40 ml-1">/10</span></div>
            <div className="font-mono text-[9px] uppercase font-bold text-white/40 tracking-widest mt-1">Agua</div>
          </div>
          <div className="flex-1 p-6 text-center group-hover:bg-yellow-500 transition-colors">
            <Users className="mx-auto mb-2 text-yellow-400 group-hover:text-white" size={24} />
            <div className="font-display text-2xl text-white font-black leading-none">{stats.community}<span className="text-[10px] opacity-40 ml-1">/10</span></div>
            <div className="font-mono text-[9px] uppercase font-bold text-white/40 tracking-widest mt-1">Comunidad</div>
          </div>
        </div>

        <div className="py-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSceneId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="min-h-[300px] flex flex-col justify-center"
            >
              {currentScene.end ? (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <BrutalSticker text={currentScene.profile || "RESULTADO"} color="bg-emerald-600" className="text-white !rotate-0 mb-4" />
                  <p className="text-3xl md:text-4xl font-serif italic text-black leading-tight">
                    {currentScene.text}
                  </p>
                  <div className="bg-emerald-50 border-4 border-black p-8 rotate-1">
                     <h5 className="font-display text-xl font-black uppercase italic mb-4 flex items-center gap-2">
                       <ShieldAlert className="text-emerald-600" /> Reflexión
                     </h5>
                     <p className="text-lg font-bold text-black/70 italic">"{currentScene.reflection}"</p>
                  </div>
                  <button 
                    onClick={reset}
                    className="group bg-black text-white px-10 py-6 border-4 border-black font-display text-xl uppercase font-black italic flex items-center justify-center gap-4 hover:bg-emerald-600 transition-colors shadow-[8px_8px_0_0_#064e3b]"
                  >
                    <RotateCcw className="group-hover:rotate-180 transition-transform duration-500" /> Reiniciar Simulación
                  </button>
                </div>
              ) : (
                <div className="space-y-12">
                   <div className="relative">
                      <div className="absolute -top-12 left-0 font-mono text-[80px] font-black text-black/5 leading-none select-none pointer-events-none uppercase tracking-tighter italic">SCENE_{currentSceneId.toUpperCase()}</div>
                      <p className="text-3xl md:text-5xl font-serif italic text-black leading-tight relative z-10">
                        {currentScene.text}
                      </p>
                   </div>
                   <div className="grid gap-4">
                      {currentScene.choices?.map((choice, i) => (
                        <button
                          key={i}
                          onClick={() => handleChoice(choice)}
                          className="group text-left bg-white p-8 border-4 border-black shadow-[6px_6px_0_0_#000] hover:bg-emerald-50 hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#059669] transition-all flex items-center justify-between"
                        >
                           <span className="font-display text-xl md:text-2xl font-black uppercase italic leading-none">{choice.text}</span>
                           <ArrowRight className="group-hover:translate-x-4 transition-transform text-emerald-600" size={32} />
                        </button>
                      ))}
                   </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* FOOTER INFO */}
        <div className="flex justify-between items-center border-t-4 border-black pt-6 -mx-8 -mb-8 p-8 bg-zinc-50">
           <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white border-2 border-black">
                <Leaf size={16} />
              </div>
              <span className="font-mono text-[9px] font-black uppercase tracking-widest opacity-40">Simulador Estudiante 4.0 // Manabí 2025</span>
           </div>
           <div className="flex gap-2">
              <span className="w-3 h-3 bg-black rounded-full" />
              <span className="w-3 h-3 bg-emerald-600 rounded-full" />
              <span className="w-3 h-3 bg-yellow-400 rounded-full" />
           </div>
        </div>
      </BrutalCard>
    </div>
  );
};
