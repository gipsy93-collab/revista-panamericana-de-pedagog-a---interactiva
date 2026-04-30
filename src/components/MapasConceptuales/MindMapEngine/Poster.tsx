import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Share2, Bookmark, ExternalLink } from 'lucide-react';
import type { NodeData } from './types';

interface PosterProps {
  node: NodeData;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const Poster: React.FC<PosterProps> = ({ node, onClose, onNext, onPrev }) => {
  const isDark = node.posterVariant === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      className={`fixed top-0 right-0 h-full w-full md:w-[600px] z-[200] overflow-y-auto ${isDark ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'} border-l-8 border-black shadow-[-20px_0_60px_rgba(0,0,0,0.5)]`}
    >
      {/* Botón Cerrar */}
      <button 
        onClick={onClose}
        className="fixed top-6 right-6 z-[210] p-3 bg-black text-white border-2 border-white/20 hover:bg-zinc-800 transition-colors rounded-full shadow-lg"
      >
        <X size={24} />
      </button>

      {/* Hero Image */}
      <div className="relative h-[300px] w-full overflow-hidden bg-black/10">
        {node.content.image ? (
          <img 
            src={node.content.image} 
            alt={node.content.imageAlt || 'Ilustración'} 
            className="w-full h-full object-cover opacity-80"
          />
        ) : (
          <div 
            className="w-full h-full flex items-center justify-center font-black opacity-10 text-8xl uppercase italic select-none"
            style={{ color: node.color }}
          >
            {node.category}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
        <div className="absolute bottom-8 left-8">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-full">
              {node.content.breadcrumb}
            </span>
          </div>
          <h2 className="text-4xl font-black uppercase leading-none tracking-tighter">
            {node.content.title}
          </h2>
        </div>
      </div>

      {/* Navigation Buttons (Siguiente - Anterior) */}
      <div className="flex items-center justify-between px-8 py-4 border-b border-black/10 bg-black/5">
        <button 
          onClick={onPrev}
          disabled={!onPrev}
          className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${onPrev ? 'opacity-100 hover:text-[#0ea5e9]' : 'opacity-20 pointer-events-none'}`}
        >
          <ChevronLeft size={16} /> Anterior
        </button>
        <div className="h-1 w-12 bg-black/10 rounded-full" />
        <button 
          onClick={onNext}
          disabled={!onNext}
          className={`flex items-center gap-2 text-xs font-black uppercase tracking-widest ${onNext ? 'opacity-100 hover:text-[#0ea5e9]' : 'opacity-20 pointer-events-none'}`}
        >
          Siguiente <ChevronRight size={16} />
        </button>
      </div>

      {/* Content Sections */}
      <div className="p-8 space-y-12">
        {node.content.sections.map((section, idx) => (
          <div key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${idx * 150}ms` }}>
            {section.type === 'insight' && (
              <div className="relative p-6 bg-white/5 border-l-4 border-[#0ea5e9] rounded-r-lg">
                <p className="text-xl font-medium leading-relaxed italic opacity-90">
                  "{section.content}"
                </p>
              </div>
            )}

            {section.type === 'body' && (
              <p className="text-lg leading-relaxed opacity-80 whitespace-pre-wrap">
                {section.content}
              </p>
            )}

            {section.type === 'list' && (
              <ul className="space-y-4">
                {section.items?.map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-2 w-2 h-2 bg-[#0ea5e9] rounded-full flex-shrink-0" />
                    <span className="text-lg opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.type === 'quote' && (
              <figure className="border-l-8 border-white/10 pl-8 py-2">
                <blockquote className="text-2xl font-black italic leading-tight mb-4">
                  "{section.quote}"
                </blockquote>
                <figcaption className="text-sm font-mono uppercase tracking-widest opacity-40">
                  — {section.attribution}
                </figcaption>
              </figure>
            )}

            {section.type === 'metadata' && (
              <div className="flex flex-wrap gap-2">
                {section.tags?.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="h-40" /> {/* Spacer */}
    </motion.div>
  );
};

export default Poster;
