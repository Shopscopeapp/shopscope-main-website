"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const appScreens = [
  { image: "/images/app-screens/MAINPAGE.png", title: "Discover" },
  { image: "/images/app-screens/SWIPEFEATURE.png", title: "Swipe" },
  { image: "/images/app-screens/CART.png", title: "Shop" },
  { image: "/images/app-screens/PAYOUTS.webp", title: "Track" },
];

// OPTION 3: GRID LAYOUT - ALL AT ONCE
export default function AppShowcaseOption3() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Simple Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            Four Steps to Perfect Style
          </h2>
          <p className="text-xl text-gray-600">
            Simple, fast, and made for you
          </p>
        </motion.div>

        {/* Grid of All Screens */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {appScreens.map((screen, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden shadow-xl border-4 border-black group-hover:border-gray-700 transition-all">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center mt-6">
                <div className="inline-flex items-center justify-center w-10 h-10 bg-black text-white rounded-full font-black text-lg mb-3">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-black">{screen.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

