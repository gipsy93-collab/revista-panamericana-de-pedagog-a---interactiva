import { ArticleHeader } from '../Common/ArticleHeader';
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
        <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3562'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Rodríguez-Calderón-de-la-Barca'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />
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
            <span className="font-display text-2xl uppercase tracking-normal">Ciencia Transmedia</span>
            <span className="font-mono text-[10px] uppercase opacity-30">RPP // Interactive System v2.0</span>
          </div>
        </div>
      </footer>
    </motion.div>
  );
}
