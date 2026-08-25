// ---------------------------------------------------------------------------
// CONTENT DATA
// Edit the arrays below to change services, portfolio projects, FAQs, etc.
// Add a new object to `projects` to add a new portfolio item — the card
// and layout will pick it up automatically.
// ---------------------------------------------------------------------------

export type Service = {
  slug: string;
  title: string;
  description: string;
  steps: string[];
};

export const services: Service[] = [
  {
    slug: "custom-website",
    title: "Custom Website Development",
    description: "Unique, professional websites tailored to your brand.",
    steps: ["Discovery", "Design", "Development", "Testing", "Launch"]
  },
  {
    slug: "business-website",
    title: "Business Website Development",
    description:
      "Professional websites designed to establish credibility and attract customers.",
    steps: ["Discovery", "Content", "Design", "Build", "Launch"]
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Website Development",
    description: "Online stores designed for products, customers and growth.",
    steps: ["Catalog Plan", "Design", "Storefront Build", "Payments", "Launch"]
  },
  {
    slug: "web-application",
    title: "Web Application Development",
    description: "Interactive web applications, dashboards and business tools.",
    steps: ["Requirements", "Architecture", "Build", "Testing", "Launch"]
  },
  {
    slug: "mobile-app",
    title: "Mobile App Development",
    description:
      "Modern mobile application development for business ideas and digital products.",
    steps: ["Discovery", "Design", "Build", "Testing", "Release"]
  },
  {
    slug: "redesign",
    title: "Website Redesign",
    description: "Transform outdated websites into modern digital experiences.",
    steps: ["Audit", "Design", "Rebuild", "Testing", "Launch"]
  },
  {
    slug: "seo-performance",
    title: "SEO & Performance",
    description: "Search-friendly, fast and optimized websites.",
    steps: ["Audit", "Technical SEO", "Content", "Speed", "Monitor"]
  },
  {
    slug: "maintenance",
    title: "Website Maintenance & Support",
    description: "Ongoing improvements, updates, maintenance and technical support.",
    steps: ["Monitor", "Update", "Fix", "Improve", "Report"]
  },
  {
    slug: "domain-deployment",
    title: "Domain & Deployment Setup",
    description: "Assistance with domain configuration, DNS, SSL and deployment.",
    steps: ["Domain", "DNS", "SSL", "Deploy", "Verify"]
  },
  {
    slug: "analytics",
    title: "Google Analytics & Search Console",
    description: "Analytics and search-performance setup.",
    steps: ["Setup", "Verify", "Configure Goals", "Connect", "Report"]
  },
  {
    slug: "google-ads",
    title: "Google Ads",
    description: "Google Ads setup and campaign management, as an optional service.",
    steps: ["Strategy", "Setup", "Launch", "Monitor", "Optimize"]
  }
];

export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  tech: string[];
  url?: string;
  liveUrl?: string;
  image: string;
  gallery?: string[];
  overview: string;
  challenge: string;
  solution: string;
};

export const projects: Project[] = [
  {
    slug: "avantis-infinity",
    name: "Avantis Infinity",
    category: "Business Website",
    description:
      "A modern business website designed to establish an online presence and communicate the brand professionally.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    url: "/projects/avantis-infinity",
liveUrl: "https://avantis-infinity-mushroom.vercel.app/",
image: "/projects/avantis/avantis-1.png",
gallery: [
  "/projects/avantis/avantis-1.png",
  "/projects/avantis/avantis-2.png",
  "/projects/avantis/avantis-3.png"
],
    overview:
      "Avantis Infinity needed a professional web presence that reflected the credibility of the business to new visitors.",
    challenge:
      "The business had no existing website and needed a clear, structured way to present its offering online.",
    solution:
      "A clean, responsive business website with clear navigation, structured content sections and a consistent visual identity."
  }
];

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  { number: "01", title: "Discover", description: "Understand the business, audience and goals." },
  { number: "02", title: "Plan", description: "Define structure, content and functionality." },
  { number: "03", title: "Design", description: "Create the visual direction and user experience." },
  { number: "04", title: "Develop", description: "Build the website or application." },
  { number: "05", title: "Test", description: "Test responsiveness, usability and performance." },
  { number: "06", title: "Launch", description: "Deploy and connect the website." },
  { number: "07", title: "Support", description: "Continue improving and maintaining the product." }
];

export type WhyCard = {
  title: string;
  description: string;
};

export const whyCards: WhyCard[] = [
  { title: "Secure & Reliable", description: "Thoughtful development with security and reliability in mind." },
  { title: "Fast Delivery", description: "Efficient development and clear project communication." },
  { title: "Dedicated Support", description: "Support during and after project delivery." },
  { title: "Quality Assurance", description: "Careful testing across devices and screen sizes." },
  { title: "Affordable Solutions", description: "Digital solutions designed around your needs and budget." },
  { title: "Built for Growth", description: "Web experiences designed to evolve with your business." }
];

export type TechGroup = {
  category: string;
  items: string[];
};

export const techGroups: TechGroup[] = [
  { category: "Frontend", items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "TypeScript"] },
  { category: "Styling & Motion", items: ["Tailwind CSS", "Motion", "SVG", "CSS Animations", "Lucide Icons"] },
  { category: "Backend & Data", items: ["Node.js", "MongoDB"] },
  { category: "Version Control", items: ["GitHub"] },
  { category: "Deployment", items: ["Vercel"] }
];

export const trustPoints = [
  "Custom Design",
  "Mobile Responsive",
  "SEO Ready",
  "Fast Performance",
  "Secure & Reliable",
  "Dedicated Support"
];

export type FAQItem = { question: string; answer: string };

export const faqs: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on the scope — pages, features and complexity. Share a few details in the project planner below and we'll discuss a fair price for your project."
  },
  {
    question: "How long does website development take?",
    answer:
      "Most business websites take a few weeks from discovery to launch. Larger applications take longer. We'll give you a realistic timeline after understanding your requirements."
  },
  {
    question: "Do you build responsive websites?",
    answer: "Yes. Every project is designed and tested across mobile, tablet and desktop screens."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. We review your current site and rebuild it with modern design, structure and performance."
  },
  {
    question: "Do you provide domain setup?",
    answer:
      "Yes, we can assist with domain selection, DNS configuration and SSL. You retain ownership of your domain."
  },
  {
    question: "Do you provide hosting/deployment assistance?",
    answer: "Yes, we handle deployment setup and can assist with migrating an existing site."
  },
  {
    question: "Do you provide SEO?",
    answer:
      "We build technical and on-page SEO foundations into every website. We don't promise guaranteed rankings — no agency honestly can."
  },
  {
    question: "Do you manage Google Ads?",
    answer: "Yes, as an optional service — campaign setup and ongoing management."
  },
  {
    question: "Do you provide maintenance after launch?",
    answer: "Yes, ongoing maintenance and support plans are available after your site goes live."
  },
  {
    question: "Can you build mobile applications?",
    answer: "Yes, we develop mobile applications for business ideas and digital products."
  },
  {
    question: "Can I update the website later?",
    answer:
      "Yes. We can hand over an easy way to make content updates, or continue supporting updates for you."
  }
];
