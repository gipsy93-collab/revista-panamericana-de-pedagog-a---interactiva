import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Map, Zap, Leaf, BookOpen, ArrowRight, GitBranch } from 'lucide-react';
import { FilmGrain } from '../FilmGrain';

const MAPAS = [
  // === 5 ARTÍCULOS ORIGINALES (RESTAURADOS) ===
  {
    id: 'mapa_3214',
    numero: '01',
    titulo: 'Innovación Pedagógica en Bachillerato Técnico Agropecuario',
    autores: 'Dueñas Basurto & Zambrano Vera',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 39',
    tema: 'Prácticas sostenibles · Educación técnica · Ecuador',
    color: '#0ea5e9',
    colorAlt: '#f97316',
    bg: 'from-sky-900 to-cyan-950',
    disponible: true,
    tipo: 'multicamino',
  },
  {
    id: 'mapa_multicamino_3453',
    numero: '02',
    titulo: 'Experiencias Docentes ante el Consumo de Drogas',
    autores: 'Inostroza-Fuentes et al.',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 40',
    tema: 'Multicamino · Fenomenológico · Chile',
    color: '#ff6b9d',
    colorAlt: '#c0392b',
    bg: 'from-rose-950 to-pink-950',
    disponible: true,
    tipo: 'multicamino',
  },
  {
    id: 'mapa_multicamino_3588',
    numero: '03',
    titulo: 'Análisis Psicométrico de la Escala Bäulke',
    autores: 'Euan-Catzín & Canto-Herrera',
    año: '2026',
    revista: 'Revista Panamericana de Pedagogía, n. 41',
    tema: 'Multicamino · Psicometría · México',
    color: '#3498db',
    colorAlt: '#9b59b6',
    bg: 'from-slate-900 to-blue-950',
    disponible: true,
    tipo: 'multicamino',
  },
  {
    id: 'mapa_3557',
    numero: '04',
    titulo: 'Educación Jurídica en la Era Digital',
    autores: 'Prince Tritto et al.',
    año: '2026',
    revista: 'Revista Panamericana de Pedagogía, n. 41',
    tema: 'Educación Jurídica · IA · Digitalización',
    color: '#00FFA3',
    colorAlt: '#FF007A',
    bg: 'from-emerald-950 to-green-950',
    disponible: true,
    tipo: 'multicamino',
  },
  {
    id: 'mapa_3198',
    numero: '05',
    titulo: 'Aprendizaje TIC y Envejecimiento Activo',
    autores: 'Hernández-Silvera et al.',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 39',
    tema: 'Envejecimiento Activo · TIC · Argentina',
    color: '#F97316',
    colorAlt: '#FFCC00',
    bg: 'from-orange-950 to-amber-950',
    disponible: true,
    tipo: 'mapa',
  },

  // === 11 NUEVOS MAPAS MENTALES (AÑADIDOS) ===
  {
    id: 'mm_3214',
    numero: '06',
    titulo: 'Innovación Pedagógica (Mapa Mental)',
    autores: 'Dueñas-Basurto & Zambrano-Vera',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 39',
    tema: 'Sostenibilidad · Educación Técnica',
    doi: '10.21555/rpp.3214',
    color: '#0ea5e9',
    colorAlt: '#f97316',
    bg: 'from-sky-950 to-cyan-950',
    disponible: true,
  },
  {
    id: 'mm_3198',
    numero: '07',
    titulo: 'Aprendizaje TIC (Mapa Mental)',
    autores: 'Hernández-Silvera, Pecora & Núñez',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 39',
    tema: 'TIC · Envejecimiento · Argentina',
    doi: '10.21555/rpp.3198',
    color: '#F97316',
    colorAlt: '#FFCC00',
    bg: 'from-orange-950 to-amber-950',
    disponible: true,
  },
  {
    id: 'mm_3290',
    numero: '08',
    titulo: 'Compromiso Estudiantil (Mapa Mental)',
    autores: 'Roldán-Morales & Torres-Tovar',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 40',
    tema: 'Aprendizaje Situado · México',
    doi: '10.21555/rpp.3290',
    color: '#8B5CF6',
    colorAlt: '#D8B4FE',
    bg: 'from-violet-950 to-purple-950',
    disponible: true,
  },
  {
    id: 'mm_3378',
    numero: '09',
    titulo: 'Competencias Digitales Docentes',
    autores: 'Saborío-Taylor, Álvarez-Chaves & Valdivia-Durán',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 40',
    tema: 'Formación Docente · Costa Rica',
    doi: '10.21555/rpp.3378',
    color: '#10B981',
    colorAlt: '#6EE7B7',
    bg: 'from-emerald-950 to-teal-950',
    disponible: true,
  },
  {
    id: 'mm_3453',
    numero: '10',
    titulo: 'Docencia ante Consumo de Drogas',
    autores: 'Inostroza-Fuentes, et al.',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 40',
    tema: 'Prevención · Chile',
    doi: '10.21555/rpp.3453',
    color: '#EC4899',
    colorAlt: '#F472B6',
    bg: 'from-rose-950 to-pink-950',
    disponible: true,
  },
  {
    id: 'mm_3454',
    numero: '11',
    titulo: 'Trayectorias y Abandono Escolar',
    autores: 'Ramos-Ramírez & Márquez-Cabellos',
    año: '2025',
    revista: 'Revista Panamericana de Pedagogía, n. 40',
    tema: 'Deserción · México',
    doi: '10.21555/rpp.3454',
    color: '#3B82F6',
    colorAlt: '#60A5FA',
    bg: 'from-blue-950 to-indigo-950',
    disponible: true,
  },
  {
    id: 'mm_3467',
    numero: '12',
    titulo: 'Ciberacoso Universitario Post-COVID',
    autores: 'Vallejos-Parás et al.',
    año: '2026',
    revista: 'Revista Panamericana de Pedagogía, n. 41',
    tema: 'Ciberacoso · IA · México',
    doi: '10.21555/rpp.3467',
    color: '#F43F5E',
    colorAlt: '#FB7185',
    bg: 'from-red-950 to-rose-950',
    disponible: true,
  },
  {
    id: 'mm_3557',
    numero: '13',
    titulo: 'Educación Jurídica Digital',
    autores: 'Prince-Tritto et al.',
    año: '2026',
    revista: 'Revista Panamericana de Pedagogía, n. 41',
    tema: 'Derecho Digital · IA · México',
    doi: '10.21555/rpp.3557',
    color: '#06B6D4',
    colorAlt: '#22D3EE',
    bg: 'from-cyan-950 to-sky-950',
    disponible: true,
  },
  {
    id: 'mm_3588',
    numero: '14',
    titulo: 'Escala de Deserción Escolar',
    autores: 'Euan-Catzín & Canto-Herrera',
    año: '2026',
    revista: 'Revista Panamericana de Pedagogía, n. 41',
    tema: 'Psicometría · Deserción · México',
    doi: '10.21555/rpp.3588',
    color: '#6366F1',
    colorAlt: '#818CF8',
    bg: 'from-indigo-950 to-blue-950',
    disponible: true,
  },
  {
    id: 'mm_3604',
    numero: '15',
    titulo: 'Cine como Mediador en Literatura',
    autores: 'López-Martínez & Muñoz-Madrid',
    año: '2026',
    revista: 'Revista Panamericana de Pedagogía, n. 41',
    tema: 'Cine · Literatura · México',
    doi: '10.21555/rpp.3604',
    color: '#D946EF',
    colorAlt: '#E879F9',
    bg: 'from-fuchsia-950 to-purple-950',
    disponible: true,
  },
  {
    id: 'mm_128',
    numero: '16',
    titulo: 'Educomunicación y Transmedia',
    autores: 'Ramos, Sáenz, Burnes & Elizondo',
    año: '2024',
    revista: 'Revista Panamericana de Pedagogía, n. 38',
    tema: 'Educomunicación · México',
    doi: '10.21555/rpp.128',
    color: '#EAB308',
    colorAlt: '#FDE047',
    bg: 'from-yellow-950 to-orange-950',
    disponible: true,
  },
];

interface Props {
  onBack: () => void;
  onOpenMapa: (id: string) => void;
}

export default function MapasConceptuales({ onBack, onOpenMapa }: Props) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="relative min-h-screen bg-[#0a1628] text-white font-sans overflow-x-hidden selection:bg-[#0ea5e9] selection:text-white pb-20">
      <FilmGrain />

      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-[#0ea5e9] transition-all shadow-[4px_4px_0_0_#000] active:shadow-none -translate-y-0.5 active:translate-y-0"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver</span>
          </button>
          <div className="hidden md:block bg-black text-white px-4 py-2 border-4 border-black font-display text-xl font-black italic">
            TRANSMEDIA / MAPAS
          </div>
        </div>
      </header>

      <div className="pt-40 px-6 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-display uppercase mb-16 text-center">
          Explora la <span className="text-[#0ea5e9]">Pedagogía</span> <span className="text-[#f97316]">Interactiva</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {MAPAS.map((mapa, i) => (
            <motion.div
              key={mapa.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
            >
              <button
                onClick={() => onOpenMapa(mapa.id)}
                className="group w-full text-left outline-none"
              >
                <div className={`relative bg-gradient-to-br ${mapa.bg} border-4 border-black shadow-[10px_10px_0_0_#000] hover:shadow-[15px_15px_0_0_#000] hover:-translate-y-2 transition-all duration-300 min-h-[380px] flex flex-col justify-between p-8 rounded-[2rem]`}>
                  <div className="flex justify-between items-start">
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-black text-white rounded-full">
                      {mapa.tipo === 'multicamino' ? 'MULTICAMINO' : 'MIND MAP'}
                    </span>
                    {mapa.tipo === 'multicamino' ? <GitBranch size={20} /> : <Map size={20} />}
                  </div>

                  <div>
                    <h2 className="text-2xl md:text-3xl font-display uppercase leading-tight mb-4" style={{ color: mapa.color }}>
                      {mapa.titulo}
                    </h2>
                    <p className="text-white font-sans text-sm font-bold opacity-90">{mapa.autores}</p>
                    {mapa.doi && (
                      <p className="font-mono text-[9px] text-white/40 mt-2 tracking-widest uppercase">DOI: {mapa.doi}</p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px] border-t border-white/10 pt-4">
                    Explorar <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
