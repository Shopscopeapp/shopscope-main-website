"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { FileText } from "lucide-react";

export default function TermsContent() {
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
              <FileText className="text-white" size={32} />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-black mb-4">Terms of Service</h1>
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
                <h2 className="text-3xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and ShopScope ("Company," "we," "us," or "our") governing your access to and use of the ShopScope website, mobile application, and services (collectively, the "Services").
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">2. Description of Services</h2>
                <p className="text-gray-700 leading-relaxed">
                  ShopScope is a fashion discovery platform that connects shoppers with curated fashion items from multiple brands. Our Services include:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>A swipe-based interface for discovering fashion products</li>
                  <li>Personalised style recommendations</li>
                  <li>Multi-brand shopping cart functionality</li>
                  <li>Automatic discount application</li>
                  <li>Style collections and wishlists</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  The Services are currently in development. By joining our waitlist, you express interest in early access when we launch.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">3. Eligibility</h2>
                <p className="text-gray-700 leading-relaxed">
                  You must be at least 18 years old to use our Services. By using the Services, you represent and warrant that you meet this age requirement and have the legal capacity to enter into these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">4. User Accounts</h2>
                <h3 className="text-2xl font-semibold mb-3 mt-6">4.1 Account Creation</h3>
                <p className="text-gray-700 leading-relaxed">
                  To access certain features of the Services, you may need to create an account. You agree to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Provide accurate, current, and complete information</li>
                  <li>Maintain and update your information</li>
                  <li>Keep your password secure and confidential</li>
                  <li>Notify us immediately of any unauthorised access</li>
                </ul>

                <h3 className="text-2xl font-semibold mb-3 mt-6">4.2 Account Responsibility</h3>
                <p className="text-gray-700 leading-relaxed">
                  You are responsible for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to comply with these security obligations.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">5. Prohibited Activities</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree not to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>Use the Services for any illegal purpose or in violation of any laws</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation</li>
                  <li>Interfere with or disrupt the Services or servers</li>
                  <li>Attempt to gain unauthorised access to any part of the Services</li>
                  <li>Use automated systems (bots, scrapers) without our permission</li>
                  <li>Transmit viruses, malware, or other harmful code</li>
                  <li>Collect or harvest information about other users</li>
                  <li>Engage in any activity that could harm our reputation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">6. Intellectual Property Rights</h2>
                <h3 className="text-2xl font-semibold mb-3 mt-6">6.1 Our Content</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Services and all content, features, and functionality (including but not limited to text, graphics, logos, images, and software) are owned by ShopScope and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h3 className="text-2xl font-semibold mb-3 mt-6">6.2 Limited License</h3>
                <p className="text-gray-700 leading-relaxed">
                  We grant you a limited, non-exclusive, non-transferable license to access and use the Services for personal, non-commercial purposes. This license does not include any right to resell or commercial use of the Services or content.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">7. Brand Partnerships</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you are a brand interested in partnering with ShopScope:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>You must provide accurate information about your brand and products</li>
                  <li>You grant us a license to display your products and brand materials</li>
                  <li>You are responsible for the accuracy of product information</li>
                  <li>Partnership terms will be outlined in a separate agreement</li>
                  <li>We operate on a commission-based model (pay-per-sale)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">8. Purchases and Payments</h2>
                <p className="text-gray-700 leading-relaxed">
                  When the Services launch, purchases will be subject to the following:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>All prices are in USD unless otherwise stated</li>
                  <li>We reserve the right to change prices at any time</li>
                  <li>You agree to pay all charges incurred by your account</li>
                  <li>Payment is processed securely through third-party providers</li>
                  <li>Refunds and returns are subject to individual brand policies</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">9. Disclaimers</h2>
                <p className="text-gray-700 leading-relaxed uppercase font-semibold">
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  We do not warrant that:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-700">
                  <li>The Services will be uninterrupted, secure, or error-free</li>
                  <li>The results from using the Services will be accurate or reliable</li>
                  <li>Any errors in the Services will be corrected</li>
                  <li>The Services will meet your specific requirements</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">10. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, SHOPSCOPE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">11. Indemnification</h2>
                <p className="text-gray-700 leading-relaxed">
                  You agree to indemnify, defend, and hold harmless ShopScope and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses arising out of or in any way connected with your access to or use of the Services or your violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">12. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason, including if you breach these Terms. Upon termination, your right to use the Services will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">13. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions. Any disputes arising from these Terms or the Services shall be subject to the exclusive jurisdiction of the courts in [Your Jurisdiction].
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">14. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the Services after changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">15. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-4 p-6 bg-black/5 rounded-xl">
                  <p className="font-semibold mb-2">ShopScope</p>
                  <p className="text-gray-700">Email: <a href="mailto:legal@shopscope.app" className="text-black underline">legal@shopscope.app</a></p>
                  <p className="text-gray-700">General Inquiries: <a href="mailto:info@shopscope.app" className="text-black underline">info@shopscope.app</a></p>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4">16. Entire Agreement</h2>
                <p className="text-gray-700 leading-relaxed">
                  These Terms constitute the entire agreement between you and ShopScope regarding the Services and supersede all prior agreements and understandings, whether written or oral.
                </p>
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

