import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, AlertTriangle, Clock, BookOpen, Target, Users } from 'lucide-react';

const CONCLUSIONES = [
  {
    id: 1,
    titulo: "La NEM no inventa, reorganiza",
    descripcion: "Los principios fundamentales de la Nueva Escuela Mexicana —aprendizaje activo, formación integral, pedagogía crítica— fueron propuestos por pensadores entre 1712 y 1952. La reforma actualiza estas ideas, pero no las crea.",
    icon: BookOpen,
    color: "#0f3896",
    autor: "Tesis central del artículo"
  },
  {
    id: 2,
    titulo: "La paradoja de la innovación",
    descripcion: "¿Cómo puede ser 'nueva' una escuela basada en ideas de hace 300 años? La NEM enfrenta el desafío de implementar principios que funcionan desde hace siglos, pero que nunca se han aplicado sistemáticamente en México.",
    icon: AlertTriangle,
    color: "#fccb06",
    autor: "Fricción pedagógica 1"
  },
  {
    id: 3,
    titulo: "El abismo del 'libro sin recetas'",
    descripcion: "Freire escribía desde la práctica con comunidades populares; la SEP escribe desde la burocracia federal. La autonomía docente propuesta por la NEM debe contrastarse con los recursos reales disponibles para los maestros.",
    icon: Target,
    color: "#e81e61",
    autor: "Fricción pedagógica 2"
  },
  {
    id: 4,
    titulo: "El constructivismo vs. la estandarización",
    descripcion: "México tiene uno de los sistemas educativos más estandarizados de América Latina (PLANEA), mientras que Dewey y Freire proponían procesos locales no estandarizables. Esta tensión no está resuelta en la NEM.",
    icon: Users,
    color: "#5bc2a8",
    autor: "Fricción pedagógica 3"
  },
  {
    id: 5,
    titulo: "Deuda histórica de 23 años",
    descripcion: "La NEM se proyecta hasta 2042. La historia mexicana sugiere que las reformas educativas duran exactamente lo que dura cada administración presidencial. La continuidad es el mayor desafío.",
    icon: Clock,
    color: "#0f3896",
    autor: "Análisis de implementación"
  },
  {
    id: 6,
    titulo: "La pregunta que duele",
    descripcion: "Si estas ideas funcionan desde hace siglos... ¿por qué la educación mexicana sigue igual? La innovación real no está en la palabra, sino en la capacidad de resistir la domesticación burocrática del aula.",
    icon: Lightbulb,
    color: "#fccb06",
    autor: "Reflexión final"
  }
];

export default function ConclusionsSection() {
  return (
    <section className="py-32 px-6 bg-[#0f3896] border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#fccb06] text-black px-6 py-2 font-pop text-xl uppercase mb-6">
            Reflexiones Finales
          </span>
          <h2 className="text-6xl md:text-8xl font-pop uppercase text-white leading-none mb-6">
            Conclusiones
          </h2>
          <p className="text-2xl font-serif italic text-white/60 max-w-3xl mx-auto">
            Las fricciones pedagógicas que el artículo identifica y que deben 
            considerarse para una implementación efectiva de la NEM
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CONCLUSIONES.map((conclusion, index) => {
            const Icon = conclusion.icon;
            return (
              <motion.div
                key={conclusion.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] hover:translate-y-[-4px] transition-all"
                style={{ borderTopColor: conclusion.color, borderTopWidth: '8px' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-12 h-12 flex items-center justify-center border-2 border-black"
                    style={{ backgroundColor: conclusion.color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="font-pop text-4xl font-bold opacity-20">
                    {String(conclusion.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-pop uppercase text-black mb-3 leading-tight">
                  {conclusion.titulo}
                </h3>

                <p className="text-black/70 text-sm leading-relaxed mb-4">
                  {conclusion.descripcion}
                </p>

                <div 
                  className="inline-block px-3 py-1 text-xs font-pop uppercase"
                  style={{ backgroundColor: `${conclusion.color}20`, color: conclusion.color }}
                >
                  {conclusion.autor}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cita Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-[#fccb06] border-4 border-black p-12 shadow-[12px_12px_0_#000] inline-block max-w-4xl">
            <h3 className="text-3xl md:text-5xl font-pop uppercase text-black mb-6">
              La Pregunta que Duele
            </h3>
            <p className="text-2xl font-serif italic text-black leading-relaxed">
              "Si estas ideas funcionan desde hace siglos... 
              <strong>¿por qué la educación mexicana sigue igual?</strong>"
            </p>
            <div className="mt-8 pt-8 border-t-2 border-black/20">
              <p className="font-pop text-black/60">
                La innovación real no está en la palabra, 
                sino en la capacidad de resistir la domesticación burocrática del aula.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
