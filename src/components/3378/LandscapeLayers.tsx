import React from 'react';

export const LandscapeBackground: React.FC = () => (
  <svg viewBox="0 0 1440 800" className="w-full h-full object-cover">
    <rect width="1440" height="800" fill="#050510" />
    <path d="M0 400 Q360 300 720 400 T1440 400 V800 H0 Z" fill="#0A0A1A" opacity="0.5" />
    <circle cx="1200" cy="150" r="100" fill="url(#sunGradient)" />
    <defs>
      <radialGradient id="sunGradient">
        <stop offset="0%" stopColor="#6C63FF" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#6C63FF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

export const LandscapeMidground: React.FC = () => (
  <svg viewBox="0 0 1440 800" className="w-full h-full object-cover">
    <path d="M0 450 L180 380 L360 460 L540 400 L720 480 L900 420 L1080 500 L1260 440 L1440 520 V800 H0 Z" fill="#0F0F2D" opacity="0.6" />
    <path d="M0 500 L240 440 L480 520 L720 460 L960 540 L1200 480 L1440 560 V800 H0 Z" fill="#14143D" opacity="0.4" />
  </svg>
);

export const LandscapeForeground: React.FC = () => (
  <svg viewBox="0 0 1440 800" className="w-full h-full object-cover">
    <path d="M0 600 Q360 500 720 600 T1440 600 V800 H0 Z" fill="#1A1A4A" />
    <path d="M0 650 Q360 580 720 680 T1440 620 V800 H0 Z" fill="#1E1E5C" opacity="0.8" />
    {/* Floating Elements (Atmospheric) */}
    {[...Array(15)].map((_, i) => (
      <circle 
        key={i} 
        cx={Math.random() * 1440} 
        cy={Math.random() * 800} 
        r={2 + Math.random() * 4} 
        fill={i % 2 === 0 ? '#6C63FF' : '#00D9FF'} 
        opacity="0.3"
      >
        <animate 
          attributeName="opacity" 
          values="0.1;0.5;0.1" 
          dur={`${3 + Math.random() * 5}s`} 
          repeatCount="indefinite" 
        />
      </circle>
    ))}
  </svg>
);

export const CostaRicaFlag = () => (
  <svg width="60" height="36" viewBox="0 0 10 6" className="rounded-sm shadow-md">
    <rect width="10" height="6" fill="#002B7F"/>
    <rect y="1" width="10" height="4" fill="#FFFFFF"/>
    <rect y="2" width="10" height="2" fill="#CE1126"/>
  </svg>
);
