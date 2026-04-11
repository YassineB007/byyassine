import { BrandMark } from "./brand-mark";
import { CtaSecondaryExternal } from "./cta";

const FOOTER_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#the-flex", label: "Speed" },
  { href: "#solutions", label: "Solutions" },
  { href: "#contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="footer-finale scroll-mt-28 border-t border-indigo-400/20 bg-gradient-to-b from-transparent via-indigo-950/12 to-[#03040a] px-4 py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal-scroll">
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between md:gap-16">
            <div className="min-w-0 max-w-xl">
              <BrandMark variant="footer" />
              <p className="mt-5 max-w-md font-sans text-[0.9375rem] leading-relaxed text-zinc-500">
                Technical audits and production-grade Next.js infrastructure for brands
                that refuse slow pages and leaky funnels.
              </p>
              <nav
                className="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-zinc-500"
                aria-label="Footer"
              >
                {FOOTER_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="transition hover:text-zinc-300"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:max-w-sm sm:items-end">
              <CtaSecondaryExternal
                href="https://calendly.com/yassineb007/30min"
                className="w-full shrink-0 sm:w-auto"
              >
                Book a 10-min call
              </CtaSecondaryExternal>
              <p className="text-center font-mono text-[10px] leading-relaxed text-zinc-600 sm:max-w-[17rem] sm:text-right sm:text-[11px]">
                Intro calls are 10 minutes. The calendar reserves 30 so there&apos;s always
                buffer—we&apos;re never rushed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 max-w-6xl border-t border-white/[0.05] pt-10">
        <p className="text-center font-mono text-[11px] text-zinc-600">
          © {new Date().getFullYear()}{" "}
          <span className="brand-mark-name font-sans font-semibold tracking-tight">
            by yassine
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
