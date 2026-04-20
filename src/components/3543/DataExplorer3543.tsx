import React, { useState } from 'react';
import { BookOpen, AlertTriangle, CheckCircle2, Zap } from 'lucide-react';

const DATA_SET = {
  especialidades: {
    'Inglés': { importancia: 93, practica: 85, apoyo: 80, texto: 'Ensayos y Narrativas', hallazgo: 'Formación docente específica permite mayor acompañamiento.' },
    'Español': { importancia: 93, practica: 60, apoyo: 30, texto: 'Textos Reflexivos', hallazgo: 'Alta valoración teórica, pero bajo seguimiento de borradores.' },
    'Historia': { importancia: 93, practica: 55, apoyo: 25, texto: 'Ensayos Argumentativos', hallazgo: 'Enfoque en el producto final sobre el proceso de escritura.' },
    'Matemáticas': { importancia: 45, practica: 10, apoyo: 5, texto: 'Notas cortas / Esquemas', hallazgo: 'La asignatura se percibe como ajena a la escritura académica.' },
  },
  global: {
    importancia: 93,
    apoyo: 14,
    n: 14
  }
};

export default function DataExplorer3453() {
  const [selectedEsp, setSelectedEsp] = useState<keyof typeof DATA_SET.especialidades>('Inglés');
  const stats = DATA_SET.especialidades[selectedEsp];

  return (
    <div className="w-full my-12 bg-white border-[10px] border-black p-8 shadow-[24px_24px_0_0_#000] text-black">
      <div className="grid lg:grid-cols-2 gap-16">
        {/* PANEL DE CONTROL */}
        <div className="space-y-12">
          <div className="bg-zinc-100 p-6 border-4 border-black">
            <h4 className="font-black uppercase mb-6 text-2xl italic flex items-center gap-3">
              <span className="bg-black text-white w-10 h-10 flex items-center justify-center not-italic rounded-full">1</span> 
              Especialidad Docente
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(DATA_SET.especialidades).map((esp) => (
                <button
                  key={esp}
                  onClick={() => setSelectedEsp(esp as any)}
                  className={`p-4 border-4 border-black font-black uppercase text-sm transition-all shadow-[4px_4px_0_0_#000] active:shadow-none ${selectedEsp === esp ? 'bg-black text-white' : 'bg-white text-black hover:bg-zinc-200'}`}
                >
                  {esp}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-zinc-100 p-6 border-4 border-black">
            <h4 className="font-black uppercase mb-4 text-xl italic flex items-center gap-3">
               Hallazgo por Área
            </h4>
            <div className="bg-white p-4 border-2 border-black flex gap-4 items-start shadow-[6px_6px_0_0_#000]">
              <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" />
              <p className="font-bold text-sm leading-tight uppercase">"{stats.hallazgo}"</p>
            </div>
          </div>
        </div>

        {/* PANEL DE RESULTADOS */}
        <div className="bg-zinc-50 border-8 border-black p-10 shadow-[20px_20px_0_0_#4f46e5]">
           <div className="flex justify-between items-start mb-12 border-b-8 border-black pb-6">
              <div className="text-left">
                <p className="font-mono text-xs uppercase font-black opacity-40 italic">Lab_Escritura // REF.3543</p>
                <h5 className="text-4xl font-black uppercase italic text-black leading-none mt-2">{selectedEsp}</h5>
              </div>
              <div className="text-right">
                <p className="text-6xl font-black text-indigo-600 leading-none">{stats.apoyo}%</p>
                <p className="font-mono text-[10px] font-black uppercase text-black mt-2 tracking-widest">Acompañamiento</p>
              </div>
           </div>

           <div className="space-y-10">
              <div>
                <div className="flex justify-between font-black text-sm uppercase mb-2 text-black italic">
                   <span>Importancia Teórica</span>
                   <span className="text-black">{stats.importancia}%</span>
                </div>
                <div className="h-10 bg-white border-4 border-black p-1 shadow-[4px_4px_0_0_#000]">
                   <div className="h-full bg-black transition-all duration-700" style={{ width: `${stats.importancia}%` }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between font-black text-sm uppercase mb-2 text-black italic">
                   <span>Práctica Real (Asignación)</span>
                   <span className="text-indigo-600">{stats.practica}%</span>
                </div>
                <div className="h-10 bg-white border-4 border-black p-1 shadow-[4px_4px_0_0_#000]">
                   <div className="h-full bg-indigo-600 transition-all duration-700" style={{ width: `${stats.practica}%` }}></div>
                </div>
              </div>

              <div className="mt-12 bg-black text-white p-6 border-l-[15px] border-indigo-600 shadow-[10px_10px_0_0_#000]">
                <div className="flex items-center gap-3 mb-3">
                  <BookOpen size={20} className="text-indigo-400" />
                  <span className="tracking-widest uppercase font-black not-italic text-xs">Principal_Producto_Escrito:</span>
                </div>
                <p className="text-white font-black text-2xl uppercase italic leading-tight">{stats.texto}</p>
              </div>
           </div>
        </div>
      </div>

       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-indigo-600 text-white p-4 border-4 border-black shadow-[6px_6px_0_0_#000] flex flex-col justify-center items-center">
             <span className="text-4xl font-black">93%</span>
             <span className="font-mono text-[9px] uppercase font-bold">Valoración Global</span>
          </div>
          <div className="bg-white text-black p-4 border-4 border-black shadow-[6px_6px_0_0_#999] flex flex-col justify-center items-center">
             <span className="text-4xl font-black text-red-600">14%</span>
             <span className="font-mono text-[9px] uppercase font-bold">Respaldo Real</span>
          </div>
          <div className="bg-black text-white p-4 border-4 border-black shadow-[6px_6px_0_0_#4f46e5] flex flex-col justify-center items-center">
             <span className="text-4xl font-black italic">N=14</span>
             <span className="font-mono text-[9px] uppercase font-bold">Cuerpo Docente</span>
          </div>
       </div>
    </div>
  );
}
