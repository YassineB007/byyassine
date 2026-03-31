"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Poster by default (fast Lighthouse). Iframe loads only after "Load live preview"
 * — avoids embedding three full apps during initial load / lab tests.
 */
export function SitePreview({ url, fallbackSrc, fallbackAlt, label }) {
  const [previewOn, setPreviewOn] = useState(false);
  const [frameReady, setFrameReady] = useState(false);

  const shellClass =
    "relative aspect-[16/12] min-h-[300px] w-full overflow-hidden rounded-t-2xl bg-zinc-950 sm:min-h-[360px] lg:min-h-[400px]";

  const closePreview = () => {
    setPreviewOn(false);
    setFrameReady(false);
  };

  return (
    <div className={shellClass}>
      <Image
        src={fallbackSrc}
        alt={fallbackAlt}
        fill
        className={`object-cover object-top transition-opacity duration-500 ${
          previewOn && frameReady ? "opacity-0" : "opacity-100"
        }`}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        loading="lazy"
      />

      {!previewOn ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/30"
            aria-hidden
          />
          <p className="pointer-events-none absolute left-2.5 top-2.5 rounded-md bg-black/55 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[11px]">
            Preview
          </p>
          <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-2 sm:flex-row sm:items-stretch">
            <button
              type="button"
              onClick={() => setPreviewOn(true)}
              className="flex h-11 min-h-[44px] flex-1 items-center justify-center rounded-xl border border-white/20 bg-white/[0.12] text-sm font-medium text-zinc-50 backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.18]"
            >
              Load live preview
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 min-h-[44px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-black/55 text-sm font-medium text-zinc-100 backdrop-blur-md transition hover:border-white/25 hover:bg-black/70"
            >
              Open live site
              <span aria-hidden>↗</span>
            </a>
          </div>
        </>
      ) : (
        <>
          {previewOn && (
            <iframe
              title={`${label} — live preview`}
              src={url}
              onLoad={() => setFrameReady(true)}
              className={`absolute inset-0 z-10 h-full w-full border-0 transition-opacity duration-500 ${
                frameReady ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-12 bg-gradient-to-t from-zinc-950 to-transparent"
            aria-hidden
          />
          <p className="pointer-events-none absolute left-2.5 top-2.5 z-20 rounded-md bg-black/50 px-2 py-1 font-mono text-[10px] text-zinc-300 backdrop-blur-sm sm:left-3 sm:top-3 sm:text-[11px]">
            Live · scroll inside
          </p>
          <button
            type="button"
            onClick={closePreview}
            className="absolute right-2.5 top-2.5 z-30 rounded-lg border border-white/15 bg-black/60 px-2.5 py-1.5 font-mono text-[10px] font-medium text-zinc-200 backdrop-blur-md transition hover:border-white/25 hover:bg-black/75 sm:text-[11px]"
          >
            Close preview
          </button>
        </>
      )}
      <span className="sr-only">{label}</span>
    </div>
  );
}
