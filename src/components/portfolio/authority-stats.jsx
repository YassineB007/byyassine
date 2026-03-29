"use client";

import { FadeIn } from "./fade-in";

const STATS = [
  { label: "Performance delta", line: "+40% Speed" },
  { label: "Conversion lift", line: "+12%" },
  { label: "Tech debt", line: "0%" },
];

export function AuthorityStats() {
  return (
    <section className="px-4 py-6 sm:py-8" aria-label="Performance metrics">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="rounded-2xl border border-zinc-800/50 bg-white/[0.02] px-4 py-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md sm:px-8 sm:py-7">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.08]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center sm:px-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500">
                    {s.label}
                  </span>
                  <span className="mt-2 font-sans text-2xl font-semibold tabular-nums tracking-tight text-zinc-50 sm:text-3xl">
                    {s.line}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
