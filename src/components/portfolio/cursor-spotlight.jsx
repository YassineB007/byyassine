"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Subtle radial spotlight following the pointer — pointer-events none.
 * rAF-throttled to reduce main-thread work (Lighthouse / INP).
 */
export function CursorSpotlight() {
  const [pos, setPos] = useState({ x: 50, y: 35 });
  const raf = useRef(0);
  const pending = useRef({ x: 50, y: 35 });

  useEffect(() => {
    const onMove = (e) => {
      pending.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
      if (raf.current) return;
      raf.current = requestAnimationFrame(() => {
        raf.current = 0;
        setPos(pending.current);
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out will-change-[background]"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at ${pos.x}% ${pos.y}%, rgba(250, 250, 250, 0.055) 0%, transparent 52%),
            radial-gradient(ellipse 50% 45% at ${Math.min(100, pos.x + 8)}% ${Math.min(100, pos.y + 12)}%, rgba(113, 113, 122, 0.04) 0%, transparent 45%)
          `,
        }}
      />
    </div>
  );
}
