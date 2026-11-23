import React from 'react';
import { ChevronLeft } from 'lucide-react';

export interface ArticleHeaderProps {
  onBack: () => void;
  doi: string;
  volume: string;
  year: string;
  authors: string;
  institution: string;
  themeColor?: string;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({
  onBack,
  doi,
  volume,
  year,
  authors,
  institution,
  themeColor = '#10b981',
}) => {
  // Normalizar el formato del volumen (ej: 'Vol. 41', '41', 'n. 41' -> 'N° 41')
  const cleanVolNumber = volume.replace(/[^0-9]/g, '') || '41';
  const displayVol = `N° ${cleanVolNumber}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-4 sm:border-b-8 border-black shadow-[0_4px_0_0_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-2 min-h-[64px] sm:min-h-[76px] flex items-center justify-between gap-2 sm:gap-4">
        {/* Lado izquierdo: Botones volver y revista */}
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={onBack}
            className="group flex items-center gap-1 sm:gap-2 bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2.5 border-2 sm:border-4 border-black hover:bg-[#10b981] transition-colors shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] rounded-xl hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-[10px] sm:text-xs tracking-wider sm:tracking-widest font-black">Volver</span>
          </button>

          <a
            href="https://revistas.up.edu.mx/RPP/es/issue/view/242"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 bg-white text-black px-4 py-2 border-2 border-black hover:bg-blue-600 hover:text-white transition-colors shadow-[4px_4px_0_0_#000] rounded-xl hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="font-display uppercase text-xs tracking-widest font-black">Revista Académica</span>
          </a>
        </div>

        {/* Lado derecho: Ficha Técnica Desaturada y Nítida con Volumen */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          {/* Badge Volumen */}
          <div 
            style={{ backgroundColor: themeColor }}
            className="text-white px-2.5 py-1 sm:px-4 sm:py-2 border-2 sm:border-4 border-black font-display text-sm sm:text-xl font-black italic shadow-[3px_3px_0_0_#000] sm:shadow-[4px_4px_0_0_#000] rounded-xl sm:rounded-2xl flex-shrink-0"
          >
            {displayVol}
          </div>

          {/* Ficha técnica desaturada */}
          <div className="flex flex-col text-right border-l-2 border-black/25 pl-2 sm:pl-4 justify-center min-w-0">
            <div className="flex items-center justify-end gap-1.5 sm:gap-2 text-black flex-wrap">
              <span className="hidden sm:inline font-mono text-[10px] uppercase font-bold text-black/50">DOI:</span>
              <a
                href={`https://doi.org/${doi}`}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[10px] sm:text-xs font-semibold text-black hover:text-[#10b981] hover:underline transition-colors truncate max-w-[130px] sm:max-w-none"
              >
                {doi}
              </a>
              <span className="font-mono text-[9px] sm:text-[10px] font-bold bg-zinc-900 text-white px-1.5 py-0.5 rounded-md flex-shrink-0">
                {year}
              </span>
            </div>
            <div className="font-sans font-bold text-[10px] sm:text-xs text-black/90 tracking-normal mt-0.5 line-clamp-1 max-w-[180px] sm:max-w-[300px] md:max-w-lg">
              {authors}
            </div>
            <div className="hidden sm:block font-sans text-[11px] text-black/60 font-medium line-clamp-1 max-w-[300px] md:max-w-lg">
              {institution}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
