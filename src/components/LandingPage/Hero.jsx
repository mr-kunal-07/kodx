"use client";
import FireButton from "@/components/FireButton";
import Image from "next/image";
import React from "react";
import HeroImages from "./HeroImages";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 text-center gap-8 ">
           {/* Text Content */}
            <div className="max-w-6xl my-20">
                <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
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
            <HeroImages />


        </section>
    );
};

export default Hero;
