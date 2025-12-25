import { ShoppingBag, Heart, GraduationCap, Store, Rocket } from "lucide-react";

export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: typeof ShoppingBag;
}

export const industries: Industry[] = [
  {
    id: "retail",
    name: "Retail",
    description: "E-commerce solutions and omnichannel experiences that drive sales and build customer loyalty in competitive retail markets.",
    icon: ShoppingBag
  },
  {
    id: "healthcare",
    name: "Healthcare",
    description: "HIPAA-compliant digital solutions for clinics, practitioners, and health organizations to better serve patients.",
    icon: Heart
  },
  {
    id: "education",
    name: "Education",
    description: "Learning management systems and educational platforms that make knowledge accessible and engaging.",
    icon: GraduationCap
  },
  {
    id: "local-business",
    name: "Local Businesses",
    description: "Professional web presence and local SEO strategies to help neighborhood businesses compete and thrive.",
    icon: Store
  },
  {
    id: "startups",
    name: "Startups",
    description: "Agile development and scalable solutions for fast-moving startups looking to disrupt their industries.",
    icon: Rocket
  }
];

export const technologies = [
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Next.js", category: "Framework" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "PostgreSQL", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Figma", category: "Design" },
];

export const valuePropositions = [
  {
    title: "10+ Years Experience",
    description: "A decade of delivering successful digital projects across industries.",
  },
  {
    title: "100% Client Satisfaction",
    description: "We don't stop until you're completely happy with the result.",
  },
  {
    title: "Agile Development",
    description: "Iterative approach ensuring transparency and flexibility throughout.",
  },
  {
    title: "Dedicated Support",
    description: "Ongoing partnership beyond launch with responsive support.",
  },
];
