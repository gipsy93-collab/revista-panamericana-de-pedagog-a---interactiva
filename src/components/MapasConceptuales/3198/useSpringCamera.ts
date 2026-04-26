import { useRef, useCallback, useEffect, useState } from 'react';
import type { CameraState, SpringConfig } from './types';

const DEFAULT_CONFIG: SpringConfig = {
  stiffness: 120,
  damping: 20,
  mass: 1,
};

const MIN_SCALE = 0.15;
const MAX_SCALE = 3.0;

export function useSpringCamera(config: Partial<SpringConfig> = {}) {
  const springConfig = { ...DEFAULT_CONFIG, ...config };
  
  // Current animated values
  const currentX = useRef(-100);
  const currentY = useRef(0);
  const currentScale = useRef(0.55);
  
  // Target values
  const targetX = useRef(-100);
  const targetY = useRef(0);
  const targetScale = useRef(0.55);
  
  // Velocity
  const velX = useRef(0);
  const velY = useRef(0);
  const velScale = useRef(0);
  
  const rafId = useRef<number>(0);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const cameraStart = useRef({ x: 0, y: 0 });
  
  const [camera, setCamera] = useState<CameraState>({
    x: 0,
    y: 0,
    scale: 1,
  });

  const animate = useCallback(() => {
    const { stiffness, damping, mass } = springConfig;
    
    // Spring physics for each dimension
    const dt = 1 / 60;
    
    // X
    const forceX = stiffness * (targetX.current - currentX.current);
    velX.current += (forceX - damping * velX.current) * dt / mass;
    currentX.current += velX.current * dt;
    
    // Y
    const forceY = stiffness * (targetY.current - currentY.current);
    velY.current += (forceY - damping * velY.current) * dt / mass;
    currentY.current += velY.current * dt;
    
    // Scale
    const forceScale = stiffness * (targetScale.current - currentScale.current);
    velScale.current += (forceScale - damping * velScale.current) * dt / mass;
    currentScale.current += velScale.current * dt;
    
    setCamera({
      x: currentX.current,
      y: currentY.current,
      scale: currentScale.current,
    });
    
    rafId.current = requestAnimationFrame(animate);
  }, [springConfig]);

  useEffect(() => {
    rafId.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId.current);
  }, [animate]);

  const setTarget = useCallback((newState: Partial<CameraState>) => {
    if (newState.x !== undefined) targetX.current = newState.x;
    if (newState.y !== undefined) targetY.current = newState.y;
    if (newState.scale !== undefined) {
      targetScale.current = Math.max(MIN_SCALE, Math.min(MAX_SCALE, newState.scale));
    }
  }, []);

  const resetView = useCallback(() => {
    targetX.current = -100;
    targetY.current = 0;
    targetScale.current = 0.55;
  }, []);

  const zoomIn = useCallback(() => {
    targetScale.current = Math.min(MAX_SCALE, targetScale.current * 1.25);
  }, []);

  const zoomOut = useCallback(() => {
    targetScale.current = Math.max(MIN_SCALE, targetScale.current * 0.8);
  }, []);

  const startDrag = useCallback((clientX: number, clientY: number) => {
    isDragging.current = true;
    dragStart.current = { x: clientX, y: clientY };
    cameraStart.current = { x: targetX.current, y: targetY.current };
  }, []);

  const updateDrag = useCallback((clientX: number, clientY: number, scale: number) => {
    if (!isDragging.current) return;
    const dx = (clientX - dragStart.current.x) / scale;
    const dy = (clientY - dragStart.current.y) / scale;
    targetX.current = cameraStart.current.x + dx;
    targetY.current = cameraStart.current.y + dy;
  }, []);

  const endDrag = useCallback(() => {
    isDragging.current = false;
  }, []);

  const zoomToNode = useCallback((nodeX: number, nodeY: number) => {
    targetX.current = -nodeX;
    targetY.current = -nodeY;
    targetScale.current = 1.8;
  }, []);

  return {
    camera,
    setTarget,
    resetView,
    zoomIn,
    zoomOut,
    startDrag,
    updateDrag,
    endDrag,
    zoomToNode,
    isDragging: () => isDragging.current,
  };
}
