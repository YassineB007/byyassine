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
      id="trust"
      className="trust-shelf border-y border-indigo-400/20 bg-gradient-to-b from-slate-950/55 via-indigo-950/18 to-slate-950/55 px-4 py-14 sm:py-16"
      aria-label="Trusted by teams in"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal-scroll">
          <p className="section-eyebrow text-center text-slate-500">
            E-commerce · Coaching · Select partners
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5">
            {PLACEHOLDERS.map((item) => (
              <div
                key={item.label + item.sub}
                className="surface-card flex h-[3.25rem] min-w-[6rem] items-center justify-center px-5 transition duration-300 hover:border-indigo-400/25 hover:bg-indigo-950/20 sm:h-12 sm:min-w-[6.75rem]"
              >
                <div className="text-center">
                  <span className="block font-sans text-xs font-semibold tracking-tight text-slate-200">
                    {item.label}
                  </span>
                  <span className="mt-0.5 block font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
                    {item.sub}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
