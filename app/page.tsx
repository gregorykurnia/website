import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import PainPoints from "@/components/sections/PainPoints";
import Products from "@/components/sections/Products";
import HowItWorks from "@/components/sections/HowItWorks";
import SocialProof from "@/components/sections/SocialProof";
import ArticlesTeaser from "@/components/sections/ArticlesTeaser";
import CTABanner from "@/components/sections/CTABanner";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PainPoints />
        <Products />
        <HowItWorks />
        <SocialProof />
        <ArticlesTeaser />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
