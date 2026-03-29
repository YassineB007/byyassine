"use client";

import { useEffect, useRef, useState } from "react";

export function FadeIn({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      queueMicrotask(() => setVisible(true));
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { root: null, rootMargin: "0px 0px 12% 0px", threshold: 0.02 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as === "section" ? "section" : as === "article" ? "article" : "div";

  return (
    <Tag
      ref={ref}
      data-fade-in
      className={`reveal-scroll ${visible ? "reveal-scroll--visible" : ""} ${className}`.trim()}
      style={
        visible && delay
          ? { transitionDelay: `${delay}s` }
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
