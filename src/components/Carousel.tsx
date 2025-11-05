import { useState } from "react";
import type {CarouselProps} from "../services/types";

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
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}>
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-full h-[500px] relative flex-shrink-0">
            <img
              src={item.image}
              alt={item.caption || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {item.caption && (
              <div className="absolute bottom-0 w-full bg-black/50 text-white text-center py-4 text-lg font-medium">
                {item.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
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

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}></button>
        ))}
      </div>
    </div>
  );
}
