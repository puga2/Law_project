// filepath: d:\React\Law_Project\src\assets\pages\OurFirm.jsx
import React, { useRef, useState, useEffect } from "react";
import pheakImg from "../../../public/images/pheak.png";

const carouselImages = [pheakImg, pheakImg, pheakImg, pheakImg];


const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prev = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    timeoutRef.current = setTimeout(next, 8000); // auto-slide every 3s
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="relative   mx-auto">
      {/* Carousel container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 50}%)`, // Show 2 cards at a time
          }}
        >
          {carouselImages.map((src, idx) => (
            <div
              key={src}
              className="carousel-item shrink-0 w-1/2 md:w-1/3 px-2 relative" // Each card takes 50% width
            >
              <img
                src={src}
                alt={`carousel-${idx}`}
                className=" w-fit object-cover"
              />
              <div className="absolute bottom-7 bg-white/35 mx-10 py-3  left-0 right-0  bg-opacity-75  text-center">
                <h2 className="text-lg font-bold mt-2 text-black">Saom Sopheak {idx + 1}</h2>
                <p className=" text-black text-md">
                  Partner
                </p>
              </div>
            </div>
            
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="btn btn-circle absolute left-[-0.5em] md:left-[-2.5rem] size-7 bg-[#a5a5a5] border-0 shadow-none top-1/2 -translate-y-1/2"
        onClick={prev}
        aria-label="Previous"
      >
        ❮
      </button>
      <button
        className="btn btn-circle absolute right-[-0.5em] md:right-[-2.5rem] size-7 bg-[#a5a5a5] border-0 shadow-none top-1/2 -translate-y-1/2"
        onClick={next}
        aria-label="Next"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;