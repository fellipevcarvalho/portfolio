import { 
  Cloud, Container, Code, Activity, Monitor, Server, 
  ShieldCheck, Network, Database 
} from "lucide-react";

import { 
  ScrollReveal, 
  StaggerContainer, 
  StaggerItem 
} from "@/components/ui/scroll-reveal";


type SkillCategory = {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  // -------------------------------------
  // CLOUD & EDGE
  // -------------------------------------
  {
    title: "Cloud & Edge",
    icon: Cloud,
    skills: [
      "Google Cloud Platform",
      "Oracle Cloud",
      "AWS",
      "Contabo",
      "Cloudflare",
      "DNS",
      "SSL",
      "Hospedagem",
      "Domínios",
      "Cloud Functions"
    ]
  },

  // -------------------------------------
  // DEVOPS & CONTAINERS
  // -------------------------------------
  {
    title: "DevOps & Containers",
    icon: Container,
    skills: [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitLab CI",
      "GitHub Actions",
      "ArgoCD",
      "Payara",
      "Glassfish",
      "TSPlus"
    ]
  },

  // -------------------------------------
  // CODING & AUTOMAÇÃO
  // -------------------------------------
  {
    title: "Coding & Automação",
    icon: Code,
    skills: [
      "Python",
      "Bash",
      "Shell Script",
      "YAML",
      "JSON"
    ]
  },

  // -------------------------------------
  // OBSERVABILITY
  // -------------------------------------
  {
    title: "Observability",
    icon: Activity,
    skills: [
      "Zabbix",
      "Grafana",
      "Prometheus",
      "Cloud Monitoring",
      "Datadog",
      "ELK Stack"
    ]
  },

  // -------------------------------------
  // INFRA & SISTEMAS CORPORATIVOS
  // -------------------------------------
  {
    title: "Infra & Sistemas",
    icon: Server,
    skills: [
      "Linux",
      "Ubuntu",
      "CentOS",
      "Homelab",
      "Nginx",
      "Apache",
      "HAProxy",
      "Servidores",
      "ERPs",
      "Integrações"
    ]
  },

  // -------------------------------------
  // FERRAMENTAS & INTEGRAÇÕES
  // -------------------------------------
  {
    title: "Tools & Integrações",
    icon: Monitor,
    skills: [
      "n8n",
      "Ansible",
      "Git",
      "VS Code",
      "Jira",
      "Confluence",
      "APIs",
      "Webhooks",
      "Automação Empresarial"
    ]
  }
];


const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4">

        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Skills</span> & Tecnologias
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Ferramentas e tecnologias que utilizo no dia a dia para entregar soluções robustas
          </p>
        </ScrollReveal>

        {/* Skills grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <StaggerItem key={category.title}>
              <div className="group p-6 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300 h-full">
                
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <category.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};

export default Skills;
