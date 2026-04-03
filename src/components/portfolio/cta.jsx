import Link from "next/link";

/** Matches site surfaces: rounded-2xl, subtle border, inset highlight */
const secondaryBase =
  "inline-flex h-12 min-w-[11rem] items-center justify-center gap-2 rounded-2xl border border-slate-400/25 bg-gradient-to-b from-white/[0.08] to-indigo-950/20 px-7 font-sans text-sm font-semibold tracking-tight text-slate-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_32px_-16px_rgba(99,102,241,0.12)] transition duration-300 hover:border-indigo-300/35 hover:from-white/[0.12] hover:to-indigo-950/30 hover:shadow-[0_0_52px_-12px_rgba(165,180,252,0.2)] active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400/60";

const primaryBase =
  "inline-flex h-12 min-w-[11rem] items-center justify-center rounded-2xl bg-gradient-to-b from-slate-50 to-slate-200/95 px-7 font-sans text-sm font-semibold tracking-tight text-[#070910] shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] ring-1 ring-indigo-200/25 transition duration-300 hover:from-white hover:to-slate-100 hover:shadow-[0_0_48px_-8px_rgba(165,180,252,0.35)] active:scale-[0.985] active:brightness-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300";

export function CtaPrimary({ href, children, className = "", ...props }) {
  return (
    <Link href={href} className={`${primaryBase} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function CtaSecondary({ href, children, className = "", ...props }) {
  return (
    <Link href={href} className={`${secondaryBase} ${className}`} {...props}>
      {children}
    </Link>
  );
}

function ExternalIcon({ className = "" }) {
  return (
    <svg
      className={`h-4 w-4 shrink-0 opacity-70 ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

export function CtaSecondaryExternal({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${secondaryBase} ${className}`}
    >
      {children}
      <ExternalIcon />
    </a>
  );
}
