import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ShineButton({
    href = "#",
    text = "Click Me",
    icon: Icon = ChevronRight,
    showIcon = true,
    variant = "default", // "default" or "clean"
    rounded = "full" // new prop: "none", "sm", "md", "lg", "xl", "2xl", "full", etc.
}) {
    return (
        <Link
            href={href}
            className={`group relative w-fit flex items-center gap-2 text-white px-6 py-3 border border-purple-400/50
            bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm
            hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] hover:ring-2 hover:ring-purple-300/50 
            transition-all duration-300 overflow-hidden hover:scale-105 rounded-${rounded}`}
        >
            {/* Shine Effect - only show for default variant */}
            {variant === "default" && (
                <div className="absolute h-[120px] w-12 bg-gradient-to-r from-white/10 via-white/50 -left-12 -rotate-45 blur-sm 
                group-hover:left-[150%] transition-all duration-700 group-hover:delay-200" />
            )}

            <span className="font-medium relative z-10">{text}</span>

            {showIcon && Icon && (
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
            )}
        </Link>
    );
}


// Example usage:
// <ShineButton href="/stack" text="See All" />
// <ShineButton href="/about" text="Learn More" icon={ArrowRight} />
// <ShineButton href="/contact" text="Get Started" showIcon={false} />
// <ShineButton href="/services" text="Explore" variant="clean" />

{/* <ShineButton text="Rounded Full" rounded="full" />
<ShineButton text="Rounded MD" rounded="md" />
<ShineButton text="Rounded None" rounded="none" />
<ShineButton text="Rounded XL" rounded="xl" variant="clean" /> */}
