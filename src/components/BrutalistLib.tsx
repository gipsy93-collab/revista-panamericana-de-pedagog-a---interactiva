import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { OrganicWaveDivider } from './OrganicWaveDivider';
export { OrganicWaveDivider };

/**
 * LABORATORIO DE COMPONENTES BRUTALISTAS PREMIUM — RPP INTERACTIVO
 * Incluye:
 * - Palabras que caen en cascada con interacción al cursor (FallingWords / PremiumTitle)
 * - Tarjetas con Parallax 3D al movimiento del mouse (BrutalCard / CinematicCard / Tilt3DCard)
 * - Contadores numéricos rápidos y animados (RapidCounter)
 * - Bordes redondeados orgánicos y contornos tipográficos limpios
 */

// 0. CONTADOR RÁPIDO INTERACTIVO (Para estadísticas y números vivos)
export const RapidCounter = ({
  target,
  duration = 0.85,
  prefix = '',
  suffix = '',
  decimals = 0,
  className = '',
}: {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-30px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) {
      setCount(0);
      return;
    }
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Number((easeOut * target).toFixed(decimals)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, isInView, decimals]);

  return (
    <motion.span
      ref={ref}
      key={target}
      initial={{ scale: 0.8, opacity: 0.4 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 420, damping: 18 }}
      className={`inline-block tabular-nums ${className}`}
    >
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </motion.span>
  );
};

// 0.1 COMPONENTE DE PALABRAS QUE CAEN EN CASCADA CON HOVER INTERACTIVO
export const FallingWords = ({
  text,
  accentColor = '#10b981',
  highlightEvery = 0,
  highlightWords = [],
  className = '',
  wordClassName = '',
}: {
  text: string;
  accentColor?: string;
  highlightEvery?: number;
  highlightWords?: string[];
  className?: string;
  wordClassName?: string;
}) => {
  const words = text.split(' ').filter(Boolean);

  return (
    <span className={`inline-flex flex-wrap gap-x-3 md:gap-x-4 gap-y-1.5 ${className}`}>
      {words.map((word, i) => {
        const cleanWord = word.toLowerCase().replace(/[.,:;¿?¡!()"]/g, '');
        const isHighlighted =
          (highlightEvery > 0 && i > 0 && i % highlightEvery === 0) ||
          highlightWords.includes(cleanWord);

        return (
          <motion.span
            key={`${word}-${i}`}
            initial={{ opacity: 0, y: -48, rotate: i % 2 === 0 ? -5 : 5, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
            transition={{
              delay: 0.1 + i * 0.038,
              type: 'spring',
              stiffness: 360,
              damping: 20,
            }}
            whileHover={{
              scale: 1.09,
              y: -4,
              color: accentColor,
              transition: { duration: 0.14 },
            }}
            style={isHighlighted ? { color: accentColor } : undefined}
            className={`inline-block cursor-default select-none transition-colors ${wordClassName}`}
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

// 0.2 CONTENEDOR 3D TILT CON MOUSE PARALLAX
export const Tilt3DCard = ({
  children,
  className = '',
  intensity = 9,
}: {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 22, stiffness: 280 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(xPct);
    mouseY.set(yPct);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// 1. EL TÍTULO DE IMPACTO (Sin contornos saturados, con caída de palabras si es texto)
export const BrutalTitle = ({
  children,
  className = '',
  accentColor = '#10b981',
}: {
  children: React.ReactNode;
  className?: string;
  stroke?: string;
  accentColor?: string;
}) => (
  <motion.h1
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`font-display uppercase leading-[0.95] tracking-normal text-white drop-shadow-[6px_6px_0_#000] ${className}`}
  >
    {typeof children === 'string' ? (
      <FallingWords text={children} accentColor={accentColor} />
    ) : (
      children
    )}
  </motion.h1>
);

// 1.1 TÍTULO PREMIUM (Con palabras que caen en cascada e interactividad con el cursor)
export const PremiumTitle = ({
  children,
  subtitle,
  className = '',
  accentColor = '#10b981',
  textColor = 'text-black',
}: {
  children: React.ReactNode;
  subtitle?: string;
  className?: string;
  accentColor?: string;
  textColor?: string;
}) => (
  <div className={`flex flex-col gap-3 ${className}`}>
    {subtitle && (
      <motion.span
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="font-mono text-xs md:text-sm uppercase tracking-[0.28em] opacity-65 font-bold flex items-center gap-2"
      >
        <Sparkles size={15} style={{ color: accentColor }} className="shrink-0" />
        <span>// {subtitle}</span>
      </motion.span>
    )}
    <h2
      className={`text-4xl sm:text-5xl md:text-7xl font-display uppercase font-black leading-[0.94] tracking-normal ${textColor} selection:bg-black selection:text-white`}
    >
      {typeof children === 'string' ? (
        <FallingWords text={children} accentColor={accentColor} />
      ) : (
        <motion.span
          initial={{ y: -35, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="inline-block"
        >
          {children}
        </motion.span>
      )}
    </h2>
  </div>
);

// 2. LA TARJETA DE HALLAZGOS (Con 3D Mouse Tilt, aparición elástica y bordes redondos)
export const BrutalCard = ({
  children,
  title,
  color = 'bg-white',
  shadowColor = 'rgba(0,0,0,1)',
  rotate = 'rotate-0',
  className = '',
}: {
  children: React.ReactNode;
  title?: string;
  color?: string;
  shadowColor?: string;
  rotate?: string;
  className?: string;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 280 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      whileHover={{ y: -6, scale: 1.015 }}
      className={`${color} border-[4px] border-black p-8 ${rotate} rounded-3xl shadow-[12px_12px_0px_0px_${shadowColor}] transition-shadow hover:shadow-[18px_18px_0px_0px_${shadowColor}] ${className} relative group`}
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-3xl bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] group-hover:opacity-[0.05] transition-opacity" />
      <div className="relative z-10">
        {title && (
          <h3 className="text-xl font-display uppercase font-black mb-4 border-b-4 border-black pb-2 tracking-normal">
            {title}
          </h3>
        )}
        {children}
      </div>
    </motion.div>
  );
};

// 2.1 TARJETA CINEMÁTICA (Para hallazgos clave con interactividad al cursor)
export const CinematicCard = ({
  children,
  title,
  icon: Icon,
  color = 'bg-pop-yellow',
  className = '',
}: any) => (
  <BrutalCard color={color} className={`flex flex-col gap-4 ${className}`}>
    <div className="flex items-center justify-between mb-2">
      <motion.div
        whileHover={{ rotate: 10, scale: 1.12 }}
        className="w-12 h-12 bg-black text-white flex items-center justify-center rounded-2xl shadow-[3px_3px_0_0_rgba(0,0,0,0.25)]"
      >
        {Icon && <Icon size={24} />}
      </motion.div>
      <span className="font-mono text-[10px] uppercase font-bold opacity-45 tracking-wider">
        HALLAZGO CLAVE
      </span>
    </div>
    {title && <h3 className="text-2xl font-display uppercase leading-tight tracking-normal">{title}</h3>}
    <div className="font-sans text-lg leading-relaxed opacity-90 font-medium">{children}</div>
  </BrutalCard>
);

// 3. LA PEGATINA / STICKER (Con rebote elástico y bordes redondeados)
export const BrutalSticker = ({
  text,
  color = 'bg-pop-yellow',
  className = '',
}: {
  text: string;
  color?: string;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -25, scale: 0.85 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true }}
    transition={{ type: 'spring', stiffness: 380, damping: 20 }}
    whileHover={{ scale: 1.06, rotate: 1, y: -2 }}
    className={`${color} inline-block border-2 border-black px-5 py-2 rounded-2xl font-pop text-xs md:text-sm uppercase tracking-widest shadow-[4px_4px_0_#000] cursor-default select-none ${className}`}
  >
    {text}
  </motion.div>
);

// 4. EL "POST-IT" PARA CITAS (Con entrada animada y bordes redondeados)
export const BrutalQuote = ({
  children,
  className = '',
  author,
}: {
  children: React.ReactNode;
  className?: string;
  author?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -30, scale: 0.97 }}
    whileInView={{ opacity: 1, x: 0, scale: 1 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.01, x: 4 }}
    transition={{ type: 'spring', stiffness: 280, damping: 22 }}
    className={`relative p-8 md:p-10 bg-pop-teal/20 border-l-[12px] border-black rounded-3xl shadow-[8px_8px_0_0_rgba(0,0,0,0.08)] ${className}`}
  >
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-black text-white rounded-2xl flex items-center justify-center font-serif text-4xl shadow-[4px_4px_0_0_#10b981]">
      "
    </div>
    <div className="text-2xl md:text-3xl font-serif italic leading-relaxed text-black/85">
      {children}
    </div>
    {author && (
      <div className="mt-4 text-sm font-bold uppercase tracking-widest text-black/65">
        — {author}
      </div>
    )}
  </motion.div>
);

// 5. SEPARADOR DE SECCIÓN
export const BrutalDivider = () => (
  <div className="w-full h-4 bg-black my-20 rounded-full shadow-[0_10px_0_#e81e61]" />
);

// 6. SECCIÓN CON ONDAS ORGÁNICAS
export const WaveSection = ({
  children,
  topColor,
  bottomColor,
  className = '',
  variant = 'gentle' as any,
}: {
  children: React.ReactNode;
  topColor: string;
  bottomColor: string;
  className?: string;
  variant?: string;
}) => (
  <div className={`relative ${className}`} style={{ backgroundColor: bottomColor }}>
    <OrganicWaveDivider
      topColor={topColor}
      bottomColor={bottomColor}
      variant={variant as any}
      height={100}
    />
    <div className="py-20 px-6 md:px-12 lg:px-24">{children}</div>
  </div>
);

// 7. FICHA TÉCNICA ACADÉMICA (Ya integrada en ArticleHeader; se mantiene por compatibilidad)
export const ArticleFicha = ({
  doi,
  authors,
  institution,
  vol,
  date,
  className = '',
}: {
  doi: string;
  authors: string;
  institution: string;
  vol: string;
  date: string;
  className?: string;
}) => (
  <Tilt3DCard
    className={`bg-white border-4 border-black p-6 shadow-[12px_12px_0_0_#000] rounded-3xl flex flex-col gap-4 text-left max-w-sm relative ${className}`}
  >
    <div className="absolute -top-3.5 -right-3 bg-black text-white px-3 py-1 rounded-xl font-mono text-[10px] uppercase font-black">
      METADATA // PDF ORIGINAL
    </div>

    <div className="border-b-2 border-black/10 pb-2">
      <span className="block font-mono text-[9px] uppercase font-black opacity-40">
        DIGITAL OBJECT ID
      </span>
      <a
        href={`https://doi.org/${doi}`}
        target="_blank"
        rel="noreferrer"
        className="text-xs font-mono font-bold break-all selection:bg-black selection:text-white uppercase hover:text-blue-600 transition-colors"
      >
        {doi}
      </a>
    </div>

    <div className="border-b-2 border-black/10 pb-2">
      <span className="block font-mono text-[9px] uppercase font-black opacity-40">Authors</span>
      <span className="text-sm font-sans font-bold uppercase leading-tight">{authors}</span>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <div>
        <span className="block font-mono text-[9px] uppercase font-black opacity-40">PUB DATE</span>
        <span className="text-xs font-bold uppercase">{date}</span>
      </div>
      <div>
        <span className="block font-mono text-[9px] uppercase font-black opacity-40">
          JOURNAL VOL
        </span>
        <span className="text-xs font-bold uppercase">{vol}</span>
      </div>
    </div>

    <div>
      <span className="block font-mono text-[9px] uppercase font-black opacity-40">
        Institution
      </span>
      <span className="text-[11px] font-semibold uppercase leading-tight opacity-75 italic">
        {institution}
      </span>
    </div>
  </Tilt3DCard>
);
