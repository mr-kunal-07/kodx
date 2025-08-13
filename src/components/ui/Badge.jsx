"use client";

import { memo } from "react";

const Badge = memo(function Badge({
    children,
    variant = "default",
    className = "",
    ...props
}) {
    const baseClasses = "inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium";

    const variants = {
        default: "badge",
        success: "bg-green-500/10 border-green-400/20 text-green-300",
        warning: "bg-yellow-500/10 border-yellow-400/20 text-yellow-300",
        error: "bg-red-500/10 border-red-400/20 text-red-300",
        info: "bg-blue-500/10 border-blue-400/20 text-blue-300"
    };

    const badgeClasses = `${baseClasses} ${variants[variant]} ${className}`;

    return (
        <div className={badgeClasses} {...props}>
            {variant === "default" && <div className="badge-pulse" />}
            {children}
        </div>
    );
});

export default Badge;
