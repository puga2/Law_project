// filepath: d:\React\Law_Project\src\assets\pages\OurFirm.jsx
import React, { useEffect, useRef, useState } from "react";
import chandarith from "/images/chandarith.jpg";
import sovanndeth from "/images/sovanndeth.jpg";
import sophavann from "/images/sophavann.jpg";
import buntheng from "/images/buntheng.jpg";
import sovathana from "/images/sovathana.jpg";

// Team data
const team = [
  { image: sovathana, name: "Ann Sovathana", position: "Director" },
  { image: sovanndeth, name: "Kong Sovanndeth", position: "Associate" },
  { image: chandarith, name: "Heng Chandarith", position: "Associate" },
  { image: sophavann, name: "La Sophavann", position: "Junior Associate" },
  { image: buntheng, name: "Kean Buntheng", position: "Junior Associate" },
];

// Duplicate for infinite effect
const carouselData = [...team, ...team];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const next = () => setCurrent((prev) => (prev + 1) % carouselData.length);
  const prev = () => setCurrent((prev) => (prev - 1 + carouselData.length) % carouselData.length);

  useEffect(() => {
    timeoutRef.current = setInterval(next, 3000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  useEffect(() => {
    if (current >= team.length) {
      const id = setTimeout(() => {
        setCurrent(0);
      }, 500);
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
            transform: `translateX(-${current * 50}%)`,
          }}
        >
          {carouselData.map((member, idx) => (
            <div
              key={idx}
              className="carousel-item shrink-0 w-1/2 md:w-1/3 px-2 relative"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-fit object-cover"
              />
              <div className="absolute bottom-7 bg-white/95 mx-2 sm:mx-10 py-1 sm:py-3 left-0 right-0 bg-opacity-75 text-center">
                <h2 className="text-sm sm:text-lg font-bold mt-2 text-[#016241] tracking-wide">
                  {member.name}
                </h2>
                <p className="text-black sm:text-md text-[13px] ">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        className="btn btn-circle absolute left-[-0.5em] md:left-[-2.5rem] size-7 bg-[#a5a5a5] border-0 shadow-none top-1/2 -translate-y-1/2 z-10"
        onClick={prev}
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
