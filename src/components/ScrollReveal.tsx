"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: gsap.TweenVars;
  className?: string;
}

export default function ScrollReveal({
  children,
  animation = { y: 50, opacity: 0, duration: 0.8, ease: "power3.out" },
  className = "",
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      gsap.from(containerRef.current, {
        ...animation,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%", // Animation starts when top of element hits 85% of viewport
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
