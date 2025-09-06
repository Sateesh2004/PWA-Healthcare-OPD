import React, { useState, useEffect } from "react";

const Carousel = () => {
  const images = [
    "./assets/images/carousel1.webp",
    "./assets/images/carousel2.webp",
    "./assets/images/carousel3.webp",
    "./assets/images/carousel4.webp",
    "./assets/images/carousel1.webp",
    "./assets/images/carousel2.webp",
    "./assets/images/carousel3.webp",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      {/* Carousel Wrapper */}
      <div className="relative h-20 overflow-hidden rounded-lg md:h-64 mh:rounded-3xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            {index === currentIndex && (
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="absolute block w-full h-full object-cover"
              />
            )}
          </div>
        ))}
      </div>

      {/* Slider Indicators */}
      <div className="absolute z-30 space-x-2 flex justify-center bottom-[-14px] mh:bottom-[-40px] left-1/2 transform -translate-x-1/2 mh:space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-1.5 h-1.5 mh:w-3 mh:h-3 rounded-full ${
              index === currentIndex
                ? "bg-gray-800"
                : "bg-gray-300 hover:bg-gray-500"
            }`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider Controls */}
      
    </div>
  );
};

export default Carousel;
