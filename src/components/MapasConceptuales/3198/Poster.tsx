import React, { useEffect, useRef, useCallback } from 'react';
import { X } from 'lucide-react';
import type { NodeData, PosterSection } from './types';

interface PosterProps {
  node: NodeData | null;
  onClose: () => void;
}

const Poster: React.FC<PosterProps> = ({ node, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Stable close handler to prevent event leaks
  const handleClose = useCallback((e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    e.preventDefault();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  useEffect(() => {
    if (node && panelRef.current) {
      panelRef.current.scrollTop = 0;
    }
  }, [node]);

  // Lock body scroll on mobile when poster is open
  useEffect(() => {
    if (node) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [node]);

  if (!node) return null;

  const isDark = node.posterVariant === 'dark';
  const textColor = isDark ? '#FFFFFF' : '#000000';
  const secondaryColor = isDark ? '#CBD5E1' : '#333333';

  const renderSection = (section: PosterSection, index: number) => {
    switch (section.type) {
      case 'insight':
        return (
          <div
            key={index}
            className="mb-6"
            style={{
              borderLeft: '3px solid #C75B2A',
              paddingLeft: '16px',
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: 'clamp(14px, 3.5vw, 17px)',
                lineHeight: 1.7,
                color: textColor,
                fontStyle: 'italic',
              }}
            >
              {section.content}
            </p>
          </div>
        );

      case 'body':
        return (
          <div key={index} className="mb-5">
            {section.content?.split('\n\n').map((paragraph, i) => (
              <p
                key={i}
                className="font-body mb-3"
                style={{
                  fontSize: 'clamp(13px, 3.5vw, 16px)',
                  lineHeight: 1.7,
                  color: textColor,
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        );

      case 'quote':
        return (
          <div
            key={index}
            className="my-6"
            style={{
              borderLeft: '3px solid #C75B2A',
              paddingLeft: '16px',
            }}
          >
            <p
              className="font-body-italic"
              style={{
                fontSize: 'clamp(14px, 3.8vw, 18px)',
                lineHeight: 1.8,
                color: textColor,
              }}
            >
              "{section.quote}"
            </p>
            {section.attribution && (
              <p
                className="font-ui mt-2"
                style={{
                  fontSize: '12px',
                  color: secondaryColor,
                  letterSpacing: '0.05em',
                }}
              >
                — {section.attribution}
              </p>
            )}
          </div>
        );

      case 'list':
        return (
          <ul key={index} className="mb-5 space-y-2">
            {section.items?.map((item, i) => (
              <li
                key={i}
                className="font-body flex items-start gap-2"
                style={{
                  fontSize: 'clamp(13px, 3.2vw, 15px)',
                  lineHeight: 1.6,
                  color: textColor,
                }}
              >
                <span
                  style={{
                    color: '#C75B2A',
                    fontSize: '18px',
                    lineHeight: 1.4,
                    flexShrink: 0,
                  }}
                >
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        );

      case 'tags':
        return (
          <div key={index} className="flex flex-wrap gap-2 mb-5">
            {section.tags?.map((tag, i) => (
              <span
                key={i}
                className="font-ui-bold"
                style={{
                  fontSize: 'clamp(10px, 2.5vw, 12px)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#000',
                  background: '#FDE68A',
                  border: `2px solid #000`,
                  boxShadow: '2px 2px 0px rgba(0,0,0,1)',
                  borderRadius: '0px',
                  padding: '4px 10px',
                  fontWeight: 'bold',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        );

      case 'metadata':
        return (
          <div key={index} className="flex flex-wrap gap-2 mb-5">
            {section.tags?.map((tag, i) => (
              <span
                key={i}
                className="font-ui-bold"
                style={{
                  fontSize: 'clamp(10px, 2.5vw, 12px)',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: '#000000',
                  background: '#A3E635',
                  border: '2px solid #000',
                  boxShadow: '2px 2px 0px rgba(0,0,0,1)',
                  borderRadius: '0px',
                  padding: '5px 12px',
                  fontWeight: 'bold'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        );

      case 'image':
        return section.image ? (
          <div key={index} className="mb-6">
            <img
              src={section.image}
              alt={section.imageAlt || ''}
              style={{
                width: '100%',
                borderRadius: '0px',
                border: '3px solid #000',
                boxShadow: '4px 4px 0px rgba(0,0,0,1)',
                objectFit: 'cover',
              }}
            />
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <>
      {/* BACKDROP — opaque on mobile to block canvas interaction */}
      <div
        className="fixed inset-0 z-[9998]"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          WebkitTapHighlightColor: 'transparent',
        }}
        onClick={handleClose}
        onTouchEnd={handleClose}
      />

      {/* PANEL — full-screen on mobile, sidebar on desktop */}
      <div
        ref={panelRef}
        className={`fixed z-[9999] overflow-y-auto overscroll-contain ${isDark ? 'neobrutal-box-dark' : 'neobrutal-box'}`}
        style={{
          /* Mobile-first: full screen */
          top: '0',
          right: '0',
          bottom: '0',
          left: '0',
          width: '100%',
          borderRadius: '0px',
          animation: 'poster-slide-in 500ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
          border: 'none',
          boxShadow: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        /* Prevent touch events from leaking through to canvas */
        onClick={(e) => e.stopPropagation()}
        onTouchStart={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* STICKY CLOSE BUTTON — always visible, never scrolls away */}
        <div
          className="sticky top-0 z-[10001] flex justify-end p-3 sm:p-4"
          style={{
            background: isDark
              ? 'linear-gradient(to bottom, #0F172A 60%, transparent)'
              : 'linear-gradient(to bottom, #FAFAFA 60%, transparent)',
            pointerEvents: 'none',
          }}
        >
          <button
            onClick={handleClose}
            onTouchEnd={handleClose}
            className="pointer-events-auto w-12 h-12 sm:w-10 sm:h-10 flex items-center justify-center transition-all duration-300 bg-[#FFCC00] hover:bg-[#F97316] active:bg-[#F97316] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
            aria-label="Cerrar"
            style={{
              /* Large touch target for mobile — minimum 48x48px */
              minWidth: '48px',
              minHeight: '48px',
              touchAction: 'manipulation',
              WebkitTapHighlightColor: 'transparent',
            }}
          >
            <X size={24} color="#000" strokeWidth={3} />
          </button>
        </div>

        {/* Content */}
        <div className="px-5 sm:px-10 pb-16 pt-0">
          {/* Breadcrumb */}
          <div
            className="font-ui-semibold mb-4 flex items-center gap-2"
            style={{
              fontSize: '12px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: isDark ? 'var(--accent-sand)' : 'var(--accent-sienna)',
            }}
          >
            <span className="w-8 h-[1px] bg-current opacity-50" />
            {node.content.breadcrumb}
          </div>

          {/* Title */}
          <h2
            className="font-heading mb-6 sm:mb-8"
            style={{
              fontSize: 'clamp(22px, 5vw, 42px)',
              fontWeight: 500,
              color: textColor,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            {node.content.title}
          </h2>

          {/* Hero Image */}
          {node.content.image && (
            <div className="mb-8 sm:mb-10 overflow-hidden border-3 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <img
                src={node.content.image}
                alt={node.content.imageAlt || ''}
                className="w-full h-40 sm:h-64 object-cover"
                loading="lazy"
                style={{
                  border: '3px solid #000'
                }}
              />
            </div>
          )}

          {/* Sections */}
          <div className="space-y-6 sm:space-y-8">
            {node.content.sections.map((section, index) => (
              <div key={index}>
                {renderSection(section, index)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP OVERRIDE — on screens >= 768px, use sidebar layout */}
      <style>{`
        @media (min-width: 768px) {
          [class*="z-[9999]"] {
            left: auto !important;
            width: min(520px, 50vw) !important;
            top: 1rem !important;
            right: 1rem !important;
            bottom: 1rem !important;
            border: 3px solid #000 !important;
            box-shadow: 8px 8px 0px rgba(0,0,0,1) !important;
            border-radius: 0px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Poster;
