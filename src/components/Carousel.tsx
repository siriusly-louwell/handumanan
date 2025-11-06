import { useState } from "react";
import type { CarouselProps } from "../services/types";

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-lg">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className="md:min-w-full md:max-w-[100vh] max-w-full h-[70vh] relative flex-shrink-0">
            <img
              src={item}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-md scale-110"
            />
            <img
              src={item}
              alt="spot image"
              className="relative w-full h-full object-contain z-10"
            />
            {/* {item.caption && (
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-4 text-lg font-medium">
                {item.caption}
              </div>
            )} */}
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full">
        &#10094;
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full">
        &#10095;
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full ${
              current === index ? "bg-accent" : "bg-forest/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
