import { useState } from "react";
import { motion } from "motion/react";

const options = [
  { id: 'autonomia', label: "Autonomía del Estudiante", author: "Rousseau", color: "bg-[#e81e61]" },
  { id: 'proyectos', label: "Proyectos Comunitarios", author: "Dewey", color: "bg-[#0f3896]" },
  { id: 'formativa', label: "Evaluación Crítica", author: "Freire", color: "bg-[#fccb06]" },
  { id: 'holistica', label: "Formación Integral", author: "Pestalozzi", color: "bg-[#5bc2a8]" },
  { id: 'tecnologia', label: "Exámenes Estandarizados", author: "Burocracia", color: "bg-white" }
];

export default function ModelBuilder() {
  const [selected, setSelected] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const toggleOption = (id: string) => {
    if (selected.includes(id)) { setSelected(selected.filter(i => i !== id)); } 
    else if (selected.length < 3) { setSelected([...selected, id]); }
  };

  const calculateResult = () => {
    const authors = selected.map(id => options.find(o => o.id === id)?.author);
    const unique = [...new Set(authors)];
    if(unique.includes('Burocracia')) {
       setResult("Has roto el modelo combinando pedagogía libertaria con burocracia estandarizada. Este es el problema actual de la NEM.");
    } else {
       setResult(`Tu ADN pedagógico es una mezcla pura y radical de: ${unique.join(', ')}.`);
    }
  };

  const reset = () => {
    setSelected([]);
    setResult(null);
  };

  return (
    <section className="relative py-32 px-6 bg-[#0f3896] text-white overflow-hidden z-20">
      <div className="max-w-6xl mx-auto flex flex-col items-center z-10 relative">
        <h2 className="text-6xl md:text-8xl font-pop mb-12 text-center text-[#fccb06] drop-shadow-[6px_6px_0_#000]" style={{WebkitTextStroke: '2px black'}}>
          ARMA TU MODELO
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 w-full">
          {options.map((opt, i) => (
            <motion.div 
              key={opt.id}
              whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 3 : -3 }}
              onClick={() => toggleOption(opt.id)}
              className={`sticker cursor-pointer p-8 flex items-center justify-center text-center font-pop text-3xl uppercase transition-colors
                ${selected.includes(opt.id) ? `${opt.color} text-black` : 'bg-black text-white'}`}
            >
              {opt.label}
            </motion.div>
          ))}
        </div>

        {selected.length === 3 && !result && (
          <button onClick={calculateResult} className="btn-brutal bg-[#fccb06] text-black text-5xl px-16 py-8 rounded-full mb-12 hover:bg-white hover:text-black">
            ¡PROCESAR GENOMA!
          </button>
        )}

        {result && (
           <motion.div initial={{ scale: 0, rotate: 10 }} animate={{ scale: 1, rotate: -2 }} className="sticker flex flex-col items-center px-12 py-12 bg-[#e81e61] text-white text-center max-w-4xl shadow-[15px_15px_0_#000]">
             <h3 className="font-pop text-5xl mb-6 text-[#fccb06]" style={{WebkitTextStroke: '2px black'}}>RESULTADO DEL ANÁLISIS</h3>
             <p className="font-bold text-3xl p-6 bg-white text-black border-4 border-black rounded-2xl mb-8">{result}</p>
             <button onClick={reset} className="btn-brutal bg-black text-white text-3xl px-8 py-4 rounded-full hover:bg-[#fccb06] hover:text-black">VOLVER A INTENTAR</button>
           </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-auto block" preserveAspectRatio="none"><path d="M0,0 C480,100 960,-50 1440,50 L1440,100 L0,100 Z" fill="#e81e61" /></svg>
      </div>
    </section>
  );
}
