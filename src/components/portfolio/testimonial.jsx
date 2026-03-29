"use client";

import { FadeIn } from "./fade-in";

export function Testimonial() {
  return (
    <section className="px-4 pb-12 pt-4 sm:pb-16 sm:pt-6" aria-label="Client testimonial">
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <figure className="relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-white/[0.05] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md sm:p-10">
            <div
              className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl"
              aria-hidden
            />
            <blockquote className="relative font-sans text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl">
              <span className="text-zinc-500">&ldquo;</span>
              Yassine didn&apos;t just build a site; he built a growth engine.
              <span className="text-zinc-500">&rdquo;</span>
            </blockquote>
            <figcaption className="relative mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-zinc-700/80 bg-zinc-900 font-mono text-xs font-semibold text-zinc-400">
                FP
              </div>
              <div>
                <cite className="not-italic font-sans text-sm font-semibold text-zinc-200">
                  Founding Partner
                </cite>
                <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                  Commerce · Confidential
                </p>
              </div>
            </figcaption>
          </figure>
        </FadeIn>
      </div>
    </section>
  );
}
