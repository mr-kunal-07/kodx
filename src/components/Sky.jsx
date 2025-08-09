"use client";

import React, { useState, useEffect } from "react";
import ShootingStar from "./ShootingStar";

const Sky = ({ NumberOfStars }) => {
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generatedStars = Array.from({ length: NumberOfStars }).map(
            (_, index) => {
                const top = Math.random() * 100;
                const left = Math.random() * 100;
                return (
                    <div
                        key={index}
                        className="size-px bg-white rounded-full absolute"
                        style={{ top: `${top}%`, left: `${left}%` }}
                    />
                );
            }
        );
        setStars(generatedStars);
    }, [NumberOfStars]);

    return (
        <div className="absolute h-[70vh] w-full">
            {stars}
            <ShootingStar />
        </div>
    );
};

export default Sky;
