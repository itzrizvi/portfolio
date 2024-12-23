import React from 'react';
import ProjectCard from './project-card';

import Reveal from '@/components/reveal';

import { projects } from '@/components/sections/projects/config';
import MotionWrap from '@/components/motion-wrap';

function Projects() {
  return (
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="projects"
    >
      <div className="space-y-4 px-4 md:space-y-6 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-start justify-center text-left lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Relentless Contributions
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            Here are some of my best contributions that I&apos;ve worked on so
            far for clients/works and personal projects.
          </p>
        </div>
        <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              slug={project.slug}
              name={project.name}
              description={project.description}
              tags={project.tags}
              thumbnail={project.thumbnail}
            />
          ))}
        </div>
      </div>
    </MotionWrap>
  );
}

export default Projects;
