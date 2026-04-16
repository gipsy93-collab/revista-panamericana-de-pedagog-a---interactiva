import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote } from 'lucide-react';
import { QUOTES } from './constants';

gsap.registerPlugin(ScrollTrigger);

export default function QuotesSection() {
  const container = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.quote-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%'
        }
      }
    );
  }, { scope: container });

  return (
    <section ref={container} className="py-24 px-6 max-w-7xl mx-auto overflow-hidden text-white">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6">
        <Quote size={14} />
        Voces del Aula
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {QUOTES.map((q, idx) => (
          <div key={idx} className="quote-card bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 border-l-4 border-l-[#00d2ff]">
            <p className="text-white/80 leading-relaxed font-light mb-4">
              "{q.text}"
            </p>
            <span className="text-xs font-bold uppercase tracking-widest text-[#00d2ff]">
              — {q.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
