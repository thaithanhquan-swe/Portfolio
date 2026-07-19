import type { StaticImageData } from "next/image";

export type PortfolioTab = "projects" | "certificates" | "tech-stack";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: StaticImageData | string;
  liveUrl: string;
  detailsUrl?: string;
  technologies: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  image: StaticImageData | string;
  credentialUrl?: string;
}

export interface PortfolioTabItem {
  label: string;
  value: PortfolioTab;
}