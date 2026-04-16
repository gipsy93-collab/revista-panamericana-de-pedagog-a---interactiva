import React from 'react';

export const PeaceBackground: React.FC = () => (
  <svg viewBox="0 0 1440 800" className="w-full h-full object-cover">
    <rect width="1440" height="800" fill="#08081a" />
    <circle cx="200" cy="200" r="300" fill="url(#peaceGrad1)" opacity="0.15" />
    <circle cx="1200" cy="600" r="400" fill="url(#peaceGrad2)" opacity="0.1" />
    <defs>
      <radialGradient id="peaceGrad1">
        <stop offset="0%" stopColor="#4f46e5" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
      <radialGradient id="peaceGrad2">
        <stop offset="0%" stopColor="#10b981" />
        <stop offset="100%" stopColor="transparent" />
      </radialGradient>
    </defs>
  </svg>
);

export const FloatingLotus: React.FC = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
    <path d="M50 10 Q60 40 90 50 Q60 60 50 90 Q40 60 10 50 Q40 40 50 10" fill="#4f46e5" />
    <circle cx="50" cy="50" r="5" fill="#10b981" />
  </svg>
);

export const PeaceIndicator = () => (
  <div className="flex gap-1">
    {[...Array(3)].map((_, i) => (
      <div 
        key={i} 
        className="w-2 h-2 rounded-full bg-[#10b981]" 
        style={{ opacity: 1 - (i * 0.3) }}
      />
    ))}
  </div>
);
