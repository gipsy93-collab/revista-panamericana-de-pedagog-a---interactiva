import React from 'react';
import { motion } from 'motion/react';
import { Clapperboard } from 'lucide-react';

const FILMS = [
  {
    title: 'Romeo y Julieta',
    director: 'Baz Luhrmann',
  },
  {
    title: 'Crónica de una muerte anunciada',
    director: 'Francesco Rosi',
  },
  {
    title: 'Rebelión en la granja',
    director: 'John Halas y Joy Batchelor',
  },
];

export default function CorpusSection() {
  return (
    <section className="relative py-20 px-6 bg-[#1a1a1a] text-[#FDFCFB]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[#5A5A40]/20 border border-[#5A5A40]/30 text-[#5A5A40] mb-4">
            <Clapperboard size={18} />
            <span className="text-xs font-bold uppercase tracking-widest">Corpus Cinematográfico</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-[#FDFCFB]">
            Cine y Literatura
          </h2>
          <p className="mt-3 text-[#FDFCFB]/60 max-w-2xl mx-auto">
            Tres adaptaciones cinematográficas que funcionaron como mediadores simbólicos entre la página y la pantalla.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FILMS.map((film, index) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center hover:border-[#5A5A40]/50 transition-colors"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#5A5A40] to-transparent opacity-60" />
              <h3 className="text-xl md:text-2xl font-serif text-[#FDFCFB] mb-2">
                {film.title}
              </h3>
              <p className="text-sm text-[#FDFCFB]/60 uppercase tracking-wider mb-4">
                Director
              </p>
              <p className="text-[#5A5A40] font-medium">
                {film.director}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
