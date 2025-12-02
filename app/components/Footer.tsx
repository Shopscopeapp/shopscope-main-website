"use client";

import { motion } from "framer-motion";
import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "For Brands", href: "#for-brands" },
    { name: "Join Waitlist", href: "#" },
  ],
  Company: [
    { name: "About", href: "#about" },
    { name: "Contact", href: "mailto:hello@shopscope.app" },
  ],
  Legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
  Social: [
    { name: "Instagram", href: "https://instagram.com/shopscope_" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/shopscope/" },
    { name: "TikTok", href: "https://tiktok.com/@shopscope_" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="mb-4">
                <span className="text-2xl font-black tracking-tighter">
                  SHOPSCOPE
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Connect style with discovery. The smarter way to shop fashion
                from multiple brands in one place.
              </p>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4">
              <motion.a
                href="https://instagram.com/shopscope_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/shopscope/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="https://tiktok.com/@shopscope_"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                aria-label="TikTok"
              >
                <Twitter size={18} />
              </motion.a>
              <motion.a
                href="mailto:hello@shopscope.app"
                className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-black/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.3 }}
                aria-label="Email"
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-bold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('#') && link.href !== '#about') {
                          e.preventDefault();
                          if (link.href === '#') {
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          } else {
                            const element = document.querySelector(link.href);
                            element?.scrollIntoView({ behavior: 'smooth' });
                          }
                        }
                      }}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8 mb-12 border border-black/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay in the loop</h3>
              <p className="text-gray-600">
                Get style tips, exclusive deals, and early access to new features.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-black/10 rounded-full border border-black/20 focus:border-black/40 outline-none transition-colors w-full md:w-64"
              />
              <motion.button
                className="px-6 py-3 bg-black text-white rounded-full font-semibold whitespace-nowrap magnetic-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/10">
          <p className="text-gray-600 text-sm">
            © 2025 ShopScope. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="/privacy" className="text-gray-600 hover:text-black transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-600 hover:text-black transition-colors">
              Terms of Service
            </a>
            <a href="mailto:hello@shopscope.app" className="text-gray-600 hover:text-black transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

