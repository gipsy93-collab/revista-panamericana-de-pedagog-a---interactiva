import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket } from 'lucide-react';

export const RocketCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<{id: number, x: number, y: number}[]>([]);
  const lastPos = useRef({ x: 0, y: 0 });
  const idCounter = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });

      const dx = x - lastPos.current.x;
      const dy = y - lastPos.current.y;
      
      if (Math.abs(dx) > 1 || Math.abs(dy) > 1) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        setRotation(angle);
        
        idCounter.current++;
        setTrail(prev => [{id: idCounter.current, x, y}, ...prev].slice(0, 12));
      }
      
      lastPos.current = { x, y };
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isPickable = target.closest('button, a, .group, .sticker, .btn-brutal, [role="button"]');
      setIsPointer(!!isPickable);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-[199] overflow-hidden">
        <AnimatePresence>
          {trail.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 0, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute w-2 h-2 rounded-full blur-[1px]"
              style={{ 
                left: p.x, 
                top: p.y,
                backgroundColor: i % 2 === 0 ? '#b34d4d' : '#fccb06',
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      <motion.div 
        className="fixed top-0 left-0 pointer-events-none z-[200] flex items-center justify-center mix-blend-difference"
        animate={{
          x: position.x - 24,
          y: position.y - 24,
          rotate: rotation,
          scale: isPointer ? 1.5 : 1
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 300, mass: 0.5 }}
      >
        <Rocket 
          size={isPointer ? 32 : 24} 
          className="text-white fill-white shadow-2xl transition-all duration-300" 
        />
        
        <div className="absolute -bottom-2 flex gap-1">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, 20],
                opacity: [0.8, 0],
                scale: [1, 0]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                delay: i * 0.1
              }}
              className="w-1.5 h-1.5 bg-zine-red rounded-full"
            />
          ))}
        </div>
      </motion.div>
    </>
  );
};
