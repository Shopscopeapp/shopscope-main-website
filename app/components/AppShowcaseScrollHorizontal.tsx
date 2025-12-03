"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const appScreens = [
  { image: "/images/app-screens/MAINPAGE.png", title: "Discover", desc: "Shop clothing from brands anywhere" },
  { image: "/images/app-screens/SWIPEFEATURE.png", title: "Swipe", desc: "As you swipe, ShopScope learns your style" },
  { image: "/images/app-screens/CART.png", title: "Shop", desc: "Multi-store checkout and access to discounts" },
  { image: "/images/app-screens/PAYOUTS.webp", title: "Earn", desc: "Post, share and get paid" },
];

export default function AppShowcaseScrollHorizontal() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={containerRef} className="relative bg-black text-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            Introducing ShopScope
          </h2>
          <p className="text-gray-400 text-lg">Tap to explore the app</p>
        </motion.div>

        {/* Main showcase area */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Active screen - large display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="flex-1 flex justify-center"
          >
            <div className="relative">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="w-[280px] md:w-[320px]"
              >
                <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={appScreens[activeIndex].image}
                    alt={appScreens[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Active screen info */}
              <motion.div
                key={`info-${activeIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-8"
              >
                <h3 className="text-3xl font-bold">{appScreens[activeIndex].title}</h3>
                <p className="text-gray-400 mt-2">{appScreens[activeIndex].desc}</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Thumbnail navigation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex lg:flex-col gap-4"
          >
            {appScreens.map((screen, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative w-16 md:w-20 aspect-[9/19.5] rounded-xl overflow-hidden transition-all duration-300 ${
                  activeIndex === index 
                    ? "ring-2 ring-white scale-105" 
                    : "opacity-50 hover:opacity-80"
                }`}
                whileHover={{ scale: activeIndex === index ? 1.05 : 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-12">
          {appScreens.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-white w-8" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

