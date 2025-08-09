"use client";
import Image from "next/image";

export default function HeroImages() {
    const images = {
        left: "/glass2.png",
        center: "/glass1.png",
        right: "/glass3.png",
    };

    return (
        <>
            <style>
                {`
          @keyframes pulseScale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
        `}
            </style>

            <div className="relative w-full max-w-[1500px] mx-auto flex justify-center items-center h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] px-4">
                {/* Left Image */}
                <div
                    className="hidden md:block absolute top-1/2 left-0 -translate-y-1/2 rounded-lg shadow-lg w-[30vw] max-w-[450px] aspect-[3/2]"
                    style={{
                        animation: "pulseScale 6s ease-in-out infinite",
                        animationDelay: "0s",
                    }}
                >
                    <Image
                        src={images.left}
                        alt="Left Image"
                        fill
                        sizes="(min-width: 768px) 30vw"
                        className="rounded-lg object-cover"
                        priority
                    />
                </div>

                {/* Center Image */}
                <div
                    className="relative rounded-lg shadow-xl z-30 w-full max-w-[900px] sm:w-[70vw] md:w-[50vw] aspect-[16/10]"
                    style={{
                        animation: "pulseScale 6s ease-in-out infinite",
                        animationDelay: "2s",
                    }}
                >
                    <Image
                        src={images.center}
                        alt="Center Image"
                        fill
                        sizes="(max-width: 640px) 100vw, (min-width: 641px) 70vw"
                        className="rounded-lg object-cover"
                        priority
                    />
                </div>

                {/* Right Image */}
                <div
                    className="hidden md:block absolute top-1/2 right-0 -translate-y-1/2 rounded-lg shadow-lg w-[30vw] max-w-[450px] aspect-[3/2]"
                    style={{
                        animation: "pulseScale 6s ease-in-out infinite",
                        animationDelay: "4s",
                    }}
                >
                    <Image
                        src={images.right}
                        alt="Right Image"
                        fill
                        sizes="(min-width: 768px) 30vw"
                        className="rounded-lg object-cover"
                        priority
                    />
                </div>
            </div>
        </>
    );
}
