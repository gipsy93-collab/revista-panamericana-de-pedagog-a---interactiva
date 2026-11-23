import { ArticleHeader } from '../Common/ArticleHeader';
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
      className="flex flex-col w-full bg-[#f0f0f0] pt-[68px] sm:pt-20 overflow-x-hidden"
    >
      {/* Header con Ficha Técnica Desaturada y Elementos Redondeados */}
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3543'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2026'}
        authors={ARTICLE_META?.authors || 'Ríos-Higuera & Sotomayor-Andrade'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <Hero3543 />
      
      <OrganicWaveDivider 
        topColor="#f0f0f0" 
        bottomColor="#1e1b4b" 
        variant="wavy" 
        height={100} 
      />
      
      <Content3543 />
      
      <DataLab3543 />
      
      <OrganicWaveDivider 
        topColor="#FEFCE8" 
        bottomColor="#000000" 
        variant="steps" 
        height={100} 
      />
      
      <Quiz3543 />

      {/* FOOTER ACADÉMICO - APA FORMAT */}
      <footer className="bg-black text-white py-14 sm:py-20 px-4 sm:px-6 border-t-[12px] border-[#10b981]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 sm:gap-12 bg-zinc-900/50 p-6 sm:p-8 md:p-12 border-4 border-white/10 rounded-3xl">
          <div className="flex flex-col gap-4 max-w-2xl min-w-0 w-full">
            <span className="font-mono text-xs uppercase opacity-40">CITA BIBLIOGRÁFICA (APA 7)</span>
            <p className="text-base sm:text-xl font-serif italic text-white/90 leading-relaxed break-words">
              Ríos-Higuera, S., & Sotomayor-Andrade, F.-J. ({ARTICLE_META.year}). {ARTICLE_META.title}. {ARTICLE_META.journal}, ({ARTICLE_META.vol}), <a href={`https://doi.org/${ARTICLE_META.doi}`} target="_blank" rel="noreferrer" className="text-white hover:text-rose-400 hover:underline transition-colors break-all">{ARTICLE_META.doi}</a>
            </p>
          </div>
          
          <div className="flex flex-col gap-2 items-end">
            <span className="font-display text-2xl uppercase tracking-normal">Ciencia Transmedia</span>
            <span className="font-mono text-[10px] uppercase opacity-30">RPP // Interactive System v2.0</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
