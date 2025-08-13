"use client";
import FireButton from "@/components/FireButton";
import React from "react";
import HeroImages from "./HeroImages";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 text-center gap-8 ">
            {/* Text Content */}
            <div className="max-w-6xl my-20">
                <h1 className="text-4xl sm:text-4x md:text-5xl lg:text-6xl font-bold leading-tight">
                    All you need to grow your <br className="hidden sm:block" />
                    Business in just KODX
                </h1>

                <p className="mt-3 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl pb-5 mx-auto">
                    From MVP to multi-service deployments — we build with Kafka,
                    Microservices, and AWS Auto Scaling so you never have to rebuild again.
                </p>

                <Link href="/services" className="mt-8 flex justify-center">
                    <FireButton Name="Explore Services" />
                </Link>
            </div>

            {/* Image Content */}
            <HeroImages />


        </section>
    );
};

export default Hero;
