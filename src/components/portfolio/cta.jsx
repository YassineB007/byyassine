import Link from "next/link";
import { ctaPrimaryClassName, ctaSecondaryClassName } from "./cta-classes";

export { ctaPrimaryClassName, ctaSecondaryClassName } from "./cta-classes";

function hashHref(href) {
  return typeof href === "string" && href.startsWith("#");
}

export function CtaPrimary({ href, children, className = "", ...props }) {
  return (
    <Link
      href={href}
      prefetch={hashHref(href) ? false : undefined}
      className={`${ctaPrimaryClassName} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}

export function CtaSecondary({ href, children, className = "", ...props }) {
  return (
    <Link
      href={href}
      prefetch={hashHref(href) ? false : undefined}
      className={`${ctaSecondaryClassName} ${className}`}
      {...props}
    >
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
      className={`${ctaSecondaryClassName} ${className}`}
    >
      {children}
      <ExternalIcon />
    </a>
  );
}
