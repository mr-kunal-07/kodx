"use client";

import { ArrowRight, ChevronRight, Palette, Code2, Smartphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
    {
        title: "Branding & Logo Design",
        desc: "We craft memorable brand identities with impactful logos, color palettes, and visual guidelines that make you stand out.",
        button: "Let's Build Your Brand",
        icon: <Palette className="w-8 h-8 text-white" />,
        mobileIcon: "/icons/xd-plain.svg",
        user: "Visual Identity"
    },
    {
        title: "Website Design & Development",
        desc: "Modern, responsive, and conversion-focused websites tailored to your business needs — from landing pages to full e-commerce platforms.",
        button: "See Our Web Projects",
        icon: <Code2 className="w-8 h-8 text-white" />,
        mobileIcon: "/icons/figma.svg",
        user: "Web Solutions"
    },
    {
        title: "UI/UX Design for Web & Mobile",
        desc: "Intuitive, user-friendly, and visually stunning designs that enhance user experience and increase engagement.",
        button: "Explore Our UI/UX Work",
        icon: <Smartphone className="w-8 h-8 text-white" />,
        mobileIcon: "/icons/Nextjs.svg",
        user: "User Experience"
    },
];

// SocialCard component for mobile
function SocialCard({ name, user, icon }) {
    return (
        <Link
            href="#"
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md
            hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
            transition-all duration-300 group"
        >
            <Image
                src={icon}
                alt={name}
                width={32}
                height={32}
                className="object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div className="flex-1">
                <p className="text-white font-medium text-sm">{name}</p>
                <p className="text-xs text-white/60">{user}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-300" />
        </Link>
    );
}

export default function WhatWeDo() {
    return (
        <section className="w-full py-10 px-4 sm:px-8 relative overflow-hidden">
           

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Heading & Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mb-5 text-center sm:text-left">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-sm font-medium">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                            Our Services
                        </div>
                        <h2 className="text-4xl sm:text-6xl font-bold text-white leading-tight">
                            What We{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Do
                            </span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl text-lg sm:text-xl leading-relaxed">
                            We deliver end-to-end creative, marketing, and technology solutions
                            that help businesses grow, connect, and succeed — anywhere in the world.
                        </p>
                    </div>
                    <Link
                        href="/services"
                        className="group relative flex items-center gap-2 text-white px-6 py-3 rounded-full border border-purple-400/50
                        bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm
                        hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:ring-2 hover:ring-purple-300/50 
                        transition-all duration-300 overflow-hidden transform hover:scale-105"
                    >
                        {/* Shine effect */}
                        <div className="absolute h-[120px] w-12 bg-gradient-to-r from-white/10 via-white/50 -left-12 -rotate-45 blur-sm 
                        group-hover:left-[150%] transition-all duration-700 group-hover:delay-200" />
                        <span className="font-medium">See All Services</span>
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Desktop Cards */}
                <div className="hidden sm:grid gap-6 grid-cols-1 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative rounded-2xl border border-white/20 p-8 
                            backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 
                            hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-500
                            hover:border-purple-400/40 hover:scale-105 hover:-translate-y-2
                            min-h-[400px] flex flex-col"
                        >
                            {/* Background glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            {/* Icon */}
                            <div className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                            border border-white/30 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <div className="flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-300 text-base leading-relaxed mb-8 flex-1">
                                    {service.desc}
                                </p>
                                <Link
                                    href="/services"
                                    className="group/btn relative flex items-center gap-2 text-white px-6 py-3 rounded-full border border-purple-400/50
                                    bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm
                                    hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:ring-2 hover:ring-purple-300/50 
                                    transition-all duration-300 overflow-hidden w-fit"
                                >
                                    <div className="absolute h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 -left-10 -rotate-45 blur-sm 
                                    group-hover/btn:left-[150%] transition-all duration-500 group-hover/btn:delay-200" />
                                    {service.button}
                                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden space-y-4">
                    {services.map((service, index) => (
                        <SocialCard
                            key={index}
                            name={service.title}
                            user={service.user}
                            icon={service.mobileIcon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
