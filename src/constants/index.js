import {
  backend,
  comingsoon,
  creator,
  csunshine,
  expressjs,
  foodi,
  graphql,
  javascript,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  playstore,
  postgresql,
  reactjs,
  reactnative,
  redux,
  tweetsy,
  typescript,
  usbangla,
  web,
  githubC,
  linkedin,
  gmail,
  phone
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About"
  },
  {
    id: "work",
    title: "Work"
  },
  {
    id: "tech",
    title: "Technologies"
  },
  {
    id: "projects",
    title: "Projects"
  },
  {
    id: "feedbacks",
    title: "Feedbacks"
  },
  {
    id: "contact",
    title: "Contact"
  }
];

const services = [
  {
    title: "Web Application Development",
    icon: web
  },
  {
    title: "Backend Development",
    icon: backend
  },
  {
    title: "Mobile Application Development",
    icon: mobile
  },
  {
    title: "Custom Software Development",
    icon: creator
  }
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React JS",
    icon: reactjs
  },
  {
    name: "React Native",
    icon: reactnative
  },
  {
    name: "Next JS",
    icon: nextjs
  },
  {
    name: "Redux Toolkit",
    icon: redux
  },
  {
    name: "Node JS",
    icon: nodejs
  },
  {
    name: "Express JS",
    icon: expressjs
  },
  {
    name: "GraphQL",
    icon: graphql
  },
  {
    name: "MongoDB",
    icon: mongodb
  },
  {
    name: "PostgreSQL",
    icon: postgresql
  }
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "TechnoNext Software Ltd - (US-Bangla Group)",
    icon: usbangla,
    iconBg: "#E6DEDD",
    date: "Oct 2023 - Present",
    points: [
      "Actively contributing to the development and success of a groundbreaking Food Delivery App project, closely aligned with industry leaders like FoodPanda",
      "Employed Agile methodologies to adapt to evolving project requirements, fostering a dynamic and collaborative work environment.",
      "Implemented rigorous testing protocols to guarantee the app's reliability, security, and overall quality.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers."
    ]
  },
  {
    title: "Full stack Software Developer",
    company_name: "C-Sunshine",
    icon: csunshine,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Sep 2023",
    points: [
      "Spearheaded the development of cutting-edge e-commerce solutions.",
      "Utilized Node.js, including Nest.js, to create robust and scalable applications.",
      "Designed system process and workflows for new CMS App projects.",
      "Maintained productivity on the other stack projects based on PHP (laravel, Vue etc).",
      "Engineered APIs and handled seamless integrations."
    ]
  },
  {
    title: "Backend Software Developer (Intern)",
    company_name: "Tweetsy.inc",
    icon: tweetsy,
    iconBg: "#383E56",
    date: "March 2022 - Sep 2022",
    points: [
      "Contributed to SAAS software development by implementing backend functionalities.",
      "Applied DevOps practices to streamline the development and deployment processes.",
      "Designed and managed databases, with a specialization in NoSQL databases.",
      "Designed workflow for new features on different apps according to requirements and presented them to the project manager.",
      "Successfully launched the first SAAS software into production to enhance user experiences."
    ]
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rizvi proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "Wow - absolutely amazing developer. He answered all my questions after the website was made. I can't wait to work with Shahriar again! thanks for your hard work!",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "Awesome developer. He did it again. A very good developer with proper communication skills, he work for buyer satisfaction. Glad to work with him.",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    testimonial:
      "This developer is by far the most trustworthy, analytical, helpful and knowledgeable that I have come across on this website. Thank you Shahriar!",
    name: "Jenny",
    designation: "CTO",
    company: "Cescols Inc",
    image: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    testimonial:
      "He is sharp and to the point. Fixed the bugs on my CMS software which had some production bugs.",
    name: "William",
    designation: "CTO",
    company: "C-Sunshine",
    image: "https://randomuser.me/api/portraits/men/14.jpg"
  }
];

const projects = [
  {
    name: "Foodi Web App",
    description:
      "Bangladesh's largest Food delivery web application, Contributing on some very vital areas this application like Portal, CMS and CRM. So far this is the first scalable and optimized food delivery app in Bangladesh",
    tags: [
      {
        name: "typescript",
        color: "red-orange-text-gradient"
      },
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "prime-react",
        color: "green-text-gradient"
      },
      {
        name: "context-api",
        color: "yellow-green-text-gradient"
      },
      {
        name: "redux",
        color: "pink-text-gradient"
      },
      {
        name: "formik",
        color: "blue-purple-text-gradient"
      }
    ],
    logo: foodi,
    project_link: "https://foodibd.com"
  },
  {
    name: "Foodi Mobile App",
    description:
      "Actively contributing on Mobile Application of Foodi. Main responsibilities are optimizing the performances, fix the production bugs, introducing new feature or improvement of any existing feature.",
    tags: [
      {
        name: "typescript",
        color: "red-orange-text-gradient"
      },
      {
        name: "react-native",
        color: "blue-text-gradient"
      },
      {
        name: "redux",
        color: "green-text-gradient"
      },
      {
        name: "flipper",
        color: "pink-text-gradient"
      },
      {
        name: "mmkv",
        color: "yellow-green-text-gradient"
      },
      {
        name: "hook-form",
        color: "purple-pink-text-gradient"
      }
    ],
    logo: playstore,
    project_link: "https://play.google.com/store/apps/details?id=com.foodiBd"
  },
  {
    name: "iMessage - Live Chat",
    description:
      "Web-based platform that allows users to search and connect with anonymous peoples and chat and also have can have conversation by creating groups. Handled authentication by only google sign in and by one click.",
    tags: [
      {
        name: "typescript",
        color: "blue-purple-text-gradient"
      },
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "prisma",
        color: "green-text-gradient"
      },
      {
        name: "graphQL",
        color: "pink-text-gradient"
      },
      {
        name: "chakra-ui",
        color: "red-orange-text-gradient"
      }
    ],
    source_code_link: "https://github.com/itzrizvi/iMessage-frontend"
  },
  {
    name: "E-commerce Backend",
    description:
      "The backend of this e-commerce application is built using Node.js with Express.js as the primary web framework. Utilized Apollo Server for implementing a GraphQL API, enabling efficient data retrieval and manipulation. AWS SDK is integrated for seamless interaction with Amazon Web Services, while bcrypt ensures secure password hashing for user authentication. ",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient"
      },
      {
        name: "expressjs",
        color: "green-text-gradient"
      },
      {
        name: "apollo-server",
        color: "pink-text-gradient"
      },
      {
        name: "graphQL",
        color: "yellow-green-text-gradient"
      },
      {
        name: "postgreSQL",
        color: "purple-pink-text-gradient"
      },
      {
        name: "aws",
        color: "green-text-gradient"
      }
    ],
    source_code_link: "https://github.com/itzrizvi/e-commerce-backend-v2"
  },
  {
    name: "Loading...",
    description: "New and major projects are coming up soon...",
    logo: comingsoon,
    project_link: "#"
  }
];

const usefulcontacts = [
  {
    logo: linkedin,
    url: "https://www.linkedin.com/in/shahriar-rizvi/"
  },
  {
    logo: githubC,
    url: "https://github.com/itzrizvi"
  },
  {
    logo: gmail,
    url: "mailto:shahriar.rizvi02@gmil.com"
  },
  {
    logo: phone,
    url: "tel:+8801766922253"
  }
];

export {
  experiences,
  projects,
  services,
  technologies,
  testimonials,
  usefulcontacts
};
