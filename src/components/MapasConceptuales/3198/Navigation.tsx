import React from 'react';
import { Plus, Maximize2, Minimize2, Play, Search, List, ChevronRight, X } from 'lucide-react';
import type { NodeData } from './types';

interface NavigationProps {
  nodes: NodeData[];
  onNodeClick: (node: NodeData) => void;
  nodeCount: number;
  categoryCount: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  onTour: () => void;
  isTouring?: boolean;
  posterOpen?: boolean;
}

const Navigation: React.FC<NavigationProps> = React.memo(({
  nodes,
  onNodeClick,
  nodeCount,
  categoryCount,
  onZoomIn,
  onZoomOut,
  onReset,
  onTour,
  isTouring,
  posterOpen,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [isIndexOpen, setIsIndexOpen] = React.useState(false);

  const filteredNodes = React.useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return nodes.filter(n => 
      n.label.toLowerCase().includes(query) || 
      (n.content?.title || '').toLowerCase().includes(query)
    ).slice(0, 5);
  }, [nodes, searchQuery]);

  // Don't render navigation when poster is open on mobile — prevents z-index fights
  if (posterOpen) return null;

  return (
    <>
      {/* ===== TOP BAR ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-none"
        style={{ padding: 'max(env(safe-area-inset-top, 0px), 12px) 12px 0' }}
      >
        <div className="flex items-start justify-between gap-2 sm:gap-4 px-2 sm:px-6">

          {/* === LEFT: Search & Index (hidden on very small screens, compact on medium) === */}
          <div className="pointer-events-auto flex flex-col gap-2 w-full max-w-[200px] sm:max-w-[280px] md:max-w-[320px]">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <Search size={14} className="text-accent-sienna opacity-60 group-focus-within:opacity-100 transition-opacity" />
              </div>
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-9 sm:h-11 pl-9 sm:pl-11 pr-3 neobrutal-box rounded-none font-ui-bold text-xs sm:text-sm focus:outline-none transition-all placeholder:text-gray-500"
                style={{ fontSize: 'clamp(11px, 2.5vw, 14px)' }}
              />
              
              {filteredNodes.length > 0 && (
                <div className="absolute top-10 sm:top-13 left-0 right-0 neobrutal-box bg-white rounded-none border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] overflow-hidden">
                  {filteredNodes.map(node => (
                    <button
                      key={node.id}
                      onClick={() => {
                        onNodeClick(node);
                        setSearchQuery('');
                      }}
                      className="w-full px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between hover:bg-[#FFCC00] active:bg-[#FFCC00] transition-colors border-b border-black last:border-0 text-black"
                      style={{ minHeight: '44px' }}
                    >
                      <div className="text-left">
                        <div className="text-[11px] sm:text-xs font-ui-semibold text-black truncate">{node.label}</div>
                        <div className="text-[9px] sm:text-[10px] text-gray-700 font-ui uppercase tracking-wider">{node.category}</div>
                      </div>
                      <ChevronRight size={12} className="text-black flex-shrink-0 ml-1" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Index Toggle */}
            <button
              onClick={() => setIsIndexOpen(!isIndexOpen)}
              className={`flex items-center gap-2 px-3 py-2 rounded-none transition-all duration-300 border-2 border-black ${isIndexOpen ? 'bg-accent-olive text-black shadow-[3px_3px_0px_rgba(0,0,0,1)]' : 'bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)]'}`}
              style={{ minHeight: '40px' }}
            >
              {isIndexOpen ? <X size={14} className="text-black" /> : <List size={14} className="text-black" />}
              <span className="font-ui-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                {isIndexOpen ? 'Cerrar' : 'Índice'}
              </span>
            </button>

            {/* Full Index Overlay */}
            {isIndexOpen && (
              <div className="neobrutal-box bg-white rounded-none border-2 border-black max-h-[50vh] sm:max-h-[60vh] overflow-y-auto custom-scrollbar"
                style={{ WebkitOverflowScrolling: 'touch' }}
              >
                <div className="p-1 sm:p-2 space-y-0">
                  {nodes.filter(n => n.level <= 2).map(node => (
                    <button
                      key={node.id}
                      onClick={() => {
                        onNodeClick(node);
                        setIsIndexOpen(false);
                      }}
                      className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-none flex items-center gap-2 sm:gap-3 hover:bg-[#FFCC00] active:bg-[#FFCC00] transition-all text-left border-b border-black/20 last:border-0 text-black"
                      style={{ minHeight: '44px' }}
                    >
                      <div 
                        className="w-3 h-3 border-2 border-black flex-shrink-0" 
                        style={{ backgroundColor: node.color }} 
                      />
                      <div className="min-w-0">
                        <div className="text-[12px] sm:text-[13px] font-ui-bold text-black truncate">{node.label}</div>
                        <div className="text-[8px] sm:text-[9px] text-gray-700 font-ui-semibold uppercase tracking-widest truncate">{node.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* === RIGHT: Tour button + Counter === */}
          <div className="flex flex-col items-end gap-2 pointer-events-auto flex-shrink-0">
            {/* Tour Button — compact on mobile */}
            <button
              onClick={onTour}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2 sm:py-3 rounded-none transition-all duration-300 border-2 sm:border-3 border-black ${isTouring ? 'bg-accent-sienna text-white shadow-none translate-x-[2px] translate-y-[2px]' : 'bg-[#FFCC00] text-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]'}`}
              style={{ minHeight: '40px' }}
            >
              <Play size={14} className={`flex-shrink-0 ${isTouring ? 'animate-pulse text-white' : 'text-black'}`} fill={isTouring ? "currentColor" : "none"} />
              <span className="font-ui-bold text-[10px] sm:text-xs uppercase tracking-wider whitespace-nowrap">
                {isTouring ? 'Pausar' : 'Recorrido'}
              </span>
            </button>

            {/* Counter */}
            <div
              className="font-ui-bold neobrutal-box bg-white text-black px-2 sm:px-4 py-1.5 sm:py-2 rounded-none border-2 border-black whitespace-nowrap"
              style={{
                fontSize: 'clamp(9px, 2vw, 11px)',
                letterSpacing: '0.05em',
              }}
            >
              <span className="text-accent-sienna font-bold">{nodeCount}</span> NODOS / <span className="text-accent-olive font-bold">{categoryCount}</span> ÁREAS
            </div>
          </div>
        </div>
      </nav>


      {/* ===== FLOATING ZOOM CONTROLS (bottom-left) ===== */}
      <div
        className="fixed z-[100] flex flex-col gap-2 sm:gap-3 pointer-events-auto"
        style={{
          bottom: 'max(env(safe-area-inset-bottom, 0px), 80px)',
          left: 'max(env(safe-area-inset-left, 0px), 12px)',
        }}
      >
        <button
          onClick={onZoomIn}
          className="font-ui w-10 h-10 sm:w-12 sm:h-12 rounded-none flex items-center justify-center transition-all duration-300 bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] active:bg-[#FFCC00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Acercar"
          style={{ minWidth: '44px', minHeight: '44px', touchAction: 'manipulation' }}
        >
          <Plus size={18} className="text-black" />
        </button>
        <button
          onClick={onZoomOut}
          className="font-ui w-10 h-10 sm:w-12 sm:h-12 rounded-none flex items-center justify-center transition-all duration-300 bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] active:bg-[#FFCC00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Alejar"
          style={{ minWidth: '44px', minHeight: '44px', touchAction: 'manipulation' }}
        >
          <Minimize2 size={18} className="text-black" />
        </button>
        <button
          onClick={onReset}
          className="font-ui w-10 h-10 sm:w-12 sm:h-12 rounded-none flex items-center justify-center transition-all duration-300 bg-white border-2 border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] active:bg-[#FFCC00] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          aria-label="Vista completa"
          style={{ minWidth: '44px', minHeight: '44px', touchAction: 'manipulation' }}
        >
          <Maximize2 size={18} className="text-black" />
        </button>
      </div>

      {/* ===== HELP HINT (bottom) — hidden on very small screens ===== */}
      <div
        className="hidden sm:block fixed z-[100] font-ui-bold neobrutal-box px-4 py-2 rounded-none bg-white text-black border-2 border-black"
        style={{
          bottom: 'max(env(safe-area-inset-bottom, 0px), 16px)',
          left: '80px',
          fontSize: '10px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
        }}
      >
        <span className="opacity-90">Arrastra para mover · Scroll para zoom · Click para explorar</span>
      </div>
    </>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
