import {
  aws,
  backend,
  carrent,
  creator,
  csunshine,
  expressjs,
  git,
  graphql,
  javascript,
  jobit,
  mobile,
  mongodb,
  nextjs,
  nodejs,
  postgresql,
  reactjs,
  redux,
  sequelize,
  tripguide,
  tweetsy,
  typescript,
  usbangla,
  web
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
  },
  {
    name: "AWS",
    icon: aws
  },
  {
    name: "Sequelize",
    icon: sequelize
  },
  {
    name: "git",
    icon: git
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
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg"
  }
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "mongodb",
        color: "green-text-gradient"
      },
      {
        name: "tailwind",
        color: "pink-text-gradient"
      }
    ],
    image: carrent,
    source_code_link: "https://github.com/"
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient"
      },
      {
        name: "restapi",
        color: "green-text-gradient"
      },
      {
        name: "scss",
        color: "pink-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/"
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient"
      },
      {
        name: "supabase",
        color: "green-text-gradient"
      },
      {
        name: "css",
        color: "pink-text-gradient"
      }
    ],
    image: tripguide,
    source_code_link: "https://github.com/"
  }
];

export { experiences, projects, services, technologies, testimonials };
