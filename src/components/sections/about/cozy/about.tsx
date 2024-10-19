import React from 'react';
import MotionWrap from '@/components/motion-wrap';
import Image from 'next/image';
import Reveal from '@/components/reveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowUpRightIcon } from 'lucide-react';
import RevealText from '@/components/reveal-text';

function About() {
  return (
    <MotionWrap
      className="mx-auto w-full max-w-[1400px] py-24 lg:py-32"
      id="tech"
    >
      {/* TODO: Redesign for horizontal */}
      <div className="space-y-4 px-4 md:px-6 lg:space-y-10">
        <div className="flex w-full flex-col items-center justify-center text-left lg:flex-row lg:justify-between">
          <div className="flex flex-col items-center lg:items-start">
            <Reveal>
              <h2 className="text-2xl font-bold tracking-wide sm:text-3xl md:text-4xl lg:text-5xl/none">
                Quest / Behind the Code
              </h2>
            </Reveal>
          </div>
          <p className="mt-4 hidden text-gray-500 dark:text-gray-400 lg:mt-0 lg:block lg:w-[35%]">
            This is the place where I explain my journey through tech and
            origins of my passion, despite not having a traditional "CS" degree.
          </p>
        </div>
        <div className="flex w-full flex-col justify-center gap-3 text-left lg:flex-row lg:justify-between ">
          <div className="space-y-4 text-justify lg:items-start">
            <p className="mt-6 max-w-[700px] text-justify text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <RevealText delay={0.01}>
                Currently, I am focused on developing mobile application with
                React Native and other related technologies. As a core developer
                for Foodi (the leading food delivery app in Bangladesh) with
                almost 225K users, I contribute to its substantial impact on the
                food delivery landscape.
              </RevealText>
            </p>

            <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <RevealText delay={0.01}>
                The first piece of technology I ever encountered was a folding
                Samsung mobile when I was in 9th grade. I never had formal
                guidance in learning about computers; my journey began by
                watching a relative play games and explore the digital world.
                Growing up in a small village where owning a computer was a
                luxury, I didn’t have access to one until I reached 12th grade.
              </RevealText>
            </p>

            <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <RevealText delay={0.01}>
                After completing 10th grade with a low GPA in Science,
                surrounded by excelling peers, the fear of failure and lack of
                guidance led to a shift towards Business Studies in 11th grade,
                finishing 12th with an A. Despite discouragement from many, the
                passion for technology remained strong, leading to self-taught
                skills and freelancing. Meanwhile, my father enrolled me in a
                private university for an LL.B., he had a different plan for me.
                Yet, even during law school, the focus stayed on tech,
                continuing freelance work in web development and WordPress
                customization. But anyway I did finished my graduation with an
                A.
              </RevealText>
            </p>
          </div>
          <div className="space-y-4 text-justify">
            <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <RevealText delay={0.01}>
                During the COVID-19 period, I spent most of time playing PUBG
                Mobile and even participated in a few tournaments just after
                graduation. While people around me thought I was wasting time,
                that phase became crucial in shaping my career. It gave me the
                clarity to focus on learning and making an impact, whether for
                myself or for a future company. I knew freelancing wasn’t a
                long-term path for me—while others may see it differently, I
                didn’t see a career in it. Soon after, I began an internship at
                a SaaS startup, already equipped with knowledge of two
                programming languages, frameworks, libraries, databases, and a
                bit of software infrastructures.
              </RevealText>
            </p>
            <p className="mt-6 max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              <RevealText delay={0.01}>
                Over the years, I’ve worked on web apps, CMS, CRM, and portal
                development, handling both frontend and backend using various
                databases, ORM, and real-time communication technologies like
                Socket. Currently, my focus is on mobile app development.
              </RevealText>
            </p>
          </div>

          {/* <Button asChild>
            <Link href="resume.pdf" target="_blank">
              View Resume <ArrowUpRightIcon className="ml-2 size-5" />
            </Link>
          </Button> */}
        </div>
      </div>
    </MotionWrap>
  );
}

export default About;
