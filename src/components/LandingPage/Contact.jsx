"use client";
import React, { useState } from "react";
import { ChevronRight, Send, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        budget: "",
        requirement: "",
        message: ""
    });

    // status.loading will control the loading state
    const [status, setStatus] = useState({ loading: false, success: null, error: null });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (status.error) setStatus({ ...status, error: null }); // clear errors on typing
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
        window.open(whatsappLink, "_blank");
    };

    const handleSubmit = async () => {
        setStatus({ loading: true, success: null, error: null });

        try {
            const res = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const data = await res.json();
            if (data.success) {
                setStatus({ loading: false, success: "Message sent successfully!", error: null });
                setFormData({ name: "", email: "", phone: "", budget: "", requirement: "", message: "" });
            } else {
                throw new Error(data.error || "Failed to send message");
            }
        } catch (err) {
            setStatus({ loading: false, success: null, error: err.message });
        }
    };

    const inputClasses =
        "w-full p-4 rounded-xl backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 hover:bg-white/15";

    const actionButtonClasses =
        "w-full group relative flex items-center justify-center gap-3 text-white font-semibold px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 ring-1 ring-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] transition-all duration-300 overflow-hidden hover:scale-[1.02] active:scale-100 focus-visible:outline-none";

    // Common classes for status messages (success/error)
    const statusMessageClasses = "flex items-center justify-center mt-4 px-4 py-3 rounded-lg font-medium";

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
                    {/* Status Messages */}
                    {status.loading && ( // Show loading message when loading is true
                        <div className={`${statusMessageClasses} bg-blue-500/10 border border-blue-400/20 text-blue-300`}>
                            <Loader2 className="animate-spin h-6 w-6 mr-3 text-blue-200" />
                            Sending your message... Please wait.
                        </div>
                    )}
                    {status.success && !status.loading && ( // Show success only if not loading
                        <div className={`${statusMessageClasses} bg-green-500/10 border border-green-400/20 text-green-300`}>
                            <CheckCircleIcon className="h-6 w-6 mr-3 text-green-200" />
                            {status.success}
                        </div>
                    )}
                    {status.error && !status.loading && ( // Show error only if not loading
                        <div className={`${statusMessageClasses} bg-red-500/10 border border-red-400/20 text-red-300`}>
                            <XCircleIcon className="h-6 w-6 mr-3 text-red-200" />
                            {status.error}
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        {/* Send Message Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={status.loading} // Disable button when loading
                            className={`${actionButtonClasses} bg-purple-500/20 hover:bg-purple-500/30 hover:border-purple-300/40 hover:shadow-lg hover:shadow-purple-400/25 ${status.loading ? 'cursor-not-allowed opacity-70' : ''}`}
                        >
                            {status.loading ? (
                                <div className="flex items-center">
                                    <Loader2 className="animate-spin h-5 w-5 mr-3" /> {/* Loading spinner */}
                                    Sending...
                                </div>
                            ) : (
                                "Send Message"
                            )}
                        </button>
                        {/* WhatsApp Button */}
                        <button
                            type="button"
                            onClick={sendViaWhatsApp}
                            className={`${actionButtonClasses} bg-emerald-400/10 hover:bg-emerald-400/15 hover:border-emerald-300/40 hover:shadow-lg hover:shadow-emerald-400/25`}
                        >
                            <FaWhatsapp className="w-5 h-5" />
                            Chat on WhatsApp
                        </button>
                    </div>


                </div>
            </div>
        </section >
    );
};

export default Contact;
