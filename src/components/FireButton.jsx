"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Geist } from 'next/font/google'

const geist = Geist({
    subsets: ['latin'],
})

const FireButton = ({ Name }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0 });
    const [gradientOpacity, setGradientOpacity] = useState({ left: 1, right: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setCursorPosition({ x });

        const leftOpacity = Math.max(0, Math.min(1, 1 - x / (rect.width / 2)));
        const rightOpacity = Math.max(
            0,
            Math.min(1, (x - rect.width / 2) / (rect.width / 2))
        );

        setGradientOpacity({ left: leftOpacity, right: rightOpacity });
    };

    const handleMouseLeave = () => {
        const timeoutId = setTimeout(() => {
            setCursorPosition({ x: 0 });
            setGradientOpacity({ left: 1, right: 0 });
            clearTimeout(timeoutId);
        },5000);
    };

    return (
        <button
            className="relative rounded-full flex items-center w-full sm:max-w-xs md:max-w-sm lg:max-w-md text-black"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Left gradient */}
            <div
                style={{ opacity: gradientOpacity.left }}
                className="absolute -left-2 h-[125%] w-1/2 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
            />
            <div
                style={{ opacity: gradientOpacity.left }}
                className="absolute -left-2 h-[125%] w-2/5 bg-gradient-to-r from-orange-600 to-transparent blur-sm rounded-full pointer-events-none duration-100"
            />

            {/* Right gradient */}
            <div
                style={{ opacity: gradientOpacity.right }}
                className="absolute -right-2 h-[125%] w-1/2 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
            />
            <div
                style={{ opacity: gradientOpacity.right }}
                className="absolute -right-2 h-[125%] w-2/5 bg-gradient-to-r from-transparent to-orange-600 blur-sm rounded-full pointer-events-none duration-100"
            />

            <div className="relative flex justify-center items-center border border-white/60 bg-[#d1d1d1] w-full py-2 sm:py-2.5 md:py-3 rounded-full overflow-hidden">
                <motion.div
                    animate={{
                        left: `${cursorPosition.x - 102}px`,
                    }}
                    transition={{ duration: 0.15 }}
                    className="absolute flex w-[204px] sm:w-[180px] md:w-[220px] h-[103px] sm:h-[80px] md:h-[110px] items-center justify-center pointer-events-none"
                >
                    <div className="absolute h-full w-full bg-[radial-gradient(43.3%_44.23%_at_50%_49.51%,_#FFFFF7_29%,_#FFFACD_48.5%,_#F4D2BF_60.71%,rgba(214,211,210,0.00)_100%)] blur-[5px]" />
                </motion.div>
                <p className={`text-base sm:text-lg md:text-xl font-semibold z-10 ${geist.className} `}>
                    {Name}
                </p>
            </div>
        </button>
    );
};

export default FireButton;
