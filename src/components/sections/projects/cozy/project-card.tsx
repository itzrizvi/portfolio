import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { Button, buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';

import { Project } from '@/types/project';
import { GithubIcon, GlobeIcon, InfoIcon } from 'lucide-react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import RevealText from '@/components/reveal-text';

interface ProjectCardProps extends Project {
  className?: string;
}

function ProjectCard({
  name,
  description,
  thumbnail,
  slug,
  tags,
  className,
  is_public
}: ProjectCardProps) {
  return (
    <Card
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden rounded-md bg-muted/40',
        !is_public && 'cursor-default',
        className
      )}
    >
      <CardContent className="z-[2] inline-block w-full overflow-hidden p-0 relative">
        {is_public ? (
          <Image
            src={thumbnail || '/placeholder.svg'}
            alt={`Image of ${name}`}
            width={0}
            height={0}
            sizes="100vw"
            className="aspect-[16/9] w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="aspect-[16/9] w-full bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-700 dark:to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300/50 to-gray-500/50 dark:from-gray-600/50 dark:to-gray-800/50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-gray-600 dark:text-gray-400 px-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-400 dark:bg-gray-600 rounded-lg blur-sm"></div>
                <p className="text-sm font-medium opacity-60">Exclusive Content</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <div className="text-center text-white px-4">
                <p className="text-sm font-medium">
                  Exclusive preview — drop me a note to explore.
                </p>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="grid grid-cols-1 items-center gap-4 p-4 md:p-6 lg:grid-cols-1">
        <div>
          <h3 className="text-xl font-bold">
            <RevealText delay={0.1}>{name}</RevealText>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <RevealText delay={0.01}>{description || ''}</RevealText>
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {tags?.map((tag, index) => <Badge key={index}>{tag}</Badge>)}
          </div>
        </div>
      </CardFooter>
      {is_public && <Link href={'/projects/' + slug} className="z-1 absolute inset-0 block" />}
    </Card>
  );
}

export default ProjectCard;
