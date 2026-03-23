import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const nodes = [
  { id: 1, x: 15, y: 22, gradient: "from-[#ff00a0] to-[#ff7a00]", title: '1. METADATOS' },
  { id: 2, x: 80, y: 36, gradient: "from-[#00f0ff] to-[#0000ff]", title: '2. DATO CENTRAL' },
  { id: 3, x: 20, y: 50, gradient: "from-[#00ff87] to-[#60efff]", title: '3. PEDAGOGOS' },
  { id: 4, x: 80, y: 64, gradient: "from-[#ff0076] to-[#590fb7]", title: '4. PRINCIPIOS' },
  { id: 5, x: 15, y: 78, gradient: "from-[#fccb06] to-[#ff00a0]", title: '5. REFERENCIAS' },
  { id: 6, x: 80, y: 92, gradient: "from-[#0f3896] to-white", title: '6. IMPORTANCIA' },
];

const contentData: Record<number, React.ReactNode> = {
  1: (
    <>
      <h2 className="text-3xl font-bold bg-[#fccb06] inline-block px-4 py-2 border-4 border-black mb-6 uppercase">1. Metadatos</h2>
      <p className="text-xl bg-gray-100 p-4 border-l-8 border-black"><strong>Autores:</strong> Quintero-Macías y Bautista-Villalaz (2026)</p>
    </>
  ),
  2: (
    <>
      <h2 className="text-3xl font-bold bg-[#5bc2a8] text-white inline-block px-4 py-2 border-4 border-black mb-6 uppercase">2. El Dato Central</h2>
      <div className="bg-black text-white p-6 rounded-xl border-4 border-[#fccb06]">
        <h3 className="text-2xl text-[#fccb06] mb-2">La paradoja temporal</h3>
        <p className="mb-4">La Nueva Escuela Mexicana (2019) retoma principios de pedagogos que escribieron hace 250 años (Rousseau, 1712-1778).</p>
      </div>
    </>
  ),
  3: (
    <>
      <h2 className="text-3xl font-bold bg-[#e81e61] text-white inline-block px-4 py-2 border-4 border-black mb-6 uppercase">3. Pedagogos Analizados</h2>
      <table className="w-full text-left border-4 border-black border-collapse">
        <thead className="bg-black text-[#fccb06]">
          <tr><th className="p-3 border border-black">Autor</th><th className="p-3 border border-black">Aporte a NEM</th></tr>
        </thead>
        <tbody className="bg-white">
          <tr><td className="p-3 border border-black font-bold">Rousseau</td><td className="p-3 border border-black">Niño como centro, autonomía</td></tr>
          <tr><td className="p-3 border border-black font-bold text-emerald-500">Pestalozzi</td><td className="p-3 border border-black">Cabeza-corazón-mano (holístico)</td></tr>
          <tr><td className="p-3 border border-black font-bold text-blue-600">Dewey</td><td className="p-3 border border-black">Aprender haciendo, proyectos</td></tr>
          <tr><td className="p-3 border border-black font-bold text-amber-500">Freire</td><td className="p-3 border border-black">Pedagogía crítica, evaluación</td></tr>
        </tbody>
      </table>
    </>
  ),
  4: (
    <>
      <h2 className="text-3xl font-bold bg-[#0f3896] text-white inline-block px-4 py-2 border-4 border-black mb-6 uppercase">4. Principios NEM</h2>
      <ol className="list-decimal pl-8 space-y-2 text-lg">
        <li>Responsabilidad ciudadana</li>
        <li>Aprendizaje significativo</li>
        <li>Participación social y pensamiento crítico</li>
        <li>Enfoque holístico (Socioemocional)</li>
        <li>Resolución de problemas reales</li>
      </ol>
    </>
  ),
  5: (
    <>
      <h2 className="text-3xl font-bold bg-[#fccb06] inline-block px-4 py-2 border-4 border-black mb-6 uppercase">5. Referencias Normativas</h2>
      <ul className="list-disc pl-8 space-y-4 text-lg bg-gray-100 p-6 border-4 border-black border-dashed">
        <li>Ley General de Educación</li>
        <li>Plan y Programas de Estudio 2022 (SEP)</li>
        <li>"Un libro sin recetas para la maestra" (SEP, 2023)</li>
      </ul>
    </>
  ),
  6: (
    <>
      <h2 className="text-3xl font-bold bg-[#ff00a0] text-white inline-block px-4 py-2 border-4 border-black mb-6 uppercase">6. Implicaciones</h2>
      <p className="text-xl leading-relaxed border-l-8 border-[#5bc2a8] pl-6">
        El problema no es la falta de ideas, sino la incapacidad de implementarlas. ¿Puede una política masiva albergar la radicalidad de estas ideas o las domesticará inevitablemente?
      </p>
    </>
  ),
};

export default function SpaceMap() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <section className="relative w-full h-[200vh] bg-[#f5ece0] overflow-hidden border-b-[12px] border-black text-black font-mono z-10">
      
      <div className="absolute top-12 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none w-full px-6 text-black">
         <h2 className="text-5xl md:text-7xl font-pop uppercase text-[#0f3896] drop-shadow-[4px_4px_0_#fff]" style={{WebkitTextStroke: '2px white'}}>CARTOGRAFÍA ESTELAR</h2>
         <p className="bg-[#e81e61] text-white px-6 py-2 border-4 border-black inline-block mt-4 font-bold shadow-[4px_4px_0_#000] rotate-[-1deg] font-pop">
           Toca los eslabones para recopilar coordenadas teóricas
         </p>
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-50 select-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d={`M ${nodes.map(n => `${n.x} ${n.y}`).join(' L ')}`} 
              vectorEffect="non-scaling-stroke" 
              stroke="black" strokeWidth="6" strokeDasharray="10 10" fill="none"
              className="anim-dash" />
      </svg>

      {nodes.map(node => (
        <div key={node.id} 
             className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto z-10"
             style={{ left: `${node.x}%`, top: `${node.y}%` }}>
           
           <motion.div 
             whileHover={{ scale: 1.1, rotate: 5 }}
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 3 + (node.id % 2), repeat: Infinity, ease: "easeInOut" }}
             className={`w-28 h-28 md:w-40 md:h-40 rounded-full border-8 border-black bg-gradient-to-tr ${node.gradient} shadow-[8px_8px_0_#000] flex items-center justify-center cursor-pointer relative group`}
             onClick={() => setActiveNode(node.id)}
           >
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-white border-4 border-black rounded-full shadow-[4px_4px_0_#000] flex items-center justify-center font-bold text-3xl font-pop text-black group-hover:bg-[#fccb06] transition-colors">
                +
              </div>
              <span className="absolute -bottom-8 rounded font-mono font-bold text-sm bg-black text-white px-4 py-2 border-2 border-white whitespace-nowrap shadow-[4px_4px_0_#fff]">
                {node.title}
              </span>
           </motion.div>
        </div>
      ))}

      <AnimatePresence>
        {activeNode && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md pointer-events-auto"
            onClick={() => setActiveNode(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, y: 50 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="bg-white border-[8px] border-black shadow-[15px_15px_0_#000] p-8 md:p-12 w-full max-w-2xl max-h-[85vh] overflow-y-auto font-mono relative text-black"
            >
              <button 
                onClick={() => setActiveNode(null)} 
                className="absolute top-4 right-4 bg-[#e81e61] text-white font-pop text-2xl w-12 h-12 flex items-center justify-center rounded-full border-4 border-black shadow-[4px_4px_0_#000] hover:scale-105"
              >
                X
              </button>
              {contentData[activeNode]}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
