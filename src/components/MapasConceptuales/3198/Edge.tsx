import React, { useMemo } from 'react';
import type { EdgeData, NodeData } from './types';

interface EdgeProps {
  edge: EdgeData;
  nodes: NodeData[];
  edges: EdgeData[];
  isVisible: boolean;
  nodeWidths: Map<string, number>;
}

const Edge: React.FC<EdgeProps> = React.memo(({ edge, nodes, edges, nodeWidths }) => {
  const sourceNode = nodes.find(n => n.id === edge.source);
  const targetNode = nodes.find(n => n.id === edge.target);

  const pathData = useMemo(() => {
    if (!sourceNode || !targetNode) return '';

    // Get actual measured widths (offsetWidth from DOM), fall back to 0
    const srcW = nodeWidths.get(sourceNode.id) || 0;
    const tgtW = nodeWidths.get(targetNode.id) || 0;

    // If widths aren't measured yet, don't render
    if (srcW === 0 || tgtW === 0) return '';

    // Node positions: node.x, node.y is the CENTER of each card
    // (because Node.tsx uses transform: translate(-50%, -50%))
    // Right edge of parent = center + half-width
    const px = sourceNode.x + srcW / 2;
    const py = sourceNode.y;
    // Left edge of child = center - half-width
    const cx = targetNode.x - tgtW / 2;
    const cy = targetNode.y;

    // How many siblings share this parent?
    const siblingEdges = edges.filter(e => e.source === edge.source);

    if (siblingEdges.length <= 1) {
      // Single child: smooth cubic bezier
      const mx = px + (cx - px) * 0.5;
      return `M ${px} ${py} C ${mx} ${py}, ${mx} ${cy}, ${cx} ${cy}`;
    }

    // Multiple children: clean orthogonal elbow connector
    const gap = cx - px;
    const trunkX = px + gap * 0.38;
    const r = 8; // corner radius

    const dy = cy - py;

    let d = `M ${px} ${py}`;

    if (Math.abs(dy) < 0.5) {
      // Same height: straight line
      d += ` L ${cx} ${cy}`;
    } else {
      const sign = dy > 0 ? 1 : -1;
      const absD = Math.abs(dy);

      // Horizontal from parent right edge to trunk
      d += ` L ${trunkX - r} ${py}`;

      if (absD <= r * 2) {
        // Short vertical distance: gentle arc
        const midY = py + dy * 0.5;
        d += ` Q ${trunkX} ${py}, ${trunkX} ${midY}`;
        d += ` Q ${trunkX} ${cy}, ${trunkX + r} ${cy}`;
      } else {
        // Full elbow: rounded corner down/up, vertical line, rounded corner out
        d += ` Q ${trunkX} ${py}, ${trunkX} ${py + sign * r}`;
        d += ` L ${trunkX} ${cy - sign * r}`;
        d += ` Q ${trunkX} ${cy}, ${trunkX + r} ${cy}`;
      }

      // Horizontal from trunk to child left edge
      d += ` L ${cx} ${cy}`;
    }

    return d;
  }, [sourceNode, targetNode, edge.source, edges, nodeWidths]);

  if (!sourceNode || !targetNode || !pathData) return null;

  return (
    <path
      d={pathData}
      className="animate-edge-draw"
      fill="none"
      stroke="#000000"
      strokeWidth={2}
      strokeOpacity={0.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{
        pointerEvents: 'none',
        animationDelay: `${edge.level * 300}ms`
      }}
    />
  );
});

Edge.displayName = 'Edge';

export default Edge;
