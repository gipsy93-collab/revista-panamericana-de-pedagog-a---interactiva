import { motion } from 'motion/react';
import { ARTICLE_META } from './constants';
import { BrutalSticker, PremiumTitle, ArticleFicha } from '../BrutalistLib';
import { Target, Clock, Users } from 'lucide-react';

export const Hero3543 = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#f0f0f0] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 overflow-hidden">
      {/* Background purely decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#10b981]/10 -skew-x-12 translate-x-20 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <BrutalSticker 
            text="INVESTIGACIÓN EMPÍRICA // CUALITATIVA" 
            color="bg-[#10b981]" 
            className="text-white self-start"
          />
          
          <PremiumTitle subtitle="CULTURA ACADÉMICA">
            {ARTICLE_META.title}
          </PremiumTitle>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl font-sans font-medium text-black/70 leading-relaxed max-w-3xl"
          >
            {ARTICLE_META.abstract}
          </motion.p>

          <div className="flex flex-wrap gap-6 mt-4">
            <div className="flex items-center gap-3 bg-black text-white px-5 py-3 border-2 border-black shadow-[6px_6px_0_0_#10b981]">
              <Users size={20} />
              <span className="font-mono text-sm font-bold uppercase">{ARTICLE_META.stats.n}</span>
            </div>
            <div className="flex items-center gap-3 bg-white text-black px-5 py-3 border-2 border-black shadow-[6px_6px_0_0_#000]">
              <Clock size={20} />
              <span className="font-mono text-sm font-bold uppercase">{ARTICLE_META.stats.duration}</span>
            </div>
            <div className="flex items-center gap-3 bg-white text-black px-5 py-3 border-2 border-black shadow-[6px_6px_0_0_#000]">
              <Target size={20} />
              <span className="font-mono text-sm font-bold uppercase">{ARTICLE_META.stats.method}</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 flex justify-center lg:justify-end">
          <ArticleFicha 
            doi={ARTICLE_META.doi}
            authors={ARTICLE_META.authors}
            institution={ARTICLE_META.institution}
            vol={ARTICLE_META.vol}
            date={`${ARTICLE_META.year}`}
          />
        </div>
      </div>
    </section>
  );
};
