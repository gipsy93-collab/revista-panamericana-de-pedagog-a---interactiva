import React from 'react';
import { motion } from 'motion/react';
import { Search, MessageSquareX, FileText, Clock, Globe } from 'lucide-react';

const LIMITACIONES = [
  {
    id: 1,
    titulo: 'Falta de evidencia empírica',
    descripcion: 'El artículo se limita a la revisión documental sin presentar datos de campo sobre la implementación efectiva de la NEM.',
    icon: Search,
    color: '#e81e61'
  },
  {
    id: 2,
    titulo: 'Ausencia de voces críticas',
    descripcion: 'No se incluyen perspectivas de autores que cuestionen o problematicen la reforma educativa.',
    icon: MessageSquareX,
    color: '#fccb06'
  },
  {
    id: 3,
    titulo: 'Enfoque descriptivo',
    descripcion: 'Predomina la descripción sobre el análisis crítico de las políticas públicas.',
    icon: FileText,
    color: '#0f3896'
  },
  {
    id: 4,
    titulo: 'Brevedad en algunas secciones',
    descripcion: 'El apartado sobre tecnología podría profundizar más en las tensiones y desafíos de su implementación.',
    icon: Clock,
    color: '#5bc2a8'
  },
  {
    id: 5,
    titulo: 'Universalización de la NEM',
    descripcion: 'No se problematizan las diferencias regionales, culturales o socioeconómicas en la implementación del modelo.',
    icon: Globe,
    color: '#e81e61'
  }
];

export default function Limitaciones3549() {
  return (
    <section className="py-32 px-6 bg-[#f5ece0] border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-[#e81e61] text-white px-6 py-2 font-pop text-xl uppercase mb-6 border-4 border-black shadow-[4px_4px_0_#000]">
            Consideraciones
          </span>
          <h2 className="text-6xl md:text-8xl font-pop uppercase text-black leading-none mb-6">
            Limitaciones
          </h2>
          <p className="text-2xl font-serif italic text-black/60 max-w-3xl mx-auto">
            Aspectos metodológicos y analíticos que delimitan el alcance del estudio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LIMITACIONES.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-4 border-black p-6 shadow-[8px_8px_0_#000] hover:shadow-[12px_12px_0_#000] hover:translate-y-[-4px] transition-all"
                style={{ borderTopColor: item.color, borderTopWidth: '8px' }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 flex items-center justify-center border-2 border-black"
                    style={{ backgroundColor: item.color }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>
                  <span className="font-pop text-4xl font-bold opacity-20">
                    {String(item.id).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="text-xl font-pop uppercase text-black mb-3 leading-tight">
                  {item.titulo}
                </h3>

                <p className="text-black/70 text-sm leading-relaxed">
                  {item.descripcion}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
