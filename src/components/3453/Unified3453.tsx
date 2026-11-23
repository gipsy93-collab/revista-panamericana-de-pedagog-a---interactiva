import { ArticleHeader } from '../Common/ArticleHeader';
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
      <ArticleHeader
        onBack={onBack}
        doi={ARTICLE_META?.doi || '10.21555/rpp.3453'}
        volume={(ARTICLE_META as any)?.volume || (ARTICLE_META as any)?.vol || 'Vol. 40'}
        year={(ARTICLE_META as any)?.date || (ARTICLE_META as any)?.year || '2025'}
        authors={ARTICLE_META?.authors || 'Inostroza-Fuentes et al.'}
        institution={ARTICLE_META?.institution || 'Revista Panamericana de Pedagogía'}
        themeColor={(ARTICLE_META as any)?.themeColor || '#10b981'}
      />

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
            <div className="bg-[#E11D48] border-4 border-black px-10 py-3 font-display text-xl uppercase font-black shadow-[8px_8px_0_0_#fff] -rotate-2 rounded-3xl">
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
               <p className="font-display text-2xl uppercase font-black tracking-normal">{ARTICLE_META.institution}</p>
            </div>

            <div className="flex justify-center flex-wrap gap-8">
              <a
                href={`https://doi.org/${ARTICLE_META.doi}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-white text-black px-12 py-6 border-4 border-black font-display text-xl font-black uppercase tracking-widest shadow-[12px_12px_0_0_#E11D48] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[18px_18px_0_0_#E11D48] transition-all rounded-3xl"
              >
                Acceder vía DOI
              </a>
               <a
                href="#"
                className="inline-block bg-zinc-800 text-white px-12 py-6 border-4 border-white font-display text-xl font-black uppercase tracking-widest shadow-[12px_12px_0_0_#4a4a4a] hover:-translate-y-1 transition-all rounded-3xl"
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
