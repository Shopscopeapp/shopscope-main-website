"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyContent() {
  return (
    <main className="relative min-h-screen bg-white text-black">
      <Navigation />
      
      <div className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6"
            >
              <Shield className="text-white" size={32} />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: December 2024</p>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <div className="glass rounded-3xl p-8 md:p-12 border border-black/10 space-y-8">
              <section>
                <h2 className="text-3xl font-bold mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to ShopScope ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By accessing or using ShopScope, you agree to this Privacy Policy. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">2. Information We Collect</h2>
                <h3 className="text-2xl font-semibold mb-3 mt-6">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  We collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Join our waitlist</li>
                  <li>Submit a brand application</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Contact us for support</li>
                  <li>Participate in surveys or promotions</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This information may include: name, email address, phone number, company name, and any other information you choose to provide.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you visit our website, we automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring URLs</li>
                  <li>Pages viewed and time spent on pages</li>
                  <li>Device identifiers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>To provide, maintain, and improve our services</li>
                  <li>To process your waitlist registration and notify you of updates</li>
                  <li>To review and process brand partnership applications</li>
                  <li>To send you marketing and promotional communications (with your consent)</li>
                  <li>To respond to your inquiries and provide customer support</li>
                  <li>To analyze usage patterns and improve user experience</li>
                  <li>To detect, prevent, and address technical issues or fraud</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">4. How We Share Your Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li><strong>Service Providers:</strong> We may share information with third-party vendors who perform services on our behalf (e.g., email service providers, analytics providers)</li>
                  <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred</li>
                  <li><strong>Legal Requirements:</strong> We may disclose information if required by law or to protect our rights and safety</li>
                  <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">5. Cookies and Tracking Technologies</h2>
                <p className="text-gray-700 leading-relaxed">
                  We use cookies and similar tracking technologies to collect and track information about your browsing activities. You can control cookies through your browser settings. However, disabling cookies may affect your ability to use certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">6. Data Security</h2>
                <p className="text-gray-700 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">7. Your Privacy Rights</h2>
                <p className="text-gray-700 leading-relaxed">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Opt-Out:</strong> Opt-out of marketing communications</li>
                  <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  To exercise these rights, please contact us at{" "}
                  <a href="mailto:privacy@shopscope.app" className="text-black font-semibold underline">
                    privacy@shopscope.app
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">8. Children's Privacy</h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">9. International Data Transfers</h2>
                <p className="text-gray-700 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">11. Contact Us</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-black/5 rounded-xl">
                  <p className="font-semibold mb-2">ShopScope</p>
                  <p className="text-gray-700">Email: <a href="mailto:privacy@shopscope.app" className="text-black underline">privacy@shopscope.app</a></p>
                  <p className="text-gray-700">General Inquiries: <a href="mailto:hello@shopscope.app" className="text-black underline">hello@shopscope.app</a></p>
                </div>
              </section>
            </div>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-black transition-colors font-medium"
            >
              ← Back to Home
            </a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

