"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "./brand-mark";
import { CtaPrimary } from "./cta";

const NAV_LINKS = [
  { href: "#projects", id: "projects", label: "Work" },
  { href: "#the-flex", id: "the-flex", label: "Speed" },
  { href: "#solutions", id: "solutions", label: "Solutions" },
];

/** Smooth scroll + URL hash update so repeated clicks always move (same-hash bug). */
function scrollToSection(id, closeMenu) {
  closeMenu?.();
  requestAnimationFrame(() => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const path = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", `${path}#${id}`);
  });
}

function scrollToTop(closeMenu) {
  closeMenu?.();
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const path = window.location.pathname + window.location.search;
    window.history.replaceState(null, "", path);
  });
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
        <nav
          className="mx-auto flex max-w-6xl items-center gap-1 rounded-full border border-indigo-500/20 bg-slate-950/75 py-2.5 pl-3 pr-2 shadow-[0_12px_48px_-16px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.09),0_0_40px_-20px_rgba(99,102,241,0.15)] backdrop-blur-xl sm:gap-2 sm:pl-4 sm:pr-3"
          aria-label="Primary"
        >
          <a
            href="#"
            className="shrink-0 -ml-0.5 rounded-full px-1 py-0.5 text-slate-100 transition hover:bg-indigo-500/10"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop(undefined);
              setOpen(false);
            }}
            aria-label="by yassine — back to top"
          >
            <BrandMark variant="nav" />
          </a>

          <div className="hidden min-w-0 flex-1 justify-center gap-0.5 md:flex">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2.5 py-2 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400 transition hover:bg-indigo-500/10 hover:text-slate-100 sm:px-3 sm:text-xs"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id, undefined);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden max-w-[10.5rem] sm:max-w-[14rem] md:block lg:max-w-none">
              <LiveStatus />
            </div>
            <div className="md:hidden">
              <LiveStatus compact />
            </div>
            <CtaPrimary
              href="#contact"
              className="!h-10 !min-w-0 px-3 !text-[11px] sm:px-5 sm:!text-xs"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact", undefined);
              }}
            >
              Book Audit
            </CtaPrimary>
            <button
              type="button"
              className="flex h-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-zinc-800/60 bg-white/[0.04] text-zinc-200 backdrop-blur-sm transition hover:border-zinc-700 hover:bg-white/[0.07] md:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[#05060a]/98 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">
            <BrandMark variant="compact" />
            <button
              type="button"
              className="flex h-12 min-h-[48px] w-12 min-w-[48px] items-center justify-center rounded-full border border-zinc-800 text-zinc-200"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-8">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-5 font-mono text-sm font-medium uppercase tracking-[0.15em] text-zinc-200 active:bg-white/[0.06]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id, () => setOpen(false));
                }}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-2 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-200 px-5 py-5 text-center font-sans text-base font-semibold text-[#070910]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact", () => setOpen(false));
              }}
            >
              Book Audit
            </a>
            <div className="mt-8 border-t border-white/[0.06] pt-8">
              <LiveStatus />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

function LiveStatus({ compact = false }) {
  return (
    <div
      className={`flex min-w-0 items-center gap-2 rounded-full border border-zinc-800/50 bg-black/30 px-2 py-1.5 font-mono text-zinc-400 sm:px-2.5 ${compact ? "text-[9px] leading-tight sm:text-[10px]" : "text-[10px] leading-snug sm:text-[11px]"}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      <span className="min-w-0 truncate">
        {compact ? "Available · April" : "Available for April"}
      </span>
    </div>
  );
}