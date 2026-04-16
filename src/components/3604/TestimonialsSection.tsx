import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const TESTIMONIOS = [
  {
    id: 1,
    texto: "Aprender una nueva cosa, creo que soy muy auditiva, es algo que me emociona porque tal vez puede utilizarse en otras materias, escuchar más y aprender.",
    dimension: "Dimensión Afectiva",
    pagina: "p. 10"
  },
  {
    id: 2,
    texto: "Ahora que estoy leyendo un libro que me gusta, me siento contenta, alegre [...] esto del nuevo proyecto es muy interesante.",
    dimension: "Dimensión Afectiva",
    pagina: "p. 10"
  },
  {
    id: 3,
    texto: "Aprendí a reconocer algunos detalles del cine y veré el cine desde otras perspectivas.",
    dimension: "Dimensión Cognitiva",
    pagina: "p. 11"
  },
  {
    id: 4,
    texto: "Después de leerlo y analizarlo, fue fácil de identificar, respecto a la película, cómo era similar al libro [...] pudimos sacar los aspectos del libro y la película.",
    dimension: "Dimensión Cognitiva",
    pagina: "p. 9"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Voces de los Estudiantes
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Testimonios directos de los 30 participantes del CBQ Plantel Chetumal 1
          </p>
          <div className="mt-4 inline-block px-4 py-2 bg-amber-500/20 rounded-full">
            <span className="text-amber-300 text-sm">Periodo: Octubre 2020 - Enero 2021 (Virtual)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIOS.map((testimonio, index) => (
            <motion.div
              key={testimonio.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-amber-500/50 transition-colors"
            >
              <Quote className="absolute top-4 left-4 w-8 h-8 text-amber-500/30" />
              
              <div className="relative z-10">
                <p className="text-lg text-slate-200 italic mb-6 leading-relaxed">
                  "{testimonio.texto}"
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-amber-400">
                    {testimonio.dimension}
                  </span>
                  <span className="text-xs text-slate-500">
                    {testimonio.pagina}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contexto COVID-19 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-red-900/20 border border-red-500/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-bold text-red-300 mb-3">Contexto: Pandemia COVID-19</h3>
          <p className="text-slate-300 leading-relaxed">
            El estudio se realizó en condiciones de emergencia sanitaria, con modalidad virtual a través de 
            <span className="text-white font-medium"> Google Meet, Classroom y WhatsApp</span>. 
            Las condiciones tecnológicas eran heterogéneas: algunos estudiantes contaban con computadora e internet estable, 
            mientras otros dependían de teléfono móvil y datos limitados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
