export const profile = {
  name: "Muhammad Awais Sattar",
  role: "Software Engineering Student | Aspiring Software Developer",
  tagline: "Building Digital Experiences Through Code",
  intro:
    "I craft clean, functional software and immersive web experiences with a strong foundation in programming, problem solving, and modern application development.",
  about:
    "I am Muhammad Awais Sattar, a Software Engineering student at PMAS Arid Agriculture University, Rawalpindi. I am passionate about software development, programming, mobile application development, and solving real-world problems through technology. I continuously explore new technologies and improve my coding skills.",
  location: "Rawalpindi / Islamabad, Pakistan",
  email: "muhawais620@gmail.com",
  phone: "+92-335-2999948",
  linkedin: "https://www.linkedin.com/in/muhammad-awais-sattar-009062355/",
  github: "https://github.com/muhawais920-design",
  resume: "/Muhammad_Awais_Sattar_Resume.pdf",
  cgpa: "3.84 / 4.00",
  stats: [
    { value: "3.84", label: "CGPA / 4.00" },
    { value: "6+", label: "Projects" },
    { value: "12+", label: "Technologies" },
  ],
  typing: [
    "Java Developer",
    "Flutter Developer",
    "Software Engineering Student",
    "Future Software Engineer",
  ],
};

export const aboutHighlights = [
  { label: "Education", value: "BS Software Engineering" },
  {
    label: "University",
    value: "PMAS Arid Agriculture University, Rawalpindi",
  },
  { label: "CGPA", value: "3.84 / 4.00" },
  { label: "Location", value: "Rawalpindi / Islamabad, Pakistan" },
  {
    label: "Career Goal",
    value: "Seeking software development internship opportunities",
  },
  {
    label: "Interests",
    value: "Software dev, mobile apps, problem solving",
  },
];

export const skillGroups = [
  {
    title: "Programming Languages",
    items: [
      { name: "Java", level: 75 },
      { name: "C++", level: 70 },
      { name: "C#", level: 72 },
      { name: "Python", level: 65 },
      { name: "Dart", level: 68 },
    ],
  },
  {
    title: "Mobile & Web",
    items: [
      { name: "Flutter", level: 70 },
      { name: "HTML", level: 80 },
      { name: "CSS", level: 78 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    title: "Database & Core Concepts",
    chips: [
      "SQL",
      "SQL Server",
      "OOP",
      "DSA",
      "DBMS",
      "File Handling",
      "JDBC",
    ],
  },
  {
    title: "Tools",
    chips: ["VS Code", "Eclipse", "PyCharm", "SSMS", "Git", "GitHub"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  details: string;
  link?: string;
  accent: string;
};

export const projects: Project[] = [
  {
    title: "Hotel Management System",
    description:
      "Console application for hotel operations built with Java, OOP, file handling, and JDBC.",
    tech: ["Java", "OOP", "JDBC", "File Handling"],
    details:
      "Demonstrates object-oriented design, persistent storage via file handling, and database connectivity through JDBC for guest, room, and booking workflows.",
    accent: "#4f8cff",
  },
  {
    title: "Hotel Management System (C++)",
    description:
      "Menu-driven C++ management application using loops, functions, and switch statements.",
    tech: ["C++", "Loops", "Functions", "Switch"],
    details:
      "Implements core control structures and modular functions to handle guest and room management operations in a console environment.",
    accent: "#a855f7",
  },
  {
    title: "Hotel Management & Reservation System",
    description:
      "Windows Forms desktop app for registration, room booking, check-in/out, and billing.",
    tech: ["C#", "Windows Forms", ".NET"],
    details:
      "A graphical desktop solution covering end-to-end hotel workflows including guest registration, reservations, check-in/check-out, and billing.",
    accent: "#22d3ee",
  },
  {
    title: "CurrencyX",
    description:
      "Flutter currency converter with live rates, historical charts, offline mode, and news.",
    tech: ["Flutter", "Dart", "REST API"],
    details:
      "Modern mobile app experience focused on real-time exchange data, chart visualization, resilient offline behavior, and a polished dark interface.",
    link: "https://github.com/muhawais920-design/CurrencyX",
    accent: "#4f8cff",
  },
  {
    title: "FitFuel AI",
    description:
      "AI-powered fitness and nutrition app with workout plans, diet guidance, and tracking.",
    tech: ["Flutter", "TypeScript", "Gemini AI"],
    details:
      "Production-oriented app concept combining AI-generated workout and diet recommendations with calorie tracking and progress monitoring.",
    link: "https://github.com/muhawais920-design/fitfuel-ai",
    accent: "#a855f7",
  },
  {
    title: "Nocture Intelligence",
    description:
      "TypeScript-based intelligent application project exploring modern development practices.",
    tech: ["TypeScript"],
    details:
      "A project focused on applying TypeScript in an intelligent application context with an emphasis on maintainable, modern development patterns.",
    link: "https://github.com/muhawais920-design/Nocture-intelligence",
    accent: "#22d3ee",
  },
];

export const experience = [
  {
    period: "2024 - Present",
    title: "BS Software Engineering",
    org: "PMAS Arid Agriculture University, Rawalpindi",
    detail: "CGPA: 3.84 / 4.00. Building strong foundations in software engineering and application development.",
  },
  {
    period: "2021 - 2023",
    title: "Intermediate - ICS Computer Science",
    org: "IMCB G-10/4, Islamabad",
    detail: "Pre-engineering with computer science focus.",
  },
  {
    period: "Ongoing",
    title: "Academic & Personal Development",
    org: "Projects, Labs, and Self-Learning",
    detail:
      "Developing projects across Java, C++, C#, Flutter, and web technologies while seeking internship opportunities.",
  },
];

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];
