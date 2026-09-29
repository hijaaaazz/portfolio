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
    cvUrl: "#contact",
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
    heading: "Production-ready mobile engineering & app delivery",
    subtitle: "End-to-end Flutter development tailored to deliver performant, reliable, and scalable mobile products.",
    items: [
      {
        id: "flutter-dev",
        title: "Cross-Platform Mobile Apps",
        category: "Mobile",
        description: "Developing robust Android and iOS applications with Flutter & Dart, applying Clean Architecture and BLoC for predictable, maintainable performance.",
        highlight: "Flutter, Dart, Clean Architecture & BLoC",
      },
      {
        id: "api-backend",
        title: "Backend, APIs & Real-Time Sync",
        category: "Integration",
        description: "Seamless integration of REST APIs, WebSockets, Firebase Cloud Messaging (FCM), authentication, and cloud databases (Firestore, Hive, SQLite).",
        highlight: "REST APIs, WebSockets, Firebase & Local DBs",
      },
      {
        id: "app-deployment",
        title: "Store Publishing & Maintenance",
        category: "DevOps",
        description: "Publishing and maintaining production releases on Google Play Store and Apple App Store via TestFlight, managing CI/CD and ongoing app enhancements.",
        highlight: "Play Console, App Store Connect & TestFlight",
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
        image: "/images/cover.avif",
        liveUrl: "https://github.com/hijaaaazz",
        githubUrl: "https://github.com/hijaaaazz",
        tags: ["Flutter", "BLoC", "REST APIs", "WebSockets", "FCM"],
        featured: true,
      },
      {
        id: "invento",
        title: "Invento – Inventory Manager",
        subtitle: "Lightweight offline-first inventory management application published on Google Play Store for small businesses to track sales, products, and revenue.",
        category: "Mobile",
        date: "2024",
        role: "Lead Mobile Developer",
        image: "/images/youtube.avif",
        liveUrl: "https://github.com/hijaaaazz",
        githubUrl: "https://github.com/hijaaaazz",
        tags: ["Flutter", "Hive DB", "Offline-First", "Play Store"],
        featured: true,
      },
      {
        id: "skilnk",
        title: "Skilnk Learning Ecosystem",
        subtitle: "Comprehensive e-learning platform with Student App, Tutor App, Tutor Web Portal, real-time chat, and Razorpay payment integration.",
        category: "Mobile",
        date: "2024",
        role: "Full-Stack Mobile Engineer",
        image: "/images/netflix.avif",
        liveUrl: "https://github.com/hijaaaazz",
        githubUrl: "https://github.com/hijaaaazz",
        tags: ["Flutter", "Clean Architecture", "Firebase", "Razorpay"],
        featured: true,
      },
      {
        id: "floating-navbar",
        title: "Floating Custom Navbar Package",
        subtitle: "Published reusable open-source Flutter package on pub.dev providing customizable, interactive floating navigation experiences.",
        category: "Packages",
        date: "2024",
        role: "Package Author & Maintainer",
        image: "/images/BRTOT YPE.avif",
        liveUrl: "https://pub.dev",
        githubUrl: "https://github.com/hijaaaazz",
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

  // Blog Posts
  blog: {
    badge: "Insights",
    heading: "Latest Blogs",
    subtitle: "Architectural insights, state management patterns, and experiences building Flutter apps.",
    posts: [
      {
        id: "brototype-journey",
        title: "Clean Architecture in Production Flutter Apps",
        date: "2024",
        category: "Mobile Architecture",
        image: "/images/BRTOT YPE.avif",
        readTime: "4 min read",
        summary: "How separating presentation, domain, and data layers with BLoC enables scalable, testable mobile apps.",
        url: "#",
      },
      {
        id: "mastering-mobile-dev",
        title: "Offline-First Mobile Apps with Hive & Flutter",
        date: "2024",
        category: "Local Persistence",
        image: "/images/cover.avif",
        readTime: "3 min read",
        summary: "Key lessons from engineering Invento to deliver lightning-fast data persistence without internet dependency.",
        url: "#",
      },
      {
        id: "realtime-websockets-bloc",
        title: "Event-Driven BLoC with WebSockets & FCM",
        date: "2025",
        category: "State & Networking",
        image: "/images/netflix.avif",
        readTime: "5 min read",
        summary: "Architecting real-time event streaming and reactive UI synchronization in commercial Flutter applications.",
        url: "#",
      },
    ],
  },

  // Contact Details
  contact: {
    badge: "Get in Touch",
    heading: "Let’s build something extraordinary together",
    subtitle: "Have an app idea, need a Flutter developer, or looking for production-grade mobile engineering? Reach out anytime.",
    formEndpoint: "https://script.google.com/macros/s/AKfycbweXN5KVbK6fMZWaipTR-wly112SJYq9YxkcLX195vyRiEgRqrK0zfYxTBSMJLVT5A/exec",
    phone: "+91 8714330170",
    email: "mhcnkd4@gmail.com",
    location: "Kerala, India",
  },

  // Social Profiles
  socialLinks: [
    {
      platform: "GitHub",
      username: "hijaaaazz",
      url: "https://github.com/hijaaaazz",
    },
    {
      platform: "LinkedIn",
      username: "hijaaaazz",
      url: "https://www.linkedin.com/in/hijaaaazz/",
    },
    {
      platform: "WhatsApp",
      username: "+91 8714330170",
      url: "https://wa.me/918714330170/",
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
          { label: "GitHub", href: "https://github.com/hijaaaazz" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/hijaaaazz/" },
          { label: "WhatsApp", href: "https://wa.me/918714330170/" },
        ],
      },
    ],
    copyright: `© ${new Date().getFullYear()} Hijaz C. Flutter Developer. Built with precision.`,
  },
};

export default portfolioContent;
