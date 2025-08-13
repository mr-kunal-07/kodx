"use client";

import { memo } from "react";

const Section = memo(function Section({
    children,
    className = "",
    background = true,
    container = true,
    ...props
}) {
    const sectionClasses = `section-padding relative overflow-hidden ${className}`;
    const containerClasses = container ? "section-container" : "";

    return (
        <section className={sectionClasses} {...props}>
            {background && (
                <>
                    <div className="bg-gradient-primary" />
                    <div className="bg-radial-purple" />
                    <div className="bg-radial-blue" />
                </>
            )}
            <div className={containerClasses}>
                {children}
            </div>
        </section>
    );
});

export default Section;
