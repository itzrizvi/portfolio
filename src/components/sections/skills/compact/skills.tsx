import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import SkillCard from './skill-card';

import { skills } from '@/components/sections/skills/config';

function Skills() {
  return (
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="skills"
    >
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              Tech Mastery / Aspirations
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              These are the skills I’ve mastered over time, along with areas I’m
              passionate about exploring and expanding as I continue to grow.
            </p>
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

export default Skills;
