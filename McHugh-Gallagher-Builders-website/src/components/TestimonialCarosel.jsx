// TestimonialsCarousel.js
import React, { useState } from "react";
import Testimonial from "./Testimonial";

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      name: "Pierce Flanagan",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ex culpa, alias labore accusamus obcaecati dolores.",
    },
    {
      name: "Jane Doe",
      text: "This product has significantly improved my workflow. Highly recommended!",
    },
    {
      name: "John Smith",
      text: "A game-changer in the industry. Exceptional quality and support.",
    },
    // Add more testimonials as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative mr-[4vw] ml-[4vw] mt-7 bg-slate-100 rounded-xl mb-2 h-[225px]">
      <Testimonial
        name={testimonials[currentIndex].name}
        text={testimonials[currentIndex].text}
      />
      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &#10094;
      </button>
      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default TestimonialsCarousel;
