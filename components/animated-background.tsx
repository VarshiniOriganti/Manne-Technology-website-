'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

interface AnimatedBackgroundProps {
  imageUrl: string;
  speed?: number;
}

export function AnimatedBackground({ imageUrl, speed = 1 }: AnimatedBackgroundProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const position = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!backgroundRef.current) return;
      
      position.current += 0.1 * speed;
      if (position.current >= 100) {
        position.current = 0;
      }
      
      backgroundRef.current.style.backgroundPosition = `${position.current}% 50%`;
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [speed]);

  return (
    <div 
      ref={backgroundRef}
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: '120% auto',
        backgroundPosition: 'center',
        animation: 'slide 20s linear infinite',
      }}
    />
  );
}
