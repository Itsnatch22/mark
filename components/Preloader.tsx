// components/Preloader.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
  const [percentage, setPercentage] = useState(0);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (percentage === 100) {
      const tl = gsap.timeline();

      tl.to(preloaderRef.current, {
        y: "-100%",
        duration: 1.2,
        ease: "power4.inOut",
        delay: 0.5,
      })
        .fromTo(
          "body",
          { overflow: "hidden" },
          { overflow: "auto", duration: 0.1 },
          "-=1"
        )
        .then(() => {
          setIsLoading(false);
        });
    }
  }, [percentage]);

  // Don't render if not loading
  if (!isLoading) return null;

  return (
    <div
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white"
    >
      <div className="relative w-full max-w-[1200px] px-8">
        <div className="mb-4 h-1 w-full bg-gray-700">
          <div
            className="h-full bg-white transition-all duration-300 ease-out"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <div className="flex justify-between text-sm uppercase tracking-wider">
          <span>GETTING READY FOR THE EXPERIENCE</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
=======

>>>>>>> ea423b9b3c3e168e46c4aad828b06b5ab220efd7
