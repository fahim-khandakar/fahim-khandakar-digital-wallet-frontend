import FeaturesSection from "./partials/Feature Section/FeatureSection";
import HeroSection from "./partials/Hero Section/HeroSection";
import HowItWorksSection from "./partials/How Its Work/HowItsWork";
import StatsSection from "./partials/Statistics/Statistics";
import TestimonialsSection from "./partials/Testimonials/Testimonials";

export default function Homepage() {
  return (
    <div className="container mx-auto">
      <HeroSection
        badge="Send money instantly — safe, simple, everywhere."
        description="Fast Money makes your transactions faster, safer, and easier than ever. Pay bills, send money, or recharge — all in one app, anytime, anywhere."
        heading="Transfer Money in Seconds with Fast Money"
        image={{ src: "/logoWithoutBg.png", alt: "Logo" }}
      />
      <StatsSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
    </div>
  );
}
