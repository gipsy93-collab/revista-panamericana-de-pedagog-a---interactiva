import { ArticleHeader } from '../Common/ArticleHeader';
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
      
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3411'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Jiménez-Moreno & Feria-Juárez'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

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
            className="inline-block bg-white text-black px-8 py-4 border-4 border-black font-mono text-sm font-black uppercase tracking-widest shadow-[8px_8px_0_0_#3b82f6] hover:-translate-y-1 transition-transform rounded-3xl"
          >
            DOI: {ARTICLE_META?.doi || '10.21555/rpp.3411'}
          </a>
        </div>
      </footer>
    </div>
  );
}
