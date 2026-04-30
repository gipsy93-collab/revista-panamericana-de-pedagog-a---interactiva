import React, { useMemo } from 'react';
import type { NodeData } from './types';

interface EdgesProps {
  nodes: NodeData[];
}

/**
 * Renders SVG Bézier curve connectors between parent and child nodes.
 * Level 2 nodes connect to the central node (level 1).
 * Level 3 nodes connect to their designated parentId.
 */
const Edges: React.FC<EdgesProps> = ({ nodes }) => {
  const edges = useMemo(() => {
    const nodeMap = new Map<string, NodeData>();
    nodes.forEach(n => nodeMap.set(n.id, n));

    const connections: Array<{
      id: string;
      x1: number; y1: number;
      x2: number; y2: number;
      level: number;
      color: string;
    }> = [];

    // Find the central node (level 1)
    const centralNode = nodes.find(n => n.level === 1);

    nodes.forEach(node => {
      if (node.level === 1) return; // Central node has no parent

      let parent: NodeData | undefined;

      if (node.level === 2 && centralNode) {
        parent = centralNode;
      } else if (node.level === 3 && node.parentId) {
        parent = nodeMap.get(node.parentId);
      }

      if (parent) {
        connections.push({
          id: `edge-${parent.id}-${node.id}`,
          x1: parent.x,
          y1: parent.y,
          x2: node.x,
          y2: node.y,
          level: node.level,
          color: node.color,
        });
      }
    });

    return connections;
  }, [nodes]);

  // Calculate SVG viewBox to encompass all nodes with padding
  const bounds = useMemo(() => {
    if (nodes.length === 0) return { minX: -800, minY: -600, maxX: 800, maxY: 600 };
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    nodes.forEach(n => {
      minX = Math.min(minX, n.x);
      minY = Math.min(minY, n.y);
      maxX = Math.max(maxX, n.x);
      maxY = Math.max(maxY, n.y);
    });
    const pad = 200;
    return { minX: minX - pad, minY: minY - pad, maxX: maxX + pad, maxY: maxY + pad };
  }, [nodes]);

  return (
    <svg
      className="absolute inset-0 pointer-events-none"
      style={{
        left: bounds.minX,
        top: bounds.minY,
        width: bounds.maxX - bounds.minX,
        height: bounds.maxY - bounds.minY,
        overflow: 'visible',
      }}
    >
      {edges.map(edge => {
        // Convert absolute coordinates to SVG-local coordinates
        const sx = edge.x1 - bounds.minX;
        const sy = edge.y1 - bounds.minY;
        const ex = edge.x2 - bounds.minX;
        const ey = edge.y2 - bounds.minY;

        // Calculate control points for smooth Bézier curves
        const dx = ex - sx;
        const dy = ey - sy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const curvature = Math.min(dist * 0.35, 120);

        // Determine curve direction based on relative position
        let cx1: number, cy1: number, cx2: number, cy2: number;

        if (Math.abs(dx) > Math.abs(dy)) {
          // Predominantly horizontal — curve vertically
          cx1 = sx + curvature * Math.sign(dx);
          cy1 = sy;
          cx2 = ex - curvature * Math.sign(dx);
          cy2 = ey;
        } else {
          // Predominantly vertical — curve horizontally
          cx1 = sx;
          cy1 = sy + curvature * Math.sign(dy);
          cx2 = ex;
          cy2 = ey - curvature * Math.sign(dy);
        }

        const isLevel3 = edge.level === 3;
        const strokeWidth = isLevel3 ? 2 : 3;
        const dashArray = isLevel3 ? '8,6' : 'none';
        const opacity = isLevel3 ? 0.35 : 0.25;

        return (
          <path
            key={edge.id}
            d={`M ${sx} ${sy} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${ex} ${ey}`}
            fill="none"
            stroke={edge.color}
            strokeWidth={strokeWidth}
            strokeDasharray={dashArray}
            opacity={opacity}
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
};

export default React.memo(Edges);
