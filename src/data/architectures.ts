export type ArchNode = {
  label: string;
  sublabel?: string;
  highlight?: boolean;
};

export type Architecture = {
  id: string;
  title: string;
  description: string;
  nodes: ArchNode[][];
};

export const architectures: Architecture[] = [
  {
    id: "hosting-stack",
    title: "Hospedagem Self-Hosted com Coolify",
    description:
      "Stack que uso para hospedar múltiplas aplicações em VPS Linux, com SSL automático, WAF no Cloudflare e deploys via painel ou Git push.",
    nodes: [
      [{ label: "Internet" }],
      [{ label: "Cloudflare", sublabel: "DNS · WAF · CDN", highlight: true }],
      [{ label: "VPS Linux", sublabel: "Contabo / OCI" }],
      [{ label: "Coolify", sublabel: "Painel de Deploy", highlight: true }],
      [
        { label: "App A", sublabel: "Docker" },
        { label: "App B", sublabel: "Docker" },
        { label: "App C", sublabel: "Docker" },
      ],
      [{ label: "Monitoring", sublabel: "Grafana · Discord" }],
    ],
  },
  {
    id: "cicd-pipeline",
    title: "Pipeline de CI/CD",
    description:
      "Fluxo de entrega automatizado do push ao deploy, com build de imagem Docker, health check e notificação de status.",
    nodes: [
      [{ label: "Git Push", sublabel: "Developer" }],
      [{ label: "GitHub Actions / Jenkins", sublabel: "CI Pipeline", highlight: true }],
      [
        { label: "Build", sublabel: "Docker Image" },
        { label: "Test", sublabel: "Automated" },
        { label: "Lint", sublabel: "Code Quality" },
      ],
      [{ label: "Registry", sublabel: "Docker Hub / GHCR", highlight: true }],
      [{ label: "Deploy SSH", sublabel: "Remote Server" }],
      [{ label: "Health Check", sublabel: "Notify Discord / Rollback" }],
    ],
  },
];
