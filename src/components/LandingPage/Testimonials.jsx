"use client";

import { memo, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        id: "priya-sharma",
        name: "Priya Sharma",
        title: "Founder",
        company: "Handloom Heritage",
        location: "Jaipur, India",
        text: "Their branding gave our store a fresh, modern touch. Footfall and online orders have both gone up noticeably.",
        img: "/man2.jpg",
        rating: 5
    },
    {
        id: "rajiv-menon",
        name: "Rajiv Menon",
        title: "Managing Director",
        company: "SmartFin",
        location: "Bengaluru, India",
        text: "The new website is sleek and fast. Clients love the booking feature, and our work process is much smoother now.",
        img: "/man1.jpg",
        rating: 5
    },
    {
        id: "ananya-patel",
        name: "Ananya Patel",
        title: "CEO",
        company: "TechNova",
        location: "Ahmedabad, India",
        text: "Great attention to detail. Our app is now more user-friendly, and daily active users have grown significantly.",
        img: "/man1.jpg",
        rating: 5
    }
];


// Star Rating Component
const StarRating = memo(function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    className={`w-3 h-3 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`}
                />
            ))}
        </div>
    );
});

// Testimonial Card Component
const TestimonialCard = memo(function TestimonialCard({ testimonial, isActive, onClick }) {
    return (
        <article
            className={`relative rounded-xl p-4 sm:p-6 backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 
            border border-white/20 shadow-lg transition-all duration-300 cursor-pointer
            ${isActive ? 'scale-105 border-purple-400/40 shadow-[0_0_20px_rgba(168,85,247,0.2)]' : 'hover:scale-[1.02] hover:border-white/30'}`}
            onClick={onClick}
            role="button"
            tabIndex={0}
            aria-label={`Testimonial from ${testimonial.name}`}
        >
            {/* Quote Icon */}
            <div className="absolute top-3 right-3 text-purple-400/30">
                <Quote className="w-5 h-5" />
            </div>

            {/* Rating */}
            <StarRating rating={testimonial.rating} />

            {/* Testimonial Text */}
            <blockquote className="text-gray-200 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
            </blockquote>

            {/* Author Section */}
            <div className="flex items-center gap-3">
                {/* Avatar */}
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-purple-400/30">
                    <Image
                        src={testimonial.img}
                        alt={`${testimonial.name} profile picture`}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                        loading="lazy"
                    />
                </div>

                {/* Author Info */}
                <div>
                    <p className="text-white font-semibold text-sm">
                        {testimonial.name}
                    </p>
                    <p className="text-purple-300 text-xs">
                        {testimonial.title} at {testimonial.company}
                    </p>
                </div>
            </div>
        </article>
    );
});

// Main Testimonials Component
const Testimonials = memo(function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prevTestimonial = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    const goToTestimonial = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextTestimonial();
        }, 4000);

        return () => clearInterval(interval);
    }, [nextTestimonial]);

    return (
        <section
            className="w-full py-12 px-4 sm:px-8 relative overflow-hidden"
            aria-labelledby="testimonials-heading"
        >
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header Section */}
                <header className="text-center mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-medium mb-3">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" />
                        Client Stories
                    </div>
                    <h2
                        id="testimonials-heading"
                        className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2"
                    >
                        What Our{" "}
                        <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                            Clients Say
                        </span>
                    </h2>
                    <p className="text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
                        Real results from real clients. Our success stories speak for themselves.
                    </p>
                </header>

                {/* Desktop Grid Layout */}
                <div className="hidden md:grid grid-cols-3 gap-4 mb-6">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            isActive={false}
                        />
                    ))}
                </div>

                {/* Mobile/Tablet Carousel */}
                <div className="md:hidden">
                    {/* Carousel Container */}
                    <div className="relative mb-6">
                        <div className="overflow-hidden rounded-xl">
                            <div
                                className="flex transition-transform duration-300 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {testimonials.map((testimonial) => (
                                    <div key={testimonial.id} className="w-full flex-shrink-0 px-1">
                                        <TestimonialCard
                                            testimonial={testimonial}
                                            isActive={true}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevTestimonial}
                            className="absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                            text-white hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-center"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="absolute right-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 
                            text-white hover:bg-white/20 hover:border-purple-400/50 transition-all duration-300 flex items-center justify-center"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-1.5">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToTestimonial(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-purple-400 scale-125'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Compact Stats Section */}
                <div className="grid grid-cols-4 gap-4 mt-8">
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-400 mb-1">50+</div>
                        <div className="text-gray-300 text-xs">Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-400 mb-1">100+</div>
                        <div className="text-gray-300 text-xs">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-400 mb-1">4.9</div>
                        <div className="text-gray-300 text-xs">Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">24/7</div>
                        <div className="text-gray-300 text-xs">Support</div>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default Testimonials;
