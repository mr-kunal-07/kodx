"use client";
import FireButton from "@/components/FireButton";
import React from "react";
import HeroImages from "./HeroImages";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="relative min-h-[85dvh] w-full flex items-center px-4 sm:px-6 lg:px-12 xl:px-16 overflow-hidden">
            <div className="w-full max-w-7xl mx-auto">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-6 py-4 lg:py-0">

                    {/* Left Text Section */}
                    <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left  max-w-2xl lg:max-w-none">
                        <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight">
                            India's No. 1{" "}
                            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Application Development
                            </span>{" "}
                            Company.
                        </h1>

                        <p className="text-[15px] sm:text-lg text-white/80 pt-3 leading-relaxed max-w-xl">
                            We build Coustom apps that help your business grow.
                        </p>

                        <Link href="/services" className="pt-7 lg:ml-10">
                            <FireButton Name="Click to See More" />
                        </Link>
                    </div>

                    {/* Right Image Section */}
                    <div className="flex-1 flex justify-center items-center w-full">
                        <HeroImages />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;