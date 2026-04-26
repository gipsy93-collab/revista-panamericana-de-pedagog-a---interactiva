import React from 'react';
import { Plus, Maximize2, Minimize2, Play, Search, List, ChevronRight } from 'lucide-react';
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

  return (
    <>
      {/* Top Bar */}
      <nav
        className="fixed top-0 left-0 right-0 z-[100] pointer-events-none px-8 py-6"
      >
        <div className="flex items-start justify-between">
          {/* Search & Index Area */}
          <div className="pointer-events-auto flex flex-col gap-3 w-80">
            {/* Search Bar */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search size={16} className="text-accent-sienna opacity-60 group-focus-within:opacity-100 transition-opacity" />
              </div>
              <input
                type="text"
                placeholder="Buscar concepto..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-12 pl-12 pr-4 neobrutal-box rounded-none font-ui-bold text-sm focus:outline-none focus:translate-x-[-2px] focus:translate-y-[-2px] focus:shadow-[6px_6px_0px_rgba(0,0,0,1)] transition-all placeholder:text-gray-500"
              />
              
              {filteredNodes.length > 0 && (
                <div className="absolute top-14 left-0 right-0 neobrutal-box bg-white rounded-none border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-300">
                  {filteredNodes.map(node => (
                    <button
                      key={node.id}
                      onClick={() => {
                        onNodeClick(node);
                        setSearchQuery('');
                      }}
                      className="w-full px-5 py-3 flex items-center justify-between hover:bg-[#FFCC00] transition-colors group/item border-b border-black last:border-0 text-black"
                    >
                      <div className="text-left">
                        <div className="text-xs font-ui-semibold text-black">{node.label}</div>
                        <div className="text-[10px] text-gray-700 font-ui uppercase tracking-wider">{node.category}</div>
                      </div>
                      <ChevronRight size={14} className="text-black group-hover/item:scale-125 transition-transform" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Index Toggle */}
            <button
              onClick={() => setIsIndexOpen(!isIndexOpen)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-none transition-all duration-300 group border-2 border-black hover:translate-x-[-2px] hover:translate-y-[-2px] ${isIndexOpen ? 'bg-accent-olive text-black shadow-[4px_4px_0px_rgba(0,0,0,1)]' : 'bg-white text-black shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]'}`}
            >
              <List size={16} className="text-black" />
              <span className="font-ui-bold text-[11px] uppercase tracking-wider">
                Índice del Mapa
              </span>
            </button>

            {/* Full Index Overlay */}
            {isIndexOpen && (
              <div className="neobrutal-box bg-white rounded-none border-2 border-black max-h-[60vh] overflow-y-auto animate-in fade-in slide-in-from-top-4 duration-500 custom-scrollbar">
                <div className="p-2 space-y-1">
                  {nodes.filter(n => n.level <= 2).map(node => (
                    <button
                      key={node.id}
                      onClick={() => {
                        onNodeClick(node);
                        setIsIndexOpen(false);
                      }}
                      className="w-full px-4 py-3 rounded-none flex items-center gap-3 hover:bg-[#FFCC00] transition-all group/item text-left border-b border-black last:border-0 text-black"
                    >
                      <div 
                        className="w-3 h-3 border-2 border-black flex-shrink-0" 
                        style={{ backgroundColor: node.color }} 
                      />
                      <div>
                        <div className="text-[13px] font-ui-bold text-black">{node.label}</div>
                        <div className="text-[9px] text-gray-700 font-ui-semibold uppercase tracking-widest">{node.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className={`flex flex-col items-end gap-3 transition-opacity duration-500 ${posterOpen ? 'opacity-0' : 'opacity-100'}`}>
            {/* Tour Button */}
            <button
              onClick={onTour}
              className={`pointer-events-auto flex items-center gap-3 px-6 py-3 rounded-none transition-all duration-300 group border-3 border-black ${isTouring ? 'bg-accent-sienna text-white shadow-none translate-x-[4px] translate-y-[4px]' : 'bg-[#FFCC00] text-black shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]'}`}
            >
              <Play size={18} className={`${isTouring ? 'animate-pulse text-white' : 'group-hover:scale-125 transition-transform text-black'}`} fill={isTouring ? "currentColor" : "none"} />
              <span className="font-ui-bold text-xs uppercase tracking-widest">
                {isTouring ? 'Pausar Recorrido' : 'Iniciar Recorrido'}
              </span>
            </button>

            {/* Counter */}
            <div
              className="font-ui-bold pointer-events-auto neobrutal-box bg-white text-black px-4 py-2 rounded-none border-2 border-black"
              style={{
                fontSize: '11px',
                letterSpacing: '0.05em',
              }}
            >
              <span className="text-accent-sienna font-bold">{nodeCount}</span> NODOS / <span className="text-accent-olive font-bold">{categoryCount}</span> ÁREAS
            </div>
          </div>
        </div>
      </nav>


      {/* Floating Controls - MOVED TO LEFT to avoid overlap with Poster */}
      <div
        className={`fixed bottom-24 left-8 z-[100] flex flex-col gap-3 transition-opacity duration-500 ${posterOpen ? 'opacity-0' : 'opacity-100'}`}
      >
        <button
          onClick={onZoomIn}
          className="font-ui w-12 h-12 rounded-none flex items-center justify-center transition-all duration-300 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none group"
          aria-label="Acercar"
        >
          <Plus size={20} className="text-black transition-colors" />
        </button>
        <button
          onClick={onZoomOut}
          className="font-ui w-12 h-12 rounded-none flex items-center justify-center transition-all duration-300 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none group"
          aria-label="Alejar"
        >
          <Minimize2 size={20} className="text-black transition-colors" />
        </button>
        <button
          onClick={onReset}
          className="font-ui w-12 h-12 rounded-none flex items-center justify-center transition-all duration-300 bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:bg-[#FFCC00] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none group"
          aria-label="Vista completa"
        >
          <Maximize2 size={20} className="text-black transition-colors" />
        </button>
      </div>

      {/* Help hint at bottom left */}
      <div
        className={`fixed bottom-8 left-24 z-[100] font-ui-bold neobrutal-box px-5 py-2.5 rounded-none bg-white text-black border-2 border-black transition-opacity duration-500 ${posterOpen ? 'opacity-0' : 'opacity-100'}`}
        style={{
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
