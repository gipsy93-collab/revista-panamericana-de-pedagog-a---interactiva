import { ArticleHeader } from '../Common/ArticleHeader';
import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import Hero3412 from './Hero3412';
import Content3412 from './Content3412';
import Quiz3412 from './Quiz3412';
import { ARTICLE_META } from './constants';
import { FilmGrain } from '../FilmGrain';
import { OrganicWaveDivider } from '../OrganicWaveDivider';

export default function Unified3412({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F0F0F0] text-black relative selection:bg-[#4F46E5] selection:text-white overflow-x-hidden pt-20">
      <FilmGrain />
      
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3412'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 41'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Hernández-Silvera et al.'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

      <main>
        <Hero3412 />
        <OrganicWaveDivider topColor="#F0F0F0" bottomColor="#ffffff" variant="wavy" />
        <Content3412 />
        <OrganicWaveDivider topColor="#F0F0F0" bottomColor="#ffffff" variant="dramatic" />
        <Quiz3412 />
      </main>

      <footer className="bg-black py-32 px-6 border-t-[20px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-4xl mx-auto relative z-10 text-white">
          <div className="mb-12">
            <BrutalSticker text="CITA BIBLIOGRÁFICA" color="bg-[#4F46E5]" className="mb-8" />
          </div>
          <p className="font-serif text-2xl italic text-slate-300 mb-12 leading-relaxed">
            {ARTICLE_META.authors} ({ARTICLE_META.date.split('-')[2]}).{' '}
            <span className="text-white not-italic font-black uppercase underline decoration-[#4F46E5] decoration-8">{ARTICLE_META.title}</span>.{' '}
            <span className="text-[#4F46E5] italic">Revista Panamericana de Pedagogía</span>, {ARTICLE_META.volume}, e{ARTICLE_META.id}.
          </p>
          
          <div className="flex flex-col items-center gap-8">
            <p className="font-mono text-[10px] uppercase font-black opacity-40">INSTITUCIÓN: {ARTICLE_META.institution}</p>
            <a
              href={`https://doi.org/${ARTICLE_META.doi}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-black px-10 py-5 border-4 border-black font-display text-lg font-black uppercase tracking-widest shadow-[10px_10px_0_0_#4F46E5] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[14px_14px_0_0_#4F46E5] transition-all rounded-3xl"
            >
              Consultar DOI Oficial
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BrutalSticker({ text, color = "bg-yellow-400", className = "" }: any) {
  return (
    <div className={`${color} inline-block border-4 border-black px-6 py-2 font-display text-sm uppercase font-black shadow-[6px_6px_0_0_#000] -rotate-1 ${className}`}>
      {text}
    </div>
  );
}
