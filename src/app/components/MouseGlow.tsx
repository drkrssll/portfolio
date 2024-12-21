"use client"

import { useEffect, useState } from "react";

export interface MousePosition {
  x: number;
  y: number;
}

const MouseGlow = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10"
      style={{
        background: `radial-gradient(
          circle at ${mousePosition.x}px ${mousePosition.y}px,
          rgba(255, 255, 255, 0.15) -5%,
          rgba(255, 255, 255, 0.05) 5%,
          transparent 15%
        )`
      }}
    />
  );
};

export default MouseGlow;
