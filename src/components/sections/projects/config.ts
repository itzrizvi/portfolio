import { Project } from '@/types/project';

const projects: Project[] = [
  {
    name: 'Exclusive Project 1 (Android and iOS App)',
    slug: '',
    description:
      'Bangladesh’s Largest Food Delivery App at Your Fingertips with 1M+ downloads so far!!!, Read More...',
    thumbnail: '/images/projects/foodi_mobile_app/cover.webp',
    tags: ['TypeScript', 'React Native', 'RTK', 'MMKV'],
    is_public:false
  },
  {
    name: 'Exclusive Project 2 (Partner App)',
    slug: '',
    description:
      'Streamline Your Business with Bangladesh’s Largest Food Delivery Network, Read More...',
    thumbnail: '/images/projects/foodi_partner_app/cover.webp',
    tags: ['TypeScript', 'React Native', 'RTK', 'MMKV'],
    is_public:false
  },
  {
    name: 'Exclusive Project 3 (Restaurant Portal)',
    slug: '',
    description:
      'Bangladesh largest food delivery app, which has several parts and the restaurant portal is one of the vital. Read More...',
    thumbnail: '/images/projects/foodi_restaurant_portal/cover.webp',
    tags: ['TypeScript', 'NextJS', 'Primereact', 'Primeflex', 'formik'],
    is_public:false
  },
  {
    name: 'Exclusive Project 4 (CMS)',
    slug: '',
    description:
      'The Ultimate Content Management for Bangladesh’s Largest Food Delivery Platform, Read More...',
    thumbnail: '/images/projects/foodi_cms/cover.webp',
    tags: ['TypeScript', 'NextJS', 'Primereact', 'Primeflex', 'formik', 'Redux'],
    is_public:false
  },
  {
    name: 'Exclusive Project 5 (CRM)',
    slug: '',
    description:
      'Advanced Customer Relationship Management for food delivery app, Bangladesh’s Leading Food Delivery Service, Read More...',
    thumbnail: '/images/projects/foodi_crm/cover.webp',
    tags: ['TypeScript', 'NextJS', 'Primereact', 'Primeflex', 'formik', 'Redux'],
    is_public:false
  },
  {
    name: 'iMessage - Live Chat',
    slug: 'imessage_live_chat',
    description:
      'iMessage is a simple live chatting pet project of mine for doing anonymous chatting and fun, Read More...',
    thumbnail: '/images/projects/imessage_live_chat/cover.webp',
    tags: ['TypeScript', 'NextJs', 'Charka UI', 'Prisma', 'GraphQL'],
    is_public:true
  },
  {
    name: 'E-commerce Backend',
    slug: 'e-commerce_backend',
    description:
      'This is a Node based whole e-commerce backend, which was my first industrial project, Read More...',
    thumbnail: '/images/projects/e-commerce_backend/cover.webp',
    tags: [
      'NodeJs',
      'ExpressJs',
      'GraphQL',
      'Apollo Server',
      'PostgreSQL',
      'Sequelize',
      'AWS'
    ],
    is_public:true
  }
];

export { projects };
