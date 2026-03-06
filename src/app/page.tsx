import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />

      <ExperienceSection />

      <SkillsSection />

      <PortfolioSection />

      <Footer />
    </main>
  );
}
