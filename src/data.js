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
    color: "#00bfff",
    items: ["React", "HTML/CSS", "JavaScript", "Bootstrap", "Tailwind", "Figma", "ExoPlayer", "Responsive UI", "MVVM","Typescript"]
  },
  {
    category: "Backend Development",
    icon: "fa-server",
    color: "#8080ff",
    items: ["Python", "Java", "C(Beginner)", "Flask", "Node.js", "Spring Boot", "REST API", "JWT", "OpenAI API", "Session Tokens", "Email Authentication", "TorchScript"]
  },
  {
  category: "Database, Cloud & Machine Learning",
  icon: "fa-brain",
  color: "#ff80bf",
  items: ["Kaggle", "MongoDB", "Firebase", "NoSQL", "SQL", "RTMP/HLS", "AWS", "Docker", "Cloud Hosting", "XGBoost", "LightGBM", "PyTorch", "scikit-learn", "pandas", "NumPy", "Tableau", "Amplitude", "NDCG / Ranking Metrics", "ViT / Transformers", "FastAPI"]
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
    id: "covalent",
    role: "Data Analyst Intern",
    company: "Covalent Capital Pte. Ltd., Singapore",
    period: "May 2026 - Aug 2026",
    summary: "Supporting data operations and product analytics in a fintech capital markets environment.",
    overview: "Joining Covalent Capital's team as a Data Analyst Intern to apply data analytics and AI skills in a real-world capital markets environment. Contributing to data operations and product intelligence across the company's Nucleus and OMAS platforms, with exposure to debt capital markets and bond issuance workflows.",
    responsibilities: [
      "Analysis and reporting on bond issuance data using Covalent's Nucleus and OMAS platforms.",
      "Contribution to data operations tasks including data cleaning, structuring, and visualisation.",
      "Support for product analytics and internal reporting workflows.",
      "Potential involvement in AI-related tooling, including work adjacent to the IRIS document analysis product."
    ],
    impact: "Deriving actionable insights from bond issuance data and investor behaviour patterns to support the team's data operations and product intelligence goals.",
    technicalSkills: "Proficiency in Python and SQL for data extraction, cleaning, and analysis. Experience with data visualisation tools such as Tableau and Figma. Familiarity with REST APIs and handling structured datasets. Exposure to React and Node.js for understanding full-stack data pipelines. Working knowledge of analytics platforms (Amplitude) and database systems including MySQL and MongoDB."
  },
  {
    id: "accenture",
    role: "Software Engineering Intern",
    company: "Accenture, Singapore",
    period: "Aug 2025 - Dec 2025",
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
    company: "TBO.com, Gurugram, India",
    period: "Jul 2024 - Aug 2024",
    summary: "Optimized user booking flows through behavioral analysis of 50K+ sessions.",
    overview: "Tasked with analyzing user behavior on the travel booking platform to identify friction points and optimize conversion rates.",
    responsibilities: [
      "Conducted in-depth behavioral analysis using Amplitude on over 50,000 user sessions.",
      "Mapped user journeys to identify key drop-off pages in the booking funnel.",
      "Collaborated with the product team to propose data-driven UI/UX improvements."
    ],
    impact: "Contributed actionable insights to the Chief Product Officer (CPO) that led to targeted optimizations in the booking flow. Received direct commendation for high-impact analysis."
  },
  {
    id: "redlotus",
    role: "Graphic Designer",
    company: "The Red Lotus, Singapore",
    period: "Apr 2021 - Dec 2023",
    summary: "Created visual campaigns promoting sustainable menstrual practices for a non-profit organisation.",
    overview: "Volunteered as a Graphic Designer for The Red Lotus, a non-profit organisation advocating for sustainable menstrual health practices. Developed and executed visual campaigns to raise awareness and drive community engagement.",
    responsibilities: [
      "Created visual campaigns on sustainable menstrual practices, communicating complex topics in an accessible and impactful way.",
      "Developed design strategies that increased audience engagement by 40%.",
      "Collaborated with the team to ensure consistent brand identity across all campaign materials."
    ],
    impact: "Increased engagement by 40% through targeted design strategy, amplifying the organisation's reach and awareness of sustainable menstrual practices."
  },
  {
    id: "bobair",
    role: "Graphic Design Intern",
    company: "Bob Air Travel Services, New Delhi, India",
    period: "Nov 2020 - Dec 2022",
    summary: "Designed digital marketing assets for a travel agency, boosting online engagement significantly.",
    overview: "Interned at Bob Air Travel Services, a travel agency based in New Delhi, creating engaging digital design assets for online marketing campaigns. Developed cohesive visual identities for seasonal travel campaigns to strengthen brand presence across multiple digital platforms.",
    responsibilities: [
      "Created engaging digital designs for online marketing across social media and digital platforms.",
      "Developed design strategies that contributed to a measurable increase in online engagement.",
      "Supported the marketing team with creative assets for various travel packages and promotions."
    ],
    impact: "Increased engagement by 40% through design strategy, directly contributing to improved online marketing performance for the agency."
  }
];

export const projects = [
  {
    id: "matchandgo",
    title: "Match & Go! — Multi-modal Travel Recommender",
    subtitle: "Learning-to-Rank ML System with Full-Stack Integration",
    period: "Jan 2026 – May 2026",
    tech: ["Python", "XGBoost", "LightGBM", "FastAPI", "React", "Vite", "TypeScript", "Tailwind CSS"],
    overview: "A full-stack multimodal travel recommendation system that ranks 500 global destinations against personalised user preferences using a trained learning-to-rank model. Built as part of 50.038 Computational Data Science at SUTD, with my role as Model Lead covering the end-to-end ML pipeline.",
    architecture: "The system combines a two-stage ranking approach: a rule-based V1 scorer generates synthetic training labels, which are used to train a V2 XGBoost LambdaRank model. A FastAPI backend serves real-time recommendations, integrated with a React + Vite frontend. The training pipeline is fully automated across 7 steps, from synthetic user generation to ablation study.",
    features: [
      "Trained an XGBoost LambdaRank model (rank:ndcg objective) on 2,500,000 user-destination pairs across 500 global cities, achieving NDCG@5 of 0.9588 on a held-out test set of 500 unseen users.",
      "Engineered a synthetic dataset of 5,000 user profiles across 7 persona archetypes, sampled from realistic distributions informed by EDA, with a train/val/test split on user_id to prevent data leakage.",
      "Built a FastAPI backend with a POST /recommend endpoint that accepts user preference JSON and returns top-3 ranked destinations with match scores and personalised explanations in real time.",
      "Implemented 3 evaluation metrics from scratch — NDCG@K, MRR, and Precision@K — and ran a 6-condition ablation study retraining the model with each feature zeroed out.",
      "Developed a React + TypeScript + Tailwind CSS frontend with a 6-question questionnaire, animated loading states, and destination cards displaying match scores, highlights, and landmark imagery."
    ],
    infrastructure: "End-to-end training pipeline orchestrated via run_training.py with CLI flags for resuming interrupted runs. Model exported as v2_ranker.pkl. Backend served via Uvicorn. Data sourced from Meteostat API and 3 Kaggle datasets.",
    results: "Achieved NDCG@5 of 0.9588 on 500 unseen test users. MRR of 1.0000 across both V1 and V2, with Precision@3 of 0.3333. Ablation study revealed high feature correlation under synthetic training conditions, with the removal of visual_score uniquely improving NDCG to 1.0000, indicating noise introduced under synthetic data."
  },
  {
    id: "kidshield",
    title: "KidShield — Multi-Modal AI Child Safety System",
    subtitle: "Vision Transformer for Real-Time Harmful Content Detection",
    period: "Jan 2026 – May 2026",
    tech: ["Python", "PyTorch", "ViT-Base/16", "Flask", "JavaScript", "Chrome Extension API", "TorchScript"],
    overview: "An AI-powered child safety system that detects harmful visual content in real time within the browser, built as part of 50.021 Artificial Intelligence at SUTD. My contribution was the visual model component — a fine-tuned Vision Transformer that classifies images into four categories and triggers in-place blurring through a Chrome extension.",
    architecture: "A fine-tuned ViT-Base/16 backbone (pretrained on ImageNet-21k) with encoder blocks 0–7 frozen and blocks 8–11 trainable, plus a custom MLP classification head (768→256→4). The model is exported via TorchScript and served through a Flask REST API. A Chrome Manifest V3 extension scans all images ≥100×100px on page load, POSTing base64-encoded images to the API and applying CSS blur to flagged content.",
    features: [
      "Fine-tuned ViT-Base/16 on ~88,000 video frames across 4 harmful content classes (explicit, safe NSFW, violent, safe RWF), achieving macro F1 of 0.8725 and 0.9461 F1 on explicit content detection.",
      "Applied video-level train/val/test splitting (70/15/15) to prevent data leakage from temporally correlated frames, with inverse-frequency class weighting and WeightedRandomSampler to handle class imbalance.",
      "Trained with AdamW using differential learning rates (backbone: 2×10⁻⁵, head: 1×10⁻⁴), mixed precision (FP16), cosine annealing, and gradient clipping. Best checkpoint at epoch 15 out of 30.",
      "Built a Flask REST API (POST /predict) serving TorchScript model with base64 JPEG input, returning label, confidence, per-class probabilities, and inference latency.",
      "Chrome extension applies CSS blur (filter: blur(18px)) with a KidShield badge when explicit confidence ≥55% or violent confidence ≥45%, using per-class thresholds rather than argmax for more nuanced decisions."
    ],
    infrastructure: "Trained on Kaggle T4 GPU (16GB VRAM) over ~70 minutes. Model exported as kidshield_vit_scripted.pt (344MB). Data sourced from HuggingFace (deepghs/nsfw_detect, 28,000 images) and Kaggle RWF-2000 dataset (1,000 clips, 10,000 frames). Backend fail-open: images display normally if API is unavailable.",
    results: "Achieved 87.52% accuracy and macro F1 of 0.8725 on the validation set. Per-class F1: Explicit 0.9461, Safe NSFW 0.9141, Violent 0.8309, Safe RWF 0.7989. The explicit class F1 of 0.9461 exceeds CNN baselines on the binary NSFW subtask, despite the harder 4-class formulation. Gap vs. binary-only models is attributed to the increased task difficulty and lack of temporal context for single-frame violence detection."
  },
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
    id: "Ascenda — hotel-booking",
    title: "Ascenda - Hotel Booking Platform",
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
  },
];
