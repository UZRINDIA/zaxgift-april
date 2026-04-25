"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { assets } from "@/assets/assets";

// motion-enabled Image
const MotionImage = motion(Image);

export default function HorizontalBannerWithImagesSized() {
  const [selected, setSelected] = useState(null);

  // each frame now includes `subtitle` (short) and `description` (full)
  const frames = [
    {
      id: 1,
      src: assets.bangsliderbanner4,
      title: "Festive and Gift Hampers",
      subtitle: "Curated hampers for every celebration",
      description:
        "Handpicked gift hampers for festivals and special occasions — customizable contents, premium packaging, and fast delivery. Perfect for family and friends.",
    },
    {
      id: 2,
      src: assets.bangsliderbanner2,
      title: "Corporate Gifting",
      subtitle: "Professional gifts for clients & teams",
      description:
        "Corporate gifting solutions including branded items, bulk discounts, and bulk order management. Ideal for employee recognition, client appreciation, and events.",
    },
    {
      id: 3,
      src: assets.bangsliderbanner3,
      title: "Personalised Gifts",
      subtitle: "Make it uniquely theirs",
      description:
        "Personalised items with names, messages, or photos — from custom mugs and journals to engraved keepsakes. Great for birthdays, anniversaries, and memorable milestones.",
    },
    {
      id: 4,
      src: assets.bangsliderbanner12,
      title: "Institutional and Bulk Orders",
      subtitle: "Large-quantity & institutional supply",
      description:
        "Bulk and institutional orders handled with care — scalable production, quality assurance, and reliable logistics for schools, NGOs, and corporate procurement.",
    },
  ];

  const containerHeight = 540;
  const collapsedMinWidth = 150;
  const collapsedMaxWidth = 220;
  const expandedFlex = 5;
  const collapsedFlex = 0.7;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-12">
      <div className="w-full max-w-7xl">
        <div className="flex gap-16" style={{ height: containerHeight }}>
          {frames.map((f) => {
            const isSelected = selected === f.id;
            const isAny = selected !== null;

            return (
              <motion.div
                key={f.id}
                layout
                onClick={() => setSelected(isSelected ? null : f.id)}
                className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer flex-shrink-0"
                style={{
                  flex: isSelected ? expandedFlex : isAny ? collapsedFlex : 1,
                  minWidth: isSelected ? 360 : collapsedMinWidth,
                  maxWidth: isSelected ? 2000 : collapsedMaxWidth,
                  height: containerHeight,
                  transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                aria-expanded={isSelected}
              >
                {/* COVER IMAGE */}
                <MotionImage
                  layoutId={`image-${f.id}`}
                  src={f.src}
                  alt={f.title}
                  fill
                  className="object-cover"
                  style={{ willChange: "transform, opacity" }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                />

                {/* Overlay */}
                <motion.div
                  className="absolute inset-0"
                  animate={{
                    background:
                      isAny && !isSelected ? "rgba(0,0,0,0.45)" : "rgba(0,0,0,0.20)",
                  }}
                  transition={{ duration: 0.25 }}
                />

                {/* Collapsed: show title + subtitle */}
                {!isSelected && (
                  <motion.div className="relative z-10 p-6 flex flex-col justify-start h-full">
                    <div className="text-white drop-shadow-lg text-lg font-semibold">
                      {f.title}
                    </div>
                    {f.subtitle && (
                      <div className="text-white/90 text-sm mt-1">{f.subtitle}</div>
                    )}
                  </motion.div>
                )}

                {/* EXPANDED CONTENT */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      className="relative z-20 flex w-full h-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.35 }}
                    >
                      {/* LEFT: image (50%) */}
                      <motion.div className="h-full relative" style={{ width: "50%" }}>
                        <MotionImage
                          src={f.src}
                          alt={f.title}
                          fill
                          className="object-cover"
                          layoutId={`image-${f.id}`}
                          sizes="50vw"
                        />
                      </motion.div>

                      {/* RIGHT: text (50%) */}
                      <motion.div
                        className="h-full p-8 overflow-auto"
                        style={{
                          width: "50%",
                          background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(0,0,0,0.12))",
                        }}
                        initial={{ x: 30, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 30, opacity: 0 }}
                        transition={{ duration: 0.45 }}
                      >
                        <h2 className="text-3xl font-bold text-black mb-3">{f.title}</h2>

                        {/* optional subtitle */}
                        {f.subtitle && <p className="text-black/90 mb-4">{f.subtitle}</p>}

                        {/* main description */}
                        <div className="text-sm text-black/80 space-y-3 mb-6">
                          <p>{f.description}</p>
                        </div>

                        {/* optional CTA or details */}
                        <div className="mt-6 flex justify-between items-center">
                         
                          <div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelected(null);
                              }}
                              className="px-4 py-2 rounded-md bg-white text-indigo-700 font-semibold"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
