"use client";

import { memo, useState, useEffect } from "react";
import { ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stackIcons = [
    { name: "React", src: "/icons/React.svg", category: "Frontend" },
    { name: "Vite", src: "/icons/vite.svg", category: "Build Tools" },
    { name: "Redux", src: "/icons/redux.svg", category: "State Management" },
    { name: "Tailwind", src: "/icons/tailwind.webp", category: "Styling" },
    { name: "TypeScript", src: "/icons/TS.svg", category: "Language" },
    { name: "Sass", src: "/icons/sass.svg", category: "Styling" },
    { name: "Express", src: "/icons/express.svg", category: "Backend" },
    { name: "NextJS", src: "/icons/Nextjs.svg", category: "Framework" },
    { name: "MongoDB", src: "/icons/mongodb.svg", category: "Database" },
    { name: "MySQL", src: "/icons/mysql-original.svg", category: "Database" },
    { name: "GraphQL", src: "/icons/GraphQL.webp", category: "API" },
    { name: "PostgreSQL", src: "/icons/postgresql-original.svg", category: "Database" },
    { name: "Redis", src: "/icons/redis-original.svg", category: "Cache" },
    { name: "Firebase", src: "/icons/firebase.svg", category: "Backend" },
    { name: "Figma", src: "/icons/figma.svg", category: "Design" },
    { name: "MicroServices", src: "/icons/MicroServices.webp", category: "Architecture" },
    { name: "Flutter", src: "/icons/flutter.svg", category: "Mobile" },
    { name: "Kotlin", src: "/icons/kotlin.svg", category: "Mobile" },
    { name: "Adobe XD", src: "/icons/xd-plain.svg", category: "Design" },
    { name: "Canva", src: "/icons/Canva.webp", category: "Design" },
];

const socials = [
    {
        name: "X / Twitter",
        user: "@KodxMedia",
        icon: "/icons/x1.webp",
        href: "https://twitter.com/KodxMedia",
        color: "hover:text-blue-400"
    },
    {
        name: "Instagram",
        user: "@KodxMedia",
        icon: "/icons/instagram.webp",
        href: "https://instagram.com/kodx.site",
        color: "hover:text-pink-400"
    },
    {
        name: "LinkedIn",
        user: "@KodxMedia",
        icon: "/icons/Link.webp",
        href: "https://linkedin.com/company/KodxMedia",
        color: "hover:text-blue-500"
    },
];

// Tech Card Component
const TechCard = memo(function TechCard({ tech, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="group relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl flex flex-col items-center justify-center 
            bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md 
            hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.15)]
            transition-all duration-300 cursor-pointer overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title={`${tech.name} - ${tech.category}`}
            aria-label={`${tech.name} technology`}
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Floating Sparkles */}
            <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
            </div>

            {/* Icon Container */}
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={tech.src}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="object-contain w-full h-full filter group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                />
            </div>

            {/* Tooltip */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {tech.name}
                </div>
            </div>

            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
        </div>
    );
});

// Social Card Component
const SocialCard = memo(function SocialCard({ social, index }) {
    return (
        <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 backdrop-blur-md
            hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
            transition-all duration-300 overflow-hidden"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Icon */}
            <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                <Image
                    src={social.icon}
                    alt={social.name}
                    width={32}
                    height={32}
                    className="object-contain w-full h-full"
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="flex-1">
                <p className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors duration-300">
                    {social.name}
                </p>
                <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {social.user}
                </p>
            </div>

            {/* External Link Icon */}
            <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/80 transition-colors duration-300" />

            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
        </Link>
    );
});

// Main Component
const StackIcons = memo(function StackIcons() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const firstRow = stackIcons.slice(0, 10);
    const secondRow = stackIcons.slice(10);

    return (
        <section className="w-full py-16 px-4 sm:px-8 relative overflow-hidden">
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <header className="relative mb-12">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-4">
                            <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                            Tech Stack
                        </div>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Technologies We{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Work With
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-gray-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
                            We combine industry-leading tools, cutting-edge technology, and creative software to deliver results-driven solutions for every project.
                        </p>
                    </div>

                    {/* Desktop See All Button */}
                    <div className="absolute right-0 top-0 hidden lg:block">
                        <Link
                            href="/stack"
                            className="group relative flex items-center gap-2 text-white px-6 py-3 rounded-full border border-purple-400/50
                            bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm
                            hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:ring-2 hover:ring-purple-300/50 
                            transition-all duration-300 overflow-hidden transform hover:scale-105"
                        >
                            {/* Shine Effect */}
                            <div className="absolute h-[120px] w-12 bg-gradient-to-r from-white/10 via-white/50 -left-12 -rotate-45 blur-sm 
                            group-hover:left-[150%] transition-all duration-700 group-hover:delay-200" />
                            <span className="font-medium">See All</span>
                            <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </header>

                {/* Technology Grid */}
                <div className="mb-12">
                    {/* First Row */}
                    <div className={`flex gap-3 sm:gap-4 flex-wrap justify-center mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {firstRow.map((tech, index) => (
                            <TechCard key={tech.name} tech={tech} index={index} />
                        ))}
                    </div>

                    {/* Second Row */}
                    <div className={`flex gap-3 sm:gap-4 flex-wrap justify-center sm:translate-x-8 lg:translate-x-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        {secondRow.map((tech, index) => (
                            <TechCard key={tech.name} tech={tech} index={index + 10} />
                        ))}
                    </div>
                </div>

                {/* Mobile See All Button */}
                <div className="flex justify-center lg:hidden mb-12">
                    <Link
                        href="/stack"
                        className="group relative flex items-center gap-2 text-white px-6 py-3 rounded-full border border-purple-400/50
                        bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm
                        hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] hover:ring-2 hover:ring-purple-300/50 
                        transition-all duration-300 overflow-hidden"
                    >
                        <div className="absolute h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 -left-10 -rotate-45 blur-sm 
                        group-hover:left-[150%] transition-all duration-500 group-hover:delay-200" />
                        <span className="font-medium">See All Technologies</span>
                        <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Social Section */}
                <div className="mt-16">
                    {/* Social Header */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                            Get More{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Insights
                            </span>
                        </h3>
                        <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                            Follow us on social media for the latest updates, tips, and insights from our team.
                        </p>
                    </div>

                    {/* Social Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {socials.map((social, index) => (
                            <SocialCard key={social.name} social={social} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

export default StackIcons;
