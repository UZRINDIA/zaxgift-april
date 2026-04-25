"use client";
import React from "react";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

// floating animation function
const floatVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// slugify helper to make URLs clean
const slugify = (text) =>
  String(text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\s+_\/]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

// upcoming collection data
const upcomingItems = [
  {
    id: 1,
    src: assets.smallestbanner1,
    title: "Executive Laptop Bags",
    category: "Bags",
    color: "",
  },
  {
    id: 2,
    src: assets.smallestbanner2,
    title: "Stanley",
    category: "Bottles",
    color: "",
  },
  {
    id: 3,
    src: assets.smallestbanner3,
    title: "Gift sets",
    category: "Gift-items",
    color: "from-teal-400 to-teal-600",
  },
  {
    id: 4,
    src: assets.smallestbanner4,
    title: "Jute Bags",
    category: "Bags",
    color: "from-blue-400 to-blue-600",
  },
];

const UpcomingCollection = () => {
  return (
    <div className="px-6 py-24 bg-gray-950 text-gray-100 border-t border-neutral-800">
      {/* Section Heading */}
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 1.2 }}
        className="text-center text-5xl md:text-7xl font-extrabold mb-16 bg-gradient-to-r from-cyan-400 to-teal-500 text-transparent bg-clip-text"
      >
        New Collections
      </motion.h1>

      {/* Floating boxes grid */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center items-center"
      >
        {upcomingItems.map((item, i) => (
          <Link
            key={item.id}
            href={`/category/${slugify(item.category)}`} // ✅ go to category page
            className="block"
          >
            <motion.div
              variants={floatVariants(2 + i * 0.5)} // stagger float speed
              initial="initial"
              animate="animate"
              className="relative rounded-3xl overflow-hidden border-4 border-neutral-800 shadow-2xl w-[280px] h-[280px] mx-auto cursor-pointer group"
            >
              <Image
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center">
                <p className="text-lg font-semibold text-gray-100 p-4 text-center">
                  {item.title}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default UpcomingCollection;
