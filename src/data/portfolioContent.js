/**
 * Centralized Portfolio Content Configuration
 * 
 * All portfolio data, copy, links, media paths, and contact details
 * synchronized with Hijaz C's official Flutter Developer Resume.
 */

export const portfolioContent = {
  // Brand Identity
  brand: {
    name: "Hijaz C",
    titleLogo: "Hijaz C",
    displayWordmark: "hijaz",
    tagline: "Flutter Developer",
    badge: "Available for new projects",
    heroHeadline: "Building scalable cross-platform mobile apps with Flutter & clean architecture",
    statementPrefix: "Hijaz C is a dedicated Flutter Developer",
    statementHighlight: "specializing in Clean Architecture, BLoC state management, and production-ready Android & iOS applications.",
    bio: "Flutter Developer with 2+ years of application development experience, including 8+ months of professional industry experience. Experienced in building, deploying, and maintaining Android and iOS applications using Flutter and Dart.",
    cvUrl: "/Resume_Hijaz_C.pdf",
  },

  // Navigation Links
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Tech", href: "#tech" },
    { label: "Contact", href: "#contact" },
  ],

  // Skills
  skills: [
    { name: "Flutter", icon: "Smartphone", category: "Mobile" },
    { name: "Dart", icon: "Layers", category: "Mobile" },
    { name: "BLoC Architecture", icon: "Cpu", category: "State Management" },
    { name: "Clean Architecture", icon: "Layout", category: "Architecture" },
    { name: "Firebase", icon: "Server", category: "Backend" },
    { name: "REST APIs", icon: "Code2", category: "Backend" },
    { name: "WebSockets", icon: "Sparkles", category: "Networking" },
    { name: "Hive & SQLite", icon: "FileCode2", category: "Database" },
    { name: "Google Play Console", icon: "MonitorSmartphone", category: "Deployment" },
    { name: "App Store Connect", icon: "Terminal", category: "Deployment" },
  ],

  // Services Offered
  services: {
    badge: "Services",
    heading: "Production-ready mobile engineering & UI/UX design",
    subtitle: "From initial concept and interactive prototypes to scalable architecture, API integration, and app store deployment.",
    items: [
      {
        id: "mobile-app-dev",
        title: "Mobile App Development",
        category: "From Scratch to Deployment",
        description: "Full-lifecycle iOS & Android mobile engineering from scratch to production deployment. Architectural planning, scaling, Clean Architecture with BLoC, seamless REST API integration, authentication, and Google Play Store & Apple App Store release.",
        highlight: "Architecture, Scaling, iOS & Android, Release & Deployment, REST APIs & Auth",
        tags: [
          "From Scratch to Deployment",
          "iOS & Android",
          "Clean Architecture & Scaling",
          "REST APIs & Auth",
          "Play Store & App Store Release"
        ],
        images: ["/images/filumart.png", "/images/skilnk.png"],
      },
      {
        id: "ui-ux-design",
        title: "UI/UX Designing",
        category: "From Scratch to Prototype",
        description: "End-to-end interface and experience design from scratch to interactive clickable prototypes. Crafting user research-driven wireframes, comprehensive design systems, component libraries, and polished micro-interactions ready for production.",
        highlight: "Wireframes, Design Systems, Interactive Prototypes & Visual Design",
        tags: [
          "From Scratch to Prototype",
          "Figma Interactive Prototypes",
          "Design Systems",
          "UX Architecture & Wireframes",
          "Mobile-First UI"
        ],
        images: ["/images/skilnk.png", "/images/floating_navbar.png"],
      },
    ],
  },

  // Projects / Portfolio Work (Directly from Resume)
  projects: {
    badge: "Work Highlights",
    heading: "Production & Featured Projects",
    subtitle: "Real-world mobile applications and platforms engineered with Flutter and modern architecture.",
    categories: ["All", "Production", "Mobile", "Packages"],
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

  // Highlight Stats
  stats: [
    {
      label: "Years Experience",
      value: "2+",
      caption: "Flutter & Dart engineering",
    },
    {
      label: "Months Industry",
      value: "8+",
      caption: "At Madariz Impex Pvt. Ltd.",
    },
    {
      label: "Published Apps & Packages",
      value: "5+",
      caption: "Play Store & pub.dev",
    },
  ],

  // Resume: Education & Career
  resume: {
    badge: "Career & Learning",
    heading: "Education & Experience",
    education: [
      {
        period: "May 2024 — Aug 2025",
        degree: "Flutter Development Program",
        institution: "Brototype Kochi",
        grade: "Certificate",
        description: "Intensive project-based program focused on Flutter, Firebase, Clean Architecture, state management (BLoC, Provider, GetX), and deployment workflows.",
      },
      {
        period: "2022 — 2024",
        degree: "Higher Secondary Education",
        institution: "GMHSS Perinthalmanna",
        grade: "Commerce with Computer Applications",
        description: "Completed comprehensive coursework in computer applications, programming fundamentals, and commercial logic.",
      },
    ],
    experience: [
      {
        period: "Dec 2025 — Present",
        role: "Flutter Developer",
        company: "Madariz Impex Pvt. Ltd.",
        description: "Collaborated on Filumart, a global B2B e-commerce platform on Android and iOS. Built product listings, order management, FCM notifications, WebSockets, biometric auth, and Google Play & App Store releases.",
      },
      {
        period: "May 2024 — Aug 2025",
        role: "Flutter Development Resident",
        company: "Brototype Kochi",
        description: "Built end-to-end applications including Skilnk learning ecosystem, Invento offline-first inventory tracker, and reusable Flutter packages with Clean Architecture.",
      },
    ],
  },

  // Thoughts, Achievements & Milestones Showcase
  /**
   * OPTIMAL UI GUIDELINE FOR BLOG / MILESTONES:
   * - summary (Quote): 170 - 220 characters (~3 to 4 lines) for a fixed, balanced quote box that perfectly matches the visual card.
   * - title: 45 - 65 characters (fits cleanly on 1-2 lines with zero layout jump).
   */
  blog: {
    badge: "Thoughts & Moments",
    heading: "Thoughts & Moments",
    subtitle: "Engineering philosophies, milestones, and architectural insights from real-world mobile systems.",
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
    badge: "Get in Touch",
    heading: "Let’s build something extraordinary together",
    subtitle: "Have an app idea, need a Flutter developer, or looking for production-grade mobile engineering? Reach out anytime.",
    phone: "+91 8714330170",
    email: "hijaz.fd@gmail.com",
    location: "Kerala, India",
    emailjs: {
      serviceId: "service_1lbu5jk",
      templateId: "template_v3kry6m",
      publicKey: "t6CX9Y_ZSfW8b7tNW",
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

  // Footer Links & Info
  footer: {
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "#home" },
          { label: "About", href: "#about" },
          { label: "Education", href: "#education" },
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Connect",
        links: [
          { label: "LinkedIn", href: "https://www.linkedin.com/in/hijaaaazz/" },
          { label: "GitHub", href: "https://github.com/hijaaaazz" },
          { label: "Medium", href: "https://medium.com/@hijaz" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Hijaz C. Flutter Developer. Built with precision.`,
  },
};

export default portfolioContent;
