"use client";

import { FadeIn } from "./fade-in";
import { SitePreview } from "./site-preview";

const projectCard =
  "group flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-800/50 bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-md transition duration-300 hover:border-zinc-700/70 hover:shadow-[0_0_48px_-16px_rgba(250,250,250,0.1)]";

const WORK = [
  {
    href: "https://apexcoach-gilt.vercel.app/",
    title: "ApexCoach",
    tag: "Fitness coaching",
    description:
      "Premium coaching funnel — programs, results, process, and consult CTAs built to convert.",
    image: "/project-apexcoach.svg",
    imageAlt:
      "Poster for ApexCoach — shown while the live preview loads or if embedding is blocked",
  },
  {
    href: "https://elevated-ashen.vercel.app/",
    title: "Elevated",
    tag: "Coaching institution",
    description:
      "Institutional coaching brand — structured narrative and premium positioning.",
    image: "/project-elevated.svg",
    imageAlt:
      "Poster for Elevated — shown while the live preview loads or if embedding is blocked",
  },
  {
    href: "https://valemonte.vercel.app/",
    title: "Valemonte",
    tag: "Luxury commerce",
    description:
      "Italian luxury menswear — editorial layout, collections, and refined product UX.",
    image: "/project-valemonte.svg",
    imageAlt:
      "Poster for Valemonte — shown while the live preview loads or if embedding is blocked",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-20 sm:py-28"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500 sm:text-xs">
            Projects
          </p>
          <h2
            id="projects-heading"
            className="mt-3 font-sans text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl"
          >
            Live sites.
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-zinc-400">
            Open any project in a new tab — full experience, zero lag on this page.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {WORK.map((item, i) => (
            <FadeIn key={item.href} className="h-full" delay={0.05 + i * 0.05}>
              <article
                className={`${projectCard} flex h-full flex-col outline-none focus-within:ring-2 focus-within:ring-zinc-500 focus-within:ring-offset-2 focus-within:ring-offset-[#0b0b0b]`}
              >
                <SitePreview
                  url={item.href}
                  fallbackSrc={item.image}
                  fallbackAlt={item.imageAlt}
                  label={item.title}
                />
                <div className="flex flex-1 flex-col border-t border-white/[0.06] p-6">
                  <p className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-zinc-500 sm:text-xs">
                    {item.tag}
                  </p>
                  <h3 className="mt-2 font-sans text-lg font-semibold text-zinc-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 font-sans text-sm leading-relaxed text-zinc-500">
                    {item.description}
                  </p>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] items-center font-sans text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
                  >
                    Open full site
                    <span
                      className="ml-1 inline-block transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
