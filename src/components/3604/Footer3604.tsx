import React from 'react';
import { ExternalLink, Mail, Twitter, Globe, Github } from 'lucide-react';

export default function Footer3604() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 bg-[#1a1a1a] text-[#FDFCFB] border-t border-white/5 relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute left-0 bottom-0 opacity-[0.02] pointer-events-none select-none">
        <span className="text-[25rem] font-serif font-black leading-none">RPP</span>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#5A5A40] flex items-center justify-center font-serif font-bold text-xl">R</div>
              <span className="text-xl font-serif font-bold tracking-tight">Revista Panamericana de Pedagogía</span>
            </div>
            
            <p className="text-[#FDFCFB]/40 text-sm leading-relaxed mb-8 max-w-md">
              Un espacio académico dedicado a la innovación educativa, la investigación de vanguardia y la transformación pedagógica a través de lenguajes transmedia.
            </p>

            <div className="flex gap-4">
              {[Twitter, Github, Globe, Mail].map((Icon, i) => (
                <button key={i} className="w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-[#5A5A40] hover:border-[#5A5A40] transition-all text-white/40 hover:text-white">
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/5 border border-white/10 p-8 md:p-12">
              <h4 className="text-[#5A5A40] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Referencia Académica</h4>
              <div className="space-y-6">
                <p className="font-serif text-xl md:text-2xl leading-relaxed text-[#FDFCFB]/90">
                  López-Martínez, M. T., & Muñoz-Madrid, M. A. (2026). El cine como mediador pedagógico en la enseñanza de la literatura: aportes desde una experiencia de investigación-acción educativa. <em>Revista Panamericana de Pedagogía</em>, 41, e3604.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 pt-6 border-t border-white/10">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-1">DOI OFICIAL</span>
                    <a href="https://doi.org/10.21555/rpp.3604" target="_blank" rel="noreferrer" className="text-[#5A5A40] font-bold hover:text-white transition-colors flex items-center gap-2">
                      10.21555/rpp.3604 <ExternalLink size={14} />
                    </a>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 block mb-1">ISSN DIGITAL</span>
                    <span className="text-[#FDFCFB]/60 font-mono">2594-2190</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] uppercase tracking-widest text-white/20">
            © {currentYear} CIENCIA TRANSMEDIA / PUBLICAÇÕES ACADÊMICAS
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-[#5A5A40] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-[#5A5A40] transition-colors">Digital Ethics</a>
            <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-[#5A5A40] transition-colors">Open Access</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
