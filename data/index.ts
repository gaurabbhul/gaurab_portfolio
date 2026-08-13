export const navItems = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript, Tailwind CSS, Responsive Design, UI/UX",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Node.js, Express.js, REST APIs, MongoDB, Authentication",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tools & Technologies",
    description: "Git, GitHub, Vercel, Render, Cloudinary, Postman, VS Code",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "MERN applications, CRUD operations, Authentication systems",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
];

export const skills = {
  frontend: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Bootstrap",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST API",
    "MongoDB",
    "Mongoose",
    "Authentication",
    "Authorization",
    "CRUD APIs",
  ],
  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "Postman",
    "Vercel",
    "Render",
    "Cloudinary",
    "Figma",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Platform",
    des: "A complete e-commerce solution with authentication, user management, product catalog, cart, orders, and payments. Features admin dashboard, Cloudinary image uploads, and email notifications.",
    img: "/projects/ecommerce.png",
    iconLists: [
      "/re.svg",
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/c.svg",
      "/dock.svg",
    ],
    link: "https://github.com",
    demoLink: "https://final-ecom-iota.vercel.app/",
    featured: true,
    features: [
      "Authentication & Authorization",
      "User Management",
      "Product Management",
      "Categories & Banners",
      "Shopping Cart & Orders",
      "Payment Integration",
      "Admin Dashboard",
      "Email/SMTP",
      "Cloudinary Integration",
    ],
  },
  {
    id: 2,
    title: "Modern Banking Interface",
    des: "A responsive banking dashboard built with React and modern UI patterns. Features account overview, transaction history, and interactive components.",
    img: "/projects/banking.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com",
  },
  {
    id: 3,
    title: "Pet Shop Website",
    des: "Responsive pet shop website with product showcase, filtering, and user-friendly navigation built with vanilla HTML, CSS, and JavaScript.",
    img: "/projects/petshop.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com",
  },
  {
    id: 4,
    title: "Coffee Shop Landing Page",
    des: "Modern coffee shop website with responsive design, menu presentation, and interactive UI elements. Built with HTML, CSS, and JavaScript.",
    img: "/projects/coffee.png",
    iconLists: ["/html.svg", "/css.svg", "/js.svg"],
    link: "https://github.com",
  },
  {
    id: 5,
    title: "Developer Portfolio",
    des: "Personal portfolio website showcasing projects and skills. Built with React, TypeScript, and Tailwind CSS with smooth animations.",
    img: "/projects/portfolio.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg"],
    link: "https://github.com",
  },
  {
    id: 6,
    title: "Smart E-Commerce Recommendation System",
    des: "Machine learning project using content-based recommendation. Implements product classification and similarity matching with a web interface.",
    img: "/projects/ecommerce.png",
    iconLists: ["/python.svg", "/re.svg", "/tail.svg"],
    link: "https://github.com",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Development Training",
    desc: "Broadway Infosys - Completed comprehensive training in HTML, CSS, JavaScript, React, and responsive UI development.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "MERN Stack Development",
    desc: "Full-stack development with React, Node.js, Express, MongoDB. Built REST APIs, authentication systems, and complete applications.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Project-Based Development",
    desc: "Developed multiple full-stack projects including e-commerce platforms, business websites, and portfolio applications.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Continuous Learning",
    desc: "Staying updated with modern technologies, best practices, and deploying applications on Vercel and Render.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    name: "GitHub",
    link: "https://github.com",
  },
  {
    id: 2,
    img: "/link.svg",
    name: "LinkedIn",
    link: "https://linkedin.com",
  },
  {
    id: 3,
    img: "/insta.svg",
    name: "Email",
    link: "mailto:gaurabbhul@gmail.com",
  },
];

export const whatIDo = [
  {
    id: 1,
    title: "Frontend Development",
    description:
      "React, Next.js, TypeScript, Tailwind CSS - Building beautiful and responsive user interfaces",
    phase: "Phase 1",
    color: "emerald",
  },
  {
    id: 2,
    title: "Backend Development",
    description:
      "Node.js, Express.js, MongoDB - Creating robust APIs and database solutions",
    phase: "Phase 2",
    color: "pink",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "MERN applications - Building complete web applications from database to UI",
    phase: "Phase 3",
    color: "sky",
  },
];

// Legacy exports for backward compatibility with existing components
export const companies = [];
export const testimonials = [];
