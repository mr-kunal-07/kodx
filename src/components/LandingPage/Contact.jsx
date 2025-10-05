"use client";
import React, { useState, useCallback } from "react";
import { ChevronDown, Send, Loader2, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        requirement: "",
        message: ""
    });

    const [status, setStatus] = useState({ loading: false, success: null, error: null });
    const [touched, setTouched] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status.error) setStatus(prev => ({ ...prev, error: null }));
    }, [status.error]);

    const handleBlur = useCallback((e) => {
        setTouched(prev => ({ ...prev, [e.target.name]: true }));
    }, []);

    const sendViaWhatsApp = useCallback(() => {
        const message = `*New Project Inquiry*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Budget:* ${formData.budget}\n*Requirement:* ${formData.requirement}\n\n*Message:*\n${formData.message}`.trim();
        const whatsappLink = `https://wa.me/9920655685?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, "_blank");
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.message) {
            setStatus({ loading: false, success: null, error: "Please fill in all required fields" });
            return;
        }

        setStatus({ loading: true, success: null, error: null });

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            const data = await res.json();

            if (data.success) {
                setStatus({ loading: false, success: "Message sent successfully! I'll get back to you soon.", error: null });
                setFormData({ name: "", email: "", phone: "", budget: "", requirement: "", message: "" });
                setTouched({});
            } else {
                throw new Error(data.error || "Failed to send message");
            }
        } catch (err) {
            setStatus({ loading: false, success: null, error: err.message || "Something went wrong. Please try again." });
        }
    };

    const inputClasses = "w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:border-purple-400/50 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:bg-white/10 hover:border-white/20";

    return (
        <section className="flex items-center justify-center px-4 py-8 sm:py-12 md:py-16 min-h-screen">
            <div className="w-full max-w-4xl">
                {/* Glass Card */}
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl shadow-md sm:shadow-2xl overflow-hidden backdrop-blur-md sm:backdrop-blur-2xl">
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10 pointer-events-none" />

                    <div className="relative p-6 sm:p-8 md:p-12">
                        {/* Header */}
                        <div className="text-center space-y-4 mb-8 sm:mb-10">
                            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl shadow-md sm:shadow-lg mb-3">
                                <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                                Let's Create Something
                                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                    Amazing Together 🚀
                                </span>
                            </h2>
                            <p className="text-gray-300/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                                Share your project details and I'll respond within <span className="font-semibold text-purple-300">24 hours</span>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                            {/* Name + Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    required
                                    className={inputClasses}
                                    aria-required="true"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={inputClasses}
                                />
                            </div>

                            {/* Phone + Budget */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Enter your phone number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={inputClasses}
                                />
                                <input
                                    type="text"
                                    name="budget"
                                    placeholder="Enter your budget(USD)"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={inputClasses}
                                />
                            </div>

                            {/* Service Type */}
                            <div className="relative">
                                <select
                                    name="requirement"
                                    value={formData.requirement}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={`${inputClasses} appearance-none pr-12 cursor-pointer`}
                                >
                                    <option className="bg-gray-900 text-white" value="">Select a requirement</option>
                                    <option className="bg-gray-900 text-white" value="Web Development">Web Development</option>
                                    <option className="bg-gray-900 text-white" value="E-commerce">E-commerce Solution</option>
                                    <option className="bg-gray-900 text-white" value="Web Design">Web Design</option>
                                    <option className="bg-gray-900 text-white" value="Mobile App">Mobile App Development</option>
                                    <option className="bg-gray-900 text-white" value="Branding">Branding & Identity</option>
                                    <option className="bg-gray-900 text-white" value="Consultation">Free Consultation</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                    <ChevronDown className="w-5 h-5 text-white/60" />
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                name="message"
                                placeholder="Brief description of your project..."
                                value={formData.message}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required
                                rows={5}
                                className={`${inputClasses} resize-none min-h-[120px]`}
                                aria-required="true"
                            ></textarea>

                            {/* Status Messages */}
                            {status.loading && (
                                <div className="flex items-center justify-center px-4 py-3.5 rounded-xl bg-blue-500/10 border border-blue-400/30 text-blue-200 backdrop-blur-sm animate-pulse">
                                    <Loader2 className="animate-spin h-5 w-5 mr-3" />
                                    <span className="font-medium">Sending your message...</span>
                                </div>
                            )}
                            {status.success && !status.loading && (
                                <div className="flex items-center px-4 py-3.5 rounded-xl bg-green-500/10 border border-green-400/30 text-green-200 backdrop-blur-sm animate-fadeIn">
                                    <CheckCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                                    <span className="font-medium">{status.success}</span>
                                </div>
                            )}
                            {status.error && !status.loading && (
                                <div className="flex items-center px-4 py-3.5 rounded-xl bg-red-500/10 border border-red-400/30 text-red-200 backdrop-blur-sm animate-fadeIn">
                                    <XCircleIcon className="h-5 w-5 mr-3 flex-shrink-0" />
                                    <span className="font-medium">{status.error}</span>
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                                <button
                                    type="submit"
                                    disabled={status.loading}
                                    className="flex-1 group relative flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md sm:shadow-lg transition-all duration-300 sm:hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
                                >
                                    {status.loading ? (
                                        <>
                                            <Loader2 className="animate-spin h-5 w-5" />
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                <button
                                    type="button"
                                    onClick={sendViaWhatsApp}
                                    disabled={status.loading}
                                    className="flex-1 group relative flex items-center justify-center gap-2 text-white font-semibold px-6 py-3.5 sm:py-4 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-400/30 shadow-md sm:shadow-lg sm:hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 backdrop-blur-sm"
                                >
                                    <FaWhatsapp className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    <span className="hidden sm:inline">Chat on WhatsApp</span>
                                    <span className="sm:hidden">WhatsApp</span>
                                </button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-gray-400">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span>Usually replies in 2-4 hours</span>
                                </div>
                                <div className="hidden sm:block w-px h-4 bg-white/20" />
                                <div className="flex items-center gap-2">
                                    <span>🔒</span>
                                    <span>Your data is secure</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @media (max-width: 768px) {
          .animate-gradient {
            animation: none;
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
        </section>
    );
};

export default Contact;
