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

  const btnBase =
    "flex h-11 min-h-[44px] flex-1 items-center justify-center rounded-xl text-sm font-semibold tracking-tight transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400/70";

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
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        loading="lazy"
      />

      {!previewOn ? (
        <>
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/35"
            aria-hidden
          />
          <p className="pointer-events-none absolute left-3 top-3 z-[1] rounded-md border border-white/[0.08] bg-black/50 px-2 py-1 font-mono text-[10px] text-zinc-200 backdrop-blur-md sm:left-3.5 sm:top-3.5 sm:text-[11px]">
            Preview
          </p>
          <div className="absolute bottom-3 left-3 right-3 z-10 flex flex-col gap-2 sm:flex-row sm:items-stretch sm:gap-3">
            <button
              type="button"
              onClick={() => setPreviewOn(true)}
              className={`${btnBase} border border-indigo-300/35 bg-gradient-to-b from-white/20 to-indigo-950/40 text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:border-indigo-200/45 hover:from-white/28 hover:to-indigo-950/50`}
            >
              Load live preview
            </button>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${btnBase} gap-2 border border-slate-500/30 bg-black/65 text-slate-100 hover:border-indigo-400/25 hover:bg-black/80`}
            >
              Open live site
              <span aria-hidden className="text-xs opacity-80">
                ↗
              </span>
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
            className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-14 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"
            aria-hidden
          />
          <p className="pointer-events-none absolute left-3 top-3 z-20 rounded-md border border-white/[0.08] bg-black/55 px-2 py-1 font-mono text-[10px] text-zinc-200 backdrop-blur-md sm:text-[11px]">
            Live · scroll inside
          </p>
          <button
            type="button"
            onClick={closePreview}
            className="absolute right-3 top-3 z-30 rounded-lg border border-white/[0.12] bg-black/65 px-2.5 py-1.5 font-mono text-[10px] font-medium text-zinc-100 backdrop-blur-md transition hover:border-white/25 hover:bg-black/80 sm:text-[11px]"
          >
            Close preview
          </button>
        </>
      )}
      <span className="sr-only">{label}</span>
    </div>
  );
}
