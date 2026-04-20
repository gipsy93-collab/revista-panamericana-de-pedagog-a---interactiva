import { useEffect } from 'react';
import { ArrowLeft, BookOpen, FileText } from 'lucide-react';
import Hero3453 from './Hero3453';
import Content3453 from './Content3453';
import { DataLab3453 } from './DataLab3453';
import Quiz3453 from './Quiz3453';
import { ARTICLE_META } from './constants';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';

export default function Unified3453({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-black relative selection:bg-[#E11D48] selection:text-white overflow-x-hidden pt-20">
      <FilmGrain />
      
      {/* Premium Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black shadow-[0_4px_20px_rgba(0,0,0,0.15)] h-24">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              onClick={onBack}
              className="group flex items-center gap-3 bg-black text-white px-8 py-4 border-4 border-black hover:bg-[#E11D48] transition-all shadow-[6px_6px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[10px_10px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
            >
              <ArrowLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
              <span className="font-display uppercase text-lg tracking-tighter font-black">Cerrar Artículo</span>
            </button>
            <div className="hidden lg:flex items-center gap-4 border-l-4 border-black pl-6">
               <FileText className="text-[#E11D48]" size={24} />
               <span className="font-mono text-[10px] uppercase font-black tracking-[0.2em] opacity-40">
                 REF: RPP.V40.E3453 // CONSUMO_DROGAS
               </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 bg-zinc-100 border-4 border-black px-4 py-2 rotate-1">
            <BookOpen size={20} />
            <span className="font-display uppercase text-xs font-black">Lectura Estimada: 8 min</span>
          </div>
        </div>
      </header>

      <main>
        <Hero3453 />
        <OrganicWaveDivider topColor="#FAF9F6" bottomColor="#ffffff" variant="wavy" />
        <Content3453 />
        <OrganicWaveDivider topColor="#FAF9F6" bottomColor="#ffffff" variant="dramatic" />
        <DataLab3453 />
        <Quiz3453 />
      </main>

      <footer className="bg-black py-40 px-6 border-t-[20px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/microfabrics.png')]" />
        
        <div className="max-w-5xl mx-auto relative z-10 text-white">
          <div className="mb-16 flex justify-center">
            <div className="bg-[#E11D48] border-4 border-black px-10 py-3 font-display text-xl uppercase font-black shadow-[8px_8px_0_0_#fff] -rotate-2">
              REFERENCIA APA
            </div>
          </div>

          <p className="font-serif text-3xl md:text-5xl italic text-slate-300 mb-16 leading-[1.2] max-w-4xl mx-auto">
            {ARTICLE_META.authors} ({ARTICLE_META.date.split('-')[2]}).{' '}
            <span className="text-white not-italic font-black border-b-4 border-[#E11D48] leading-tight">
              {ARTICLE_META.title}
            </span>.{' '}
            <span className="text-[#E11D48] italic">Revista Panamericana de Pedagogía</span>, {ARTICLE_META.volume}, e{ARTICLE_META.id}.
          </p>
          
          <div className="space-y-12">
            <div className="flex flex-col items-center gap-4">
               <p className="font-mono text-xs uppercase font-black tracking-[0.4em] text-zinc-500">PROVENIENCIA ACADÉMICA:</p>
               <p className="font-display text-2xl uppercase font-black tracking-tighter">{ARTICLE_META.institution}</p>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              <a
                href={`https://doi.org/${ARTICLE_META.doi}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-12 py-6 border-4 border-black font-display text-xl font-black uppercase tracking-widest shadow-[12px_12px_0_0_#E11D48] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[18px_18px_0_0_#E11D48] transition-all"
              >
                Acceder vía DOI
              </a>
               <a
                href="#"
                className="inline-block bg-zinc-800 text-white px-12 py-6 border-4 border-white font-display text-xl font-black uppercase tracking-widest shadow-[12px_12px_0_0_#4a4a4a] hover:-translate-y-1 transition-all"
              >
                Descargar PDF
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Label */}
        <div className="mt-40 pt-20 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-8 px-10 opacity-30">
           <span className="font-mono text-[10px] font-black uppercase tracking-[0.8em]">UP // RPP IP-INTERACTIVA</span>
           <span className="font-mono text-[10px] font-black uppercase tracking-[0.8em]">© 2026 TRANSMEDIA LAB</span>
        </div>
      </footer>
    </div>
  );
}
