"use client";

import { motion, useInView } from "framer-motion";
import { Smartphone, Heart, Package, Sparkles } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Swipe & Discover",
    description: "Browse through personalized fashion pieces curated just for your style. Like what you see? Swipe right.",
  },
  {
    number: "02",
    icon: Heart,
    title: "Save Collections",
    description: "Create custom collections of your favorite finds. Build your dream wardrobe and organize by occasion, season, or vibe.",
  },
  {
    number: "03",
    icon: Package,
    title: "Unified Checkout",
    description: "Add items from multiple brands to one cart. Checkout once with automatic discounts applied.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Enjoy & Share",
    description: "Receive your curated pieces and share your style collections with friends. Keep discovering more.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-32 px-6 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-black/5 rounded-full blur-3xl -translate-y-1/2" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to revolutionize the way you shop for fashion.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-black/20 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="glass rounded-3xl p-8 h-full hover:bg-black/10 transition-all duration-300 border border-black/10 relative z-10">
                  {/* Step number */}
                  <motion.div
                    className="text-6xl font-black text-black/10 mb-4 group-hover:text-black/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="text-white" size={32} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (desktop only) */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    <div className="w-4 h-4 bg-black rounded-full" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

