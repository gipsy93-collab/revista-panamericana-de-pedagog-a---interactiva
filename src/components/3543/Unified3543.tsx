import { Hero3543 } from './Hero3543';
import Content3543 from './Content3543';
import { DataLab3543 } from './DataLab3543';
import { Quiz3543 } from './Quiz3543';
import { OrganicWaveDivider } from '../BrutalistLib';
import { ARTICLE_META } from './constants';
import { motion } from 'motion/react';

export default function Unified3543() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full bg-[#f0f0f0]"
    >
      <Hero3543 />
      
      <OrganicWaveDivider 
        topColor="#f0f0f0" 
        bottomColor="#ffffff" 
        variant="wavy" 
        height={100} 
      />
      
      <Content3543 />
      
      <DataLab3543 />
      
      <OrganicWaveDivider 
        topColor="#f0f0f0" 
        bottomColor="#000000" 
        variant="steps" 
        height={100} 
      />
      
      <Quiz3543 />

      {/* FOOTER ACADÉMICO - APA FORMAT */}
      <footer className="bg-black text-white py-20 px-6 border-t-[12px] border-[#10b981]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="font-mono text-xs uppercase opacity-40">CITA BIBLIOGRÁFICA (APA 7)</span>
            <p className="text-xl font-serif italic text-white/90 leading-relaxed">
              Ríos-Higuera, S., & Sotomayor-Andrade, F.-J. ({ARTICLE_META.year}). {ARTICLE_META.title}. {ARTICLE_META.journal}, ({ARTICLE_META.vol}), <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-white hover:text-rose-400 hover:underline transition-colors">{ARTICLE_META.doi}</a>
            </p>
          </div>
          
          <div className="flex flex-col gap-2 items-end">
            <span className="font-display text-2xl uppercase tracking-tighter">Ciencia Transmedia</span>
            <span className="font-mono text-[10px] uppercase opacity-30">RPP // Interactive System v2.0</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
