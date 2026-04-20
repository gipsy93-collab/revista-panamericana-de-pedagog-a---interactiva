import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, ClipboardList, Microscope, Award, Sparkles, Database, BookOpen, Layers, 
  Target, Search, School, GraduationCap, ClipboardCheck, BrainCircuit, Activity,
  Quote, CheckCircle2, AlertCircle, SearchCode, FileText
} from 'lucide-react';
import { DIMENSIONS, LIMITATIONS, METHODOLOGY, TESTIMONIALS } from './constants';
import { PremiumTitle, CinematicCard, WaveSection, BrutalSticker, BrutalQuote, BrutalCard } from '../BrutalistLib';
import DataExplorer3412 from './DataExplorer3412';

export default function Content3412() {
  return (
    <div className="bg-white">
      {/* 2.3 OBJETIVOS */}
      <div className="bg-black text-white p-16 md:p-24 border-y-[12px] border-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="2.3 OBJETIVOS" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h3 className="font-display text-4xl uppercase font-black italic text-rose-500">Objetivo General</h3>
              <p className="text-2xl font-serif italic border-l-8 border-rose-600 pl-8 leading-tight text-white">
                Explorar la confiabilidad y validez preliminar de un inventario piloto de habilidades blandas en estudiantes de nivel secundario y analizar su relación con variables sociodemográficas y proyectos áulicos.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="font-display text-4xl uppercase font-black italic text-rose-500">Preguntas de Investigación</h3>
              <ul className="space-y-6">
                {[
                  "¿El inventario piloto presenta niveles adecuados de confiabilidad y consistencia interna para la medición de habilidades blandas en estudiantes de secundaria?",
                  "¿Existen diferencias significativas en las habilidades blandas según género, nivel socioeconómico y vulnerabilidad académica?",
                  "¿Qué relación se observa entre la implementación de proyectos áulicos (ABP, convivencia, disciplina, entre otros) y el desarrollo de habilidades blandas?"
                ].map((obj, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-8 h-8 bg-rose-600 text-white flex items-center justify-center font-display font-black shrink-0">{i + 1}</span>
                    <p className="text-lg font-sans font-bold uppercase text-white/90">{obj}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 2.4 MARCO TEÓRICO */}
      <WaveSection topColor="#000000" bottomColor="#ffffff" variant="steps">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="2.4 MARCO TEÓRICO" color="bg-black" className="text-white mb-12 !rotate-0" />
          <PremiumTitle subtitle="CONSTRUCTOS TEÓRICOS">Fundamentación del Estudio</PremiumTitle>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <BrutalCard title="DESARROLLO DE CB" color="bg-rose-50">
              <p className="text-xs leading-relaxed text-black/70">
                <strong>Habilidades blandas esenciales:</strong> Mucha-Huamán (2023) las vincula al crecimiento personal; Fernández-Río et al. (2023) al aprendizaje cooperativo y autoeficacia; Gordillo-Espinace et al. (2024) destaca las actividades extracurriculares.
              </p>
            </BrutalCard>
            <BrutalCard title="VULNERABILIDAD" color="bg-[#f1f5f9]">
              <p className="text-xs leading-relaxed text-black/70">
                <strong>Contexto social:</strong> Hernández-Silvera (2022) analiza los obstáculos en trayectorias educativas; Macías-Carrillo (2022) destaca redes de apoyo social; Bronfenbrenner (2013) aporta el modelo ecológico fundamental.
              </p>
            </BrutalCard>
            <BrutalCard title="DESARROLLO ADOL." color="bg-zinc-900" className="text-white">
              <p className="text-xs leading-relaxed text-white/70">
                <strong>Dinámicas sociales:</strong> Elkind (1967) teoriza sobre el egocentrismo adolescente; Steinberg (2022) analiza las demandas sociales críticas durante la adolescencia media.
              </p>
            </BrutalCard>
            <BrutalCard title="METODOLOGÍAS ACTIVAS" color="bg-rose-600" className="text-white">
              <p className="text-xs leading-relaxed text-white/90 font-medium">
                <strong>ABP y Gamificación:</strong> Zepeda-Hurtado et al. (2022), Inglés-Saura & Mateu-Martínez (2022) y Delgado-Togra (2022) fundamentan la efectividad de estas herramientas para el desarrollo de competencias del siglo XXI.
              </p>
            </BrutalCard>
          </div>
        </div>
      </WaveSection>

      {/* 3. METODOLOGÍA */}
      <section className="py-24 bg-white px-6 border-y-[12px] border-black">
        <div className="max-w-7xl mx-auto">
          <BrutalSticker text="3. METODOLOGÍA" color="bg-black" className="text-white mb-16 !rotate-0" />
          <div className="grid lg:grid-cols-2 gap-16 items-start text-black">
            <div className="space-y-12">
              <div>
                <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.1 Tipo de estudio</h3>
                <p className="text-xl font-sans font-medium text-black/80 leading-relaxed">
                  Estudio <strong>descriptivo-comparativo de corte transversal</strong> con enfoque <strong>cuantitativo</strong>. Inicialmente se planteó un diseño cuasi-experimental, pero en la práctica se analizaron diferencias entre grupos a partir de cuestionario de autorreporte.
                </p>
              </div>
              <div>
                <h3 className="font-display text-4xl uppercase font-black italic mb-6">3.3 Instrumentos</h3>
                <div className="bg-zinc-900 text-white p-8 border-4 border-black shadow-[10px_10px_0_0_#000]">
                  <h4 className="font-display text-xl uppercase font-black mb-4 text-rose-500">Inventario piloto de habilidades blandas</h4>
                  <ul className="grid grid-cols-2 gap-4 text-[10px] font-mono uppercase font-black text-white/60">
                    <li className="p-3 border border-white/10 bg-black/40">32 ítems totales</li>
                    <li className="p-3 border border-white/10 bg-black/40">4 Dimensiones (8 c/u)</li>
                    <li className="p-3 border border-white/10 bg-black/40">Kappa Cohen: 0.95</li>
                    <li className="p-3 border border-white/10 bg-black/40">Alfa Cronbach: 0.933</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-12 border-8 border-black shadow-[25px_25px_0_0_#000] rotate-1">
               <h3 className="font-display text-4xl uppercase font-black mb-8 border-b-4 border-black pb-4 inline-block italic">3.2 Participantes / Muestra</h3>
               <div className="space-y-8">
                  <div className="flex items-center gap-6">
                    <span className="text-8xl font-display font-black text-rose-600">228</span>
                    <p className="text-xl font-mono uppercase font-black leading-none opacity-60 italic text-black">Estudiantes <br/> 13-20 años</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="p-4 bg-zinc-100 border-2 border-black font-mono text-[9px] font-black uppercase">52% Mujeres / 48% Varones</div>
                     <div className="p-4 bg-zinc-100 border-2 border-black font-mono text-[9px] font-black uppercase">15 Escuelas AMBA</div>
                     <div className="p-4 bg-rose-50 border-2 border-black font-mono text-[9px] font-black uppercase">32% Vulnerabilidad Académica</div>
                     <div className="p-4 bg-zinc-100 border-2 border-black font-mono text-[9px] font-black uppercase">Muestreo por conveniencia</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. RESULTADOS & DATALAB (4.1, 4.2, 4.3) */}
      <WaveSection topColor="#ffffff" bottomColor="#f8fafc" variant="steps">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <BrutalSticker text="4. RESULTADOS" color="bg-rose-600" className="text-white mb-8 !rotate-0" />
            <PremiumTitle className="items-center" subtitle="4.1 HALLAZGO PRINCIPAL">Herramienta de Diagnóstico</PremiumTitle>
            <p className="text-xl text-center text-black/70 max-w-4xl mx-auto mt-8 font-serif italic">
              "El inventario piloto demostró alta consistencia interna (α = 0.933) y acuerdo interjueces casi perfecto (κ = 0.95), configurándose como herramienta confiable para evaluar competencias blandas. Los proyectos con metodologías activas (especialmente ABP) se asociaron con mayores puntuaciones."
            </p>
          </div>

          <DataExplorer3412 />
        </div>
      </WaveSection>

      {/* 5.1 INTERPRETACIÓN DE LOS HALLAZGOS */}
      <WaveSection topColor="#f8fafc" bottomColor="#ffffff" variant="wavy">
        <div className="max-w-7xl mx-auto py-24">
          <BrutalSticker text="5.1 INTERPRETACIÓN" color="bg-black" className="text-white mb-12 !rotate-0 shadow-[6px_6px_0_0_#e11d48]" />
          <div className="bg-white border-[12px] border-black p-12 md:p-24 shadow-[30px_30px_0_0_#e11d48]">
            <h3 className="font-display text-5xl uppercase font-black italic mb-8 text-rose-600 leading-none">Interpretación de Hallazgos</h3>
            <div className="space-y-8">
              <p className="text-2xl font-serif italic leading-relaxed text-black/80 font-medium">
                "Las dimensiones interpersonales, intelectuales y sociales (HI, HINT, HS) constituyen aspectos centrales del desarrollo adolescente que anticipan logros académicos y sociales futuros. Los resultados permiten reflexionar sobre la necesidad de que docentes revisen sus proyectos pedagógicos y seleccionen metodologías activas."
              </p>
              <p className="text-lg font-sans font-bold uppercase text-black/60 border-l-8 border-black pl-8">
                Las diferencias según nivel socioeconómico en HI y HINT refuerzan la evidencia de que el contexto social y económico condiciona tanto la capacidad de establecer relaciones interpersonales como el uso de estrategias intelectuales vinculadas al aprendizaje escolar.
              </p>
            </div>
          </div>
        </div>
      </WaveSection>

      {/* 6.2 CONCLUSIONES POR AUTORES */}
      <section className="bg-black py-32 px-6 border-y-[12px] border-black text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/60-lines.png')]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <BrutalSticker text="6.2 CONCLUSIONES" color="bg-rose-600" className="text-white mb-16 !rotate-0" />
          <div className="grid md:grid-cols-1 gap-12">
            <BrutalQuote author="Conclusiones de la Investigación" className="bg-white text-black text-3xl font-serif italic border-[8px] border-rose-600 shadow-[20px_20px_0_0_#fff]">
              <div className="space-y-12 py-10">
                 <p>"La presente investigación permitió cumplir con el objetivo de explorar la validez y confiabilidad de un inventario piloto para evaluar competencias blandas (SS) en adolescentes y analizar su relación con variables contextuales."</p>
                 <div className="h-px bg-zinc-200" />
                 <p>"Los hallazgos muestran diferencias significativas en función del nivel socioeconómico y del género: los estudiantes sin criterios de vulnerabilidad presentaron mayores logros en habilidades interpersonales (HI) e intelectuales (HINT)."</p>
                 <div className="h-px bg-zinc-200" />
                 <p>"La aplicación de metodologías activas como el Aprendizaje Basado en Proyectos (ABP) y el Team-Based Learning (TBL) favorece significativamente el desarrollo de HI, HINT y HS."</p>
              </div>
            </BrutalQuote>
          </div>
        </div>
      </section>

      {/* SECCIÓN FINAL */}
      <WaveSection topColor="#000000" bottomColor="#ffffff" variant="dramatic">
        <div className="max-w-6xl mx-auto text-center pb-48 pt-24">
           <div className="inline-block relative mb-24">
              <div className="absolute inset-0 bg-rose-600 translate-x-3 translate-y-3" />
              <div className="relative bg-black text-white p-20 md:p-32 border-8 border-black">
                 <h2 className="text-7xl md:text-[10rem] font-display uppercase font-black leading-[0.8] tracking-tighter italic">
                   Siglo <br/> <span className="text-rose-500">XXI_</span>
                 </h2>
                 <div className="w-40 h-8 bg-rose-600 mx-auto mt-16 mb-16" />
                 <p className="text-2xl font-mono text-rose-100 uppercase font-black tracking-widest italic animate-pulse">
                   HABILIDADES PARA LA VIDA REAL
                 </p>
              </div>
           </div>

           <div className="bg-rose-50 text-black p-16 md:p-24 border-[12px] border-black text-center relative overflow-hidden shadow-[25px_25px_0_0_#000] rotate-1 mt-20">
              <div className="absolute top-0 right-0 p-8 font-mono text-[10px] opacity-20 uppercase tracking-widest font-black text-black">AMBA_ARGENTINA_UCA_3412</div>
              <p className="text-4xl md:text-7xl font-display uppercase font-black leading-tight mb-16 italic">
                Las soft skills <span className="text-rose-600">no son</span> un extra, <br/> <span className="underline decoration-black decoration-8 underline-offset-8">son el núcleo</span>
              </p>
              <div className="w-80 h-6 bg-black mx-auto" />
           </div>
        </div>
      </WaveSection>
    </div>
  );
}
