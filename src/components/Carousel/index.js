import React, { useState, useEffect } from 'react';

const Carousel = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) =>
            prevSlide === 0 ? slides.length - 1 : prevSlide - 1
        );
    };

    const autoChangeSlide = () => {
        nextSlide();
    };

    useEffect(() => {
        const intervalId = setInterval(autoChangeSlide, 3000);

        return () => clearInterval(intervalId);
    }, [currentSlide]);


    return (
        <div className="relative w-full h-screen mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="flex transition-transform duration-500 ease-in-out transform translate-x-full"
                     style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {slides.map((slide, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img
                                src={slide}
                                alt={`Slide ${index + 1}`}
                                className="w-full object-cover h-screen "
                            />
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="absolute top-1/2 left-0 text-white text-2xl font-bold bg-gray-800 px-4 py-2 rounded-full transform -translate-y-1/2 hover:bg-gray-600 focus:outline-none"
                onClick={prevSlide}
            >
                {'<'}
            </button>

            <button
                className="absolute top-1/2 right-0 text-white text-2xl font-bold bg-gray-800 px-4 py-2 rounded-full transform -translate-y-1/2 hover:bg-gray-600 focus:outline-none"
                onClick={nextSlide}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Carousel;