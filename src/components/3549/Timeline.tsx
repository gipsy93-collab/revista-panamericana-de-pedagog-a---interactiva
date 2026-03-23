import { motion } from "motion/react";

const pedagogues = [
  { id: 1, year: 1762, name: "Rousseau", color: "bg-[#e81e61]", principle: "El Juego y la Autonomía", text: "Propuso que el niño debe ser el centro." },
  { id: 2, year: 1801, name: "Pestalozzi", color: "bg-[#5bc2a8]", principle: "Cabeza, Corazón y Mano", text: "Su enfoque integral es exactamente lo que la NEM llama 'Enfoque Holístico'." },
  { id: 3, year: 1897, name: "Dewey", color: "bg-[#0f3896]", principle: "Aprender Haciendo", text: "La escuela como vida. Hoy se reempaca como 'Proyectos Comunitarios'." },
  { id: 4, year: 1968, name: "Freire", color: "bg-[#fccb06]", principle: "Pedagogía Crítica", text: "Crítica a la educación bancaria. Base de los 'libros sin recetas'." }
];

export default function Timeline() {
  return (
    <section className="relative bg-[#f5ece0] pt-48 pb-64 px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden z-10">
      <div className="absolute z-0 text-center font-pop text-[90px] md:text-[200px] leading-none text-[#fccb06] opacity-40 pointer-events-none w-full flex flex-col pt-20" style={{ WebkitTextStroke: '4px white' }}>
        <span>LOS VERDADEROS</span>
        <span>ARQUITECTOS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-16 items-start z-10 w-full max-w-[1400px]">
        {pedagogues.map((p, idx) => (
           <motion.div 
            key={p.name}
            initial={{ rotate: idx % 2 === 0 ? -15 : 15, scale: 0.5, opacity: 0, y: 100 }}
            whileInView={{ rotate: idx % 2 === 0 ? -6 : 6, scale: 1, opacity: 1, y: idx % 2 === 0 ? 0 : 40 }}
            transition={{ type: "spring", bounce: 0.5, delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`sticker ${p.color} p-6 transform-gpu w-full flex flex-col relative`}
          >
            <div className="absolute -top-6 -right-6 bg-white text-black font-pop text-5xl p-4 rounded-full border-8 border-black shadow-[4px_4px_0_#000] rotate-12 z-20">
              {p.year}
            </div>
            <h3 className="font-pop text-5xl text-white mb-2" style={{WebkitTextStroke: '2px black'}}>{p.name}</h3>
            <p className="font-pop text-2xl uppercase bg-black text-white p-4 border-4 border-black inline-block shadow-[6px_6px_0_#fff] mt-2 mb-6 rotate-[-2deg]">{p.principle}</p>
            <p className="font-sans text-xl font-bold bg-white text-black p-4 border-4 border-black rounded-xl">{p.text}</p>
          </motion.div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full translate-y-[99%] z-20">
        <svg viewBox="0 0 1440 100" className="w-full h-auto block" preserveAspectRatio="none"><path d="M0,0 C480,100 960,-50 1440,50 L1440,100 L0,100 Z" fill="#0f3896" /></svg>
      </div>
    </section>
  );
}
