"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Info, Cpu, Briefcase, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function BottomBar() {
    const pathname = usePathname();

    const navItems = [
        { label: "Home", icon: Home, href: "/" },
        { label: "About", icon: Info, href: "/about" },
        { label: "Stack", icon: Cpu, href: "/stack" },
        { label: "Services", icon: Briefcase, href: "/services" },
        { label: "Projects", icon: FileText, href: "/projects" },
    ];

    return (
        <nav
            className="
        fixed bottom-3 left-1/2 -translate-x-1/2 z-50
        flex justify-around items-center
        w-[95%] max-w-md
        rounded-2xl px-3 py-2
        bg-gradient-to-r from-white/10 via-white/5 to-white/10
        backdrop-blur-2xl border border-white/20
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
        md:hidden
      "
        >
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;

                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className="relative flex flex-col items-center justify-center text-xs font-medium"
                    >
                        <motion.div
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.15 }}
                            className={`flex flex-col items-center transition-colors duration-200 ${isActive
                                    ? "text-purple-400"
                                    : "text-white/70 hover:text-white"
                                }`}
                        >
                            <Icon className="w-6 h-6 mb-1" />
                            {item.label}
                        </motion.div>

                        {isActive && (
                            <motion.div
                                layoutId="active-indicator"
                                className="absolute -bottom-1 w-1.5 h-1.5 rounded-full bg-purple-400"
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}
