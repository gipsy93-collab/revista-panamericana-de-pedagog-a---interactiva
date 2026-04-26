import React from 'react';

const EdgeWobble: React.FC = React.memo(() => {
  return (
    <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
      <defs>
        <filter id="edge-wobble">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.015"
            numOctaves={3}
            result="noise"
            seed={2}
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale={3}
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
});

EdgeWobble.displayName = 'EdgeWobble';

export default EdgeWobble;
