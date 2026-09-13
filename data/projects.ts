export interface Project {
  title: string;
  subtitle?: string;
  description: string[];
  stack: string[];
  metric?: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "IKON SKILLS™ AIP Engine",
    subtitle: "Adaptive AI Assessment Platform",
    description: [
      "Orchestrated 14 AI Interaction Points using Claude API for skill assessment, real-time feedback, and personalized learning pathways via an auto-sequencing state machine.",
      "Reduced API calls by 60% via smart caching & fallback strategy.",
    ],
    stack: ["FastAPI", "MongoDB", "Claude API", "LangChain", "Docker", "AWS CI/CD"],
    metric: "60% fewer API calls via smart caching",
    featured: true,
  },
  {
    title: "Automated Client Acquisition & Lead Pipeline",
    description: [
      "Fully automated N8N workflow orchestrating multi-step LinkedIn outreach — generated 491 qualified leads with zero manual intervention.",
      "Trigger-based logic connecting Dripify, Calendly, and Google Sheets via webhooks, with a real-time CRM-style dashboard.",
    ],
    stack: ["N8N", "Dripify", "Calendly", "Google Sheets", "Webhooks"],
    metric: "491 qualified leads, zero manual intervention",
    featured: true,
  },
  {
    title: "ML-Based Sports Outcome Predictor",
    subtitle: "MLB / NFL",
    description: [
      "Streamed real-time sports data (GoalServe API) into ensemble ML models (XGBoost, Random Forest) predicting outcomes and player performance.",
    ],
    stack: ["Python", "XGBoost", "Scikit-learn", "REST API", "AWS CI/CD"],
    featured: false,
  },
  {
    title: "Virtual Car Wrapping & Color Customization System",
    description: [
      "FastAPI serving YOLOv8 vehicle segmentation and OpenCV color manipulation, deployed on AWS EC2.",
    ],
    stack: ["FastAPI", "YOLOv8", "OpenCV", "NumPy", "Pillow", "AWS EC2"],
    featured: false,
  },
  {
    title: "Intelligent Medical Chatbot with Persistent Memory",
    description: [
      "Multi-agent RAG backend (FastAPI + CrewAI) for query routing, document retrieval, and live web search, with FAISS + Redis powering multi-turn memory.",
    ],
    stack: ["FastAPI", "LangChain", "CrewAI", "FAISS", "Redis", "Streamlit", "GPT-4"],
    featured: false,
  },
];
