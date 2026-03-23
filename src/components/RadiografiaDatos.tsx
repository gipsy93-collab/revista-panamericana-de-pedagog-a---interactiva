import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from 'recharts';
import { Activity, Database, Info, Layers, RefreshCw, Zap } from 'lucide-react';

const MOCK_DATA = [
  { name: 'Rousseau', val: 95, color: '#e81e61' },
  { name: 'Pestalozzi', val: 88, color: '#fccb06' },
  { name: 'Dewey', val: 92, color: '#0f3896' },
  { name: 'Freire', val: 84, color: '#5bc2a8' }
];

const TREND_DATA = [
  { time: 'T1', influence: 20 },
  { time: 'T2', influence: 45 },
  { time: 'T3', influence: 65 },
  { time: 'T4', influence: 85 },
  { time: 'T5', influence: 92 },
  { time: 'T6', influence: 88 }
];

const DATA_CARDS = [
  {
    id: 1,
    title: 'Impacto Teórico',
    label: 'Influencia en la NEM',
    desc: 'Medición de la presencia de conceptos clave de la Escuela Activa en los nuevos Libros de Texto Gratuitos (2023).',
    dataType: 'Impact_score',
    val: '92.4%',
    color: 'bg-zine-red'
  },
  {
    id: 2,
    title: 'Frecuencia_Keyword',
    label: 'Mención por Artículo',
    desc: 'Análisis de sentimiento y frecuencia de términos como "transversalidad", "proyectos" y "autonomía".',
    dataType: 'Frequency_ratio',
    val: '18:1',
    color: 'bg-[#5bc2a8]'
  },
  {
    id: 3,
    title: 'Radiografía_Audit',
    label: 'Validación Bioética',
    desc: 'Puntaje de cumplimiento de principios bioéticos en el uso de IA generativa para el diagnóstico pediátrico.',
    dataType: 'Compliance_rating',
    val: '88/100',
    color: 'bg-[#fccb06]'
  }
];

export default function RadiografiaDatos() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <section className="bg-cream py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-zine-black selection:text-white">
      <div className="container mx-auto">
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 mb-32">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-zine-black flex items-center justify-center text-white">
                <Database size={24} />
              </div>
              <span className="font-accent font-black tracking-widest text-zine-black uppercase text-sm">Data_Science // Radiografía_Interactiva</span>
            </motion.div>
            
            <h2 className="text-8xl md:text-[10rem] font-display uppercase leading-[0.85] text-zine-black">
              RADIOGRAFÍA<br /><span className="text-zine-red">DE DATOS</span>
            </h2>
          </div>

          <div className="flex-1 w-full bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0_#000] min-h-[400px]">
             <div className="flex items-center justify-between mb-8">
                <h4 className="font-display text-4xl uppercase text-zine-black">Tendencia de Influencia</h4>
                <div className="flex gap-2">
                   <div className="w-3 h-3 bg-zine-red rounded-full animate-pulse" />
                   <div className="w-3 h-3 bg-[#0f3896] rounded-full" />
                </div>
             </div>
             
             <div className="h-[250px] w-full relative min-h-[250px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={TREND_DATA}>
                    <defs>
                      <linearGradient id="colorInfluence" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#b34d4d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#b34d4d" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="5 5" stroke="#eee" />
                    <XAxis dataKey="time" hide />
                    <YAxis hide domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1a1a1a', border: 'none', color: '#fff', borderRadius: '12px', fontSize: '10px' }}
                      itemStyle={{ color: '#b34d4d' }}
                    />
                    <Area type="monotone" dataKey="influence" stroke="#b34d4d" strokeWidth={4} fillOpacity={1} fill="url(#colorInfluence)" />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
             <p className="font-mono text-[9px] opacity-40 uppercase tracking-widest mt-8 flex items-center gap-2">
                <Activity size={10} className="text-zine-red" />
                Realtime_sync_active // Source: RPP_Scientific_Database
             </p>
          </div>
        </div>

        {/* Interactive Data Cards - Flippable */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {DATA_CARDS.map((card, i) => (
             <div 
               key={card.id} 
               className="h-[450px] perspective-1000 group cursor-pointer"
               onClick={() => setFlipped(flipped === card.id ? null : card.id)}
             >
                <div 
                  className={`relative w-full h-full duration-700 preserve-3d transition-transform ${flipped === card.id ? 'rotate-y-180' : ''}`}
                >
                   {/* Front Side */}
                   <div className="absolute inset-0 backface-hidden bg-white border-4 border-black p-12 flex flex-col justify-between shadow-[8px_8px_0_#000] group-hover:shadow-[16px_16px_0_#000] group-hover:-translate-y-2 transition-all">
                      <div className="flex items-start justify-between">
                         <div className={`p-4 ${card.color} text-white border-2 border-black`}>
                           <Zap size={24} />
                         </div>
                         <div className="text-right">
                           <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest">Metadata_id</p>
                           <p className="font-black text-xs">0{card.id}_AUDIT</p>
                         </div>
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-4xl md:text-5xl font-display uppercase leading-tight text-zine-black">{card.title}</h3>
                        <p className="font-accent font-black text-zine-black/40 text-xs uppercase tracking-widest">{card.label}</p>
                      </div>

                      <div className="pt-12 border-t border-black/5 flex items-end justify-between">
                         <div>
                            <p className="font-mono text-[9px] opacity-40 uppercase mb-2">{card.dataType}</p>
                            <p className="text-6xl font-display text-zine-black">{card.val}</p>
                         </div>
                         <RefreshCw size={24} className="text-zine-red animate-spin-slow opacity-20" />
                      </div>
                      
                      {/* Interaction hint */}
                      <div className="mt-8 flex items-center gap-4 text-zine-red font-black text-[10px] uppercase opacity-40">
                         <Info size={14} /> Toca para profundizar
                      </div>
                   </div>

                   {/* Back Side */}
                   <div className="absolute inset-0 backface-hidden rotate-y-180 bg-zine-black border-4 border-black p-12 flex flex-col justify-between shadow-[8px_8px_0_#000]">
                      <div className="space-y-8">
                         <div className="flex items-center gap-4">
                            <Layers className="text-white opacity-40" />
                            <h4 className="text-white font-display text-3xl uppercase">Análisis Profundo</h4>
                         </div>
                         <p className="text-white/60 font-sans text-xl font-light leading-relaxed">
                            {card.desc}
                         </p>
                         
                         <div className="pt-8 h-[120px] w-full relative min-h-[120px]">
                            <ResponsiveContainer width="100%" height="100%">
                               <BarChart data={MOCK_DATA}>
                                  <Bar dataKey="val">
                                     {MOCK_DATA.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                     ))}
                                  </Bar>
                               </BarChart>
                            </ResponsiveContainer>
                         </div>
                      </div>

                      <button className="w-full py-4 bg-white text-black font-display text-xl uppercase hover:bg-zine-red hover:text-white transition-colors">
                         Volver al Resumen
                      </button>
                   </div>
                </div>
             </div>
          ))}
        </div>
      </div>

      {/* Decorative vertical lines */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-black/5" />
      <div className="absolute top-0 right-2/4 w-[1px] h-full bg-black/5" />
    </section>
  );
};
