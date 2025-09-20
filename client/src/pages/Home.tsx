import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Team from "@/components/Team";
import Architecture from "@/components/Architecture";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import SEOContent from "@/components/SEOContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-background" itemScope itemType="https://schema.org/WebPage">
      <Header />
      <Hero />
      <Features />
      <Team />
      <Architecture />
      <Community />
      <Footer />
      <SEOContent />
    </div>
  );
}