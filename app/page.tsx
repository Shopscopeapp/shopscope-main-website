"use client";

import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import AppShowcase from "./components/AppShowcaseOption2";
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="relative min-h-screen bg-white text-black overflow-hidden">
        <ScrollProgress />
        <Cursor mousePosition={mousePosition} />
        <ParticleBackground />
        <Navigation />
        
        {/* Animated background grid */}
        <div className="fixed inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        
        {/* Spotlight effect follows mouse */}
        <div 
          className="fixed pointer-events-none z-[5]"
          style={{
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 0, 0, 0.03) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x - 300}px, ${mousePosition.y - 300}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        />

        <div className="relative z-10">
          <Hero />
          <AppShowcase />
          <Features />
          <HowItWorks />
          <ForBrands />
          <CTA />
          <Footer />
        </div>

        <style jsx>{`
          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }
        `}</style>
      </main>
    </>
  );
}
