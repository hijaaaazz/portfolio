/**
 * =========================================================================
 *                   PORTFOLIO CONFIGURATION (content.js)
 * =========================================================================
 * 
 * Edit this single file to customize the entire portfolio for ANYONE!
 * Change your name, titles, images, stats, skills, projects, social links,
 * and contact info here.
 * 
 * NOTE ON EMAIL & KEYS (.env):
 * Sensitive credentials like EmailJS keys can be kept private by creating
 * a local `.env` file (copied from `.env.example`).
 * If you deploy to Vercel, simply add those keys in the Vercel Dashboard
 * under Project Settings -> Environment Variables. It will NOT break auto-deploy!
 * =========================================================================
 */

export const portfolioContent = {
  // Brand & Personal Identity
  brand: {
    name: "Hijaz C",
    tagline: "Flutter Developer",
    metaTitle: "Hijaz C — Flutter Developer & Mobile App Engineer",
    metaDescription: "Hijaz C is a Flutter Developer & Mobile App Engineer specializing in high-performance Android & iOS applications, Clean Architecture, BLoC, and store deployments.",
    displayWordmark: "hijaz", // Displayed in the signature area in the footer
    avatar: "/images/hijaz-portrait.png", // Main portrait on the sticky sidebar
    logo: "/images/hijaz-h-logo.png", // Header & sidebar brand logo
    cvUrl: "/Resume_Hijaz_C.pdf", // Path to resume PDF file in /public
    // Rotating roles for the typewriter headline in the sidebar
    roles: [
      "Mobile App Developer",
      "UI/UX Designer",
      "App Release Manager",
    ],
    availability: {
      status: "Available for Work",
      isAvailable: true,
    },
    shortBio: "I build scalable, user-friendly Android & iOS applications with Flutter and Clean Architecture, based in Kerala, IN.",
    timezone: "Asia/Kolkata", // Timezone for the live real-time header clock
  },

  // Main Navigation Sections
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "tech", label: "Tech Stack" },
    { id: "blog", label: "Milestones" },
    { id: "contact", label: "Contact" },
  ],

  // Home Hero Section
  home: {
    headline: {
      prefix: "I’m building",
      pill1: "mobile apps",
      pill2: "& scalable systems",
      suffix: "that people remember",
    },
    // Animated numerical counters
    stats: [
      {
        value: 3,
        symbol: "+",
        label: "Completed Projects",
      },
      {
        value: 85,
        symbol: "%",
        label: "Academic Distinction (+2)",
      },
      {
        value: 2,
        symbol: "+",
        label: "Years Practical Engineering",
      },
    ],
    // Infinite scrolling specialties ticker
    ticker: {
      title: "Core Specialties & Skills (2024–26©)",
      items: [
        "Flutter Apps",
        "Clean Architecture",
        "BLoC State Management",
        "Dart",
        "Firebase & FCM",
        "REST APIs & WebSockets",
        "Hive & SQLite",
        "App Store & Play Store",
      ],
    },
  },

  // About Section
  about: {
    badge: "About",
    heading: "Engineering scalable mobile apps with Flutter, clean architecture, and robust code",
    paragraphs: [
      "I am a Flutter Developer with 2+ years of application engineering experience, including 8+ months in professional industry production. Experienced in architecting, building, deploying, and maintaining Android and iOS applications using Flutter and Dart.",
      "Skilled in Clean Architecture, BLoC state management, Firebase, REST APIs, WebSockets, local persistence (Hive & SQLite), and store deployments across Google Play Console and Apple App Store Connect.",
    ],
    // Key milestones & accomplishments list
    competencies: [
      {
        title: "Production Mobile Engineering",
        organization: "Filumart B2B Platform (Android & iOS)",
        year: "2025",
        image: "/images/playstorefilumart.png",
      },
      {
        title: "Multi-Platform Learning Ecosystem",
        organization: "Skilnk – Student & Tutor Platform",
        year: "2024",
        image: "/images/skilnk.png",
      },
      {
        title: "Offline-First Application Architecture",
        organization: "Invento – Google Play Store Release",
        year: "2024",
        image: "/images/invento.png",
      },
      {
        title: "Open Source Package Author",
        organization: "Floating Custom Navbar (pub.dev)",
        year: "2024",
        image: "/images/floating_navbar.png",
      },
      {
        title: "Distinction in Computer Commerce",
        organization: "GMHSS Perinthalmanna (+2)",
        year: "2024",
        image: "/images/hijaz-portrait.png",
      },
    ],
  },

  // Education & Experience Timeline
  education: {
    badge: "Education & Experience",
    timeline: [
      {
        period: "Dec 2025 - Present",
        role: "Flutter Developer",
        company: "Madariz Impex Pvt. Ltd.",
        description: "Worked on the development and maintenance of Filumart, a global B2B e-commerce platform for Android and iOS. Built product listing, order management, authentication, FCM push notifications, WebSockets, and biometric authentication, and managed Google Play and App Store releases.",
        iconType: "work", // 'work' | 'education' | 'school'
      },
      {
        period: "May 2024 - Aug 2025",
        role: "Flutter Development Program",
        company: "Brototype Kochi",
        description: "Completed intensive project-based engineering program focused on Flutter, Firebase, Clean Architecture, BLoC/Provider state management, deployment workflows, and collaborative software development.",
        iconType: "education",
      },
      {
        period: "2022 - 2024",
        role: "Higher Secondary Education (+2)",
        company: "GMHSS Perinthalmanna",
        description: "Commerce with Computer Applications. Graduated with academic distinction, building strong fundamentals in software concepts, database management, and problem solving.",
        iconType: "school",
      },
    ],
  },

  // Projects / Work Section
  projects: {
    badge: "Work Highlights",
    heading: "Production & Featured Projects",
    items: [
      {
        id: "filumart",
        title: "Filumart B2B Marketplace",
        subtitle: "Global B2B e-commerce platform on Android & iOS with product catalog, order workflows, biometric authentication, and FCM push notifications.",
        category: "Production",
        date: "2025 - Present",
        role: "Flutter Developer at Madariz Impex",
        image: "/images/filumart.png",
        liveUrl: "https://play.google.com/store/apps/details?id=com.filumart.buyer",
        githubUrl: null,
        tags: ["Flutter", "BLoC", "REST APIs", "WebSockets", "FCM"],
        featured: true,
      },
      {
        id: "skilnk",
        title: "Skilnk Learning Ecosystem",
        subtitle: "Comprehensive e-learning platform with Student App, Tutor App, Tutor Web Portal, real-time chat, and Razorpay payment integration.",
        category: "Mobile",
        date: "2024",
        role: "Full-Stack Mobile Engineer",
        image: "/images/skilnk.png",
        liveUrl: "https://play.google.com/store/apps/details?id=in.skilnk.user_app&hl=en_IN",
        githubUrl: "https://github.com/hijaaaazz/Skilnk-E-Learning-App",
        tags: ["Flutter", "Clean Architecture", "Firebase", "Razorpay"],
        featured: true,
      },
      {
        id: "invento",
        title: "Invento – Inventory Manager",
        subtitle: "Lightweight offline inventory management application published on Google Play Store for small businesses to track sales, products, and revenue.",
        category: "Mobile",
        date: "2024",
        role: "Lead Mobile Developer",
        image: "/images/invento.png",
        liveUrl: "https://play.google.com/store/apps/details?id=in.mhcnkd4.invento",
        githubUrl: "https://github.com/hijaaaazz/Invento-Inventery-Management-App",
        tags: ["Flutter", "Hive DB", "Offline-First", "Play Store"],
        featured: true,
      },
      {
        id: "floating-navbar",
        title: "Floating Custom Navbar Package",
        subtitle: "Published reusable open-source Flutter package on pub.dev providing customizable, interactive floating navigation experiences.",
        category: "Packages",
        date: "2024",
        role: "Package Author & Maintainer",
        image: "/images/floating_navbar.png",
        liveUrl: "https://pub.dev/packages/floating_custom_navbar",
        githubUrl: "https://github.com/hijaaaazz/floating_navbar",
        tags: ["Flutter Package", "pub.dev", "UI Components", "Open Source"],
        featured: true,
      },
    ],
  },

  // Services Offered Section
  services: {
    badge: "Services",
    heading: "Production-ready mobile engineering & UI/UX design",
    items: [
      {
        id: "mobile-app-dev",
        title: "Mobile App Development",
        tags: [
          "From Scratch to Deployment",
          "iOS & Android",
          "Clean Architecture & Scaling",
          "REST APIs & Auth",
          "Play Store & App Store Release",
        ],
        description: "Full-lifecycle iOS & Android mobile engineering from scratch to production deployment. Architectural planning, scaling, Clean Architecture with BLoC, seamless REST API integration, authentication, and Google Play Store & Apple App Store release.",
        images: ["/images/filumart.png", "/images/skilnk.png"],
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Designing",
        tags: [
          "From Scratch to Prototype",
          "Figma Interactive Prototypes",
          "Design Systems",
          "UX Architecture & Wireframes",
          "Mobile-First UI",
        ],
        description: "End-to-end interface and experience design from scratch to interactive clickable prototypes. Crafting user research-driven wireframes, comprehensive design systems, component libraries, and polished micro-interactions ready for production.",
        images: ["/images/skilnk.png", "/images/floating_navbar.png"],
      },
    ],
  },

  // Tech Stack & Tooling Section
  tech: {
    badge: "Tech Stack",
    heading: "See how my expertise with these tools drives better results",
    items: [
      {
        name: "Flutter & Dart",
        duty: "Cross-platform mobile apps",
        percent: 90,
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
      },
      {
        name: "Firebase & Cloud",
        duty: "Auth, Firestore, Realtime DB, Storage, Hosting & FCM",
        percent: 90,
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      },
      {
        name: "Figma",
        duty: "Mobile & web UI/UX design",
        percent: 85,
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      {
        name: "Git & GitHub",
        duty: "Version control & collaboration",
        percent: 88,
        iconSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        isGithub: true,
      },
    ],
  },

  // Thoughts, Milestones & Articles Section
  blog: {
    badge: "Thoughts & Moments",
    heading: "Thoughts &\nMoments",
    posts: [
      {
        id: "stop-opening-five-emulators",
        title: "Stop Opening Five Emulators to Test One Flutter Layout",
        date: "Aug 2026",
        category: "Technical Article",
        readTime: "Medium • 6 min read",
        image: "/images/blog-flutter-emulators.png",
        summary: "You don't always need multiple emulators to test responsiveness. Running your app as a desktop application and resizing the window creates an instant, tighter feedback loop that transforms Flutter UI development.",
        url: "https://medium.com/@hijaz/stop-opening-five-emulators-to-test-one-flutter-layout-346719bf3590",
        platform: "Medium",
      },
      {
        id: "filumart-inauguration-milestone",
        title: "One for the Memories: Filumart Inauguration & Milestone",
        date: "2026",
        category: "Career Milestone",
        readTime: "Pillar of Success Award",
        image: "/images/blog-filumart-milestone.jpg",
        summary: "Seeing Filumart officially inaugurated after months of dedication feels incredible. Honored to receive the Pillar of Success Award from Chairman Mujeebudeen Madariz. Here’s to building resilient systems and many more milestones ahead!",
        url: "https://www.linkedin.com/posts/hijaaaazz_amomenttoremember-milestone-activity-7497144343493763072-p7s5",
        platform: "LinkedIn",
      },
    ],
  },

  // Contact Details
  contact: {
    badge: "CONTACT",
    heading: "If you have a general question, project idea, or just want to get in touch, feel free to drop me an email or fill out the form below.",
    email: "hijaz.fd@gmail.com",
    
    location: "Kerala, India",
    quote: {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
    },
    // Optional EmailJS fallback keys if not using .env variables
    // (Recommended: keep them in .env so they stay private from public repos!)
    emailjs: {
      serviceId: "",
      templateId: "",
      publicKey: "",
    },
  },

  // Social Profiles
  socialLinks: [
    {
      platform: "LinkedIn",
      username: "hijaaaazz",
      url: "https://www.linkedin.com/in/hijaaaazz/",
    },
    {
      platform: "GitHub",
      username: "hijaaaazz",
      url: "https://github.com/hijaaaazz",
    },
    {
      platform: "Medium",
      username: "@hijaz",
      url: "https://medium.com/@hijaz",
    },
  ],

  // Footer Metadata
  footer: {
    brandTitle: "Hijaz C",
    tagline: "Flutter Developer",
    displayWordmark: "hijaz",
    copyright: `© ${new Date().getFullYear()} Muhammed Hijaz C • Flutter Developer`,
  },
};

// Aliases for backward compatibility
export const content = portfolioContent;
export default portfolioContent;
