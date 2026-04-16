import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const AlienCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (window.innerWidth <= 768) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    // Ocupamos quickSetter para máximo performance
    const setPos = {
      x: gsap.quickSetter(cursor, "x", "px"),
      y: gsap.quickSetter(cursor, "y", "px"),
      rotation: gsap.quickSetter(cursor, "rotation", "deg"),
      scale: gsap.quickSetter(cursor, "scale")
    };

    // Quicksetters para la estela con verificación defensiva
    const trailSetters = trailRefs.current
      .filter(el => el !== null)
      .map(el => ({
        x: gsap.quickSetter(el, "x", "px"),
        y: gsap.quickSetter(el, "y", "px"),
        opacity: gsap.quickSetter(el, "opacity")
      }));

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    const velocity = { x: 0, y: 0 };
    
    const history: { x: number; y: number }[] = [];
    const trailLength = 6;

    const updateMouse = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      if (cursor && cursor.style.opacity === "0") {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        trailRefs.current.forEach(el => {
          if (el) gsap.to(el, { opacity: 0.4, duration: 0.3 });
        });
      }
    };

    window.addEventListener('mousemove', updateMouse, { passive: true });

    // Definimos función de tick para poder removerla correctamente
    const onTick = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.2, gsap.ticker.deltaRatio());
      
      const dx = mouse.x - pos.x;
      const dy = mouse.y - pos.y;
      
      velocity.x = dx * 0.15;
      velocity.y = dy * 0.15;
      
      pos.x += velocity.x * dt * 5;
      pos.y += velocity.y * dt * 5;

      setPos.x(pos.x - 32);
      setPos.y(pos.y - 32);
      setPos.rotation(velocity.x * 2);
      setPos.scale(1 - Math.min(Math.abs(velocity.x + velocity.y) * 0.005, 0.2));

      history.unshift({ x: pos.x, y: pos.y });
      if (history.length > trailLength * 4) history.pop();

      trailSetters.forEach((setter, i) => {
        const point = history[i * 3] || history[history.length - 1];
        if (point) {
          setter.x(point.x - 3);
          setter.y(point.y - 3);
        }
      });
    };

    gsap.ticker.add(onTick);

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.3 });
      trailRefs.current.forEach(el => {
        if (el) gsap.to(el, { opacity: 0, duration: 0.3 });
      });
    };

    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.3 });
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMouse);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      gsap.ticker.remove(onTick);
    };
  }, []);

  return (
    <>
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          ref={el => { if (el) trailRefs.current[i] = el; }}
          className="fixed pointer-events-none z-[199998] rounded-full opacity-0"
          style={{
            left: 0,
            top: 0,
            width: 8 - i,
            height: 8 - i,
            background: 'radial-gradient(circle, rgba(255, 191, 0, 0.6) 0%, transparent 80%)',
            willChange: 'transform, opacity'
          }}
        />
      ))}
      
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[199999] opacity-0 will-change-transform"
        style={{ 
          top: 0, 
          left: 0,
          filter: 'drop-shadow(0 0 12px rgba(255, 191, 0, 0.5))',
        }}
      >
        <svg width="64" height="64" viewBox="0 0 70 70" fill="none" className="animate-hover">
          <ellipse cx="35" cy="52" rx="20" ry="6" fill="#c0c0c0" opacity="0.5"/>
          <ellipse cx="35" cy="50" rx="15" ry="4" fill="#e0e0e0" opacity="0.7"/>
          <ellipse cx="35" cy="45" rx="22" ry="8" fill="#c0c0c0"/>
          <ellipse cx="35" cy="43" rx="18" ry="6" fill="#e0e0e0"/>
          <circle cx="35" cy="35" r="12" fill="#87ceeb" fillOpacity="0.6" stroke="#c0c0c0" strokeWidth="1"/>
          <circle cx="35" cy="33" r="5" fill="#90EE90"/>
          <ellipse cx="33" cy="32" rx="2.5" ry="3" fill="white"/>
          <ellipse cx="37" cy="32" rx="2.5" ry="3" fill="white"/>
          <circle cx="33" cy="32" r="1.5" fill="black"/>
          <circle cx="37" cy="32" r="1.5" fill="black"/>
          <circle cx="33.5" cy="31" r="0.5" fill="white"/>
          <circle cx="37.5" cy="31" r="0.5" fill="white"/>
          <line x1="35" y1="28" x2="32" y2="23" stroke="#90EE90" strokeWidth="1.5" strokeLinecap="round"/>
          <line x1="35" y1="28" x2="38" y2="23" stroke="#90EE90" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="32" cy="23" r="2" fill="#90EE90"/>
          <circle cx="38" cy="23" r="2" fill="#90EE90"/>
          <circle cx="20" cy="45" r="2" fill="#ffbf00" fillOpacity="0.8"/>
          <circle cx="28" cy="48" r="2" fill="#ffbf00" fillOpacity="0.8"/>
          <circle cx="35" cy="49" r="2" fill="#ffbf00" fillOpacity="0.8"/>
          <circle cx="42" cy="48" r="2" fill="#ffbf00" fillOpacity="0.8"/>
          <circle cx="50" cy="45" r="2" fill="#ffbf00" fillOpacity="0.8"/>
        </svg>
      </div>

      <style>{`
        @keyframes hover-cursor {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }
        .animate-hover {
          animation: hover-cursor 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default AlienCursor;
