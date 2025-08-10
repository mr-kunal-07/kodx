"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ChevronRight } from "lucide-react";

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "YOUR_SERVICE_ID",
                "YOUR_TEMPLATE_ID",
                formData,
                "YOUR_PUBLIC_KEY"
            )
            .then(
                () => {
                    alert("Your message has been sent!");
                    setFormData({
                        name: "",
                        email: "",
                        phone: "",
                        budget: "",
                        requirement: "",
                        message: ""
                    });
                },
                (error) => {
                    console.error("FAILED...", error.text);
                    alert("Failed to send message. Please try again.");
                }
            );
    };

    const inputClasses =
        "w-full p-3 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-purple-400 transition duration-300";

    return (
        <section className="flex items-center justify-center p-4 sm:p-8 min-h-screen ">
            <form
                onSubmit={sendEmail}
                className="backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl p-6 sm:p-8 w-full max-w-2xl shadow-lg space-y-6"
            >
                {/* Heading */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white">
                        Contact me to ignite your project 🚀
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base">
                        Great designs, innovative ideas, and user-centered projects.
                        <br className="hidden sm:block" />
                        Let's work together!
                    </p>
                </div>

                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={inputClasses}
                    />
                </div>

                {/* Phone */}
                <input
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                />

                {/* Budget */}
                <input
                    type="text"
                    name="budget"
                    placeholder="Enter your budget (USD)"
                    value={formData.budget}
                    onChange={handleChange}
                    className={inputClasses}
                />

                {/* Dropdown */}
                <div className="relative">
                    <select
                        name="requirement"
                        value={formData.requirement}
                        onChange={handleChange}
                        className={`${inputClasses} appearance-none pr-12 cursor-pointer 
      focus:ring-2 focus:ring-purple-400 focus:border-purple-400
      bg-black/40 text-white`}
                    >
                        <option value="" className="bg-black text-white">Select a requirement</option>
                        <option value="Web Design" className="bg-black text-white">Web Design</option>
                        <option value="Web Development" className="bg-black text-white">Web Development</option>
                        <option value="UI/UX Design" className="bg-black text-white">UI/UX Design</option>
                        <option value="Branding" className="bg-black text-white">Branding</option>
                    </select>

                    {/* Custom Dropdown Arrow */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                        <ChevronRight
                            className={`w-5 h-5 text-white transition-transform duration-300 
        ${formData.requirement ? "rotate-90" : "rotate-90"}`}
                        />
                    </div>
                </div>

                {/* Message */}
                <textarea
                    name="message"
                    placeholder="Brief description of your project"
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClasses} h-28 resize-none`}
                ></textarea>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="group relative flex items-center justify-center gap-2 text-white font-medium p-3 rounded-full border border-white/20 hover:border-purple-400 hover:shadow-lg duration-300 overflow-hidden w-full sm:w-72 mx-auto"
                >
                    {/* Shine effect */}
                    <div className="h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 absolute -left-10 -rotate-45 blur-sm group-hover:left-[150%] duration-500 group-hover:delay-100" />
                    Submit Your Request
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </button>
            </form>
        </section>
    );
};

export default Contact;
