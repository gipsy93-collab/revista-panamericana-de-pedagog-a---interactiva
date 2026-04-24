import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'motion/react';
import { CentralNode } from './nodes/CentralNode';
import { BranchNode } from './nodes/BranchNode';
import { ProgressBar } from './navigation/ProgressBar';
import { ControlPanel } from './navigation/ControlPanel';
import { TourGuide } from './navigation/TourGuide';
import { InfoModal } from './modals/InfoModal';
import { QuizModal } from './modals/QuizModal';
import { GlossaryModal } from './modals/GlossaryModal';
import { Popup } from './popups/Popup';
import { branches } from './data';
import type { SubNode, Branch } from './types';
import { Volume2, VolumeX, ShieldCheck, Zap, ArrowLeft } from 'lucide-react';

const initialPositions: Record<string, { x: number; y: number }> = {
  'top-left': { x: -350, y: -220 },
  'top-right': { x: 350, y: -220 },
  'left': { x: -500, y: 0 },
  'right': { x: 500, y: 0 },
  'bottom-left': { x: -350, y: 220 },
  'bottom-right': { x: 350, y: 220 },
};

function DraggableBranch({
  branch,
  index,
  isVisited,
  onVisit,
  onOpenPopup,
}: {
  branch: Branch;
  index: number;
  isVisited: boolean;
  onVisit: () => void;
  onOpenPopup: (subNode: SubNode, color: string) => void;
}) {
  const init = initialPositions[branch.position] || { x: 0, y: 0 };
  const x = useMotionValue(init.x);
  const y = useMotionValue(init.y);

  const path = useTransform([x, y], (latest: number[]) => {
    const vx = latest[0] ?? 0;
    const vy = latest[1] ?? 0;
    const mxVal = vx * 0.4;
    return `M 0 0 C ${mxVal} 0, ${mxVal} ${vy}, ${vx} ${vy}`;
  });

  return (
    <>
      <svg className="absolute top-1/2 left-1/2 pointer-events-none z-10" style={{ overflow: 'visible' }}>
        <motion.path
          d={path}
          stroke={branch.color}
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          opacity="0.8"
        />
      </svg>
      <motion.div
        drag
        dragMomentum={false}
        className="absolute top-1/2 left-1/2 z-30"
        style={{ x, y }}
      >
        <BranchNode
          branch={branch}
          index={index}
          isVisited={isVisited}
          onVisit={onVisit}
          onOpenPopup={onOpenPopup}
        />
      </motion.div>
    </>
  );
}

export default function App({ onBack }: { onBack?: () => void }) {
  const [visitedNodes, setVisitedNodes] = useState<Set<string>>(new Set());
  const [isTouring, setIsTouring] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [activePopup, setActivePopup] = useState<{
    subNode: SubNode;
    branchColor: string;
  } | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleVisitNode = useCallback((nodeId: string) => {
    setVisitedNodes((prev) => {
      const next = new Set(prev);
      next.add(nodeId);
      return next;
    });
  }, []);

  const handleTourNodeActivate = useCallback(
    (branchId: string, subNodeId: string) => {
      handleVisitNode(branchId);
      const branch = branches.find((b) => b.id === branchId);
      const subNode = branch?.subNodes.find((s) => s.id === subNodeId);
      if (branch && subNode) {
        setActivePopup({ subNode, branchColor: branch.color });
      }
    },
    [handleVisitNode]
  );

  const startTour = () => {
    setIsTouring(true);
    setIntroComplete(true);
  };

  const stopTour = () => {
    setIsTouring(false);
    setActivePopup(null);
  };

  const handleReset = () => {
    setIsTouring(false);
    setActivePopup(null);
    setVisitedNodes(new Set());
  };

  useEffect(() => {
    const timer = setTimeout(() => setIntroComplete(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (soundEnabled) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [soundEnabled]);

  return (
    <div className="min-h-screen mindmap-bg relative overflow-hidden selection:bg-black selection:text-white">
      <div className="fixed inset-0 halftone opacity-[0.05] pointer-events-none z-[190]" />
      <div className="fixed inset-0 noise opacity-[0.04] pointer-events-none z-[191]" />
      
      {onBack && (
        <button
          onClick={onBack}
          className="fixed top-8 left-8 z-[210] bg-white border-4 border-black p-4 flex items-center gap-3 font-black uppercase text-sm shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
        >
          <ArrowLeft className="w-6 h-6 stroke-[3]" />
          <span>Volver</span>
        </button>
      )}

      <a
        href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-8 left-40 z-[210] bg-black border-4 border-black px-4 py-3 flex items-center gap-2 font-black uppercase text-sm text-white shadow-[8px_8px_0_0_#000] hover:shadow-none hover:translate-x-1.5 hover:translate-y-1.5 transition-all"
      >
        <span>Revista Académica</span>
      </a>

      <AnimatePresence>
        {!introComplete && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            className="fixed inset-0 z-[200] bg-[#FFFF00] flex flex-col items-center justify-center p-6 overflow-hidden"
          >
            <div className="absolute inset-0 halftone-lg opacity-30" />
            <motion.div
              initial={{ scale: 0, rotate: -25 }}
              animate={{ scale: 1, rotate: 0 }}
              className="relative bg-white border-[12px] border-black p-16 flex flex-col items-center shadow-[20px_20px_0px_0px_rgba(0,0,0,1)]"
            >
              <Zap className="w-16 h-16 text-black mb-6 animate-pulse" />
              <h1 className="text-6xl font-black text-black tracking-tighter uppercase text-center italic">
                Educación Jurídica <br /> Digital
              </h1>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {introComplete && (
        <>
          <ProgressBar visitedNodes={visitedNodes} totalNodes={branches.length} />
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="fixed top-24 left-6 z-40 hidden lg:block"
          >
            <div className="bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-1deg]">
              <ShieldCheck className="w-4 h-4" />
              <p className="text-[10px] font-black uppercase tracking-widest mt-1">RPP ©️ 2026</p>
            </div>
          </motion.div>
        </>
      )}

      <div
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden flex items-center justify-center cursor-crosshair"
      >
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.08)_100%)] z-10" />

        {introComplete && (
          <div className="absolute inset-0 z-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
              <CentralNode onStartTour={startTour} />
            </div>

            {branches.map((branch, index) => (
              <DraggableBranch
                key={branch.id}
                branch={branch}
                index={index}
                isVisited={visitedNodes.has(branch.id)}
                onVisit={() => handleVisitNode(branch.id)}
                onOpenPopup={(subNode, color) => setActivePopup({ subNode, branchColor: color })}
              />
            ))}
          </div>
        )}
      </div>

      <Popup
        subNode={activePopup?.subNode || null}
        branchColor={activePopup?.branchColor || 'black'}
        onClose={() => setActivePopup(null)}
      />

      <TourGuide
        isActive={isTouring}
        onStop={stopTour}
        onNodeActivate={handleTourNodeActivate}
      />

      {introComplete && (
        <ControlPanel
          onReset={handleReset}
          onStartTour={isTouring ? stopTour : startTour}
          onShowInfo={() => setShowInfo(true)}
          onShowQuiz={() => setShowQuiz(true)}
          onShowGlossary={() => setShowGlossary(true)}
          isTouring={isTouring}
        />
      )}

      <InfoModal isOpen={showInfo} onClose={() => setShowInfo(false)} />
      <QuizModal isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
      <GlossaryModal isOpen={showGlossary} onClose={() => setShowGlossary(false)} />

      <AnimatePresence>
        {visitedNodes.size >= branches.length && branches.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="fixed bottom-36 right-8 z-[70]"
          >
            <div className="bg-[#00FFA3] border-8 border-black p-10 shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] -rotate-3">
               <p className="text-black font-black text-3xl uppercase italic">Misión Completa</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {introComplete && (
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className="fixed top-24 right-6 z-50 bg-white border-2 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-all group"
        >
          <div className="flex items-center gap-2">
            {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
            {soundEnabled && <span className="text-[8px] font-black uppercase">ON</span>}
          </div>
        </button>
      )}

      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
      />
    </div>
  );
}
