import React from 'react';

export const CyberBackground: React.FC = () => (
  <svg viewBox="0 0 1440 800" className="w-full h-full object-cover grayscale opacity-20">
    <rect width="1440" height="800" fill="#020617" />
    <g stroke="#1e293b" strokeWidth="1">
      {[...Array(20)].map((_, i) => (
        <line key={i} x1="0" y1={i * 40} x2="1440" y2={i * 40} />
      ))}
      {[...Array(40)].map((_, i) => (
        <line key={i} x1={i * 40} y1="0" x2={i * 40} y2="800" />
      ))}
    </g>
    <defs>
      <linearGradient id="cyberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#ef4444" />
      </linearGradient>
    </defs>
    <circle cx="1000" cy="200" r="300" fill="url(#cyberGrad)" opacity="0.1" />
  </svg>
);

export const GlitchText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="relative inline-block group">
    <span className="relative z-10">{children}</span>
    <span className="absolute top-0 left-0 -translate-x-1 translate-y-1 text-red-500 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none select-none">
      {children}
    </span>
    <span className="absolute top-0 left-0 translate-x-1 -translate-y-1 text-blue-500 opacity-0 group-hover:opacity-50 transition-opacity pointer-events-none select-none">
      {children}
    </span>
  </div>
);

export const AlertIcon = () => (
  <svg className="w-6 h-6 text-red-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
);
