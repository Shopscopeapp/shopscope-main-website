"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  DollarSign,
  Gift,
  Sparkles,
  Video,
  Heart,
  TrendingUp,
  Users,
  Check,
  X,
  ChevronDown,
  Zap,
  Star,
  Camera,
  Shirt,
  Palette,
  MessageCircle,
  Play,
  Clock,
  BadgeCheck,
  Coins,
} from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollProgress from "../components/ScrollProgress";
import CreatorForm from "./CreatorForm";

// Custom TikTok icon
const TikTokIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Custom Instagram icon
const InstagramIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

// ============================================================================
// HERO SECTION
// ============================================================================
function CreatorsHero() {
  const ref = useRef(null);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg pt-20">
      {/* Static gradient orbs - no animation for performance */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-15"
        style={{ background: "radial-gradient(circle, rgba(0,0,0,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Platform badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-black/10">
            <TikTokIcon size={18} />
            <span className="font-medium">TikTok</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 glass rounded-full text-sm border border-black/10">
            <InstagramIcon size={18} />
            <span className="font-medium">Instagram</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.95] tracking-tight"
        >
          <span className="block">Get paid to</span>
          <span className="text-gradient">share your style.</span>
          <span className="block text-gray-400 text-4xl md:text-5xl lg:text-6xl mt-2">Not just in free clothes.</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Real money for real content. Flat fees per video, performance bonuses, 
          plus your affiliate codes work inside our app. Three ways to earn.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <motion.a
            href="#apply"
            className="px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg magnetic-button flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
            <ArrowRight size={20} />
          </motion.a>
          <motion.a
            href="#how-you-get-paid"
            className="px-8 py-4 glass rounded-2xl font-bold text-lg border border-black/20 hover:bg-black/5 transition-all flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <DollarSign size={20} />
            See How You Earn
          </motion.a>
        </motion.div>

        {/* Trust line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full">
            <DollarSign size={14} className="text-green-600" />
            <span>Paid collaborations</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full">
            <Users size={14} />
            <span>All style niches</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/5 rounded-full">
            <Heart size={14} />
            <span>Micro-creators welcome</span>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
// WHY THIS IS DIFFERENT SECTION
// ============================================================================
function WhyDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const frustrations = [
    {
      icon: Gift,
      title: "Tired of gifting-only deals",
      description: "Free products don't pay rent. You deserve actual compensation for your creative work.",
    },
    {
      icon: TrendingUp,
      title: "Sick of affiliate links that never convert",
      description: "Complex tracking, broken links, tiny payouts. There has to be a better way.",
    },
    {
      icon: MessageCircle,
      title: "Want creative freedom",
      description: "Scripted ads feel fake and your audience can tell. You know your style best.",
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
            We get it. Brand deals can{" "}
            <span className="text-gradient">suck.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {frustrations.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass rounded-3xl p-8 border border-black/10 hover:border-black/20 transition-all hover-lift"
            >
              <div className="w-14 h-14 bg-black/10 rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="text-black" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-medium">
            We built ShopScope's creator program because we were tired of watching talented people 
            get undervalued. <span className="text-black font-bold">Your time and creativity deserve real pay.</span>
          </p>
        </motion.div>
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
              <Sparkles size={16} />
              <span>Quick explainer</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-tight">
              So, what's{" "}
              <span className="text-gray-400">ShopScope?</span>
            </h2>

            <div className="space-y-6">
              {[
                { icon: Heart, text: "A swipe-to-shop fashion app where users discover clothes they'll actually love" },
                { icon: Sparkles, text: "AI learns their style and shows them the perfect pieces from indie brands" },
                { icon: Video, text: "Your content helps shoppers discover new looks and brands they'd never find otherwise" },
                { icon: DollarSign, text: "When they buy using your code, everyone wins – including you" },
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
              <div className="absolute inset-0 bg-white/10 blur-3xl rounded-full scale-75" />
              
              <div className="relative w-[280px] md:w-[320px] aspect-[9/19.5] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img
                  src="/images/app-screens/MAINPAGE.png"
                  alt="ShopScope app interface"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-1/4 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2"
              >
                <Play size={14} className="text-black" /> 12.4K views
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-4 bottom-1/3 bg-white text-black px-4 py-2 rounded-xl font-bold text-sm shadow-xl flex items-center gap-2"
              >
                <Coins size={14} className="text-green-600" /> +$85 earned
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// HOW YOU GET PAID SECTION
// ============================================================================
function HowYouGetPaid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const incomeStreams = [
    {
      icon: DollarSign,
      title: "Flat Fee",
      subtitle: "Guaranteed per video",
      description: "Every piece of content you create earns you a set fee. Paid upfront, no strings attached.",
      highlight: "Guaranteed $$",
    },
    {
      icon: TrendingUp,
      title: "Performance Bonus",
      subtitle: "Based on results",
      description: "When your content pops off, you earn more. Views, engagement, and conversions all count.",
      highlight: "Earn more when you go viral",
    },
    {
      icon: Coins,
      title: "Affiliate Commission",
      subtitle: "Your codes, our app",
      description: "Already have brand affiliate codes? We integrate them into ShopScope. Our users buy, you earn commission.",
      highlight: "Amplify your existing income",
    },
  ];

  return (
    <section id="how-you-get-paid" ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-black/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-6">
            <DollarSign size={16} />
            <span>The Money Part</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Three ways to{" "}
            <span className="text-gradient">get paid.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Not one. Not two. Three income streams from every collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {incomeStreams.map((stream, index) => (
            <motion.div
              key={stream.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              <div className="glass rounded-3xl p-8 h-full border border-black/10 hover:border-black/20 transition-all hover-lift">
                {/* Number badge */}
                <div className="absolute -top-3 -right-3 w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-black text-lg">
                  {index + 1}
                </div>

                <motion.div
                  className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                >
                  <stream.icon className="text-white" size={32} />
                </motion.div>

                <h3 className="text-2xl font-black mb-1">{stream.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{stream.subtitle}</p>
                <p className="text-gray-600 leading-relaxed mb-4">{stream.description}</p>
                
                <div className="inline-block px-3 py-1.5 bg-black/5 rounded-full text-sm font-medium">
                  {stream.highlight}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Affiliate callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass rounded-3xl p-8 border border-black/20 bg-black/[0.02]"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center flex-shrink-0">
              <BadgeCheck className="text-white" size={32} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold mb-2">Already have affiliate codes with brands?</h3>
              <p className="text-gray-600">
                We integrate your existing discount codes into ShopScope. When our users shop with your code, 
                you earn your affiliate commission as usual – but now with access to our entire user base. 
                <span className="font-bold text-black"> More eyes on your codes = more sales.</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ============================================================================
// CONTENT WE LOVE SECTION
// ============================================================================
function ContentWeLove() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contentTypes = [
    {
      icon: Shirt,
      title: "Try-On Hauls",
      description: "\"I found these gems on ShopScope\" style videos showing off your finds",
      hookLine: "\"ShopScope haul – let's see if the algorithm knows my style\"",
    },
    {
      icon: Camera,
      title: "GRWM",
      description: "Get Ready With Me content featuring pieces you discovered on the app",
      hookLine: "\"GRWM using only ShopScope finds\"",
    },
    {
      icon: Star,
      title: "Outfit Reviews",
      description: "Honest reviews of pieces – we want real opinions, not scripted praise",
      hookLine: "\"Honest review: is this worth it?\"",
    },
    {
      icon: Palette,
      title: "Style Tips",
      description: "How-to-style content with subtle ShopScope integration",
      hookLine: "\"3 ways to style this trending piece\"",
    },
    {
      icon: Play,
      title: "Subtle Integrations",
      description: "Natural mentions in your regular lifestyle content – no hard sells",
      hookLine: "\"Where'd you get that?\" moments",
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
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Content we{" "}
            <span className="text-gradient">love.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            No scripts. No rigid briefs. Just authentic content that feels like you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentTypes.map((content, index) => (
            <motion.div
              key={content.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass rounded-3xl p-8 border border-black/10 hover:border-black/20 transition-all hover-lift ${
                index === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <motion.div
                className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <content.icon className="text-white" size={28} />
              </motion.div>

              <h3 className="text-xl font-bold mb-3">{content.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{content.description}</p>
              
              <div className="px-4 py-3 bg-black/5 rounded-xl">
                <p className="text-sm font-medium text-gray-700 italic">{content.hookLine}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// WHO WE'RE LOOKING FOR SECTION
// ============================================================================
function WhoWereLookingFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const perfectFit = [
    "You create fashion, lifestyle, or GRWM content",
    "You're active on TikTok and/or Instagram",
    "You have 1K+ followers (micro-creators welcome!)",
    "You want paid collabs, not just free products",
  ];

  const whatMatters = [
    { label: "Engagement rate", desc: "over follower count" },
    { label: "Content quality", desc: "over posting frequency" },
    { label: "Authentic style", desc: "over trend-chasing" },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Who we're{" "}
            <span className="text-gradient">looking for.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Perfect fit */}
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
              <h3 className="text-2xl font-bold">Perfect fit if…</h3>
            </div>
            <ul className="space-y-4">
              {perfectFit.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* What actually matters */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass rounded-3xl p-8 border border-black/10"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center">
                <Star size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold">What actually matters</h3>
            </div>
            <p className="text-gray-600 mb-6">Follower count isn't everything. We care way more about:</p>
            <div className="space-y-4">
              {whatMatters.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-black/5 rounded-xl"
                >
                  <span className="text-3xl font-black text-black/20">{index + 1}</span>
                  <div>
                    <span className="font-bold text-black">{item.label}</span>
                    <span className="text-gray-500"> {item.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================================================
// CREATOR PERKS SECTION
// ============================================================================
function CreatorPerks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const perks = [
    {
      icon: Coins,
      title: "Affiliate code integration",
      description: "Your existing brand codes work inside ShopScope, amplifying your affiliate income",
    },
    {
      icon: Zap,
      title: "Early access",
      description: "Get first dibs on trending pieces before they blow up",
    },
    {
      icon: Users,
      title: "Feature on our socials",
      description: "Get exposure to our growing audience across platforms",
    },
    {
      icon: Star,
      title: "Priority partnerships",
      description: "Crush it once? You're first in line for recurring collabs",
    },
    {
      icon: Heart,
      title: "Creative freedom",
      description: "No scripts, no rigid briefs. Just be yourself.",
    },
    {
      icon: TrendingUp,
      title: "Built-in audience",
      description: "Our users are actively looking to discover – more eyes on your codes",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black text-white">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Perks beyond{" "}
            <span className="text-gray-400">the paycheck.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, index) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <perk.icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1">{perk.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{perk.description}</p>
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
// HOW IT WORKS SECTION
// ============================================================================
function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: "Apply",
      description: "Quick form, takes 2 minutes. We review every application within 48 hours.",
      icon: MessageCircle,
    },
    {
      number: "02",
      title: "Get Briefed",
      description: "We share campaign details, content ideas, and your fee. No surprises.",
      icon: Video,
    },
    {
      number: "03",
      title: "Create",
      description: "Make content your way, on your schedule. Creative freedom is the whole point.",
      icon: Camera,
    },
    {
      number: "04",
      title: "Get Paid",
      description: "Flat fee + bonuses hit your account. Simple as that.",
      icon: DollarSign,
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            How it{" "}
            <span className="text-gradient">works.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps from application to getting paid.
          </p>
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
                className="relative"
              >
                <div className="glass rounded-3xl p-8 h-full border border-black/10 hover:border-black/20 transition-all relative z-10">
                  <div className="text-6xl font-black text-black/10 mb-4">{step.number}</div>
                  <motion.div
                    className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="text-white" size={28} />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
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
// FAQ SECTION
// ============================================================================
function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How much do you pay per video?",
      answer: "It depends on the campaign scope and your audience size, but our flat fees start from $50 per video for micro-creators and scale up from there. Plus you earn performance bonuses on top.",
    },
    {
      question: "Do I need a huge following?",
      answer: "Nope! We work with creators from 1K followers and up. We care way more about engagement rate and content quality than raw follower count. Micro-creators often have the most engaged audiences.",
    },
    {
      question: "Can I be honest in my reviews?",
      answer: "Please do! We want authentic content, not fake praise. If something doesn't work for you, say so. Your audience trusts you because you're real with them.",
    },
    {
      question: "How often do you work with creators?",
      answer: "We're always running campaigns. Once you're in our creator network, you'll get first access to opportunities that match your style. Many creators work with us monthly.",
    },
    {
      question: "Do I keep the products?",
      answer: "Yes! Any products sent to you for content are yours to keep. Consider it a bonus on top of your fee.",
    },
    {
      question: "How do my affiliate codes work with ShopScope?",
      answer: "If you have existing affiliate relationships with brands, we can integrate your discount codes into ShopScope. When our users purchase using your code, you earn your affiliate commission as usual – but now you have access to our entire user base. More eyes = more sales.",
    },
  ];

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black/[0.02]">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Questions?{" "}
            <span className="text-gradient">Answered.</span>
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
            "radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Ready to get paid{" "}
            <span className="text-gray-400">for your style?</span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're building our creator network now. Apply today and 
            we'll get back to you within 48 hours.
          </p>
        </motion.div>

        {/* Creator Application Form */}
        <CreatorForm />
      </div>
    </section>
  );
}

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================
export default function CreatorsPage() {
  return (
    <main className="relative min-h-screen bg-white text-black overflow-hidden">
      <ScrollProgress />
      <Navigation />

      <div className="relative z-10">
        <CreatorsHero />
        <WhyDifferent />
        <WhatIsShopScope />
        <HowYouGetPaid />
        <ContentWeLove />
        <WhoWereLookingFor />
        <CreatorPerks />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </main>
  );
}
