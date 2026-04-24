import { Suspense, lazy } from 'react';

const MindMap3557 = lazy(() => import('../MapasConceptuales/3557/MindMap3557'));

export default function MapaConceptual3557({ onBack }: { onBack?: () => void }) {
  return (
    <Suspense fallback={
      <div className="fixed inset-0 flex items-center justify-center bg-[#FDFD96]">
        <div className="text-2xl font-black uppercase tracking-widest animate-pulse">Cargando Mapa Mental...</div>
      </div>
    }>
      <MindMap3557 onBack={onBack} />
    </Suspense>
  );
}
