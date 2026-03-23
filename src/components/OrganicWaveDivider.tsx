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
    }
  };

  const config = waveConfigs[variant];

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
    }
  };

  const secondConfig = secondWaveConfigs[variant];
  const thirdConfig = thirdWaveConfigs[variant];

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
            d: [config.path1, config.path2, config.path3, config.path1]
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

export const ArticulosToSemilleroWave = () => (
  <OrganicWaveDivider
    topColor="#fccb06"
    bottomColor="#e81e61"
    variant="wavy"
    height={160}
  />
);

export const SemilleroToTransmediaWave = () => (
  <OrganicWaveDivider
    topColor="#e81e61"
    bottomColor="#1a1a1a"
    variant="dramatic"
    height={140}
  />
);

export const TransmediaToBlogWave = () => (
  <OrganicWaveDivider
    topColor="#1a1a1a"
    bottomColor="#111111"
    variant="wavy"
    height={120}
  />
);

export const BlogToFooterWave = () => (
  <OrganicWaveDivider
    topColor="#111111"
    bottomColor="#0f172a"
    variant="dramatic"
    height={140}
    flip={true}
  />
);

export default OrganicWaveDivider;
