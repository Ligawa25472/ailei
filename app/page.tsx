import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import QuoteSection from "@/components/QuoteSection";
import CoursesSection from "@/components/CoursesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <QuoteSection />
      <CoursesSection />
      <CTASection />
      <Footer />
    </div>
  );
}
