import { motion } from 'motion/react';
import type { PopupContent } from '../types';
import { Quote, ChevronRight, Zap, Target, Bookmark, CheckCircle2 } from 'lucide-react';

interface PopupContentProps {
  type: 'info' | 'compare' | 'testimonials' | 'cards' | 'list';
  content: PopupContent[];
  source?: string;
}

export function PopupContentRenderer({ type, content, source }: PopupContentProps) {
  switch (type) {
    case 'compare':
      return <CompareContent content={content} />;
    case 'testimonials':
      return <TestimonialsContent content={content} />;
    case 'cards':
      return <CardsContent content={content} />;
    case 'list':
      return <ListContent content={content} />;
    default:
      return <InfoContent content={content} source={source} />;
  }
}

function InfoContent({ content, source }: { content: PopupContent[]; source?: string }) {
  return (
    <div className="space-y-6">
      {content.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className={`relative p-8 border-[6px] border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] ${
            item.highlight
              ? 'bg-[#FFFF00] rotate-1'
              : 'bg-white -rotate-1'
          }`}
        >
          {item.label && (
            <div className="absolute -top-4 -left-4 bg-black text-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] border-2 border-black rotate-[-5deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)]">
              {item.label}
            </div>
          )}
          <p className={`${item.highlight ? 'text-black font-black text-2xl md:text-3xl italic' : 'text-black font-bold text-lg'} leading-none tracking-tighter`}>
            {item.value}
          </p>
          {item.highlight && <div className="absolute top-2 right-2 w-8 h-8 bg-black opacity-5 halftone-lg" />}
        </motion.div>
      ))}
      {source && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.3em] text-black/50 mt-12 py-4 border-y-[6px] border-black border-dashed bg-black/5"
        >
          <Bookmark className="w-5 h-5 ml-4" />
          Referencia: {source}
        </motion.div>
      )}
    </div>
  );
}

function CompareContent({ content }: { content: PopupContent[] }) {
  if (content.length < 2) return <InfoContent content={content} />;
  
  return (
    <div className="space-y-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[0, 1].map((idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, rotate: idx === 0 ? -3 : 3 }}
            animate={{ opacity: 1, scale: 1, rotate: idx === 0 ? -2 : 2 }}
            className={`relative p-8 border-[8px] border-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] ${
              idx === 0 
                ? 'bg-[#00D4FF]' 
                : 'bg-[#FF007A] text-white'
            }`}
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 border-4 border-black font-black text-xl uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)]">
               {content[idx].label}
            </div>
            <div className="mt-6 flex flex-col items-center">
               <div className={`w-20 h-20 border-4 border-black mb-6 flex items-center justify-center text-4xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white`}>
                  {idx === 0 ? '⚖️' : '🚀'}
               </div>
               <p className={`text-center font-black text-lg md:text-xl leading-none tracking-tight`}>
                 {content[idx].value}
               </p>
            </div>
            <div className="absolute inset-0 halftone opacity-10 pointer-events-none" />
          </motion.div>
        ))}
        {/* VS Bubble */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
           <div className="w-20 h-20 bg-[#FFFF00] border-8 border-black rounded-full flex items-center justify-center font-black text-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-12">
              VS
           </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialsContent({ content }: { content: PopupContent[] }) {
  return (
    <div className="space-y-10">
      {content.map((item, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ delay: i * 0.15 }}
           className="relative group h-full"
        >
          <div className="absolute inset-0 bg-black translate-x-3 translate-y-3" />
          <div className="relative bg-white p-10 border-[6px] border-black flex flex-col gap-6">
            <div className="absolute -top-6 -left-4 bg-[#00FFA3] border-4 border-black px-4 py-2 font-black text-black uppercase text-lg shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg]">
               EXP-ID: {item.label}
            </div>
            <div className="relative">
              <Quote className="absolute -top-4 -left-6 w-14 h-14 text-black/5" />
              <p className="text-black font-black text-2xl md:text-3xl leading-none tracking-tighter italic">
                "{item.value}"
              </p>
            </div>
            <div className="flex items-center gap-3">
               <div className="h-1 flex-grow bg-black/10" />
               <Zap className="w-6 h-6 text-[#FFFF00] fill-current" />
               <div className="h-1 flex-grow bg-black/10" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function CardsContent({ content }: { content: PopupContent[] }) {
  return (
    <div className="grid gap-8">
      {content.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-black translate-x-2 translate-y-2" />
          <div className="relative bg-[#00D4FF] p-8 border-[6px] border-black flex items-start gap-8 hover:-translate-x-1 hover:-translate-y-1 transition-all">
            <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center flex-shrink-0 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] rotate-3">
              <Target className="w-10 h-10 text-black stroke-[4]" />
            </div>
            <div className="flex-1">
              <span className="bg-black text-white px-3 py-1 font-black text-lg tracking-tighter uppercase block mb-3 w-fit">{item.label}</span>
              <p className="text-black text-xl font-black leading-none tracking-tight mt-2 italic border-l-8 border-black/20 pl-4">
                {item.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function ListContent({ content }: { content: PopupContent[] }) {
  return (
    <div className="space-y-6">
      {content.map((item, i) => (
        <motion.div
           key={i}
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ delay: i * 0.08 }}
           className={`relative group bg-white border-[6px] border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${
             item.highlight ? 'bg-[#00FFA3] rotate-1' : '-rotate-1 hover:rotate-0'
           } transition-all`}
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border-4 border-black bg-black text-white flex items-center justify-center shrink-0 shadow-[2px_2px_0px_0px_rgba(255,255,255,0.2)]">
              <ChevronRight className="w-8 h-8 stroke-[4]" />
            </div>
            <div className="flex-1">
              {item.label && (
                <span className="bg-black/10 px-2 py-0.5 text-[10px] font-black uppercase tracking-[0.3em] block mb-2 w-fit">
                   {item.label}
                </span>
              )}
              <p className="text-xl font-black leading-none text-black tracking-tighter uppercase">
                {item.value}
              </p>
            </div>
            {item.highlight && (
               <div className="w-10 h-10 border-4 border-black bg-[#FFFF00] flex items-center justify-center rotate-12 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <CheckCircle2 className="w-6 h-6 text-black" />
               </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
