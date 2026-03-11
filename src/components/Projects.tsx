import { ExternalLink, Github, Cloud, Activity, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "Migração Completa para GCP",
    description: "Projeto de migração de infraestrutura on-premise para Google Cloud Platform, incluindo containerização de aplicações, setup de CI/CD e implementação de IaC com Terraform.",
    tags: ["GCP", "Terraform", "Docker", "CI/CD", "Kubernetes"],
    icon: Cloud,
    githubUrl: "https://github.com/seu-usuario/gcp-migration",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Observabilidade com Zabbix/Grafana",
    description: "Stack completa de monitoramento com Zabbix para coleta de métricas, Grafana para dashboards e integração com Cloud Monitoring para alertas proativos.",
    tags: ["Zabbix", "Grafana", "Prometheus", "Alerting", "SRE"],
    icon: Activity,
    githubUrl: "https://github.com/seu-usuario/observability-stack",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Automação com n8n + Python",
    description: "Workflows automatizados com n8n para integrações entre sistemas, scripts Python para processamento de dados e Shell scripts para tarefas de infraestrutura.",
    tags: ["n8n", "Python", "Bash", "API", "Automation"],
    icon: Workflow,
    githubUrl: "https://github.com/seu-usuario/automation-workflows",
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      
      <div className="container relative z-10 px-4">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Alguns dos projetos técnicos que desenvolvi em cloud, automação e observabilidade
          </p>
        </ScrollReveal>

        {/* Projects grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => (
            <StaggerItem key={project.title}>
              <Card className="group relative overflow-hidden bg-card/50 hover:bg-card border-border hover:border-primary/40 transition-all duration-500 h-full flex flex-col">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10">
                  {/* Project icon */}
                  <div className="mb-4 p-3 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                    <project.icon className="h-7 w-7" />
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 text-xs rounded-full bg-secondary/80 text-secondary-foreground font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="relative z-10 pt-0">
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Código
                      </a>
                    </Button>
                    {project.liveUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Projects;
