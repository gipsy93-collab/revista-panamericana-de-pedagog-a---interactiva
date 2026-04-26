import React, { useState, useCallback, useMemo } from 'react';
import LoadingScreen from './LoadingScreen';
import CanvasController from './CanvasController';
import Navigation from './Navigation';
import { useSpringCamera } from './useSpringCamera';
import { nodes, getCategoryNodes } from './data';
import type { NodeData } from './types';
import { ArrowLeft } from 'lucide-react';
import './mapa3198.css';

interface MapaConceptual3198Props {
  onBack: () => void;
}

export default function MapaConceptual3198({ onBack }: MapaConceptual3198Props) {
  const [loading, setLoading] = useState(true);
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);

  const {
    camera,
    setTarget,
    resetView,
    zoomIn,
    zoomOut,
    startDrag,
    updateDrag,
    endDrag,
    zoomToNode,
  } = useSpringCamera();

  const [isTouring, setIsTouring] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  const handleNodeClick = useCallback((node: NodeData) => {
    setSelectedNode(node);
    zoomToNode(node.x, node.y);
  }, [zoomToNode]);

  const categoryNodes = useMemo(() => getCategoryNodes(), []);

  return (
    <div className="relative w-full h-screen overflow-hidden selection:bg-orange-500 selection:text-white" style={{ backgroundColor: '#F0F0F0' }}>
      {/* Background with subtle vignette */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-radial-vignette" />

      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-6 left-8 z-[101] w-12 h-12 flex items-center justify-center bg-white border-3 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-none group"
        aria-label="Volver a Mapas Conceptuales"
      >
        <ArrowLeft size={24} className="text-black group-hover:-translate-x-1 transition-transform" />
      </button>

      {loading && <LoadingScreen onComplete={handleLoadComplete} />}
      
      <CanvasController 
        camera={camera}
        setTarget={setTarget}
        resetView={resetView}
        zoomIn={zoomIn}
        zoomOut={zoomOut}
        startDrag={startDrag}
        updateDrag={updateDrag}
        endDrag={endDrag}
        selectedNode={selectedNode}
        setSelectedNode={setSelectedNode}
        isTouring={isTouring}
        setIsTouring={setIsTouring}
        handleNodeClick={handleNodeClick}
      />

      <Navigation
        nodes={nodes}
        onNodeClick={handleNodeClick}
        nodeCount={nodes.length}
        categoryCount={categoryNodes.length}
        onZoomIn={zoomIn}
        onZoomOut={zoomOut}
        onReset={resetView}
        onTour={() => setIsTouring(!isTouring)}
        isTouring={isTouring}
        posterOpen={!!selectedNode}
      />
    </div>
  );
}
