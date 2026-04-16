import { useEffect, useRef, useState, lazy, Suspense } from 'react';
import { ChevronLeft, ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FilmGrain } from '../FilmGrain';

// Lazy load actual content components
const Hero = lazy(() => import('./Hero'));
const IntroductionSection = lazy(() => import('./IntroductionSection'));
const MethodologyLab = lazy(() => import('./MethodologyLab'));
const ResultsSection = lazy(() => import('./ResultsSection'));
const DiscussionSection = lazy(() => import('./DiscussionSection'));
const InteractiveSurvey = lazy(() => import('./InteractiveSurvey'));
const Limitaciones3453 = lazy(() => import('./Limitaciones3453'));

gsap.registerPlugin(ScrollTrigger);

export default function Unified3453({ onBack }: { onBack?: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    window.scrollTo(0, 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F0F0F0] selection:bg-black selection:text-white font-pop relative">
      <FilmGrain />
      
      {/* Background patterns - subtle grid instead of orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

      {/* Persistent Navigation & Progress - Neobrutalist style */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-white border-4 border-black shadow-[4px_4px_0_#000] text-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-black uppercase tracking-tight">Galería</span>
        </button>

        <a 
          href="https://doi.org/10.21555/rpp.3453"
          target="_blank"
          rel="noreferrer"
          className="pointer-events-auto flex items-center gap-2 px-6 py-3 bg-[#06b6d4] border-4 border-black shadow-[4px_4px_0_#000] text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          <span className="text-sm font-black uppercase tracking-tight">PDF Original</span>
          <ExternalLink size={16} />
        </a>

        {/* Global progress indicator - top bar */}
        <div className="fixed top-0 left-0 w-full h-3 bg-white border-b-4 border-black z-[60]">
          <div 
            className="h-full bg-[#ff6b9d] transition-all duration-300"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </nav>

      {/* Main Experience Layout */}
      <main className="relative z-10 overflow-hidden">
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-[#F0F0F0]">
            <div className="w-12 h-12 border-4 border-black border-t-transparent rounded-full animate-spin" />
          </div>
        }>
          <Hero />
          
          <div className="space-y-32 pb-32">
            <IntroductionSection />
            <MethodologyLab />
            <ResultsSection />
            <DiscussionSection />
            <InteractiveSurvey />
            <Limitaciones3453 />
          </div>
        </Suspense>
      </main>

      {/* Global Footer - Neobrutalist */}
      <footer className="relative z-10 py-20 border-t-[10px] border-black bg-white">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-black font-black uppercase">
          <div className="flex flex-col gap-2 items-center md:items-start">
            <span className="text-2xl font-black tracking-tighter">Revista Panamericana de Pedagogía</span>
            <span className="text-sm px-2 bg-black text-white self-start">Contribución científica transmedia N° 40 (2025)</span>
          </div>
          <div className="flex gap-8 text-black/50 text-sm">
             <span>© 2025 UP</span>
             <span>Inostroza-Fuentes et al.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
