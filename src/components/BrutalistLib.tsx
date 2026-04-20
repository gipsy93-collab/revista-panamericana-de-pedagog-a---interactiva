import React from 'react';
import { motion } from 'motion/react';
import { OrganicWaveDivider } from './OrganicWaveDivider';
export { OrganicWaveDivider };

/**
 * LABORATORIO DE COMPONENTES BRUTALISTAS PREMIUM
 * Solo para uso en la estética de los artículos interactivos.
 * Añade textura, profundidad y animaciones cinemáticas.
 */

// 1. EL TÍTULO DE IMPACTO (Estilo Portada de Revista)
export const BrutalTitle = ({ children, className = "", stroke }: { children: React.ReactNode, className?: string, stroke?: string }) => (
  <motion.h1 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`font-display uppercase leading-tight text-white drop-shadow-[8px_8px_0_#000] ${className}`}
    style={{ WebkitTextStroke: stroke || 'var(--brutal-stroke-width) black' }}>
    {children}
  </motion.h1>
);

// 1.1 TÍTULO PREMIUM (Con efecto de revelado y más peso visual)
export const PremiumTitle = ({ children, subtitle, className = "" }: { children: React.ReactNode, subtitle?: string, className?: string }) => (
  <div className={`flex flex-col gap-4 ${className}`}>
    {subtitle && (
      <motion.span 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="font-mono text-sm uppercase tracking-[0.3em] text-black/50"
      >
        // {subtitle}
      </motion.span>
    )}
    <motion.h2 
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", damping: 12 }}
      className="text-6xl md:text-8xl font-display uppercase leading-[0.9] text-black selection:bg-black selection:text-white"
    >
      {children}
    </motion.h2>
  </div>
);

// 2. LA TARJETA DE HALLAZGOS (Como un recorte de papel grueso)
export const BrutalCard = ({ 
  children, 
  title,
  color = "bg-white", 
  shadowColor = "rgba(0,0,0,1)", 
  rotate = "rotate-0",
  className = "" 
}: { 
  children: React.ReactNode, 
  title?: string,
  color?: string, 
  shadowColor?: string,
  rotate?: string,
  className?: string 
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    className={`${color} border-[4px] border-black p-8 ${rotate} shadow-[12px_12px_0px_0px_${shadowColor}] transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[16px_16px_0px_0px_${shadowColor}] ${className} relative group`}
  >
    {/* Textura sutil interna por carta */}
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:opacity-[0.05] transition-opacity" />
    <div className="relative z-10">
      {title && <h3 className="text-xl font-display uppercase font-black mb-4 border-b-4 border-black pb-2">{title}</h3>}
      {children}
    </div>
  </motion.div>
);

// 2.1 TARJETA CINEMÁTICA (Para hallazgos clave con mayor densidad)
export const CinematicCard = ({ children, title, icon: Icon, color="bg-pop-yellow", className="" }: any) => (
  <BrutalCard color={color} className={`flex flex-col gap-4 ${className}`}>
    <div className="flex items-center justify-between mb-2">
      <div className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-sm">
        {Icon && <Icon size={24} />}
      </div>
      <span className="font-mono text-[10px] uppercase font-bold opacity-40">SYSTEM DATA ENTRY</span>
    </div>
    {title && <h3 className="text-2xl font-display uppercase leading-none">{title}</h3>}
    <div className="font-sans text-lg leading-relaxed text-black/80 font-medium">
      {children}
    </div>
  </BrutalCard>
);

// 3. LA PEGATINA / STICKER (Para etiquetas pequeñas)
export const BrutalSticker = ({ text, color = "bg-pop-yellow", className = "" }: { text: string, color?: string, className?: string }) => (
  <div className={`${color} inline-block border-2 border-black px-4 py-1 font-pop text-sm uppercase tracking-widest shadow-[4px_4px_0_#000] rotate-[-2deg] ${className}`}>
    {text}
  </div>
);

// 4. EL "POST-IT" PARA CITAS (Para resaltar frases sin tocar el texto)
export const BrutalQuote = ({ children, className = "", author }: { children: React.ReactNode, className?: string, author?: string }) => (
  <div className={`relative p-10 bg-pop-teal/20 border-l-[12px] border-black ${className}`}>
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white flex items-center justify-center font-serif text-4xl">
      "
    </div>
    <div className="text-3xl font-serif italic leading-relaxed text-black/80">
      {children}
    </div>
    {author && (
      <div className="mt-4 text-sm font-bold uppercase tracking-widest text-black/60">
        — {author}
      </div>
    )}
  </div>
);

// 5. SEPARADOR DE SECCIÓN TRASH (Estilo rasgado o rudo)
export const BrutalDivider = () => (
  <div className="w-full h-4 bg-black my-20 shadow-[0_10px_0_#e81e61]" />
);

// 6. SECCIÓN CON ONDAS ORGÁNICAS
export const WaveSection = ({ 
  children, 
  topColor, 
  bottomColor, 
  className = "",
  variant = "gentle" as any
}: { 
  children: React.ReactNode, 
  topColor: string, 
  bottomColor: string, 
  className?: string,
  variant?: string
}) => (
  <div className={`relative ${className}`} style={{ backgroundColor: bottomColor }}>
    <OrganicWaveDivider 
      topColor={topColor} 
      bottomColor={bottomColor} 
      variant={variant as any}
      height={100} 
    />
    <div className="py-20 px-6 md:px-12 lg:px-24">
      {children}
    </div>
  </div>
);

// 7. FICHA TÉCNICA ACADÉMICA (Estandarizada)
export const ArticleFicha = ({ 
  doi, 
  authors, 
  institution, 
  vol, 
  date,
  className = "" 
}: { 
  doi: string; 
  authors: string; 
  institution: string; 
  vol: string; 
  date: string;
  className?: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, x: 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    className={`bg-white border-4 border-black p-6 shadow-[12px_12px_0_0_#000] flex flex-col gap-4 text-left max-w-sm relative ${className}`}
  >
    <div className="absolute -top-4 -right-4 bg-black text-white px-3 py-1 font-mono text-[10px] uppercase font-black">
      METADATA // PDF ORIGINAL
    </div>
    
    <div className="border-b-2 border-black/10 pb-2">
      <span className="block font-mono text-[9px] uppercase font-black opacity-30">DIGITAL OBJECT ID</span>
      <a
        href={`https://doi.org/${doi}`}
        target="_blank"
        rel="noreferrer"
        className="text-xs font-black break-all selection:bg-black selection:text-white uppercase hover:text-blue-600 transition-colors"
      >
        {doi}
      </a>
    </div>

    <div className="border-b-2 border-black/10 pb-2">
      <span className="block font-mono text-[9px] uppercase font-black opacity-30">Authors</span>
      <span className="text-sm font-display uppercase leading-tight">{authors}</span>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <span className="block font-mono text-[9px] uppercase font-black opacity-30">PUB DATE</span>
        <span className="text-xs font-black uppercase">{date}</span>
      </div>
      <div>
        <span className="block font-mono text-[9px] uppercase font-black opacity-30">JOURNAL VOL</span>
        <span className="text-xs font-black uppercase">{vol}</span>
      </div>
    </div>

    <div>
      <span className="block font-mono text-[9px] uppercase font-black opacity-30">Institution</span>
      <span className="text-[11px] font-bold uppercase leading-tight opacity-70 italic">{institution}</span>
    </div>
  </motion.div>
);
