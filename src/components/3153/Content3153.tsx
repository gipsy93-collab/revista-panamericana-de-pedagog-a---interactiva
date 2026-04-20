import React from 'react';
import { 
  EyeOff, UserX, AlertTriangle, BookMarked, Map, ArrowDownCircle, 
  Sparkles, Activity, MessageCircle, AlertCircle, GraduationCap, 
  Target, ClipboardCheck, BrainCircuit, Quote, Flame, Zap, ShieldAlert, Heart, Briefcase
} from 'lucide-react';
import { CinematicCard, BrutalSticker, BrutalCard, WaveSection } from '../BrutalistLib';
import { DataLab3153 } from './DataLab3153';

export default function Content3153() {
  return (
    <div className="bg-pop-teal">
      <WaveSection topColor="#fccb06" bottomColor="#5bc2a8" variant="smooth" className="!pt-0" />
      {/* 2. INTRODUCCIÓN Y PROBLEMÁTICA */}
      <section className="pt-12 pb-32 px-6 relative overflow-hidden bg-pop-teal">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2. INTRODUCCIÓN & PROBLEMÁTICA" color="bg-black" className="text-white mb-10 !rotate-0" />
          
          <div className="grid lg:grid-cols-12 gap-16 items-start mb-32">
            <div className="lg:col-span-12">
               <h3 className="font-display text-4xl md:text-7xl uppercase italic mb-10 leading-none text-black border-b-8 border-blue-600 pb-6">
                 Cultura <span className="text-blue-600">Institucional</span>
               </h3>
               
               <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-24">
                   {/* CONTEXTO */}
                   <div className="bg-zinc-50 border-l-[12px] border-black p-8 shadow-[15px_15px_0_0_#1a1a1a] border-t-2 border-r-2 border-b-2">
                     <h4 className="font-display text-2xl uppercase mb-6 flex items-center gap-3 text-black">
                       <BookMarked className="text-black" /> Contexto
                     </h4>
                     <p className="text-xl font-serif italic text-black leading-relaxed font-medium">
                       El artículo se sitúa en el contexto de la discriminación y violencia como parte de la cultura institucional de las universidades en México y Latinoamérica. Los autores señalan que los estudiantes indígenas enfrentan discriminación que resulta en tasas más bajas de acceso y finalización de la educación superior. Además, persisten brechas significativas entre hombres y mujeres.
                     </p>
                   </div>

                   {/* PROBLEMA */}
                   <div className="bg-pop-cream border-l-[12px] border-blue-600 p-8 border-4 border-black shadow-[25px_25px_0_0_#0f3896] text-black">
                     <h4 className="font-display text-2xl uppercase mb-6 flex items-center gap-3 text-black">
                       <AlertTriangle className="text-black" /> Problema
                     </h4>
                     <div className="space-y-6 text-xl font-serif italic text-black leading-relaxed font-medium">
                       <p>
                         La investigación aborda cómo la discriminación por apariencia física afecta la experiencia académica y el bienestar emocional de estudiantes universitarios.
                       </p>
                       <p className="bg-blue-50/50 p-4 border-l-4 border-blue-600">
                         Efectos negativos en la salud mental (depresión, angustia, ansiedad), autoestima y rendimiento académico.
                       </p>
                     </div>
                   </div>
               </div>
            </div>

            <div className="lg:col-span-7 space-y-12">
               <div className="bg-blue-600 text-white p-12 border-8 border-black shadow-[15px_15px_0_0_#000] rotate-[-1deg] mt-12">
                  <h4 className="font-display text-2xl uppercase italic mb-6">Pregunta Rectora</h4>
                  <p className="text-4xl md:text-5xl font-serif italic leading-tight font-black">
                    "¿Cuál es la experiencia de discriminación de los estudiantes universitarios por apariencia física?"
                  </p>
               </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8 mt-12">
               <div className="bg-cream border-4 border-black p-8 shadow-[8px_8px_0_0_#2563eb] rotate-1">
                  <h4 className="font-display text-2xl uppercase italic mb-6 border-b-2 border-black/10 pb-2">Propósito General</h4>
                  <p className="font-sans font-bold uppercase text-[12px] text-black/60 italic leading-relaxed">
                    Comprender de qué manera influyen las experiencias de discriminación por aspecto físico en la experiencia académica y bienestar emocional en los estudiantes universitarios de una universidad privada en México.
                  </p>
               </div>

               <div className="bg-zinc-950 text-white p-8 border-4 border-black shadow-[8px_8px_0_0_#2563eb] -rotate-1">
                  <h4 className="font-display text-xl uppercase italic mb-6 text-blue-400">Objetivos Específicos</h4>
                  <ul className="font-mono text-[10px] uppercase font-black space-y-4 opacity-70">
                    <li className="flex gap-3"><ArrowDownCircle size={14} className="text-blue-600" /> Identificar formas de discriminación por apariencia física en el contexto universitario</li>
                    <li className="flex gap-3"><ArrowDownCircle size={14} className="text-blue-600" /> Analizar efectos socioemocionales de la discriminación</li>
                    <li className="flex gap-3"><ArrowDownCircle size={14} className="text-blue-600" /> Examinar repercusiones académicas de las experiencias discriminatorias</li>
                    <li className="flex gap-3"><ArrowDownCircle size={14} className="text-blue-600" /> Identificar estrategias de afrontamiento desarrolladas por estudiantes</li>
                    <li className="flex gap-3"><ArrowDownCircle size={14} className="text-blue-600" /> Evaluar el apoyo institucional disponible</li>
                  </ul>
               </div>
            </div>
          </div>
        </div>
      </section>

      <WaveSection topColor="#5bc2a8" bottomColor="#e81e61" variant="smooth" />
      {/* 3. METODOLOGÍA */}
      <section className="bg-pop-pink py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-blue-600" className="text-white mb-16 !rotate-0 shadow-[6px_6px_0_0_#000]" />
          <div className="grid lg:grid-cols-2 gap-24 items-start mb-24">
            <div className="space-y-12">
               <h3 className="font-display text-5xl uppercase italic text-black leading-none">Teoría <span className="text-blue-600 underline decoration-8 decoration-black">Fundamentada</span></h3>
               <div className="space-y-8 font-sans font-bold uppercase text-[15px] leading-relaxed text-black/70">
                  <p className="border-l-8 border-blue-600 pl-8">
                     Investigación cualitativa con enfoque de teoría fundamentada (Grounded Theory) bajo un paradigma interpretativo (p. 132).
                  </p>
                  <p className="border-l-8 border-black pl-8 font-black text-black">
                     Se utilizó la técnica de codificación abierta, axial y selectiva de Strauss y Corbin (2016) para el análisis de las entrevistas semiestructuradas.
                  </p>
               </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { t: "Muestreo", c: "Bola de Nieve (en cadena)", i: Map },
                 { t: "Paradigma", c: "Cualitativo Interpretativo", i: Target },
                 { t: "Instrumento", c: "Entrevista Semiestructurada", i: ClipboardCheck },
                 { t: "Propósito", c: "Comprender la Influencia de la Apariencia", i: Target }
               ].map((item, idx) => (
                 <div key={idx} className="bg-zinc-50 border-4 border-black p-8 shadow-[8px_8px_0_0_#2563eb] rotate-1 hover:rotate-0 transition-transform flex flex-col items-center text-center">
                    <item.i size={32} className="mb-4 text-blue-600" />
                    <h5 className="font-display text-xl uppercase italic leading-none mb-2">{item.t}</h5>
                    <p className="font-mono text-[9px] uppercase font-black opacity-40">{item.c}</p>
                 </div>
               ))}
            </div>
          </div>
          <DataLab3153 />
        </div>
      </section>

      <WaveSection topColor="#e81e61" bottomColor="#0f3896" variant="smooth" />
      {/* 4. RESULTADOS */}
      <section className="bg-pop-blue py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-white">
          <BrutalSticker text="4. RESULTADOS & HALLAZGOS" color="bg-pop-yellow" className="text-black mb-20 !rotate-0 shadow-[6px_6px_0_0_#000]" />
          
          <div className="bg-white border-8 border-black p-12 md:p-24 shadow-[20px_20px_0_0_#fccb06] rotate-1 mb-24 text-black">
             <h4 className="font-display text-3xl uppercase italic mb-8 border-b-4 border-black pb-4 text-black">Hallazgo Principal</h4>
             <p className="text-4xl md:text-6xl font-serif italic text-black leading-tight">
                "Se encontraron distintas formas de discriminación por apariencia física (color de piel, peso, altura, uso de tatuajes) que se interpretan como <span className="text-pop-blue not-italic font-black">estigma del estatus social</span>."
             </p>
             <div className="mt-12 font-mono text-xs font-black uppercase opacity-60 italic text-black">Ramos-Solís et al. (2024), p. 128</div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               {
                 t: "Efectos Socioemocionales",
                 c: "Sentimiento de juicio constante, inseguridad, disminución de autoestima, estrés y ansiedad.",
                 i: Activity,
                 color: "bg-pop-teal",
                 border: "border-black"
               },
               {
                 t: "Efectos Académicos",
                 c: "Desmotivación, falta de concentración y disminución aguda de participación en clase.",
                 i: GraduationCap,
                 color: "bg-pop-yellow",
                 border: "border-black"
               },
               {
                 t: "Afrontamiento",
                 c: "Estrategias mayoritariamente ausentes; prevalencia de ignorar o restar importancia por falta de recursos.",
                 i: AlertCircle,
                 color: "bg-pop-pink",
                 border: "border-black"
               },
               {
                 t: "Apoyo Institucional",
                 c: "Desconocimiento generalizado de recursos disponibles; intervenciones docentes muy limitadas.",
                 i: AlertTriangle,
                 color: "bg-white",
                 border: "border-black"
               }
             ].map((cat, i) => (
               <div key={i} className={`p-8 border-4 ${cat.border} ${cat.color} shadow-[10px_10px_0_0_#1a1a1a] rotate-1 hover:-rotate-1 transition-transform cursor-pointer group text-black`}>
                  <cat.i size={40} className="mb-6 group-hover:scale-110 transition-transform text-black" />
                  <h4 className="font-display text-2xl uppercase italic mb-4 leading-none text-black">{cat.t}</h4>
                  <p className="font-sans font-bold uppercase text-[10px] opacity-80 leading-relaxed italic text-black">"{cat.c}"</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 5. DISCUSIÓN */}
      <WaveSection topColor="#0f3896" bottomColor="#fccb06" variant="gentle">
        <div className="max-w-7xl mx-auto py-12">
          <BrutalSticker text="5. DISCUSIÓN" color="bg-black" className="text-white mb-20 !rotate-0" />
          
          <div className="grid md:grid-cols-3 gap-8 mb-24">
             {[
               {
                 title: "Marcadores de Estatus",
                 text: "La apariencia física funciona como marcadores de estigma social y medio de expresión de etnia, nacionalidad y religión, siendo interpretada como indicador de estatus e inferioridad.",
                 author: "Ramos-Solís et al. (2024)"
               },
               {
                 title: "Impacto en Salud Mental",
                 text: "La discriminación por color de piel y autocategorización racial se corresponden fuertemente con la salud mental percibida (Benner et al., 2018).",
                 author: "Benner et al. (2018)"
               },
               {
                 title: "Vulnerabilidad Estructural",
                 text: "La falta de estrategias de afrontamiento y la sensación de juicio constante evidencian una vulnerabilidad estructural de estudiantes discriminados en contextos de élite.",
                 author: "Ramos-Solís et al. (2024)"
               }
             ].map((card, i) => (
               <div key={i} className="bg-cream border-8 border-black p-8 shadow-[15px_15px_0_0_#1a1a1a] h-full flex flex-col rotate-1 group hover:-rotate-1 transition-transform">
                  <Flame className="text-blue-600 mb-6" size={32} />
                  <h4 className="font-display text-3xl uppercase italic mb-6 leading-none border-b-4 border-black pb-2">{card.title}</h4>
                  <p className="font-serif text-xl italic text-black/80 leading-relaxed mb-10">"{card.text}"</p>
                  <div className="flex justify-between items-center font-mono text-[9px] font-black uppercase tracking-widest leading-none">
                     <span>REFERENCIA</span>
                     <span className="text-blue-600 underline">{card.author}</span>
                  </div>
               </div>
             ))}
          </div>

          <div className="bg-pop-pink border-[12px] border-black p-16 md:p-32 shadow-[30px_30px_0_0_#000] text-center rotate-1">
             <h3 className="text-5xl md:text-8xl font-display font-black uppercase italic text-black mb-10 leading-none">
               Justicia & <br/><span className="text-white">Equidad</span>
             </h3>
             <p className="text-3xl md:text-5xl font-serif italic text-black max-w-5xl mx-auto leading-tight mb-8">
               "La universidad no debe ser un escaparate de estatus, sino un motor de equidad y desarrollo integral."
             </p>
             <div className="w-64 h-2 bg-black mx-auto" />
          </div>
        </div>
      </WaveSection>

      <WaveSection topColor="#fccb06" bottomColor="#000000" variant="gentle" />
      {/* 6. CONCLUSIONES */}
      <section className="bg-black py-48 px-6 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="max-w-7xl mx-auto relative z-10 text-white">
          <BrutalSticker text="6. CONCLUSIONES" color="bg-cream" className="text-black mb-20 !rotate-0 shadow-[8px_8px_0_0_#2563eb]" />
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
             <div className="space-y-12">
                <p className="text-4xl md:text-6xl font-serif italic text-pop-yellow leading-tight">
                  "La discriminación por apariencia es una forma de violencia que fractura el bienestar y la permanencia estudiantil (p. 141)."
                </p>
             </div>
             <div className="bg-pop-yellow text-black p-12 border-8 border-black shadow-[25px_25px_0_0_#e81e61] rotate-1">
                <p className="text-3xl font-display uppercase italic leading-tight mb-8">
                   "Se requiere mejorar la difusión de servicios institucionales y capacitar a docentes en detección y acompañamiento especializado."
                </p>
                <div className="flex justify-between items-center border-t-2 border-black/10 pt-6 font-mono text-[10px] font-black uppercase">
                   <span>Pag. 141</span>
                   <span className="text-pop-blue">Referencia: LGES 2021</span>
                </div>
             </div>
          </div>

          <div className="mt-48 flex flex-col md:flex-row items-center justify-between gap-12 border-t-4 border-white/20 pt-12">
              <div className="max-w-2xl">
                <p className="font-display text-2xl uppercase tracking-normal leading-[1.1] mb-6">
                  Ambientes inclusivos, equitativos y libres de violencia son mandatos legales y éticos imprescindibles.
                </p>
              </div>
             <div className="flex gap-4">
                <div className="bg-blue-600 text-white px-3 py-1 shadow-[4px_4px_0_0_#fff]">UDEM_3153</div>
                <div className="bg-white text-black px-3 py-1 shadow-[4px_4px_0_0_#2563eb]">RPP_38</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
