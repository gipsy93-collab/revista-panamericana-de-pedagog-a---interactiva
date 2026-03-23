import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowUpRight, Feather, Eye, MessageCircle, ChevronRight } from 'lucide-react';

const BLOG_POSTS = [
  { 
    id: 1, 
    title: 'RIGOR ACADÉMICO', 
    desc: 'Somos parte de la Universidad de Guadalajara. Cada artículo pasa por un sistema doble ciego de revisión por pares.',
    icon: Feather,
    color: 'bg-[#0f3896]',
    text: 'text-white',
    date: '15 MAR 2026',
    readTime: '5 min',
    category: 'Editorial'
  },
  { 
    id: 2, 
    title: 'NARRATIVA TRANSMEDIA', 
    desc: 'Transformamos papers estáticos en experiencias inmersivas, videos y podcast para mayor alcance.',
    icon: Eye,
    color: 'bg-[#e81e61]',
    text: 'text-white',
    date: '12 MAR 2026',
    readTime: '8 min',
    category: 'Innovación'
  },
  { 
    id: 3, 
    title: 'AUDIENCIAS GLOBALES', 
    desc: 'Conectamos investigadores con lectores a nivel internacional a través de plataformas digitales optimizadas.',
    icon: MessageCircle,
    color: 'bg-[#fccb06]',
    text: 'text-black',
    date: '08 MAR 2026',
    readTime: '6 min',
    category: 'Comunidad'
  },
  { 
    id: 4, 
    title: 'FUTURO PEDAGÓGICO', 
    desc: 'Exploramos innovaciones como la IA y la NEM con una mirada crítica, reflexiva y profunda.',
    icon: BookOpen,
    color: 'bg-[#5bc2a8]',
    text: 'text-black',
    date: '05 MAR 2026',
    readTime: '10 min',
    category: 'Tendencias'
  }
];

export default function BlogSection() {
  return (
    <section className="bg-[#1a1a1a] py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-[#fccb06] selection:text-black">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e81e61]/5 blur-[200px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0f3896]/5 blur-[200px] rounded-full" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-12 mb-32">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 bg-[#fccb06] flex items-center justify-center text-black">
                <Feather size={24} />
              </div>
              <span className="font-accent font-black tracking-widest text-[#fccb06] uppercase text-sm">Blog Editorial // RPP_Insights</span>
            </motion.div>
            
            <h2 className="text-6xl md:text-8xl font-display uppercase leading-[0.85] text-white mb-8">
              BLOG<br /><span className="text-[#fccb06]">PEDAGÓGICO</span>
            </h2>
            
            <p className="text-xl text-white/60 max-w-xl">
              Reflexiones, análisis y novedades del mundo de la pedagogía y la innovación educativa.
            </p>
          </div>

          <div className="text-right space-y-4">
             <div className="flex items-center gap-4 justify-end text-sm font-black uppercase tracking-widest text-[#5bc2a8]">
                <BookOpen size={24} /> Blog_Active
             </div>
             <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Últimas_Entradas // Marzo_2026</p>
          </div>
        </div>

        {/* Blog Posts Grid - Mismo diseño de tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {BLOG_POSTS.map((post, i) => {
            const Icon = post.icon;
            return (
              <motion.article
                key={post.id}
                initial={{ rotate: i % 2 === 0 ? -5 : 5, y: 100, opacity: 0 }}
                whileInView={{ rotate: i % 2 === 0 ? -2 : 2, y: 0, opacity: 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                className={`${post.color} ${post.text} p-8 border-4 border-black shadow-[10px_10px_0_#000] flex flex-col justify-between min-h-[450px] relative group overflow-hidden cursor-pointer`}
              >
                 {/* Decorative elements */}
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform" />
                 <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-black/10 group-hover:rotate-45 transition-transform" />

                 <div className="relative z-10">
                    {/* Meta info */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-black/10 rounded">
                        {post.category}
                      </span>
                      <span className="font-mono text-[9px] opacity-60">{post.readTime}</span>
                    </div>
                    
                    <div className="w-14 h-14 bg-white/20 flex items-center justify-center rounded-xl mb-8 border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                       <Icon size={28} />
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-display uppercase leading-none mb-6">
                       {post.title}
                    </h3>
                    <p className="text-sm font-bold opacity-70 uppercase tracking-widest leading-relaxed">
                       {post.desc}
                    </p>
                 </div>

                 <div className="relative z-10 pt-8 flex items-center justify-between border-t border-current/10">
                    <span className="font-mono text-[10px] opacity-60">{post.date}</span>
                    <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase group-hover:translate-x-1 transition-transform">
                      Leer <ChevronRight size={14} />
                    </div>
                 </div>
              </motion.article>
            );
          })}
        </div>

        {/* Call to action section */}
        <div className="mt-32 p-12 md:p-24 bg-black text-white flex flex-col lg:flex-row items-center justify-between gap-12 border-4 border-white/10">
           <div className="max-w-2xl text-center lg:text-left">
              <h4 className="text-5xl md:text-6xl font-display uppercase leading-tight mb-8">¿Quieres<br /><span className="text-[#fccb06]">contribuir?</span></h4>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                 Comparte tu perspectiva sobre pedagogía, innovación educativa y ciencia del aprendizamiento.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-12 py-6 bg-[#fccb06] text-black font-display text-2xl uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4 shadow-[8px_8px_0_rgba(252,203,6,0.3)]">
                <BookOpen size={24} /> Escribir <ArrowUpRight className="text-[10px]" />
              </button>
              <button className="px-12 py-6 border-4 border-white text-white font-display text-2xl uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4">
                <Clock size={24} /> Archivo
              </button>
           </div>
        </div>
      </div>

    </section>
  );
}
