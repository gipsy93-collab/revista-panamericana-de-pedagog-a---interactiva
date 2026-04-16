import React from 'react';
import { motion } from 'motion/react';
import { BrutalCard, BrutalSticker, BrutalQuote } from '../BrutalistLib';

const fricciones = [
  {
    id: '01',
    title: 'Entre lo que dice el paper y lo que calla',
    tension: 'El estudio celebra que los futuros docentes "reconocen" valores y actitudes positivas. Pero hay una omisión incómoda: reconocer no es posesión. Un estudiante puede saber que la paciencia es importante y seguir siendo impulsivo. El paper asume que el reconocimiento verbal implica valores operativos, pero la práctica docente real ocurre en situaciones de estrés donde solo funcionan los valores interiorizados.',
    question: '¿Está la formación docente confundiendo "saber de" con "saber hacer"? ¿Estamos midiendo comprensión teórica cuando deberíamos medir competencia práctica?',
    color: 'bg-white',
    shadow: '#2D6A4F',
  },
  {
    id: '02',
    title: 'Entre teoría y práctica descrita',
    tension: 'Los autores citan a Perales (2018): "para convertirse en agentes de paz, es necesario lograr el equilibrio interno". Es una teoría hermosa. Pero las voces de los participantes muestran que compartir pensamientos generó estrés, exponer creencias costó trabajo, y la confianza en sí mismos es una deuda pendiente. La teoría dice: equilibrio interno primero. La práctica muestra: intentaron el equilibrio y les generó sufrimiento.',
    question: 'Si el trabajo personal necesario para ser agente de paz genera sufrimiento emocional en los futuros docentes, ¿estamos preparados para acompañar ese proceso? ¿O estamos pidiendo introspección sin dar herramientas para soportar lo que se encuentra dentro?',
    color: 'bg-[#B7E4C7]',
    shadow: '#000000',
  },
  {
    id: '03',
    title: 'Entre política pública y realidad',
    tension: 'El paper menciona con optimismo la Red Nacional para la Paz de la ANUIES, creada en 2023. Suena bien en documentos oficiales. Pero los datos muestran una realidad diferente: 57 futuros docentes admiten que les cuesta gestionar emociones, compartir experiencias y confiar en sí mismos. No están pidiendo políticas institucionales. Están pidiendo ayuda concreta para su desarrollo personal. Hay un desfase entre los discursos sobre "cultura de paz" y las necesidades reales de quienes implementarán esas políticas.',
    question: '¿Estamos invirtiendo recursos en estructuras institucionales mientras ignoramos que quienes ejecutarán esas políticas llegan a las aulas con deudas emocionales no resueltas? ¿No sería más efectivo invertir en el desarrollo personal de cada docente que en más documentos normativos?',
    color: 'bg-black',
    shadow: '#e81e61',
  },
  {
    id: '04',
    title: 'Entre el diagnóstico y la propuesta',
    tension: 'El estudio concluye recomendando "incluir asignaturas enfocadas en la formación de la dimensión personal". Pero el propio paper reconoce que los participantes ya están haciendo trabajo personal. El problema no es la ausencia de actividades. El problema es que estas actividades generan estrés en lugar de crecimiento. Agregar más asignaturas del mismo tipo no resolverá el problema. Lo que se necesita es cambiar cómo se hace el trabajo personal, no solo aumentar su cantidad.',
    question: '¿Estamos proponiendo más de lo mismo cuando lo mismo está demostrando no funcionar? ¿Por qué la respuesta institucional a todo problema educativo es "agregar una asignatura" en lugar de "transformar la práctica pedagógica"?',
    color: 'bg-[#fccb06]',
    shadow: '#000000',
  },
];

export const Fricciones3455: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-[#f5ece0] border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <BrutalSticker text="Lectura Crítica" color="bg-black" className="text-white mb-6" />
          <h2 className="text-7xl md:text-8xl font-pop uppercase text-black leading-none" style={{ WebkitTextStroke: '2px black' }}>
            Fricciones<br />Pedagógicas
          </h2>
          <p className="mt-8 text-xl font-serif italic text-black/60 max-w-2xl mx-auto">
            Tensiones incómodas entre lo que el paper dice y lo que duele mirar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {fricciones.map((f, idx) => (
            <motion.div
              key={f.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <BrutalCard
                color={f.color}
                shadowColor={f.shadow}
                className={`h-full flex flex-col ${f.color === 'bg-black' ? 'text-white' : 'text-black'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl font-pop uppercase leading-none">{f.id}</span>
                  <div className="h-1 flex-1 bg-current opacity-20" />
                </div>
                <h3 className="text-2xl font-pop uppercase leading-tight mb-4">{f.title}</h3>
                <p className={`text-base leading-relaxed mb-6 ${f.color === 'bg-black' ? 'text-white/80' : 'text-black/70'}`}>
                  {f.tension}
                </p>
                <div className="mt-auto">
                  <div className={`inline-block px-3 py-1 text-[10px] font-black uppercase tracking-widest mb-3 ${f.color === 'bg-black' ? 'bg-white/10 text-white' : 'bg-black/5 text-black'}`}>
                    Pregunta incómoda
                  </div>
                  <p className={`text-lg font-serif italic leading-snug ${f.color === 'bg-black' ? 'text-[#B7E4C7]' : 'text-[#2D6A4F]'}`}>
                    {f.question}
                  </p>
                </div>
              </BrutalCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-24"
        >
          <BrutalCard color="bg-white" shadowColor="#2D6A4F" className="text-black">
            <h3 className="text-3xl font-pop uppercase mb-8 text-center">Mapa de Tensiones</h3>
            <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
              <div className="space-y-6">
                <div className="border-l-4 border-black pl-4">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-1">Teoría institucional</p>
                  <p className="font-pop uppercase text-lg">Red Nacional para la Paz → Políticas, planes</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-1">Teoría institucional</p>
                  <p className="font-pop uppercase text-lg">"Equilibrio interno" → Requisito para paz</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-1">Teoría institucional</p>
                  <p className="font-pop uppercase text-lg">Más asignaturas → Solución propuesta</p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="border-l-4 border-[#e81e61] pl-4">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-1">Realidad del aula</p>
                  <p className="font-pop uppercase text-lg">Futuros docentes con estrés por compartir experiencias</p>
                </div>
                <div className="border-l-4 border-[#e81e61] pl-4">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-1">Realidad del aula</p>
                  <p className="font-pop uppercase text-lg">"Me costó trabajo exponer mis creencias"</p>
                </div>
                <div className="border-l-4 border-[#e81e61] pl-4">
                  <p className="text-xs font-black uppercase tracking-widest text-black/50 mb-1">Realidad del aula</p>
                  <p className="font-pop uppercase text-lg">Actividades actuales ya generan estrés</p>
                </div>
              </div>
            </div>
            <div className="mt-10 text-center">
              <p className="inline-block bg-black text-white px-6 py-3 font-pop uppercase text-sm tracking-widest">
                ¿Dónde está la conexión?
              </p>
            </div>
          </BrutalCard>
        </motion.div>
      </div>
    </section>
  );
};
