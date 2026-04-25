import React, { useRef, useState } from "react";

export default function ProductCard3D({ image, title, price }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1; // invert for natural tilt
    const rotateY = (x - centerX) / 20;

    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "300px",
        height: "400px",
        perspective: "1000px",
        margin: "50px auto",
      }}
    >
      <div
        style={{
          transform: transform,
          transition: "transform 0.2s ease-out",
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
          backgroundColor: "#fff",
          position: "relative",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "70%",
            objectFit: "cover",
            transform: "translateZ(30px)",
          }}
        />
        <div
          style={{
            padding: "16px",
            transform: "translateZ(60px)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "1.25rem" }}>{title}</h3>
          <p style={{ color: "#777" }}>{price}</p>
        </div>
      </div>
    </div>
  );
}
