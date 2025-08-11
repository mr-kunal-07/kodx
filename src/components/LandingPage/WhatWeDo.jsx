"use client";

import { ArrowRight, ChevronRight, Palette, Code2, Smartphone } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Branding & Logo Design",
        desc: "We craft memorable brand identities with impactful logos, color palettes, and visual guidelines that make you stand out.",
        button: "Let's Build Your Brand",
        icon: <Palette className="w-8 h-8 text-white" />,
    },
    {
        title: "Website Design & Development",
        desc: "Modern, responsive, and conversion-focused websites tailored to your business needs — from landing pages to full e-commerce platforms.",
        button: "See Our Web Projects",
        icon: <Code2 className="w-8 h-8 text-white" />,
    },
    {
        title: "UI/UX Design for Web & Mobile",
        desc: "Intuitive, user-friendly, and visually stunning designs that enhance user experience and increase engagement.",
        button: "Explore Our UI/UX Work",
        icon: <Smartphone className="w-8 h-8 text-white" />,
    },
];

export default function WhatWeDo() {
    return (
        <section className="w-full py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading & Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12 text-center sm:text-left">
                    <div>
                        <h2 className="text-3xl sm:text-5xl uppercase underline-offset-9 font-bold text-white mb-3">
                            What We Do
                        </h2>
                        <p className="text-gray-200 max-w-2xl text-sm sm:text-xl">
                            We deliver end-to-end creative, marketing, and technology solutions
                            that help businesses grow, connect, and succeed — anywhere in the world.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="group relative flex items-center gap-1 text-white px-5 py-2 rounded-full border border-purple-400/50
            hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:ring-1 hover:ring-purple-300 transition duration-300 overflow-hidden"
                    >
                        {/* Shine effect */}
                        <div className="absolute h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 -left-10 -rotate-45 blur-sm 
            group-hover:left-[150%] transition-all duration-500 group-hover:delay-200" />
                        See All
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="relative rounded-xl border border-white/20 p-4 sm:p-6 
              flex flex-row sm:flex-col
              items-center sm:items-center text-left sm:text-center
              backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 shadow-lg
              hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] transition duration-300
              min-h-[80px] sm:min-h-[320px]"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center rounded-xl bg-white/20 
              mr-4 sm:mr-0 sm:mb-4 border border-white/30 flex-shrink-0">
                                {service.icon}
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 sm:flex-none flex flex-col sm:items-center">
                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-3">
                                    {service.title}
                                </h3>

                                {/* Description - Hidden on mobile, shown on tablet+ */}
                                <p className="hidden sm:block text-gray-200 text-sm mb-6 leading-relaxed">
                                    {service.desc}
                                </p>

                                {/* Button - Hidden on mobile, shown on tablet+ */}
                                <Link
                                    href="/services"
                                    className="hidden sm:flex group relative items-center gap-1 text-white px-5 py-2 rounded-full border border-purple-400/50
                    hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:ring-1 hover:ring-purple-300 transition duration-300 overflow-hidden"
                                >
                                    <div className="absolute h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 -left-10 -rotate-45 blur-sm 
                    group-hover:left-[150%] transition-all duration-500 group-hover:delay-200" />
                                    {service.button}
                                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
