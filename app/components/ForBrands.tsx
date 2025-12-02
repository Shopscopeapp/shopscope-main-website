"use client";

import { motion, useInView } from "framer-motion";
import { TrendingUp, DollarSign, Users, BarChart3, Target, Zap } from "lucide-react";
import { useRef } from "react";
import BrandForm from "./BrandForm";

const brandFeatures = [
  {
    icon: DollarSign,
    title: "Pay Per Sale",
    description: "Zero upfront costs. Only pay when we drive an actual sale.",
  },
  {
    icon: Users,
    title: "Engaged Shoppers",
    description: "Reach highly engaged customers actively searching for your style.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance with detailed insights and conversion data.",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "AI-powered matching connects your products with the right audience.",
  },
  {
    icon: Zap,
    title: "Instant Integration",
    description: "Get started in minutes with our seamless onboarding process.",
  },
  {
    icon: TrendingUp,
    title: "Scale With Ease",
    description: "Grow your reach without increasing ad spend or marketing costs.",
  },
];

export default function ForBrands() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="for-brands" className="relative py-32 px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Built For <span className="text-gradient">Brands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A risk-free way to reach highly engaged shoppers. No ad spend, no
            guesswork — you only pay when a sale is made.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {brandFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 hover:bg-black/10 transition-all duration-300 border border-black/10 group"
            >
              <motion.div
                className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Brand Application Form */}
        <BrandForm />
      </div>
    </section>
  );
}

