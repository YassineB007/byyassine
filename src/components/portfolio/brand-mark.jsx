/**
 * Lockup: performance sparkline mark + editorial “by” + metallic “yassine”.
 * Server component — used in hero + footer only (`SiteNav` uses inline `NavBrandMark`).
 */
function BrandGlyph({ className = "", gradientId }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id={`${gradientId}-stroke`} x1="8" y1="8" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a5b4fc" />
          <stop offset="0.45" stopColor="#e2e8f0" />
          <stop offset="1" stopColor="#64748b" />
        </linearGradient>
        <linearGradient id={`${gradientId}-fill`} x1="10" y1="28" x2="30" y2="10" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8fafc" stopOpacity="0.98" />
          <stop offset="0.55" stopColor="#c7d2fe" stopOpacity="0.9" />
          <stop offset="1" stopColor="#94a3b8" stopOpacity="0.88" />
        </linearGradient>
      </defs>
      <rect
        x="5"
        y="5"
        width="30"
        height="30"
        rx="9"
        stroke={`url(#${gradientId}-stroke)`}
        strokeWidth="1.15"
        opacity="0.9"
      />
      <rect x="11" y="22" width="4.5" height="9" rx="1.25" fill={`url(#${gradientId}-fill)`} opacity="0.55" />
      <rect x="17.25" y="16" width="4.5" height="15" rx="1.25" fill={`url(#${gradientId}-fill)`} opacity="0.78" />
      <rect x="23.5" y="10" width="4.5" height="21" rx="1.25" fill={`url(#${gradientId}-fill)`} />
    </svg>
  );
}

const VARIANTS = {
  hero: {
    wrap: "flex-row items-center justify-center gap-3 sm:gap-4",
    glyph: "h-9 w-9 sm:h-10 sm:w-10 md:h-11 md:w-11",
    byWrap: "px-2 py-1 sm:px-2.5 sm:py-1",
    by: "text-[10px] sm:text-xs",
    name: "text-xl tracking-[-0.04em] sm:text-2xl md:text-3xl",
  },
  footer: {
    wrap: "flex-row items-center gap-3",
    glyph: "h-8 w-8 sm:h-9 sm:w-9",
    byWrap: "px-2 py-0.5 sm:px-2.5 sm:py-1",
    by: "text-[10px] sm:text-[11px]",
    name: "text-2xl tracking-[-0.04em] sm:text-3xl",
  },
};

export function BrandMark({ variant = "hero", className = "" }) {
  const v = VARIANTS[variant] ?? VARIANTS.hero;
  const isHero = variant === "hero";
  const gradientId = `brand-g-${variant}`;

  return (
    <span
      className={`brand-mark group inline-flex ${v.wrap} ${isHero ? "brand-mark--hero" : ""} ${className}`}
    >
      <BrandGlyph
        className={`${v.glyph} text-slate-400 transition duration-300 ease-out group-hover:[filter:drop-shadow(0_0_16px_rgba(165,180,252,0.45))]`}
        gradientId={gradientId}
      />
      <span className="flex items-baseline gap-2 sm:gap-2.5">
        <span
          className={`brand-mark-by font-mono font-semibold uppercase leading-none tracking-[0.28em] transition duration-300 ${v.byWrap} ${v.by} rounded-full`}
        >
          by
        </span>
        <span className={`brand-mark-name font-sans font-semibold ${v.name}`}>yassine</span>
      </span>
    </span>
  );
}
