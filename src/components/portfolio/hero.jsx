import { Fragment } from "react";
import { BrandMark } from "./brand-mark";
import { HeroCtas } from "./hero-ctas";

const HEADLINE = "High-Performance Digital Infrastructure.";

export function Hero() {
  const words = HEADLINE.split(" ");

  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-28 pt-8 sm:pb-36 sm:pt-12 md:pt-14"
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
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <div className="hero-eyebrow mb-8 flex justify-center sm:mb-10">
          <BrandMark variant="hero" />
        </div>
        <h1
          id="hero-heading"
          className="text-balance font-sans text-4xl font-bold tracking-[-0.035em] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.05]"
        >
          {words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <span
                className="hero-word hero-headline-chrome inline-block"
                style={{ animationDelay: `${0.08 + i * 0.065}s` }}
              >
                {word}
              </span>
              {i < words.length - 1 ? "\u00A0" : null}
            </Fragment>
          ))}
        </h1>
        <p className="hero-sub hero-sub-chrome mx-auto mt-8 max-w-[34rem] text-pretty font-sans text-lg leading-[1.65] sm:mt-10 sm:text-xl sm:leading-[1.6]">
          Next.js systems for commerce and coaching brands—fast catalogs, confident
          checkout, and booking flows that turn attention into revenue. No two-second
          lag. No leaky funnel.
        </p>
        <HeroCtas />
      </div>
    </section>
  );
}
