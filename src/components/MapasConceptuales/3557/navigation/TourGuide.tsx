import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, ChevronLeft, X, Navigation } from 'lucide-react';
import { tourSteps, branches } from '../data';

interface TourGuideProps {
  isActive: boolean;
  onStop: () => void;
  onNodeActivate: (branchId: string, subNodeId: string) => void;
}

export function TourGuide({ isActive, onStop, onNodeActivate }: TourGuideProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);

  const currentTourStep = tourSteps[currentStep];
  const branch = branches.find((b) => b.id === currentTourStep?.branchId);
  const subNode = branch?.subNodes.find((s) => s.id === currentTourStep?.subNodeId);

  const advanceStep = useCallback(() => {
    if (currentStep < tourSteps.length - 1) {
      setShowTooltip(false);
      setTimeout(() => {
        setCurrentStep((s) => s + 1);
        setShowTooltip(true);
      }, 400);
    } else {
      onStop();
    }
  }, [currentStep, onStop]);

  const goBack = () => {
    if (currentStep > 0) {
      setShowTooltip(false);
      setTimeout(() => {
        setCurrentStep((s) => s - 1);
        setShowTooltip(true);
      }, 400);
    }
  };

  useEffect(() => {
    if (isActive) {
      setCurrentStep(0);
      setTimeout(() => setShowTooltip(true), 600);
    } else {
      setShowTooltip(false);
      setCurrentStep(0);
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && currentTourStep) {
      onNodeActivate(currentTourStep.branchId, currentTourStep.subNodeId);
    }
  }, [currentStep, isActive, currentTourStep, onNodeActivate]);

  if (!isActive || !currentTourStep || !branch || !subNode) return null;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[90] pointer-events-none"
        >
          {/* Spotlight overlay */}
          <div className="absolute inset-0 bg-black/10 pointer-events-auto" onClick={onStop} />

          {/* Tour control bar */}
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto w-full max-w-lg px-4"
          >
            <div className="bg-black border-[3px] border-black px-4 py-3 shadow-[6px_6px_0px_0px_rgba(255,165,0,1)] border-orange-400 flex items-center justify-between gap-4 scale-90">
              <div className="flex items-center gap-3">
                <div className="bg-orange-400 p-1.5 border-2 border-black rotate-12">
                   <Navigation className="w-4 h-4 text-black stroke-[3] animate-pulse" />
                </div>
                <div>
                   <p className="text-[8px] font-black uppercase tracking-widest text-white/50 leading-none mb-1">Misión de Exploración</p>
                   <p className="text-sm font-black text-white uppercase leading-none italic">
                     Fase {currentStep + 1} / {tourSteps.length}
                   </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={goBack}
                  disabled={currentStep === 0}
                  className="w-8 h-8 bg-white border-2 border-black flex items-center justify-center hover:bg-orange-400 disabled:opacity-20 transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <ChevronLeft className="w-4 h-4 stroke-[4]" />
                </button>
                
                <button
                  onClick={advanceStep}
                  className="h-8 px-3 bg-[#00FFA3] border-2 border-black flex items-center gap-2 font-black uppercase text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all"
                >
                  Siguiente
                </button>

                <button
                  onClick={onStop}
                  className="w-8 h-8 bg-[#FF007A] text-white border-2 border-black flex items-center justify-center hover:bg-black transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
                >
                  <X className="w-4 h-4 stroke-[4]" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Step tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 30 }}
                className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] pointer-events-auto"
              >
                <div className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-xs text-center -rotate-1 relative">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
                    <div className="bg-[#FFFF00] border-2 border-black p-2 text-2xl rotate-12">{branch.icon}</div>
                    <div className="bg-[#00D4FF] border-2 border-black p-2 text-2xl -rotate-12">{subNode.icon}</div>
                  </div>
                  
                  <div className="mt-8">
                    <p className="text-black font-black text-sm leading-tight uppercase tracking-tighter">
                       {currentTourStep.message}
                    </p>
                    <div className="mt-3 flex items-center justify-center gap-2">
                       <div className="h-0.5 flex-grow bg-black/10" />
                       <span className="text-[8px] font-black uppercase text-black/40 tracking-widest">Data Point</span>
                       <div className="h-0.5 flex-grow bg-black/10" />
                    </div>
                    <p className="text-[9px] font-black uppercase text-black/60 mt-1">
                      {branch.title} / {subNode.title}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
