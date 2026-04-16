import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  BookOpen, 
  Scale, 
  FileText, 
  BarChart3, 
  MessageCircle, 
  CheckCircle, 
  AlertTriangle,
  Zap,
  TrendingDown,
  Target
} from 'lucide-react';
import { ARTICLE_SECTIONS, RELIABILITY_DATA, VALIDITY_DATA, CENTRAL_FINDING } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote } from '../BrutalistLib';

const icons = [FileText, BookOpen, Scale, BarChart3, MessageCircle, AlertTriangle, CheckCircle];

export default function Sections3588() {
  return (
    <div className="bg-white">
      {/* Hallazgo Central */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="wavy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <BrutalSticker text="CORE FINDING" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="RELEVANCIA ESTADÍSTICA">
              {CENTRAL_FINDING.title}
            </PremiumTitle>
          </div>
          
          <div className="bg-zinc-900 p-12 md:p-24 border-[16px] border-black shadow-[40px_40px_0_0_#be123c] rotate-1 relative group overflow-hidden">
             <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
             <p className="text-3xl md:text-5xl font-serif italic text-white/90 leading-relaxed mb-12 relative z-10">
               "{CENTRAL_FINDING.text}"
             </p>
             <div className="flex items-center gap-6 relative z-10">
                <div className="h-4 w-32 bg-rose-600" />
                <p className="text-4xl md:text-6xl font-display uppercase font-black tracking-tighter text-white">
                   {CENTRAL_FINDING.highlight}
                </p>
             </div>
          </div>
        </div>
      </WaveSection>

      {/* Secciones del Artículo */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="steps">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-40">
            {ARTICLE_SECTIONS.map((section, idx) => {
              const Icon = icons[idx] || FileText;
              const isEven = idx % 2 === 0;
              return (
                <div key={section.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-stretch`}>
                   <div className="lg:w-1/2 flex flex-col justify-center">
                      <div className="mb-8">
                         <span className="font-display text-8xl font-black text-rose-600/10 block leading-none">0{idx + 1}</span>
                         <h3 className="font-display text-4xl md:text-5xl uppercase font-black tracking-tighter leading-none -mt-8 relative z-10">
                           {section.title}
                         </h3>
                      </div>
                      <p className="text-2xl font-serif italic text-black/70 leading-relaxed mb-10">
                        {section.content}
                      </p>
                      {section.quote && (
                        <BrutalQuote className="border-rose-600 text-xl font-bold italic shadow-[8px_8px_0_0_#000]">
                          "{section.quote}"
                        </BrutalQuote>
                      )}
                   </div>
                   
                   <div className="lg:w-1/2">
                      <CinematicCard color="bg-white" title={`ANALYSIS_VIEW_${idx}`} className={`h-full shadow-[20px_20px_0_0_#000] ${isEven ? 'rotate-1' : '-rotate-1'}`}>
                         <div className="flex flex-col items-center justify-center p-12 border-4 border-black border-dashed h-full min-h-[300px]">
                            <Icon size={120} className="text-rose-600 mb-8 opacity-20" />
                            <div className="bg-black text-white px-6 py-2 font-mono text-xs uppercase font-black tracking-[0.3em]">
                               REF_3588_SYS_{idx}
                            </div>
                         </div>
                      </CinematicCard>
                   </div>
                </div>
              );
            })}
          </div>
        </div>
      </WaveSection>

      {/* Tablas de Datos Neobrutalistas */}
      <WaveSection topColor="#ffffff" bottomColor="#000000" variant="dramatic">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="METRIC DATA" color="bg-black" className="text-white mb-8 !rotate-0 shadow-[6px_6px_0_0_#fde047]" />
            <PremiumTitle className="items-center" subtitle="RIGOR PSICOMÉTRICO">Valores de Validación</PremiumTitle>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Reliability Table */}
            <div className="bg-white border-8 border-black p-10 shadow-[20px_20px_0_0_#be123c] rotate-1">
              <div className="flex items-center gap-6 mb-10">
                <BarChart3 className="text-rose-600 w-12 h-12" />
                <h3 className="font-display text-3xl uppercase font-black italic border-b-4 border-black pb-2">Confiabilidad_</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-display uppercase font-black text-xs">
                  <thead>
                    <tr className="border-b-4 border-black">
                      <th className="py-4">Dimensión</th>
                      <th className="py-4">α CRONBACH</th>
                      <th className="py-4">ω MCDONALD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {RELIABILITY_DATA.map((row, i) => (
                      <tr key={i} className="border-b-2 border-zinc-100 hover:bg-rose-50 transition-colors group">
                        <td className="py-5 font-mono text-[10px] pr-4">{row.dimension}</td>
                        <td className="py-5 text-lg text-rose-600">{row.alpha.toFixed(3)}</td>
                        <td className="py-5 text-lg text-black">{row.omega.toFixed(3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Validity Table */}
            <div className="bg-white border-8 border-black p-10 shadow-[20px_20px_0_0_#fde047] -rotate-1">
              <div className="flex items-center gap-6 mb-10">
                <Scale className="text-orange-500 w-12 h-12" />
                <h3 className="font-display text-3xl uppercase font-black italic border-b-4 border-black pb-2">Validez_C_</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left font-display uppercase font-black text-xs">
                  <thead>
                    <tr className="border-b-4 border-black">
                      <th className="py-4">Dimensión</th>
                      <th className="py-4">VALOR (R)</th>
                      <th className="py-4">MAGNITUD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {VALIDITY_DATA.map((row, i) => (
                      <tr key={i} className="border-b-2 border-zinc-100 hover:bg-orange-50 transition-colors">
                        <td className="py-5 font-mono text-[10px] pr-4">{row.dimension}</td>
                        <td className="py-5 text-lg text-orange-600">{row.r.toFixed(3)}</td>
                        <td className="py-5">
                          <span className={`px-4 py-1 border-2 border-black ${row.magnitude === 'Fuerte' ? 'bg-orange-400 text-black' : 'bg-black text-white'}`}>
                            {row.magnitude}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Correlaciones Críticas */}
          <div className="mt-32">
             <CinematicCard color="bg-zinc-900" className="text-white border-8 border-rose-600 shadow-[30px_30px_0_0_#000]" title="CORRELACIONES_CRÍTICAS" icon={Zap}>
                <div className="grid md:grid-cols-2 gap-20 p-10">
                   <div className="text-center group">
                      <p className="text-xl font-display uppercase font-black text-slate-500 mb-6 tracking-widest">Motivación Académica</p>
                      <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} className="text-8xl font-display font-black text-orange-400 italic mb-4 drop-shadow-[5px_5px_0_#000] group-hover:scale-110 transition-transform">
                        r = -.326
                      </motion.div>
                      <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black italic">Significancia: p &lt; .01</p>
                   </div>
                   <div className="text-center group">
                      <p className="text-xl font-display uppercase font-black text-slate-500 mb-6 tracking-widest">Autoeficacia Académica</p>
                      <motion.div initial={{ scale: 0.8 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} className="text-8xl font-display font-black text-rose-600 italic mb-4 drop-shadow-[5px_5px_0_#000] group-hover:scale-110 transition-transform">
                        r = -.436
                      </motion.div>
                      <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-black italic">Significancia: p &lt; .001</p>
                   </div>
                </div>
                <div className="mt-12 p-8 bg-zinc-800 border-4 border-zinc-700 text-center">
                   <p className="text-2xl font-serif italic text-zinc-400">
                     "Ambas correlaciones son inversas y altamente significativas: la <span className="text-white font-black underline decoration-rose-600">motivación</span> y la <span className="text-white font-black underline decoration-orange-400">autoeficacia</span> son los mejores escudos contra el abandono."
                   </p>
                </div>
             </CinematicCard>
          </div>
        </div>
      </WaveSection>
    </div>
  );
}
