import {
  threed,
  backend,
  mentor,
  frontend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  // git,
  // figma,
  // docker,
  tbh,
  outlogics,
  arkellis,
  threejs,
  expressjs,
  babylonjs,
  nextjs,
  // firebase,
} from "../assets";

export const resume =
  "https://drive.google.com/file/d/1znDFIQafDb5ymwLERbYY5kVdL0uaRV3p/view";

export const about = {
  name: "Sreehari",
  role: "I build modern web apps with the MERN stack",
  overview:
    "Welcome to my website! I'm a Full-stack (MERN) developer with almost 5 years of experience, focused on building seamless and engaging front-end experiences. Passionate about mentoring and always exploring new tech, I'm currently diving into WebXR to push the boundaries of web development.",
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Web Developer",
    icon: frontend,
  },
  {
    title: "3D Web Developer",
    icon: threed,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mentor & Educator",
    icon: mentor,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Firebase",
  //   icon: firebase,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Babylon JS",
    icon: babylonjs,
  },
  // {
  //   name: "git",
  //   icon: git,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Arkellis",
    icon: arkellis,
    iconBg: "#BADFF5",
    date: "Jun 2023 - Present",
    points: [
      "led the development journey of the company's flagship product, from conceptualization to a fully-fledged software experience.",
      "Pioneering the integration of cutting-edge technologies such as 3D web development and exploring emerging trends like WebXR to deliver innovative solutions.",
      "Implemented advanced features, including real-time data functionalities, catering to diverse use cases such as visualization and remote controlling, enhancing user engagement and interaction.",
      "Engaged actively in product ideation meetings, providing valuable insights and contributions throughout the brainstorming process.",
    ],
  },

  {
    title: "Software Developer",
    company_name: "Outlogics",
    icon: outlogics,
    iconBg: "#BADFF5",
    date: "Apr 2022 - Jun 2023",
    points: [
      "Engaging directly with clients to understand their requirements, gather feedback, and ensure their satisfaction with our services.",
      "Spearheading the maintenance efforts for the company's product, ensuring its smooth operation and reliability.",
      "Implementing intricate new features and addressing bugs promptly to enhance the product's functionality and user experience.",
      "Taking on the responsibility of mentoring beginners through internship programs, imparting practical skills and knowledge in web development.",
    ],
  },
  {
    title: "Associate Software Developer",
    company_name: "TechByHeart",
    icon: tbh,
    iconBg: "#BADFF5",
    date: "Sep 2020 - Apr 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Development of an online internship platform from inception to launch.",
      "Learned backend development from scratch and implementing robust backend functionalities.",
    ],
  },
];

const projects = [
  {
    name: "Ausrine",
    description:
      "a SaaS platform revolutionizing businesses through the integration of Metaverse, Cloud, Data, and AI technologies.",
    points: [
      "Admin Dashboard: Developed a centralized data hub for streamlined asset and data management.",
      "Client-Side 3D Website: Enhanced immersive experience with 3D views, AR/VR, and advanced interactions.",
      "Notably, users can preview assets within their physical space using AR technology.",
      "Implemented slicing and animating functionalities for 3D models, enhancing user engagement.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "Babylon.js",
        color: "text-red-500",
      },
      {
        name: "Three.js",
        color: "text-gray-500",
      },
      {
        name: "MSAL",
        color: "text-green-500",
      },
      {
        name: "TanStack Query",
        color: "text-orange-500",
      },
      {
        name: "DevExtreme",
        color: "text-blue-500",
      },
    ],
  },
  {
    name: "Digital Experience Center",
    description:
      "An immersive platform for asset administration, combining real-time IoT data, Data visualization, 3D-AR previews, and Media.",
    points: [
      "Developed an immersive platform for asset administration",
      "Integrated real-time IoT data, data visualization, 3D-AR previews, and media.",
      "Featured a Presenter display and multiple Viewer displays connected to the Presenter.",
      "Empowered presenters to control and present asset-related data and media in an engaging and interactive manner.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "Nats.ws",
        color: "text-green-500",
      },
      {
        name: "Google Model Viewer",
        color: "text-gray-500",
      },
      {
        name: "Keycloak.js",
        color: "text-orange-500",
      },
      {
        name: "Recharts",
        color: "text-green-300",
      },
      {
        name: "DevExtreme",
        color: "text-blue-500",
      },
    ],
  },
  {
    name: "Sipo Cloud POS",
    description:
      "a cloud-based Point of Sale (POS) system tailored for retail and hospitality businesses.",
    points: [
      "Online Ordering: Get a powerful ordering system with loads of options for product variations and add-ons. Integrated with POS for easy order management.",
      "Tableside Ordering: Tableside ordering offers contactless ordering and payment system that allows guests to browse the menu, order food and drinks!",
      "Maintained the project, ensuring stability and reliability including bug fixing.",
      "Added new features such as combo functionality, coupon integration, add-ons management and theming options",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
      {
        name: "Firebase",
        color: "text-yellow-500",
      },
      {
        name: "MUI",
        color: "text-blue-500",
      },
    ],
  },
  {
    name: "InternCan",
    description:
      "An online internship training platform, preparing students with job-oriented skills for corporate readiness. Bridging industry knowledge gaps with rigorous learning experiences.",
    points: [
      "Developed it from inception, crafting dashboards for admin, colleges, students, corporates, and soft skill companies.",
      "Implemented advanced functionalities, including frontend validation for bulk data uploads, ensuring data integrity and streamlined management.",
      "Enhanced student engagement with secure video access and post-video assessments, fostering comprehensive learning experiences.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "Razorpay",
        color: "text-green-500",
      },
      {
        name: "AntD",
        color: "text-blue-500",
      },
    ],
  },
  {
    name: "Moto 365",
    description:
      "A one-stop automotive care platform for all vehicle types, offering services such as buying/selling vehicles, insurance, a marketplace, and a blog providing insights and updates on the automotive industry.",
    points: [
      "Spearheaded the comprehensive redesign of Automoto's website, prioritizing a modernized user experience.",
      "Implemented a fresh design for the Moto 365 blog, ensuring a visually engaging and informative experience for readers.",
      "Implemented and optimized the automobile buying and selling feature with intuitive interfaces and seamless functionalities.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "Next.js",
        color: "text-gray-500",
      },
      {
        name: "Redux",
        color: "text-purple-500",
      },
      {
        name: "Firebase",
        color: "text-yellow-500",
      },
      {
        name: "AntD",
        color: "text-blue-500",
      },
    ],
  },
  {
    name: "GizShare",
    description:
      "a dynamic social media platform tailored for sharing studies, research, books, and more. Users can create posts and 'giz', while others have the opportunity to purchase giz from fellow users.",
    points: [
      "Initiated GizShare from a challenging state, achieving project completion within a remarkable two-month timeframe and conducting a successful client demo.",
      "Focused on frontend (HTML/CSS/JS) and ventured into Django backend.",
      "Overcame hurdles by implementing complex features such as nested post comments, live chat with file uploads, and emoji selectors, implemented multiple language support, etc.",
    ],
    tags: [
      {
        name: "HTML",
        color: "text-red-500",
      },
      {
        name: "CSS",
        color: "text-blue-500",
      },
      {
        name: "JavaScript",
        color: "text-yellow-500",
      },
      {
        name: "Django",
        color: "text-green-500",
      },
    ],
  },
  {
    name: "DMat Marriage",
    description:
      "A matrimonial platform tailored for Kerala's Dalit and Other Backward Communities, built as a full-stack application with modern web technologies.",
    points: [
      "Developed both frontend and backend using Next.js with Tailwind CSS and ShadCN UI for a clean, responsive UI.",
      "Integrated MongoDB and Mongoose for user and profile data, with Cloudinary for image uploads and Razorpay for payment processing.",
      "Implemented key features like login/signup, profile filtering, and the ability to favorite profiles.",
    ],
    tags: [
      {
        name: "Next.js",
        color: "text-gray-500",
      },
      {
        name: "MongoDB",
        color: "text-green-500",
      },
      {
        name: "TypeScript",
        color: "text-blue-500",
      },
      {
        name: "Razorpay",
        color: "text-green-500",
      },
      {
        name: "ShadCN",
        color: "text-white-500",
      },
      {
        name: "Cloudinary",
        color: "text-indigo-500",
      },
    ],
  },
  {
    name: "Yummitto - Food Delivery",
    description:
      "A food delivery platform connecting users with local restaurants, featuring both a customer-facing app and an admin dashboard.",
    points: [
      "Built responsive user and admin interfaces using React and Ant Design, allowing restaurant management and a smooth food ordering experience.",
      "Integrated Google Maps API for accurate user address selection and location-based delivery support.",
      "Developed features including restaurant and food search, add-ons, quantity selection, cart management, and a seamless checkout flow.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "AntD",
        color: "text-blue-500",
      },
      {
        name: "Google Maps API",
        color: "text-red-500",
      },
    ],
  },
  {
    name: "Bhavan’s Mannapra",
    description:
      "Built a fully responsive, fast-loading school website with 37 pages under a tight deadline. Developed both frontend and backend with a focus on performance and user experience.",
    points: [
      "Designed and developed 37 pages using React and TypeScript within a short timeline, styled with Tailwind CSS and DaisyUI.",
      "Integrated Sanity CMS for dynamic content management, including galleries and carousels.",
      "Implemented multi-level navigation and optimized page performance for faster load times.",
    ],
    tags: [
      {
        name: "React.js",
        color: "text-sky-500",
      },
      {
        name: "DaisyUI",
        color: "text-yellow-500",
      },
      {
        name: "TypeScript",
        color: "text-blue-500",
      },
      {
        name: "Tailwind CSS",
        color: "text-blue-500",
      },
      {
        name: "Sanity CMS",
        color: "text-red-500",
      },
    ],
  },
];

export { services, technologies, experiences, projects };
