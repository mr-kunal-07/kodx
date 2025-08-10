"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
];

const socials = [
    { name: "X / Twitter", user: "@KodxMedia", icon: "/icons/x1.webp" },
    { name: "Instagram", user: "@KodxMedia", icon: "/icons/instagram.webp" },
    { name: "LinkedIn", user: "@KodxMedia", icon: "/icons/Link.webp" },
];

export default function StackIcons() {
    const firstRow = stackIcons.slice(0, 9);
    const secondRow = stackIcons.slice(9, 18);

    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="relative mb-10">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">
                            Technologies We Work With
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-white/70 max-w-2xl mx-auto">
                            We combine industry-leading tools, cutting-edge technology, and creative software to deliver results-driven solutions for every project.
                        </p>
                    </div>

                    {/* See All button top-right */}
                    <div className="absolute right-0 top-0 hidden md:block">
                        <Link
                            href="/stack"
                            className="group relative flex items-center justify-center gap-1 text-white 
                            p-2 rounded-full border border-zinc-700
                            hover:shadow-[0_0_20px_rgba(168,85,247,0.8)] hover:ring-1 hover:ring-zinc-600
                            duration-300 overflow-hidden w-32"
                        >
                            <div className="h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 absolute -left-10 -rotate-45 blur-sm 
                            group-hover:left-[150%] duration-500 group-hover:delay-200" />
                            See All
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-white duration-300" />
                        </Link>
                    </div>
                </div>

                {/* Two offset rows */}
                <div className="flex flex-col gap-6 items-center">
                    <div className="flex gap-4 flex-wrap justify-center">
                        {firstRow.map((tech) => (
                            <TechCard key={tech.name} {...tech} />
                        ))}
                    </div>
                    <div className="flex gap-4 flex-wrap justify-center sm:translate-x-18">
                        {secondRow.map((tech) => (
                            <TechCard key={tech.name} {...tech} />
                        ))}
                    </div>
                </div>

                {/* Mobile See All */}
                <div className="mt-6 flex justify-center md:hidden">
                    <Link
                        href="/stack"
                        className="inline-flex items-center px-9 py-2 rounded-full border border-purple-500/40 text-white text-sm hover:bg-purple-600/20 transition"
                    >
                        See All
                    </Link>
                </div>
            </div>

            {/* Social Cards */}
            <div className="mt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center sm:text-left">
                    Get More Insights
                </h1>

                {/* Cards */}
                <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {socials.map((social, i) => (
                        <SocialCard key={i} {...social} />
                    ))}
                </section>
            </div>
        </section>
    );
}

function TechCard({ name, src }) {
    return (
        <div
            className="w-24 h-24 rounded-lg flex flex-col items-center justify-center 
            bg-white/5 border border-white/10 backdrop-blur-md 
            hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
            transition-all duration-300"
            title={name}
            aria-label={name}
        >
            <div className="w-10 h-10 sm:w-12 sm:h-12">
                <Image
                    src={src}
                    alt={name}
                    width={48}
                    height={48}
                    className="object-contain"
                />
            </div>
            <span className="mt-2 text-[11px] text-white/70 select-none hidden sm:block">
                {name}
            </span>
        </div>
    );
}

function SocialCard({ name, user, icon }) {
    return (
        <Link
            href="#"
            className="flex  items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md
            hover:border-purple-400/60 hover:shadow-[0_8px_30px_rgba(168,85,247,0.12)]
            transition-all duration-300"
        >
            <Image
                src={icon}
                alt={name}
                width={32}
                height={32}
                className="object-contain"
            />
            <div>
                <p className="text-white font-medium">{name}</p>
                <p className="text-sm text-white/60">{user}</p>
            </div>
        </Link>
    );
}
