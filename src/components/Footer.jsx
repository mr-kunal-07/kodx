"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import ShineButton from "./ShineButton";

const Footer = () => {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    const socials = [
        { name: "WhatsApp", href: "https://wa.me/9920655685", type: "icon" },
        { name: "X / Twitter", href: "https://x.com/KodxMedia", src: "/icons/x1.webp" },
        { name: "Instagram", href: "https://instagram.com/KodxMedia", src: "/icons/instagram.webp" },
        { name: "LinkedIn", href: "https://linkedin.com/company/kodxmedia", src: "/icons/Link.webp" }
    ];

    const usefulLinks = [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "Stack", href: "/stack" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
    ];

    const approachLinks = [
        { label: "Contact Us", href: "/contact" },
        { label: "Careers", href: "/careers" }
    ];

    // Hide CTA on mobile and on /home or /about
    const hideCTA = ["/home", "/about"].includes(pathname);

    return (
        <footer className="text-white pt-12 pb-12" role="contentinfo">
            <div className="max-w-7xl mx-auto px-6">

                {/* CTA Section */}
                {!hideCTA && (
                    <div className="hidden sm:block relative overflow-hidden border border-purple-400/20 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md mb-10">
                        {/* decorative (aria-hidden) */}
                        <div aria-hidden className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
                        <div aria-hidden className="absolute -left-8 -bottom-8 w-28 h-28 bg-white/10 rounded-full blur-2xl" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-6 justify-between">
                            <div>
                                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">
                                    Let’s build something exceptional
                                </h3>
                                <p className="text-white/80 text-sm">
                                    Tell us about your idea. We’ll get back within 24 hours.
                                </p>
                            </div>

                            <ShineButton href="/contact" text="Start a project" showIcon={ArrowRight} />
                        </div>
                    </div>
                )}

                {/* Footer Main */}
                <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-10">
                    {/* Brand + Social */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-3">KodX Media</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            We craft fast, scalable, and beautiful products For YOU.
                        </p>

                        <div className="flex items-center gap-3">
                            {socials.map((s, i) => {
                                const isExternal = s.href && /^https?:\/\//i.test(s.href);
                                return (
                                    <Link
                                        key={i}
                                        href={s.href}
                                        target={isExternal ? "_blank" : undefined}
                                        rel={isExternal ? "noopener noreferrer" : undefined}
                                        aria-label={s.name}
                                        title={s.name}
                                        className="group relative rounded-xl border border-white/10 bg-white/5 p-2 overflow-hidden hover:border-purple-400/60 transition-all focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-600/20"
                                    >
                                        <div
                                            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            aria-hidden
                                        />
                                        <div className="relative w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                            {s.type === "icon" ? (
                                                <FaWhatsapp className="w-5 h-5 text-green-400" aria-hidden />
                                            ) : (
                                                <Image
                                                    src={s.src}
                                                    alt={s.name}
                                                    width={20}
                                                    height={20}
                                                    className="object-contain"
                                                    loading="eager"
                                                />
                                            )}
                                        </div>
                                        <span className="sr-only">{s.name}</span>
                                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" aria-hidden />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="flex-1 hidden md:block">
                        <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
                        <ul className="space-y-2 text-gray-400">
                            {usefulLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-purple-400 transition-colors duration-200 focus:outline-none focus-visible:underline"
                                        aria-label={link.label}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Approach */}
                    <div className="flex-1 hidden md:block">
                        <h3 className="text-lg font-semibold mb-4">OUR APPROACH</h3>
                        <ul className="space-y-2 text-gray-400">
                            {approachLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-purple-400 transition-colors duration-200 focus:outline-none focus-visible:underline"
                                        aria-label={link.label}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 mb-10 hidden md:block md:-mb-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                    © {currentYear} KodX Media. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
