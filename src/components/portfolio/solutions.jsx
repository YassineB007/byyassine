"use client";

import { FadeIn } from "./fade-in";

const pillar =
  "group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-gradient-to-b from-white/[0.05] to-transparent p-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-md transition duration-300 will-change-transform hover:scale-[1.02] hover:border-zinc-200/35 hover:shadow-[0_0_56px_-16px_rgba(250,250,250,0.14)] md:p-10";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-28 px-4 py-20 sm:py-28"
      aria-labelledby="solutions-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Solutions
          </p>
          <h2
            id="solutions-heading"
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
          >
            Pillars built for revenue.
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          <FadeIn className={pillar} delay={0.05}>
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.05] blur-2xl transition group-hover:bg-white/[0.08]"
              aria-hidden
            />
            <h3 className="relative font-sans text-2xl font-bold text-zinc-50">Commerce</h3>
            <p className="relative mt-4 font-sans leading-relaxed text-zinc-400">
              Headless storefronts that eliminate checkout friction — fast
              catalog, confident payments, and a path from browse to buy that
              feels instant.
            </p>
          </FadeIn>

          <FadeIn className={pillar} delay={0.1}>
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-white/[0.05] blur-2xl transition group-hover:bg-white/[0.08]"
              aria-hidden
            />
            <h3 className="relative font-sans text-2xl font-bold text-zinc-50">Coaching</h3>
            <p className="relative mt-4 font-sans leading-relaxed text-zinc-400">
              High-conversion funnels with integrated booking and community hubs
              — one cohesive experience that turns attention into booked calls
              and retained clients.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
