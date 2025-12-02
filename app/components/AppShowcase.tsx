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
    <section ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 glass rounded-full text-sm border border-black/10"
          >
            <Smartphone size={16} className="text-black" />
            <span className="font-medium">Experience the App</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Your New Favorite Way
            <br />
            to <span className="text-gradient">Shop Fashion</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Swipe, discover, and shop from multiple brands in one seamless experience
          </p>
        </motion.div>

        {/* Main Showcase */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Phone Mockup with Screens */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative lg:order-2"
            >
              {/* Floating screen mockup */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative mx-auto max-w-[300px] md:max-w-[350px]"
              >
                {/* Screen container - no phone frame */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[9/19.5]">
                  <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                      key={currentIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        scale: { duration: 0.3 },
                        rotateY: { duration: 0.3 },
                      }}
                      className="absolute inset-0"
                      style={{ perspective: 1000 }}
                    >
                      <img
                        src={appScreens[currentIndex].image}
                        alt={appScreens[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Enhanced glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${appScreens[currentIndex].color} rounded-[3rem] blur-3xl -z-10`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                {/* Secondary glow */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-tl ${appScreens[currentIndex].color} rounded-[3rem] blur-2xl -z-10`}
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-10 w-20 h-20 bg-black/5 rounded-full blur-xl"
              />
              <motion.div
                animate={{
                  y: [0, 30, 0],
                  rotate: [0, -10, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-10 -left-10 w-32 h-32 bg-black/5 rounded-full blur-xl"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:order-1 space-y-8"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-black rounded-2xl mb-6">
                    <span className="text-white text-xl font-black">
                      {currentIndex + 1}
                    </span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-black mb-4">
                    {appScreens[currentIndex].title}
                  </h3>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {appScreens[currentIndex].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center gap-4">
                <motion.button
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center magnetic-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft size={24} />
                </motion.button>

                <div className="flex gap-2">
                  {appScreens.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentIndex ? 1 : -1);
                        setCurrentIndex(index);
                      }}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? "w-8 bg-black"
                          : "w-2 bg-black/20 hover:bg-black/40"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>

                <motion.button
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center magnetic-button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight size={24} />
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
          className="mt-20 flex flex-wrap justify-center gap-4"
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
              className="glass px-6 py-3 rounded-full border border-black/10 hover:border-black/30 transition-all"
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

