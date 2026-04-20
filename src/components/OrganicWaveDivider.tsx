import { motion } from 'motion/react';

interface OrganicWaveDividerProps {
  topColor: string;
  bottomColor: string;
  flip?: boolean;
  variant?: 'gentle' | 'wavy' | 'dramatic';
  height?: number;
  animated?: boolean;
}

export const OrganicWaveDivider = ({
  topColor,
  bottomColor,
  flip = false,
  variant = 'gentle',
  height = 120,
  animated = true
}: OrganicWaveDividerProps) => {
  // ViewBox extendido hacia arriba para evitar cortes (Y: -40 a 120 = 160px total)
  const viewBoxHeight = 160;
  const viewBoxMinY = -40;
  
  // Todas las ondas ahora usan el mismo estilo suave y natural que la gentle
  // pero con ligeras variaciones en amplitud
  const waveConfigs = {
    gentle: {
      // Onda suave y fluida - la referencia natural
      path1: `M0,60 Q160,${viewBoxMinY + 10} 320,60 T640,55 T960,65 T1280,50 T1600,60 T1920,55 L1920,120 L0,120 Z`,
      path2: `M0,55 Q160,90 320,55 T640,65 T960,50 T1280,60 T1600,55 T1920,65 L1920,120 L0,120 Z`,
      path3: `M0,65 Q160,70 320,50 T640,60 T960,55 T1280,65 T1600,50 T1920,60 L1920,120 L0,120 Z`,
      duration: 6
    },
    wavy: {
      // Onda con más movimiento pero igual de natural
      path1: `M0,70 Q240,${viewBoxMinY + 5} 480,65 T960,55 T1440,75 T1920,60 L1920,120 L0,120 Z`,
      path2: `M0,55 Q240,100 480,55 T960,75 T1440,50 T1920,70 L1920,120 L0,120 Z`,
      path3: `M0,65 Q240,80 480,50 T960,60 T1440,65 T1920,55 L1920,120 L0,120 Z`,
      duration: 5
    },
    dramatic: {
      // Onda dramática pero manteniendo la suavidad natural
      path1: `M0,80 C320,${viewBoxMinY + 10} 640,90 960,60 C1280,30 1600,100 1920,70 L1920,120 L0,120 Z`,
      path2: `M0,60 C320,110 640,40 960,80 C1280,120 1600,50 1920,90 L1920,120 L0,120 Z`,
      path3: `M0,75 C320,50 640,100 960,55 C1280,20 1600,90 1920,50 L1920,120 L0,120 Z`,
      duration: 7
    },
    steps: {
      // Onda con forma de "escalones" suavizados
      path1: `M0,60 L320,60 L320,40 L640,40 L640,70 L960,70 L960,50 L1280,50 L1280,80 L1600,80 L1600,60 L1920,60 L1920,120 L0,120 Z`,
      path2: `M0,65 L320,65 L320,45 L640,45 L640,75 L960,75 L960,55 L1280,55 L1280,85 L1600,85 L1600,65 L1920,65 L1920,120 L0,120 Z`,
      path3: `M0,55 L320,55 L320,35 L640,35 L640,65 L960,65 L960,45 L1280,45 L1280,75 L1600,75 L1600,55 L1920,55 L1920,120 L0,120 Z`,
      duration: 10
    }
  };

  const config = waveConfigs[variant as keyof typeof waveConfigs] || waveConfigs.gentle;

  // Segunda onda - siempre suave y natural
  const secondWaveConfigs = {
    gentle: {
      path1: `M0,80 Q160,50 320,85 T640,70 T960,90 T1280,75 T1600,90 T1920,80 L1920,120 L0,120 Z`,
      path2: `M0,85 Q160,110 320,75 T640,90 T960,70 T1280,90 T1600,75 T1920,95 L1920,120 L0,120 Z`,
      path3: `M0,75 Q160,90 320,80 T640,65 T960,85 T1280,70 T1600,85 T1920,75 L1920,120 L0,120 Z`,
    },
    wavy: {
      path1: `M0,90 Q240,60 480,95 T960,75 T1440,95 T1920,85 L1920,120 L0,120 Z`,
      path2: `M0,80 Q240,110 480,75 T960,95 T1440,70 T1920,95 L1920,120 L0,120 Z`,
      path3: `M0,95 Q240,80 480,85 T960,70 T1440,85 T1920,75 L1920,120 L0,120 Z`,
    },
    dramatic: {
      path1: `M0,100 C400,60 800,110 1200,80 C1600,50 1800,100 1920,85 L1920,120 L0,120 Z`,
      path2: `M0,85 C400,120 800,70 1200,100 C1600,130 1800,80 1920,105 L1920,120 L0,120 Z`,
      path3: `M0,95 C400,75 800,105 1200,70 C1600,45 1800,95 1920,70 L1920,120 L0,120 Z`,
    },
    steps: {
      path1: `M0,80 L320,80 L320,60 L640,60 L640,90 L960,90 L960,70 L1280,70 L1280,100 L1600,100 L1600,80 L1920,80 L1920,120 L0,120 Z`,
      path2: `M0,85 L320,85 L320,65 L640,65 L640,95 L960,95 L960,75 L1280,75 L1280,105 L1600,105 L1600,85 L1920,85 L1920,120 L0,120 Z`,
      path3: `M0,75 L320,75 L320,55 L640,55 L640,85 L960,85 L960,65 L1280,65 L1280,95 L1600,95 L1600,75 L1920,75 L1920,120 L0,120 Z`,
    }
  };

  // Tercera onda sutil
  const thirdWaveConfigs = {
    gentle: {
      path1: `M0,100 Q320,85 640,100 T1280,95 T1920,100 L1920,120 L0,120 Z`,
      path2: `M0,98 Q320,108 640,93 T1280,102 T1920,95 L1920,120 L0,120 Z`,
    },
    wavy: {
      path1: `M0,105 Q320,90 640,108 T1280,95 T1920,105 L1920,120 L0,120 Z`,
      path2: `M0,100 Q320,115 640,95 T1280,108 T1920,98 L1920,120 L0,120 Z`,
    },
    dramatic: {
      path1: `M0,110 C500,95 1000,115 1500,100 C1700,90 1850,110 1920,105 L1920,120 L0,120 Z`,
      path2: `M0,105 C500,120 1000,95 1500,110 C1700,118 1850,100 1920,115 L1920,120 L0,120 Z`,
    },
    steps: {
      path1: `M0,100 L320,100 L320,80 L640,80 L640,110 L960,110 L960,90 L1280,90 L1280,120 L1600,120 L1600,100 L1920,100 L1920,120 L0,120 Z`,
      path2: `M0,105 L320,105 L320,85 L640,85 L640,115 L960,115 L960,95 L1280,95 L1280,125 L1600,125 L1600,105 L1920,105 L1920,120 L0,120 Z`,
    }
  };

  const secondConfig = secondWaveConfigs[variant as keyof typeof secondWaveConfigs] || secondWaveConfigs.gentle;
  const thirdConfig = thirdWaveConfigs[variant as keyof typeof thirdWaveConfigs] || thirdWaveConfigs.gentle;

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ 
        height: `${height}px`,
        marginTop: flip ? undefined : '-2px',
        marginBottom: flip ? '-2px' : undefined,
        transform: flip ? 'rotate(180deg)' : undefined
      }}
    >
      {/* Fondo sólido del color superior */}
      <div 
        className="absolute inset-0"
        style={{ backgroundColor: topColor }}
      />

      {/* Primera capa de onda (fondo, más grande) */}
      <svg
        viewBox={`0 ${viewBoxMinY} 1920 ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ height: `${height}px` }}
      >
        <motion.path
          fill={bottomColor}
          initial={{ d: config.path1 }}
          animate={animated ? {
            d: [config.path1, config.path2, config.path3, config.path1],
            x: variant === 'steps' ? [0, -40, 0] : 0
          } : undefined}
          transition={{
            duration: config.duration,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>

      {/* Segunda capa de onda (medio) */}
      <svg
        viewBox={`0 ${viewBoxMinY} 1920 ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ 
          height: `${height * 0.75}px`,
          opacity: 0.85
        }}
      >
        <motion.path
          fill={bottomColor}
          initial={{ d: secondConfig.path1 }}
          animate={animated ? {
            d: [secondConfig.path1, secondConfig.path2, secondConfig.path3, secondConfig.path1]
          } : undefined}
          transition={{
            duration: config.duration * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
      </svg>

      {/* Tercera capa de onda (primer plano, sutil) */}
      <svg
        viewBox={`0 ${viewBoxMinY} 1920 ${viewBoxHeight}`}
        preserveAspectRatio="none"
        className="absolute bottom-0 left-0 w-full"
        style={{ 
          height: `${height * 0.5}px`,
          opacity: 0.6
        }}
      >
        <motion.path
          fill={bottomColor}
          initial={{ d: thirdConfig.path1 }}
          animate={animated ? {
            d: [thirdConfig.path1, thirdConfig.path2, thirdConfig.path1]
          } : undefined}
          transition={{
            duration: config.duration * 0.6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </svg>
    </div>
  );
};

// Variantes predefinidas para cada transición de sección - ALTURAS AUMENTADAS
export const HeroToArticulosWave = () => (
  <OrganicWaveDivider
    topColor="#0f172a"
    bottomColor="#fccb06"
    variant="gentle"
    height={140}
  />
);

export const ArticulosToSemilleroWave = () => {
  const fuchsiaColor = "#e81e61";
  
  return (
    <div className="relative w-full z-10" style={{ height: '0px' }}>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '160px' }}>
        {[
          { opacity: 0.3, d: "M0,80 C480,40 640,120 960,80 C1280,40 1440,120 1920,80 V120 H0 Z", duration: 12, delay: 0 },
          { opacity: 0.6, d: "M0,60 C480,100 640,20 960,60 C1280,100 1440,20 1920,60 V120 H0 Z", duration: 10, delay: 0.5 },
          { opacity: 1, d: "M0,90 C480,70 640,110 960,90 C1280,70 1440,110 1920,90 V120 H0 Z", duration: 8, delay: 1 }
        ].map((wave, i) => (
          <svg key={i} viewBox="0 0 1920 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: '100%', opacity: wave.opacity }}>
            <motion.path
              fill={fuchsiaColor}
              initial={{ d: wave.d }}
              animate={{ d: [wave.d, "M0,70 C480,110 640,-10 960,70 C1280,150 1440,30 1920,70 V120 H0 Z", wave.d] }}
              transition={{ duration: wave.duration, repeat: Infinity, ease: "easeInOut", delay: wave.delay }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export const SemilleroToTransmediaWave = () => {
  // El color de la sección de abajo (Transmedia) que se dibuja hacia arriba,
  // "comiéndose" a la sección fucsia (Semilleros).
  const bottomColor = "#0f172a"; 
  
  return (
    <div className="relative w-full z-10" style={{ height: '0px' }}>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '160px' }}>
        {[
          { opacity: 0.3, d: "M0,70 C480,20 640,110 960,70 C1280,30 1440,110 1920,70 V120 H0 Z", duration: 12, delay: 0 },
          { opacity: 0.6, d: "M0,50 C480,90 640,10 960,50 C1280,90 1440,10 1920,50 V120 H0 Z", duration: 10, delay: 0.5 },
          { opacity: 1, d: "M0,80 C480,50 640,100 960,80 C1280,60 1440,100 1920,80 V120 H0 Z", duration: 8, delay: 1 }
        ].map((wave, i) => (
          <svg key={i} viewBox="0 0 1920 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: '100%', opacity: wave.opacity }}>
            <motion.path
              fill={bottomColor}
              initial={{ d: wave.d }}
              animate={{ d: [wave.d, "M0,60 C480,100 640,-20 960,60 C1280,140 1440,20 1920,60 V120 H0 Z", wave.d] }}
              transition={{ duration: wave.duration, repeat: Infinity, ease: "easeInOut", delay: wave.delay }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export const TransmediaToActualidadWave = () => {
  // El color de la sección Actualidad (Azul Pop) dibujándose
  // sobre el azul marino de la sección Transmedia.
  const bottomColor = "#0f3896";
  
  return (
    <div className="relative w-full z-10" style={{ height: '0px' }}>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '140px' }}>
        {[
          { opacity: 0.3, d: "M0,80 C480,40 640,120 960,80 C1280,40 1440,120 1920,80 V120 H0 Z", duration: 12, delay: 0 },
          { opacity: 0.6, d: "M0,60 C480,100 640,20 960,60 C1280,100 1440,20 1920,60 V120 H0 Z", duration: 10, delay: 0.5 },
          { opacity: 1, d: "M0,90 C480,70 640,110 960,90 C1280,70 1440,110 1920,90 V120 H0 Z", duration: 8, delay: 1 }
        ].map((wave, i) => (
          <svg key={i} viewBox="0 0 1920 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: '100%', opacity: wave.opacity }}>
            <motion.path
              fill={bottomColor}
              initial={{ d: wave.d }}
              animate={{ d: [wave.d, "M0,70 C480,110 640,-10 960,70 C1280,150 1440,30 1920,70 V120 H0 Z", wave.d] }}
              transition={{ duration: wave.duration, repeat: Infinity, ease: "easeInOut", delay: wave.delay }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export const ActualidadToBlogWave = () => {
  // El color de la sección Blog (Gris Oscuro) dibujándose
  // sobre el azul pop de la sección Actualidad.
  const bottomColor = "#1a1a1a";
  
  return (
    <div className="relative w-full z-10" style={{ height: '0px' }}>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '140px' }}>
        {[
          { opacity: 0.3, d: "M0,80 C480,40 640,120 960,80 C1280,40 1440,120 1920,80 V120 H0 Z", duration: 12, delay: 0 },
          { opacity: 0.6, d: "M0,60 C480,100 640,20 960,60 C1280,100 1440,20 1920,60 V120 H0 Z", duration: 10, delay: 0.5 },
          { opacity: 1, d: "M0,90 C480,70 640,110 960,90 C1280,70 1440,110 1920,90 V120 H0 Z", duration: 8, delay: 1 }
        ].map((wave, i) => (
          <svg key={i} viewBox="0 0 1920 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: '100%', opacity: wave.opacity }}>
            <motion.path
              fill={bottomColor}
              initial={{ d: wave.d }}
              animate={{ d: [wave.d, "M0,70 C480,110 640,-10 960,70 C1280,150 1440,30 1920,70 V120 H0 Z", wave.d] }}
              transition={{ duration: wave.duration, repeat: Infinity, ease: "easeInOut", delay: wave.delay }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export const BlogToFooterWave = () => {
  // El color del footer (ahora Azul Noche como el Hero) dibujándose
  // sobre el gris oscuro de la sección del Blog.
  const bottomColor = "#0f172a";
  
  return (
    <div className="relative w-full z-10" style={{ height: '0px' }}>
      <div className="absolute bottom-0 left-0 w-full pointer-events-none" style={{ height: '140px' }}>
        {[
          { opacity: 0.3, d: "M0,80 C480,40 640,120 960,80 C1280,40 1440,120 1920,80 V120 H0 Z", duration: 12, delay: 0 },
          { opacity: 0.6, d: "M0,60 C480,100 640,20 960,60 C1280,100 1440,20 1920,60 V120 H0 Z", duration: 10, delay: 0.5 },
          { opacity: 1, d: "M0,90 C480,70 640,110 960,90 C1280,70 1440,110 1920,90 V120 H0 Z", duration: 8, delay: 1 }
        ].map((wave, i) => (
          <svg key={i} viewBox="0 0 1920 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 w-full" style={{ height: '100%', opacity: wave.opacity }}>
            <motion.path
              fill={bottomColor}
              initial={{ d: wave.d }}
              animate={{ d: [wave.d, "M0,70 C480,110 640,-10 960,70 C1280,150 1440,30 1920,70 V120 H0 Z", wave.d] }}
              transition={{ duration: wave.duration, repeat: Infinity, ease: "easeInOut", delay: wave.delay }}
            />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default OrganicWaveDivider;
