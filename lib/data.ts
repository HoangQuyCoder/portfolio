export const profile = {
  name: "Hoang Quy",
  role: "Backend Developer",
  tagline: "Building efficient & scalable systems",
  description:
    "Aspiring Backend Developer with a strong foundation in Java Spring Boot and Node.js. I enjoy architecting robust APIs, optimizing databases, and exploring AI-powered systems. Currently studying Software Engineering at University of Transport Ho Chi Minh City.",
  location: "Ho Chi Minh City, Vietnam",
  email: "hoangquyle11@gmail.com",
  phone: "0764 018 173",
  socials: {
    github: "https://github.com/HoangQuyCoder",
    linkedin: "https://www.linkedin.com/in/le-hoang-quy-762ba3389/",
    hackerrank: "https://www.hackerrank.com/profile/hoangquyle11",
  },
  cvUrl:
    "https://drive.google.com/file/d/1TbzbmLTc9UE_esaRzSjJuHPOqZ9kcVHd/view?usp=drive_link",
};

export const skills = [
  {
    category: "Languages",
    color: "#61DBFB",
    items: [
      { name: "Java", level: 85 },
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "Python", level: 70 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Frameworks & Backend",
    color: "#6DB33F",
    items: [
      { name: "Spring Boot", level: 85 },
      { name: "Node.js / Express.js", level: 80 },
      { name: "React.js", level: 70 },
      { name: "Hibernate / JPA", level: 75 },
    ],
  },
  {
    category: "Databases",
    color: "#F7931E",
    items: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
      { name: "MongoDB", level: 75 },
      { name: "Redis", level: 65 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "#2496ED",
    items: [
      { name: "Docker / Kubernetes", level: 75 },
      { name: "GitHub Actions", level: 78 },
      { name: "AWS", level: 65 },
      { name: "Linux CLI", level: 72 },
    ],
  },
];

export const projects = [
  {
    title: "Hotel Booking System",
    type: "Personal Project",
    description:
      "Full-stack booking platform with comprehensive business logic — hotel discovery, booking management and status tracking.",
    highlights: [
      "Spring Boot RESTful API for hotel discovery & booking management",
      "Spring Security + JWT with Role-Based Access Control (RBAC)",
      "Optimized PostgreSQL with Spring Data JPA & complex JPQL queries",
      "Monolithic deployed on Render with Docker & GitHub Actions CI/CD",
    ],
    tech: [
      "Spring Boot",
      "React",
      "PostgreSQL",
      "Docker",
      "Render",
      "GitHub Actions",
      "JWT",
    ],
    link: "https://github.com/HoangQuyCoder/hotel-booking-system",
    color: "#58A6FF",
  },
  {
    title: "Vietnamese NLP Blog Search",
    type: "Graduation Project · Team of 2",
    description:
      "AI-powered Blog Platform with Semantic Search & RAG Architecture for Vietnamese language content.",
    highlights: [
      "Node.js/Express RESTful APIs with JWT & RBAC for secure data management",
      "RAG pipeline with Ollama LLM + ChromaDB for context-aware Q&A",
      "Python ETL pipeline using Sentence-BERT & Underthesea for Vietnamese NLP",
      "Sub-second search latency with MongoDB + ChromaDB vector store",
    ],
    tech: [
      "Node.js",
      "MongoDB",
      "ChromaDB",
      "Ollama",
      "Sentence-BERT",
      "Python",
    ],
    link: "https://github.com/tintrung1234/Thuc_tap_tot_nghiep_he2025",
    color: "#7ee787",
  },
  {
    title: "Library Server",
    type: "Collaborative Project",
    description:
      "Node.js-based Library Management API designed for high availability and secure data handling.",
    highlights: [
      "Node.js + Express + MongoDB API for book circulation & user auth via JWT",
      "Efficient DB schemas for tracking borrow-return cycles",
      "MVC architecture for maintainability and scalability",
      "Containerized with Docker, automated via GitHub Actions CI/CD",
    ],
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Docker",
      "GitHub Actions",
    ],
    link: "https://github.com/thanhquang2004/Library-server",
    color: "#f97583",
  },
];

export const education = [
  {
    institution: "University of Transport Ho Chi Minh City",
    degree: "Bachelor of Software Engineering",
    period: "Oct 2022 – March 2026",
    description:
      "Studying core CS fundamentals, software architecture, algorithms, and modern development practices.",
    graduationProject: {
      title: "Vietnamese NLP Blog Search with RAG Architecture",
      description:
        "An AI-powered blog platform featuring semantic search using Ollama LLM, ChromaDB vector store, and a Vietnamese NLP pipeline built with Sentence-BERT & Underthesea.",
    },
  },
];

export const softSkills = [
  {
    label: "Collaboration",
    detail: "Cross-team communication (Frontend/Design), Git workflow",
  },
  {
    label: "Mindset",
    detail: "Agile/Scrum adaptability, Problem-solving, Continuous learning",
  },
  {
    label: "Organization",
    detail: "Time management, Task prioritization (Jira/Trello)",
  },
  {
    label: "Languages",
    detail: "Professional Technical English (Reading & Researching)",
  },
];
