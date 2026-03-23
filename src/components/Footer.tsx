import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Rss, ArrowUp, Send, Heart, School } from 'lucide-react';

export const Footer = ({ onBackToTop }: { onBackToTop: () => void }) => {
  return (
    <footer className="bg-zine-black text-white py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden selection:bg-[#e81e61] selection:text-white">
      {/* Background Graphic elements inspired by NEM pop-art */}
      <div className="absolute top-0 right-0 w-full h-[1px] bg-white/5" />
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5" />
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-32 mb-48">
          
          <div className="w-full lg:w-1/2 space-y-16">
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ rotate: 180 }}
                className="w-16 h-16 bg-white flex items-center justify-center text-zine-black rounded-3xl"
              >
                <School size={32} />
              </motion.div>
              <h4 className="text-4xl md:text-5xl font-display uppercase leading-tight selection:bg-white selection:text-black">
                Universidad<br />de Guadalajara
              </h4>
            </div>

            <p className="text-2xl md:text-3xl font-sans text-white/40 leading-relaxed font-light max-w-xl selection:bg-white selection:text-black italic">
              "La pedagogía no necesita más recetas; necesita que comprendamos nuestros linajes teóricos para poder apropiarnos de ellos en el aula."
            </p>

            <div className="flex flex-col gap-6 pt-12 border-t border-white/5">
               <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.5em] mb-4">Contact_Stream // RPP_Inquiry</p>
               <a 
                 href="mailto:revista.rpp@up.edu.mx" 
                 className="group text-3xl md:text-5xl font-display uppercase tracking-tighter text-white hover:text-[#fccb06] transition-colors flex items-center gap-6"
               >
                 revista.rpp@up.edu.mx <Send size={32} className="group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform text-white/20" />
               </a>
            </div>
          </div>

          <div className="w-full lg:w-1/3 grid grid-cols-2 gap-16">
             <div className="space-y-12">
                <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.5em]">Sections_map</p>
                <ul className="space-y-6">
                   {['INICIO', 'ARTICULOS', 'SEMILLERO', 'TRANSMEDIA', 'ACTUALIDAD', 'WHY RPP'].map(link => (
                      <li key={link}>
                         <a href={`#${link.toLowerCase()}`} className="text-xl font-display text-white/40 hover:text-[#e81e61] transition-colors uppercase">{link}</a>
                      </li>
                   ))}
                </ul>
             </div>

             <div className="space-y-12">
                <p className="font-mono text-[9px] text-white/20 uppercase tracking-[0.5em]">Connect_now</p>
                <div className="flex flex-col gap-6">
                  {[
                    { icon: Instagram, label: 'INSTAGRAM' },
                    { icon: Twitter, label: 'TWITTER' },
                    { icon: Youtube, label: 'YOUTUBE' },
                    { icon: Rss, label: 'RSS_FEED' }
                  ].map((social, i) => {
                    const Icon = social.icon;
                    return (
                      <a 
                        key={i} 
                        href="#" 
                        className="group flex items-center gap-4 text-xl font-display text-white/40 hover:text-white transition-all"
                      >
                         <Icon size={20} className="group-hover:rotate-12 transition-transform" /> {social.label}
                      </a>
                    );
                  })}
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Section - Urban Refined */}
        <div className="pt-24 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-12 text-zinc-600">
           <div className="flex items-center gap-12 flex-col md:flex-row text-center md:text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest font-black text-white">EST. 2026 // RPP_PLATFORM_v3.0</span>
              <div className="flex items-center gap-2">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                 <span className="font-mono text-[9px] uppercase tracking-widest">System_Online_&_Synced</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest flex items-center gap-2">
                 Made with <Heart size={10} className="text-zine-red fill-zine-red" /> by Science_Transmedia_Labs
              </p>
           </div>
           
           <div className="flex items-center gap-12">
              <span className="font-mono text-[10px] uppercase tracking-widest hidden md:inline">Global_Scientific_Network // ISSN-2448-6159</span>
              <button 
                onClick={onBackToTop}
                className="w-16 h-16 bg-white text-zine-black hover:bg-zine-red hover:text-white transition-all flex items-center justify-center rounded-2xl group shadow-[8px_8px_0_rgba(255,255,255,0.05)]"
              >
                 <ArrowUp size={32} className="group-hover:-translate-y-2 transition-transform" />
              </button>
           </div>
        </div>
      </div>
      
      {/* Visual noise/grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay grainy-overlay" />
    </footer>
  );
};
