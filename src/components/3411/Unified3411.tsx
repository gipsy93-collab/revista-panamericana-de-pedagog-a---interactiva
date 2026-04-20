import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero3411 from './Hero3411';
// import { DataLab3411 } from './DataLab3411'; // Suspect component
import Content3411 from './Content3411';
import Quiz3411 from './Quiz3411';
import { ARTICLE_META } from './constants';
import { FilmGrain } from '../FilmGrain';

export default function Unified3411({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A] text-white relative selection:bg-rose-600 selection:text-white overflow-x-hidden pt-20">
      <FilmGrain />
      
      <header className="fixed top-0 left-0 right-0 z-[100] bg-[#0F172A] border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.3)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-white text-black px-6 py-3 border-4 border-black hover:bg-rose-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#F4A261] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#F4A261] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          
          <div className="hidden md:block font-mono text-[10px] uppercase font-black tracking-widest opacity-40">
            N-3411 // DESAFILIACIÓN_BACHILLERATO // CETis_74
          </div>
        </div>
      </header>

      <main>
        <Hero3411 />
        {/* <DataLab3411 /> */}
        <Content3411 />
        <Quiz3411 />
      </main>

      <footer className="bg-black py-24 px-6 border-t-[16px] border-zinc-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="font-serif text-xl italic text-slate-400 mb-8 leading-relaxed">
            Fuente: Jiménez-Moreno, J. A., & Feria-Juárez, Z. ({ARTICLE_META?.date?.split(' ')[1] || '2026'}).{' '}
            <span className="text-white not-italic font-bold">Mantenerse en la escuela: desafiliación en un bachillerato tecnológico</span>.{' '}
            <span className="text-rose-600">Revista Panamericana de Pedagogía</span>, 41, e3411.
          </p>
          <a
            href={`https://doi.org/${ARTICLE_META?.doi || '10.21555/rpp.3411'}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#3b82f6] hover:-translate-y-1 transition-transform"
          >
            DOI: {ARTICLE_META?.doi || '10.21555/rpp.3411'}
          </a>
        </div>
      </footer>
    </div>
  );
}
