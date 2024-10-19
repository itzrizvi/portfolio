'use client';

import React, { useEffect, useState } from 'react';
import MotionWrap from '@/components/motion-wrap';
import SkillCard from './skill-card';

import { skills } from '@/components/sections/skills/config';

function Skills() {
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
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="skills"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            {isMobile && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Tech Mastery / Aspirations
              </h2>
            )}
            {isMobile && (
              <p className="text-gray-500 dark:text-gray-400">
                These are the skills I’ve mastered over time, along with areas
                I’m passionate about exploring and expanding as I continue to
                grow.
              </p>
            )}
          </div>
          <div className="space-y-4">
            {skills.slice(0, 2).map((skill, index) => (
              <SkillCard
                key={index}
                name={skill.name}
                description={skill.description}
                Icon={skill.Icon}
              />
            ))}
          </div>
          <div className="space-y-4">
            {!isMobile && (
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Tech Mastery / Aspirations
              </h2>
            )}
            {!isMobile && (
              <p className="text-gray-500 dark:text-gray-400">
                These are the skills I’ve mastered over time, along with areas
                I’m passionate about exploring and expanding as I continue to
                grow.
              </p>
            )}
            <div className="grid gap-4">
              {skills.slice(2, 4).map((skill, index) => (
                <SkillCard
                  key={index}
                  name={skill.name}
                  description={skill.description}
                  Icon={skill.Icon}
                />
              ))}
            </div>
          </div>
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

export default Skills;
