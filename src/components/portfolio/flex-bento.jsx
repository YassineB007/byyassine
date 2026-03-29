"use client";

import { FadeIn } from "./fade-in";

const cardBase =
  "group relative overflow-hidden rounded-2xl border border-zinc-800/50 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-md transition duration-300 hover:border-zinc-700/70 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09),0_0_48px_-16px_rgba(250,250,250,0.1)] md:p-8";

export function FlexBento() {
  return (
    <section
      id="the-flex"
      className="scroll-mt-28 px-4 py-20 sm:py-28"
      aria-labelledby="flex-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            The flex
          </p>
          <h2
            id="flex-heading"
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
          >
            Speed that holds up in production.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-zinc-400">
            Performance isn’t a slide — it’s baked into the architecture.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-min">
          <FadeIn
            className={`${cardBase} md:col-span-2 md:row-span-2 flex min-h-[280px] flex-col justify-between`}
            delay={0.05}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-zinc-500 sm:text-xs">
                Google PageSpeed Optimized.
              </span>
              <span className="rounded-full border border-emerald-500/25 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-400 sm:text-xs">
                Core Web Vitals
              </span>
            </div>
            <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-2">
              <div className="relative">
                <div
                  className="absolute inset-0 blur-3xl"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(circle, rgba(52,211,153,0.22) 0%, transparent 70%)",
                  }}
                />
                <p
                  className="relative font-sans text-7xl font-bold tabular-nums tracking-tighter text-zinc-50 sm:text-8xl md:text-9xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <span className="text-emerald-400">100</span>
                  <span className="text-zinc-600">/</span>
                  <span className="text-emerald-400/90">100</span>
                </p>
              </div>
              <p className="text-center font-sans text-sm text-zinc-500">
                Lighthouse performance — the bar your storefront should clear.
              </p>
            </div>
          </FadeIn>

          <FadeIn className={cardBase} delay={0.1}>
            <h3 className="font-sans text-lg font-semibold text-zinc-50">
              Mobile-First Architecture.
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-400">
              90% of your customers are on iPhone. My builds never lag.
            </p>
          </FadeIn>

          <FadeIn className={cardBase} delay={0.15}>
            <h3 className="font-sans text-lg font-semibold text-zinc-50">Tech Stack</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {[
                "Next.js 15",
                "React 19",
                "Tailwind 4",
                "Stripe",
                "Vercel",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-zinc-300 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
