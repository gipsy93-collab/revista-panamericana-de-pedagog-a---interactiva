import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, Sparkles, FileText, Users, Play, Newspaper, Mail, 
  Instagram, Twitter, Youtube, Rss, Globe 
} from 'lucide-react';
import { NavItem } from '../types';
import { useLanguage } from '../LanguageContext';

export const Navbar = ({ 
  scrollToSection, 
  currentSection 
}: { 
  scrollToSection: (index: number) => void;
  currentSection: number;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const navItems: NavItem[] = [
    { name: t.nav.inicio, index: 0, icon: Sparkles },
    { name: t.nav.articulos, index: 1, icon: FileText },
    { name: t.nav.semillero, index: 2, icon: Users },
    { name: t.nav.transmedia, index: 3, icon: Play },
    { name: t.nav.actualidad, index: 4, icon: Newspaper },
    { name: t.nav.contacto, index: 5, icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Progress Bar - Refined with gradient */}
      <div className="fixed top-0 left-0 w-full h-[3px] bg-white/10 z-[120]">
        <motion.div 
          className="h-full bg-gradient-to-r from-zine-red via-orange-500 to-[#fccb06]"
          initial={{ width: 0 }}
          animate={{ 
            width: `${((currentSection + 1) / 6) * 100}%`,
          }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main Navbar Trigger & Language Switcher */}
      <nav className={`fixed top-4 right-4 md:top-8 md:right-8 z-[110] flex items-center gap-3 md:gap-4 transition-all duration-500 ${scrolled ? 'scale-90 -translate-y-2' : ''}`}>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
          className="h-12 md:h-16 px-4 md:px-6 rounded-full bg-zine-black text-white border-2 border-black/10 backdrop-blur-md shadow-2xl flex items-center gap-2 md:gap-3 font-mono text-xs md:text-sm font-black hover:bg-[#0f3896] transition-colors"
        >
          <Globe size={18} className={language === 'en' ? 'text-[#fccb06]' : 'text-white'} />
          <span className="tracking-widest">{language.toUpperCase()}</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all border-2 border-black/10 backdrop-blur-md ${
            isOpen 
              ? 'bg-white text-zine-red' 
              : 'bg-zine-black text-white hover:bg-[#e81e61]'
          }`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Full Screen Menu - Enhanced with PopArt inspirations */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0.1% at 95% 5%)', opacity: 0 }}
            animate={{ clipPath: 'circle(150% at 95% 5%)', opacity: 1 }}
            exit={{ clipPath: 'circle(0.1% at 95% 5%)', opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 z-[105] bg-zine-black text-white flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Artistic background - Pop art style */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
              <div className="absolute inset-0" style={{ 
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-zine-red/20 via-transparent to-[#0f3896]/20" />
            </div>
            
            <div className="relative z-10 flex flex-col items-center space-y-4 md:space-y-6">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = currentSection === item.index;
                return (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: 50, rotate: -5 }}
                    animate={{ opacity: 1, y: 0, rotate: 0 }}
                    transition={{ delay: 0.2 + i * 0.05, type: 'spring' }}
                    onClick={() => {
                      scrollToSection(item.index);
                      setIsOpen(false);
                    }}
                    className={`group relative flex items-center gap-4 text-3xl md:text-5xl font-display uppercase transition-all px-8 py-3 rounded-2xl ${
                      isActive 
                        ? 'text-[#fccb06]' 
                        : 'text-white/40 hover:text-white'
                    }`}
                  >
                    <span className="hidden md:inline font-mono text-xs opacity-40 absolute -left-4 top-1/2 -translate-y-1/2 tracking-tighter">0{i+1}</span>
                    <Icon size={isActive ? 32 : 24} className={`transition-all ${isActive ? 'scale-125' : 'group-hover:scale-110 group-hover:text-zine-red'}`} />
                    <span className="relative">
                       {item.name}
                       <motion.div 
                         className="absolute -bottom-2 left-0 h-1 bg-current" 
                         initial={{ width: 0 }}
                         animate={{ width: isActive ? '100%' : '0%' }}
                         whileHover={{ width: '100%' }}
                       />
                    </span>
                  </motion.button>
                );
              })}
            </div>

            {/* Social Links & Info */}
            <div className="absolute bottom-20 flex flex-col items-center gap-10">
              <div className="flex gap-8">
                {[
                  { icon: Instagram, color: 'hover:bg-[#e81e61]' },
                  { icon: Twitter, color: 'hover:bg-[#00f0ff]' },
                  { icon: Youtube, color: 'hover:bg-red-600' },
                  { icon: Rss, color: 'hover:bg-orange-500' }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href="#"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                      className={`w-14 h-14 rounded-full border-2 border-white/10 flex items-center justify-center transition-all ${social.color} hover:border-transparent hover:scale-110 shadow-lg`}
                    >
                      <Icon size={24} />
                    </motion.a>
                  );
                })}
              </div>
              <p className="font-mono text-[9px] tracking-[0.6em] opacity-30 text-white uppercase selection:bg-white selection:text-black">
                Universidad de Guadalajara // Revista Panamericana de Pedagogía
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
