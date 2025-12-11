"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  TrendingDown,
  Users,
  Gift,
  Smartphone,
  Store,
  Package,
  BarChart3,
  Zap,
  Target,
  LineChart,
  Shield,
  Check,
  X,
  ChevronDown,
  Calendar,
  DollarSign,
  Sparkles,
  Eye,
  Heart,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
import ParticleBackground from "../components/ParticleBackground";
import ScrollProgress from "../components/ScrollProgress";

// ============================================================================
// HERO SECTION
// ============================================================================
function BrandsHero() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg pt-20">
      {/* Background orbs */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-black/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 glass rounded-full text-sm border-pulse"
        >
          <Sparkles size={16} className="text-black" />
          <span className="font-medium">Limited Founding Brand Spots Available</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-tight"
        >
          <span className="block">Turn style swipes into</span>
          <span className="text-gradient">new customers,</span>
          <span className="block">not just impressions.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          ShopScope is a swipe-to-shop app that matches Gen Z & young millennials with fashion brands 
          they haven't discovered yet. You pay only when you make a sale – no upfront ad spend, no monthly minimums.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <motion.a
            href="/#for-brands"
            className="px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg magnetic-button flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply as a Founding Brand
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="https://cal.com/shopscope/10min"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 glass rounded-2xl font-bold text-lg border border-black/20 hover:bg-black/5 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Calendar size={20} />
            Get a 10-min walkthrough
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>2,800+ shoppers on waitlist</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2">
            <Shield size={14} />
            <span>Zero upfront risk</span>
          </div>
          <div className="w-1 h-1 bg-gray-300 rounded-full hidden sm:block" />
          <div className="flex items-center gap-2">
            <Target size={14} />
            <span>Limited founding spots</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-black/30 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-black rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// PAIN POINTS SECTION
// ============================================================================
function PainPoints() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pains = [
    {
      icon: TrendingDown,
      title: "Ad costs up, returns down",
      description: "CPMs keep climbing while click-through falls. You're spending more to reach fewer real buyers.",
    },
    {
      icon: Users,
      title: "Same audience, everywhere",
      description: "The same users see your ads on IG, TikTok, Google… and still don't buy. You're retargeting people to death.",
    },
    {
      icon: Gift,
      title: "Gifting & influencers = gamble",
      description: "Sending out product and paying creators with no guarantee of sales. Hope isn't a strategy.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            You're paying more and more to show<br />
            <span className="text-gradient">the same people the same ads.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {pains.map((pain, index) => (
            <motion.div
              key={pain.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-3xl p-8 border border-black/10 hover:border-black/20 transition-all hover-lift"
            >
              <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center mb-6">
                <pain.icon className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{pain.title}</h3>
              <p className="text-gray-600 leading-relaxed">{pain.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-lg text-gray-600 max-w-3xl mx-auto"
        >
          We built ShopScope because we were tired of watching great brands burn budget 
          just to <em>maybe</em> get in front of the right people.
        </motion.p>
      </div>
    </section>
  );
}

// ============================================================================
// WHAT IS SHOPSCOPE SECTION
// ============================================================================
function WhatIsShopScope() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              A swipe-to-shop app that learns each shopper's style and{" "}
              <span className="text-gray-400">sends them to you.</span>
            </h2>

            <div className="space-y-6">
              {[
                { icon: Heart, text: "Shoppers swipe right to like and left to pass on outfits." },
                { icon: Sparkles, text: "As they swipe, ShopScope learns their style and surfaces the right brands – not just the biggest advertisers." },
                { icon: DollarSign, text: "You only pay a small commission on confirmed sales. No clicks, no impressions." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-75" />
              
              {/* Phone screen */}
              <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/app-screens/SWIPEFEATURE.png"
                  alt="ShopScope swipe interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating UI elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-8 top-1/4 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl"
              >
                <Heart size={16} className="inline mr-1 text-red-500" /> Style Match!
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-1/3 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl"
              >
                +$47.99 sale 🎉
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HOW IT WORKS FOR BRANDS
// ============================================================================
function HowItWorksForBrands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Store,
      title: "Connect your store",
      description: "Plug in via Shopify / your existing setup. No new checkout, no new ops.",
    },
    {
      number: "02",
      icon: Package,
      title: "Sync your catalog",
      description: "We pull selected products and create swipeable looks & outfits.",
    },
    {
      number: "03",
      icon: Eye,
      title: "Shoppers discover you",
      description: "Our users swipe through outfits. When your product matches their style, you show up.",
    },
    {
      number: "04",
      icon: BarChart3,
      title: "You get sales + data",
      description: "Orders go through your store. You see what people loved, skipped, and saved – in real time.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-black/5 rounded-full blur-3xl -translate-x-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Set up once.{" "}
            <span className="text-gradient">Let the swipes do the targeting.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black/20 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="glass rounded-3xl p-8 h-full border border-black/10 hover:border-black/20 transition-all hover-lift relative z-10">
                  <div className="text-6xl font-black text-black/10 mb-4 group-hover:text-black/20 transition-colors">
                    {step.number}
                  </div>
                  <motion.div
                    className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// VALUE PROPOSITION GRID
// ============================================================================
function ValueProposition() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: DollarSign,
      title: "Commission-only, no ad spend",
      description: "You don't pay to 'test' audiences or buy impressions. We only earn when you do – on completed sales.",
    },
    {
      icon: Target,
      title: "High-intent, style-matched shoppers",
      description: "Our users are in 'I want to find something new' mode – not doom-scrolling. They came to discover.",
    },
    {
      icon: LineChart,
      title: "Real-time style analytics",
      description: "See which products get the most likes, skips, and saves. Use it to guide ads, creative, and buying.",
    },
    {
      icon: Zap,
      title: "No disruption to your stack",
      description: "Keep your Shopify flow, your fulfilment, your returns process. We're a discovery layer on top.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black/[0.02]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Built for brands that are{" "}
            <span className="text-gradient">done burning ad budget.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl p-8 border border-black/10 hover:border-black/20 transition-all hover-lift group"
            >
              <div className="flex items-start gap-6">
                <motion.div
                  className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <value.icon className="text-white" size={32} />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">{value.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// SOCIAL PROOF / TRACTION
// ============================================================================
function SocialProof() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { number: "2,800+", label: "Shoppers on waitlist" },
    { number: "Gen Z", label: "& young millennials" },
    { number: "AU", label: "Launching in Australia first" },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="glass rounded-[3rem] p-12 md:p-16 border border-black/20 text-center relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-8 right-8 w-24 h-24 border border-black/10 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-8 left-8 w-16 h-16 border border-black/10 rounded-full"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-black mb-6"
          >
            We're small <span className="text-gradient">on purpose</span> right now.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          >
            We're opening a limited group of founding brand spots while we onboard 
            our first wave of shoppers. Hyper-curated brand selection — we'd rather 
            have 20 great fits than 200 random.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// DATA & INSIGHTS SECTION
// ============================================================================
function DataInsights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const insights = [
    "See like vs skip rate per product and per look.",
    "Understand what styles / price points your ideal shoppers lean toward.",
    "Identify potential winners before you pour ad spend into them.",
    "Export insights to use in Meta, TikTok, or email campaigns.",
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-white/5 blur-3xl rounded-3xl" />
              
              {/* Mock dashboard */}
              <div className="relative bg-white/10 rounded-3xl p-6 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-sm text-gray-400">ShopScope Analytics</span>
                </div>
                
                <div className="space-y-4">
                  {/* Stat cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-sm text-gray-400 mb-1">Like Rate</div>
                      <div className="text-2xl font-bold text-green-400">73%</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-sm text-gray-400 mb-1">Saves</div>
                      <div className="text-2xl font-bold">1,284</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <div className="text-sm text-gray-400 mb-1">Conversions</div>
                      <div className="text-2xl font-bold text-blue-400">12.4%</div>
                    </div>
                  </div>
                  
                  {/* Chart placeholder */}
                  <div className="bg-white/5 rounded-xl p-4 h-32 flex items-end gap-2">
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: `${height}%` } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                        className="flex-1 bg-gradient-to-t from-white/20 to-white/40 rounded-t"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              Beyond ROAS:{" "}
              <span className="text-gray-400">see what people almost bought.</span>
            </h2>

            <ul className="space-y-4">
              {insights.map((insight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check size={14} className="text-white" />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{insight}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// PRICING SECTION
// ============================================================================
function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Simple, <span className="text-gradient">aligned incentives.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass rounded-[3rem] p-12 border border-black/20 relative overflow-hidden"
        >
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent" />
          
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
              <div>
                <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">Commission-based</div>
                <div className="text-5xl md:text-6xl font-black">
                  From 5%
                  <span className="text-2xl text-gray-500 font-medium ml-2">per sale</span>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block px-4 py-2 bg-green-100 text-green-800 rounded-full font-bold text-sm mb-2">
                  Founding Brand Offer
                </div>
                <p className="text-gray-600">No setup fees, no monthly minimums</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Check, text: "Pay only on confirmed sales" },
                { icon: Check, text: "Pause or cancel anytime" },
                { icon: Check, text: "No lock-in contracts" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <item.icon size={16} className="text-white" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-gray-500 border-t border-black/10 pt-6">
              We use your approved affiliate links/codes where available and stay within your program rules.
              If we're not driving value, you shouldn't be paying us.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// BRAND FIT SECTION
// ============================================================================
function BrandFit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const perfectFor = [
    "You're on Shopify or a similar modern stack.",
    "You want to reach Gen Z / young millennials.",
    "You're tired of spray-and-pray ads and want a performance-only discovery channel.",
    "You value quality over quantity in partnerships.",
  ];

  const notFor = [
    "You don't sell online / can't fulfil e-commerce orders.",
    "You're only focused on short-term clearance vs building a brand.",
    "You want guaranteed volume regardless of fit.",
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black/[0.02]">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Who we <span className="text-gradient">built this for.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Perfect for */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-3xl p-8 border border-black/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                <Check size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">Perfect for you if…</h3>
            </div>
            <ul className="space-y-4">
              {perfectFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Not for */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-3xl p-8 border border-black/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gray-200 rounded-2xl flex items-center justify-center">
                <X size={24} className="text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold">Probably not the best fit if…</h3>
            </div>
            <ul className="space-y-4">
              {notFor.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={12} className="text-gray-400" />
                  </div>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================
function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do you track sales?",
      answer: "We use standard affiliate tracking / referral links and send shoppers directly to your store to checkout. Orders are processed by your existing system – we simply track attributed conversions.",
    },
    {
      question: "What about returns or refunds?",
      answer: "Your normal policy applies. If an order is refunded, the commission is reversed in line with your standard affiliate terms. We don't complicate your existing processes.",
    },
    {
      question: "Are you just a coupon app?",
      answer: "No. ShopScope is a discovery + personalization layer. Coupons/discounts are optional and only used if they're part of your approved program. We're focused on style matching, not deal hunting.",
    },
    {
      question: "Do we lose control over our brand?",
      answer: "No. You choose which products to list, control pricing and creative, and can pause at any time. Your brand is presented in context with your approved imagery and pricing.",
    },
    {
      question: "Do we need extra dev work?",
      answer: "For most Shopify brands, setup is plug-and-play. No custom development required. We integrate with your existing affiliate/tracking setup.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            Common <span className="text-gradient">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl border border-black/10 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-black/5 transition-colors"
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown size={20} />
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// FINAL CTA SECTION
// ============================================================================
function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apply" ref={ref} className="relative py-32 px-6 overflow-hidden bg-black text-white">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Let's turn your next customers into{" "}
            <span className="text-gray-400">swipes, not just impressions.</span>
          </h2>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            We're opening a small number of founding brand spots. Once they're filled, 
            we'll be focusing on driving results for them before opening the doors again.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <motion.a
              href="/#for-brands"
              className="px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg magnetic-button flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply to be a Founding Brand
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="https://cal.com/shopscope/10min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={20} />
              Request a 10-min call
            </motion.a>
          </div>

          <p className="text-gray-500 text-sm">
            No lock-in. No setup fee. If we don't drive value, you don't keep us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function BrandsPage() {
  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden">
      <ScrollProgress />
      <Cursor />
      <ParticleBackground />
      <Navigation />

      <div className="relative z-10">
        <BrandsHero />
        <PainPoints />
        <WhatIsShopScope />
        <HowItWorksForBrands />
        <ValueProposition />
        <SocialProof />
        <DataInsights />
        <Pricing />
        <BrandFit />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}

