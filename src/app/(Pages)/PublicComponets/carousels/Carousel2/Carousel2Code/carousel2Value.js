export const Carousel2Value = `
"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Glass UI Design",
    desc: "Beautiful frosted glass carousel using Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
  {
    id: 2,
    title: "Modern Experience",
    desc: "Smooth animations with a premium feel",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 3,
    title: "Fully Responsive",
    desc: "Looks perfect on all screen sizes",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
];

export default function GlassCarousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Slides */}
      <div className="overflow-hidden rounded-3xl">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: 'translateX(-${current * 100}%)' }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="min-w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-112.5 object-cover"
              />

              {/* Glass Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-8 md:p-12 max-w-xl text-center shadow-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {slide.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Left Arrow */}
      <button
        onClick={() =>
          setCurrent(
            current === 0 ? slides.length - 1 : current - 1
          )
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 backdrop-blur-lg bg-white/30 border border-white/30 text-white rounded-full p-3 hover:bg-white/40 transition"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        className="absolute right-5 top-1/2 -translate-y-1/2 backdrop-blur-lg bg-white/30 border border-white/30 text-white rounded-full p-3 hover:bg-white/40 transition"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={'h-3 w-3 rounded-full transition-all ${
              current === i
                ? "bg-white scale-125"
                : "bg-white/50"
            }'}
          />
        ))}
      </div>
    </div>
  );
}

`;