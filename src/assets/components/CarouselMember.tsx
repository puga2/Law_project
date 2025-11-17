import React, { useEffect, useRef, useState } from "react";

const AutoCarousel: React.FC<{ slides: string[]; interval?: number }> = ({
  slides,
  interval = 4000,
}) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    start();
    return stop;
    // restart when interval or number of slides changes
  }, [interval, slides.length]);

  const start = () => {
    stop();
    timerRef.current = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, interval);
  };

  const stop = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const goTo = (i: number) => {
    setCurrent(i);
    start(); // restart autoplay so timing resets after manual change
  };

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stop}
      onMouseLeave={start}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((src, i) => (
          <div key={i} className="flex-shrink-0 w-full">
            <img
              src={src}
              alt={`slide-${i}`}
              className="w-full h-[420px] md:h-[500px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* indicators */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-4 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === current ? "bg-white" : "bg-white/50"}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
