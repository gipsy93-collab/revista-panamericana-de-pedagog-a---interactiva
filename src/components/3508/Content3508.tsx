import { motion } from 'motion/react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie } from 'recharts';
import { ARTICLE_DATA } from './constants';
import { 
  BookOpen, 
  Users, 
  Info, 
  AlertTriangle, 
  MessageCircle, 
  CheckCircle, 
  Brain, 
  MapPin, 
  GraduationCap, 
  School,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

export default function Content3508() {
  return (
    <div className="bg-white">
      {/* SECCIÓN 1: INTRODUCCIÓN Y HALLAZGO */}
      <WaveSection topColor="#ffffff" bottomColor="#f0fdfa" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="I. IMPACTO CENTRAL" color="bg-black" className="text-white mb-6 !rotate-0 shadow-[6px_6px_0_0_#0d9488]" />
               <PremiumTitle subtitle="EVIDENCIA CUALITATIVA"> El Pulso del Aula </PremiumTitle>
            </div>
            
            <div className="lg:col-span-8">
              <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[30px_30px_0_0_#0d9488] rotate-1 relative group mb-12">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
                 <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-tight relative z-10">
                   "{ARTICLE_DATA.centralFinding}"
                 </p>
              </div>
              
              <div className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#fde047] -rotate-1">
                 <h4 className="font-display text-2xl uppercase font-black mb-6 flex items-center gap-3">
                    <Target className="text-teal-600" /> Contexto_
                 </h4>
                 <p className="text-3xl font-display uppercase font-black tracking-tighter leading-none italic">
                    {ARTICLE_DATA.introduction.context}
                 </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-8">
              <CinematicCard color="bg-zinc-50" title="PROBLEMATICA" icon={AlertTriangle} className="shadow-[10px_10px_0_0_#000]">
                 <p className="text-lg font-bold leading-snug">"{ARTICLE_DATA.introduction.problem}"</p>
              </CinematicCard>
              
              <div className="bg-teal-600 text-white p-10 border-4 border-black shadow-[8px_8px_0_0_#000] rotate-2">
                 <h4 className="font-mono text-[10px] uppercase font-black mb-6 tracking-widest opacity-60">RESULTADOS_MUESTRA</h4>
                 <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={ARTICLE_DATA.results.sampleData}>
                        <XAxis dataKey="name" hide />
                        <Tooltip contentStyle={{ backgroundColor: '#000', border: 'none', color: '#fff' }} />
                        <Bar dataKey="value" fill="#fff" stroke="#000" strokeWidth={2}>
                          <Cell fill="#fde047" />
                          <Cell fill="#fff" />
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                 </div>
                 <p className="mt-4 font-display uppercase font-black text-xs text-center italic tracking-tighter">Comparativa España (1) vs Ecuador (2)</p>
              </div>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 2: METODOLOGÍA */}
      <WaveSection topColor="#f0fdfa" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="II. METODOLOGÍA" color="bg-teal-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="DISEÑO DE INVESTIGACIÓN">Rigor Cualitativo</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div className="bg-zinc-900 border-[12px] border-black p-12 md:p-20 shadow-[30px_30px_0_0_#fde047] rotate-1">
                <h3 className="text-teal-400 font-display text-5xl font-black italic uppercase mb-12 leading-none">Muestra_N10</h3>
                <div className="grid grid-cols-2 gap-10">
                   {[
                     { label: "ESPAÑA", val: ARTICLE_DATA.methodology.sample.spain, icon: MapPin },
                     { label: "ECUADOR", val: ARTICLE_DATA.methodology.sample.ecuador, icon: MapPin },
                     { label: "TOTAL", val: ARTICLE_DATA.methodology.sample.total, icon: Users },
                     { label: "EXP", val: "3+ Años", icon: Zap }
                   ].map((it, i) => (
                     <div key={i} className="flex flex-col">
                        <it.icon className="text-white mb-4" size={32} />
                        <span className="font-display text-4xl font-black text-white">{it.val}</span>
                        <span className="font-mono text-[9px] uppercase tracking-widest text-teal-400 font-black">{it.label}</span>
                     </div>
                   ))}
                </div>
             </div>

             <div className="space-y-10">
                <div className="bg-white border-8 border-black p-12 shadow-[20px_20px_0_0_#000] rotate-[-1deg]">
                   <h4 className="font-display text-2xl uppercase font-black mb-6 italic underline decoration-teal-600">Tipo_de_Estudio</h4>
                   <p className="text-3xl font-display uppercase font-black tracking-tight leading-none text-black/80">
                      {ARTICLE_DATA.methodology.type}
                   </p>
                </div>
                <div className="bg-teal-50 border-4 border-black border-dashed p-10">
                   <h4 className="font-display text-xl uppercase font-black mb-6">Demografía_Key</h4>
                   <ul className="space-y-4">
                      {["60% Muj. / 40% Var.", "60% Diplomado / 30% Máster", "70% Centro Público"].map((d, i) => (
                        <li key={i} className="flex items-center gap-4 font-mono text-xs uppercase font-black">
                           <span className="w-6 h-6 bg-black text-white flex items-center justify-center italic">▶</span> {d}
                        </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 3: COMPARATIVO PAÍSES */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="III. COMPARATIVA" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#fde047]" />
            <PremiumTitle className="items-center" subtitle="TENSIONES BINACIONALES">España vs Ecuador</PremiumTitle>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Prioridad_Op', data: ARTICLE_DATA.results.spainVsEcuador.priority, color: 'bg-teal-600' },
               { title: 'Enfoque_In', data: ARTICLE_DATA.results.spainVsEcuador.focus, color: 'bg-zinc-900' },
               { title: 'Adaptación_Ad', data: ARTICLE_DATA.results.spainVsEcuador.adaptation, color: 'bg-amber-400' },
             ].map((card, i) => (
               <div key={i} className="group relative">
                  <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 transition-transform group-hover:translate-x-5 group-hover:translate-y-5" />
                  <div className="relative bg-white border-4 border-black p-10 h-full flex flex-col">
                     <h4 className="font-display text-3xl uppercase font-black mb-10 italic border-b-4 border-black pb-2">{card.title}</h4>
                     
                     <div className="flex-1 space-y-8">
                        <div>
                           <span className="font-mono text-[10px] uppercase font-black tracking-[0.3em] block mb-2 text-teal-600">ECUADOR_VIEW</span>
                           <p className="text-lg font-serif italic text-black/70 leading-snug">"{card.data.ecuador}"</p>
                        </div>
                        <div className="h-0.5 w-full bg-zinc-100" />
                        <div>
                           <span className="font-mono text-[10px] uppercase font-black tracking-[0.3em] block mb-2 text-zinc-400">ESPAÑA_VIEW</span>
                           <p className="text-lg font-serif italic text-black/70 leading-snug">"{card.data.spain}"</p>
                        </div>
                     </div>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 4: BARRERAS Y STATS */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 items-start">
             <div className="lg:col-span-12 mb-12">
               <BrutalSticker text="IV. EVIDENCIA" color="bg-rose-600" className="text-white mb-6 !rotate-0" />
               <PremiumTitle subtitle="OBSTÁCULOS Y MÉTRICAS">Barreras & Stats</PremiumTitle>
             </div>

             <div className="lg:col-span-7 space-y-10">
                {ARTICLE_DATA.results.barriers.map((b, i) => (
                  <div key={i} className="bg-white border-8 border-black p-10 shadow-[15px_15px_0_0_#000] rotate-1 group">
                     <h3 className="font-display text-3xl uppercase font-black mb-4 text-rose-600 group-hover:translate-x-2 transition-transform">__{b.title}</h3>
                     <p className="text-2xl font-serif italic text-black/70 leading-relaxed font-medium">"{b.desc}"</p>
                  </div>
                ))}
             </div>

             <div className="lg:col-span-5 grid grid-cols-1 gap-8">
                {ARTICLE_DATA.results.keyStats.map((stat, i) => (
                  <div key={i} className="bg-zinc-900 text-white p-12 border-8 border-black shadow-[15px_15px_0_0_#fde047] -rotate-1 relative overflow-hidden group">
                     <div className="absolute -bottom-8 -right-8 p-12 bg-white/5 rounded-full group-hover:scale-125 transition-transform" />
                     <div className="text-8xl font-display font-black text-teal-400 mb-2 italic leading-none">{stat.value}</div>
                     <p className="font-display text-xl uppercase font-black leading-none mb-4">{stat.label}</p>
                     <p className="font-mono text-[10px] uppercase font-black opacity-30 italic tracking-widest">{stat.note}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN 5: VOCES DEL AULA */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="V. NARRATIVAS" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#fde047]" />
            <PremiumTitle className="items-center" subtitle="TESTIMONIOS DOCENTES">Voces del Aula</PremiumTitle>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
             {ARTICLE_DATA.quotes.map((q, i) => (
               <BrutalQuote key={i} className={`text-2xl shadow-[15px_15px_0_0_#000] rotate-${i % 2 === 0 ? '1' : '-1'}`}>
                  "{q.text}"
                  <div className="mt-8 text-right font-display uppercase font-black text-sm text-teal-600">_ {q.author}</div>
               </BrutalQuote>
             ))}
          </div>
        </div>
      </WaveSection>

      {/* SECCIÓN FINAL: CONCLUSIONES */}
      <WaveSection topColor="#ffffff" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
              <div className="bg-teal-600 text-white p-16 md:p-32 border-[24px] border-black shadow-[50px_50px_0_0_#000] -rotate-2 relative group overflow-hidden">
                 <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-[0.7] mb-12 italic drop-shadow-[10px_10px_0_0_#000]">
                   Voluntad_ Docente_
                 </h2>
              </div>
              
              <div className="space-y-12">
                 <BrutalSticker text="VI. CONCLUSIONES" color="bg-black" className="text-white mb-8 !rotate-0" />
                 <div className="space-y-10">
                    {ARTICLE_DATA.conclusions.map((c, i) => (
                      <div key={i} className="flex gap-8 group">
                         <div className="w-16 h-16 bg-white border-4 border-black text-black shrink-0 flex items-center justify-center font-display text-4xl font-black group-hover:bg-teal-600 group-hover:text-white transition-all italic">{i+1}</div>
                         <p className="text-3xl font-serif italic text-black/80 font-medium leading-tight">"{c}"</p>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className="bg-zinc-950 text-white p-20 border-[12px] border-black text-center relative overflow-hidden shadow-[30px_30px_0_0_#ef4444]">
              <div className="absolute top-0 left-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black">AUTISM_INCLUSION_REPORT_3508</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-none mb-12 italic">
                La inclusión <span className="text-teal-400">no es negociable</span>, es una <span className="text-rose-600">deuda histórica</span>.
              </p>
              <div className="w-64 h-4 bg-teal-600 mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
}
