import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lettersVisible, setLettersVisible] = useState(false);

  const title = 'Evolución Digital';

  useEffect(() => {
    // Stagger letter animation
    const timer = setTimeout(() => setLettersVisible(true), 100);
    
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.5;
      });
    }, 30);

    // Complete after minimum 1.8s
    const completeTimer = setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 800);
    }, 1800);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        backgroundColor: '#FFCC00',
        transition: 'opacity 800ms cubic-bezier(0.45, 0, 0.55, 1)',
        opacity: visible ? 1 : 0,
      }}
    >
      {/* Container Neobrutalista */}
      <div 
        className="flex flex-col items-center justify-center p-12 bg-white border-4 border-black transition-all"
        style={{
          boxShadow: '12px 12px 0px 0px rgba(0, 0, 0, 1)',
          opacity: lettersVisible ? 1 : 0,
          transform: lettersVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {/* Title */}
        <h1 
          className="font-ui-bold mb-4 text-center text-black uppercase"
          style={{
            fontSize: 'clamp(24px, 4vw, 42px)',
            letterSpacing: '0.05em',
            lineHeight: 1.1
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <div
          className="font-ui-bold mb-8 text-black"
          style={{
            fontSize: '14px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}
        >
          Cargando mapa de conocimiento...
        </div>

        {/* Progress bar Neobrutalista */}
        <div
          className="bg-white border-2 border-black relative"
          style={{
            width: '240px',
            height: '24px',
            boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
          }}
        >
          <div
            className="absolute top-0 left-0 h-full bg-[#A3E635] border-r-2 border-black"
            style={{
              width: `${progress}%`,
              transition: 'width 100ms linear',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
