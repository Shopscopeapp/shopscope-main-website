"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const appScreens = [
  { image: "/images/app-screens/MAINPAGE.png", title: "Discover Your Style", desc: "Browse curated fashion" },
  { image: "/images/app-screens/SWIPEFEATURE.png", title: "Swipe to Match", desc: "Like Tinder for fashion" },
  { image: "/images/app-screens/CART.png", title: "One Cart", desc: "Multi-brand checkout" },
  { image: "/images/app-screens/PAYOUTS.webp", title: "Save Money", desc: "Automatic discounts" },
];

// OPTION 2: CENTERED WITH BIG TEXT
export default function AppShowcaseOption2() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % appScreens.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Big Centered Layout */}
        <div className="grid grid-cols-1 gap-16 items-center">
          {/* Text Above */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <h2 className="text-5xl md:text-7xl font-black mb-4">
                {appScreens[currentIndex].title}
              </h2>
              <p className="text-2xl text-gray-600">
                {appScreens[currentIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Screen in Center */}
          <div className="flex justify-center">
            <div className="relative w-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6 }}
                  className="aspect-[9/19.5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-black"
                >
                  <img
                    src={appScreens[currentIndex].image}
                    alt={appScreens[currentIndex].title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Dots Below */}
          <div className="flex justify-center gap-3">
            {appScreens.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "w-10 bg-black" : "bg-black/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

