"use client";
import FireButton from "@/components/FireButton";
import React from "react";

const Hero = () => {
    return (
        <>
            {/* Desktop & Tablet Layout */}
            <section className="hidden sm:flex min-h-screen w-full flex-col justify-center items-center px-4 sm:px-6 lg:px-8 text-center pb-30">
                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-5xl">
                    All you need to grow your <br className="hidden sm:block" />
                    Business in just KODX
                </h1>

                {/* Description */}
                <p className="mt-6 text-sm sm:text-base md:text-lg text-white/90 max-w-md sm:max-w-2xl leading-relaxed">
                    From MVP to multi-service deployments — we build with Kafka,
                    Microservices, and AWS Auto Scaling so you never have to rebuild again.
                </p>

                {/* Call-to-Action */}
                <div className="mt-8 sm:mt-10 w-full max-w-[240px]">
                    <FireButton Name="Explore Services" />
                </div>
            </section>

            {/* Mobile Layout */}
            <section className="block sm:hidden px-6 py-20 text-center">
                {/* Text + Button */}
                <h1 className="text-3xl font-bold leading-tight">
                    All you need to grow your Business in just KODX
                </h1>
                <p className="mt-6 text-sm text-white/90">
                    From MVP to multi-service deployments — we build with Kafka,
                    Microservices, and AWS Auto Scaling so you never have to rebuild again.
                </p>
                <div className="mt-6">
                    <FireButton Name="Explore Services" />
                </div>

                {/* Image below text */}
                <div className="mt-8">
                    <img
                        src="/glass1.png"
                        alt="Business Growth"
                        className="w-full rounded-lg shadow-lg"
                    />
                </div>
            </section>
        </>
    )
};

export default Hero;
