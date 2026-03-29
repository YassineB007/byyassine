import { AuthorityStats } from "@/components/portfolio/authority-stats";
import { CursorSpotlight } from "@/components/portfolio/cursor-spotlight";
import { FlexBento } from "@/components/portfolio/flex-bento";
import { Hero } from "@/components/portfolio/hero";
import { Projects } from "@/components/portfolio/projects";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNav } from "@/components/portfolio/site-nav";
import { Solutions } from "@/components/portfolio/solutions";
import { Testimonial } from "@/components/portfolio/testimonial";
import { TrustBar } from "@/components/portfolio/trust-bar";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <SiteNav />
      <div className="relative z-10">
        <main className="pt-[5.5rem] sm:pt-[6rem]">
          <Hero />
          <TrustBar />
          <AuthorityStats />
          <Testimonial />
          <FlexBento />
          <Solutions />
          <Projects />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
