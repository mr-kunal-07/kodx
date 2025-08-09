"use client";
import React from "react";
import { FaWhatsapp, FaYoutube, FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="text-white pb-12 md:py-12 md:-pb-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-10">

                {/* Left Section */}
                <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-4">KodX Media</h2>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                        With expertise in AI, Blockchain, and full-stack development, we turn
                        ambitious ideas into market-ready products. Trusted by founders, backed
                        by a team of real techies.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="p-2 rounded-full border border-white/20 hover:border-purple-400 hover:bg-purple-400/10 transition-all">
                            <FaWhatsapp size={18} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full border border-white/20 hover:border-purple-400 hover:bg-purple-400/10 transition-all">
                            <FaYoutube size={18} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full border border-white/20 hover:border-purple-400 hover:bg-purple-400/10 transition-all">
                            <FaInstagram size={18} />
                        </Link>
                        <Link href="#" className="p-2 rounded-full border border-white/20 hover:border-purple-400 hover:bg-purple-400/10 transition-all">
                            <FaLinkedin size={18} />
                        </Link>
                    </div>
                </div>

                {/* Useful Links */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">USEFUL LINKS</h3>
                    <ul className="space-y-2 text-gray-400">
                        {["Articles", "Services", "Portfolio"].map((link, i) => (
                            <li key={i}>
                                <Link href="#" className="hover:text-purple-400 transition-colors duration-200">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Our Approach */}
                <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-4">OUR APPROACH</h3>
                    <ul className="space-y-2 text-gray-400">
                        {["Contact Us", "Terms of Use"].map((link, i) => (
                            <li key={i}>
                                <Link href="#" className="hover:text-purple-400 transition-colors duration-200">
                                    {link}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="mt-10 mb-10 md:-mb-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} KodX Media. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
