"use client";

import { memo } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Button = memo(function Button({
    children,
    href,
    variant = "primary",
    size = "default",
    className = "",
    onClick,
    disabled = false,
    external = false,
    ...props
}) {
    const baseClasses = "group relative flex items-center justify-center gap-2 text-white rounded-full transition-all duration-300 overflow-hidden focus-visible";

    const variants = {
        primary: "btn-primary",
        secondary: "btn-secondary",
        ghost: "text-white/80 hover:text-white transition-colors"
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        default: "px-6 py-3",
        lg: "px-8 py-4 text-lg"
    };

    const buttonClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {variant !== "ghost" && <div className="shine-effect" />}
            {children}
            {variant === "primary" && <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />}
            {variant === "secondary" && <ChevronRight className="w-6 h-6 group-hover:translate-x-2 group-hover:text-white duration-300" />}
        </>
    );

    if (href) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses}
                    {...props}
                >
                    {content}
                </a>
            );
        }

        return (
            <Link href={href} className={buttonClasses} {...props}>
                {content}
            </Link>
        );
    }

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {content}
        </button>
    );
});

export default Button;
