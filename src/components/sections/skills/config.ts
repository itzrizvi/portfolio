import { Skill } from '@/types/skill';
import { DatabaseIcon, CogIcon, HammerIcon, Code2 } from 'lucide-react';

const trimLen: number = -1; // 0 is accordion only, -1 is does not restrict the length

const skills: Skill[] = [
  {
    name: 'Programming Languages',
    Icon: Code2,
    description: `
          Languages: </br>
          
          - JavaScript, TypeScript, PHP, SQL </br>

          Markup & Related: </br>

          - HTML5, CSS3, SCSS
          `
  },
  {
    name: 'Technologies and Frameworks',
    Icon: CogIcon,
    description: `
        - React Native, React.js, Next.js, Vue.js, Svelte</br>
        - Prime React, Primeflex, Material UI, Tailwind CSS, Bootstrap, Chakra UI, Framer Motion</br>
        - Redux, RTK Query</br>
        - Node.js, Nest.js, REST API, GraphQL, AWS 
    `
  },
  {
    name: 'Databases and ORM',
    Icon: DatabaseIcon,
    description: `
        - MongoDB, MySQL, PostgreSQL</br>
        - Mongoose, Sequelize, Prisma, Type ORM</br>
    `
  },
  {
    name: 'Tools and Softwares',
    Icon: HammerIcon,
    description: `
        - GitLab, GitHub, Postman, Flipper</br>
        - VS Code, Intellij</br>
        - Figma
    `
  }
];

export { trimLen, skills };
