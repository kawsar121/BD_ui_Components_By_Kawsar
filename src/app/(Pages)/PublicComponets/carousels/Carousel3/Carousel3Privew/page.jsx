"use client";

import { useState } from "react";

const cards = [
  {
    id: 1,
    title: "Modern UI",
    desc: "Beautiful card based carousel layout",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Glass Design",
    desc: "Frosted glass effect with Tailwind CSS",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 3,
    title: "Responsive",
    desc: "Works perfectly on all devices",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    id: 4,
    title: "Production Ready",
    desc: "Clean, scalable & reusable component",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
];

function Carousel3Peivew() {
const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  return (
     <div className="relative max-w-6xl mx-auto py-16">
      {/* Cards */}
      <div className="overflow-hidden">
        <div
          className="flex gap-6 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 320}px)` }}
        >
          {cards.map((card) => (
            <div
              key={card.id}
              className="min-w-[100px] rounded-3xl overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl"
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-44 w-full object-cover"
              />

              <div className="p-6 text-white">
                <h3 className="text-lg text-black font-semibold mb-2">
                  {card.title}
                </h3>
                <p className=" text-gray-700 text-sm">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full p-3 hover:bg-white/40"
      >
        ❮
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md border border-white/30 text-white rounded-full p-3 hover:bg-white/40"
      >
        ❯
      </button>
    </div>
  )
}

export default Carousel3Peivew