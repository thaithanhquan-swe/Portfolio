import { images } from "@/assets/images";
import { Certificate, PortfolioTabItem, Project } from "@/types/portfolio.types";
import {
  SiCss,
  SiDocker,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostman,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

export const tabs: PortfolioTabItem[] = [
  {
    label: "Projects",
    value: "projects",
  },
  // {
  //   label: "Certificates",
  //   value: "certificates",
  // },
  {
    label: "Tech Stack",
    value: "tech-stack",
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Music player",
    description:
      "A modern music player with an intuitive interface, playlist management, playback controls, volume adjustment, and a responsive design for a seamless listening experience..",
    image: images.projectmusic,
    liveUrl: "https://thaithanhquan-swe.github.io/Music_player/",
    detailsUrl: "https://github.com/thaithanhquan-swe/Music_player",
    technologies: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Fashion E-commerce",
    description:
      "A full-stack fashion shopping platform featuring authentication, product management, wishlist, checkout, and online payment.",
    image: images.projectfashion,
    liveUrl: "https://fashion-opal-nu.vercel.app/",
    detailsUrl: "https://github.com/thaithanhquan-swe/fashion",
    technologies: ["Nextjs", "Spring Boot", "MySQL", "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Eventhub Platform",
    description:
      "Built as a production-grade product—not just an event listing site—Beetic lets users search, filter, reserve seats on an interactive map, pay via bank-transfer QR (SePay), receive QR tickets, and track order status. Administrators manage events, tickets, orders, refunds, blogs, notifications, and AI workflows from a single dashboard.",
    image: images.projectevent,
    liveUrl: "https://beetic.vercel.app/",
    detailsUrl: "https://github.com/lethanhdat-swe/eventhub-platform",
    technologies: ["React.js", "MySQL", "Tailwind CSS", "Node.js"],
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Java Programming",
    issuer: "Coursera",
    image: images.main2,
    credentialUrl: "#",
  },
  {
    id: 2,
    title: "Frontend Development",
    issuer: "FreeCodeCamp",
    image: images.main2,
    credentialUrl: "#",
  },
  {
    id: 3,
    title: "Spring Boot Fundamentals",
    issuer: "Udemy",
    image: images.main2,
    credentialUrl: "#",
  },
];

export const techStack = [
  {
    name: "React.js",
    icon: SiReact,
    className: "text-cyan-400",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    className: "text-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    className: "text-cyan-400",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    className: "text-orange-500",
  },
  {
    name: "CSS",
    icon: SiCss,
    className: "text-blue-500",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    className: "text-white",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    className: "text-yellow-400",
  },
  {
    name: "Java",
    icon: FaJava,
    className: "text-red-400",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    className: "text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    className: "text-blue-400",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    className: "text-green-500",
  },
  {
    name: "Docker",
    icon: SiDocker,
    className: "text-blue-400",
  },
  {
    name: "Git",
    icon: SiGit,
    className: "text-orange-500",
  },
  {
    name: "Postman",
    icon: SiPostman,
    className: "text-orange-400",
  },
];