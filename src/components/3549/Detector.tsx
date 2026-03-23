import { useState } from "react";
import { motion } from "motion/react";

const terms = [
  { id: '1a', text: "Pausas Activas", match: "1b" },
  { id: '2a', text: "Enfoque Holístico", match: "2b" },
  { id: '3a', text: "Proyectos Sociocomunitarios", match: "3b" },
  { id: '4a', text: "Libros Sin Recetas", match: "4b" },
];

const authors = [
  { id: '1b', text: "Rousseau", color: "text-rose-500" },
  { id: '2b', text: "Pestalozzi", color: "text-emerald-500" },
  { id: '3b', text: "Dewey", color: "text-blue-600" },
  { id: '4b', text: "Freire", color: "text-amber-500" },
];

export default function Detector() {
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [selectedAuthor, setSelectedAuthor] = useState<string | null>(null);
  const [solved, setSolved] = useState<string[]>([]);
  const [error, setError] = useState(false);

  const handleTermClick = (id: string) => { if(!solved.includes(id)) setSelectedTerm(id); };
  const handleAuthorClick = (id: string) => {
    if(!solved.includes(id) && selectedTerm) {
      setSelectedAuthor(id);
      const termMatch = terms.find(t => t.id === selectedTerm)?.match;
      if (termMatch === id) {
        setSolved([...solved, selectedTerm, id]);
        setSelectedTerm(null);
        setSelectedAuthor(null);
      } else {
        setError(true);
        setTimeout(() => { setError(false); setSelectedTerm(null); setSelectedAuthor(null); }, 800);
      }
    }
  };

  return (
    <section className="py-32 px-6 bg-[#0f3896] text-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl font-pop mb-6 text-center text-[#fccb06]">DETECTOR DE GENEALOGÍAS</h2>
        <p className="font-serif text-2xl mb-16 opacity-90 text-center">Enlaza el término ofical de la SEP con el pedagogo original que lo conceptualizó.</p>
        
        <div className="flex w-full flex-col md:flex-row gap-8 justify-between relative">
          {/* Terms Column */}
          <div className="flex flex-col gap-6 w-full max-w-[400px]">
            <h3 className="font-pop text-2xl text-center mb-4 text-white/40">LENGUAJE NEM</h3>
            {terms.map(t => (
               <motion.button
                 key={t.id}
                 whileHover={{ scale: solved.includes(t.id) ? 1 : 1.05 }}
                 onClick={() => handleTermClick(t.id)}
                 className={`sticker w-full p-4 font-bold text-xl uppercase ${solved.includes(t.id) ? 'bg-emerald-500 text-white opacity-50' : selectedTerm === t.id ? 'bg-[#fccb06] text-black' : 'bg-white text-black'}`}
               >
                 {t.text}
               </motion.button>
            ))}
          </div>

          <div className="hidden md:flex flex-col justify-center items-center">
             <div className="w-1 h-full bg-white/20"></div>
          </div>

          {/* Authors Column */}
          <div className="flex flex-col gap-6 w-full max-w-[400px]">
            <h3 className="font-pop text-2xl text-center mb-4 text-white/40">AUTOR ORIGINAL</h3>
            {authors.map(a => (
               <motion.button
                 key={a.id}
                 whileHover={{ scale: solved.includes(a.id) ? 1 : 1.05 }}
                 onClick={() => handleAuthorClick(a.id)}
                 className={`sticker w-full p-4 font-bold text-3xl font-pop ${a.color} ${solved.includes(a.id) ? 'bg-emerald-500 text-white opacity-50' : selectedAuthor === a.id ? (error ? 'bg-red-500 text-white' : 'bg-[#fccb06] text-black') : 'bg-white'}`}
               >
                 {a.text}
               </motion.button>
            ))}
          </div>
        </div>

        {solved.length === 8 && (
          <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="mt-16 sticker px-12 py-8 bg-[#fccb06] text-black text-center">
            <h3 className="font-pop text-4xl">¡GENEALOGÍA RESTAURADA!</h3>
            <p className="font-bold text-xl mt-4">Has expuesto el reciclaje histórico con éxito.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
