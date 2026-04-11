import { CtaPrimary, CtaSecondary } from "./cta";

export function HeroCtas() {
  return (
    <div className="hero-cta mt-14 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center">
      <CtaPrimary href="#contact">Get a Technical Audit</CtaPrimary>
      <CtaSecondary href="#the-flex">View Infrastructure</CtaSecondary>
    </div>
  );
}
