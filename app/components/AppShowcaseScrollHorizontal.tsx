"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";

const appScreens = [
  { image: "/images/app-screens/MAINPAGE.png", title: "Discover", color: "from-purple-500/20 to-pink-500/20" },
  { image: "/images/app-screens/SWIPEFEATURE.png", title: "Swipe", color: "from-blue-500/20 to-cyan-500/20" },
  { image: "/images/app-screens/CART.png", title: "Shop", color: "from-green-500/20 to-emerald-500/20" },
  { image: "/images/app-screens/PAYOUTS.webp", title: "Save", color: "from-orange-500/20 to-red-500/20" },
];

export default function AppShowcaseScrollHorizontal() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Convert vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-70%"]);

  return (
    <section ref={containerRef} className="relative bg-black text-white" style={{ height: "120vh" }}>
      {/* Sticky container - stays in place while you scroll through */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-6xl md:text-7xl font-black tracking-tight">
              The App
            </h2>
          </motion.div>

          {/* Horizontal scroll that moves with page scroll */}
          <div className="overflow-hidden">
            <motion.div
              style={{ x }}
              className="flex gap-8 md:gap-12"
            >
              {appScreens.map((screen, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className="flex-shrink-0 w-[280px] md:w-[320px]"
                >
                  <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={screen.image}
                      alt={screen.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-center mt-6 text-xl font-bold">{screen.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

