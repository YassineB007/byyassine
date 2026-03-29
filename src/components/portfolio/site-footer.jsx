"use client";

import { FadeIn } from "./fade-in";
import { CtaSecondaryExternal } from "./cta";

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="scroll-mt-28 border-t border-white/[0.06] px-4 py-16"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="min-w-0 max-w-lg">
              <p className="font-sans text-lg font-semibold tracking-tight text-zinc-50">
                by yassine
              </p>
              <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-500">
                Technical audits and infrastructure for brands that refuse slow pages.
              </p>
            </div>
            <div className="flex w-full flex-col items-stretch gap-2 sm:w-auto sm:items-end">
              <CtaSecondaryExternal
                href="https://calendly.com/yassineb007/30min"
                className="w-full shrink-0 sm:w-auto"
              >
                Book a 10-min call
              </CtaSecondaryExternal>
              <p className="text-center font-mono text-[10px] leading-relaxed text-zinc-600 sm:max-w-[15rem] sm:text-right">
                Intro calls are 10 minutes. The calendar reserves 30 so there’s always buffer—we’re never rushed.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
      <div className="mx-auto mt-14 max-w-6xl border-t border-white/[0.04] pt-8">
        <p className="text-center font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()} by yassine. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
