import { useState, useEffect } from 'react';
import { ArrowLeft, BookOpen, FileQuestion } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Hero3562 from './Hero3562';
import Content3562 from './Content3562';
import Quiz3562 from './Quiz3562';
import { FilmGrain } from '../FilmGrain';

interface Props {
  onBack: () => void;
}

type Tab = 'content' | 'quiz';

export default function Unified3562({ onBack }: Props) {
  const [started, setStarted] = useState(false);
  const [tab, setTab] = useState<Tab>('content');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 relative selection:bg-rose-600 selection:text-white overflow-x-hidden">
      <FilmGrain />
      
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-rose-600 transition-colors shadow-[4px_4px_0_0_#000] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>

          {started && (
            <nav className="flex items-center gap-4">
              <button
                onClick={() => setTab('content')}
                className={`flex items-center gap-2 px-6 py-3 border-4 border-black font-display uppercase text-xs font-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
                  tab === 'content'
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-black hover:bg-rose-100'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                Contenido
              </button>
              <button
                onClick={() => setTab('quiz')}
                className={`flex items-center gap-2 px-6 py-3 border-4 border-black font-display uppercase text-xs font-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] ${
                  tab === 'quiz'
                    ? 'bg-rose-600 text-white'
                    : 'bg-white text-black hover:bg-rose-100'
                }`}
              >
                <FileQuestion className="w-4 h-4" />
                Quiz
              </button>
            </nav>
          )}
        </div>
      </header>

      <main className="pt-20">
        {!started ? (
          <Hero3562 onStart={() => setStarted(true)} />
        ) : (
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              {tab === 'content' ? <Content3562 /> : <Quiz3562 />}
            </motion.div>
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
