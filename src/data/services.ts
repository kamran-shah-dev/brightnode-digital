import { Globe, ShoppingCart, Palette, Wrench, Search, Code } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Globe;
  benefits: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    id: "business-website",
    title: "Business Website Development",
    description: "Professional, responsive websites that establish your online presence and convert visitors into customers.",
    icon: Globe,
    benefits: [
      "Mobile-first responsive design",
      "SEO-optimized structure",
      "Fast loading performance",
      "Content management system"
    ],
    useCases: [
      "Corporate websites",
      "Portfolio sites",
      "Landing pages"
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce Website Setup",
    description: "Fully functional online stores with secure payment processing and inventory management.",
    icon: ShoppingCart,
    benefits: [
      "Secure payment integration",
      "Inventory management",
      "Order tracking system",
      "Customer analytics"
    ],
    useCases: [
      "Online retail stores",
      "Digital product sales",
      "Subscription services"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that creates intuitive, engaging experiences for your digital products.",
    icon: Palette,
    benefits: [
      "User research & testing",
      "Wireframing & prototyping",
      "Design system creation",
      "Accessibility compliance"
    ],
    useCases: [
      "Web applications",
      "Mobile app interfaces",
      "Dashboard design"
    ]
  },
  {
    id: "maintenance",
    title: "Website Maintenance & Support",
    description: "Ongoing support to keep your website secure, updated, and performing at its best.",
    icon: Wrench,
    benefits: [
      "Regular security updates",
      "Performance monitoring",
      "Content updates",
      "24/7 support available"
    ],
    useCases: [
      "Existing website upkeep",
      "Security patching",
      "Feature enhancements"
    ]
  },
  {
    id: "seo",
    title: "SEO Optimization",
    description: "Data-driven SEO strategies to improve your search rankings and drive organic traffic.",
    icon: Search,
    benefits: [
      "Keyword research",
      "On-page optimization",
      "Technical SEO audits",
      "Performance tracking"
    ],
    useCases: [
      "New website launches",
      "Traffic improvement",
      "Local business visibility"
    ]
  },
  {
    id: "custom-apps",
    title: "Custom Web Applications",
    description: "Tailored web applications built to solve your unique business challenges.",
    icon: Code,
    benefits: [
      "Scalable architecture",
      "API integrations",
      "Real-time features",
      "Cloud deployment"
    ],
    useCases: [
      "Business automation tools",
      "Customer portals",
      "Internal dashboards"
    ]
  }
];
