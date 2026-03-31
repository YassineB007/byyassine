import Link from "next/link";

/** Matches bento: rounded-2xl, border-white/[0.08], bg white/2 */
const secondaryBase =
  "inline-flex h-12 min-w-[11rem] items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-7 font-sans text-sm font-semibold tracking-tight text-zinc-100 transition duration-300 hover:border-white/[0.14] hover:bg-white/[0.04] hover:shadow-[0_0_48px_-16px_rgba(250,250,250,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500";

const primaryBase =
  "inline-flex h-12 min-w-[11rem] items-center justify-center rounded-2xl bg-zinc-50 px-7 font-sans text-sm font-semibold tracking-tight text-[#0b0b0b] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] ring-1 ring-white/10 transition duration-300 hover:bg-white hover:shadow-[0_0_40px_-12px_rgba(250,250,250,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300";

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
