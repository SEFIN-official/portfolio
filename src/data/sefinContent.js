/**
 * Portfolio content — Sefin N.A.P (replaces template author data)
 */

export const site = {
  name: "Sefin N.A.P",
  shortName: "Sefin",
  title: "AI & ML Engineer · Full-Stack Developer",
  domainBadge: "sefin.dev",
  heroBio:
    "Designing intelligent AI systems and building full-stack applications for real-world use.",
  headline:
    "AI & full-stack engineer in training — intelligent systems, computer vision, and scalable web",
  email: "sefindls1@gmail.com",
  phone: "+91 7200995058",
  location: "Coimbatore, Tamil Nadu, India",
  github: "https://github.com/SEFIN-official",
  linkedin: "https://www.linkedin.com/in/sefin17",
  leetcode: "https://leetcode.com/u/SEFIN_2005/",
  resumeUrl: "/resume.pdf",
  resumeDownloadFilename: "Sefin_resume.pdf",
};

export const heroFlipWords = [
  "AI/ML & Computer Vision",
  "Full-Stack with MERN",
  "Deep Learning & Deployment",
  "Production-Ready AI Systems",
];

export const heroCodeSnippet = `
const profile = {
    name: 'Sefin N.A.P',
    title: 'AI & ML Engineer | Full-Stack Developer',
    skills: [
        'Python', 'TensorFlow', 'PyTorch', 'OpenCV',
        'React', 'Node.js', 'Express', 'MongoDB',
        'JavaScript', 'Streamlit', 'CNN', 'NLP'
    ],
    focus: ['Machine Learning', 'Computer Vision', 'MERN'],
    hireable: function() {
        return this.skills.length >= 8;
    }
};
`;

export const aboutIntro = {
  heading: "Engineer, Builder, Learner",
  paragraphs: [
    "I am an AI & Machine Learning Engineer focused on building production-ready AI systems that solve real-world problems. I work across the full AI lifecycle—from data preprocessing and model development to API integration and deployment.",
    "My expertise spans Machine Learning, Deep Learning, NLP, Generative AI, LLMs, and AI Agents. I specialize in end-to-end AI pipelines and modern web stacks, from CNN vision apps to MERN products.",
    "I focus on bridging AI systems and real-world users through clean APIs, intuitive dashboards, and seamless experiences. Open to internships and collaborations where curiosity and craft matter.",
  ],
  quote:
    "I build where models meet software — not experiments stranded in a notebook.",
  quoteAttribution: "Sefin N.A.P",
};

/** Placeholder hero image (about section) — replace with your photo if you want */
export const aboutImageUrl =
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&q=80";

export const experienceIntro = {
  title: "Experience & Internships",
  subtitle:
    "Internships, programs, and campus roles — from AI agents to community outreach.",
};

export const experiences = [
  {
    title: "AI Intern",
    company: "Doorbox.ai",
    period: "Dec 2025 – Feb 2026 · Hybrid",
    description:
      "Developed AI-powered agents and automation workflows to streamline processes and improve operational efficiency across internal operations.",
  },
  {
    title: "Data Science Intern",
    company: "CodeClause",
    period: "Aug 2025 – Sep 2025 · Remote",
    description:
      "Worked on data preprocessing, exploratory analysis, and model experimentation for real-world datasets to derive actionable insights.",
  },
  {
    title: "Member",
    company: "LEED Club",
    period: "Oct 2023 — Sep 2024",
    description:
      "Supporting tech and outreach events — helping coordinate activities and promote engagement across the community.",
  },
  {
    title: "AI–ML Intern",
    company: "EduSkills · India Edu Program (AICTE) · Virtual",
    period: "Oct 2024 — Dec 2024",
    description:
      "Completed a virtual internship by AICTE, focusing on TensorFlow, ML algorithms, and hands-on model workflows.",
  },
];

export const projects = [
  {
    title: "Cognify – RAG-Powered AI Study Tutor",
    description:
      "AI study platform that indexes PDFs, notes, and URLs and uses Retrieval-Augmented Generation (RAG) to deliver grounded Q&A, notes, flashcards, and quizzes with real-time progress tracking.",
    link: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    color: "#a855f7",
    githubLink: "https://github.com/SEFIN-official",
    liveLink: "https://github.com/SEFIN-official",
  },
  {
    title: "AI Meal Planner",
    description:
      "LLM-powered HealthTech nutrition coach: personalized meal recommendations from health metrics, pantry ingredients, and dietary preferences with explainable macro and prep-time reasoning. Smart nutritional intelligence with glycemic-aware scoring, a multi-day weekly planning dashboard, gamified streaks and badges, plus JWT-secured accounts, meal history, and progress analytics.",
    link: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=1200&q=80",
    color: "#10b981",
    githubLink: "https://github.com/SEFIN-official",
    liveLink: "https://github.com/SEFIN-official",
  },
  {
    title: "Namma Cafe — MERN ordering platform",
    description:
      "Full-stack MERN application for smarter ordering, live menu context, and less friction at peak hours. React, Node, Express, MongoDB.",
    link: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&q=80",
    color: "#8b5cf6",
    githubLink: "https://github.com/SEFIN-official",
    liveLink: "https://github.com/SEFIN-official",
  },
  {
    title: "Plant disease classifier",
    description:
      "CNN-powered Streamlit app for leaf image diagnosis with confidence scores and exportable reporting. Python, TensorFlow/Keras.",
    link: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80",
    color: "#22c55e",
    githubLink: "https://github.com/SEFIN-official",
    liveLink: "https://github.com/SEFIN-official",
  },
  {
    title: "Smart voting system",
    description:
      "Vision-assisted flow with OpenCV + KNN face recognition, one-person-one-vote enforcement, and auditable logging. Python, OpenCV.",
    link: "https://images.unsplash.com/photo-1540910419892-4a36a2edb782?w=1200&q=80",
    color: "#3b82f6",
    githubLink: "https://github.com/SEFIN-official",
    liveLink: "https://github.com/SEFIN-official",
  },
];

/** Same projects with `url` alias for the Projects scroll section (uses `link` as image src) */
export const projectsForScroll = projects.map((p) => ({
  ...p,
  url: p.link,
}));

/** Tech stack (matches reference layout: THE STACK + six category cards) */
export const skillsSection = {
  headingLead: "THE",
  headingAccent: "STACK",
  subtitle: "Tools I Used to Build Modern and Scalable Applications",
  categories: [
    {
      id: "programming-languages",
      title: "Programming Languages",
      gridClass:
        "grid grid-cols-2 sm:grid-cols-4 gap-5 justify-items-center text-center",
      variant: "brand",
      items: [
        { name: "C", iconKey: "c" },
        { name: "C++", iconKey: "cpp" },
        { name: "Python", iconKey: "python" },
        { name: "Java", iconKey: "java" },
      ],
    },
    {
      id: "ai-ml",
      title: "AI & ML Frameworks",
      gridClass:
        "grid grid-cols-3 gap-x-3 gap-y-5 justify-items-center text-center",
      variant: "brand",
      items: [
        { name: "scikit-learn", iconKey: "sklearn" },
        { name: "TensorFlow", iconKey: "tensorflow" },
        { name: "PyTorch", iconKey: "pytorch" },
        { name: "Keras", iconKey: "keras" },
        { name: "OpenCV", iconKey: "opencv" },
        { name: "Flask", iconKey: "flask" },
        { name: "LangChain", iconKey: "langchain" },
        { name: "Vector DB", iconKey: "vectordb" },
        { name: "RAG", iconKey: "rag" },
      ],
    },
    {
      id: "core-cs",
      title: "Core CS Concepts",
      gridClass:
        "flex flex-wrap justify-center gap-x-6 gap-y-5 text-center max-w-xl mx-auto",
      variant: "concept",
      items: [
        { name: "OOP", iconKey: "oop" },
        { name: "DBMS", iconKey: "dbms" },
        { name: "Computer Networks", iconKey: "networks" },
        { name: "Operating Systems", iconKey: "os" },
        { name: "DSA", iconKey: "dsa" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend Development",
      gridClass:
        "grid grid-cols-2 sm:grid-cols-3 gap-5 justify-items-center text-center",
      variant: "brand",
      items: [
        { name: "HTML5", iconKey: "html5" },
        { name: "CSS3", iconKey: "css3", highlight: true },
        { name: "JavaScript", iconKey: "javascript" },
        { name: "React", iconKey: "react" },
        { name: "Next.js", iconKey: "nextjs" },
        { name: "Tailwind", iconKey: "tailwind" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Databases",
      gridClass:
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 justify-items-center text-center",
      variant: "brand",
      items: [
        { name: "TypeScript", iconKey: "typescript" },
        { name: "Node.js", iconKey: "nodejs" },
        { name: "Express.js", iconKey: "express" },
        { name: "FastAPI", iconKey: "fastapi" },
        { name: "Django", iconKey: "django" },
        { name: "JWT", iconKey: "jwt" },
        { name: "MySQL", iconKey: "mysql" },
        { name: "PostgreSQL", iconKey: "postgresql" },
        { name: "Redis", iconKey: "redis" },
        { name: "REST APIs", iconKey: "restapi" },
      ],
    },
    {
      id: "devtools",
      title: "Developer Tools",
      gridClass:
        "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5 justify-items-center text-center",
      variant: "brand",
      items: [
        { name: "Git", iconKey: "git" },
        { name: "GitHub", iconKey: "github" },
        { name: "Docker", iconKey: "docker" },
        { name: "AWS", iconKey: "aws" },
        { name: "Axios", iconKey: "axios" },
      ],
    },
  ],
};

export const iconCloudSlugs = [
  "python",
  "tensorflow",
  "pytorch",
  "opencv",
  "react",
  "nodedotjs",
  "mongodb",
  "javascript",
  "html5",
  "css3",
  "express",
  "keras",
  "jupyter",
  "git",
  "github",
  "vscode",
  "streamlit",
  "numpy",
];
