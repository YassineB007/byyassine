"use client";

import { FadeIn } from "./fade-in";

const PLACEHOLDERS = [
  { label: "E-com", sub: "Brand" },
  { label: "Coaching", sub: "Platform" },
  { label: "Retail", sub: "Partner" },
  { label: "SaaS", sub: "Launch" },
  { label: "Studio", sub: "Collective" },
];

export function TrustBar() {
  return (
    <section
      className="border-y border-white/[0.04] bg-black/20 px-4 py-10 sm:py-12"
      aria-label="Trusted by teams in"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-center font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-500 sm:text-[11px]">
            E-com brands · Coaching platforms · Select partners
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14">
            {PLACEHOLDERS.map((item) => (
              <div
                key={item.label + item.sub}
                className="flex h-11 min-w-[5.5rem] items-center justify-center rounded-lg border border-zinc-800/40 bg-zinc-900/30 px-4 grayscale transition hover:grayscale-0"
              >
                <div className="text-center">
                  <span className="block font-sans text-xs font-semibold tracking-tight text-zinc-400">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-widest text-zinc-600">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
