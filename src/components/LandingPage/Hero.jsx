"use client";
import FireButton from "@/components/FireButton";
import Image from "next/image";
import React from "react";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 text-center gap-8 py-20">

            {/* Text Content */}
            <div className="max-w-5xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                    All you need to grow your <br className="hidden sm:block" />
                    Business in just KODX
                </h1>

                <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mx-auto">
                    From MVP to multi-service deployments — we build with Kafka,
                    Microservices, and AWS Auto Scaling so you never have to rebuild again.
                </p>

                <div className="mt-8 w-full max-w-[240px] mx-auto">
                    <FireButton Name="Explore Services" />
                </div>
            </div>

            {/* Image Content */}
            <div className="w-full max-w-3xl">
                <Image
                    src="/glass1.png"
                    alt="Business Growth"
                    width={1200}
                    height={800}
                    className="w-full rounded-lg shadow-lg"
                    priority
                />
            </div>
        </section>
    );
};

export default Hero;
