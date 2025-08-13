"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="text-white pt-12 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                {/* CTA */}
                <div className="relative overflow-hidden border border-purple-400/20 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-md mb-10">
                    <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/10 rounded-full blur-2xl" />
                    <div className="absolute -left-8 -bottom-8 w-28 h-28 bg-white/10 rounded-full blur-2xl" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-5 md:gap-6 justify-between">
                        <div>
                            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1">Let’s build something exceptional</h3>
                            <p className="text-white/80 text-sm">Tell us about your idea. We’ll get back within 24 hours.</p>
                        </div>
                        <Link href="/contact" className="group relative flex items-center gap-2 text-white px-5 py-3 rounded-full border border-purple-400/50 bg-gradient-to-r from-purple-500/20 to-blue-500/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all">
                            <span className="font-medium">Start a project</span>
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row md:justify-between gap-10">
                    {/* Brand + Social */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-3">KodX Media</h2>
                        <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
                            We craft fast, scalable, and beautiful products across web, mobile, and backend — powered by a modern stack and a user‑first mindset.
                        </p>
                        <div className="flex items-center gap-3">
                            {[
                                { name: "WhatsApp", href: "https://wa.me/9920655685", type: "icon" },
                                { name: "X / Twitter", href: "https://x.com/KodxMedia", src: "/icons/x1.webp" },
                                { name: "Instagram", href: "https://instagram.com/KodxMedia", src: "/icons/instagram.webp" },
                                { name: "LinkedIn", href: "https://linkedin.com/company/kodxmedia", src: "/icons/Link.webp" }
                            ].map((s, i) => (
                                <Link key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="group relative rounded-xl border border-white/10 bg-white/5 p-2 overflow-hidden hover:border-purple-400/60 transition-all">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="relative w-6 h-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                                        {s.type === 'icon' ? (
                                            <FaWhatsapp className="w-5 h-5 text-green-400" />
                                        ) : (
                                            <Image src={s.src} alt={s.name} fill className="object-contain" sizes="24px" loading="eager" />
                                        )}
                                    </div>
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 group-hover:w-full transition-all duration-300" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
                        <ul className="space-y-2 text-gray-400">
                            {[
                                { label: "Home", href: "/" },
                                { label: "Services", href: "/services" },
                                { label: "Projects", href: "/projects" },
                                { label: "Stack", href: "/stack" },
                                { label: "About", href: "/about" },
                                { label: "Contact", href: "/contact" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-purple-400 transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Approach */}
                    <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-4">OUR APPROACH</h3>
                        <ul className="space-y-2 text-gray-400">
                            {[
                                { label: "Contact Us", href: "/contact" },
                                { label: "Terms of Use", href: "#" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="hover:text-purple-400 transition-colors duration-200">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-10 mb-10 md:-mb-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} KodX Media. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
