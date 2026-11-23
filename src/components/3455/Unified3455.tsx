import { ArticleHeader } from '../Common/ArticleHeader';
import { useEffect } from 'react';
import { ArrowLeft, Sparkles, UserCheck } from 'lucide-react';
import Hero3455 from './Hero3455';
import Content3455 from './Content3455';
import Quiz3455 from './Quiz3455';
import { ARTICLE_META } from './constants';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';

export default function Unified3455({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F7FF] text-black relative selection:bg-[#7C3AED] selection:text-white overflow-x-hidden pt-20">
      <FilmGrain />
      
      {/* Hyper-Premium Header */}
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3455'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2026'}
        authors={ARTICLE_META?.authors || 'Chan-Chi & Poot-May'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main>
        <Hero3455 />
        <OrganicWaveDivider topColor="#F8F7FF" bottomColor="#ffffff" variant="wavy" />
        <Content3455 />
        <OrganicWaveDivider topColor="#F8F7FF" bottomColor="#ffffff" variant="dramatic" />
        <Quiz3455 />
      </main>

      {/* Cinematic Footer */}
      <footer className="bg-black py-56 px-6 border-t-[30px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-white">
          <div className="mb-24 flex flex-col items-center">
             <Sparkles className="text-yellow-400 w-24 h-24 mb-10 animate-pulse" />
             <div className="bg-[#7C3AED] border-4 border-black px-16 py-4 font-display text-3xl uppercase font-black shadow-[15px_15px_0_0_#fff] -rotate-1 italic rounded-3xl">
               REFERENCIA ACADÉMICA CORE
             </div>
          </div>

          <p className="font-serif text-4xl md:text-6xl italic text-zinc-400 mb-24 leading-[1.2] max-w-6xl mx-auto">
            {ARTICLE_META.authors} ({ARTICLE_META.date}).{' '}
            <span className="text-white not-italic font-black border-b-[12px] border-[#7C3AED] leading-none pb-2 italic">
              {ARTICLE_META.title}
            </span>.{' '}
            <span className="text-[#7C3AED] italic">Revista Panamericana de Pedagogía</span>, {ARTICLE_META.volume}, e{ARTICLE_META.id}.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-between mt-48 gap-20">
            <div className="text-left bg-zinc-900 p-12 border-4 border-zinc-800 shadow-[20px_20px_0_0_#7C3AED] rotate-[-1deg] rounded-3xl">
               <p className="font-mono text-xs uppercase font-black tracking-[0.6em] text-[#7C3AED] mb-4">AFFILIATION_DATA:</p>
               <p className="font-display text-4xl uppercase font-black tracking-normal leading-none">{ARTICLE_META.institution}</p>
            </div>

            <div className="flex gap-10">
              <a
                href={`https://doi.org/${ARTICLE_META.doi}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-20 py-10 border-4 border-black font-display text-3xl font-black uppercase tracking-widest shadow-[20px_20px_0_0_#7C3AED] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[30px_30px_0_0_#7C3AED] transition-all active:scale-95 rounded-3xl"
              >
                DOI ACCESS_
              </a>
            </div>
          </div>
        </div>

        {/* Global Footer Label */}
        <div className="mt-60 pt-32 border-t-2 border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-12 px-16 opacity-30">
           <div className="flex gap-4">
              <div className="w-4 h-4 bg-[#7C3AED]" />
              <div className="w-4 h-4 bg-white" />
              <div className="w-4 h-4 bg-[#7C3AED]" />
           </div>
           <span className="font-mono text-sm font-black uppercase tracking-[1.5em] italic">RPP // TRANSMEDIA HUB // 2026</span>
        </div>
      </footer>
    </div>
  );
}
