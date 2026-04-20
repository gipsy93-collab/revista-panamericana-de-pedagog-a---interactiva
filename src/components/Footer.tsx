import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Twitter, Youtube, Rss, ArrowUp, Send, Heart, School } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Footer = ({ onBackToTop }: { onBackToTop: () => void }) => {
  const { t } = useLanguage();

  const footerNavLinks = [
    { name: t.nav.inicio, href: '#inicio' },
    { name: t.nav.articulos, href: '#articulos' },
    { name: t.nav.semillero, href: '#semillero' },
    { name: t.nav.transmedia, href: '#transmedia' },
    { name: t.nav.actualidad, href: '#actualidad' },
    { name: t.nav.contacto, href: '#contacto' }
  ];

  return (
    <footer className="bg-[#0f172a] text-white py-12 px-6 md:px-12 lg:px-24 relative overflow-hidden border-t border-white/5">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#fccb06] flex items-center justify-center text-[#0f172a] rounded-lg shrink-0">
                <School size={16} />
              </div>
              <h4 className="text-xl font-display uppercase tracking-tight">
                {t.footer.copyright.split(' // ')[1]}
              </h4>
            </div>
            <p className="text-xs font-sans text-white/30 max-w-xs italic leading-snug">
              "La pedagogía no necesita más recetas; necesita que la comprendamos para apropiarnos de ella."
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
             <div className="flex flex-col gap-3">
                <p className="font-mono text-[7px] text-zinc-600 uppercase tracking-[0.4em]">Navegación</p>
                <div className="flex gap-4">
                   {footerNavLinks.slice(0, 3).map(link => (
                      <a key={link.name} href={link.href} className="text-[10px] font-mono text-white/40 hover:text-[#fccb06] transition-colors uppercase tracking-widest">{link.name}</a>
                   ))}
                </div>
             </div>
             <div className="flex flex-col gap-3">
                <p className="font-mono text-[7px] text-zinc-600 uppercase tracking-[0.4em]">Contact</p>
                <a href="mailto:revista.rpp@up.edu.mx" className="text-[10px] font-mono text-white/60 hover:text-white transition-colors">REVISTA.RPP@UP.EDU.MX</a>
             </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Clean */}
        <div className="pt-8 border-t border-white/5 flex items-center justify-between">
           <div className="flex flex-col">
              <span className="font-mono text-[7px] text-zinc-600 uppercase tracking-widest mb-1">GESTIÓN TRANSMEDIA</span>
              <a href="#" className="font-mono text-[12px] text-[#fccb06] font-black uppercase tracking-[0.1em] hover:opacity-80 transition-opacity">
                 TINKUY LAB // 2026
              </a>
           </div>

           <div className="flex items-center gap-6">
              <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest hidden sm:block">ISSN 2448-6159</span>
              <motion.button 
                whileHover={{ y: -3 }}
                onClick={onBackToTop}
                className="w-10 h-10 bg-white/5 hover:bg-[#fccb06] hover:text-[#0f172a] text-white transition-all flex items-center justify-center rounded-lg border border-white/10"
              >
                 <ArrowUp size={18} />
              </motion.button>
           </div>
        </div>
      </div>
    </footer>
  );
};
