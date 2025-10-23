import { ArrowRight, ChevronRight, SmartphoneIcon, Globe, Brush } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ShineButton from "../ShineButton";

const services = [
    {
        title: "Custom App Development",
        desc: "Create a custom app that is tailored to your specific business needs and goals.",
        button: "View App Projects",
        icon: <SmartphoneIcon className="w-8 h-8 text-white" />,
        mobileIcon: "/icons/flutter.svg",
        user: "Custom App Solutions"
    },
    {
        title: "Website Development",
        desc: "Fast, beautiful websites that work perfectly on all devices and help you get more customers.",
        button: "View Web Projects",
        icon: <Globe className="w-8 h-8 text-white" />,
        mobileIcon: "/icons/Nextjs.svg",
        user: "Web Solutions"
    },
    {
        title: "Logo Design",
        desc: "Unique, memorable logos that represent your brand and help you stand out from the competition.",
        button: "View Logo Projects",
        icon: <Brush className="w-8 h-8 text-white" />,
        mobileIcon: "/icons/canva.webp",
        user: "Logo Design Solutions"
    },
];

function SocialCard({ name, user, icon }) {
    return (
        <Link
            href="#"
            className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10
            hover:border-purple-400/60 transition-all duration-300 group"
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
        <section className="w-full py-12 px-4 sm:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Heading */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8 text-center sm:text-left">
                    <div className="space-y-3">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                            What We{" "}
                            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                                Do
                            </span>
                        </h2>
                        <p className="text-gray-300 max-w-2xl text-base sm:text-lg">
                            We build websites and mobile apps that help your business succeed.
                        </p>
                    </div>
                    <ShineButton href="/services" text="All Services" rounded="xl" icon={ArrowRight} />
                </div>

                {/* Desktop Cards */}
                <div className="hidden sm:grid gap-6 grid-cols-1 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group rounded-2xl border border-white/20 p-6 bg-gradient-to-br from-white/10 to-white/5 hover:border-purple-400/40 hover:scale-105 transition-all duration-300 flex flex-col min-h-[330px]"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                            bg-gradient-to-br from-purple-500/20 to-blue-500/20 
                            border border-white/30 mb-5 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-white mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                                {service.desc}
                            </p>
                            <ShineButton href="/services" text={service.button} icon={ArrowRight} />
                        </div>
                    ))}
                </div>

                {/* Mobile Cards */}
                <div className="sm:hidden space-y-3">
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