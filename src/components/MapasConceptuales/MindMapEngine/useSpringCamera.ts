import { useCallback, useRef, useState, useEffect } from 'react';

export function useSpringCamera() {
  const [camera, setCamera] = useState({ x: 0, y: 0, scale: 1 });
  const [isDragging, setIsDragging] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    lastMousePos.current = { x: clientX, y: clientY };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as MouseEvent).clientY;
    
    const dx = clientX - lastMousePos.current.x;
    const dy = clientY - lastMousePos.current.y;
    
    setCamera(prev => ({
      ...prev,
      x: prev.x + dx,
      y: prev.y + dy
    }));
    
    lastMousePos.current = { x: clientX, y: clientY };
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    const delta = e.deltaY;
    const scaleFactor = delta > 0 ? 0.9 : 1.1;
    setCamera(prev => {
      const newScale = Math.min(Math.max(prev.scale * scaleFactor, 0.2), 3);
      return { ...prev, scale: newScale };
    });
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMouseMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const centerOn = useCallback((x: number, y: number, scale?: number) => {
    setCamera({
      x: -x * (scale || 1) + window.innerWidth / 2,
      y: -y * (scale || 1) + window.innerHeight / 2,
      scale: scale || 1
    });
  }, []);

  return { camera, handleMouseDown, handleWheel, centerOn, isDragging };
}
