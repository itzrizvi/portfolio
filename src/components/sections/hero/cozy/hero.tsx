'use client';
import React, { useEffect, useState } from 'react';
import MotionWrap from '@/components/motion-wrap';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

import { hero } from '@/components/sections/hero/config';
import RevealText from '@/components/reveal-text';

const ComputerCanvas = dynamic(() => import('../../canvas/Computer'), {
  ssr: false
});

function Hero() {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    // This effect runs only on the client
    if (width > 640) {
      // Perform client-side specific actions
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  }, [width]);

  return (
    <MotionWrap className="mx-auto mt-14 flex h-[calc(100dvh-62.5px-56px)] w-full max-w-[1400px] items-center">
      <div className="grid items-center justify-center gap-4 px-4 md:grid-cols-2 md:px-6 lg:gap-10">
        {!isMobile && (
          <motion.div initial="active" className="h-[400px] w-[600px]">
            <ComputerCanvas />
          </motion.div>
        )}
        <div className={`space-y-3 text-left`}>
          <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-foreground/10">
            {hero.label}
          </div>
          <h1 className="text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl/none">
            <RevealText delay={0.1}>Sleep | Eat | Code | Repeat</RevealText>
          </h1>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>{hero.description}</RevealText>
          </p>
          <p className="max-w-[600px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            <RevealText delay={0.01}>{hero.descriptionSecond}</RevealText>
          </p>
        </div>
      </div>
    </MotionWrap>
  );
}

interface WindowSize {
  width: number;
  height: number;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: 0,
    height: 0
  });

  useEffect(() => {
    // Check if window is defined to avoid SSR issues
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Ensure this only runs in the client
    if (typeof window !== 'undefined') {
      handleResize(); // Initial call to set the correct size
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return windowSize;
};

export default Hero;
