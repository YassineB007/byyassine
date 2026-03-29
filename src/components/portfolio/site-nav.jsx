"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CtaPrimary } from "./cta";

const NAV_LINKS = [
  { href: "#projects", label: "Work" },
  { href: "#solutions", label: "Solutions" },
];

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
          className="mx-auto flex max-w-4xl items-center gap-2 rounded-full border border-zinc-800/50 bg-zinc-950/65 py-2.5 pl-3 pr-2 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.65),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:gap-3 sm:pl-4 sm:pr-3"
          aria-label="Primary"
        >
          <Link
            href="#"
            className="shrink-0 font-sans text-sm font-semibold tracking-tight text-zinc-100"
            onClick={() => setOpen(false)}
          >
            by yassine
          </Link>

          <div className="hidden min-w-0 flex-1 justify-center gap-1 md:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 font-mono text-xs font-medium uppercase tracking-[0.12em] text-zinc-400 transition hover:bg-white/[0.05] hover:text-zinc-100"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex min-w-0 shrink-0 items-center gap-2 sm:gap-3">
            <div className="hidden max-w-[10.5rem] sm:max-w-[14rem] md:block lg:max-w-none">
              <LiveStatus />
            </div>
            <div className="md:hidden">
              <LiveStatus compact />
            </div>
            <CtaPrimary href="#contact" className="!h-10 !min-w-0 px-3 !text-[11px] sm:px-5 sm:!text-xs">
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
          className="fixed inset-0 z-[60] flex flex-col bg-[#0b0b0b]/98 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation"
        >
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-4">
            <span className="font-sans text-sm font-semibold text-zinc-100">by yassine</span>
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
              <Link
                key={item.href}
                href={item.href}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-5 py-5 font-mono text-sm font-medium uppercase tracking-[0.15em] text-zinc-200 active:bg-white/[0.06]"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 rounded-2xl bg-zinc-50 px-5 py-5 text-center font-sans text-base font-semibold text-[#0b0b0b]"
              onClick={() => setOpen(false)}
            >
              Book Audit
            </Link>
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
