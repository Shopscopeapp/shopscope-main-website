"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, Building2 } from "lucide-react";
import { useRef, useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  brandName: string;
  phoneNumber: string;
  onShopify: string;
  numberOfProducts: string;
  styleOfClothing: string;
  message: string;
  agreeToPolicy: boolean;
}

export default function BrandForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    brandName: "",
    phoneNumber: "",
    onShopify: "",
    numberOfProducts: "",
    styleOfClothing: "",
    message: "",
    agreeToPolicy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/xblnykoj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          brandName: formData.brandName,
          phoneNumber: formData.phoneNumber,
          onShopify: formData.onShopify,
          numberOfProducts: formData.numberOfProducts,
          styleOfClothing: formData.styleOfClothing,
          message: formData.message,
          _subject: `New Brand Application: ${formData.brandName}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          brandName: "",
          phoneNumber: "",
          onShopify: "",
          numberOfProducts: "",
          styleOfClothing: "",
          message: "",
          agreeToPolicy: false,
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit application. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto"
      >
        <div className="glass rounded-[3rem] p-12 border border-black/20 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-white" />
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-black mb-4">
            Application Received! 🎉
          </h3>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for your interest in partnering with ShopScope. Our team will review your application and reach out within 2-3 business days.
          </p>
          <motion.button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 glass rounded-full font-semibold border border-black/20 hover:bg-black/5 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Brand
          </motion.button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="max-w-2xl mx-auto"
    >
      <div className="glass rounded-[3rem] p-8 md:p-12 border border-black/20">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Building2 className="text-white" size={32} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Are You A Brand Wanting To Join?
          </h2>
          <p className="text-gray-600">
            Onboard your brand with one click and no cost!
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">
                First name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
                className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@company.com"
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
            />
          </div>

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Your Brand name
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="Brand name"
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
            />
          </div>

          {/* Shopify */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Is Your Brand on Shopify?
            </label>
            <input
              type="text"
              name="onShopify"
              value={formData.onShopify}
              onChange={handleChange}
              placeholder="Yes"
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
            />
          </div>

          {/* Number of Products */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Number of products
            </label>
            <input
              type="text"
              name="numberOfProducts"
              value={formData.numberOfProducts}
              onChange={handleChange}
              placeholder="Number of products"
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
            />
          </div>

          {/* Style of Clothing */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Style Of Clothing
            </label>
            <input
              type="text"
              name="styleOfClothing"
              value={formData.styleOfClothing}
              onChange={handleChange}
              placeholder="Style of clothing"
              required
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message..."
              rows={4}
              className="w-full px-4 py-3 bg-white rounded-xl border border-black/10 focus:border-black/30 outline-none transition-all resize-none"
            />
          </div>

          {/* Privacy Policy */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              name="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              required
              className="mt-1 w-4 h-4 accent-black cursor-pointer"
            />
            <label className="text-sm text-gray-600">
              You agree to our friendly{" "}
              <a href="/privacy" className="text-black font-semibold underline">
                privacy policy
              </a>
              .
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            className="w-full px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg magnetic-button flex items-center justify-center gap-2 disabled:opacity-50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                />
                Submitting Application...
              </>
            ) : (
              "Submit Application"
            )}
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
}

