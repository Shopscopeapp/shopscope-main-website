"use client";

import { motion, useInView } from "framer-motion";
import { Clock, Users, Rocket, Gift } from "lucide-react";
import { useRef } from "react";

const benefits = [
  {
    icon: Rocket,
    title: "Early Access",
    description: "Be the first to experience ShopScope before public launch",
  },
  {
    icon: Gift,
    title: "Launch Perks",
    description: "Exclusive discounts and special offers for early members",
  },
  {
    icon: Users,
    title: "VIP Community",
    description: "Join a community of fashion-forward early adopters",
  },
  {
    icon: Clock,
    title: "Priority Support",
    description: "Get dedicated support during your first month",
  },
];

export default function WaitlistStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/5" />

      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Why Join the <span className="text-gradient">Waitlist?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get exclusive benefits and be part of the fashion discovery revolution from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-2xl p-6 border border-black/10 hover:border-black/30 transition-all group"
            >
              <motion.div
                className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <benefit.icon className="text-white" size={24} />
              </motion.div>
              <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 glass rounded-3xl p-8 md:p-12 border border-black/20"
        >
          <h3 className="text-2xl md:text-3xl font-black mb-8 text-center">
            Launch Timeline
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { phase: "Q1 2025", title: "Beta Testing", desc: "Select waitlist members get early access" },
              { phase: "Q1 2026", title: "Public Launch", desc: "ShopScope goes live for everyone" },
              { phase: "Q3 2025", title: "Brand Expansion", desc: "1000+ brands added to the platform" },
            ].map((item, index) => (
              <motion.div
                key={item.phase}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-black text-white rounded-full font-black text-lg mb-4">
                  {index + 1}
                </div>
                <div className="text-sm font-bold text-gray-500 mb-2">{item.phase}</div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

