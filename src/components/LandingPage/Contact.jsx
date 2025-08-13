"use client";
import React, { useState } from "react";
import { ChevronRight, MessageCircle, Send } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        requirement: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendViaWhatsApp = () => {
        const message = `
*New Project Inquiry*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Budget:* ${formData.budget}
*Requirement:* ${formData.requirement}

*Message:*
${formData.message}
        `.trim();

        const whatsappLink = `https://wa.me/9920655685?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    };


    const inputClasses =
        "w-full p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:bg-white/15";

    const whatsappButtonClasses =
        "w-full group relative flex items-center justify-center gap-3 text-white font-semibold px-6 py-4 rounded-2xl backdrop-blur-xl bg-emerald-400/10 border border-white/20 ring-1 ring-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] hover:bg-emerald-400/15 hover:border-emerald-300/40 hover:shadow-lg hover:shadow-emerald-400/25 transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50 focus-visible:border-emerald-300/50";

    return (
        <section className="flex items-center justify-center p-4 sm:p-8 min-h-screen">
            <div className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-3xl p-8 sm:p-12 w-full max-w-3xl shadow-2xl shadow-purple-500/10">
                {/* Heading */}
                <div className="text-center space-y-4 mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                        <Send className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text ">
                        Let's Create Something Amazing 🚀
                    </h2>
                    <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                        Ready to bring your vision to life? Share your project details and I'll get back to you within 24 hours.
                    </p>
                </div>

                <div className="space-y-6">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Full Name *</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={inputClasses}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    {/* Phone + Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91"
                                value={formData.phone}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-white/80 text-sm font-medium">Project Budget</label>
                            <input
                                type="text"
                                name="budget"
                                placeholder="$1,000 - $10,000"
                                value={formData.budget}
                                onChange={handleChange}
                                className={inputClasses}
                            />
                        </div>
                    </div>

                    {/* Service Type */}
                    <div className="space-y-2">
                        <label className="text-white/80 text-sm font-medium">Service Required</label>
                        <div className="relative">
                            <select
                                name="requirement"
                                value={formData.requirement}
                                onChange={handleChange}
                                className={`${inputClasses} appearance-none pr-12 cursor-pointer`}
                            >
                                <option className="bg-black text-white" value="">Select a service</option>
                                <option className="bg-black text-white" value="Web Design">🎨 Web Design</option>
                                <option className="bg-black text-white" value="Web Development">💻 Web Development</option>
                                <option className="bg-black text-white" value="UI/UX Design">🎯 UI/UX Design</option>
                                <option className="bg-black text-white" value="Mobile App">📱 Mobile App Development</option>
                                <option className="bg-black text-white" value="Branding">🏷️ Branding & Identity</option>
                                <option className="bg-black text-white" value="E-commerce">🛒 E-commerce Solution</option>
                                <option className="bg-black text-white" value="Consultation">💡 Consultation</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center">
                                <ChevronRight className="w-5 h-5 text-white/60" />
                            </div>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                        <label className="text-white/80 text-sm font-medium">Project Details *</label>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className={`${inputClasses} resize-none`}
                        ></textarea>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4 pt-4">
                        <button
                            type="button"
                            onClick={sendViaWhatsApp}
                            className={whatsappButtonClasses}
                        >
                            <span aria-hidden className="absolute inset-0 rounded-2xl p-px bg-gradient-to-r from-emerald-300/40 via-white/20 to-emerald-300/40 opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
                            <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                            <span aria-hidden className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-300" />
                            <span aria-hidden className="absolute right-3 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-emerald-300/80 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse" />
                            <span className="relative z-10 flex items-center gap-3">
                                <FaWhatsapp className="w-5 h-5" />
                                Chat on WhatsApp
                            </span>
                        </button>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center text-sm text-white/60">
                        <div>
                            <div className="font-semibold text-white/80">Response Time</div>
                            <div>Within 24 hours</div>
                        </div>
                        <div>
                            <div className="font-semibold text-white/80">Free Consultation</div>
                            <div>30-minute call</div>
                        </div>
                        <div>
                            <div className="font-semibold text-white/80">Project Types</div>
                            <div>Web, Mobile, Design</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
