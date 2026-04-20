import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle, TrendingUp } from 'lucide-react';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import { loadArticles, ICON_MAP, type ArticleData, type QuizQuestion } from '../lib/contentLoader';

interface Props {
  id: string;
  onBack: () => void;
}

export default function GenericInteractiveArticle({ id, onBack }: Props) {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [quizStep, setQuizStep] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    loadArticles().then((items) => {
      const found = items.find((a) => a.id === id);
      setArticle(found || null);
      setLoading(false);
    });
  }, [id]);

  const handleQuizAnswer = (optionIndex: number) => {
    if (!article?.quizQuestions) return;
    const newAnswers = [...quizAnswers, optionIndex];
    setQuizAnswers(newAnswers);
    if (newAnswers.length >= article.quizQuestions.length) {
      setQuizFinished(true);
    } else {
      setQuizStep((s) => s + 1);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setQuizAnswers([]);
    setQuizFinished(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-zine-black text-white flex items-center justify-center">
        <div className="text-4xl font-display uppercase animate-pulse">Cargando artículo...</div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-zine-black text-white flex flex-col items-center justify-center p-8">
        <div className="text-5xl font-display uppercase mb-6 text-zine-red">Artículo no encontrado</div>
        <p className="text-white/60 mb-8">El contenido solicitado no está disponible en el CMS.</p>
        <button onClick={onBack} className="px-8 py-4 bg-white text-black font-display uppercase hover:bg-pop-yellow transition-all">
          Volver
        </button>
      </div>
    );
  }

  const Icon = ICON_MAP[article.icon] || TrendingUp;
  const hasQuiz = article.quizQuestions && article.quizQuestions.length > 0;
  const correctCount = hasQuiz
    ? article.quizQuestions!.filter((q, i) => quizAnswers[i] === q.correctIndex).length
    : 0;

  return (
    <div className="min-h-screen bg-zine-black text-white pb-32">
      {/* Sticky Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={onBack}
          className="flex items-center gap-3 px-6 py-3 bg-white text-black font-display uppercase border-4 border-black shadow-[6px_6px_0_#000] hover:bg-pop-yellow hover:shadow-[8px_8px_0_#000] transition-all"
        >
          <ArrowLeft size={20} /> Volver
        </button>
      </div>

      {/* Hero */}
      <header className={`${article.color} ${article.text} pt-32 pb-20 px-6 md:px-12 lg:px-24 border-b-8 border-black`}>
        <div className="container mx-auto max-w-5xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] font-black uppercase tracking-[0.2em] bg-black/30 px-4 py-2 rounded-lg">
              {article.tag}
            </span>
            <span className="font-mono text-[10px] opacity-60">{article.volume} • {article.date}</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-16">
            <div className="flex-1">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.85] mb-6">
                {article.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-sans font-medium opacity-80 leading-snug">
                {article.subtitle}
              </h2>
            </div>
            <div className="shrink-0">
              <div className="w-28 h-28 md:w-36 md:h-36 bg-white/10 rounded-full flex items-center justify-center border-4 border-white/20">
                <Icon size={64} strokeWidth={1.5} />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-sm font-bold uppercase tracking-widest">{article.author}</p>
            <p className="font-mono text-xs opacity-60">DOI: {article.doi}</p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto max-w-4xl px-6 md:px-12 lg:px-24 pt-16">
        <div
          className="prose prose-invert prose-lg max-w-none font-sans leading-relaxed text-white/90"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked.parse(article.body || article.abstract || '') as string) }}
        />

        {/* Quiz Section */}
        {hasQuiz && (
          <div className="mt-24 p-8 md:p-12 bg-zine-black border-4 border-white/10 rounded-3xl">
            <h3 className="text-3xl font-display uppercase mb-8 flex items-center gap-3">
              <TrendingUp className="text-pop-yellow" /> Quiz Interactivo
            </h3>

            {!quizFinished ? (
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-white/40">
                    Pregunta {quizStep + 1} de {article.quizQuestions!.length}
                  </span>
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-pop-yellow transition-all"
                      style={{ width: `${((quizStep) / article.quizQuestions!.length) * 100}%` }}
                    />
                  </div>
                </div>

                <motion.div
                  key={quizStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <p className="text-xl md:text-2xl font-medium">
                    {article.quizQuestions![quizStep].question}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {article.quizQuestions![quizStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        className="p-6 text-left bg-white/5 border-2 border-white/10 rounded-xl hover:bg-pop-yellow hover:text-black hover:border-pop-yellow transition-all font-medium"
                      >
                        <span className="font-mono text-xs uppercase opacity-60 mr-3">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center space-y-6">
                <div className="text-6xl font-display uppercase">
                  {correctCount === article.quizQuestions!.length ? (
                    <span className="text-emerald-400">¡Excelente!</span>
                  ) : correctCount >= article.quizQuestions!.length / 2 ? (
                    <span className="text-pop-yellow">¡Bien hecho!</span>
                  ) : (
                    <span className="text-zine-red">Sigue practicando</span>
                  )}
                </div>
                <p className="text-xl text-white/70">
                  Acertaste <span className="font-bold text-white">{correctCount}</span> de{' '}
                  <span className="font-bold text-white">{article.quizQuestions!.length}</span> preguntas.
                </p>

                <div className="space-y-4 max-w-2xl mx-auto text-left">
                  {article.quizQuestions!.map((q, i) => {
                    const isCorrect = quizAnswers[i] === q.correctIndex;
                    return (
                      <div
                        key={i}
                        className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
                          isCorrect ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-zine-red/30 bg-zine-red/10'
                        }`}
                      >
                        {isCorrect ? <CheckCircle2 className="text-emerald-400 shrink-0" /> : <XCircle className="text-zine-red shrink-0" />}
                        <div>
                          <p className="font-medium">{q.question}</p>
                          <p className="text-sm text-white/60 mt-1">
                            Tu respuesta: {q.options[quizAnswers[i]]} • Correcta: {q.options[q.correctIndex]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={resetQuiz}
                  className="mt-8 px-8 py-4 bg-white text-black font-display uppercase hover:bg-pop-yellow transition-all"
                >
                  Reintentar Quiz
                </button>
              </motion.div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
