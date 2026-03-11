import { 
  Cloud, Server, Terminal, Activity, 
  Boxes, Network, KeyRound, FolderCog, 
  Layers, Rocket, ServerCog, Shield 
} from "lucide-react";

import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/scroll-reveal";


// ------------------------
// SEÇÃO 1: Destaques Originais
// ------------------------
const highlights = [
  {
    icon: Cloud,
    title: "Cloud Native",
    description: "GCP, OCI, arquiteturas serverless e containerizadas"
  },
  {
    icon: Server,
    title: "Infraestrutura",
    description: "Linux, redes, segurança e alta disponibilidade"
  },
  {
    icon: Terminal,
    title: "Automação",
    description: "Python, Bash, n8n, CI/CD pipelines"
  },
  {
    icon: Activity,
    title: "Observabilidade",
    description: "Zabbix, Grafana, Cloud Monitoring, alertas proativos"
  }
];


// ------------------------
// SEÇÃO 2: Especialidades Avançadas (NOVO)
// ------------------------
const advancedSkills = [
  {
    icon: Boxes,
    title: "Containers & DevOps",
    description: "Docker, Kubernetes, GitOps e infra declarativa"
  },
  {
    icon: Layers,
    title: "Virtualização",
    description: "Hyper-V, VMware ESXi, Proxmox e ambientes clusterizados"
  },
  {
    icon: FolderCog,
    title: "Serviços Corporativos",
    description: "Active Directory, File Server, GPOs, DNS e DHCP"
  },
  {
    icon: KeyRound,
    title: "Identity & Access",
    description: "IAM, RBAC, diretórios híbridos, MFA e segurança corporativa"
  },
  {
    icon: Rocket,
    title: "Migrações Workspace",
    description: "Google Workspace → Microsoft 365 com zero downtime"
  },
  {
    icon: Network,
    title: "Redes & Segurança",
    description: "VLAN, VPN, firewall, hardening e arquitetura Zero-Trust"
  },
  {
    icon: ServerCog,
    title: "On-Premise + Cloud",
    description: "Ambientes híbridos, gateways, servidores e gestão completa"
  },
  {
    icon: Shield,
    title: "Governança & Compliance",
    description: "Backups, auditorias, políticas de segurança e disaster recovery"
  }
];


// ------------------------
// COMPONENTE PRINCIPAL
// ------------------------
const About = () => {
  return (
    <>
      {/* ========================================================= */}
      {/*   SEÇÃO ORIGINAL - SOBRE MIM                             */}
      {/* ========================================================= */}

      <section id="about" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-background to-background" />
        
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Section header */}
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Sobre <span className="text-gradient">Mim</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            </ScrollReveal>

            {/* About text */}
            <ScrollReveal className="text-center mb-16 space-y-4" delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou um profissional DevOps/SRE apaixonado por automação e infraestrutura cloud. 
                Com experiência sólida em 
                <span className="text-primary font-medium"> Google Cloud Platform</span> e 
                <span className="text-primary font-medium"> Oracle Cloud Infrastructure</span>, 
                especializo-me em criar ambientes resilientes, escaláveis e observáveis.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Além do universo cloud, atuo em ambientes corporativos completos: virtualização, 
                Active Directory, file servers, clusters, redes avançadas e identidade. 
                Meu foco está em reduzir trabalho manual através de automações inteligentes e garantir 
                <span className="text-primary font-medium"> alta disponibilidade</span> para sistemas críticos.
              </p>
            </ScrollReveal>

            {/* Highlights grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%/0.1)] h-full">
                    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>



      {/* ========================================================= */}
      {/*   SEÇÃO NOVA - ESPECIALIDADES AVANÇADAS                  */}
      {/* ========================================================= */}

      <section id="advanced" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/90" />

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">

            {/* Header */}
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Especialidades <span className="text-gradient">Avançadas</span>
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
            </ScrollReveal>

            {/* Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advancedSkills.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_30px_hsl(185_100%_50%/0.12)] h-full">
                    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

          </div>
        </div>
      </section>
    </>
  );
};

export default About;
