"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, Video, Instagram, AtSign, Users, Sparkles, Tag, Building2 } from "lucide-react";
import { useRef, useState } from "react";

// Custom TikTok icon
const TikTokIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  instagram: string;
  tiktok: string;
  followerCount: string;
  contentType: string[];
  affiliatedBrands: string;
  discountCodes: string;
  whyJoin: string;
  portfolioLink: string;
  agreeToPolicy: boolean;
}

const contentOptions = [
  { id: "hauls", label: "Try-On Hauls" },
  { id: "grwm", label: "GRWM" },
  { id: "reviews", label: "Outfit Reviews" },
  { id: "styletips", label: "Style Tips" },
  { id: "subtle", label: "Subtle Integrations" },
];

const followerOptions = [
  "1K - 5K",
  "5K - 10K",
  "10K - 50K",
  "50K - 100K",
  "100K+",
];

export default function CreatorForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    instagram: "",
    tiktok: "",
    followerCount: "",
    contentType: [],
    affiliatedBrands: "",
    discountCodes: "",
    whyJoin: "",
    portfolioLink: "",
    agreeToPolicy: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleContentTypeChange = (contentId: string) => {
    setFormData(prev => ({
      ...prev,
      contentType: prev.contentType.includes(contentId)
        ? prev.contentType.filter(id => id !== contentId)
        : [...prev.contentType, contentId],
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
          type: 'Creator Application',
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          instagram: formData.instagram,
          tiktok: formData.tiktok,
          followerCount: formData.followerCount,
          contentType: formData.contentType.join(', '),
          affiliatedBrands: formData.affiliatedBrands,
          discountCodes: formData.discountCodes,
          whyJoin: formData.whyJoin,
          portfolioLink: formData.portfolioLink,
          _subject: `New Creator Application: ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          instagram: "",
          tiktok: "",
          followerCount: "",
          contentType: [],
          affiliatedBrands: "",
          discountCodes: "",
          whyJoin: "",
          portfolioLink: "",
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
        <div className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-12 border border-white/20 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle2 size={40} className="text-black" />
          </motion.div>
          <h3 className="text-3xl md:text-4xl font-black mb-4 text-white">
            You're in the running! 🎉
          </h3>
          <p className="text-xl text-gray-300 mb-6">
            We'll review your application and get back to you within 48 hours. 
            Keep an eye on your inbox!
          </p>
          <motion.button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-white/10 rounded-full font-semibold border border-white/20 hover:bg-white/20 transition-all text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Another Application
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
      <div className="bg-white/10 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-white/20">
        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4"
          >
            <Video className="text-black" size={32} />
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black mb-3 text-white">
            Apply to Join
          </h2>
          <p className="text-gray-400">
            Takes 2 minutes. We respond to every application within 48 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-white">
                First name *
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First name"
                required
                className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-white">
                Last name *
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last name"
                required
                className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white placeholder-gray-500"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@email.com"
              required
              className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white placeholder-gray-500"
            />
          </div>

          {/* Social Handles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2 text-white flex items-center gap-2">
                <Instagram size={16} />
                Instagram Handle
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                <input
                  type="text"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="yourhandle"
                  className="w-full pl-8 pr-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white placeholder-gray-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 text-white flex items-center gap-2">
                <TikTokIcon size={16} />
                TikTok Handle
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">@</span>
                <input
                  type="text"
                  name="tiktok"
                  value={formData.tiktok}
                  onChange={handleChange}
                  placeholder="yourhandle"
                  className="w-full pl-8 pr-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Follower Count */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white flex items-center gap-2">
              <Users size={16} />
              Total Follower Count (across platforms) *
            </label>
            <select
              name="followerCount"
              value={formData.followerCount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white appearance-none cursor-pointer"
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.5rem' }}
            >
              <option value="" className="bg-black">Select range</option>
              {followerOptions.map(option => (
                <option key={option} value={option} className="bg-black">{option}</option>
              ))}
            </select>
          </div>

          {/* Content Type */}
          <div>
            <label className="block text-sm font-bold mb-3 text-white flex items-center gap-2">
              <Sparkles size={16} />
              What type of content do you create? *
            </label>
            <div className="flex flex-wrap gap-3">
              {contentOptions.map(option => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleContentTypeChange(option.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    formData.contentType.includes(option.id)
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Affiliated Brands */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white flex items-center gap-2">
              <Building2 size={16} />
              Brands you're affiliated with (optional)
            </label>
            <textarea
              name="affiliatedBrands"
              value={formData.affiliatedBrands}
              onChange={handleChange}
              placeholder="e.g. Princess Polly, Hello Molly, Showpo, The Iconic..."
              rows={2}
              className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all resize-none text-white placeholder-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">List any brands you currently have affiliate relationships with</p>
          </div>

          {/* Discount Codes */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white flex items-center gap-2">
              <Tag size={16} />
              Your discount codes (optional)
            </label>
            <textarea
              name="discountCodes"
              value={formData.discountCodes}
              onChange={handleChange}
              placeholder="e.g. SARAH15 (Princess Polly), SARAH10 (Hello Molly)..."
              rows={2}
              className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all resize-none text-white placeholder-gray-500"
            />
            <p className="text-xs text-gray-500 mt-1">We can integrate your existing codes into ShopScope for extra earnings</p>
          </div>

          {/* Portfolio Link */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white">
              Link to your best content (optional)
            </label>
            <input
              type="url"
              name="portfolioLink"
              value={formData.portfolioLink}
              onChange={handleChange}
              placeholder="https://tiktok.com/@you/video/..."
              className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all text-white placeholder-gray-500"
            />
          </div>

          {/* Why Join */}
          <div>
            <label className="block text-sm font-bold mb-2 text-white">
              Why do you want to join ShopScope? (optional)
            </label>
            <textarea
              name="whyJoin"
              value={formData.whyJoin}
              onChange={handleChange}
              placeholder="Tell us a bit about yourself and why you'd be a great fit..."
              rows={3}
              className="w-full px-4 py-3 bg-white/10 rounded-xl border border-white/20 focus:border-white/40 outline-none transition-all resize-none text-white placeholder-gray-500"
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
              className="mt-1 w-4 h-4 accent-white cursor-pointer"
            />
            <label className="text-sm text-gray-400">
              I agree to ShopScope's{" "}
              <a href="/privacy" className="text-white font-semibold underline">
                privacy policy
              </a>
              {" "}and consent to being contacted about creator opportunities.
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading || formData.contentType.length === 0}
            className="w-full px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg magnetic-button flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isLoading ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-6 h-6 border-2 border-black border-t-transparent rounded-full"
                />
                Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </motion.button>

          <p className="text-center text-sm text-gray-500">
            We review every application and respond within 48 hours.
          </p>
        </form>
      </div>
    </motion.div>
  );
}
