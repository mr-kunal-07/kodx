"use client";
import Image from "next/image";
import React from "react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Ritika Mehra",
            title: "Founder – Urban Threads",
            location: "Mumbai, India",
            role: "Urban Threads – Branding & Identity Design",
            text: "The branding Kshitij's team created gave us a fresh identity that truly connects with our audience. Our Instagram engagement doubled in just 3 months, and customers now instantly recognize our brand.",
            img:"/man1.jpg"
        },
        {
            name: "James Turner",
            title: "Director – FinWise",
            location: "London, UK",
            role: "FinWise – Website Design & Development",
            text: "Our old website was dragging us down, but the redesign transformed how clients see us. The booking system alone has made our workflow so much smoother, and our inquiries are up by more than half.",
            img: "/man2.jpg"

        },
    ];

    return (
        <section className="w-full max-w-7xl mx-auto pt-10 px-6 sm:px-10 lg:px-20 text-white">
            {/* Heading */}
            <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
                <p className="text-sm text-gray-300 mt-2">
                    Our clients’ success stories speak for themselves.
                </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl p-6 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-[1.02]"
                    >
                        {/* Circular Avatar Placeholder */}
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 mb-4">
                            <Image
                                src={item.img}
                                alt="Profile Picture"
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-semibold">{item.role}</h3>

                        {/* Text */}
                        <p className="text-gray-200 text-sm mt-2 mb-4">{item.text}</p>

                        {/* Author */}
                        <p className="text-sm font-semibold text-white/90">
                            {item.name}, {item.title}, ({item.location})
                        </p>
                    </div>
                ))}
            </div>
           
        </section>
    );
};

export default Testimonials;
