'use client';

import { ReactNode } from 'react';
import { AnimatedBackground } from './animated-background';
import { usePathname } from 'next/navigation';

export function PageLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <div className="relative min-h-[calc(100vh-80px)]">
      {!isHomePage && (
        <>
          <AnimatedBackground 
            imageUrl="/image.jpg" 
            speed={0.3}
            className="fixed inset-0 -z-10"
          />
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
        </>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

