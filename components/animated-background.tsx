'use client';

import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="background">
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
          </filter>
        </defs>
        <g filter="url(#blur)">
          <circle cx="10%" cy="20%" r="50" className="circle circle1" />
          <circle cx="30%" cy="70%" r="40" className="circle circle2" />
          <circle cx="70%" cy="30%" r="60" className="circle circle3" />
          <circle cx="90%" cy="80%" r="30" className="circle circle4" />
        </g>
      </svg>
      <style jsx>{`
        .background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          overflow: hidden;
        }
        svg {
          width: 100%;
          height: 100%;
        }
        /* Define theme-based variables */
        :global(.light) .background {
          background: linear-gradient(135deg, #e0eafc 0%, #cfdef3 100%);
        }
        :global(.dark) .background {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        .circle {
          fill: var(--circle-color); /* Dynamic fill color */
        }
        :global(.light) .circle1 {
          --circle-color: #ff6b6b;
        }
        :global(.dark) .circle1 {
          --circle-color: #ff8787;
        }
        :global(.light) .circle2 {
          --circle-color: #4ecdc4;
        }
        :global(.dark) .circle2 {
          --circle-color: #66d9d1;
        }
        :global(.light) .circle3 {
          --circle-color: #45b7d1;
        }
        :global(.dark) .circle3 {
          --circle-color: #5cc8e6;
        }
        :global(.light) .circle4 {
          --circle-color: #96c93d;
        }
        :global(.dark) .circle4 {
          --circle-color: #aedd67;
        }
        .circle1 {
          animation: move1 10s infinite ease-in-out;
        }
        .circle2 {
          animation: move2 12s infinite ease-in-out;
        }
        .circle3 {
          animation: move3 8s infinite ease-in-out;
        }
        .circle4 {
          animation: move4 15s infinite ease-in-out;
        }
        @keyframes move1 {
          0% {
            transform: translate(0, 0);
            opacity: 0.8;
          }
          50% {
            transform: translate(50px, -50px);
            opacity: 0.4;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.8;
          }
        }
        @keyframes move2 {
          0% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
          50% {
            transform: translate(-60px, 40px);
            opacity: 0.3;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.6;
          }
        }
        @keyframes move3 {
          0% {
            transform: translate(0, 0);
            opacity: 0.7;
          }
          50% {
            transform: translate(70px, 30px);
            opacity: 0.5;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.7;
          }
        }
        @keyframes move4 {
          0% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
          50% {
            transform: translate(-40px, -60px);
            opacity: 0.2;
          }
          100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
