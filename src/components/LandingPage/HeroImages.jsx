import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ScaleCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
    });
    const [selectedIndex, setSelectedIndex] = useState(0);

    const images = [
        { id: 1, img: './Phone/1.png', },
        { id: 2, img: './Phone/2.png', },
        { id: 3, img: './Phone/3.png', },
        { id: 4, img: './Phone/4.png', },
    ];

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on('select', onSelect);
        return () => emblaApi.off('select', onSelect);
    }, [emblaApi, onSelect]);

    const scrollTo = useCallback((index) => emblaApi?.scrollTo(index), [emblaApi]);

    return (
        <div className="relative w-full max-w-6xl mx-auto lg:px-1">

            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {images.map((item, index) => {
                        const isActive = selectedIndex === index;

                        return (
                            <div
                                key={item.id}
                                className="flex-[0_0_60%] sm:flex-[0_0_50%] lg:flex-[0_0_37%] "
                            >
                                <div
                                    className={`cursor-pointer transition-transform duration-300 ${isActive ? 'scale-105' : 'scale-90 opacity-60'
                                        }`}
                                    onClick={() => scrollTo(index)}
                                >
                                    <div className="aspect-[9/16] w-full max-w-xs mx-auto rounded-xl overflow-hidden">
                                        <img
                                            src={item.img}
                                            alt={item.label}
                                            className="w-full h-full object-contain"
                                            loading="eager"
                                        />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`transition-all rounded-full ${selectedIndex === index
                            ? 'w-6 h-2 bg-purple-400'
                            : 'w-2 h-2 bg-white/30'
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}