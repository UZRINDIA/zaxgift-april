"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/assets/assets";

const slugify = (text) =>
  String(text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\s+_\/]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

const sliderData = [
  { id: 1, type: "image", src: assets.headerbanner1, category: "All" },
  { id: 2, type: "image", src: assets.headerbanner2, category: "Gift-items" },
  { id: 3, type: "image", src: assets.headerbanner3, category: "Gift-items" },
];

export default function MediaSlider({ items = sliderData, interval = 5000 }) {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const videoRefs = useRef([]);

  useEffect(() => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(
      () => setCurrent((p) => (p + 1) % items.length),
      interval
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current, items.length, interval]);

  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        const p = v.play?.();
        if (p?.catch) p.catch(() => {});
      } else {
        v.pause?.();
      }
    });
  }, [current]);

  const goPrev = () => setCurrent((c) => (c === 0 ? items.length - 1 : c - 1));
  const goNext = () => setCurrent((c) => (c + 1) % items.length);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-screen overflow-hidden select-none">

      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((slide, idx) => {
          const categoryName = slide.category ?? "All";
          const categorySlug = slugify(categoryName);
          const showTitle = slugify(categoryName) !== "all";

          return (
            <Link
              key={slide.id ?? idx}
              href={`/category/${categorySlug}`}
              className="flex-shrink-0 w-full h-full relative block group"
              prefetch={false}
            >
              {/* Image / Video */}
              {slide.type === "image" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={slide.src}
                    alt={`banner-${idx + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    priority={idx === 0}
                  />
                </div>
              ) : (
                <video
                  ref={(el) => (videoRefs.current[idx] = el)}
                  src={slide.src}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              )}

              {/* Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-500" />

              {/* Text */}
              {showTitle && (
                <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 text-center text-white px-3">
                  <h2 className="text-lg sm:text-2xl md:text-4xl font-semibold mb-1 sm:mb-2">
                    {categoryName}
                  </h2>
                  <p className="text-xs sm:text-sm opacity-90">
                    Explore our latest collection
                  </p>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Prev Button */}
      <button
        onClick={goPrev}
        aria-label="Previous slide"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-md z-20"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 18l-6-6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={goNext}
        aria-label="Next slide"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-1.5 sm:p-2 rounded-full shadow-md z-20"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              current === i ? "bg-white scale-110" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}