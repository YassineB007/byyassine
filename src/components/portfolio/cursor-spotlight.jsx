"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

function subscribeReducedMotion(callback) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

/**
 * Subtle silver / indigo spotlight following the pointer — pointer-events none.
 * rAF-throttled. Skips tracking when prefers-reduced-motion.
 */
export function CursorSpotlight() {
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const [pos, setPos] = useState({ x: 50, y: 35 });
  const raf = useRef(0);
  const pending = useRef({ x: 50, y: 35 });

  useEffect(() => {
    if (reducedMotion) return;

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
  }, [reducedMotion]);

  const enabled = !reducedMotion;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div
        className="absolute inset-0 transition-[background] duration-300 ease-out will-change-[background]"
        style={{
          background: enabled
            ? `
            radial-gradient(ellipse 95% 75% at ${pos.x}% ${pos.y}%, rgba(248, 250, 252, 0.07) 0%, transparent 52%),
            radial-gradient(ellipse 55% 50% at ${Math.min(100, pos.x + 10)}% ${Math.min(100, pos.y + 14)}%, rgba(165, 180, 252, 0.09) 0%, transparent 48%),
            radial-gradient(ellipse 40% 38% at ${Math.max(0, pos.x - 15)}% ${Math.max(0, pos.y - 10)}%, rgba(56, 189, 248, 0.05) 0%, transparent 45%)
          `
            : `
            radial-gradient(ellipse 85% 65% at 45% 18%, rgba(199, 210, 254, 0.08) 0%, transparent 58%),
            radial-gradient(ellipse 60% 50% at 85% 65%, rgba(56, 189, 248, 0.06) 0%, transparent 52%),
            radial-gradient(ellipse 50% 45% at 15% 55%, rgba(148, 163, 184, 0.07) 0%, transparent 50%)
          `,
        }}
      />
    </div>
  );
}
