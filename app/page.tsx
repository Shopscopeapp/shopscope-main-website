"use client";

import Hero from "./components/Hero";
import AppShowcase from "./components/AppShowcaseScrollHorizontal";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import ForBrands from "./components/ForBrands";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";
import ParticleBackground from "./components/ParticleBackground";
import ScrollProgress from "./components/ScrollProgress";

// Structured data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ShopScope",
  "applicationCategory": "LifestyleApplication",
  "operatingSystem": "iOS, Android",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A smarter way to find clothes you actually love. Swipe through curated pieces, save collections, and checkout from multiple brands in one seamless cart.",
  "url": "https://shopscope.app",
  "image": "https://shopscope.app/images/app-screens/LOGO.png",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "2847"
  }
};

export default function Home() {

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative min-h-screen bg-white text-black overflow-hidden">
        <ScrollProgress />
        <Cursor />
        <ParticleBackground />
        <Navigation />
        
{/* Subtle noise texture is handled by ParticleBackground */}

        <div className="relative z-10">
          <Hero />
          <AppShowcase />
          <Features />
          <HowItWorks />
          <ForBrands />
          <CTA />
          <Footer />
        </div>

      </main>
    </>
  );
}
