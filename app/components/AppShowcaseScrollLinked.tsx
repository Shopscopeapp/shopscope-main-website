"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const appScreens = [
  { image: "/images/app-screens/MAINPAGE.png", title: "Discover", desc: "Browse curated fashion pieces" },
  { image: "/images/app-screens/SWIPEFEATURE.png", title: "Swipe", desc: "Match your style preferences" },
  { image: "/images/app-screens/CART.png", title: "Shop", desc: "Multi-brand checkout in one cart" },
  { image: "/images/app-screens/PAYOUTS.webp", title: "Save", desc: "Automatic discounts applied" },
];

export default function AppShowcaseScrollLinked() {
  const containerRef = useRef(null);
  
  // Track scroll progress through this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Calculate which screen to show based on scroll position
  const screenIndex = useTransform(scrollYProgress, [0.2, 0.8], [0, appScreens.length - 1]);
  
  // Transform scroll into horizontal movement
  const x = useTransform(scrollYProgress, [0.2, 0.8], ["0%", `-${(appScreens.length - 1) * 100}%`]);

  return (
    <section 
      ref={containerRef} 
      className="relative h-[300vh] bg-black text-white"
    >
      {/* Sticky container that stays in viewport while scrolling */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Text that changes based on scroll */}
            <div className="text-left space-y-6">
              {appScreens.map((screen, index) => (
                <motion.div
                  key={index}
                  style={{
                    opacity: useTransform(
                      scrollYProgress,
                      [
                        0.2 + (index / appScreens.length) * 0.6 - 0.1,
                        0.2 + (index / appScreens.length) * 0.6,
                        0.2 + (index / appScreens.length) * 0.6 + 0.1,
                        0.2 + ((index + 1) / appScreens.length) * 0.6
                      ],
                      [0, 1, 1, 0]
                    )
                  }}
                  className="absolute"
                >
                  <h2 className="text-6xl md:text-7xl font-black mb-4">
                    {screen.title}
                  </h2>
                  <p className="text-2xl text-gray-400">
                    {screen.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right side - Phone that shows screens horizontally */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="w-[320px] relative">
                {/* Phone container */}
                <div className="aspect-[9/19.5] rounded-[3rem] overflow-hidden relative border-8 border-white shadow-2xl">
                  {/* Horizontal sliding container */}
                  <motion.div
                    style={{ x }}
                    className="absolute inset-0 flex"
                  >
                    {appScreens.map((screen, index) => (
                      <div
                        key={index}
                        className="w-full h-full flex-shrink-0"
                      >
                        <img
                          src={screen.image}
                          alt={screen.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-[3rem] blur-3xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
            {appScreens.map((_, index) => (
              <motion.div
                key={index}
                className="h-1 bg-white/30 rounded-full overflow-hidden"
                style={{
                  width: 40,
                }}
              >
                <motion.div
                  className="h-full bg-white rounded-full"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [
                        0.2 + (index / appScreens.length) * 0.6,
                        0.2 + ((index + 1) / appScreens.length) * 0.6
                      ],
                      [0, 1]
                    ),
                    transformOrigin: "left",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

