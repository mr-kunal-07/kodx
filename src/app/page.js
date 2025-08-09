"use client";
import FireButton from "@/components/FireButton";
import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center px-6 text-center ">
      {/* Heading */}
      <h1 className="text-6xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-6xl">
        All you need to grow your <br/> {" Business in just "}
        <span className="inline-flex flex-col items-center mt-3">
          <span className="text-white text-5xl sm:text-6xl font-bold">KodX</span>
          {/* Line + Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 10"
            className="w-36"
          >
            {/* Line */}
            <line
              x1="0"
              y1="5"
              x2="90"
              y2="5"
              stroke="white"
              strokeWidth="2"
            />
            {/* Filled sharp arrow */}
            <polygon points="90,0 100,5 90,10" fill="white" />
          </svg>
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-white/90 max-w-2xl">
        From MVP to multi-service deployments — we build with Kafka,
        Microservices, and AWS Auto Scaling so you never have to rebuild again.
      </p>

      {/* Call-to-Action */}
     <div className="w-60 flex justify-center mt-10 ">
        <FireButton Name="Explore Services" />
     </div>
    </section>
  );
};

export default Page;
