'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isPurple, setIsPurple] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Alternating colors every 2 seconds
    const interval = setInterval(() => {
      setIsPurple(prev => !prev);
    }, 2000);

    // Set initial state
    gsap.set(cursor, { xPercent: -50, yPercent: -50 });

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out"
      });
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a') || target.closest('button') || target.getAttribute('role') === 'button';

      if (isClickable) {
        gsap.to(cursor, {
          scale: 0.5,
          opacity: 0.8,
          duration: 0.3
        });
      } else {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.3
        });
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);

    // Hide default cursor
    document.body.style.cursor = 'none';

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
      document.body.style.cursor = 'auto';
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] transition-colors duration-1000 ease-in-out ${
        isPurple ? 'bg-[#7000ff] shadow-[0_0_15px_#7000ff]' : 'bg-[#5bfb7a] shadow-[0_0_15px_#5bfb7a]'
      }`}
    />
  );
}
