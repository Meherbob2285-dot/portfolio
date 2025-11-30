// src/data.js

export const contactInfo = {
  email: "meherbob22@gmail.com",
  phone: "+65 8590 1561",
  linkedin: "https://www.linkedin.com/in/meher-bob"
};

export const skills = [
  {
    category: "Frontend Development",
    icon: "fa-laptop-code",
    color: "#64ffda",
    items: ["React", "HTML/CSS", "JavaScript", "Bootstrap", "Tailwind", "Figma", "ExoPlayer", "Responsive UI", "MVVM"]
  },
  {
    category: "Backend Development",
    icon: "fa-server",
    color: "#8080ff",
    items: ["Python", "Java", "C(Beginner)", "Flask", "Node.js", "Spring Boot", "REST API", "JWT", "OpenAI API", "Session Tokens", "Email Authentication"]
  },
  {
    category: "Database & Cloud",
    icon: "fa-cloud",
    color: "#ff80bf",
    items: ["MongoDB", "Firebase", "NoSQL", "SQL", "RTMP/HLS", "AWS", "Docker", "Containerization", "Cloud Hosting"]
  },
  {
    category: "Tools & Methods",
    icon: "fa-toolbox",
    color: "#ffbf00",
    items: ["Git/GitHub", "Docker Compose", "Agile Workflows", "Feature Branching", "CI/CD", "OOP", "Design Patterns", "API Integration", "Rhino", "Figma", "Canva"]
  }
];

export const experience = [
  {
    id: "accenture",
    role: "Software Engineering Intern",
    company: "Accenture, Singapore",
    period: "Sep 2023 - Present",
    summary: "Contributing to a centralized government portal for agencies like HDB, JTC, and PUB.",
    overview: "Operating within the Phase 3 Integrations team for a large-scale Singapore government digital transformation project. The goal is to build a centralized online portal unifying services for agencies such as HDB, JTC, and PUB.",
    responsibilities: [
      "Designed comprehensive test cases for portal functions, covering standard user flows and edge scenarios to ensure robustness.",
      "Documented critical meeting minutes and change rationales for Application Maintenance Support (AMS) audits.",
      "Created visual process flow diagrams to simplify complex system workflows, bridging the gap between technical and non-technical stakeholders.",
      "Automated onboarding emails for new joiners, reducing manual administrative overhead."
    ],
    impact: "Enhanced the quality assurance process by reducing functionality failure risks and improved team efficiency through process automation and clear documentation."
  },
  {
    id: "tbo",
    role: "Data Analyst Intern",
    company: "TBO.com, Gurugram",
    period: "Jul 2024 - Aug 2024",
    summary: "Optimized user booking flows through behavioral analysis of 50K+ sessions.",
    overview: "Tasked with analyzing user behavior on the travel booking platform to identify friction points and optimize conversion rates.",
    responsibilities: [
      "Conducted in-depth behavioral analysis using Amplitude on over 50,000 user sessions.",
      "Mapped user journeys to identify key drop-off pages in the booking funnel.",
      "Collaborated with the product team to propose data-driven UI/UX improvements."
    ],
    impact: "Contributed actionable insights to the Chief Product Officer (CPO) that led to targeted optimizations in the booking flow. Received direct commendation for high-impact analysis."
  }
];

export const projects = [
  {
    id: "parceleye",
    title: "ParcelEye Mobile App",
    subtitle: "AI-Driven Parcel Tracking & Anti-Theft Solution",
    videoID: "AyHTwdvniBE",
    tech: ["Android Studio", "Flask", "OpenCV", "SAM 2.1", "Firebase", "Nginx"],
    overview: "An Android application designed to reduce parcel theft at collection points. It uses a surveillance camera and AI to track parcels in real-time, sending push notifications if a parcel becomes untraceable.",
    architecture: "The system utilizes a microservices approach involving an Android App (Client), a Spring Boot API (Middleman), and a Python Flask AI Server. Nginx acts as a proxy server and RTMP handler.",
    features: [
      "Real-time object tracking using Meta's Segment Anything Model 2.1 (SAM 2).",
      "HLS live streaming via FFmpeg and Nginx, allowing users to view AI-annotated feeds with low latency.",
      "Push notifications via Firebase Cloud Messaging (FCM) triggered when parcels leave the camera frame.",
      "Secure user authentication using SUTD email verification."
    ],
    infrastructure: "The AI server is hosted on AWS EC2 (Ubuntu), containerized with Docker for consistent deployment. The backend utilizes MongoDB for user data storage.",
    results: "Successfully demonstrated accurate tracking of objects and immediate push notification delivery. Addressed latency challenges inherent in HLS streaming."
  },
  {
    id: "hotel-booking",
    title: "Hotel Booking Platform",
    subtitle: "Full-Stack Microservices Architecture",
    videoID: "Q79fLEAsttA",
    tech: ["React", "Node.js", "Docker", "Microservices", "Stripe", "MongoDB"],
    overview: "A full-stack hotel booking platform developed to handle complex search queries, user authentication, and secure payments.",
    architecture: "Built on a microservices architecture separating the User Service, Booking Service, and Hotel Service. These services communicate via REST APIs and are containerized using Docker.",
    features: [
      "Fuzzy Search implementation to handle typos and partial matches for destinations.",
      "Polling mechanism to handle long-running price retrieval requests from upstream APIs.",
      "Interactive map integration using Leaflet for hotel location visualization.",
      "Secure payment processing integrated with Stripe."
    ],
    infrastructure: "The application uses a distributed system approach with Docker Compose orchestrating the various microservices and MongoDB instances.",
    results: "Achieved a robust system capable of handling concurrent user requests and maintaining data consistency across services through rigorous integration testing."
  },
  {
    id: "urop-research",
    title: "AI Code Detection Research",
    subtitle: "Undergraduate Research Opportunities Programme",
    tech: ["Python", "Machine Learning", "BLEU Score", "Clustering", "Scikit-learn"],
    overview: "Research investigating methods to distinguish between human-written code and code generated by AI tools like ChatGPT and GitHub Copilot.",
    architecture: "The study treats code as text, utilizing Natural Language Processing (NLP) techniques. It employs Hierarchical Agglomerative Clustering to group submissions based on similarity metrics.",
    features: [
      "Implementation of BLEU (bilingual evaluation understudy) distance metric.",
      "Implementation of Fahrenberg distance (global distance) to analyze n-gram frequencies.",
      "Visualization of code clusters using dendrograms to identify plagiarism and AI generation patterns.",
      "Lexical analysis comparing unique token counts between human and AI code."
    ],
    infrastructure: "Python-based data analysis pipeline using libraries such as Scikit-learn for clustering and Matplotlib for visualizing MDS scatter plots.",
    results: "Achieved over 90% accuracy in distinguishing AI-generated code from novice programmer submissions. Found that human code exhibits significantly higher lexical diversity (3x more unique tokens) than AI code."
  }
];