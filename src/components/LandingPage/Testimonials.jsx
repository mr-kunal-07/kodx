"use client";

import React from "react";
import { motion } from "framer-motion";

const testimonials = [
    {
        quote:
            "This service completely exceeded my expectations. The process was smooth, and the results were amazing!",
        name: "John Doe",
        title: "Founder, Example Co.",
    },
    {
        quote:
            "I’ve tried many solutions before, but this one stands out. Exceptional quality and fantastic support!",
        name: "Jane Smith",
        title: "Marketing Manager, Acme Inc.",
    },
    {
        quote:
            "Fast, reliable, and exactly what I needed. Highly recommend to anyone looking for top-notch service.",
        name: "David Wilson",
        title: "Entrepreneur",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3, duration: 0.5, ease: "easeOut" },
    }),
    hover: {
        scale: 1.05,
        boxShadow: "0 10px 20px rgba(255, 255, 255, 0.3)",
        transition: { duration: 0.3 },
    },
};

const Testimonials = () => {
    return (
        <section
            className="min-h-screen top-0 flex items-center justify-center bg-cover bg-center px-6"
        >
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-lg">
                    What Our Clients Say
                </h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            variants={cardVariants}
                            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg cursor-pointer"
                        >
                            <p className="text-white/90 italic mb-4">"{t.quote}"</p>
                            <h4 className="font-semibold text-white">{t.name}</h4>
                            <span className="text-sm text-white/70">{t.title}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
