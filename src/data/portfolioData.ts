export interface TechItem {
  name: string;
  bg: string;
  fg: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  description: string;
  points: string[];
}

export interface ProjectCase {
  id: string;
  index: string;
  title: string;
  client?: string;
  category: string;
  period: string;
  bg: string;
  fg: string;
  accent: string;
  description: string;
  points: string[];
  tech: string[];
  image: string;
  link?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Raghul S",
    firstName: "Raghul",
    title: "Full Stack Developer & Graphic Designer",
    role: "Graphic Designer & Web Developer Intern",
    company: "Pepul · WorkFast AI",
    location: "Chennai, India",
    email: "raghulfp@gmail.com",
    phone: "+91 8056941990",
    linkedin: "https://linkedin.com/in/raghulfp8056",
    linkedinHandle: "linkedin.com/in/raghulfp8056",
    status: "Open to Full Stack & Graphic Design opportunities",
    tagline: "Experienced Full Stack Developer, proficient in Python, HTML5, CSS3 and modern AI-assisted development with Claude AI and GitHub Copilot.",
  },

  bio: {
    intro: [
      { text: "A ", accent: false },
      { text: "Full Stack Developer", accent: true },
      { text: " and ", accent: false },
      { text: "Graphic Designer", accent: true },
      { text: " from Chennai, India.", accent: false },
    ],
    paragraph:
      "Design and development are more than a profession for me — it's a craft I'm always sharpening. I find joy in every detail, from wireframes and Figma prototypes to production-ready front-end code. Beyond the screen, I'm constantly exploring cloud platforms, data analytics, and generative AI tools, always looking for new ways to build high-impact digital products.",
  },

  footerStrip: {
    experience: {
      company: "Pepul | WorkFast AI",
      role: "Graphic Designer & Web Dev Intern",
      location: "Chennai, India",
      since: "Since Mar 2026",
    },
    softwares: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "VS Code", "Git & GitHub"],
    education: {
      degree: "B.E. — Computer Science",
      school: "Saraswathy College of Engineering & Technology",
      period: "Nov 2022 – Apr 2026",
    },
  },

  tech: [
    { name: "Python", bg: "#12183b", fg: "#ffffff" },
    { name: "HTML5", bg: "#e34c26", fg: "#ffffff" },
    { name: "CSS3", bg: "#1f5fd6", fg: "#ffffff" },
    { name: "JavaScript", bg: "#f0c419", fg: "#16140f" },
    { name: "Figma", bg: "#1a1a1a", fg: "#ffffff" },
    { name: "Adobe XD", bg: "#4a1e6e", fg: "#ffffff" },
    { name: "Photoshop", bg: "#001e36", fg: "#3ec5ff" },
    { name: "Illustrator", bg: "#33110c", fg: "#ff9a4d" },
    { name: "Google Cloud", bg: "#e8631a", fg: "#ffffff" },
    { name: "Git & GitHub", bg: "#16331c", fg: "#7de08c" },
    { name: "Bootstrap", bg: "#5b2a86", fg: "#ffffff" },
    { name: "Canva", bg: "#0d7a5f", fg: "#ffffff" },
  ] as TechItem[],

  projects: [
    {
      id: "fiteats",
      index: "01",
      title: "FitEats",
      category: "Health & Nutrition App · Graphic Design",
      period: "2026",
      bg: "#121d17",
      fg: "#ffffff",
      accent: "#4cd964",
      description:
        "A personalized meal planning and fitness tracking app designed to help users reach health goals with custom macro tracking, interactive meal plans, and real-time progress analytics.",
      points: [
        "Crafted mobile wireframes, dark-themed UI components, and Figma prototypes.",
        "Integrated custom macro nutrient tracking algorithms and dynamic meal cards.",
        "Delivered a seamless user experience focused on daily habit tracking and health optimization."
      ],
      tech: ["Figma", "React Native", "Graphic Design", "Prototyping"],
      image: "/projects/fiteats.gif",
      link: "#"
    },
    {
      id: "wrapndelight",
      index: "02",
      title: "Wrap & Delight",
      category: "Luxury E-Commerce · Web Experience",
      period: "2026",
      bg: "#1a1625",
      fg: "#ffffff",
      accent: "#d4af37",
      description:
        "An elegant custom gift wrapping and artisanal hampers platform offering personalized packaging options, curated gift bundles, and a seamless checkout experience.",
      points: [
        "Designed sophisticated visual identity, luxury packaging builder, and catalog interface.",
        "Optimized checkout flow and responsive layouts across desktop and mobile browsers.",
        "Created custom interactive bundle builder and curated gift box selector."
      ],
      tech: ["Next.js", "Tailwind CSS", "Figma", "Web Architecture"],
      image: "/projects/wrapndelight.gif",
      link: "#"
    },
    {
      id: "sign-language-translator",
      index: "03",
      title: "Real-Time Sign Language Translator",
      category: "Computer Vision & AI · Machine Learning",
      period: "2026 — Present",
      bg: "#0f2417",
      fg: "#ffffff",
      accent: "#2ec4b6",
      description:
        "A real-time sign language recognition system leveraging computer vision and ML models to detect hand gestures and translate them into spoken or written text.",
      points: [
        "Leveraging OpenCV and ML landmark keypoints to detect and interpret gestures live.",
        "Implemented real-time subtitle translation bar and speech synthesis interface.",
        "Focused on social accessibility to bridge communication for hearing/speech impaired users."
      ],
      tech: ["Python", "OpenCV", "Machine Learning", "AI Vision"],
      image: "/projects/signlanguage.jpg",
      link: "#"
    },
    {
      id: "jalsa-restaurant",
      index: "04",
      title: "Jalsa Restaurant",
      category: "Food & Hospitality · Digital Portal",
      period: "2025",
      bg: "#251813",
      fg: "#ffffff",
      accent: "#ff9f1c",
      description:
        "A vibrant online ordering and table reservation portal for Jalsa Restaurant, featuring interactive digital menus, event booking, and customer rewards.",
      points: [
        "Designed mouth-watering digital menu experience with dietary filters and instant ordering.",
        "Implemented interactive table reservation workflow with real-time seat availability.",
        "Enhanced brand presence with warm lighting visuals and fluid mobile navigation."
      ],
      tech: ["HTML5", "CSS3", "JavaScript", "Figma"],
      image: "/projects/jalsa.gif",
      link: "#"
    },
    {
      id: "maxmybill",
      index: "05",
      title: "MaxMyBill",
      category: "FinTech & Utilities · Web Platform",
      period: "2026",
      bg: "#0d1b2a",
      fg: "#ffffff",
      accent: "#00f0ff",
      description:
        "A smart fintech billing and subscription management platform empowering users with automated invoice tracking, expense analytics, and smart renewal alerts.",
      points: [
        "Crafted comprehensive financial analytics dashboards with interactive expense breakdown charts.",
        "Integrated multi-service invoice synchronization and automated renewal alerts.",
        "Delivered a high-performance dark mode experience tailored for smart financial management."
      ],
      tech: ["Next.js", "React", "Node.js", "Graphic Design"],
      image: "/projects/maxmybill.gif",
      link: "#"
    },
    {
      id: "tanjore-oviyam",
      index: "06",
      title: "Tanjore Oviyam",
      category: "Artisan Heritage · Luxury E-Commerce",
      period: "2025 – 2026",
      bg: "#161b2e",
      fg: "#ffffff",
      accent: "#d4af37",
      description:
        "A luxury digital gallery and e-commerce portal showcasing authentic handcrafted Indian Tanjore paintings with 22k gold leaf foil art and custom framing options.",
      points: [
        "Designed rich traditional aesthetic with gold-leaf accents and museum-grade gallery curation.",
        "Built custom artwork framing previewer and high-resolution zoom for authentic detailing.",
        "Streamlined international checkout and custom artisan commission booking flows."
      ],
      tech: ["Next.js", "Figma", "Tailwind CSS", "E-Commerce"],
      image: "/projects/tanjore.gif",
      link: "#"
    },
    {
      id: "jas-system",
      index: "07",
      title: "JAS System",
      category: "Enterprise Management · SaaS Platform",
      period: "2025 – 2026",
      bg: "#151624",
      fg: "#ffffff",
      accent: "#9d4edd",
      description:
        "An all-in-one administrative management system streamlining asset tracking, employee workflows, automated scheduling, and real-time operational metrics.",
      points: [
        "Built comprehensive administrative dashboard with real-time analytics and data visualization.",
        "Automated resource allocation, hardware tracking, and maintenance alerts.",
        "Implemented high-density modern dark UI tailored for enterprise power users."
      ],
      tech: ["Python", "React", "Node.js", "Graphic Design"],
      image: "/projects/jassystem.gif",
      link: "#"
    },
    {
      id: "kanna-properties",
      index: "08",
      title: "Kanna Properties",
      category: "Real Estate Portal · Web Design",
      period: "2025",
      bg: "#111a2e",
      fg: "#ffffff",
      accent: "#3a86ff",
      description:
        "A modern real estate discovery platform featuring high-definition property listings, interactive map searches, neighborhood insights, and direct inquiry workflows.",
      points: [
        "Architected clean property search portal with location filters and map integration.",
        "Designed high-converting property detail pages with HD gallery modals and agent contacts.",
        "Built responsive grid layouts optimizing listing discovery on mobile and desktop."
      ],
      tech: ["Next.js", "CSS Modules", "Figma", "Full Stack"],
      image: "/projects/kannaproperties.gif",
      link: "#"
    }
  ] as ProjectCase[],

  experience: [
    {
      id: "pepul",
      role: "Graphic Designer & Web Developer Intern",
      company: "Pepul | WorkFast AI",
      location: "Chennai, India",
      period: "Mar 2026 — Present",
      current: true,
      description: "Designing end-to-end Graphic Design for WorkFast AI, a productivity and workflow automation platform.",
      points: [
        "Creating user flows, wireframes, and high-fidelity prototypes in Figma to streamline AI-assisted work features.",
        "Developing responsive web interfaces using HTML5, CSS3, and JavaScript aligned with modern design systems.",
        "Collaborating with product and engineering teams to translate AI feature requirements into intuitive UX.",
        "Conducting usability reviews and iterating on designs based on stakeholder feedback and accessibility standards.",
      ],
    },
    {
      id: "uiic",
      role: "Software Development Intern",
      company: "United India Insurance Co. Ltd (UIIC)",
      location: "Chennai, India",
      period: "Jul 2025 — Aug 2025",
      description: "Designed and developed UI modules for the IT Asset Service Portal.",
      points: [
        "Designed and developed UI modules using Figma, HTML, CSS, and Python.",
        "Implemented full-stack features enabling efficient tracking of IT assets across departments.",
        "Delivered a functional portal deployed within Government of India-owned insurance infrastructure.",
      ],
    },
    {
      id: "tata-forage",
      role: "Gen AI Data Analytics Virtual Intern",
      company: "TATA & Forage",
      location: "Remote — Virtual Experience Program",
      period: "Apr 2025 — May 2025",
      description: "Completed a Gen AI Powered Data Analytics job simulation applying generative AI to real business scenarios.",
      points: [
        "Utilized Python (Pandas, NumPy) and AI-assisted workflows to analyze datasets and derive insights.",
        "Developed data visualizations and summary reports communicating findings to non-technical stakeholders.",
      ],
    },
    {
      id: "google-skillboost",
      role: "Cloud & DevOps Learning Tracks",
      company: "Google Skill Boost",
      location: "Virtual Learning Experience",
      period: "2024 — 2025",
      description: "Completed structured learning paths in Data Analytics, Cloud Engineering, and DevOps / SRE.",
      points: [
        "Earned Google Cloud Engineer and DevOps Engineer certificates.",
        "Applied best practices for software delivery reliability, monitoring, and automated deployments.",
      ],
    },
  ] as ExperienceItem[],

  certifications: [
    "Google Data Analytics Professional Certificate",
    "Google Cloud Engineer Certificate",
    "Google DevOps Engineer (SRE) Certificate",
    "Python from Zero-to-Hero (Beginner Level)",
    "Complete Figma Course: Web & Mobile Projects from Scratch",
    "Figma Essentials for Graphic Design",
  ],
};
