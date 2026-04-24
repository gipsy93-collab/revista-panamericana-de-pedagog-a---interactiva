import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, FileKey, ExternalLink, Shield } from 'lucide-react';
import { articleInfo } from '../data';

interface InfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function InfoModal({ isOpen, onClose }: InfoModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           className="fixed inset-0 z-[110] popup-overlay flex items-center justify-center p-4 backdrop-blur-sm"
           onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, rotate: 2, y: 100 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.9, rotate: -2, y: 100 }}
            className="bg-white border-[10px] border-black shadow-[24px_24px_0px_0px_rgba(0,0,0,1)] max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden noise"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header / Sticker Layout */}
            <div className="relative bg-[#FF007A] border-b-[10px] border-black p-10 overflow-hidden">
              <div className="absolute inset-0 halftone-lg opacity-20 pointer-events-none" />
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                <div className="bg-white border-4 border-black p-6 rotate-[-6deg] shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] shrink-0">
                  <FileKey className="w-16 h-16 text-black stroke-[3]" />
                </div>
                <div className="text-center md:text-left">
                  <div className="bg-black text-white px-4 py-1 text-xs font-black uppercase tracking-[0.3em] mb-4 inline-block">
                    Ficha Técnica Oficial
                  </div>
                  <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none" style={{ WebkitTextStroke: '1.5px black', textShadow: '4px 4px 0px black' }}>
                    {articleInfo.title}
                  </h2>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-6 right-6 w-14 h-14 bg-white border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:shadow-none"
              >
                <X className="w-10 h-10 stroke-[4]" />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 space-y-12 bg-[#FDFD96] scrollbar-hide">
              {/* Authors Sticker */}
              <section className="relative">
                <div className="absolute -top-4 -left-4 bg-[#00FFA3] border-4 border-black px-4 py-2 font-black text-black uppercase text-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] z-10">
                  AUTORES
                </div>
                <div className="bg-white border-[6px] border-black p-8 pt-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
                  <p className="text-2xl font-black text-black italic leading-none tracking-tight">
                    {articleInfo.authors}
                  </p>
                  <p className="text-sm font-bold text-black/60 mt-4 uppercase tracking-widest">
                    {articleInfo.affiliation}
                  </p>
                </div>
              </section>

              {/* Grid of Data Stickers */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Journal Sticker */}
                <div className="bg-[#00D4FF] border-[6px] border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] rotate-1 hover:rotate-0 transition-transform">
                  <h4 className="font-black text-black uppercase tracking-[0.2em] text-[10px] mb-4 border-b-2 border-black/20 pb-2">Publicación</h4>
                  <p className="text-xl font-black uppercase leading-none">{articleInfo.journal}</p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="bg-white px-2 py-0.5 text-[8px] font-black border-2 border-black">E-ISSN: {articleInfo.eissn}</span>
                  </div>
                </div>

                {/* DOI Sticker */}
                <div className="bg-[#FFFF00] border-[6px] border-black p-8 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] -rotate-1 hover:rotate-0 transition-transform flex flex-col justify-between">
                  <div>
                    <h4 className="font-black text-black uppercase tracking-[0.2em] text-[10px] mb-4 border-b-2 border-black/20 pb-2">Identificador Digital</h4>
                    <p className="text-sm font-black break-all font-mono bg-white p-2 border-2 border-black mb-4">
                      {articleInfo.doi}
                    </p>
                  </div>
                  <a 
                    href={articleInfo.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black text-white px-4 py-2 font-black uppercase text-xs flex items-center justify-between hover:bg-white hover:text-black transition-colors"
                  >
                    Abrir DOI <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Dates & License Strip */}
              <div className="bg-white border-[6px] border-black p-6 flex flex-wrap items-center justify-around gap-6 shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] halftone opacity-90">
                 <div className="flex items-center gap-3">
                   <Calendar className="w-8 h-8 text-[#FF007A]" />
                   <div>
                     <p className="text-[10px] font-black uppercase text-black/40">Recibido</p>
                     <p className="font-black text-sm">{articleInfo.dates.received}</p>
                   </div>
                 </div>
                 <div className="w-px h-10 bg-black/20 hidden md:block" />
                 <div className="flex items-center gap-3">
                   <Calendar className="w-8 h-8 text-[#00FFA3]" />
                   <div>
                     <p className="text-[10px] font-black uppercase text-black/40">Publicado</p>
                     <p className="font-black text-sm">{articleInfo.dates.published}</p>
                   </div>
                 </div>
                 <div className="w-px h-10 bg-black/20 hidden md:block" />
                 <div className="flex items-center gap-3">
                   <Shield className="w-8 h-8 text-[#00D4FF]" />
                   <p className="text-[10px] font-black uppercase max-w-[150px] leading-tight opacity-60">
                     {articleInfo.license}
                   </p>
                 </div>
              </div>
            </div>

            {/* Footer Tape */}
            <div className="bg-black p-2 flex items-center justify-center gap-4 overflow-hidden h-8">
               {[...Array(20)].map((_, i) => (
                 <div key={i} className="w-4 h-4 bg-[#FF007A] rotate-45 flex-shrink-0" />
               ))}
               <p className="absolute text-white font-black text-[10px] uppercase tracking-[0.5em] bg-black px-4">
                 Journal Pedagogy Archive
               </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
