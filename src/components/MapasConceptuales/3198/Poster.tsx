import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { NodeData, PosterSection } from './types';

interface PosterProps {
  node: NodeData | null;
  onClose: () => void;
}

const Poster: React.FC<PosterProps> = ({ node, onClose }) => {
  const panelRef = useRef<HTMLDivElement>(null);

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
              paddingLeft: '20px',
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: '17px',
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
                  fontSize: '16px',
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
              paddingLeft: '20px',
            }}
          >
            <p
              className="font-body-italic"
              style={{
                fontSize: '18px',
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
                  fontSize: '15px',
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
                  fontSize: '12px',
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
                  fontSize: '12px',
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
                boxShadow: '6px 6px 0px rgba(0,0,0,1)',
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
      {/* Backdrop for mobile/desktop */}
      <div
        className={`fixed inset-0 z-[9998] transition-opacity duration-700 ${node ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundColor: 'transparent', // No backdrop
        }}
        onClick={onClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`fixed z-[9999] overflow-y-auto transition-all duration-700 ease-out ${isDark ? 'neobrutal-box-dark' : 'neobrutal-box'}`}
        style={{
          top: '1rem',
          right: '1rem',
          bottom: '1rem',
          width: 'min(520px, 92vw)',
          borderRadius: '0px',
          animation: 'poster-slide-in 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        }}
      >
        {/* Close button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-4 right-4 z-[10000] w-10 h-10 flex items-center justify-center transition-all duration-300 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none bg-[#FFCC00] hover:bg-[#F97316] border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] group"
          aria-label="Cerrar"
        >
          <X size={24} className="transition-colors group-hover:text-black" color="#000" />
        </button>

        {/* Content */}
        <div style={{ padding: '48px 40px 64px' }}>
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
            className="font-heading mb-8"
            style={{
              fontSize: 'clamp(28px, 5vw, 42px)',
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
            <div className="mb-10 group overflow-hidden border-3 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              <img
                src={node.content.image}
                alt={node.content.imageAlt || ''}
                className="w-full h-64 object-cover transition-transform duration-1000 group-hover:scale-105"
                style={{
                  border: '3px solid #000'
                }}
              />
            </div>
          )}

          {/* Sections */}
          <div className="space-y-8">
            {node.content.sections.map((section, index) => (
              <div key={index} className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both" style={{ animationDelay: `${index * 100}ms` }}>
                {renderSection(section, index)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  );
};

export default Poster;
