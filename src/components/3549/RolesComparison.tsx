import React from 'react';
import { motion } from 'motion/react';
import { User, GraduationCap, ArrowRight } from 'lucide-react';

const ROLES_DATA = {
  tradicional: {
    docente: [
      "Transmisor de conocimientos",
      "Autoridad absoluta en el aula", 
      "Evaluador mediante exámenes estandarizados",
      "Planeador de todas las actividades",
      "Detentor del poder disciplinario"
    ],
    estudiante: [
      "Receptor pasivo de información",
      "Oyente obligado y silencioso",
      "Objeto de evaluación",
      "Ejecutor de instrucciones",
      "Sujeto de control disciplinario"
    ]
  },
  nem: {
    docente: [
      "Facilitador del aprendizaje",
      "Guía y acompañante del proceso",
      "Evaluador formativo continuo",
      "Co-diseñador de proyectos",
      "Promotor de la autonomía"
    ],
    estudiante: [
      "Constructor activo de saberes",
      "Participante crítico y colaborativo",
      "Sujeto de su propio aprendizaje",
      "Protagonista de proyectos comunitarios",
      "Ciudadano en formación crítica"
    ]
  }
};

const FUENTES_TEORICAS = [
  { rol: "Facilitador", fuente: "Freire - Pedagogía dialógica" },
  { rol: "Guía", fuente: "Rousseau - Autonomía del niño" },
  { rol: "Co-diseñador", fuente: "Dewey - Aprender haciendo" },
  { rol: "Constructor activo", fuente: "Pestalozzi - Cabeza, corazón y mano" }
];

export default function RolesComparison() {
  return (
    <section className="py-32 px-6 bg-white border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#e81e61] text-white px-6 py-2 font-pop text-xl uppercase mb-6">
            Transformación de Roles
          </span>
          <h2 className="text-6xl md:text-8xl font-pop uppercase text-black leading-none mb-6">
            Del <span className="text-[#0f3896]">Saber</span> al <span className="text-[#5bc2a8]">Ser</span>
          </h2>
          <p className="text-2xl font-serif italic text-black/60 max-w-3xl mx-auto">
            La NEM propone una reconfiguración radical de las identidades 
            docente y estudiantil, alejándose del modelo bancario freireano
          </p>
        </motion.div>

        {/* Tabla Comparativa */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Columna: Modelo Tradicional */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#f5ece0] border-4 border-black p-8"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-black/20">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <GraduationCap size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-pop uppercase text-black">Modelo Tradicional</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-pop text-lg uppercase text-black/60 mb-3">Docente</h4>
                <ul className="space-y-2">
                  {ROLES_DATA.tradicional.docente.map((rol, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black">
                      <span className="w-2 h-2 bg-[#e81e61] mt-2 shrink-0" />
                      {rol}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-black/10 pt-6">
                <h4 className="font-pop text-lg uppercase text-black/60 mb-3">Estudiante</h4>
                <ul className="space-y-2">
                  {ROLES_DATA.tradicional.estudiante.map((rol, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-black">
                      <span className="w-2 h-2 bg-[#0f3896] mt-2 shrink-0" />
                      {rol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Columna: Modelo NEM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#5bc2a8] border-4 border-black p-8 shadow-[12px_12px_0_#000]"
          >
            <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-black/20">
              <div className="w-12 h-12 bg-black flex items-center justify-center">
                <User size={24} className="text-white" />
              </div>
              <h3 className="text-3xl font-pop uppercase text-white">Modelo NEM</h3>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="font-pop text-lg uppercase text-white/80 mb-3">Docente</h4>
                <ul className="space-y-2">
                  {ROLES_DATA.nem.docente.map((rol, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white">
                      <span className="w-2 h-2 bg-[#fccb06] mt-2 shrink-0" />
                      {rol}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t-2 border-white/20 pt-6">
                <h4 className="font-pop text-lg uppercase text-white/80 mb-3">Estudiante</h4>
                <ul className="space-y-2">
                  {ROLES_DATA.nem.estudiante.map((rol, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-white">
                      <span className="w-2 h-2 bg-white mt-2 shrink-0" />
                      {rol}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fuentes Teóricas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#fccb06] border-4 border-black p-8"
        >
          <h4 className="text-2xl font-pop uppercase text-black mb-6 text-center">
            Fundamentación Teórica de los Nuevos Roles
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {FUENTES_TEORICAS.map((item, idx) => (
              <div key={idx} className="bg-white border-2 border-black p-4 text-center">
                <p className="font-bold text-black mb-1">{item.rol}</p>
                <p className="text-xs text-black/60 font-serif italic">{item.fuente}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cita Freire */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <ArrowRight size={24} className="text-[#e81e61]" />
            <span className="font-pop text-lg uppercase text-black/60">La crítica fundamental</span>
          </div>
          <blockquote className="text-3xl font-serif italic text-black leading-relaxed">
            "La educación bancaria... el 'saber', el 'conocimiento', es una donación 
            de aquellos que se juzgan sabios a los que juzgan ignorantes"
          </blockquote>
          <p className="mt-4 font-pop text-[#e81e61] font-bold">— Paulo Freire</p>
        </motion.div>
      </div>
    </section>
  );
}
