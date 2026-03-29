import { Fragment } from "react";
import { CtaPrimary, CtaSecondary } from "./cta";

const HEADLINE = "High-Performance Digital Infrastructure.";

export function Hero() {
  const words = HEADLINE.split(" ");

  return (
    <section
      className="relative isolate overflow-hidden px-4 pb-24 pt-6 sm:pb-32 sm:pt-10 md:pt-12"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(250,250,250,0.1), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, rgba(113,113,122,0.06), transparent)",
        }}
      />
      <div className="mx-auto max-w-4xl text-center">
        <p className="hero-eyebrow mb-6 font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-zinc-500 sm:text-xs">
          by yassine
        </p>
        <h1
          id="hero-heading"
          className="text-balance font-sans text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {words.map((word, i) => (
            <Fragment key={`${word}-${i}`}>
              <span
                className="hero-word inline-block"
                style={{ animationDelay: `${0.08 + i * 0.065}s` }}
              >
                {word}
              </span>
              {i < words.length - 1 ? "\u00A0" : null}
            </Fragment>
          ))}
        </h1>
        <p className="hero-sub mx-auto mt-8 max-w-2xl text-pretty font-sans text-lg leading-relaxed text-zinc-300 sm:text-xl">
          Building the Next.js ecosystems that Commerce & Coaching brands use to
          scale. I turn 2-second lag into instant conversions.
        </p>
        <div className="hero-cta mt-14 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center">
          <CtaPrimary href="#contact">Get a Technical Audit</CtaPrimary>
          <CtaSecondary href="#the-flex">View Infrastructure</CtaSecondary>
        </div>
      </div>
    </section>
  );
}
