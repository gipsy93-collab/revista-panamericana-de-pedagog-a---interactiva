import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../../LanguageContext';
import { BrutalCard, BrutalQuote, BrutalSticker } from '../BrutalistLib';
import { BookOpen, Users, Calendar, Target, Lightbulb, BarChart3, MessageCircle, AlertTriangle, CheckCircle } from 'lucide-react';

export const IntroSection: React.FC = () => {
  const { t } = useLanguage();
  const s = t.saborio.intro;

  return (
    <section className="py-32 px-6 bg-white border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Contexto y Problemática */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <BrutalSticker text={s.title} color="bg-[#6C63FF]" className="text-white !rotate-0" />
            <p className="text-xl font-sans text-black/80 leading-relaxed">
              {s.context}
            </p>
            <div className="p-6 bg-[#f5f5f5] border-l-8 border-[#6C63FF]">
              <p className="text-lg font-serif italic text-black/70">
                {s.problem}
              </p>
            </div>
          </div>
          <div className="space-y-8">
            <BrutalQuote author="Pregunta de Investigación">
              {s.research_question}
            </BrutalQuote>
            <p className="text-2xl font-bold text-[#6C63FF] uppercase">
              {s.solution}
            </p>
          </div>
        </div>

        {/* Objetivos */}
        <div className="bg-black text-white p-12 border-8 border-[#6C63FF]">
          <h3 className="text-3xl font-pop uppercase mb-8 flex items-center gap-4">
            <Target className="text-[#6C63FF]" />
            Objetivos del Estudio
          </h3>
          <ul className="space-y-4">
            {s.objectives.map((obj: string, idx: number) => (
              <li key={idx} className="flex items-start gap-4 text-lg">
                <span className="w-8 h-8 bg-[#6C63FF] flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </span>
                {obj}
              </li>
            ))}
          </ul>
        </div>

        {/* Marco Teórico */}
        <div className="space-y-8">
          <h3 className="text-4xl font-pop uppercase text-black">Marco Teórico</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <BrutalCard color="bg-[#00D9FF]" className="p-6">
              <BookOpen className="w-8 h-8 mb-4 text-black" />
              <h4 className="font-bold text-lg mb-2">Aprendizaje Activo</h4>
              <p className="text-sm text-black/80">{s.theoretical_framework.active_learning}</p>
            </BrutalCard>
            <BrutalCard color="bg-[#6C63FF]" className="p-6 text-white">
              <Lightbulb className="w-8 h-8 mb-4" />
              <h4 className="font-bold text-lg mb-2">Paisajes de Aprendizaje</h4>
              <p className="text-sm text-white/80">{s.theoretical_framework.learning_landscapes}</p>
            </BrutalCard>
            <BrutalCard color="bg-[#fccb06]" className="p-6">
              <BarChart3 className="w-8 h-8 mb-4 text-black" />
              <h4 className="font-bold text-lg mb-2">Taxonomía de Bloom</h4>
              <p className="text-sm text-black/80">{s.theoretical_framework.bloom}</p>
            </BrutalCard>
          </div>
        </div>

        {/* Cita Central */}
        <div className="text-center max-w-4xl mx-auto">
          <BrutalQuote>
            {s.central_quote}
          </BrutalQuote>
        </div>
      </div>
    </section>
  );
};

export const MethodologyLab: React.FC = () => {
  const { t } = useLanguage();
  const s = t.saborio.methodology;

  return (
    <section className="py-32 px-6 bg-[#00D9FF] border-b-[12px] border-black overflow-hidden relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex items-center gap-6">
           <div className="w-32 h-32 bg-black flex items-center justify-center text-white shrink-0">
              <span className="text-6xl font-pop uppercase">M</span>
           </div>
           <div className="space-y-2">
              <h2 className="text-7xl font-pop uppercase text-black italic leading-none">{s.title}</h2>
              <p className="text-2xl font-pop text-white bg-black px-4 py-1 font-bold uppercase tracking-widest inline-block">
                {s.design}
              </p>
           </div>
        </div>

        {/* Tipo de estudio y muestra */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <BrutalCard color="bg-white" className="p-8">
            <h3 className="text-2xl font-pop uppercase mb-4 flex items-center gap-3">
              <Users className="text-[#6C63FF]" />
              Participantes
            </h3>
            <div className="space-y-4">
              <div className="text-5xl font-pop text-black">09</div>
              <p className="text-lg text-black/80">{s.sample}</p>
              <ul className="space-y-2 text-sm text-black/60">
                {s.characteristics.map((char: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#6C63FF] mt-1.5 shrink-0" />
                    {char}
                  </li>
                ))}
              </ul>
            </div>
          </BrutalCard>

          <BrutalCard color="bg-black" className="p-8 text-white">
            <h3 className="text-2xl font-pop uppercase mb-4 flex items-center gap-3 text-[#00D9FF]">
              <Calendar className="text-[#00D9FF]" />
              Duración
            </h3>
            <div className="text-4xl font-pop text-[#00D9FF] mb-4">12 SEMANAS</div>
            <p className="text-white/80 mb-6">{s.duration}</p>
            <div className="h-1 w-full bg-[#00D9FF] mb-2" />
            <p className="text-xs text-white/50 uppercase">{s.tools}</p>
          </BrutalCard>
        </div>

        {/* Instrumentos */}
        <div className="bg-white border-4 border-black p-8 mb-8">
          <h3 className="text-3xl font-pop uppercase mb-8">Instrumentos de Recolección</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {s.instruments.map((inst: {name: string, desc: string}, idx: number) => (
              <div key={idx} className="border-2 border-black p-6">
                <div className="w-10 h-10 bg-[#6C63FF] text-white flex items-center justify-center font-bold mb-4">
                  {idx + 1}
                </div>
                <h4 className="font-bold text-lg mb-2">{inst.name}</h4>
                <p className="text-sm text-black/70">{inst.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Procedimiento */}
        <div className="bg-[#6C63FF] border-4 border-black p-8">
          <h3 className="text-3xl font-pop uppercase mb-8 text-white">Procedimiento (4 Etapas)</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {s.procedure.map((step: string, idx: number) => (
              <div key={idx} className="bg-white border-2 border-black p-4 flex items-start gap-4">
                <span className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </span>
                <p className="text-sm text-black/80">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const ResultsSection: React.FC = () => {
  const { t } = useLanguage();
  const s = t.saborio.results;

  return (
    <section className="py-32 px-6 bg-white border-b-[12px] border-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-8xl font-pop uppercase text-black mb-8 text-center leading-none" style={{ WebkitTextStroke: '2px black' }}>
          {s.title}
        </h2>
        
        <p className="text-xl text-center text-black/70 max-w-3xl mx-auto mb-16">
          {s.main_finding}
        </p>

        {/* Comparación Pre vs Post */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Pre-implementación */}
          <div className="bg-[#f5f5f5] border-4 border-black p-8">
            <h3 className="text-2xl font-pop uppercase mb-6 text-black/60">Pre-Implementación</h3>
            <div className="space-y-4">
              {s.pre_implementation.map((item: {indicator: string, value: string}, idx: number) => (
                <div key={idx} className="flex justify-between items-center border-b border-black/10 pb-2">
                  <span className="text-sm text-black/70">{item.indicator}</span>
                  <span className={`font-bold ${item.value === '100% NUNCA' ? 'text-[#e81e61] text-xl' : 'text-black'}`}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Post-implementación */}
          <div className="bg-[#4ECB71] border-4 border-black p-8 shadow-[8px_8px_0_#000]">
            <h3 className="text-2xl font-pop uppercase mb-6 text-black">Post-Implementación</h3>
            <div className="space-y-4">
              {s.post_implementation.map((item: {indicator: string, value: string}, idx: number) => (
                <div key={idx} className="flex justify-between items-center border-b border-black/20 pb-2">
                  <span className="text-sm text-black/80">{item.indicator}</span>
                  <span className="font-bold text-black text-xl">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Gráficos de barras visuales */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="border-[6px] border-black p-8 bg-[#fccb06] shadow-[15px_15px_0_#000]">
             <div className="flex justify-between items-end mb-4">
                <span className="font-pop text-2xl uppercase">Participación Pre</span>
                <span className="text-5xl font-pop">33.3%</span>
             </div>
             <div className="h-10 w-full bg-black border-4 border-black">
                <div className="h-full bg-white opacity-40 w-[33.3%]" />
             </div>
          </div>
          <div className="border-[6px] border-black p-8 bg-[#4ECB71] shadow-[15px_15px_0_#000]">
             <div className="flex justify-between items-end mb-4">
                <span className="font-pop text-2xl uppercase">Participación Post</span>
                <span className="text-5xl font-pop">57.1%</span>
             </div>
             <div className="h-10 w-full bg-black border-4 border-black">
                <div className="h-full bg-white w-[57.1%]" />
             </div>
             <p className="mt-4 font-pop text-sm uppercase text-right opacity-80">
               +23.8 puntos porcentuales
             </p>
          </div>
        </div>

        {/* Características del diseño */}
        <div className="bg-black text-white p-8 mb-12">
          <h3 className="text-2xl font-pop uppercase mb-6 text-[#00D9FF]">Características del Paisaje Diseñado</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {s.design_features.map((feature: string, idx: number) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00D9FF] shrink-0 mt-0.5" />
                <span className="text-sm text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Caso TDAH */}
        <div className="bg-[#6C63FF] border-4 border-black p-8 mb-12 text-white">
          <div className="flex items-start gap-6">
            <MessageCircle className="w-12 h-12 shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Inclusión y Diversidad Neurológica</h3>
              <p className="text-lg font-serif italic">{s.tdah_note}</p>
            </div>
          </div>
        </div>

        {/* Categorías de respuesta */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {s.categories.map((cat: {name: string, desc: string}, idx: number) => (
            <BrutalCard key={idx} color={idx % 2 === 0 ? "bg-[#f5f5f5]" : "bg-white"} className="p-6">
              <h4 className="font-bold text-lg mb-2 text-[#6C63FF]">{cat.name}</h4>
              <p className="text-sm text-black/70">{cat.desc}</p>
            </BrutalCard>
          ))}
        </div>

        {/* Voces del Estudio */}
        <div className="mb-12">
          <h3 className="text-2xl font-pop uppercase mb-6 text-black">Voces del Estudio</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {s.studentVoices.map((voice: string, idx: number) => (
              <BrutalCard key={idx} color="bg-[#f5f5f5]" className="p-6 border-l-[8px] border-[#4ECB71]">
                <p className="text-lg font-serif italic text-black/80">"{voice}"</p>
              </BrutalCard>
            ))}
          </div>
        </div>

        {/* El Dato que Duele */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
           <BrutalCard color="bg-[#e81e61]" className="text-white p-12 rotate-[-1deg] border-4 border-black shadow-[15px_15px_0_#000]">
              <AlertTriangle className="w-16 h-16 mx-auto mb-4" />
              <p className="text-2xl font-black uppercase mb-4">Paradoja Formativa</p>
              <p className="text-xl font-serif italic leading-relaxed">
                {s.the_hurtful_fact}
              </p>
           </BrutalCard>
        </div>
      </div>
    </section>
  );
};

export const DiscussionSection: React.FC = () => {
  const { t } = useLanguage();
  const s = t.saborio.discussion;
  const c = t.saborio.conclusions;

  return (
    <section className="py-32 px-6 bg-[#6C63FF] text-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto space-y-24">
        
        {/* Título principal */}
        <h2 className="text-[8rem] font-pop uppercase leading-none text-center text-black" style={{ WebkitTextStroke: '3px white' }}>
          {s.title}
        </h2>

        {/* Interpretación */}
        <div className="bg-white text-black p-12 border-8 border-black shadow-[20px_20px_0_#000]">
          <h3 className="text-3xl font-pop uppercase mb-6 text-[#6C63FF]">Interpretación de Hallazgos</h3>
          <p className="text-xl leading-relaxed mb-6">{s.interpretation}</p>
          <p className="text-lg font-serif italic text-black/70">{s.metaphor}</p>
        </div>

        {/* Estudios relacionados */}
        <div className="grid md:grid-cols-3 gap-6">
          {s.related_studies.map((study: {author: string, finding: string}, idx: number) => (
            <BrutalCard key={idx} color="bg-black" className="p-6 text-white border-4 border-white">
              <h4 className="font-bold text-[#00D9FF] mb-2">{study.author}</h4>
              <p className="text-sm text-white/80">{study.finding}</p>
            </BrutalCard>
          ))}
        </div>

        {/* Implicaciones prácticas */}
        <div className="bg-[#00D9FF] border-4 border-black p-8 text-black">
          <h3 className="text-3xl font-pop uppercase mb-8">Implicaciones Prácticas</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border-2 border-black p-6">
              <h4 className="font-bold text-lg mb-2">Para Docentes</h4>
              <p className="text-sm text-black/70">{s.practical_implications.teachers}</p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <h4 className="font-bold text-lg mb-2">Para Diseñadores</h4>
              <p className="text-sm text-black/70">{s.practical_implications.designers}</p>
            </div>
            <div className="bg-white border-2 border-black p-6">
              <h4 className="font-bold text-lg mb-2">Para Instituciones</h4>
              <p className="text-sm text-black/70">{s.practical_implications.institutions}</p>
            </div>
          </div>
        </div>

        {/* Limitaciones */}
        <div className="bg-black border-4 border-white p-8">
          <h3 className="text-2xl font-pop uppercase mb-6 text-[#e81e61]">Limitaciones del Estudio</h3>
          <ul className="space-y-3">
            {s.limitations.map((lim: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3 text-white/80">
                <span className="w-2 h-2 bg-[#e81e61] mt-2 shrink-0" />
                {lim}
              </li>
            ))}
          </ul>
        </div>

        {/* Conclusiones */}
        <div className="bg-white text-black p-12 border-8 border-black">
          <h3 className="text-4xl font-pop uppercase mb-8 text-center">Conclusiones</h3>
          <p className="text-2xl font-serif italic text-center mb-12">{c.main}</p>
          
          <div className="space-y-6 mb-12">
            {c.author_quotes.map((quote: string, idx: number) => (
              <div key={idx} className="border-l-4 border-[#6C63FF] pl-6">
                <p className="text-lg font-serif italic text-black/70">"{quote}"</p>
              </div>
            ))}
          </div>

          <div className="bg-[#fccb06] border-4 border-black p-6">
            <h4 className="font-bold text-lg mb-4">Recomendaciones</h4>
            <ul className="space-y-2">
              {c.recommendations.map((rec: string, idx: number) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="w-6 h-6 bg-black text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {idx + 1}
                  </span>
                  {rec}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pensamiento final */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-3xl font-serif italic leading-relaxed">
            "{s.final_thought}"
          </p>
        </div>
      </div>
    </section>
  );
};
