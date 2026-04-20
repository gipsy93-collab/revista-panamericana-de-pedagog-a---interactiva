import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const nodes = [
  {
    id: 'core',
    title: 'TIC Y VEJEZ ACTIVA',
    x: 50,
    y: 50,
    color: 'var(--color-pop-yellow)',
    context: 'El núcleo de la investigación de Hernández-Silvera (2025). No es un aprendizaje técnico, es un proceso de reinvención identitaria en Buenos Aires. Pasar del "analógico excluido" al "digital conectado" cambia el estatus de la persona dentro de su propia familia.'
  },
  {
    id: 'relational',
    title: 'DIMENSIÓN DE RELACIÓN',
    x: 80,
    y: 30,
    color: 'var(--color-pop-pink)',
    context: 'WhatsApp como "el puente emocional". El móvil no es un gadget, es un mediador de afecto. El estudio revela que los fines de semana se transforman cuando el adulto sabe que está a un "click" de su red, combatiendo el sentimiento de soledad (Boredom).'
  },
  {
    id: 'autonomy',
    title: 'AUTO-GESTIÓN',
    x: 80,
    y: 70,
    color: 'var(--color-pop-teal)',
    context: 'La lógica de "No ser una carga". El aprendizaje permite resolver trámites bancarios y médicos (home-banking) sin depender de terceros, impactando directamente en la autoestima y la reserva cognitiva protectora contra el deterioro.'
  },
  {
    id: 'barriers',
    title: 'BARRERAS INVISIBLES',
    x: 20,
    y: 70,
    color: '#BDBDBD',
    context: 'Más allá del costo, existe el "Miedo Pedagógico". Los adultos mayores prefieren el taller de jubilados antes que a sus familiares debido a la paciencia y lenguaje compartido entre pares. El miedo a "romper algo" es la principal barrera emocional detectada.'
  },
  {
    id: 'motivation',
    title: 'MOTIVACIÓN SENIOR',
    x: 20,
    y: 30,
    color: 'var(--color-pop-blue)',
    textColor: 'white',
    context: 'El motor del aprendizaje es la utilidad inmediata. No aprenden por curiosidad técnica, sino por necesidades concretas y el deseo de seguir participando en la sociedad digital contemporánea.'
  }
];

const MindMap3198: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const activeData = nodes.find(n => n.id === activeNode);

  return (
    <section className="section-padding bg-pop-cream relative overflow-hidden min-h-[800px] flex flex-col items-center">
      <div className="absolute top-10 left-10 z-10">
        <h2 className="zine-heading text-4xl md:text-6xl border-b-8 border-black pb-2">
          Mapa Mental <span className="text-stroke-brutal">Sistémico</span>
        </h2>
        <p className="font-accent mt-4 text-xl bg-black text-white px-4 py-1 rotate-[-1deg] inline-block">
          Haz clic en los nodos para explorar el contexto profundo
        </p>
      </div>

      <div className="relative w-full max-w-5xl aspect-video mt-20 md:mt-0">
        {/* SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100">
          <motion.path
            d="M 50,50 L 80,30 M 50,50 L 80,70 M 50,50 L 20,70 M 50,50 L 20,30"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            className="dashed-path"
          />
        </svg>

        {/* Nodes */}
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
              height: node.id === 'core' ? '180px' : 'auto'
            }}
            whileHover={{ scale: 1.1, rotate: (Math.random() * 6 - 3) }}
            whileTap={{ scale: 0.95 }}
          >
            <span className={`font-display text-sm md:base ${node.id === 'core' ? 'text-lg md:text-xl' : ''}`}>
              {node.title}
            </span>
          </motion.button>
        ))}

        {/* Dense Context Overlay */}
        <AnimatePresence>
          {activeNode && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              className="absolute right-0 top-0 bottom-0 w-full md:w-80 bg-white border-l-8 border-black p-8 z-30 shadow-[-20px_0_0_rgba(0,0,0,0.1)] overflow-y-auto"
            >
              <button 
                onClick={() => setActiveNode(null)}
                className="btn-brutal px-3 py-1 bg-zine-red text-white mb-6"
              >
                CERRAR [X]
              </button>
              
              <h3 className="font-display text-2xl uppercase mb-4 leading-none" style={{ color: activeData?.color === 'white' ? 'black' : activeData?.color }}>
                {activeData?.title}
              </h3>
              
              <div className="font-sans text-lg leading-relaxed border-t-4 border-black pt-4">
                {activeData?.context}
              </div>

              <div className="mt-8 p-4 bg-pop-yellow border-4 border-black font-accent italic">
                {activeNode === 'core' ? '"El aprendizaje no tiene edad, tiene tecnología"' : '"Diseño centrado en el respeto pedagógico"'}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Decorative Stickers */}
      <div className="absolute bottom-10 right-20 sticker p-2 bg-pop-pink rotate-12 rotate-[-5deg] z-10 hidden md:block">
        <span className="font-mono text-xs font-bold">ESTUDIO: BUENOS AIRES 2025</span>
      </div>
      <div className="absolute bottom-20 left-10 sticker p-2 bg-pop-blue text-white rotate-[-8deg] z-10 hidden md:block">
        <span className="font-mono text-xs font-bold">DOI: 10.21155/rpp.3198</span>
      </div>
    </section>
  );
};

export default MindMap3198;
