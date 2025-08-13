"use client";

import { memo } from "react";

const Card = memo(function Card({
    children,
    className = "",
    hover = true,
    glass = true,
    onClick,
    ...props
}) {
    const baseClasses = "relative rounded-xl transition-all duration-300";
    const glassClasses = glass ? "card-glass" : "bg-white/5 border border-white/20";
    const hoverClasses = hover ? "card-hover cursor-pointer" : "";

    const cardClasses = `${baseClasses} ${glassClasses} ${hoverClasses} ${className}`;

    return (
        <div
            className={cardClasses}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
});

export default Card;
