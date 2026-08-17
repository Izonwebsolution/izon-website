import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Pipeline from "@/components/sections/Pipeline";
import Portfolio from "@/components/sections/Portfolio";
import WhyIzon from "@/components/sections/WhyIzon";
import Process from "@/components/sections/Process";
import Technologies from "@/components/sections/Technologies";
import DomainSection from "@/components/sections/DomainSection";
import GrowthSection from "@/components/sections/GrowthSection";
import ProjectPlanner from "@/components/sections/ProjectPlanner";
import FAQ from "@/components/sections/FAQ";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <Pipeline />
      <Portfolio />
      <WhyIzon />
      <Process />
      <Technologies />
      <DomainSection />
      <GrowthSection />
      <ProjectPlanner />
      <FAQ />
      <About />
      <Contact />
    </>
  );
}
