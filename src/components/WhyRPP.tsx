import React from 'react';
import { motion } from 'motion/react';
import { Award, Zap, Shield, Sparkles, Target, Users, BookOpen, Clock, ArrowUpRight } from 'lucide-react';
import { WavyDivider } from './Common';

const BENEFITS = [
  { 
    id: 1, 
    title: 'RIGOR ACADÉMICO', 
    desc: 'Somos parte de la Universidad de Guadalajara. Cada artículo pasa por un sistema doble ciego de revisión por pares.',
    icon: Shield,
    color: 'bg-[#0f3896]',
    text: 'text-white'
  },
  { 
    id: 2, 
    title: 'NARRATIVA TRANSMEDIA', 
    desc: 'Transformamos papers estáticos en experiencias inmersivas, videos y podcast para mayor alcance.',
    icon: Zap,
    color: 'bg-[#e81e61]',
    text: 'text-white'
  },
  { 
    id: 3, 
    title: 'AUDIENCIAS GLOBALES', 
    desc: 'Conectamos investigadores con lectores a nivel internacional a través de plataformas digitales optimizadas.',
    icon: Users,
    color: 'bg-[#fccb06]',
    text: 'text-black'
  },
  { 
    id: 4, 
    title: 'FUTURO PEDAGÓGICO', 
    desc: 'Exploramos innovaciones como la IA y la NEM con una mirada crítica, reflexiva y profunda.',
    icon: Sparkles,
    color: 'bg-[#5bc2a8]',
    text: 'text-black'
  }
];

export default function WhyRPP() {
  return (
    <section className="bg-cream py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-zine-red selection:text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-zine-red flex items-center justify-center text-white">
                <Target size={24} />
              </div>
              <span className="font-accent font-black tracking-widest text-zine-red uppercase text-sm">Value_Proposition // RPP_Values</span>
            </motion.div>
            
            <h2 className="text-8xl md:text-[10rem] font-display uppercase leading-[0.85] text-zine-black mb-12">
              ¿POR QUÉ<br /><span className="text-zine-red">RPP?</span>
            </h2>
          </div>

          <div className="text-right space-y-4">
             <div className="flex items-center gap-4 justify-end text-sm font-black uppercase tracking-widest text-[#0f3896]">
                <Award size={24} /> Excellence_Status: Active
             </div>
             <p className="text-xs font-mono opacity-40 uppercase tracking-widest tracking-tighter">Established_Since // 2024_Series</p>
          </div>
        </div>

        {/* Benefits Grid - Urban Pop Art Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ rotate: i % 2 === 0 ? -5 : 5, y: 100, opacity: 0 }}
                whileInView={{ rotate: i % 2 === 0 ? -2 : 2, y: 0, opacity: 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className={`${benefit.color} ${benefit.text} p-12 border-4 border-black shadow-[10px_10px_0_#000] flex flex-col justify-between min-h-[450px] relative group overflow-hidden cursor-pointer`}
              >
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform" />
                 <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-black/10 group-hover:rotate-45 transition-transform" />

                 <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 flex items-center justify-center rounded-xl mb-12 border border-white/20 group-hover:bg-white group-hover:text-zine-black transition-all">
                       <Icon size={32} />
                    </div>
                    <h3 className="text-4xl md:text-5xl font-display uppercase leading-none mb-8">
                       {benefit.title}
                    </h3>
                    <p className="text-sm font-bold opacity-70 uppercase tracking-widest leading-relaxed">
                       {benefit.desc}
                    </p>
                 </div>

                 <div className="relative z-10 pt-12 flex items-center justify-between border-t border-current/10">
                    <span className="font-mono text-[9px] tracking-widest font-black uppercase px-3 py-1 bg-black/5 rounded">Factor_0{benefit.id}</span>
                    <Sparkles size={16} className="opacity-40 animate-pulse" />
                 </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="mt-32 p-12 md:p-24 bg-zine-black text-white flex flex-col lg:flex-row items-center justify-between gap-12 border-neobr">
           <div className="max-w-2xl text-center lg:text-left">
              <h4 className="text-5xl md:text-7xl font-display uppercase leading-tight mb-8">¿Listo para<br />ser autor?</h4>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                 Únete a nuestra comunidad de investigadores y expande el impacto de tu trabajo científico a través de la narrativa transmedia.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-12 py-6 bg-zine-red text-white font-display text-2xl uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4 shadow-[8px_8px_0_rgba(179,77,77,0.4)]">
                <BookOpen size={24} /> Convocatoria <ArrowUpRight className="text-[10px]" />
              </button>
              <button className="px-12 py-6 border-4 border-white text-white font-display text-2xl uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4">
                <Clock size={24} /> Próximo Número
              </button>
           </div>
        </div>
      </div>

      <div className="mt-48">
        <WavyDivider color="bg-zine-red" />
      </div>
    </section>
  );
};
