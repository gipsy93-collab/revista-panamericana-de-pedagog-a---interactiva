import React, { useState, useCallback, useRef, useEffect } from 'react';
import { nodes, edges } from './data';
import type { NodeData } from './types';
import EdgeWobble from './EdgeWobble';
import Poster from './Poster';
import NodeComponent from './Node';
import Edge from './Edge';

interface CanvasControllerProps {
  camera: any;
  setTarget: (target: any) => void;
  resetView: () => void;
  zoomIn: () => void;
  zoomOut: () => void;
  startDrag: (x: number, y: number) => void;
  updateDrag: (x: number, y: number, scale: number) => void;
  endDrag: () => void;

  selectedNode: NodeData | null;
  setSelectedNode: (node: NodeData | null) => void;
  isTouring: boolean;
  setIsTouring: (touring: boolean) => void;
  handleNodeClick: (node: NodeData) => void;
}

const CanvasController: React.FC<CanvasControllerProps> = ({
  camera,
  setTarget,
  resetView,
  zoomIn,
  zoomOut,
  startDrag,
  updateDrag,
  endDrag,
  selectedNode,
  setSelectedNode,
  isTouring,
  setIsTouring,
  handleNodeClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [nodeWidths, setNodeWidths] = useState<Map<string, number>>(new Map());
  const isPanning = useRef(false);
  const panStart = useRef({ x: 0, y: 0, camX: 0, camY: 0 });

  // Measure actual DOM widths of all node cards via offsetWidth.
  useEffect(() => {
    const measure = () => {
      if (!canvasRef.current) return;
      const btns = canvasRef.current.querySelectorAll<HTMLElement>('button[data-node-id]');
      const widths = new Map<string, number>();
      btns.forEach(btn => {
        const id = btn.getAttribute('data-node-id');
        if (id) {
          widths.set(id, btn.offsetWidth);
        }
      });
      if (widths.size > 0) {
        setNodeWidths(widths);
      }
    };
    const t1 = setTimeout(measure, 100);
    const t2 = setTimeout(measure, 800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        setContainerSize({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const stopTour = useCallback(() => {
    setIsTouring(false);
  }, [setIsTouring]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (e.button !== 0) return;
    const target = e.target as HTMLElement;
    if (target.closest('button[data-node]')) return;

    if (isTouring) stopTour();
    isPanning.current = true;
    panStart.current = {
      x: e.clientX,
      y: e.clientY,
      camX: camera.x,
      camY: camera.y,
    };
    startDrag(e.clientX, e.clientY);
  }, [camera.x, camera.y, startDrag, isTouring, stopTour]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isPanning.current) return;
    updateDrag(e.clientX, e.clientY, camera.scale);
  }, [updateDrag, camera.scale]);

  const handleMouseUp = useCallback(() => {
    isPanning.current = false;
    endDrag();
  }, [endDrag]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      const target = e.target as HTMLElement;
      if (target.closest('button[data-node]')) return;

      if (isTouring) stopTour();
      isPanning.current = true;
      startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, [startDrag, isTouring, stopTour]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (isPanning.current && e.touches.length === 1) {
      e.preventDefault();
      updateDrag(e.touches[0].clientX, e.touches[0].clientY, camera.scale);
    }
  }, [updateDrag, camera.scale]);

  const handleTouchEnd = useCallback(() => {
    isPanning.current = false;
    endDrag();
  }, [endDrag]);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    if (isTouring) stopTour();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTarget({ scale: camera.scale * delta });
  }, [camera.scale, setTarget, isTouring, stopTour]);

  const handleClosePoster = useCallback(() => {
    setSelectedNode(null);
  }, [setSelectedNode]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedNode) handleClosePoster();
        else resetView();
      } else if (e.key === '+' || e.key === '=') zoomIn();
      else if (e.key === '-') zoomOut();
      else if (e.key === '0') resetView();
      else if (e.key === 'ArrowUp') setTarget({ y: camera.y - 100 / camera.scale });
      else if (e.key === 'ArrowDown') setTarget({ y: camera.y + 100 / camera.scale });
      else if (e.key === 'ArrowLeft') setTarget({ x: camera.x - 100 / camera.scale });
      else if (e.key === 'ArrowRight') setTarget({ x: camera.x + 100 / camera.scale });
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [camera, selectedNode, handleClosePoster, resetView, zoomIn, zoomOut, setTarget]);

  const tourIndex = useRef(0);

  // Manage Tour Interval
  useEffect(() => {
    if (!isTouring) return;

    const level2Nodes = nodes.filter(n => n.level === 2);
    
    const nextStep = () => {
      const node = level2Nodes[tourIndex.current];
      handleNodeClick(node);
      tourIndex.current = (tourIndex.current + 1) % level2Nodes.length;
    };

    // Initial step
    nextStep();
    
    const interval = setInterval(nextStep, 6000);
    return () => clearInterval(interval);
  }, [isTouring, handleNodeClick]);

  const isNodeVisible = useCallback((node: NodeData) => {
    if (!containerSize.width || !containerSize.height) return true;
    const screenX = containerSize.width / 2 + (node.x + camera.x) * camera.scale;
    const screenY = containerSize.height / 2 + (node.y + camera.y) * camera.scale;
    const margin = 200;
    return (
      screenX > -margin && screenX < containerSize.width + margin &&
      screenY > -margin && screenY < containerSize.height + margin
    );
  }, [camera, containerSize]);

  const getNodeDelay = useCallback((node: NodeData) => {
    if (node.level === 1) return 100;
    if (node.level === 2) {
      const angle = Math.atan2(node.y, node.x);
      const index = Math.round((angle + Math.PI) / (Math.PI * 2) * 10);
      return 200 + ((index % 10) * 80);
    }
    const parent = nodes.find(n => n.id === node.parentId);
    if (parent) {
      const pAngle = Math.atan2(parent.y, parent.x);
      const pIndex = Math.round((pAngle + Math.PI) / (Math.PI * 2) * 10);
      const pDelay = 200 + ((pIndex % 10) * 80);
      const siblings = nodes.filter(n => n.parentId === node.parentId);
      const sIndex = siblings.findIndex(n => n.id === node.id);
      return pDelay + 400 + sIndex * 60;
    }
    return 700;
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0"
      style={{ cursor: 'grab', touchAction: 'none', overflow: 'hidden' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onWheel={handleWheel}
    >
      <EdgeWobble />

      <div
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          transform: `translate(${camera.x * camera.scale + containerSize.width / 2}px, ${camera.y * camera.scale + containerSize.height / 2}px) scale(${camera.scale})`,
          transformOrigin: '0 0',
          willChange: 'transform',
        }}
      >
        <svg
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'visible',
            pointerEvents: 'none',
          }}
        >
          {edges.map(edge => (
            <Edge key={edge.id} edge={edge} nodes={nodes} edges={edges} isVisible={true} nodeWidths={nodeWidths} />
          ))}
        </svg>

        {nodes.map(node => (
          <NodeComponent
            key={node.id}
            node={node}
            isSelected={selectedNode?.id === node.id}
            isVisible={isNodeVisible(node)}
            delay={getNodeDelay(node)}
            onClick={handleNodeClick}
          />
        ))}
      </div>

      {selectedNode && (
        <Poster node={selectedNode} onClose={handleClosePoster} />
      )}
    </div>
  );
};

export default CanvasController;
