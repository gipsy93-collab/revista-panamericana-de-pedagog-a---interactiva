import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Components cargados eager (necesarios para el render inicial)
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import { RocketCursor } from './components/RocketCursor';
import { StatusBar } from './components/StatusBar';
import { PageLoader } from './components/PageLoader';

// Components cargados lazy (code splitting por secciones)
const ArticulosInteractivos = lazy(() => import('./components/ArticulosInteractivos'));
const SemilleroAutores = lazy(() => import('./components/SemilleroAutores'));
const Transmedia = lazy(() => import('./components/Transmedia'));
const BlogSection = lazy(() => import('./components/BlogSection'));
const Unified3549 = lazy(() => import('./components/3549/Unified3549'));

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [activeSubPage, setActiveSubPage] = useState<string | null>(null);
  
  // Section refs for navigation
  const sectionRefs = [
    useRef<HTMLDivElement>(null), // Inicio
    useRef<HTMLDivElement>(null), // Artículos
    useRef<HTMLDivElement>(null), // Semillero
    useRef<HTMLDivElement>(null), // Transmedia
    useRef<HTMLDivElement>(null), // Actualidad
    useRef<HTMLDivElement>(null), // ¿Por qué RPP?
    useRef<HTMLDivElement>(null)  // Contacto (Footer)
  ];

  useEffect(() => {
    // Smooth Scroll Integration
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

    // Sync GSAP with Lenis
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    gsap.ticker.lagSmoothing(0);
    
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).lenis = lenis;

    // Initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800);

    // Section Observer
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

  const scrollToSection = (index: number) => {
    // Map index from Nav items [0-5] to Section Refs [0-6]
    let targetIndex = index;
    if (index === 5) targetIndex = 6;

    const targetRef = sectionRefs[targetIndex];
    if (targetRef?.current) {
      const offsetTop = targetRef.current.offsetTop;
      
      // Use Lenis for scrolling if available, or native
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

  return (
    <div className={`bg-zine-black selection:bg-zine-red selection:text-white overflow-x-hidden ${activeSubPage ? 'h-screen overflow-hidden' : ''}`}>
      <AnimatePresence>
        {isLoading && <LoadingScreen />}
        {activeSubPage === '3549' && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white overflow-y-auto"
          >
            <Suspense fallback={<PageLoader />}>
              <Unified3549 onBack={() => setActiveSubPage(null)} />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>

      {!activeSubPage && (
        <>
          <RocketCursor />
          <StatusBar currentSection={currentSection} />
          
          <Navbar 
            scrollToSection={scrollToSection} 
            currentSection={currentSection > 1 ? currentSection - 1 : currentSection} 
          />

          <main>
            <div ref={sectionRefs[0]} id="inicio">
              <Hero onExplore={() => scrollToSection(1)} />
            </div>

            <div ref={sectionRefs[1]} id="articulos">
              <Suspense fallback={<PageLoader />}>
                <ArticulosInteractivos 
                  onOpenArticle={(id) => {
                    if (id === '3549') setActiveSubPage('3549');
                  }} 
                />
              </Suspense>
            </div>

            <div ref={sectionRefs[2]} id="semillero">
              <Suspense fallback={<PageLoader />}>
                <SemilleroAutores />
              </Suspense>
            </div>

            <div ref={sectionRefs[4]} id="transmedia">
              <Suspense fallback={<PageLoader />}>
                <Transmedia />
              </Suspense>
            </div>

            <div ref={sectionRefs[5]} id="blog">
              <Suspense fallback={<PageLoader />}>
                <BlogSection />
              </Suspense>
            </div>
          </main>

          <div ref={sectionRefs[6]} id="contacto">
            <Footer onBackToTop={() => scrollToSection(0)} />
          </div>
        </>
      )}

    </div>
  );
}
