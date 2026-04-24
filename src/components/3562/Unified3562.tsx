import { Hero3562 } from './Hero3562';
import { Content3562 } from './Content3562';
import { DataLab3562 } from './DataLab3562';
import { Quiz3562 } from './Quiz3562';
import { OrganicWaveDivider } from '../BrutalistLib';
import { ARTICLE_META } from './constants';
import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useEffect } from 'react';

export default function Unified3562({ onBack }: { onBack?: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col w-full bg-[#f0f0f0]"
    >
      {onBack && (
        <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-4 border-black">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 bg-black text-white px-6 py-2 border-2 border-black hover:bg-[#ec4899] transition-colors shadow-[4px_4px_0_0_#999]"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-display uppercase text-xs tracking-widest font-black">Volver</span>
            </button>
            <a
              href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-[#4f46e5] hover:text-white transition-colors shadow-[4px_4px_0_0_#999]"
            >
              <span className="font-display uppercase text-xs tracking-widest font-black">Revista Acad�mica</span>
            </a>
            <div className="bg-black text-white px-4 py-2 font-mono text-[10px] uppercase font-black italic">
              REF_{ARTICLE_META.id} // CARE_UNI_TRANSITION
            </div>
          </div>
        </header>
      )}

      <div className={onBack ? "pt-20" : ""}>
        <Hero3562 />
        
        <OrganicWaveDivider 
          topColor="#f0f0f0" 
          bottomColor="#ffffff" 
          variant="wavy" 
          height={100} 
        />
        
        <Content3562 />
        
        <OrganicWaveDivider 
          topColor="#f0f0f0" 
          bottomColor="#000000" 
          variant="steps" 
          height={100} 
        />
        
        <Quiz3562 />
      </div>

      {/* FOOTER ACADÉMICO - APA FORMAT */}
      <footer className="bg-black text-white py-20 px-6 border-t-[12px] border-[#ec4899]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="font-mono text-xs uppercase opacity-40">CITA BIBLIOGRÁFICA (APA 7)</span>
            <p className="text-xl font-serif italic text-white/90 leading-relaxed">
              Rodríguez-Calderón-de-la-Barca, D. ({ARTICLE_META.year}). {ARTICLE_META.title}. {ARTICLE_META.journal}, ({ARTICLE_META.vol}), <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-white hover:text-rose-400 hover:underline transition-colors">{ARTICLE_META.doi}</a>
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
