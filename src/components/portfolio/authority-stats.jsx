const STATS = [
  { label: "Performance delta", line: "+40% speed", hint: "typical lab uplift" },
  { label: "Conversion lift", line: "+12%", hint: "after CWV fixes" },
  { label: "Tech debt", line: "0%", hint: "clean handoffs" },
];

export function AuthorityStats() {
  return (
    <section className="cv-section px-4 py-10 sm:py-12" aria-label="Performance metrics">
      <div className="mx-auto max-w-6xl">
        <div className="reveal-scroll">
          <div className="surface-card stats-spotlight relative px-4 py-8 sm:px-10 sm:py-9">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-white/[0.07]">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center text-center sm:px-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="section-eyebrow text-[0.625rem] text-zinc-500 sm:text-[0.6875rem]">
                    {s.label}
                  </span>
                  <span className="stat-number mt-3 font-sans text-3xl font-semibold tabular-nums tracking-[-0.03em] text-zinc-50 sm:text-4xl">
                    {s.line}
                  </span>
                  <span className="mt-2 max-w-[12rem] font-mono text-[10px] leading-relaxed text-zinc-600">
                    {s.hint}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
