"use client";

import Image from "next/image";

/**
 * Lightweight poster + link only (no iframe). Embedding 3 full remote apps tanked
 * Lighthouse (network + main-thread). Open the real site in a new tab instead.
 */
export function SitePreview({ url, fallbackSrc, fallbackAlt, label }) {
  const shellClass =
    "relative aspect-[16/12] min-h-[300px] w-full overflow-hidden rounded-t-2xl bg-zinc-950 sm:min-h-[360px] lg:min-h-[400px]";

  return (
    <div className={shellClass}>
      <Image
        src={fallbackSrc}
        alt={fallbackAlt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"
        aria-hidden
      />
      <p className="pointer-events-none absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[11px]">
        Preview
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-3 left-3 right-3 z-10 flex h-11 min-h-[44px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/55 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-white/25 hover:bg-black/70"
      >
        Open live site
        <span aria-hidden>↗</span>
      </a>
      <span className="sr-only">{label}</span>
    </div>
  );
}
