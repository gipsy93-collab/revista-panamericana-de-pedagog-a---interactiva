import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const nodes = [
  {
    id: 'core',
    title: 'PAISAJES DE APRENDIZAJE',
    x: 50,
    y: 50,
    color: '#FF3366',
    textColor: 'white',
    context: 'Arquitectura de contenidos diseñada por Saborío-Taylor (2025). Transforma el entorno virtual de posgrado en un "viaje" visual donde el estudiante recupera la agencia y la proactividad. No es adorno, es pedagogía exploratoria.'
  },
  {
    id: 'theory',
    title: 'BLOOM & ACTIVO',
    x: 20,
    y: 30,
    color: '#00CCFF',
    context: 'Fundamentado en la Taxonomía de Bloom para priorizar habilidades de orden superior (Crear, Analizar, Evaluar). Se basa en el Aprendizaje Activo: para que el paisaje se "revele", el estudiante debe interactuar.'
  },
  {
    id: 'design',
    title: 'DISEÑO DIALÓGICO',
    x: 80,
    y: 30,
    color: '#FFFF00',
    context: 'Metáfora de "Burbujas de Diálogo" y fragmentación en 12 micro-paisajes. El diseño evita la sobrecarga cognitiva y fomenta la reflexión social mediante el uso integrado de Genially y Padlet.'
  },
  {
    id: 'impact',
    title: 'EL DATO: +24%',
    x: 80,
    y: 70,
    color: '#00FF66',
    context: 'La participación activa constante en foros saltó de 33.3% a 57.1% tras la implementación. El 85.7% de los estudiantes calificó los recursos como "extremadamente útiles".'
  },
  {
    id: 'inclusion',
    title: 'INCLUSIÓN TDAH',
    x: 20,
    y: 70,
    color: '#FF9800',
    textColor: 'white',
    context: 'Hallazgo crítico: un estudiante con TDAH reportó que la estructura visual y fragmentada le permitió mantenerse organizado y al día con las tareas, superando su sensación previa de abrumamiento por el posgrado.'
  }
];

const MindMap3378: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const activeData = nodes.find(n => n.id === activeNode);

  return (
    <section className="section-padding bg-zinc-900 text-white relative overflow-hidden min-h-[800px] flex flex-col items-center">
      <div className="absolute top-10 left-10 z-10">
        <h2 className="zine-heading text-4xl md:text-6xl border-b-8 border-white pb-2 text-white">
          Mapa <span className="text-stroke-brutal text-pop-yellow">Multidimensional</span>
        </h2>
        <p className="font-accent mt-4 text-xl bg-pop-pink text-white px-4 py-1 rotate-1 inline-block border-2 border-white">
          Contexto denso / Rigor transmedia
        </p>
      </div>

      <div className="relative w-full max-w-5xl aspect-video mt-20 md:mt-0">
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <motion.path
            d="M 50,50 L 20,30 M 50,50 L 80,30 M 50,50 L 80,70 M 50,50 L 20,70"
            stroke="white"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            className="dashed-path opacity-50"
          />
        </svg>

        {nodes.map((node) => (
          <motion.button
            key={node.id}
            onClick={() => setActiveNode(node.id)}
            className={`absolute sticker flex items-center justify-center p-4 md:p-6 text-center z-20 transition-all cursor-pointer`}
            style={{ 
              left: `${node.x}%`, 
              top: `${node.y}%`, 
              backgroundColor: node.color,
              color: node.textColor || 'black',
              transform: 'translate(-50%, -50%)',
              width: node.id === 'core' ? '180px' : '150px',
              border: '4px solid white',
              boxShadow: '8px 8px 0px 0px rgba(255,255,255,1)'
            }}
            whileHover={{ scale: 1.1, rotate: (Math.random() * 6 - 3) }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`font-display text-sm md:base uppercase ${node.id === 'core' ? 'text-lg md:text-xl' : ''}`}>
              {node.title}
            </span>
          </motion.button>
        ))}

        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -50, y: -50 }}
              animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute left-1/2 top-1/2 bg-white text-black border-8 border-black p-10 z-50 w-[90%] md:w-[600px] shadow-[20px_20px_0px_rgba(0,0,0,1)]"
              style={{ transform: 'translate(-50%, -50%)' }}
            >
              <button 
                onClick={() => setActiveNode(null)}
                className="absolute top-4 right-4 btn-brutal px-3 py-1 bg-black text-white"
              >
                CERRAR
              </button>
              
              <div className="inline-block px-4 py-1 mb-6" style={{ backgroundColor: activeData?.color, color: activeData?.textColor || 'black', border: '2px solid black' }}>
                <span className="font-display text-xl uppercase tracking-widest">{activeData?.title}</span>
              </div>
              
              <p className="font-serif text-2xl leading-tight mb-8">
                {activeData?.context}
              </p>

              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white font-mono text-xs">
                  RPP
                </div>
                <div className="font-mono text-[10px] uppercase opacity-60">
                  Ref 3378 // Saborío-Taylor (2025) // Transmedia Lab
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 left-10 -translate-y-1/2 font-mono text-[150px] font-black opacity-5 pointer-events-none select-none">
        MAP
      </div>
    </section>
  );
};

export default MindMap3378;
