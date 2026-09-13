export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  highlights: string[];
}

export const experience: ExperienceEntry[] = [
  {
    company: "Softvence Agency",
    role: "AI Developer / AI Engineer",
    period: "Feb 2025 – Present",
    location: "Dhaka, BD",
    current: true,
    highlights: [
      "Led design and deployment of production-ready FastAPI backends powering LLM-integrated services, computer vision pipelines, and OCR systems",
      "Built RAG-based systems with persistent memory using LangChain, FAISS, Redis; orchestrated multi-agent workflows via CrewAI and LangGraph",
      "Designed and deployed N8N-based automation workflows integrating webhook triggers, third-party APIs, and CRM systems",
    ],
  },
  {
    company: "AMIR Lab",
    role: "Research Assistant",
    period: "Jan 2024 – Present",
    location: "Dhaka, BD",
    current: true,
    highlights: [
      "Contributed to 6 peer-reviewed publications spanning GNNs, transformer architectures, VLMs, and explainable AI (IJCAI, IEEE DSAA, IEA/AIE, Q1 journals)",
      "Currently researching post-occlusion material-point reacquisition in 3D point tracking",
      "Leading development of Bangla-Bayanno VQA, a large-scale Bengali visual question answering dataset",
    ],
  },
  {
    company: "Tiva Solution",
    role: "Computer Vision Engineer (Contract)",
    period: "Oct 2024 – Dec 2024",
    location: "Remote",
    current: false,
    highlights: [
      "Delivered production YOLOv8 detection system at 47 FPS; reduced false-positive rate by 22% via post-processing tuning",
      "Implemented image processing pipelines using OpenCV, MediaPipe, Haar Cascade classifiers",
      "Designed FastAPI endpoints serving inference results as REST responses",
    ],
  },
];
