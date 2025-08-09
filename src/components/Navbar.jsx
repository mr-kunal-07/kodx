"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function Navbar() {
    return (
        <header className="w-full flex justify-center pt-6">
            <nav className="
        flex items-center justify-between 
        w-[90%] md:w-[80%] 
        px-8
        rounded-full 
        border border-white/10 
        bg-gradient-to-r from-white/0 to-white/[0.01] 
        backdrop-blur-xl 
        shadow-[0_0_30px_rgba(255,255,255,0.05)]
      ">
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image src="/whiteLogo.png" alt="KodX Media" width={65} height={65} priority />
                </Link>

                <div className="flex items-center gap-7">
                    {/* Nav Links */}
                    <ul className="hidden md:flex items-center gap-8 text-white/80 font-medium text-sm tracking-wide">
                        <li>
                            <Link href="/" className="hover:text-white transition-colors">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-white transition-colors">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/stack" className="hover:text-white transition-colors">
                                Stack
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" className="hover:text-white transition-colors">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-white transition-colors">
                                Projects
                            </Link>
                        </li>
                    </ul>


                    {/* Contact Button */}
                    <Link
                        href="/contact"
                        className=" group relative
                        flex items-center justify-center gap-1
                        text-white 
                        p-2 rounded-full border border-zinc-700
                        hover:shadow-xl hover:ring-1 hover:ring-zinc-600
                        duration-300 overflow-hidden
                        w-32
                        "
                    >

                        <div className="h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50  absolute -left-10 -rotate-45 blur-sm group-hover:left-[150%] duration-500 group-hover:delay-200 " />

                        Contact <ChevronRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-white duration-300 " />

                    </Link>


                </div>




            </nav>
        </header>
    );
}
