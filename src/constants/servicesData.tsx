import type React from "react";
import { BiLogoVisualStudio } from "react-icons/bi";

export interface ServiceImage {
  id: string;
  src: string;
  alt: string;
}

export interface ServiceSection {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  images: ServiceImage[];
  layout: "image-right" | "image-left";
}

export const servicesData: ServiceSection[] = [
  {
    id: "web-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "Gaming App Development",
    description:
      " We specialize in building immersive and scalable gaming experiences tailored for both mobile and web platforms. Our team manages the entire process from initial concept to launch, ensuring that every game combines engaging gameplay with robust technology. By focusing on high performance and scalability, we deliver products that prioritize long-term user retention.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-1",
        src: "/assets/services/laptop.png",
        alt: "Web development interface",
      },
      {
        id: "web-2",
        src: "/assets/services/laptop.png",
        alt: "Developer working",
      },
      {
        id: "web-3",
        src: "/assets/services/laptop.png",
        alt: "Responsive design",
      },
    ],
  },

  // Game Development
  {
    id: "game-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "AI/ML Development",
    description: "Our team provides smart, data-driven solutions powered by Artificial Intelligence and Machine Learning. These services are designed to turn complex data sets into actionable business insights. We develop intelligent tools, automation systems, and predictive models that empower businesses to make smarter, more informed decisions.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/app.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },

  // UI/UX Design
  {
    id: "uiux-1",
    icon: <BiLogoVisualStudio />,
    title: "Mobile App Development",
    description:
      " We craft seamless, high-performance mobile applications for both iOS and Android platforms. Our development approach blends intuitive, user-friendly interfaces with powerful, scalable functionality. From the conceptual phase to the final marketplace launch, we focus on creating apps that help businesses engage their customers effectively and stand out in the digital landscape.",
    ctaText: "View more",
    layout: "image-left",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },

  // App Development
  {
    id: "app-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "Custom Website Development",
    description:
      "This service focuses on building tailored websites from the ground up, specifically designed to meet your unique business needs. These websites are engineered for high performance, maximum user engagement, and clear, measurable results. Unlike generic templates, custom development allows for complete control over the site's architecture and functionality.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },
  {
    id: "app-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "CMS Development",
    description:
      "CMS (Content Management System) Development provides you with flexible and customized platforms to manage your digital assets with ease. This service focuses on creating an efficient backend infrastructure, allowing you to update, organize, and publish content without needing deep technical knowledge. It is designed to streamline your internal digital operations.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },
  {
    id: "app-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "UI/UX Design",
    description:
      "UI (User Interface) and UX (User Experience) Design is centered on the visual and experiential aspects of a digital product. This service creates user-centered and visually compelling designs that ensure your product is not only beautiful but also intuitive and easy to use. The goal is to provide a seamless journey for the user from the moment they land on your platform.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },
  {
    id: "app-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "Digital Marketing",
    description:
      "While the other services focus on building and designing platforms, Digital Marketing is about growing your brand and driving traffic. Using data-driven strategies, this service aims to increase brand recognition and deliver a measurable return on investment (ROI). It involves strategic outreach to ensure your digital products reach the right audience.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },
  {
    id: "app-dev-1",
    icon: <BiLogoVisualStudio />,
    title: "Software Architecture",
    description:
      "We provide high-level Software Architecture services that serve as the blueprint for robust, secure, and scalable digital systems. Our team designs the underlying structure of your software to ensure it can handle complex workflows and future growth while maintaining peak performance. By prioritizing efficiency, security, and long-term stability, we build a solid foundation that supports the seamless integration of advanced technologies and evolving business needs.",
    ctaText: "View more",
    layout: "image-right",
    images: [
      {
        id: "web-l-1",
        src: "/assets/services/laptop.png",
        alt: "Web design mockup",
      },
      {
        id: "web-l-2",
        src: "/assets/services/laptop.png",
        alt: "Mobile development",
      },
      {
        id: "web-l-3",
        src: "/assets/services/laptop.png",
        alt: "Cross platform app",
      },
    ],
  },
];
