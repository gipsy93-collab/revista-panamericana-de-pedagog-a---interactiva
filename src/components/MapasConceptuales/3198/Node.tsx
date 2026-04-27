import React, { useState, useEffect } from 'react';
import type { NodeData } from './types';
import {
  Target, FileText, Globe, BookOpen, Microscope, BarChart3,
  MessageCircle, Zap, Search, Clock, Users, Newspaper,
  AlertTriangle, UserX, MapPin, GitBranch, Brain, Heart,
  Shield, Database, MessageSquare, Unlock, Smartphone,
  Lightbulb, BookMarked, Activity, Cpu, Globe2,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Target, FileText, Globe, BookOpen, Microscope, BarChart3,
  MessageCircle, Zap, Search, Clock, Users, Newspaper,
  AlertTriangle, UserX, MapPin, GitBranch, Brain, Heart,
  Shield, Database, MessageSquare, Unlock, Smartphone,
  Lightbulb, BookMarked, Activity, Cpu, Globe2,
};

interface NodeProps {
  node: NodeData;
  isSelected: boolean;
  isVisible: boolean;
  delay: number;
  onClick: (node: NodeData) => void;
}

const NodeComponent: React.FC<NodeProps> = ({ node, isVisible, delay, onClick }) => {
  const [hovered, setHovered] = useState(false);
  const [entered, setEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setEntered(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const IconComponent = iconMap[node.icon] || Target;

  const scale = entered && isVisible ? (hovered ? 1.05 : 1) : 0;
  const opacity = entered && isVisible ? 1 : 0;

  // Level-based sizing — RESPONSIVE: smaller on mobile
  const getStyles = () => {
    const m = isMobile;
    switch (node.level) {
      case 1:
        return {
          padding: m ? '12px 20px' : '20px 40px',
          gap: m ? '12px' : '20px',
          fontSize: m ? '14px' : '24px',
          iconSize: m ? 22 : 36,
          borderWidth: m ? '3px' : '5px',
          shadowOffset: hovered ? (m ? '6px' : '12px') : (m ? '4px' : '10px'),
          borderRadius: m ? '8px' : '12px',
          letterSpacing: '0.05em',
          textTransform: 'uppercase' as const,
          bg: node.color,
          color: '#000000',
        };
      case 2:
        return {
          padding: m ? '6px 12px' : '10px 20px',
          gap: m ? '8px' : '12px',
          fontSize: m ? '11px' : '15px',
          iconSize: m ? 16 : 22,
          borderWidth: m ? '2px' : '3px',
          shadowOffset: hovered ? (m ? '4px' : '8px') : (m ? '3px' : '6px'),
          borderRadius: m ? '6px' : '8px',
          letterSpacing: '0.02em',
          textTransform: 'uppercase' as const,
          bg: node.color,
          color: '#000000',
        };
      default: // Level 3
        return {
          padding: m ? '4px 8px' : '6px 12px',
          gap: m ? '6px' : '8px',
          fontSize: m ? '10px' : '12px',
          iconSize: m ? 12 : 16,
          borderWidth: '2px',
          shadowOffset: hovered ? (m ? '3px' : '4px') : (m ? '2px' : '3px'),
          borderRadius: '6px',
          letterSpacing: '0.01em',
          textTransform: 'none' as const,
          bg: '#FFFFFF',
          color: '#000000',
        };
    }
  };

  const styles = getStyles();

  return (
    <button
      data-node="true"
      data-node-id={node.id}
      aria-label={node.label}
      className={`group ${node.level === 1 ? 'animate-node-glow' : ''} font-ui-bold`}
      style={{
        position: 'absolute',
        left: `${node.x}px`,
        top: `${node.y}px`,
        transform: `translate(-50%, -50%) scale(${scale})`,
        opacity,
        transition: 'all 600ms cubic-bezier(0.16, 1, 0.3, 1)',
        cursor: 'pointer',
        zIndex: hovered ? 100 : (node.level === 1 ? 40 : node.level === 2 ? 30 : 20),
        pointerEvents: 'auto',
        background: styles.bg,
        border: `${styles.borderWidth} solid #000000`,
        borderRadius: styles.borderRadius,
        padding: styles.padding,
        display: 'flex',
        alignItems: 'center',
        gap: styles.gap,
        boxShadow: `${styles.shadowOffset} ${styles.shadowOffset} 0px 0px rgba(0, 0, 0, 1)`,
        outline: 'none',
        animationDelay: `${node.level * 200}ms`,
        color: styles.color,
        whiteSpace: 'nowrap',
        // Mobile: prevent text selection and context menu on long press
        WebkitUserSelect: 'none',
        userSelect: 'none',
        WebkitTouchCallout: 'none',
        touchAction: 'manipulation', // Removes 300ms tap delay
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        onClick(node);
      }}
      onTouchEnd={(e) => {
        // Prevent ghost clicks and double-firing on mobile
        e.stopPropagation();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div 
        className="flex-shrink-0 flex items-center justify-center"
        style={{
          width: styles.iconSize + (isMobile ? 4 : 8),
          height: styles.iconSize + (isMobile ? 4 : 8),
          backgroundColor: node.level === 3 ? node.color : 'rgba(0,0,0,0.05)',
          borderRadius: '4px',
          border: node.level === 3 ? '1px solid black' : 'none'
        }}
      >
        <span className={`transition-transform duration-500 ${hovered ? 'scale-110 rotate-12' : ''}`}>
          <IconComponent 
            size={styles.iconSize} 
            color="#000000" 
          />
        </span>
      </div>

      <span 
        style={{ 
          fontSize: styles.fontSize,
          letterSpacing: styles.letterSpacing,
          textTransform: styles.textTransform,
        }}
        className="leading-tight"
      >
        {node.label}
      </span>
    </button>
  );
};

export default React.memo(NodeComponent);
