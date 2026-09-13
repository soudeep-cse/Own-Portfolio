export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "AI / GenAI",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "OpenAI GPT-4",
      "LLaMA",
      "Transformers",
      "spaCy",
      "PEFT/LoRA",
    ],
  },
  {
    category: "RAG & Vector",
    items: ["FAISS", "Redis", "Pinecone", "text-embedding-3-large"],
  },
  {
    category: "Backend / API",
    items: ["FastAPI", "REST API Design", "Pydantic", "Uvicorn"],
  },
  {
    category: "ML / CV",
    items: [
      "YOLOv8",
      "OpenCV",
      "MediaPipe",
      "TensorFlow",
      "PyTorch / PyTorch Geometric",
      "Scikit-learn",
      "Keras",
      "GraphSAGE/GAT/GCN",
      "Vision Transformers",
    ],
  },
  {
    category: "Automation",
    items: ["N8N", "Zapier", "Make", "Webhook-based trigger design"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS EC2", "Docker", "Nginx", "GitHub Actions CI/CD"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite"],
  },
  {
    category: "External APIs",
    items: ["OpenAI", "ElevenLabs", "HeyGen", "Google Vertex AI", "Hugging Face", "Ollama"],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "R", "C++"],
  },
];
