import { BrandMark } from "./brand-mark";
import { HeroCtas } from "./hero-ctas";
import { HeroTechMarquee } from "./hero-tech-marquee";

const HEADLINE = "High-Performance Digital Infrastructure.";

export function Hero() {
  return (
    <section
      className="hero-cinematic relative isolate overflow-hidden px-4 pb-32 pt-8 sm:pb-36 sm:pt-12 md:pt-14"
      aria-labelledby="hero-heading"
    >
      {/* Silver / indigo / cyan atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="hero-aurora-a absolute -left-[20%] top-[-10%] h-[55%] w-[70%] rounded-full bg-gradient-to-br from-indigo-500/25 via-sky-400/15 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="hero-aurora-b absolute -right-[15%] top-[15%] h-[45%] w-[55%] rounded-full bg-gradient-to-bl from-cyan-400/12 via-slate-400/10 to-transparent blur-3xl"
          aria-hidden
        />
        <div
          className="hero-mobile-pulse pointer-events-none absolute left-1/2 top-[42%] h-[min(85vw,22rem)] w-[min(85vw,22rem)] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-500/20 via-sky-400/12 to-transparent blur-3xl md:hidden"
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.38]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 90% 60% at 50% -20%, rgba(248,250,252,0.2), transparent 58%), radial-gradient(ellipse 45% 40% at 95% 15%, rgba(99,102,241,0.12), transparent 50%), radial-gradient(ellipse 50% 45% at 5% 75%, rgba(56,189,248,0.08), transparent 55%), radial-gradient(ellipse 40% 35% at 80% 85%, rgba(148,163,184,0.1), transparent 50%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(203, 213, 225, 0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(203, 213, 225, 0.06) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 78% 68% at 50% 38%, black 18%, transparent 72%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 68% at 50% 38%, black 18%, transparent 72%)",
          }}
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-indigo-300/25 to-transparent"
          aria-hidden
        />
        <div className="hero-orbit hero-orbit--outer" aria-hidden />
        <div className="hero-orbit hero-orbit--inner" aria-hidden />
        <div className="hero-beam hero-beam--a" aria-hidden />
        <div className="hero-beam hero-beam--b" aria-hidden />
        <div className="hero-cinematic-vignette" aria-hidden />
        <div className="hero-cinematic-scan" aria-hidden />
      </div>

      <div className="relative z-[1] mx-auto max-w-4xl text-center">
        <div className="hero-eyebrow mb-6 flex flex-col items-center gap-4 sm:mb-8">
          <span className="hero-live-pill font-mono text-[0.625rem] font-medium uppercase tracking-[0.2em] text-indigo-200/90">
            Production-grade builds
          </span>
          <BrandMark variant="hero" />
        </div>
        <h1
          id="hero-heading"
          className="hero-headline-mobile hero-headline-chrome text-balance font-sans text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
        >
          {HEADLINE}
        </h1>
        <p className="hero-sub hero-sub-chrome mx-auto mt-8 max-w-[34rem] text-pretty font-sans text-lg leading-[1.65] sm:mt-10 sm:text-xl sm:leading-[1.6]">
          <span className="hero-sub-pop">Next.js systems</span> for commerce and coaching brands—fast
          catalogs, confident checkout, and booking flows that turn attention into{" "}
          <span className="hero-sub-pop">revenue</span>. No two-second lag. No leaky funnel.
        </p>
        <HeroTechMarquee />
        <HeroCtas />
        <a
          href="#trust"
          className="hero-scroll-hint group mx-auto mt-12 flex max-w-[12rem] flex-col items-center gap-2 rounded-2xl py-3 text-slate-500 transition-colors hover:text-slate-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-400/50 md:hidden"
        >
          <span className="font-mono text-[0.625rem] font-medium uppercase tracking-[0.28em]">
            Explore
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-400 shadow-[0_0_24px_-8px_rgba(99,102,241,0.35)] transition group-active:scale-95">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 5v10M8 13l4 4 4-4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="hero-scroll-hint-chevron"
              />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
