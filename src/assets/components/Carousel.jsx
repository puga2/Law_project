// filepath: d:\React\Law_Project\src\assets\pages\OurFirm.jsx
import React, { useEffect, useRef, useState } from "react";
import pheakImg from "/images/pheak.png";

const originalImages = [pheakImg, pheakImg, pheakImg, pheakImg];
// duplicate images to create "infinite" effect
const carouselImages = [...originalImages, ...originalImages];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % carouselImages.length);
  const prev = () => setCurrent((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  useEffect(() => {
    timeoutRef.current = setInterval(next, 3000); // auto-slide every 3s
    return () => clearInterval(timeoutRef.current);
  }, []);

  // Reset index when reaching the end of duplicate set
  useEffect(() => {
    if (current >= originalImages.length) {
      const id = setTimeout(() => {
        setCurrent(0); // jump back instantly to start
      }, 500); // small delay to let transition finish
      return () => clearTimeout(id);
    }
  }, [current]);

  return (
    <div className="relative mx-auto">
      {/* Carousel sliding area */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${current * 50}%)`, // 2 cards at a time
          }}
        >
          {carouselImages.map((src, idx) => (
            <div
              key={idx}
              className="carousel-item shrink-0 w-1/2 md:w-1/3 px-2 relative"
            >
              <img
                src={src}
                alt={`carousel-${idx}`}
                className="w-fit object-cover"
              />
              <div className="absolute bottom-7 bg-white/35 mx-10 py-3 left-0 right-0 bg-opacity-75 text-center">
                <h2 className="text-lg font-bold mt-2 text-black">
                  Saom Sopheak {idx + 1}
                </h2>
                <p className="text-black text-md">Partner</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons OUTSIDE overflow-hidden */}
      <button
        className="btn btn-circle absolute left-[-0.5em] md:left-[-2.5rem] size-7 bg-[#a5a5a5] border-0 shadow-none top-1/2 -translate-y-1/2 z-10"
        onClick={() => setCurrent((prev) => prev - 1)}
      >
        ❮
      </button>
      <button
        className="btn btn-circle absolute right-[-1em] md:right-[-2.5rem] size-7 bg-[#a5a5a5] border-0 shadow-none top-1/2 -translate-y-1/2 z-10"
        onClick={next}
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
