export type PublicationStatus = "published" | "under-review" | "in-prep";

export interface Publication {
  title: string;
  venue?: string;
  tag?: string;
  contribution?: string;
  status: PublicationStatus;
  url?: string;
}

export const publications: Publication[] = [
  {
    title:
      "Vision Transformers for End-to-End Quark-Gluon Jet Classification from Calorimeter Images",
    venue: "IJCAI 2025",
    tag: "A*",
    status: "published",
    url: "https://link.springer.com/chapter/10.1007/978-981-95-0988-1_10",
  },
  {
    title: "DyCAF-Net: Dynamic Class-Aware Fusion Network",
    venue: "IEEE DSAA 2025",
    tag: "Core-A",
    contribution: "SOTA precision/mAP@50-95 across 13 benchmarks at ~11.1M params",
    status: "published",
    url: "https://ieeexplore.ieee.org/abstract/document/11247981",
  },
  {
    title:
      "Physics-Informed Graph Neural Networks for Transverse Momentum Estimation in CMS Trigger Systems",
    venue: "Computer Physics Communications, Elsevier · 2026",
    tag: "Q1",
    contribution: "SOTA MAE of 0.8525 with ≥55% fewer params than baselines",
    status: "published",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S0010465526001499",
  },
  {
    title: "Enhancing Road Traffic Flow in Sustainable Cities through Transformer Models",
    venue: "Sustainable Cities and Society, Elsevier · 2023",
    tag: "Q1",
    status: "published",
    url: "https://www.sciencedirect.com/science/article/abs/pii/S2210670724007066",
  },
  {
    title:
      "CAGN-GAT Fusion: A Hybrid Contrastive Attentive Graph Neural Network for Network Intrusion Detection",
    venue: "IEA/AIE 2025",
    tag: "Core-B",
    status: "published",
    url: "https://link.springer.com/chapter/10.1007/978-981-96-8892-0_35",
  },
  {
    title:
      "DGNN-YOLO: Dynamic Graph Neural Networks with YOLO11 for Small Object Detection and Tracking in Traffic Surveillance",
    status: "under-review",
    url: "https://arxiv.org/html/2411.17251v2",
  },
  {
    title:
      "Soybean Disease Detection via Interpretable Hybrid CNN-GNN: Integrating MobileNetV2 and GraphSAGE with Cross-Modal Attention",
    status: "under-review",
    url: "https://arxiv.org/abs/2503.01284",
  },
  {
    title: "BGP-Net: Boundary-Guided Polyp Segmentation with Soft Boundary Supervision",
    venue: "ICCA 2026",
    status: "under-review",
  },
  {
    title:
      "SOE-YOLO: Small-Object Enhanced YOLO for UAV Object Detection Using High-Resolution Feature Fusion",
    status: "in-prep",
  },
  {
    title: "Post-Occlusion Material-Point Reacquisition in Monocular 3D Tracking",
    status: "in-prep",
  },
];

export const publicationTabs: { key: PublicationStatus; label: string }[] = [
  { key: "published", label: "Published" },
  { key: "under-review", label: "Under Review" },
  { key: "in-prep", label: "In Preparation" },
];
