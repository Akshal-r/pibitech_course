"use client";

import { useState, useEffect } from "react";

const images = [
  {
    src: "/images/hero-ai-illustration.jpg",
    alt: "AI Product Development Illustration",
  },
  {
    src: "/images/hero-coding.jpg",
    alt: "AI Development Workstation",
  },
  {
    src: "/images/hero-team.jpg",
    alt: "Team Collaboration on AI Projects",
  },
  {
    src: "/images/hero-ai-tech.jpg",
    alt: "Futuristic AI Technology",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full">
      <div className="aspect-video overflow-hidden rounded-2xl border-2 border-blue-800 shadow-lg">
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
      </div>

      <div className="flex justify-center space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? "bg-primary w-6" : "bg-muted"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
