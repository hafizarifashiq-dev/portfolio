export const personalInfo = {
  name: "Muhammad Arif",
  role: "Full Stack Developer & AI Automation Specialist",
  tagline: "Building scalable full-stack MERN web applications & intelligent AI workflow automations.",
  summary: "Computer Science graduate with hands-on experience in full-stack MERN engineering, frontend architecture, and AI automation. Currently interning at Experts Cloud Software, Lahore. Passionate about crafting high-performance web apps and connecting business processes with automated intelligence (n8n, Gemini API, Gmail API).",
  email: "hafizarifashiq@gmail.com",
  phone: "+92 303-2358794",
  whatsapp: "https://wa.me/923032358794",
  location: "Pakistan",
  github: "https://github.com/hafizarifashiq-dev",
  fiverr: "https://www.fiverr.com/muhammadarif848",
  resumePath: "/Muhammad_Arif_Resume.pdf",
  stats: [
    { label: "Completed Projects", value: "10+" },
    { label: "CGPA (BS Computer Science)", value: "3.44" },
    { label: "Workflow Integrations", value: "n8n & AI" },
    { label: "Client Satisfaction", value: "100%" }
  ]
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: "90%", category: "Core" },
    { name: "JavaScript (ES6+)", level: "88%", category: "Core" },
    { name: "Tailwind CSS", level: "92%", category: "Styling" },
    { name: "HTML5 & CSS3", level: "95%", category: "Markup" },
    { name: "Redux Toolkit", level: "82%", category: "State" },
    { name: "React Router & Vite", level: "85%", category: "Build/Nav" }
  ],
  backend: [
    { name: "Node.js", level: "75%", category: "Runtime" },
    { name: "Express.js", level: "75%", category: "Framework" },
    { name: "MongoDB", level: "72%", category: "Database" },
    { name: "MySQL", level: "70%", category: "Database" },
    { name: "RESTful APIs", level: "88%", category: "Integration" },
    { name: "JWT Auth", level: "80%", category: "Security" }
  ],
  aiAutomation: [
    { name: "n8n Workflow Automation", level: "85%", category: "Automation" },
    { name: "Gemini AI API", level: "82%", category: "AI / LLM" },
    { name: "Prompt Engineering", level: "90%", category: "AI" },
    { name: "Gmail & Sheets API", level: "85%", category: "Automation" },
    { name: "Python for AI (Basic)", level: "65%", category: "Scripting" }
  ],
  tools: [
    { name: "Git & GitHub", category: "Version Control" },
    { name: "Postman", category: "API Testing" },
    { name: "VS Code", category: "Editor" },
    { name: "Vite", category: "Bundler" },
    { name: "npm / Yarn", category: "Package Mgr" }
  ]
};

export const projectsData = [
  {
    id: "kisan-market",
    title: "KisanMarket — Agricultural Marketplace",
    badge: "Final Year Project (FYP)",
    featured: true,
    description: "A full-stack MERN agricultural platform bridging the gap between local Farmers and Wholesale Buyers. Features role-based dashboards for Farmers, Buyers, Transporters, and Admins, complete with live order tracking and secure JWT authentication.",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Tailwind CSS"],
    highlights: [
      "Role-Based Access Control (Admin, Farmer, Buyer, Transporter)",
      "Direct crop listing and price negotiation mechanisms",
      "Seamless REST API endpoints with JWT authentication"
    ],
    github: "https://github.com/hafizarifashiq-dev",
    demo: "#"
  },
  {
    id: "mystore-ecommerce",
    title: "MyStore — Modern E-Commerce Platform",
    badge: "React & Redux App",
    featured: true,
    description: "Feature-packed e-commerce web application built using React and Redux Toolkit. Integrated with external REST APIs for real-time product catalogs, cart management, user authentication, and full CRUD operations.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    techStack: ["React.js", "Redux Toolkit", "React Router", "Vite", "REST API", "Tailwind CSS"],
    highlights: [
      "Global state management with Redux Toolkit",
      "Dynamic filtering, search, and cart checkout flow",
      "Persistent session state and responsive design across all devices"
    ],
    github: "https://github.com/hafizarifashiq-dev",
    demo: "#"
  },
  {
    id: "ai-email-automation",
    title: "Intelligent Email & Lead Automation System",
    badge: "AI Automation / n8n",
    featured: true,
    description: "Autonomous lead qualification and email triage workflow. Leveraged n8n, Google Forms, and Gemini AI API to automatically classify incoming inquiries, enrich customer data into Google Sheets, and send personalized context-aware replies.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    techStack: ["n8n", "Gemini AI API", "Gmail API", "Google Sheets", "Webhooks", "JSON"],
    highlights: [
      "Zero-latency automated responses using LLM classification",
      "Direct synchronization with Google Sheets CRM",
      "Reduced manual inquiry response time by 90%"
    ],
    github: "https://github.com/hafizarifashiq-dev",
    demo: "#"
  }
];

export const experienceData = [
  {
    role: "Frontend Developer — Intern",
    company: "Experts Cloud Software",
    location: "Bahria Town, Lahore",
    period: "Aug 2026 – Present",
    current: true,
    responsibilities: [
      "Developing high-standard frontend interfaces using HTML, CSS, JavaScript, and React.js under senior developer mentorship.",
      "Building reusable components, resolving UI/UX bugs, and implementing responsive layouts.",
      "Participating in agile development workflows, daily standups, and Git version control."
    ]
  },
  {
    role: "E-Commerce Product Hunter — Intern",
    company: "Swift Cart III",
    location: "Near Bilal Chowk, Multan",
    period: "Jun 2026 – Jul 2026",
    current: false,
    responsibilities: [
      "Researched high-demand trending products for multiple online storefronts.",
      "Performed competitor pricing audits, market trend assessments, and catalog optimization to improve sales conversion."
    ]
  }
];

export const educationData = [
  {
    degree: "Bachelor of Science in Computer Science (BSCS)",
    institution: "MNS-University of Agriculture, Multan",
    period: "2022 – 2026",
    grade: "CGPA: 3.44 / 4.0",
    details: "Specialized coursework in Web Technologies, Software Engineering, Database Systems, Data Structures & Algorithms, and Artificial Intelligence."
  }
];

export const servicesData = [
  {
    icon: "Layout",
    title: "Custom Frontend Development",
    description: "Pixel-perfect, lightning-fast web interfaces built with React.js and Tailwind CSS. Clean, maintainable code optimized for SEO and conversion."
  },
  {
    icon: "Server",
    title: "MERN Full-Stack Solutions",
    description: "End-to-end web applications combining React frontends with Node.js/Express backends and MongoDB databases, with secure REST APIs & JWT authentication."
  },
  {
    icon: "Bot",
    title: "AI & Workflow Automation",
    description: "Streamline repetitive business tasks using n8n, Gemini AI API, Google Sheets, and Gmail integrations to save hours of manual effort."
  },
  {
    icon: "Zap",
    title: "API Integrations & Bug Fixing",
    description: "Connecting 3rd-party REST APIs, payment gateways, fixing frontend bugs, state management refactoring, and responsiveness fixes."
  }
];

