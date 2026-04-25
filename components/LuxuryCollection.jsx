"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const slugify = (text) =>
  String(text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\s+_\/]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

const luxuryItems = [
  { id: 1, src: assets.luxurybanner1, category: "Electronics", color: "" },
  { id: 2, src: assets.luxurybanner2, category: "Electronics", color: "" },
  { id: 3, src: assets.luxurybanner3,category: "Electronics", color: "from-teal-400 to-teal-600" },
  { id: 4, src: assets.luxurybanner4, category: "Electronics", color: "from-blue-400 to-blue-600" },
];


export default function LuxuryCollection() {
  const [selected, setSelected] = useState(1);
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % luxuryItems.length);
  const prev = () => setIndex((prev) => (prev - 1 + luxuryItems.length) % luxuryItems.length);

  return (
    <section className="relative py-12 bg-gradient-to-r from-purple-50 to-pink-50 overflow-hidden">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Trending Collection
      </h2>

      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center px-6">
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-8 z-10 bg-white shadow-lg hover:bg-gray-100 text-gray-800 rounded-full p-3"
        >
          <FaArrowLeft />
        </button>

        {/* Carousel (draggable) */}
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-hidden"
          drag="x"
          dragConstraints={{ left: -400, right: 400 }}
        >
          {luxuryItems.map((item, i) => {
            const isActive = i === index;
            const href = `/category/${slugify(item.category || item.title)}`;
            return (
              <motion.div
                key={item.id}
                onClick={() => setSelected(item.id)}
                whileHover={{ scale: 1.05 }}
                animate={{
                  scale: isActive ? 1.1 : 0.9,
                  opacity: isActive ? 1 : 0.6,
                }}
                transition={{ duration: 0.4 }}
                className={`relative min-w-[220px] md:min-w-[260px] h-[320px] md:h-[380px] rounded-3xl overflow-hidden bg-white shadow-xl flex items-center justify-center transition-all duration-500 ${
                  selected === item.id ? "ring-4 ring-purple-500" : ""
                }`}
              >
                <Image src={item.src} alt={item.title} className="w-full h-full object-cover" />

                {/* Title tag */}
                <span className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white bg-black/40 px-3 py-1 rounded-md text-sm font-medium">
                  {item.title}
                </span>

                {/* CTA link to category (prevents drag mis-clicks) */}
                <Link
                  href={href}
                  className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-md text-xs font-semibold bg-purple-600 text-white hover:bg-purple-700"
                  onClick={(e) => e.stopPropagation()} // don't toggle selected when clicking CTA
                >
                  Shop {item.category}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-2 md:right-8 z-10 hover:bg-gray-100 text-gray-800 rounded-full p-3 bg-white shadow-lg"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {luxuryItems.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 w-6 rounded-full ${
              i === index ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
