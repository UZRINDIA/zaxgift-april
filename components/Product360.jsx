import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

/**
 * Product360Viewer
 *
 * Props:
 * - images: string[] (required) // ordered 360 frames (e.g. 0..35)
 * - width: number (optional) default 600 (px) - viewer width
 * - height: number (optional) default 600 (px) - viewer height
 * - initialFrame: number (optional) default 0
 * - useNextImage: boolean (optional) default true (use Next/Image)
 *
 * Usage:
 * <Product360Viewer images={productData.spinImages} width={700} height={700} />
 */
export default function Product360Viewer({
  images = [],
  width = 600,
  height = 600,
  initialFrame = 0,
  useNextImage = true,
}) {
  const total = images.length;
  const clampIndex = (i) => ((i % total) + total) % total;

  const [frame, setFrame] = useState(clampIndex(initialFrame));
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [autoSpin, setAutoSpin] = useState(false);
  const containerRef = useRef(null);

  // pointer / drag state
  const lastX = useRef(0);
  const velocity = useRef(0); // px per ms
  const lastMoveTime = useRef(0);
  const momentumId = useRef(null);
  const rafId = useRef(null);

  // Sensitivity: how many pixels of drag advances one frame
  // Increase sensitivity for fewer images (bigger jump per pixel)
  const pixelsPerFrame = Math.max(4, width / (total || 36) / 2);

  useEffect(() => {
    return () => {
      cancelAnimationFrame(rafId.current);
      clearInterval(momentumId.current);
    };
  }, []);

  // Auto-spin (simple)
  useEffect(() => {
    let id;
    if (autoSpin && total > 1) {
      id = setInterval(() => {
        setFrame((f) => clampIndex(f + 1));
      }, 80); // speed: change every 80ms
    }
    return () => clearInterval(id);
  }, [autoSpin, total]);

  // Pointer handlers (works for mouse + touch via pointer events)
  const onPointerDown = (e) => {
    // capture pointer
    if (!containerRef.current) return;
    containerRef.current.setPointerCapture(e.pointerId);
    setIsPointerDown(true);
    lastX.current = e.clientX;
    lastMoveTime.current = performance.now();
    velocity.current = 0;
    // stop momentum
    if (momentumId.current) {
      clearInterval(momentumId.current);
      momentumId.current = null;
    }
  };

  const onPointerMove = (e) => {
    if (!isPointerDown) return;
    const now = performance.now();
    const dx = e.clientX - lastX.current;
    const dt = Math.max(1, now - lastMoveTime.current);
    // compute velocity in px/ms
    velocity.current = dx / dt;
    lastMoveTime.current = now;
    lastX.current = e.clientX;

    // change frames based on dx
    if (Math.abs(dx) >= 1) {
      const deltaFrames = Math.round(dx / pixelsPerFrame) * -1; // invert so drag-right rotates right->left
      if (deltaFrames !== 0) {
        setFrame((f) => clampIndex(f + deltaFrames));
      }
    }
  };

  const onPointerUp = (e) => {
    setIsPointerDown(false);
    try {
      containerRef.current?.releasePointerCapture?.(e.pointerId);
    } catch (err) {}
    // apply momentum: convert velocity (px/ms) into frames per interval
    // simple exponential decay loop using requestAnimationFrame
    let v = velocity.current * 1000; // px/s
    const decay = 0.95; // friction (0.95 per tick)
    const step = () => {
      // convert v px/s to frame delta per tick (tick ~16ms)
      const dxPerFrame = v * (16 / 1000);
      const deltaFrames = Math.round(dxPerFrame / pixelsPerFrame) * -1;
      if (Math.abs(v) < 20) {
        // stop when slow
        v = 0;
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
        return;
      } else {
        if (deltaFrames !== 0) setFrame((f) => clampIndex(f + deltaFrames));
        v *= decay;
        rafId.current = requestAnimationFrame(step);
      }
    };
    rafId.current = requestAnimationFrame(step);
  };

  // keyboard arrows
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") setFrame((f) => clampIndex(f - 1));
      if (e.key === "ArrowRight") setFrame((f) => clampIndex(f + 1));
      if (e.key === " ") setAutoSpin((s) => !s);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [total]);

  if (!images || images.length === 0) {
    return (
      <div style={{ width, height, display: "grid", placeItems: "center", background: "#f3f4f6" }}>
        No images provided
      </div>
    );
  }

  // render current frame; wrap with container listening to pointer events
  return (
    <div style={{ width, maxWidth: width, userSelect: "none" }}>
      <div
        ref={containerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          width,
          height,
          borderRadius: 12,
          overflow: "hidden",
          position: "relative",
          background: "#fff",
          touchAction: "pan-y",
          cursor: isPointerDown ? "grabbing" : "grab",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        aria-label="360 product viewer"
      >
        {/* image */}
        {useNextImage ? (
          <Image
            src={images[frame]}
            alt={`frame-${frame}`}
            width={width}
            height={height}
            objectFit="contain"
            priority={true}
          />
        ) : (
          <img
            src={images[frame]}
            alt={`frame-${frame}`}
            style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
            draggable={false}
          />
        )}

        {/* controls overlay */}
        <div style={{ position: "absolute", left: 8, top: 8, display: "flex", gap: 8 }}>
          <button
            onClick={(e) => { e.stopPropagation(); setFrame((f) => clampIndex(f - 1)); }}
            style={controlButtonStyle}
            aria-label="previous"
          >
            ◀
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setFrame((f) => clampIndex(f + 1)); }}
            style={controlButtonStyle}
            aria-label="next"
          >
            ▶
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setAutoSpin((s) => !s); }}
            style={{ ...controlButtonStyle, background: autoSpin ? "#111" : "rgba(0,0,0,0.6)", color: "#fff" }}
            aria-pressed={autoSpin}
            aria-label="auto spin"
          >
            ⟳
          </button>
        </div>

        {/* frame indicator */}
        <div style={{ position: "absolute", right: 8, bottom: 8, padding: "6px 8px", background: "rgba(0,0,0,0.5)", color: "#fff", borderRadius: 8, fontSize: 12 }}>
          {frame + 1}/{total}
        </div>
      </div>
    </div>
  );
}

// small shared style for control buttons
const controlButtonStyle = {
  width: 36,
  height: 36,
  borderRadius: 8,
  border: "none",
  background: "rgba(255,255,255,0.95)",
  boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};
