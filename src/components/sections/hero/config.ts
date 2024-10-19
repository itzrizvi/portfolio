import { Hero } from '@/types/hero';
import { metadata as meta } from '@/app/config';

const hero: Hero = {
  name: meta.author.name,
  label: meta.author.label,
  description: meta.site.description,
  descriptionSecond:
    'When I’m not immersed in coding, at first I’m a family man and I indulge in my love for music with guitar and singing, and unwind with captivating web series on crime, thriller, and detective narratives. Touring around adds another layer of adventure to my life.'
};

export { hero };
