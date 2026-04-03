"use client";

import { FadeIn } from "./fade-in";

const pillar =
  "group relative overflow-hidden rounded-2xl p-8 md:p-10 surface-card lift-card";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="scroll-mt-28 px-4 py-24 sm:py-32"
      aria-labelledby="solutions-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="section-eyebrow">Solutions</p>
          <h2 id="solutions-heading" className="section-title max-w-[20ch]">
            Pillars built for revenue.
          </h2>
          <p className="section-lede">
            Two lanes—commerce and coaching—with the same standard: fast pages,
            clear journeys, and infrastructure you can iterate on.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-5 md:grid-cols-2 md:gap-6">
          <FadeIn className={pillar} delay={0.05}>
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-44 w-44 rounded-full bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl transition duration-500 group-hover:from-white/[0.09]"
              aria-hidden
            />
            <h3 className="relative font-sans text-2xl font-bold tracking-tight text-zinc-50">
              Commerce
            </h3>
            <p className="relative mt-4 font-sans leading-relaxed text-zinc-400">
              Headless storefronts that strip checkout friction—fast catalog, confident
              payments, and a path from browse to buy that feels instant.
            </p>
          </FadeIn>

          <FadeIn className={pillar} delay={0.1}>
            <div
              className="pointer-events-none absolute -right-24 -top-24 h-44 w-44 rounded-full bg-gradient-to-br from-white/[0.06] to-transparent blur-2xl transition duration-500 group-hover:from-white/[0.09]"
              aria-hidden
            />
            <h3 className="relative font-sans text-2xl font-bold tracking-tight text-zinc-50">
              Coaching
            </h3>
            <p className="relative mt-4 font-sans leading-relaxed text-zinc-400">
              High-conversion funnels with booking and community in one experience—so
              attention turns into calls and retained clients, not bounce.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
