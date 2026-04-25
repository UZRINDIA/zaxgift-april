"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "@/assets/assets";

/**
 * SimilarMediaPlayer.jsx
 * - Accepts slides either as imported assets (objects) or string paths.
 * - Normalizes slides to always have `.src` (string).
 *
 * Usage:
 * <SimilarMediaPlayer slides={mySlidesArray} autoplay={true} loop={true} showControls={true} />
 */

const defaultSlides = [
  {
    id: "local-1",
    image: assets?.notepadbanner ?? "/assets/notepadbanner.jpg",
    title: "Creative Vision",
    subtitle: "",
    duration: 4200,
  },
  {
    id: "local-2",
    src: assets.notepadbanner1,
    title: "Corporate Style",
    subtitle: "Polished pieces for the office and beyond.",
    duration: 4200,
  },
  {
    id: "local-3",
    src: assets.notepadbanner2,
    title: "Luxury Packaging",
    subtitle: "Make the unboxing as special as the gift.",
    duration: 4800,
  },
  {
    id: "local-4",
    src: assets.notepadbanner3,
    title: "Studio Shots",
    subtitle: "Clean, crisp product photography that sells.",
    duration: 4000,
  },
];

export default function SimilarMediaPlayer({
  slides = [],
  autoplay = true,
  loop = true,
  showControls = true,
}) {
  // helper: normalize each slide so it always has .src (string)
  const normalizeSlides = (slidesArray) =>
    slidesArray.map((s, idx) => {
      // prefer s.image then s.src then s.img
      const imported = s.image ?? s.src ?? s.img;
      const src =
        typeof imported === "string"
          ? imported
          : imported && typeof imported === "object" && "src" in imported
          ? imported.src
          : undefined;

      // ensure unique id
      const id = s.id ?? `slide-${idx}`;
      return { ...s, id, src };
    });

  const slidesToUse = normalizeSlides(slides && slides.length > 0 ? slides : defaultSlides);

  // state
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(autoplay && slidesToUse.length > 1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const timeoutRef = useRef(null);
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // preload images
  useEffect(() => {
    let cancelled = false;
    const preload = async () => {
      const promises = slidesToUse.map(
        (s) =>
          new Promise((res) => {
            if (!s.src) return res(true);
            const img = new window.Image();
            img.src = s.src;
            img.onload = () => res(true);
            img.onerror = () => res(true);
          })
      );
      await Promise.all(promises);
      if (!cancelled) setLoaded(true);
    };
    preload();
    return () => {
      cancelled = true;
    };
  }, [slidesToUse]);

  // autoplay timer
  useEffect(() => {
    if (!playing || slidesToUse.length <= 1) return;
    const duration = slidesToUse[index].duration ?? 4000;
    timeoutRef.current = window.setTimeout(() => next(), duration);
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, playing]);

  // keyboard nav
  useEffect(() => {
    const onKey = (e) => {
      if (e.code === "ArrowRight") next();
      if (e.code === "ArrowLeft") prev();
      if (e.code === "Space") setPlaying((p) => !p);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const goTo = (i) => {
    if (i < 0) return loop ? setIndex(slidesToUse.length - 1) : setIndex(0);
    if (i >= slidesToUse.length) return loop ? setIndex(0) : setIndex(slidesToUse.length - 1);
    setIndex(i);
  };
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  const toggleFullscreen = async () => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      await el.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      await document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  if (!loaded)
    return (
      <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-gray-900 text-white text-center">
        Loading slides...
      </div>
    );

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-black">
      <div
        className="relative w-full h-[56vw] max-h-[560px] bg-black select-none"
        onMouseEnter={() => setPlaying(false)}
        onMouseLeave={() => autoplay && setPlaying(true)}
      >
        {/* slides stack */}
        <AnimatePresence initial={false} mode="wait">
          {slidesToUse.map((s, i) => {
            if (i !== index) return null;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* background image via CSS (covers) */}
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{ backgroundImage: s.src ? `url("${s.src}")` : undefined, willChange: "transform, opacity" }}
                  aria-hidden
                />

                {/* optional gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Controls that appear on top when visible */}
                {/* Center play CTA */}
                {!playing && (
                  <motion.button
                    onClick={() => setPlaying(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/10 flex items-center justify-center"
                    aria-label="Play slideshow"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.button>
                )}

                {/* small featured badge */}
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="absolute left-4 top-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur text-white text-xs font-medium"
                >
                  Featured
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>

        {/* Progress bar */}
        <div className="absolute left-0 right-0 bottom-0 p-3">
          <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
            <motion.div
              key={index + (playing ? "-play" : "-pause")}
              initial={{ width: 0 }}
              animate={{ width: playing ? "100%" : 0 }}
              transition={{ duration: (slidesToUse[index].duration ?? 4000) / 1000, ease: "linear" }}
              className="h-full bg-white/60"
            />
          </div>
        </div>

        {/* Controls overlay */}
        {showControls && (
          <div className="absolute left-0 right-0 top-0 p-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-2">
              <button onClick={() => setPlaying((p) => !p)} className="p-2 rounded-md bg-white/5 text-white" aria-label="Play/Pause">
                {playing ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button onClick={prev} className="p-2 rounded-md bg-white/5 text-white" aria-label="Previous">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 19V5l-8 7 8 7zm2 0h2V5h-2v14z" />
                </svg>
              </button>

              <button onClick={next} className="p-2 rounded-md bg-white/5 text-white" aria-label="Next">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 5v14l8-7-8-7zm-2 0H9v14h2V5z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <div className="text-white/80 text-sm">
                {index + 1}/{slidesToUse.length}
              </div>
              <button onClick={toggleFullscreen} className="p-2 rounded-md bg-white/5 text-white" aria-label="Fullscreen">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 14H5v5h5v-2H7v-3zm0-4h2V7h3V5H7v5zm10 9h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Thumbnails / dots */}
      <div className="p-3 flex items-center justify-center gap-3 bg-black">
        {slidesToUse.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            className={`w-14 h-10 rounded-md overflow-hidden ring-2 ${i === index ? "ring-white/50" : "ring-white/10"}`}
            aria-label={`Go to slide ${i + 1}`}
          >
            {s.src ? (
              // plain <img> is fine because s.src is a string after normalization
              <img src={s.src} alt={s.title ?? `thumb-${i + 1}`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/5" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
