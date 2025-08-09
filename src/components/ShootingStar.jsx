"use client";
import React, { useState, useEffect } from "react";

const ShootingStar = () => {
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [size, setSize] = useState(50); // default star size

    // Update star size on resize
    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 640) {
                setSize(35); // smaller stars on mobile
            } else if (window.innerWidth < 1024) {
                setSize(50); // medium size
            } else {
                setSize(67); // full size
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            // keep star fully inside viewport
            const top = Math.random() * (window.innerHeight - size);
            const left = Math.random() * (window.innerWidth - size);

            setPosition({ top, left });
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, 1000);
        }, 2000);

        return () => clearInterval(interval);
    }, [size]);

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {isVisible && (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 67 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{
                        top: `${position.top}px`,
                        left: `${position.left}px`,
                    }}
                    className="absolute z-10 animate-shooting"
                >
                    <g filter="url(#filter0_f)">
                        <circle cx="59" cy="8" r="2" fill="white" />
                    </g>
                    <path
                        d="M59.3535 8.35355L0.353512 67.3535"
                        stroke="url(#paint0_linear)"
                        strokeWidth="0.5"
                        strokeLinecap="round"
                    />
                    <defs>
                        <filter
                            id="filter0_f"
                            x="51"
                            y="0"
                            width="16"
                            height="16"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur stdDeviation="3" />
                        </filter>
                        <linearGradient
                            id="paint0_linear"
                            x1="58.6464"
                            y1="7.64645"
                            x2="-0.353557"
                            y2="66.6464"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="white" />
                            <stop offset="1" stopColor="#1D1D20" />
                        </linearGradient>
                    </defs>
                </svg>
            )}
        </div>
    );
};

export default ShootingStar;
