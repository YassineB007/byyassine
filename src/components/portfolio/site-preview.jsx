"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/**
 * Lazy-loads an iframe when the preview scrolls near the viewport.
 * Some origins block framing (CSP `frame-ancestors`); use embedIframe={false} for those.
 */
export function SitePreview({
  url,
  fallbackSrc,
  fallbackAlt,
  label,
  embedIframe = true,
}) {
  const rootRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  useEffect(() => {
    if (!embedIframe) return;
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldLoad(true);
      },
      { rootMargin: "160px 0px", threshold: 0.01 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [embedIframe]);

  const shellClass =
    "relative aspect-[16/12] min-h-[300px] w-full overflow-hidden rounded-t-2xl bg-zinc-950 sm:min-h-[360px] lg:min-h-[400px]";

  if (!embedIframe) {
    return (
      <div className={shellClass}>
        <Image
          src={fallbackSrc}
          alt={fallbackAlt}
          fill
          className="object-cover object-top"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"
          aria-hidden
        />
        <p className="pointer-events-none absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[11px]">
          Static preview
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 right-3 z-10 flex h-11 items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/55 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-white/25 hover:bg-black/70"
        >
          Open live site
          <span aria-hidden>↗</span>
        </a>
      </div>
    );
  }

  return (
    <div ref={rootRef} className={shellClass}>
      <Image
        src={fallbackSrc}
        alt={fallbackAlt}
        fill
        className="z-0 object-cover object-top"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />

      {shouldLoad ? (
        <iframe
          title={`${label} — live preview`}
          src={url}
          onLoad={() => setFrameReady(true)}
          className={`absolute inset-0 z-10 h-full w-full border-0 transition-opacity duration-500 ease-out ${
            frameReady ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : null}

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-zinc-950 to-transparent"
        aria-hidden
      />

      <p className="pointer-events-none absolute left-2.5 top-2.5 z-20 rounded-md bg-black/50 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[11px]">
        Live · scroll inside
      </p>
    </div>
  );
}
