"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Brands", href: "#for-brands" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-4 backdrop-blur-xl" : "py-6"
        }`}
        style={{ opacity }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className={`max-w-7xl mx-auto px-6 flex items-center justify-between ${
            isScrolled ? "glass rounded-full" : ""
          }`}
          style={{ padding: isScrolled ? "1rem 2rem" : "0 1.5rem" }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-black"
          >
            <a href="/" className="flex items-center">
              <span className="text-black tracking-tighter">SHOPSCOPE</span>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-gray-700 transition-colors relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button
              onClick={scrollToTop}
              className="px-6 py-2 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-all magnetic-button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Join Waitlist
            </motion.button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu - Improved */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          y: isOpen ? 0 : "-100%"
        }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed inset-0 z-40 bg-white md:hidden"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="flex flex-col h-full pt-24 pb-12 px-6">
          {/* Navigation Items */}
          <nav className="flex-1 flex flex-col justify-center gap-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1 }}
                className="text-3xl font-black hover:text-gray-600 transition-colors border-b border-black/5 pb-4"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
            transition={{ delay: 0.3 }}
            onClick={() => {
              setIsOpen(false);
              scrollToTop();
            }}
            className="w-full px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all"
          >
            Join Waitlist
          </motion.button>

          {/* Decorative Element */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="absolute top-24 right-6 w-32 h-32 bg-black/5 rounded-full blur-3xl -z-10"
          />
        </div>
      </motion.div>
    </>
  );
}

