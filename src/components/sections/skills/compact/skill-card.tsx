import React from 'react';
import { CardContent, CardFooter, Card } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

import Link from 'next/link';
import Image from 'next/image';
import { CodeIcon } from 'lucide-react';

import { Skill } from '@/types/skill';

import { cn } from '@/lib/utils';
import RevealText from '@/components/reveal-text';
import Reveal from '@/components/reveal';

interface SkillCardProps extends Skill {
  className?: string;
}

function SkillCard({ name, description, Icon, className }: SkillCardProps) {
  return (
    <Card className={cn('bg-muted/40', className)}>
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row gap-2">
            {Icon ? <Icon className="min-h-8 min-w-8" /> : <CodeIcon />}
            <h3 className="text-xl font-semibold">
              <RevealText>{name}</RevealText>
            </h3>
          </div>
          <Reveal>
            <p
              className="text-sm text-gray-500 dark:text-gray-400"
              dangerouslySetInnerHTML={{ __html: description || '' }}
            />
          </Reveal>
        </div>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
