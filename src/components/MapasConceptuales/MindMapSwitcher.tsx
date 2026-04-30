import React from 'react';
import MindMapEngine from './MindMapEngine/MindMapEngine';
import type { NodeData } from './MindMapEngine/types';

// Importación de datos de los 11 mapas nuevos
import { nodes128 } from '../../data/mindmaps/128';
import { nodes3198 } from '../../data/mindmaps/3198';
import { nodes3214 } from '../../data/mindmaps/3214';
import { nodes3290 } from '../../data/mindmaps/3290';
import { nodes3378 } from '../../data/mindmaps/3378';
import { nodes3453 } from '../../data/mindmaps/3453';
import { nodes3454 } from '../../data/mindmaps/3454';
import { nodes3467 } from '../../data/mindmaps/3467';
import { nodes3557 } from '../../data/mindmaps/3557';
import { nodes3588 } from '../../data/mindmaps/3588';
import { nodes3604 } from '../../data/mindmaps/3604';

interface Props {
  mapId: string;
  onBack: () => void;
}

// Mapa de datos tipado correctamente — sin `any`
const mapData: Record<string, { nodes: NodeData[], title: string }> = {
  'mm_128': { nodes: nodes128, title: 'Educomunicación y Transmedia' },
  'mm_3198': { nodes: nodes3198, title: 'TIC y Envejecimiento Activo' },
  'mm_3214': { nodes: nodes3214, title: 'Innovación Pedagógica BTA' },
  'mm_3290': { nodes: nodes3290, title: 'Compromiso Estudiantil' },
  'mm_3378': { nodes: nodes3378, title: 'Competencias Digitales Docentes' },
  'mm_3453': { nodes: nodes3453, title: 'Experiencias Docentes y Drogas' },
  'mm_3454': { nodes: nodes3454, title: 'Trayectorias y Abandono Escolar' },
  'mm_3467': { nodes: nodes3467, title: 'Ciberacoso Universitario' },
  'mm_3557': { nodes: nodes3557, title: 'Educación Jurídica Digital' },
  'mm_3588': { nodes: nodes3588, title: 'Escala de Deserción Escolar' },
  'mm_3604': { nodes: nodes3604, title: 'Cine y Literatura' },
};

export default function MindMapSwitcher({ mapId, onBack }: Props) {
  const currentMap = mapData[mapId];

  if (!currentMap) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-zinc-950 text-white font-sans">
        <div className="text-center p-10 border-4 border-white">
          <h2 className="text-2xl font-black mb-4 uppercase">Mapa en construcción</h2>
          <button onClick={onBack} className="px-8 py-3 bg-white text-black font-black uppercase hover:bg-zinc-200 transition-colors">Volver</button>
        </div>
      </div>
    );
  }

  return (
    <MindMapEngine 
      nodes={currentMap.nodes} 
      title={currentMap.title} 
      onBack={onBack} 
    />
  );
}
