import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Clock, ArrowUpRight, Feather, Eye, MessageCircle, ChevronRight, Share2 } from 'lucide-react';

// URL de Substack de RPP (Ajustar cuando se tenga la definitiva)
const SUBSTACK_RSS_URL = 'https://revpanamericanadepedagogia.substack.com/feed';
const RSS_CONVERTER_API = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(SUBSTACK_RSS_URL)}`;

interface SubstackPost {
  id: string;
  title: string;
  desc: string;
  link: string;
  date: string;
  thumbnail: string;
  category: string;
}

export default function BlogSection() {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(RSS_CONVERTER_API)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok' && data.items) {
          const mappedPosts = data.items.map((item: any, index: number) => ({
            id: item.guid || index.toString(),
            title: item.title,
            desc: item.description.replace(/<[^>]*>?/gm, '').substring(0, 120) + '...',
            link: item.link,
            date: new Date(item.pubDate).toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' }),
            thumbnail: item.thumbnail || item.enclosure?.link,
            category: item.categories?.[0] || 'Editorial'
          }));
          setPosts(mappedPosts.slice(0, 4)); // Tomamos los 4 más recientes
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching Substack RSS:", err);
        setLoading(false);
      });
  }, []);

  const cardColors = ['bg-[#0f3896]', 'bg-[#e81e61]', 'bg-[#fccb06]', 'bg-[#5bc2a8]'];
  const textColors = ['text-white', 'text-white', 'text-black', 'text-black'];

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
                <RssIcon size={24} />
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
                <Share2 size={24} /> Live_Updates
             </div>
             <p className="text-xs font-mono text-white/40 uppercase tracking-widest">Feed_Sync // {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {loading ? (
            Array(4).fill(0).map((_, i) => (
              <div key={i} className="bg-white/5 border-4 border-white/10 p-8 h-[450px] animate-pulse rounded-2xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-20 h-4 bg-white/20 rounded" />
                  <div className="w-full h-8 bg-white/20 rounded" />
                  <div className="w-full h-24 bg-white/10 rounded" />
                </div>
                <div className="w-full h-10 bg-white/20 rounded" />
              </div>
            ))
          ) : posts.length > 0 ? (
            posts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ rotate: i % 2 === 0 ? -5 : 5, y: 100, opacity: 0 }}
                whileInView={{ rotate: i % 2 === 0 ? -2 : 2, y: 0, opacity: 1 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring' }}
                onClick={() => window.open(post.link, '_blank')}
                className={`${cardColors[i % 4]} ${textColors[i % 4]} p-8 border-4 border-black shadow-[10px_10px_0_#000] flex flex-col justify-between min-h-[450px] relative group overflow-hidden cursor-pointer`}
              >
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full group-hover:scale-150 transition-transform" />
                 
                 <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-black/10 rounded">
                        {post.category}
                      </span>
                    </div>
                    
                    {post.thumbnail ? (
                      <div className="w-full h-32 mb-8 border-2 border-black overflow-hidden bg-black/20">
                        <img src={post.thumbnail} alt={post.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-white/20 flex items-center justify-center rounded-xl mb-8 border border-white/20 group-hover:bg-white group-hover:text-black transition-all">
                         <BookOpen size={28} />
                      </div>
                    )}
                    
                    <h3 className="text-2xl md:text-3xl font-display uppercase leading-none mb-6">
                       {post.title}
                    </h3>
                    <p className="text-xs font-bold opacity-70 uppercase tracking-widest leading-relaxed line-clamp-4">
                       {post.desc}
                    </p>
                 </div>

                 <div className="relative z-10 pt-8 flex items-center justify-between border-t border-current/10">
                    <span className="font-mono text-[10px] opacity-60">{post.date}</span>
                    <div className="flex items-center gap-2 font-mono text-[10px] font-black uppercase group-hover:translate-x-1 transition-transform">
                      Leer en Substack <ChevronRight size={14} />
                    </div>
                 </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full py-20 border-4 border-dashed border-white/20 text-white/40 text-center font-mono">
               No se pudieron cargar las entradas de Substack.
            </div>
          )}
        </div>

        {/* Call to action section */}
        <div className="mt-32 p-12 md:p-24 bg-black text-white flex flex-col lg:flex-row items-center justify-between gap-12 border-4 border-white/10">
           <div className="max-w-2xl text-center lg:text-left">
              <h4 className="text-5xl md:text-6xl font-display uppercase leading-tight mb-8">Suscríbete a<br /><span className="text-[#fccb06]">Substack RPP</span></h4>
              <p className="text-white/40 text-xl font-light leading-relaxed">
                 Recibe nuestras investigaciones y reflexiones directamente en tu correo electrónico.
              </p>
           </div>
           
           <div className="flex flex-col sm:flex-row gap-6">
              <button 
                onClick={() => window.open('https://revpanamericanadepedagogia.substack.com', '_blank')}
                className="px-12 py-6 bg-[#fccb06] text-black font-display text-2xl uppercase hover:bg-white hover:text-black transition-all flex items-center gap-4 shadow-[8px_8px_0_rgba(252,203,6,0.3)]"
              >
                <ArrowUpRight size={24} /> Suscribirse
              </button>
           </div>
        </div>
      </div>
    </section>
  );
}

// Icono decorativo para el RSS
const RssIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"/><path d="M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/></svg>
);

