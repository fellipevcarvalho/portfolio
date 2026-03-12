export type StackItem = {
  name: string;
};

export type StackCategory = {
  title: string;
  icon: string;
  items: StackItem[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Cloud & VPS",
    icon: "Cloud",
    items: [
      { name: "Google Cloud (GCP)" },
      { name: "Oracle Cloud (OCI)" },
      { name: "Contabo VPS" },
      { name: "Cloudflare" },
      { name: "DNS / SSL" },
    ],
  },
  {
    title: "Infra & Servidores",
    icon: "Server",
    items: [
      { name: "Linux (Ubuntu / Debian)" },
      { name: "Docker" },
      { name: "Coolify" },
      { name: "Nginx / Caddy" },
    ],
  },
  {
    title: "CI/CD & Automação",
    icon: "GitBranch",
    items: [
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Git" },
      { name: "Bash / Shell" },
      { name: "Python" },
      { name: "n8n" },
    ],
  },
  {
    title: "Observabilidade",
    icon: "Activity",
    items: [
      { name: "Grafana" },
      { name: "Prometheus" },
      { name: "Zabbix" },
      { name: "UptimeRobot" },
      { name: "Discord Webhooks" },
    ],
  },
  {
    title: "Sistemas Corporativos",
    icon: "Building2",
    items: [
      { name: "Microsoft 365" },
      { name: "Google Workspace" },
      { name: "Entra ID / Azure AD" },
      { name: "Active Directory" },
      { name: "DNS / DHCP / GPO" },
    ],
  },
  {
    title: "Web & Integrações",
    icon: "Globe",
    items: [
      { name: "WordPress" },
      { name: "REST APIs" },
      { name: "Webhooks" },
      { name: "GPT API" },
      { name: "Redis" },
    ],
  },
];
