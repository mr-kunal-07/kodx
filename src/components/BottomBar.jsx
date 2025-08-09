"use client";
import Link from "next/link";
import { Home, Info, Cpu, Briefcase, FileText } from "lucide-react";

export default function BottomBar() {
    return (
        <nav
            className="
        fixed bottom-0 left-0 right-0 z-50
        flex justify-around items-center
        bg-gradient-to-r from-white/5 via-white/10 to-white/5
        backdrop-blur-xl border-t border-white/20
        py-2
        md:hidden
        shadow-[0_0_15px_rgba(255,255,255,0.1)]
      "
        >
            <Link href="/" className="flex flex-col items-center text-white/80 hover:text-white text-xs">
                <Home className="w-6 h-6 mb-1" />
                Home
            </Link>

            <Link href="/about" className="flex flex-col items-center text-white/80 hover:text-white text-xs">
                <Info className="w-6 h-6 mb-1" />
                About
            </Link>

            <Link href="/stack" className="flex flex-col items-center text-white/80 hover:text-white text-xs">
                <Cpu className="w-6 h-6 mb-1" />
                Stack
            </Link>

            <Link href="/services" className="flex flex-col items-center text-white/80 hover:text-white text-xs">
                <Briefcase className="w-6 h-6 mb-1" />
                Services
            </Link>

            <Link href="/projects" className="flex flex-col items-center text-white/80 hover:text-white text-xs">
                <FileText className="w-6 h-6 mb-1" />
                Projects
            </Link>
        </nav>
    );
}
