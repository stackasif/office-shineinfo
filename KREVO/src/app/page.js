import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CreatorStories from "@/components/CreatorStories";
import WorkflowSection from "@/components/WorkflowSection";
import CreatorMarketplace from "@/components/CreatorMarketplace";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseKrevo from "@/components/WhyChooseKrevo";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import FAQSection from "@/components/FAQSection";
import CreatorDiscovery from "@/components/CreatorDiscovery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#E6E3D6]">
      <Navbar />
      <Hero />
      <CreatorStories/>
      <WorkflowSection/>
      <CreatorMarketplace/>
      <CreatorDiscovery/>
      <WhyChooseKrevo/>
      <HowItWorks/>
      <Testimonials/>
      <FinalCTA/>
      <FAQSection/>
      <Footer/>
    </main>
  );
}
