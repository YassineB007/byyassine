const cardBase =
  "group relative overflow-hidden rounded-2xl p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition duration-300 md:p-8 surface-card hover:border-zinc-600/55 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09),0_0_48px_-20px_rgba(250,250,250,0.08)] backdrop-blur-md";

export function FlexBento() {
  return (
    <section
      id="the-flex"
      className="scroll-mt-28 px-4 py-24 sm:py-32"
      aria-labelledby="flex-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal-scroll">
          <p className="section-eyebrow">The flex</p>
          <h2 id="flex-heading" className="section-title max-w-[22ch]">
            Speed that holds up in production.
          </h2>
          <p className="section-lede">
            Performance is not a slide deck bullet—it is routing, images, caching, and
            Core Web Vitals under real traffic.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3 md:grid-rows-2 md:auto-rows-min">
          <div
            className={`reveal-scroll ${cardBase} md:col-span-2 md:row-span-2 flex min-h-[280px] flex-col justify-between`}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-zinc-500 sm:text-xs">
                Google PageSpeed optimized
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-emerald-400 sm:text-[11px]">
                Core Web Vitals
              </span>
            </div>
            <div className="mt-8 flex flex-1 flex-col items-center justify-center gap-3">
              <div className="relative">
                <div
                  className="absolute inset-0 blur-3xl"
                  aria-hidden
                  style={{
                    background:
                      "radial-gradient(circle, rgba(52,211,153,0.2) 0%, transparent 72%)",
                  }}
                />
                <p
                  className="relative font-sans text-7xl font-bold tabular-nums tracking-[-0.06em] text-zinc-50 sm:text-8xl md:text-9xl"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  <span className="text-emerald-400">100</span>
                  <span className="text-indigo-300/50">/</span>
                  <span className="text-emerald-400/90">100</span>
                </p>
              </div>
              <p className="max-w-sm text-center font-sans text-sm leading-relaxed text-slate-500">
                Lighthouse scores your users feel—fast first paint, stable layout, quick
                interaction.
              </p>
            </div>
          </div>

          <div className={`reveal-scroll ${cardBase}`}>
            <h3 className="font-sans text-lg font-semibold tracking-tight text-slate-50">
              Mobile-first architecture
            </h3>
            <p className="mt-3 font-sans text-sm leading-relaxed text-slate-400">
              Most of your traffic is on a phone. Layouts, images, and scripts are tuned
              for small screens first—no desktop-only shortcuts.
            </p>
          </div>

          <div className={`reveal-scroll ${cardBase}`}>
            <h3 className="font-sans text-lg font-semibold tracking-tight text-slate-50">
              Stack
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Next.js 16", "React 19", "Tailwind 4", "Stripe", "Vercel"].map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-1.5 font-mono text-[11px] text-zinc-300 sm:text-xs"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
