"use client";

import { motion, useInView } from "framer-motion";
import { Heart, ShoppingCart, Sparkles, Zap, Lock, TrendingUp } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Heart,
    title: "Personalised Discovery",
    description: "Swipe through curated pieces that match your unique style. Our AI learns what you love.",
  },
  {
    icon: ShoppingCart,
    title: "Unified Cart",
    description: "Shop multiple brands, checkout once. No more juggling between different websites.",
  },
  {
    icon: Zap,
    title: "Automatic Discounts",
    description: "Automatic discounts applied at checkout when available. Save money without hunting for codes.",
  },
  {
    icon: Sparkles,
    title: "Style Collections",
    description: "Create and organise custom collections. Build your perfect wardrobe vision board.",
  },
  {
    icon: Lock,
    title: "Secure & Private",
    description: "Your data is protected with enterprise-grade security. Shop with confidence.",
  },
  {
    icon: TrendingUp,
    title: "Trend Intelligence",
    description: "Stay ahead with AI-powered trend analysis and personalised style recommendations.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/5 to-transparent blur-3xl" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Shopping,{" "}
            <span className="text-gradient">Reimagined</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience fashion discovery like never before with features designed
            for the modern shopper.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-3xl p-8 h-full hover:bg-black/10 transition-all duration-300 border border-black/10 hover:border-black/30 hover-lift spotlight relative overflow-hidden">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,0,0,0.05) 0%, transparent 50%, rgba(0,0,0,0.05) 100%)",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  whileHover={{ 
                    rotate: 360,
                    scale: 1.1,
                  }}
                  transition={{ 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  <feature.icon className="text-white" size={28} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

