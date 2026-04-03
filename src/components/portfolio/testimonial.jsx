"use client";

import { FadeIn } from "./fade-in";

export function Testimonial() {
  return (
    <section
      className="px-4 pb-16 pt-6 sm:pb-20 sm:pt-8"
      aria-label="Client testimonial"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <figure className="surface-card relative overflow-hidden p-8 sm:p-11">
            <div
              className="pointer-events-none absolute -right-20 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-white/[0.07] to-transparent blur-3xl"
              aria-hidden
            />
            <blockquote className="relative">
              <p className="font-sans text-[1.125rem] font-medium leading-[1.65] text-zinc-100 sm:text-xl sm:leading-[1.6]">
                <span className="font-serif text-3xl leading-none text-zinc-600" aria-hidden>
                  &ldquo;
                </span>
                Yassine didn&apos;t just build a site; he built a growth engine.
                <span className="font-serif text-3xl leading-none text-zinc-600" aria-hidden>
                  &rdquo;
                </span>
              </p>
            </blockquote>
            <figcaption className="relative mt-10 flex items-center gap-4 border-t border-white/[0.07] pt-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-zinc-700/90 bg-zinc-900/80 font-mono text-xs font-semibold text-zinc-400 shadow-inner shadow-black/40">
                FP
              </div>
              <div>
                <cite className="not-italic font-sans text-sm font-semibold text-zinc-100">
                  Founding partner
                </cite>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500 sm:text-[11px]">
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
