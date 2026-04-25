"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

/* ------------------ helper ------------------ */
const slugify = (text) =>
  String(text || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[\s+_\/]+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");


/* ------------------ CollectionCard (local) ------------------ */
const CollectionCard = ({ children, index, direction, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction.x, y: direction.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.03,
        y: -6,
        transition: { duration: 0.3 },
      }}
      className={`bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl shadow-gray-700/30 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};

/* ------------------ sample data (replace with your assets) ------------------ */
import { assets } from "@/assets/assets"; // keep this if you already export assets
const collectionItems = [
  { id: 1, src: assets.banner1, title: "Bagpacks", category: "Bags", color: "" },
  { id: 2, src: assets.banner2, title: "Trophies", category: "trophy", color: "" },
  { id: 3, src: assets.banner3, title: "Insulated Water Bottles", category: "Bottles", color: "from-teal-400 to-teal-600" },
  { id: 4, src: assets.banner4, title: "Blazers", category: "Apparel", color: "from-blue-400 to-blue-600" },
  { id: 5, src: assets.banner5, title: "Executive Gift sets", category: "Gift-items", color: "from-indigo-400 to-indigo-600" },
  { id: 6, src: assets.banner6, title: "Dairy Set", category: "Gift-items", color: "from-rose-400 to-rose-600" },
];

/* ------------------ Grid & Wrapper ------------------ */
const CollectionGrid = () => {
  const getAnimationDirection = (index) => {
    const col = index % 3;
    const row = Math.floor(index / 3);
    if (col === 0) return { x: -100, y: 0 };
    if (col === 2) return { x: 100, y: 0 };
    return { x: 0, y: row % 2 === 0 ? -100 : 100 };
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 py-12">
      {collectionItems.map((item, index) => {
        const slug = slugify(item.category || item.title);
        return (
          <Link key={item.id} href={`/category/${slug}`} className="block">
            <CollectionCard index={index} direction={getAnimationDirection(index)}>
              <div className="relative group cursor-pointer h-80">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300 rounded-3xl`}
                />

                <div className="absolute inset-0 rounded-3xl overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900/90 to-transparent rounded-b-3xl">
                  <p className="text-sm text-gray-300 mb-1 font-medium">{item.category}</p>
                  <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                </div>
              </div>
            </CollectionCard>
          </Link>
        );
      })}
    </div>
  );
};

const TrendingCollection = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-inter">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center my-20"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-500">
          Luxury Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          A curated set of creative collection.
        </p>
      </motion.div>

      <CollectionGrid />

      <motion.div
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
        className="text-center mt-16 pb-16"
      >
        <p className="text-gray-500 italic"></p>
      </motion.div>
    </div>
  );
};

export default TrendingCollection;
