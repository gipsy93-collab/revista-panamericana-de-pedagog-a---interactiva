import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Share2, Info, Maximize2, MousePointer2 } from 'lucide-react';
import NodeComponent from './Node';
import Edges from './Edges';
import Poster from './Poster';
import { useSpringCamera } from './useSpringCamera';
import type { NodeData } from './types';

interface MindMapEngineProps {
  nodes: NodeData[];
  onBack: () => void;
  title: string;
}

const MindMapEngine: React.FC<MindMapEngineProps> = ({ nodes, onBack, title }) => {
  const { camera, handleMouseDown, handleWheel, centerOn, isDragging } = useSpringCamera();
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [showControls, setShowControls] = useState(true);

  // Auto-center on load
  useEffect(() => {
    centerOn(0, 0, 0.8);
  }, [centerOn]);

  const handleNodeClick = (node: NodeData) => {
    setSelectedNode(node);
    centerOn(node.x, node.y, 1.1);
  };

  const handleNext = useCallback(() => {
    if (!selectedNode) return;
    const currentIndex = nodes.findIndex(n => n.id === selectedNode.id);
    const nextNode = nodes[(currentIndex + 1) % nodes.length];
    handleNodeClick(nextNode);
  }, [selectedNode, nodes]);

  const handlePrev = useCallback(() => {
    if (!selectedNode) return;
    const currentIndex = nodes.findIndex(n => n.id === selectedNode.id);
    const prevNode = nodes[(currentIndex - 1 + nodes.length) % nodes.length];
    handleNodeClick(prevNode);
  }, [selectedNode, nodes]);

  // Keyboard navigation for accessibility
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedNode) {
          setSelectedNode(null);
        } else {
          onBack();
        }
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        handleNext();
      }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrev();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [selectedNode, handleNext, handlePrev, onBack]);

  return (
    <div 
      className="relative w-full h-screen bg-[#F0F0F0] overflow-hidden cursor-grab active:cursor-grabbing font-sans select-none"
      onMouseDown={handleMouseDown}
      onWheel={handleWheel}
      onTouchStart={handleMouseDown}
      role="application"
      aria-label={`Mapa conceptual interactivo: ${title}`}
    >
      {/* HUD Superior */}
      <header className="fixed top-0 left-0 right-0 z-[150] p-6 flex items-center justify-between pointer-events-none">
        <motion.button
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          onClick={onBack}
          className="pointer-events-auto flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black font-black uppercase tracking-widest shadow-[4px_4px_0_0_#000] hover:bg-[#0ea5e9] transition-all active:translate-y-1 active:shadow-none"
          aria-label="Volver a la galería de mapas"
        >
          Volver
        </motion.button>

        <div className="hidden md:flex flex-col items-end gap-2">
          <div className="bg-white border-4 border-black px-4 py-1 font-black text-black text-xs uppercase italic shadow-[4px_4px_0_0_#000]">
            RPP Interactive MindMap
          </div>
          <h1 className="text-xl font-black uppercase text-black tracking-tight bg-white/80 px-2">
            {title}
          </h1>
        </div>
      </header>

      {/* Instrucciones flotantes */}
      <AnimatePresence>
        {showControls && (
          <motion.div 
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-6 bg-black text-white px-8 py-4 border-4 border-black shadow-[8px_8px_0_0_#0ea5e9] pointer-events-auto"
          >
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
              <MousePointer2 size={16} className="text-[#0ea5e9]" /> Arrastrar
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
              <Maximize2 size={16} className="text-[#0ea5e9]" /> Zoom
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest">
              ⌨️ Flechas
            </div>
            <button 
              onClick={() => setShowControls(false)}
              className="ml-4 text-[10px] opacity-40 hover:opacity-100 underline"
              aria-label="Cerrar instrucciones"
            >
              Cerrar
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Canvas Principal */}
      <div 
        className="absolute inset-0 origin-top-left will-change-transform"
        style={{
          transform: `translate(${camera.x}px, ${camera.y}px) scale(${camera.scale})`,
          transition: isDragging ? 'none' : 'transform 800ms cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        {/* SVG Connectors — rendered BELOW nodes */}
        <Edges nodes={nodes} />

        {nodes.map((node) => (
          <NodeComponent
            key={node.id}
            node={node}
            isSelected={selectedNode?.id === node.id}
            isVisible={true}
            delay={node.level * 100}
            onClick={handleNodeClick}
          />
        ))}
      </div>

      {/* Info Card */}
      <AnimatePresence>
        {selectedNode && (
          <Poster 
            node={selectedNode}
            onClose={() => setSelectedNode(null)}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </AnimatePresence>

      {/* Texture Layer — local CSS pattern instead of external dependency */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply"
        style={{
          backgroundImage: `radial-gradient(circle, #000 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />
    </div>
  );
};

export default MindMapEngine;
