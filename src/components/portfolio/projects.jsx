"use client";

import { SitePreview } from "./site-preview";

function ArrowUpRight({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M5 11h6V5M5 5l7 7" />
    </svg>
  );
}

const projectCard =
  "project-card-pop group lift-card flex h-full flex-col overflow-hidden rounded-2xl border border-slate-500/25 bg-gradient-to-b from-white/[0.06] to-indigo-950/20 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_0_0_1px_rgba(99,102,241,0.06)] backdrop-blur-md transition duration-300 hover:border-indigo-400/35 hover:shadow-[0_0_64px_-20px_rgba(165,180,252,0.22),0_12px_40px_-28px_rgba(0,0,0,0.45)]";

const WORK = [
  {
    href: "https://apexcoach-gilt.vercel.app/",
    title: "ApexCoach",
    tag: "Fitness coaching",
    description:
      "Premium coaching funnel—programs, results, process, and consult CTAs built to convert.",
    image: "/project-apexcoach.svg",
    imageAlt:
      "Poster for ApexCoach — shown while the live preview loads or if embedding is blocked",
  },
  {
    href: "https://elevated-ashen.vercel.app/",
    title: "Elevated",
    tag: "Coaching institution",
    description:
      "Institutional coaching brand—structured narrative and premium positioning.",
    image: "/project-elevated.svg",
    imageAlt:
      "Poster for Elevated — shown while the live preview loads or if embedding is blocked",
  },
  {
    href: "https://valemonte.vercel.app/",
    title: "Valemonte",
    tag: "Luxury commerce",
    description:
      "Italian luxury menswear—editorial layout, collections, and refined product UX.",
    image: "/project-valemonte.svg",
    imageAlt:
      "Poster for Valemonte — shown while the live preview loads or if embedding is blocked",
  },
  {
    href: "https://strata-six-ivory.vercel.app/",
    title: "STRATA",
    tag: "Streetwear commerce",
    description:
      "Contemporary streetwear—editorial hero, product grids, drops, and conversion-focused shop flows.",
    image: "/project-strata.svg",
    imageAlt: "Poster for STRATA — contemporary streetwear storefront preview",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-24 sm:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="reveal-scroll">
          <p className="section-eyebrow">Projects</p>
          <h2 id="projects-heading" className="section-title">
            Live sites
          </h2>
          <p className="section-lede">
            Posters load instantly; optional live embed on demand so the page stays fast
            in lab tests. Open any build in a new tab when you want the full experience.
          </p>
        </div>

        <div className="project-grid-3d mt-14 grid gap-8 sm:grid-cols-2">
          {WORK.map((item) => (
            <div key={item.href} className="reveal-scroll h-full">
              <article
                className={`project-tilt ${projectCard} flex h-full flex-col outline-none focus-within:ring-2 focus-within:ring-zinc-400 focus-within:ring-offset-2 focus-within:ring-offset-[#070910]`}
              >
                <SitePreview
                  url={item.href}
                  fallbackSrc={item.image}
                  fallbackAlt={item.imageAlt}
                  label={item.title}
                />
                <div className="flex flex-1 flex-col border-t border-white/[0.07] p-6 sm:p-7">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-zinc-500 sm:text-[11px]">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 font-sans text-lg font-semibold tracking-tight text-zinc-50 sm:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex min-h-[44px] items-center gap-2 font-sans text-sm font-medium text-zinc-300 transition hover:text-white"
                  >
                    Open full site
                    <ArrowUpRight className="h-4 w-4 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
