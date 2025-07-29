import React from "react";
import Header from "./components/Header";
import Hero3D from "./pages/Hero";
import RiskSection from "./pages/Risk";
import StatsDashboard from "./pages/Dashboard";
import SolutionSection from "./pages/Solution";
import WowFactorSection from "./pages/Simulation";
import ProductReviewSection from "./pages/ProductReview";
import TestimonialSection from "./pages/Testimonials";
import CtaSection from "./pages/Cta";
import Footer from "./components/Footer";
import StatsHighlightSection from "./pages/StatsHighLight";

export default function App() {
  return (
    <div className='bg-black font-sans'>
      <Header />
      <main>
        <Hero3D />
        <RiskSection />
        <StatsHighlightSection/>
        <StatsDashboard />
        <SolutionSection />
        <WowFactorSection />
        <ProductReviewSection />
        <TestimonialSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
