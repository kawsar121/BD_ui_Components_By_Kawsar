export const Carousel1value = `
"use client";

import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    title: "Modern Design",
    desc: "Clean and minimal UI with Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Responsive Layout",
    desc: "Perfect on mobile, tablet and desktop",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    title: "Production Ready",
    desc: "Optimized and scalable carousel component",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: 'translateX(-${current * 100}%)' }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="min-w-full relative">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-105 object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 flex items-center">
              <div className="px-8 max-w-xl text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  {slide.title}
                </h2>
                <p className="text-gray-200 text-lg">
                  {slide.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() =>
          setCurrent(
            current === 0 ? slides.length - 1 : current - 1
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow"
      >
        ❮
      </button>

      <button
        onClick={() =>
          setCurrent((current + 1) % slides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={'h-3 w-3 rounded-full transition ${
              current === i
                ? "bg-white scale-110"
                : "bg-white/50"
            }'}
          />
        ))}
      </div>
    </div>
  );
}

`;