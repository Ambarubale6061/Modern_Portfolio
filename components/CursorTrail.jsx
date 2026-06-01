"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
  const dotRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const mouse = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    const animate = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.22;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.22;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <span
      ref={dotRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: "hsl(221, 83%, 63%)",
        boxShadow: "0 0 10px 3px hsla(221, 83%, 63%, 0.4)",
        opacity: 0,
        pointerEvents: "none",
        zIndex: 9999,
        willChange: "transform",
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
