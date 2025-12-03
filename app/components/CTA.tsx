"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Download, Smartphone } from "lucide-react";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="get-started" className="relative py-32 px-6 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 0, 0, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />

      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
            className="glass rounded-[3rem] p-12 md:p-20 text-center border border-black/20 relative overflow-hidden"
          >
          {/* Floating elements */}
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 border border-black/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-10 left-10 w-16 h-16 border border-black/20 rounded-full"
            animate={{
              y: [0, 20, 0],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-black rounded-3xl mb-8"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Smartphone className="text-white" size={40} />
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Launch Day Is
              <br />
              <span className="text-gradient">Coming Soon</span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We're putting the final touches on ShopScope. Join the waitlist to be the first to know when we launch and get exclusive early access perks.
            </p>

            {/* Coming Soon Notice */}
            <div className="flex flex-col gap-4 justify-center mb-8">
              <motion.div
                className="glass rounded-2xl p-6 border border-black/20 max-w-md mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <Smartphone className="text-white" size={24} />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Mobile Apps</h3>
                    <p className="text-sm text-gray-600">iOS & Android</p>
                  </div>
                </div>
                <div className="bg-black/5 rounded-xl px-4 py-2 text-center">
                  <span className="text-sm font-bold">Launching Q1 2026</span>
                </div>
              </motion.div>
            </div>

            {/* Web App Link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-gray-600 text-sm mb-4">
                Questions? Email us at{" "}
                <a href="mailto:info@shopscope.app" className="text-black font-semibold underline">
                  info@shopscope.app
                </a>
              </p>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors group font-medium"
              >
                Join the waitlist
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

