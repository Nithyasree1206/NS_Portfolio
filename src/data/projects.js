import ecommerceImg from '../assets/projects/project-ecommerce.svg';
import cricketImg from '../assets/projects/project-cricket.svg';
import foodImg from '../assets/projects/project-food.svg';
import invoiceImg from '../assets/projects/project-invoice.svg';
import photoboothImg from '../assets/projects/project-photobooth.svg';
import figmaImg from '../assets/projects/project-figma.svg';

export const projects = [
  {
    id: 1,
    title: "Frontend E-Commerce Website",
    tags: ["WEB", "FRONTEND"],
    tech: "HTML, CSS, JavaScript",
    description: "A modern responsive e-commerce website with product listing, cart system, and smooth UI animations.",
    image: ecommerceImg,
    gradient: "linear-gradient(135deg, #2d1b69 0%, #4a1a8a 40%, #1a1a3e 100%)",
    link: "#"
  },
  {
    id: 2,
    title: "Gesture Cricket",
    tags: ["AI", "PYTHON"],
    tech: "Python, OpenCV / AI Concept",
    description: "An interactive cricket game controlled using hand gestures for a fun and AI-based experience.",
    image: cricketImg,
    gradient: "linear-gradient(135deg, #0a3d2e 0%, #1a6b4a 40%, #0d2b3e 100%)",
    link: "https://heartfelt-blancmange-b99df1.netlify.app/"
  },
  {
    id: 3,
    title: "FoodMood Recommender",
    tags: ["APP", "AI"],
    tech: "HTML, CSS, JavaScript, Flask (optional)",
    description: "A smart system that recommends food based on user mood using simple AI logic and sentiment idea.",
    image: foodImg,
    gradient: "linear-gradient(135deg, #3d1b50 0%, #6b2a7a 40%, #2a1a3e 100%)",
    link: "#"
  },
  {
    id: 4,
    title: "Invoice Billing System",
    tags: ["WEB", "FULLSTACK"],
    tech: "HTML, CSS, JavaScript",
    description: "A billing system that generates invoices, calculates totals, and manages customer transactions easily.",
    image: invoiceImg,
    gradient: "linear-gradient(135deg, #1a2a5e 0%, #2a4a8a 40%, #0d1a3e 100%)",
    link: "https://github.com/Nithyasree1206/INVOICE-BILLING"
  },
  {
    id: 5,
    title: "Photobooth App",
    tags: ["WEB", "FLASK"],
    tech: "HTML, CSS, JavaScript",
    description: "A fun photobooth web app with filters, frames, and download feature for capturing memories.",
    image: photoboothImg,
    gradient: "linear-gradient(135deg, #2a1a3e 0%, #5a2a7a 40%, #1a0d3e 100%)",
    link: "https://github.com/Nithyasree1206/photobooth-flask"
  },
  {
    id: 6,
    title: "Figma UI/UX Designs",
    tags: ["DESIGN", "UI/UX"],
    tech: "Figma",
    description: "Modern UI/UX designs created in Figma with clean layouts and user-friendly interfaces.",
    image: figmaImg,
    gradient: "linear-gradient(135deg, #1a3d5e 0%, #0d6b5a 40%, #0a2a3e 100%)",
    link: "https://github.com/Nithyasree1206/HOUSE-SHIFTING-DESIGN-IN-FIGMA"
  }
];