"use client";

import { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

const stackIcons = [
    { name: "React", src: "/icons/React.svg" },
    { name: "Vite", src: "/icons/vite.svg" },
    { name: "Redux", src: "/icons/redux.svg" },
    { name: "Tailwind", src: "/icons/tailwind.webp" },
    { name: "TypeScript", src: "/icons/TS.svg" },
    { name: "Sass", src: "/icons/sass.svg" },
    { name: "Express", src: "/icons/express.svg" },
    { name: "NextJS", src: "/icons/Nextjs.svg" },
    { name: "MongoDB", src: "/icons/mongodb.svg" },
    { name: "MySQL", src: "/icons/mysql-original.svg" },
    { name: "GraphQL", src: "/icons/GraphQL.webp" },
    { name: "PostgreSQL", src: "/icons/postgresql-original.svg" },
    { name: "Redis", src: "/icons/redis-original.svg" },
    { name: "Firebase", src: "/icons/firebase.svg" },
    { name: "Figma", src: "/icons/figma.svg" },
    { name: "MicroServices", src: "/icons/MicroServices.webp" },
    { name: "Flutter", src: "/icons/flutter.svg" },
    { name: "Kotlin", src: "/icons/kotlin.svg" },
    { name: "Adobe XD", src: "/icons/xd-plain.svg" },
    { name: "Canva", src: "/icons/Canva.webp" },
];

const socials = [
    {
        name: "X / Twitter",
        user: "@KodxMedia",
        icon: "/icons/x1.webp",
        href: "https://twitter.com/KodxMedia",
    },
    {
        name: "Instagram",
        user: "@KodxMedia",
        icon: "/icons/instagram.webp",
        href: "https://instagram.com/kodx.site",
    },
    {
        name: "LinkedIn",
        user: "@KodxMedia",
        icon: "/icons/Link.webp",
        href: "https://linkedin.com/company/KodxMedia",
    },
];

export default function StackIcons() {
    return (
        <section className="w-full py-16 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
                        Tech Stack
                    </div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Technologies We{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Work With
                        </span>
                    </h2>

                    <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto">
                        We combine industry-leading tools and cutting-edge technology to deliver results-driven solutions.
                    </p>
                </div>

                {/* Tech Grid */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {stackIcons.map((tech) => (
                        <div
                            key={tech.name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex items-center justify-center 
                            bg-white/5 border border-white/10 hover:border-purple-400/60 
                            hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                            title={tech.name}
                        >
                            <img
                                src={tech.src}
                                alt={tech.name}
                                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-center mb-16">
                    <a
                        href="/stack"
                        className="flex items-center gap-2 text-white px-6 py-3 rounded-full 
                        border border-purple-400/50 bg-purple-500/20 
                        hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105 
                        transition-all duration-300"
                    >
                        <span className="font-medium">See All Technologies</span>
                        <ChevronRight className="w-5 h-5" />
                    </a>
                </div>

                {/* Social Section */}
                <div className="mt-16">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            Get More{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Insights
                            </span>
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                            Follow us on social media for the latest updates and insights.
                        </p>
                    </div>

                    {/* Social Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {socials.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 rounded-xl 
                                bg-white/5 border border-white/10 hover:border-purple-400/60 
                                hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 group"
                            >
                                <img
                                    src={social.icon}
                                    alt={social.name}
                                    className="w-8 h-8 object-contain"
                                />

                                <div className="flex-1">
                                    <p className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                                        {social.name}
                                    </p>
                                    <p className="text-xs text-white/60">
                                        {social.user}
                                    </p>
                                </div>

                                <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}