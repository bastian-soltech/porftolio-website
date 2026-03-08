import { 
  FaGithub, FaTiktok, FaEnvelope, 
  FaCode, FaDatabase, FaBrain, FaChartBar, FaDesktop, FaServer 
} from "react-icons/fa";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, 
  SiExpress, SiLaravel, SiMongodb, SiMysql,  SiPrisma, 
  SiPython, SiTensorflow, SiPytorch, SiPandas, SiDocker, 
  SiGit, SiFigma, SiJavascript, SiTypescript, SiPostgresql, 
  SiTableau 
} from "react-icons/si";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks = [
  {
    name: "Github",
    icon: FaGithub,
    href: "https://github.com/hambali-020608",
    color: "hover:text-gray-100",
  },
  {
    name: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@tyan.dev",
    color: "hover:text-pink-400",
  },
  {
    name: "Email",
    icon: FaEnvelope,
    href: "mailto:subastianhambali@gmail.com",
    color: "hover:text-cyan-400",
  },
];

export const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Mastered", value: "20+" },
];

export const expertiseCards = [
  {
    title: "Software Engineer",
    icon: FaCode,
    desc: "Architecting robust systems and scalable applications with a focus on performance and reliability.",
    color: "border-blue-500",
    glow: "shadow-blue-500/20",
    role: "SE"
  },
  {
    title: "Fullstack Developer",
    icon: FaDesktop,
    desc: "Building seamless digital experiences from intuitive frontends to powerful backend architectures.",
    color: "border-cyan-500",
    glow: "shadow-cyan-500/20",
    role: "FD"
  },
  {
    title: "Data Analyst",
    icon: FaChartBar,
    desc: "Transforming complex data into actionable insights through advanced analysis and visualization.",
    color: "border-purple-500",
    glow: "shadow-purple-500/20",
    role: "DA"
  },
];

export const skillsData = [
  // Web Development
  { name: "JavaScript", icon: SiJavascript, category: "web" },
  { name: "TypeScript", icon: SiTypescript, category: "web" },
  { name: "React", icon: SiReact, category: "web" },
  { name: "Next.js", icon: SiNextdotjs, category: "web" },
  { name: "Tailwind", icon: SiTailwindcss, category: "web" },
  { name: "Node.js", icon: SiNodedotjs, category: "web" },
  { name: "Express", icon: SiExpress, category: "web" },
  { name: "Laravel", icon: SiLaravel, category: "web" },
  
  // Databases & Backend
  { name: "MongoDB", icon: SiMongodb, category: "backend" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "backend" },
  { name: "MySQL", icon: SiMysql, category: "backend" },
  { name: "Prisma", icon: SiPrisma, category: "backend" },

  // Data Science & AI
  { name: "Python", icon: SiPython, category: "data" },
  { name: "Pandas", icon: SiPandas, category: "data" },
  { name: "TensorFlow", icon: SiTensorflow, category: "data" },
  { name: "PyTorch", icon: SiPytorch, category: "data" },
  { name: "Tableau", icon: SiTableau, category: "data" },

  // Tools
  { name: "Docker", icon: SiDocker, category: "tools" },
  { name: "Git", icon: SiGit, category: "tools" },
  { name: "Figma", icon: SiFigma, category: "tools" },
];

export const skillCategories = [
  { id: "all", label: "All Skills", icon: "⚡" },
  { id: "web", label: "Frontend", icon: "🌐" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "data", label: "Data/AI", icon: "📊" },
  { id: "tools", label: "Tools", icon: "🛠️" },
];

export const projects = [
  {
    title: "Music Downloader",
    desc: "A powerful tool to search and download music including Spotify support. Features a clean UI and fast processing.",
    tags: ["React", "Node.js", "API"],
    image: "/music.png",
    github: "#",
    live: "https://musical-down.vercel.app",
    id: "01"
  },
  {
    title: "Youtube Downloader",
    desc: "Fast, ad-free Youtube video and audio downloader. Supports multiple formats and high-quality resolutions.",
    tags: ["Next.js", "Tailwind", "Python"],
    image: "/yt.png",
    github: "#",
    live: "https://ytdl-prof.vercel.app",
    id: "02"
  },
  {
    title: "CoffeeShop Website",
    desc: "An interactive and modern e-commerce platform for ordering premium coffee with real-time cart functionality.",
    tags: ["React", "Firebase", "Stripe"],
    image: "/coffe.png",
    github: "#",
    live: "https://senja-kita.vercel.app",
    id: "03"
  },
  {
    title: "Movies Platform",
    desc: "Stream the latest and most popular movies for free. Features category filtering, search, and detailed info.",
    tags: ["React", "TMDB API", "CSS Modules"],
    image: "/movie.png",
    github: "#",
    live: "#",
    id: "04"
  }
];
