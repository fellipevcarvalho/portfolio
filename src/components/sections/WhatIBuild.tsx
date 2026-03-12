import {
  Cloud,
  Server,
  Zap,
  Activity,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const pillars = [
  {
    icon: Cloud,
    title: "Infraestrutura Cloud",
    description:
      "Provisionamento em GCP, Oracle Cloud e VPS Contabo. Redes, storage, IAM e gestão de DNS no Cloudflare, Umbler e outros provedores.",
  },
  {
    icon: Server,
    title: "Servidores e Containers",
    description:
      "Administração de Linux em produção. Deploy com Docker e Coolify. Reverse proxy, SSL automático e múltiplos ambientes no mesmo host.",
  },
  {
    icon: Zap,
    title: "Automação Operacional",
    description:
      "Automação com n8n, Python e Bash. Integração com APIs, Google Agenda e GPT. Eliminação de tarefas manuais recorrentes.",
  },
  {
    icon: Activity,
    title: "Observabilidade",
    description:
      "Grafana, Prometheus e Zabbix para métricas. Alertas no Discord via webhooks. Checks externos com UptimeRobot.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Hardening",
    description:
      "Hardening de Linux, WAF no Cloudflare, bloqueio de bots. Segurança em WordPress, IAM/RBAC e conformidade corporativa.",
  },
  {
    icon: Wrench,
    title: "Administração de Sistemas",
    description:
      "Gestão de tenants Microsoft 365 e Google Workspace. Migração entre plataformas, Active Directory, Entra ID e Exchange.",
  },
];

const WhatIBuild = () => {
  return (
    <section id="about" className="py-16 relative border-t border-border/40">
      <div className="container px-4 max-w-5xl">
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            O que eu <span className="text-gradient">faço</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Infraestrutura, automação e administração de sistemas em produção.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pillars.map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="group flex gap-3 p-4 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-border/80 transition-all duration-200 h-full">
                <div className="shrink-0 mt-0.5 p-2 rounded-md bg-primary/8 text-primary/80 h-fit group-hover:bg-primary/15 transition-colors">
                  <pillar.icon className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{pillar.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default WhatIBuild;
