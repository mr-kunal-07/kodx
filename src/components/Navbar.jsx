"use client";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname();

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Stack", href: "/stack" },
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
    ];

    return (
        <header className="w-full flex justify-center pt-6">
            <nav
                className="
          flex items-center justify-between 
          w-[90%] md:w-[80%] 
          px-8
          rounded-full 
          border border-white/10 
          bg-gradient-to-r from-white/0 to-white/[0.01] 
          backdrop-blur-xl 
          shadow-[0_0_30px_rgba(255,255,255,0.05)]
        "
            >
                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <Image
                        src="/whiteLogo.png"
                        alt="KodX Media"
                        width={65}
                        height={65}
                        priority
                    />
                </Link>

                <div className="flex items-center gap-7">
                    {/* Nav Links */}
                    <ul className="hidden md:flex items-center gap-8 font-medium text-sm tracking-wide">
                        {[
                            { href: "/", label: "Home" },
                            { href: "/about", label: "About" },
                            { href: "/stack", label: "Stack" },
                            { href: "/services", label: "Services" },
                            { href: "/projects", label: "Projects" }
                        ].map(({ href, label }) => (
                            <li key={href} className="relative group">
                                <Link
                                    href={href}
                                    className="text-white/80 hover:text-white transition-colors"
                                >
                                    {label}
                                    {/* underline effect */}
                                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Contact Button */}
                    <Link
                        href="/contact"
                        className="group relative
              flex items-center justify-center gap-1
              text-white 
              p-2 rounded-full border border-zinc-700
              hover:shadow-xl hover:ring-1 hover:ring-zinc-600
              duration-300 overflow-hidden
              w-32
            "
                    >
                        {/* Shine effect */}
                        <div className="h-[100px] w-10 bg-gradient-to-r from-white/10 via-white/50 absolute -left-10 -rotate-45 blur-sm group-hover:left-[150%] duration-500 group-hover:delay-200" />

                        Contact
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-white duration-300" />
                    </Link>
                </div>
            </nav>
        </header>
    );
}
