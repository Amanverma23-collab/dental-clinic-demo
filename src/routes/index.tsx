import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { FeatureCards } from "@/components/site/FeatureCards";
import { ServiceCircles } from "@/components/site/ServiceCircles";
import { Testimonials } from "@/components/site/Testimonials";
import { Doctors } from "@/components/site/Doctors";
import { WhyUs } from "@/components/site/WhyUs";
import { Journal } from "@/components/site/Journal";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Denta Proof Raipur — Modern Dentistry & Cosmetic Care" },
      { name: "description", content: "Advanced dental care in Raipur — cosmetic dentistry, whitening, implants & family dentistry. Call +91 97832 04194 to book." },
      { property: "og:title", content: "Denta Proof Raipur — Confident & Healthy Smiles" },
      { property: "og:description", content: "Cosmetic dentistry, whitening, implants & family dental care delivered with precision and comfort in Raipur." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <FeatureCards />
      <ServiceCircles />
      <Testimonials />
      <Doctors />
      <WhyUs />
      <Journal />
      <Footer />
    </main>
  );
}
