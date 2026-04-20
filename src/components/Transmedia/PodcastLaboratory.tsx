import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, Play, Pause, SkipForward, SkipBack, Volume2, Mic, Music, Disc, Zap, FileText } from 'lucide-react';
import { PODCAST_EPISODES } from '../../lib/podcastsData';
import { FilmGrain } from '../FilmGrain';

export interface PodcastEpisode {
  id: string;
  title: string;
  author: string;
  description: string;
  audioUrl: string;
  imageUrl?: string;
  duration?: string;
  category: string;
  tags: string[];
}

interface Props {
  onBack: () => void;
}

export default function PodcastLaboratory({ onBack }: Props) {
  const [currentEpisode, setCurrentEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(e => console.error("Playback failed", e));
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentEpisode]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const total = audioRef.current.duration;
      setProgress((current / total) * 100);
      setDuration(total);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = (parseFloat(e.target.value) / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  const skipTime = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '00:00';
    const mins = Math.floor(time / 60);
    const secs = Math.floor(time % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const playEpisode = (ep: PodcastEpisode) => {
    setCurrentEpisode(ep);
    setIsPlaying(true);
  };

  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white font-sans overflow-x-hidden selection:bg-[#fccb06] selection:text-black">
      <FilmGrain />
      
      {/* Background Orbs */}
      <div className="fixed top-0 right-0 w-[800px] h-[800px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[600px] h-[600px] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white border-b-8 border-black">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 bg-black text-white px-6 py-3 border-4 border-black hover:bg-[#fccb06] hover:text-black transition-all shadow-[4px_4px_0_0_#000] active:shadow-none translate-y-[-2px] active:translate-y-0"
          >
            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            <span className="font-display uppercase text-sm tracking-widest font-black">Volver al transmedia</span>
          </button>
          
          <div className="hidden md:flex items-center gap-4">
             <div className="bg-[#fccb06] text-black px-4 py-2 border-4 border-black font-display text-xl font-black italic shadow-[4px_4px_0_0_#000]">PODCAST LAB</div>
             <span className="font-mono text-[10px] uppercase font-black tracking-widest opacity-60 text-black">AUDIO_EXPERIENCE // RPP_2026</span>
          </div>
        </div>
      </header>

      <main className="pt-40 pb-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Main Player Area */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div 
               key={currentEpisode.imageUrl}
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               className="relative aspect-square md:aspect-video rounded-[3rem] border-8 border-black bg-zinc-900 overflow-hidden shadow-[20px_20px_0_0_#fccb06]"
            >
               {/* Cover Image */}
               <img 
                 src={currentEpisode.imageUrl} 
                 alt={currentEpisode.title}
                 className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

               <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: isPlaying ? 360 : 0 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="relative"
                  >
                    <Disc size={200} className="text-white/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <Mic size={64} className="text-[#fccb06] drop-shadow-[4px_4px_0_#000]" />
                    </div>
                  </motion.div>
               </div>

               {/* Waveform Animation */}
               <div className="absolute bottom-8 left-12 right-12 h-16 flex items-end justify-center gap-1 opacity-60">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <motion.div 
                       key={i}
                       animate={{ 
                         height: isPlaying ? [`${30 + Math.random()*70}%`, `${10 + Math.random()*40}%`, `${30 + Math.random()*70}%`] : '10%',
                         backgroundColor: isPlaying ? ['#fccb06', '#fff', '#fccb06'] : '#666'
                       }}
                       transition={{ duration: 0.4 + Math.random()*0.4, repeat: Infinity }}
                       className="w-1 md:w-1.5 rounded-full"
                    />
                  ))}
               </div>

               <div className="absolute top-12 left-12 flex gap-4">
                  <div className="bg-[#fccb06] text-black px-4 py-1 font-mono text-[10px] uppercase font-black tracking-widest border-2 border-black inline-block">
                    {currentEpisode.category}
                  </div>
                  <div className="bg-black text-white px-4 py-1 font-mono text-[10px] uppercase font-black tracking-widest border-2 border-white/20 inline-block">
                    LIVE_TRANSCRIPTION OFF
                  </div>
               </div>
            </motion.div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display uppercase leading-[0.9] italic text-[#fccb06] drop-shadow-[4px_4px_0_#000]">
                {currentEpisode.title}
              </h2>
              <div className="flex items-center gap-4 text-white/40 font-mono text-xs uppercase font-black tracking-[0.2em]">
                 <span>Autor: {currentEpisode.author}</span>
                 <span>/</span>
                 <span>RPP Transmedia Series</span>
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-white/80 leading-relaxed border-l-8 border-[#fccb06] pl-8 py-4 bg-white/5">
                "{currentEpisode.description}"
              </p>
            </div>

            {/* Custom Audio Player UI */}
            <div className="bg-white text-black p-8 md:p-12 border-8 border-black shadow-[15px_15px_0_0_#fff] relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-2 bg-black/10">
                 <motion.div 
                    className="h-full bg-[#fccb06]" 
                    style={{ width: `${progress}%` }}
                 />
               </div>

               <div className="flex flex-col gap-8">
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={progress} 
                    onChange={handleSeek}
                    className="w-full h-2 bg-black/10 appearance-none cursor-pointer accent-[#fccb06]"
                  />
                  
                  <div className="flex items-center justify-between">
                     <span className="font-mono text-sm font-black">{formatTime(audioRef.current?.currentTime || 0)}</span>
                     
                     <div className="grid grid-cols-5 items-center gap-4 md:gap-12">
                        <button 
                          onClick={() => skipTime(-10)}
                          className="flex flex-col items-center gap-1 group text-black/40 hover:text-black transition-colors"
                        >
                           <SkipBack size={32} />
                           <span className="font-mono text-[8px] font-black group-hover:scale-110 transition-transform">-10s</span>
                        </button>
                        
                        <div className="col-span-3 flex items-center justify-center">
                          <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="w-20 h-20 md:w-24 md:h-24 bg-black text-[#fccb06] border-4 border-black rounded-full flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-[6px_6px_0_0_rgba(0,0,0,0.2)]"
                          >
                             {isPlaying ? <Pause size={48} fill="currentColor" /> : <Play size={48} fill="currentColor" className="ml-2" />}
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => skipTime(10)}
                          className="flex flex-col items-center gap-1 group text-black/40 hover:text-black transition-colors"
                        >
                           <SkipForward size={32} />
                           <span className="font-mono text-[8px] font-black group-hover:scale-110 transition-transform">+10s</span>
                        </button>
                     </div>

                     <span className="font-mono text-sm font-black text-black/40">{formatTime(duration)}</span>
                  </div>
               </div>

               <audio 
                 ref={audioRef} 
                 key={currentEpisode.audioUrl}
                 src={currentEpisode.audioUrl} 
                 onTimeUpdate={handleTimeUpdate}
                 onLoadedMetadata={handleTimeUpdate}
                 onEnded={() => setIsPlaying(false)}
               />
            </div>
          </div>

          {/* Episode List */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center justify-between border-b-4 border-white/10 pb-4">
               <h3 className="text-3xl font-display uppercase italic">Episodios (11)</h3>
               <div className="w-8 h-8 bg-[#fccb06] border-4 border-black text-black flex items-center justify-center">
                  <Zap size={16} fill="currentColor" />
               </div>
            </div>

            <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 custom-scrollbar">
               <AnimatePresence mode="popLayout">
                 {PODCAST_EPISODES.map((ep, i) => (
                   <motion.button 
                     key={ep.id}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: i * 0.05 }}
                     onClick={() => playEpisode(ep)}
                     className={`w-full text-left p-6 border-4 border-black transition-all flex items-start gap-6 group ${
                       currentEpisode.id === ep.id 
                       ? 'bg-[#fccb06] text-black translate-x-4 shadow-none' 
                       : 'bg-white/5 hover:bg-white/10 shadow-[8px_8px_0_0_#000]'
                     }`}
                   >
                     <div className={`w-12 h-12 flex-shrink-0 border-2 border-black flex items-center justify-center ${
                       currentEpisode.id === ep.id ? 'bg-black text-[#fccb06]' : 'bg-black/20 text-white'
                     }`}>
                        {currentEpisode.id === ep.id && isPlaying ? <Music className="animate-bounce" size={20} /> : <Play size={20} />}
                     </div>
                     
                     <div className="space-y-1">
                        <h4 className="font-display text-xl uppercase leading-tight">{ep.title}</h4>
                        <p className={`font-mono text-[10px] uppercase font-black ${
                          currentEpisode.id === ep.id ? 'text-black/60' : 'text-white/40'
                        }`}>
                           {ep.author} • {ep.category}
                        </p>
                     </div>
                   </motion.button>
                 ))}
               </AnimatePresence>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Decoration */}
      <footer className="py-20 border-t-8 border-white/10 text-center opacity-30">
         <div className="font-display text-6xl md:text-9xl uppercase tracking-tighter italic">AUDIO_EXPERIMENT</div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 8px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #fccb06; border: 2px solid #000; }
      `}</style>
    </div>
  );
}
