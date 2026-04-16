import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero3412 from './Hero3412';
import Content3412 from './Content3412';
import Quiz3412 from './Quiz3412';
import { ARTICLE_META } from './constants';
import { FilmGrain } from '../FilmGrain';

export default function Unified3412({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 relative selection:bg-teal-600 selection:text-white overflow-x-hidden pt-20">
      <FilmGrain />
      
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-teal-600 transition-colors shadow-[4px_4px_0_0_#1E3A5F] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#1E3A5F] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:block font-mono text-[10px] uppercase font-black tracking-widest opacity-40">
            N-3412 // COMPETENCIAS_BLANDAS // ARGENTINA_AMBA
          </div>
        </div>
      </header>

      <main>
        <Hero3412 />
        <Content3412 />
        <Quiz3412 />
      </main>

      <footer className="bg-black py-24 px-6 border-t-[16px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <p className="font-serif text-xl italic text-slate-400 mb-8 leading-relaxed">
            Hernández-Silvera, D. I., Ghilardelli, M. A., Giulianelli, M. J., & Correia, V. E. ({ARTICLE_META.date.split(' ')[1]}).{' '}
            <span className="text-white not-italic font-bold">Descubriendo competencias blandas en estudiantes secundarios: exploración y reflexiones</span>.{' '}
            <span className="text-teal-400">Revista Panamericana de Pedagogía</span>, 41, e3412.
          </p>
          <p className="mb-8 font-mono text-xs opacity-60">Pontificia Universidad Católica Argentina</p>
          <a
            href={`https://doi.org/${ARTICLE_META.doi}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#1E3A5F] hover:-translate-y-1 transition-transform"
          >
            DOI: {ARTICLE_META.doi}
          </a>
        </div>
      </footer>
    </div>
  );
}
