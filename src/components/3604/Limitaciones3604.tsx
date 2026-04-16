import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle } from 'lucide-react';
import { LIMITATIONS } from './constants';

const Limitaciones3604: React.FC = () => {
  return (
    <section className="py-24 bg-[#1a1a1a] text-[#FDFCFB]">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="border border-[#5A5A40]/30 bg-[#1a1a1a]/50 p-8 md:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <AlertTriangle size={32} className="text-[#5A5A40]" />
            <h2 className="font-serif text-3xl md:text-4xl">Limitaciones</h2>
          </div>

          <ul className="space-y-6">
            {LIMITATIONS.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-start gap-4"
              >
                <span className="mt-1 w-6 h-6 rounded-full border border-[#5A5A40]/50 text-[#5A5A40] flex items-center justify-center text-xs font-bold shrink-0">
                  {idx + 1}
                </span>
                <p className="text-[#FDFCFB]/80 text-lg leading-relaxed">{item}</p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Limitaciones3604;
