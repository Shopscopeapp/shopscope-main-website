"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const appScreens = [
  { image: "/images/app-screens/MAINPAGE.png", title: "Discover", color: "from-purple-500/20 to-pink-500/20" },
  { image: "/images/app-screens/SWIPEFEATURE.png", title: "Swipe", color: "from-blue-500/20 to-cyan-500/20" },
  { image: "/images/app-screens/CART.png", title: "Shop", color: "from-green-500/20 to-emerald-500/20" },
  { image: "/images/app-screens/PAYOUTS.webp", title: "Save", color: "from-orange-500/20 to-red-500/20" },
];

// OPTION 1: MINIMALIST HORIZONTAL SCROLL
export default function AppShowcaseOption1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % appScreens.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative py-32 px-6 overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-20"
        >
          <h2 className="text-6xl md:text-7xl font-black mb-4 tracking-tight">
            The App
          </h2>
        </motion.div>

        {/* Horizontal Scroll Display */}
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar">
            {appScreens.map((screen, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.2 }}
                className="flex-shrink-0 w-[300px] snap-center"
              >
                <div className="relative aspect-[9/19.5] rounded-3xl overflow-hidden">
                  <img
                    src={screen.image}
                    alt={screen.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-center mt-4 text-xl font-bold">{screen.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

