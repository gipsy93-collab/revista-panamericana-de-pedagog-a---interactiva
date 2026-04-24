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
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_40px_rgba(124,58,237,0.1)] h-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button
              onClick={onBack}
              className="group flex items-center gap-4 bg-black text-white px-10 py-5 border-4 border-black hover:bg-[#7C3AED] transition-all shadow-[10px_10px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <ArrowLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
              <span className="font-display uppercase text-xl tracking-tighter font-black italic">Volver</span>
            </button>
          <a
            href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="font-display uppercase text-xs tracking-widest font-black">Revista Acad�mica</span>
          </a>
            <div className="hidden xl:flex flex-col border-l-[6px] border-[#7C3AED] pl-10">
               <span className="font-mono text-[10px] uppercase font-black tracking-[0.4em] opacity-30 leading-none mb-2 text-black">CASE_FILE // RPP.3455</span>
               <span className="font-display uppercase text-lg font-black text-black">Dimensión Personal // Yucatán_</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-6 bg-white border-4 border-black px-8 py-3 rotate-1 shadow-[8px_8px_0_0_#7C3AED] group cursor-default">
            <UserCheck size={28} className="text-[#7C3AED] group-hover:scale-110 transition-transform" />
            <span className="font-display uppercase text-sm font-black tracking-[0.2em]">Sujeto: Docente en Formación</span>
          </div>
        </div>
      </header>

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
             <div className="bg-[#7C3AED] border-4 border-black px-16 py-4 font-display text-3xl uppercase font-black shadow-[15px_15px_0_0_#fff] -rotate-1 italic">
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
            <div className="text-left bg-zinc-900 p-12 border-4 border-zinc-800 shadow-[20px_20px_0_0_#7C3AED] rotate-[-1deg]">
               <p className="font-mono text-xs uppercase font-black tracking-[0.6em] text-[#7C3AED] mb-4">AFFILIATION_DATA:</p>
               <p className="font-display text-4xl uppercase font-black tracking-tighter leading-none">{ARTICLE_META.institution}</p>
            </div>

            <div className="flex gap-10">
              <a
                href={`https://doi.org/${ARTICLE_META.doi}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-20 py-10 border-4 border-black font-display text-3xl font-black uppercase tracking-widest shadow-[20px_20px_0_0_#7C3AED] hover:translate-x-[-6px] hover:translate-y-[-6px] hover:shadow-[30px_30px_0_0_#7C3AED] transition-all active:scale-95"
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
