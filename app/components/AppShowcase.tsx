"use client";

import { motion, useInView, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Smartphone } from "lucide-react";

const appScreens = [
  {
    image: "/images/app-screens/MAINPAGE.png",
    title: "Discover Your Style",
    description: "Browse through thousands of curated fashion pieces tailored to your unique taste",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    image: "/images/app-screens/SWIPEFEATURE.png",
    title: "Swipe to Match",
    description: "Like Tinder, but for fashion. Swipe right on pieces you love, left on those you don't",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    image: "/images/app-screens/CART.png",
    title: "Unified Shopping Cart",
    description: "Add items from multiple brands to one cart. Checkout once with automatic discounts",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    image: "/images/app-screens/PAYOUTS.webp",
    title: "Track Your Savings",
    description: "See your savings grow with automatic discounts and exclusive member deals",
    color: "from-orange-500/20 to-red-500/20",
  },
];

export default function AppShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % appScreens.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % appScreens.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + appScreens.length) % appScreens.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <section ref={ref} className="relative py-20 md:py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-black/[0.02] to-white">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-black/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4 md:mb-6">
            See It In <span className="text-gradient">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the future of fashion shopping
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Screen Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:order-2"
            >
              {/* Screen mockup */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto max-w-[280px] md:max-w-[320px]"
              >
                {/* Screen container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[9/19.5] border-4 border-black">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 250, damping: 25 },
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.4 },
                      }}
                      className="absolute inset-0"
                    >
                      <img
                        src={appScreens[currentIndex].image}
                        alt={appScreens[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${appScreens[currentIndex].color} rounded-3xl blur-3xl opacity-40 -z-10`}
                  animate={{
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:order-1 space-y-6 text-center lg:text-left"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="text-3xl md:text-4xl font-black mb-3">
                    {appScreens[currentIndex].title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                    {appScreens[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <motion.button
                  onClick={prevSlide}
                  className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Previous screen"
                >
                  <ChevronLeft size={28} />
                </motion.button>

                <div className="flex gap-2">
                  {appScreens.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-3 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-10 bg-black"
                          : "w-3 bg-black/20 hover:bg-black/40"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      aria-label={`Go to screen ${index + 1}`}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextSlide}
                  className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label="Next screen"
                >
                  <ChevronRight size={28} />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-16 md:mt-20 flex flex-wrap justify-center gap-3 md:gap-4"
        >
          {[
            "Swipe Interface",
            "Multi-Brand Cart",
            "Auto Discounts",
            "Style Collections",
            "Instant Checkout",
          ].map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="glass px-5 md:px-6 py-2 md:py-3 rounded-full border border-black/10 hover:border-black/30 transition-all text-sm md:text-base"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-semibold">{feature}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

