"use client";
import FireButton from "@/components/FireButton";
import React from "react";
import HeroImages from "./HeroImages";
import Link from "next/link";

const Hero = () => {
    return (
        <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 sm:px-8 lg:px-12 text-center gap-8 ">
            {/* Text Content */}
            <div className="max-w-6xl my-20 capitalize">
                <h1 className="text-4xl sm:text-4x md:text-5xl lg:text-6xl font-bold leading-tight">
                    We <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent uppercase ">design</span>  & <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent uppercase">build</span> websites that grow your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent uppercase">Business</span>.
                    <br className="hidden sm:block" />
                </h1>

                <p className="mt-4 text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-2xl pb-4 mx-auto">

                    Custom, fast and SEO-friendly websites — so you can focus on growing sales.
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
