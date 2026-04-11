const ITEMS = [
  "Next.js",
  "Core Web Vitals",
  "Edge-ready",
  "TypeScript",
  "Commerce",
  "Coaching funnels",
  "Vercel",
  "SEO-first",
];

/** Infinite tech strip — duplicated for seamless CSS loop */
export function HeroTechMarquee() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div className="hero-marquee-outer mt-10 md:mt-11" aria-hidden>
      <div className="hero-marquee-fade pointer-events-none" />
      <div className="hero-marquee-track">
        {loop.map((label, i) => (
          <span key={`${label}-${i}`} className="hero-marquee-item">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
