"use client";

import { useEffect, useState } from "react";
import { ctaPrimaryClassName } from "./cta-classes";

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
      <header className="fixed left-0 right-0 top-0 z-50 px-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-4">
        <div className="nav-rim mx-auto max-w-6xl rounded-full p-px shadow-[0_16px_60px_-20px_rgba(99,102,241,0.35)]">
          <nav
            className="nav-chrome flex min-h-[3.25rem] min-w-0 w-full items-center gap-1 overflow-hidden rounded-full border-0 bg-slate-950/[0.93] py-2 pl-2 pr-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_40px_-20px_rgba(99,102,241,0.15)] backdrop-blur-xl sm:gap-2 sm:pl-3 sm:pr-2.5"
            aria-label="Primary"
          >
          <a
            href="#"
            className="min-w-0 shrink overflow-hidden rounded-full px-0.5 py-0.5 text-slate-100 transition hover:bg-indigo-500/10 sm:px-1"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop(undefined);
              setOpen(false);
            }}
            aria-label="by yassine — back to top"
          >
            <NavBrandLogo />
          </a>

          {/* lg+ inline links — avoids cramming nav + status + CTA on tablet widths */}
          <div className="hidden min-w-0 flex-1 justify-center gap-0 lg:flex xl:gap-1">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-full px-2 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.1em] text-slate-400 transition hover:bg-indigo-500/10 hover:text-slate-100 xl:px-2.5 xl:text-[11px] xl:tracking-[0.12em]"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id, undefined);
                }}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex min-w-0 shrink-0 items-center gap-1.5 sm:gap-2.5">
            {/* Full status copy needs width — only at xl+ */}
            <div className="hidden min-w-0 xl:block">
              <LiveStatus />
            </div>
            {/* Compact badge: mobile through large desktop */}
            <div className="xl:hidden">
              <LiveStatus compact />
            </div>
            <a
              href="#contact"
              className={`${ctaPrimaryClassName} !h-10 !min-w-0 shrink-0 px-2.5 !text-[10px] sm:px-4 sm:!text-xs lg:px-5`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact", undefined);
              }}
            >
              <span className="sm:hidden">Audit</span>
              <span className="hidden sm:inline">Book Audit</span>
            </a>
            <button
              type="button"
              className="flex h-11 min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-full border border-zinc-800/60 bg-white/[0.04] text-zinc-200 backdrop-blur-sm transition hover:border-zinc-700 hover:bg-white/[0.07] lg:hidden"
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
        </div>
      </header>

      {open ? (
        <div
          id="mobile-menu"
          className="mobile-nav-sheet fixed inset-0 z-[60] flex flex-col bg-gradient-to-b from-[#060810]/98 via-[#05060a]/98 to-[#03040a]/98 pb-[env(safe-area-inset-bottom)] pt-[env(safe-area-inset-top)] backdrop-blur-2xl lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="mobile-nav-sheet-header flex items-center justify-between border-b border-white/[0.06] px-4 py-4">
            <CompactBrandLogo />
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
          <div className="flex flex-1 flex-col gap-2 overflow-y-auto overscroll-contain px-4 py-8">
            {NAV_LINKS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                style={{ animationDelay: `${60 + i * 55}ms` }}
                className="mobile-nav-link rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.06] to-white/[0.02] px-5 py-5 font-mono text-sm font-medium uppercase tracking-[0.15em] text-zinc-100 shadow-[0_12px_40px_-24px_rgba(99,102,241,0.35)] active:scale-[0.98] active:bg-white/[0.08]"
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
              style={{ animationDelay: "240ms" }}
              className="mobile-nav-link mobile-nav-link--cta mt-2 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-200 px-5 py-5 text-center font-sans text-base font-semibold text-[#070910] shadow-[0_16px_48px_-20px_rgba(255,255,255,0.25)] active:scale-[0.98]"
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

/** Inline marks — avoids importing server `BrandMark` into this client module. */
function NavBrandLogo() {
  const gid = "brand-g-nav";
  return (
    <span className="brand-mark group inline-flex flex-row items-center gap-1.5 min-[400px]:gap-2.5">
      <svg
        className="h-[17px] w-[17px] shrink-0 text-slate-400 min-[400px]:h-[19px] min-[400px]:w-[19px] sm:h-[21px] sm:w-[21px] transition duration-300 ease-out group-hover:[filter:drop-shadow(0_0_16px_rgba(165,180,252,0.45))]"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${gid}-stroke`} x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a5b4fc" />
            <stop offset="0.45" stopColor="#e2e8f0" />
            <stop offset="1" stopColor="#64748b" />
          </linearGradient>
          <linearGradient id={`${gid}-fill`} x1="10" y1="28" x2="30" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" stopOpacity="0.98" />
            <stop offset="0.55" stopColor="#c7d2fe" stopOpacity="0.9" />
            <stop offset="1" stopColor="#94a3b8" stopOpacity="0.88" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="30" height="30" rx="9" stroke={`url(#${gid}-stroke)`} strokeWidth="1.15" opacity="0.9" />
        <rect x="11" y="22" width="4.5" height="9" rx="1.25" fill={`url(#${gid}-fill)`} opacity="0.55" />
        <rect x="17.25" y="16" width="4.5" height="15" rx="1.25" fill={`url(#${gid}-fill)`} opacity="0.78" />
        <rect x="23.5" y="10" width="4.5" height="21" rx="1.25" fill={`url(#${gid}-fill)`} />
      </svg>
      <span className="flex items-baseline gap-2 sm:gap-2.5">
        <span className="brand-mark-by rounded-full px-1 py-px font-mono text-[7px] font-semibold uppercase leading-none tracking-[0.28em] transition duration-300 min-[400px]:px-[0.35rem] min-[400px]:py-[0.1rem] min-[400px]:text-[8px] sm:px-1.5 sm:py-0.5 sm:text-[9px]">
          by
        </span>
        <span className="brand-mark-name font-sans text-[11px] font-semibold tracking-[-0.03em] min-[400px]:text-[13px] sm:text-sm">
          yassine
        </span>
      </span>
    </span>
  );
}

function CompactBrandLogo() {
  const gid = "brand-g-compact";
  return (
    <span className="brand-mark group inline-flex flex-row items-center gap-2">
      <svg
        className="h-[18px] w-[18px] shrink-0 text-slate-400 transition duration-300 ease-out group-hover:[filter:drop-shadow(0_0_16px_rgba(165,180,252,0.45))]"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id={`${gid}-stroke`} x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a5b4fc" />
            <stop offset="0.45" stopColor="#e2e8f0" />
            <stop offset="1" stopColor="#64748b" />
          </linearGradient>
          <linearGradient id={`${gid}-fill`} x1="10" y1="28" x2="30" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f8fafc" stopOpacity="0.98" />
            <stop offset="0.55" stopColor="#c7d2fe" stopOpacity="0.9" />
            <stop offset="1" stopColor="#94a3b8" stopOpacity="0.88" />
          </linearGradient>
        </defs>
        <rect x="5" y="5" width="30" height="30" rx="9" stroke={`url(#${gid}-stroke)`} strokeWidth="1.15" opacity="0.9" />
        <rect x="11" y="22" width="4.5" height="9" rx="1.25" fill={`url(#${gid}-fill)`} opacity="0.55" />
        <rect x="17.25" y="16" width="4.5" height="15" rx="1.25" fill={`url(#${gid}-fill)`} opacity="0.78" />
        <rect x="23.5" y="10" width="4.5" height="21" rx="1.25" fill={`url(#${gid}-fill)`} />
      </svg>
      <span className="flex items-baseline gap-2 sm:gap-2.5">
        <span className="brand-mark-by rounded-full px-1 py-px font-mono text-[8px] font-semibold uppercase leading-none tracking-[0.28em] transition duration-300">
          by
        </span>
        <span className="brand-mark-name font-sans text-[13px] font-semibold tracking-[-0.03em]">yassine</span>
      </span>
    </span>
  );
}

function LiveStatus({ compact = false }) {
  return (
    <div
      className={`flex min-w-0 max-w-full items-center gap-2 rounded-full border border-zinc-800/50 bg-black/30 px-2 py-1.5 font-mono text-zinc-400 sm:px-2.5 ${compact ? "text-[9px] leading-tight sm:text-[10px]" : "text-[10px] leading-snug sm:text-[11px]"}`}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_0_1px_rgba(16,185,129,0.35)]" />
      </span>
      <span className="min-w-0 truncate">
        {compact ? "Available · April" : "Available for April"}
      </span>
    </div>
  );
}
