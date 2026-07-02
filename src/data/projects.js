import ecommerceImg from '../assets/projects/project-ecommerce.svg';
import cricketImg from '../assets/projects/project-cricket.svg';
import foodImg from '../assets/projects/project-food.svg';
import invoiceImg from '../assets/projects/project-invoice.svg';
import photoboothImg from '../assets/projects/project-photobooth.svg';
import figmaImg from '../assets/projects/project-figma.svg';

export const projects = [

  {
    id: 1,
    title: "Gesture Cricket",
    tags: ["AI", "PYTHON"],
    tech: "Python, OpenCV / AI Concept",
    description: "An interactive cricket game controlled using hand gestures for a fun and AI-based experience.",
    image: cricketImg,
    gradient: "linear-gradient(135deg, #0a3d2e 0%, #1a6b4a 40%, #0d2b3e 100%)",
    link: "https://gesture-cricket.vercel.app/"
  },
  {
    id: 2,
    title: "Photobooth App",
    tags: ["WEB", "FLASK"],
    tech: "HTML, CSS, JavaScript",
    description: "A fun photobooth web app with filters, frames, and download feature for capturing memories.",
    image: photoboothImg,
    gradient: "linear-gradient(135deg, #2a1a3e 0%, #5a2a7a 40%, #1a0d3e 100%)",
    link: "https://photobooth-flask.vercel.app/"
  },
  {
    id: 3,
    title: "Figma UI/UX Designs",
    tags: ["DESIGN", "UI/UX"],
    tech: "Figma",
    description: "Modern UI/UX designs created in Figma with clean layouts and user-friendly interfaces.",
    image: figmaImg,
    gradient: "linear-gradient(135deg, #1a3d5e 0%, #0d6b5a 40%, #0a2a3e 100%)",
    link: "https://www.figma.com/design/DUB8KC6FrAXMJjsvilg8qM/UXexplore?node-id=0-1&t=4xJOZcHcCRFvHmSm-0"
  }
];