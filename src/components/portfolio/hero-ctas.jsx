"use client";

import { CtaPrimary, CtaSecondary } from "./cta";

function scrollToSection(id) {
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    const path = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", `${path}#${id}`);
  });
}

export function HeroCtas() {
  return (
    <div className="hero-cta mt-14 flex w-full max-w-md flex-col items-stretch justify-center gap-3 sm:mx-auto sm:max-w-none sm:flex-row sm:items-center">
      <CtaPrimary
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("contact");
        }}
      >
        Get a Technical Audit
      </CtaPrimary>
      <CtaSecondary
        href="#the-flex"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("the-flex");
        }}
      >
        View Infrastructure
      </CtaSecondary>
    </div>
  );
}
