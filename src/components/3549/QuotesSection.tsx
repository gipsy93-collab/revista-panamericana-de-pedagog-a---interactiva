import React from 'react';
import { motion } from 'motion/react';
import { Quote, BookOpen, Heart, Hand, Brain } from 'lucide-react';

const CITAS_TEXTUALES = [
  {
    id: 1,
    texto: "No expliquen nada que sea incapaz de entender... déjelo pensar solo, seguro que lo hará",
    autor: "Jean-Jacques Rousseau",
    obra: "Emilio (1762)",
    tema: "Autonomía del estudiante",
    color: "#e81e61",
    icon: Brain,
    conexionNEM: "Aprendizaje activo, pausas activas"
  },
  {
    id: 2,
    texto: "El fin último de la educación no es la perfección en las tareas de la escuela, sino la preparación para la vida",
    autor: "Johann Heinrich Pestalozzi",
    obra: "Pedagógica (1800)",
    tema: "Educación integral",
    color: "#5bc2a8",
    icon: Heart,
    conexionNEM: "Cabeza, corazón y mano; habilidades socioemocionales"
  },
  {
    id: 3,
    texto: "Aprender haciendo. La escuela debe ser vida, no preparación para ella",
    autor: "John Dewey",
    obra: "My Pedagogic Creed (1897)",
    tema: "Aprendizaje experiencial",
    color: "#0f3896",
    icon: Hand,
    conexionNEM: "Proyectos comunitarios, aprendizaje basado en proyectos"
  },
  {
    id: 4,
    texto: "Enseñar no es transferir conocimiento, sino crear las posibilidades para su construcción",
    autor: "Paulo Freire",
    obra: "Pedagogía del Oprimido (1968)",
    tema: "Pedagogía crítica",
    color: "#fccb06",
    icon: BookOpen,
    conexionNEM: "Pedagogía crítica, 'Un libro sin recetas'"
  }
];

export default function QuotesSection() {
  return (
    <section className="py-32 px-6 bg-[#f5ece0] border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-black text-white px-6 py-2 font-pop text-xl uppercase mb-6">
            Genealogía del Pensamiento
          </span>
          <h2 className="text-6xl md:text-8xl font-pop uppercase text-black leading-none mb-6">
            Voces que <span className="text-[#e81e61]">Resuenan</span>
          </h2>
          <p className="text-2xl font-serif italic text-black/60 max-w-2xl mx-auto">
            Las citas textuales que fundamentan la Nueva Escuela Mexicana, 
            extraídas directamente de los autores originales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {CITAS_TEXTUALES.map((cita, index) => {
            const Icon = cita.icon;
            return (
              <motion.div
                key={cita.id}
                initial={{ opacity: 0, y: 50, rotate: index % 2 === 0 ? -2 : 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: index % 2 === 0 ? -1 : 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, type: "spring" }}
                className="bg-white border-4 border-black p-8 shadow-[12px_12px_0_#000] hover:shadow-[16px_16px_0_#000] hover:translate-y-[-4px] transition-all"
                style={{ borderLeftColor: cita.color, borderLeftWidth: '8px' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div 
                    className="w-16 h-16 flex items-center justify-center border-4 border-black"
                    style={{ backgroundColor: cita.color }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <span 
                    className="font-pop text-6xl leading-none opacity-20"
                    style={{ color: cita.color }}
                  >
                    {String(cita.id).padStart(2, '0')}
                  </span>
                </div>

                <Quote size={32} className="text-black/20 mb-4" />
                
                <p className="text-2xl font-serif italic text-black leading-relaxed mb-6">
                  "{cita.texto}"
                </p>
                
                <div className="border-t-2 border-black/10 pt-4">
                  <p className="font-pop text-lg font-bold text-black uppercase">
                    {cita.autor}
                  </p>
                  <p className="text-sm text-black/60 font-serif italic">
                    {cita.obra}
                  </p>
                </div>

                <div 
                  className="mt-6 p-4 border-2 border-black"
                  style={{ backgroundColor: `${cita.color}20` }}
                >
                  <p className="text-xs font-pop uppercase tracking-wider text-black/60 mb-1">
                    Conexión con NEM
                  </p>
                  <p className="font-bold text-black">
                    → {cita.conexionNEM}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
