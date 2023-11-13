import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  githublogo,
  figma,
  docker,
  angular,
  cpp,
  java,
  python,
  django,
  fastapi,
  numpy,
  pandas,
  matplotlib,
  seaborn,
  keras,
  pytorch,
  tensorflow,
  powerbi,
  sql,
  dotpe,
  tcs,
  sanvira,
  p360d,
  cryptohunter,
  personal_finance_dashboard,
  aviation_safety,
  threejs,
  ananth_venkatesh,
  amey_zare,
} from "../assets";

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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Data Analyst",
    icon: creator,
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "cpp",
    icon: cpp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "django",
    icon: django,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "powerbi",
    icon: powerbi,
  },
];

const experiences = [
  {
    title: "Full-Stack Software Engineering Intern",
    company_name: "DotPe",
    icon: dotpe,
    iconBg: "#383E56",
    date: "Jan 2023 - Jul 2023",
    points: [
      "Collaborated in a 12-member team to improve Rista's live production app, employing Sencha Framework, NodeJS, and MongoDB.",
      "Integrated WhatsApp reservation messages for fine dining and resolved tax calculation bugs in sales reports.",
      "Configured Exclusife, a new marketing provider, and implemented APIs for data exchange and loyalty points.",
      "Optimized advance orders notification, introduced access controls for Tax Identification Numbers, and enhanced KOT printing.",
      "Strengthened JavaScript skills, adapted to agile development using Jira, and gained proficiency in Sencha, NodeJS, and MongoDB.",
    ],
  },
  {
    title: "Research Intern",
    company_name: "TCS - TATA Consultancy Services",
    icon: tcs,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jul 2022",
    points: [
      "Developed a Python-based NLP system incorporating POS, NER, constituency graph, and dependency graph.",
      "Applied semantic parsing techniques to convert English sentences into diverse SQL query clauses.",
      "Enhanced language understanding in database interactions through sophisticated NLP processes.",
      "Improved the efficiency and accuracy of SQL query generation for diverse language inputs.",
    ],
  },
  {
    title: "Software Intern",
    company_name: "Sanvira INC",
    icon: sanvira,
    iconBg: "#383E56",
    date: "May 2021 - Oct 2021",
    points: [
      "Created Python scripts for molecular chemistry simulations focused on cancer degradation.",
      "Developed a website using React JS and FastAPI to simulate the implemented Python scripts.",
      "Enhanced accessibility and user interaction by integrating molecular simulations into a web-based platform.",
    ],
  },
  {
    title: "Summer Intern",
    company_name: "Property360Degree",
    icon: p360d,
    iconBg: "#E6DEDD",
    date: "May 2021-Jul 2021",
    points: [
      "Translated design mock-ups into functional web solutions using HTML, CSS, JavaScript, Angular, and Ionic Framework.",
      "Implemented cross-platform mobile app development with Cordova.",
      "Employed Java-Spring Boot for backend development, contributing to the overall website strategy and functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Atharva worked as a full stack intern on our flagship restaurant management software, Rista. He was determined to do his best, curious to explore the product more and inventive to suggest effective changes in the legacy codebase. Overall, we had a great experience with him. I hope we get to work together again in the future.",
    name: "Ananth Venkatesh",
    designation: "Technical Lead",
    company: "DotPe",
    image: ananth_venkatesh,
  },
  {
    testimonial:
      "Atharva is technically sound and very thorough with his coursework and the underlying concepts of Computer Science. This helped him to come up with very good ideas for solving the problems assigned to him. Moreover, he is very passionate and thorough about solving problems and completing related tasks with conviction. While formulating a solution to a given problem, he thinks about all the involved aspects and targets the best possible solution. He presents the solution only when he is absolutely sure with his own research for the same. Atharva performed all assigned tasks with conviction and took full ownership of seeing them through from start to end. He was very sincere and disciplined in going about his work, which is why he managed to exceed our high expectations. Atharva also possesses very good communication skills and articulates his ideas properly in a refined and structured manner. Overall he is an excellent candidate with very good technical, analytical, logical, and communication skills.",
    name: "Amey Zare",
    designation: "Research Scientist",
    company: "Tata Consultancy Services",
    image: amey_zare,
  },
];

const projects = [
  {
    name: "Crypto Hunter",
    description:
      "Built a responsive Cryptocurrency Tracker App with React JS, Material UI, and Chart JS, integrated Context API for state management and Coin Gecko API for real-time data, facilitating detailed cryptocurrency info, market cap-based pricing",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "materialui",
        color: "green-text-gradient",
      },
      {
        name: "cryptocurrency",
        color: "pink-text-gradient",
      },
    ],
    image: cryptohunter,
    source_code_link: "https://github.com/atharvaswami/Crypto-Hunter",
  },
  {
    name: "Personal Finance Dashboard",
    description:
      "Devised a Power BI-based data analytics project showcasing a personal finance dashboard, aiding users in tracking expenses, income, and financial goals.",
    tags: [
      {
        name: "powerbi",
        color: "blue-text-gradient",
      },
      {
        name: "dataanalytics",
        color: "green-text-gradient",
      },
      {
        name: "finance",
        color: "pink-text-gradient",
      },
    ],
    image: personal_finance_dashboard,
    source_code_link: "https://github.com/atharvaswami/personal-finance-dashboard",
  },
  {
    name: "Aviation Safety",
    description:
      "Engaged in USC ISI's research project \"Application of AI, ML, and NLP to Address US Runway Safety Issues,\" utilizing AI/ML/NLP to analyze aviation safety data from NASA's Aviation Safety Reporting Systems.",
    tags: [
      {
        name: "datascience",
        color: "blue-text-gradient",
      },
      {
        name: "aviation",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: aviation_safety,
    source_code_link: "https://github.com/ckids-datafirst/2023-fall-aviation-safety",
  },
];

export { services, technologies, experiences, testimonials, projects };
