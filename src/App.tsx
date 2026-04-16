import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Components cargados eager
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { AlienCursor } from './components/AlienCursor';
import { StatusBar } from './components/StatusBar';
import { PageLoader } from './components/PageLoader';
import { FilmGrain } from './components/FilmGrain';
import { 
  HeroToArticulosWave, 
  ArticulosToSemilleroWave, 
  SemilleroToTransmediaWave,
  TransmediaToActualidadWave,
  ActualidadToBlogWave,
  BlogToFooterWave
} from './components/OrganicWaveDivider';

// Secciones lazy
const ArticulosInteractivos = lazy(() => import('./components/ArticulosInteractivos'));
const SemilleroAutores = lazy(() => import('./components/SemilleroAutores'));
const Transmedia = lazy(() => import('./components/Transmedia'));
const BlogAndActualidad = lazy(() => import('./components/BlogAndActualidad'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const GenericInteractiveArticle = lazy(() => import('./components/GenericInteractiveArticle'));

// Artículos interactivos lazy
const Unified3153 = lazy(() => import('./components/3153/Unified3153'));
const Unified3198 = lazy(() => import('./components/3198/Unified3198'));
const Unified3214 = lazy(() => import('./components/3214/Unified3214'));
const Unified3290 = lazy(() => import('./components/3290/Unified3290'));
const Unified3378 = lazy(() => import('./components/3378/Unified3378'));
const Unified3411 = lazy(() => import('./components/3411/Unified3411'));
const Unified3412 = lazy(() => import('./components/3412/Unified3412'));
const Unified3453 = lazy(() => import('./components/3453/Unified3453'));
const Unified3454 = lazy(() => import('./components/3454/Unified3454'));
const Unified3455 = lazy(() => import('./components/3455/Unified3455'));
const Unified3467 = lazy(() => import('./components/3467/Unified3467'));
const Unified3476 = lazy(() => import('./components/3476/Unified3476'));
const Unified3497 = lazy(() => import('./components/3497/Unified3497'));
const Unified3508 = lazy(() => import('./components/3508/Unified3508'));
const Unified3543 = lazy(() => import('./components/3543/Unified3543'));
const Unified3549 = lazy(() => import('./components/3549/Unified3549'));
const Unified3557 = lazy(() => import('./components/3557/Unified3557'));
const Unified3562 = lazy(() => import('./components/3562/Unified3562'));
const Unified3570 = lazy(() => import('./components/3570/Unified3570'));
const Unified3588 = lazy(() => import('./components/3588/Unified3588'));
const Unified3604 = lazy(() => import('./components/3604/Unified3604'));
const Unified3606 = lazy(() => import('./components/3606/Unified3606'));

// Semilleros
const UnifiedAutores = lazy(() => import('./components/Semilleros/UnifiedAutores'));
const UnifiedRevisores = lazy(() => import('./components/Semilleros/UnifiedRevisores'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [activeSubPage, setActiveSubPage] = useState<string | null>(null);
  
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // Inicio
    useRef<HTMLDivElement>(null), // Artículos
    useRef<HTMLDivElement>(null), // Semillero
    useRef<HTMLDivElement>(null), // Transmedia
    useRef<HTMLDivElement>(null), // Actualidad
    useRef<HTMLDivElement>(null), // Blog
    useRef<HTMLDivElement>(null)  // Contacto (Footer)
  ];

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.8,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    const observerOptions = {
      root: null,
      threshold: 0.25,
      rootMargin: "0px"
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.findIndex(ref => ref.current === entry.target);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      lenis.destroy();
      delete window.lenis;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Pausar Lenis cuando se abre un artículo y permitir scroll nativo
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const lenisInstance = (window as any).lenis;
    if (lenisInstance) {
      if (activeSubPage) {
        lenisInstance.stop();
      } else {
        lenisInstance.start();
      }
    }
  }, [activeSubPage]);

  const scrollToSection = (index: number) => {
    let targetIndex = index;
    if (index === 5) targetIndex = 6;

    const targetRef = sectionRefs[targetIndex];
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const lenisInstance = (window as any).lenis;
      if (lenisInstance) {
        lenisInstance.scrollTo(offsetTop);
      } else {
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }
  };

  const hardcodedArticleIds = [
    '3153','3198','3214','3290','3378','3411','3412',
    '3453','3454','3455','3467','3476','3497','3508',
    '3543','3549','3557','3562','3570','3588','3604','3606'
  ];

  return (
    <div className={`bg-zine-black selection:bg-zine-red selection:text-white overflow-x-hidden ${activeSubPage ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence>
        {activeSubPage && hardcodedArticleIds.includes(activeSubPage) && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto overscroll-none"
            data-lenis-prevent="true"
          >
            <Suspense fallback={<PageLoader />}>
              {activeSubPage === '3153' && <Unified3153 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3198' && <Unified3198 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3214' && <Unified3214 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3290' && <Unified3290 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3378' && <Unified3378 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3411' && <Unified3411 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3412' && <Unified3412 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3453' && <Unified3453 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3454' && <Unified3454 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3455' && <Unified3455 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3467' && <Unified3467 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3476' && <Unified3476 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3497' && <Unified3497 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3508' && <Unified3508 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3543' && <Unified3543 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3549' && <Unified3549 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3557' && <Unified3557 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3562' && <Unified3562 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3570' && <Unified3570 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3588' && <Unified3588 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3604' && <Unified3604 onBack={() => setActiveSubPage(null)} />}
              {activeSubPage === '3606' && <Unified3606 onBack={() => setActiveSubPage(null)} />}
            </Suspense>
          </motion.div>
        )}

        {activeSubPage === 'semillero_autores' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto overscroll-none"
            data-lenis-prevent="true"
          >
            <Suspense fallback={<PageLoader />}>
              <UnifiedAutores onBack={() => setActiveSubPage(null)} />
            </Suspense>
          </motion.div>
        )}

        {activeSubPage === 'semillero_editores' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto overscroll-none"
            data-lenis-prevent="true"
          >
            <Suspense fallback={<PageLoader />}>
              <UnifiedRevisores onBack={() => setActiveSubPage(null)} />
            </Suspense>
          </motion.div>
        )}

        {activeSubPage && 
          !hardcodedArticleIds.includes(activeSubPage) && 
          activeSubPage !== 'semillero_autores' && 
          activeSubPage !== 'semillero_revisores' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-zinc-950 overflow-y-auto overscroll-none"
            data-lenis-prevent="true"
          >
            <Suspense fallback={<PageLoader />}>
              <GenericInteractiveArticle id={activeSubPage} onBack={() => { setActiveSubPage(null); window.scrollTo(0, 0); }} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeSubPage && (
        <>
          <AlienCursor />
          <StatusBar currentSection={currentSection} />
          
          <Navbar 
            scrollToSection={scrollToSection} 
            currentSection={currentSection > 4 ? currentSection - 1 : currentSection} 
          />

          <main>
            <div ref={sectionRefs[0]} id="inicio">
              <Hero onExplore={() => scrollToSection(1)} />
            </div>

            <HeroToArticulosWave />

            <div ref={sectionRefs[1]} id="articulos">
              <Suspense fallback={<PageLoader />}>
                <ArticulosInteractivos onOpenArticle={(id) => setActiveSubPage(id)} />
              </Suspense>
            </div>

            <ArticulosToSemilleroWave />

            <div ref={sectionRefs[2]} id="semillero">
              <Suspense fallback={<PageLoader />}>
                <SemilleroAutores onOpenSubPage={(id) => setActiveSubPage(id)} />
              </Suspense>
            </div>

            <SemilleroToTransmediaWave />

            <div ref={sectionRefs[3]} id="transmedia">
              <Suspense fallback={<PageLoader />}>
                <Transmedia />
              </Suspense>
            </div>

            <TransmediaToActualidadWave />

            <div ref={sectionRefs[4]} id="actualidad">
              <Suspense fallback={<PageLoader />}>
                <BlogAndActualidad />
              </Suspense>
            </div>

            <ActualidadToBlogWave />

            <div ref={sectionRefs[5]} id="blog">
              <Suspense fallback={<PageLoader />}>
                <BlogSection />
              </Suspense>
            </div>

            <BlogToFooterWave />
          </main>

          <div ref={sectionRefs[6]} id="contacto">
            <Footer onBackToTop={() => scrollToSection(0)} />
          </div>
        </>
      )}

    </div>
  );
}
