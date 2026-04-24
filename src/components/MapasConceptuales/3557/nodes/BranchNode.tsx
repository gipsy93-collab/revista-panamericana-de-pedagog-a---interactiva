import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, CheckCircle2 } from 'lucide-react';
import type { Branch, SubNode } from '../types';

// Sub-node pill that expands inline
function SubNodePill({
  subNode,
  isExpanded,
  onToggle,
  onOpenDetail,
  index,
}: {
  subNode: SubNode;
  isExpanded: boolean;
  onToggle: () => void;
  onOpenDetail: () => void;
  index: number;
}) {
  return (
    <motion.div
      layout
      className={`border-[2px] border-black bg-white cursor-pointer transition-all overflow-hidden ${
        isExpanded ? 'shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' : 'shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
      }`}
      style={{
        transform: isExpanded ? 'none' : `rotate(${index % 2 === 0 ? 0.5 : -0.5}deg)`,
      }}
      onClick={onToggle}
    >
      {/* Collapsed header */}
      <div className="flex items-center gap-2 p-2">
        <div className="w-6 h-6 border border-black bg-white flex items-center justify-center shrink-0 text-sm">
          {subNode.icon}
        </div>
        <span className="text-[9px] font-black uppercase tracking-tight text-black leading-none flex-1">
          {subNode.title}
        </span>
        <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="shrink-0">
          <ChevronDown className="w-3 h-3 stroke-[3] text-black" />
        </motion.div>
      </div>

      {/* Expanded body */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-3 pt-1 bg-[#FFFF00] border-t-2 border-black space-y-2">
              <p className="text-[9px] font-bold text-black leading-snug">
                {subNode.popup.content[0]?.value?.substring(0, 110) ?? '—'}...
              </p>
              <button
                onClick={(e) => { e.stopPropagation(); onOpenDetail(); }}
                className="w-full bg-black text-white py-1.5 text-[8px] font-black uppercase tracking-wider hover:bg-[#FF007A] transition-colors flex items-center justify-center gap-1"
              >
                Ver detalle →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function BranchNode({ branch, index, isVisited, onVisit, onOpenPopup }: {
  branch: Branch;
  index: number;
  isVisited: boolean;
  onVisit: () => void;
  onOpenPopup: (subNode: SubNode, color: string) => void;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedSubNodeId, setExpandedSubNodeId] = useState<string | null>(null);

  const handleBranchClick = () => {
    const next = !isExpanded;
    setIsExpanded(next);
    if (!next) setExpandedSubNodeId(null);
    onVisit();
  };

  const isLeft = branch.position.includes('left');

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.06 }}
        className="relative flex flex-col gap-2 w-max -translate-x-1/2 -translate-y-1/2"
        style={{ alignItems: isLeft ? 'flex-end' : 'flex-start' }}
      >
        <button
          onClick={handleBranchClick}
          className="group relative flex items-center gap-2 px-3 py-2 border-[3px] border-black bg-white
            shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            hover:-translate-x-px hover:-translate-y-px active:translate-x-px active:translate-y-px
            active:shadow-none transition-all cursor-move touch-none"
          style={{ maxWidth: 200 }}
        >
          <div
            className="w-7 h-7 border-2 border-black flex items-center justify-center text-base
              shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] group-hover:rotate-6 transition-transform shrink-0"
            style={{ backgroundColor: branch.color }}
          >
            {branch.icon}
          </div>
          <div className="flex flex-col items-start pointer-events-none">
            <span className="font-black text-xs md:text-sm tracking-tight leading-none uppercase italic text-black">
              {branch.title}
            </span>
            <span className="bg-black text-white px-1 text-[6px] font-black tracking-widest uppercase mt-0.5">
              Módulo {index + 1}
            </span>
          </div>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} className="ml-1 shrink-0 pointer-events-none">
            <ChevronDown className="w-3 h-3 stroke-[3] text-black" />
          </motion.div>
          {isVisited && (
            <div className="absolute -top-2 -right-2 bg-[#00FFA3] border-[2px] border-black p-0.5 rotate-[15deg]">
              <CheckCircle2 className="w-2.5 h-2.5 text-black" />
            </div>
          )}
        </button>

        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="subnodes"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col gap-1.5"
              style={{ width: 180, alignSelf: isLeft ? 'flex-end' : 'flex-start' }}
            >
              {branch.subNodes.map((sn, i) => (
                <SubNodePill
                  key={sn.id}
                  subNode={sn}
                  index={i}
                  isExpanded={expandedSubNodeId === sn.id}
                  onToggle={() =>
                    setExpandedSubNodeId(expandedSubNodeId === sn.id ? null : sn.id)
                  }
                  onOpenDetail={() => onOpenPopup(sn, branch.color)}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
