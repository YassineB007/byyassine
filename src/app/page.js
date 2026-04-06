import dynamic from "next/dynamic";
import { CursorSpotlight } from "@/components/portfolio/cursor-spotlight";
import { Hero } from "@/components/portfolio/hero";
import { SiteNav } from "@/components/portfolio/site-nav";

const TrustBar = dynamic(() =>
  import("@/components/portfolio/trust-bar").then((m) => m.TrustBar)
);
const AuthorityStats = dynamic(() =>
  import("@/components/portfolio/authority-stats").then((m) => m.AuthorityStats)
);
const Testimonial = dynamic(() =>
  import("@/components/portfolio/testimonial").then((m) => m.Testimonial)
);
const FlexBento = dynamic(() =>
  import("@/components/portfolio/flex-bento").then((m) => m.FlexBento)
);
const Solutions = dynamic(() =>
  import("@/components/portfolio/solutions").then((m) => m.Solutions)
);
const Projects = dynamic(() =>
  import("@/components/portfolio/projects").then((m) => m.Projects)
);
const SiteFooter = dynamic(() =>
  import("@/components/portfolio/site-footer").then((m) => m.SiteFooter)
);

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <SiteNav />
      <div className="relative z-20">
        <main className="pt-[calc(5.5rem+env(safe-area-inset-top,0px))] sm:pt-[calc(6rem+env(safe-area-inset-top,0px))]">
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
