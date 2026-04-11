import dynamic from "next/dynamic";
import { AuthorityStats } from "@/components/portfolio/authority-stats";
import { FlexBento } from "@/components/portfolio/flex-bento";
import { Hero } from "@/components/portfolio/hero";
import { SectionDivider } from "@/components/portfolio/section-divider";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Solutions } from "@/components/portfolio/solutions";
import { Testimonial } from "@/components/portfolio/testimonial";
import { TrustBar } from "@/components/portfolio/trust-bar";

const Projects = dynamic(() => import("@/components/portfolio/projects").then((m) => m.Projects), {
  loading: () => (
    <section
      id="projects"
      className="scroll-mt-28 px-4 py-24 sm:py-32"
      aria-busy="true"
      aria-label="Loading projects"
    >
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="space-y-3">
          <div className="h-3 w-24 rounded-sm bg-white/[0.06]" />
          <div className="h-9 w-56 max-w-full rounded-sm bg-white/[0.07]" />
          <div className="h-4 max-w-lg rounded-sm bg-white/[0.05]" />
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="aspect-[16/14] min-h-[300px] rounded-2xl bg-white/[0.04]" />
          <div className="aspect-[16/14] min-h-[300px] rounded-2xl bg-white/[0.04]" />
        </div>
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <>
      <div className="cosmic-stack" aria-hidden>
        <div className="cosmic-backdrop" />
        <div className="cosmic-heartbeat" />
      </div>
      <SiteNav />
      <div className="relative z-20">
        <main className="main-flow pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6rem+env(safe-area-inset-top,0px))]">
          <Hero />
          <SectionDivider />
          <TrustBar />
          <SectionDivider />
          <AuthorityStats />
          <SectionDivider />
          <Testimonial />
          <SectionDivider />
          <FlexBento />
          <SectionDivider />
          <Solutions />
          <SectionDivider />
          <Projects />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
