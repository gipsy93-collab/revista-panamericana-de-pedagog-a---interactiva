import { useEffect } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Hero3543 } from './Hero3543';
import Content3543 from './Content3543';
import { DataLab3543 } from './DataLab3543';
import { Quiz3543 } from './Quiz3543';
import { OrganicWaveDivider } from '../BrutalistLib';
import { ARTICLE_META } from './constants';
import { motion } from 'motion/react';

interface Props {
  onBack: () => void;
}

export default function Unified3543({ onBack }: Props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full bg-[#f0f0f0] pt-20"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-[#10b981] transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          <a
            href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="font-display uppercase text-xs tracking-widest font-black">Revista Acad�mica</span>
          </a>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-[#10b981] text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">N° 38</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-40">REF 3543 // EDUCACIÓN SUPERIOR</span>
          </div>
        </div>
      </header>

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
