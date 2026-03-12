export type Case = {
  id: string;
  title: string;
  context: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
  gradient: string;
};

export const cases: Case[] = [
  {
    id: "coolify-self-hosted",
    title: "Plataforma Self-Hosted com Coolify",
    context:
      "Projetos de clientes hospedados em shared hosting caro, com deploy manual via FTP, SSL configurado à mão e DNS espalhado em vários provedores sem centralização.",
    problem:
      "Sem controle sobre o ambiente de hospedagem, cada deploy era um processo manual propenso a erro. SSL expirava sem aviso, DNS ficava descentralizado e o custo crescia sem ganho de controle.",
    solution:
      "VPS Linux (Contabo/OCI) com Coolify como plataforma de deploy self-hosted. Nginx como reverse proxy, SSL via Let's Encrypt provisionado automaticamente, Cloudflare como CDN e WAF para DNS centralizado. Deploy via painel ou Git push.",
    stack: ["Coolify", "Docker", "Nginx", "Cloudflare", "Linux", "Contabo VPS", "Oracle Cloud"],
    result:
      "Múltiplos projetos rodando no mesmo servidor. SSL provisionado automaticamente. Custo de hospedagem reduzido em ~60% comparado ao modelo anterior. Deploys via git push sem acesso manual ao servidor.",
    gradient: "from-cyan-500/10 to-blue-500/10",
  },
  {
    id: "observability-discord",
    title: "Monitoramento com Alertas via Discord",
    context:
      "Ambiente de produção sem nenhuma visibilidade: sem métricas históricas, sem alertas automáticos e sem canal único de comunicação de incidentes da equipe.",
    problem:
      "Falhas em produção eram descobertas pelos usuários. Não havia histórico de métricas para análise pós-incidente nem alertas proativos para qualquer serviço do ambiente.",
    solution:
      "Stack com Grafana e Prometheus para métricas de aplicação, Zabbix para monitoramento de host (CPU, memória, disco, rede), alertas integrados ao Discord via webhooks e UptimeRobot para checks externos com notificação imediata.",
    stack: ["Grafana", "Prometheus", "Zabbix", "Discord Webhooks", "Linux", "UptimeRobot"],
    result:
      "Alertas entregues no Discord em menos de 1 minuto após qualquer falha. Incidentes identificados antes dos usuários reportarem. Dashboards em tempo real para análise de performance.",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    id: "chatbot-atendimento-ia",
    title: "Chatbot de Atendimento e Reservas com IA",
    context:
      "Restaurante com atendimento via WhatsApp dependendo inteiramente de equipe humana para responder sobre cardápio, horários e reservas, sem nenhuma automação ou integração com agenda.",
    problem:
      "Atendimento manual consumia tempo da equipe e gerava atrasos nas respostas. Não havia integração com o sistema de reservas e o volume de mensagens fora do horário ficava sem resposta.",
    solution:
      "Chatbot baseado em GPT API com automações orquestradas via n8n. Redis para gerenciamento de sessão e contexto das conversas. Integração com APIs externas para consulta e agendamento de reservas. Deploy via Docker e Coolify em VPS Contabo.",
    stack: ["GPT API", "Redis", "n8n", "Docker", "Coolify", "Contabo VPS", "WhatsApp API"],
    result:
      "Atendimento automatizado 24/7 para consultas de cardápio, horários e reservas. Sistema em produção para cliente real, sem dependência de intervenção humana para fluxos padrão.",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    id: "cicd-jenkins-github",
    title: "Pipeline CI/CD com Jenkins e GitHub Actions",
    context:
      "Times realizando deploys manuais via SSH direto para servidor de produção, sem histórico de versões, sem testes automatizados e sem processo de rollback em caso de falha.",
    problem:
      "Deploy manual e não rastreável. Qualquer erro em produção exigia intervenção manual imediata no servidor. Não havia como saber o que estava rodando em produção ou reverter rapidamente.",
    solution:
      "Pipelines CI/CD com GitHub Actions para projetos open source e Jenkins para ambientes corporativos. Build Docker automático, push para registry, deploy via SSH com health check pós-deploy e rollback automático em falha.",
    stack: ["Jenkins", "GitHub Actions", "Docker", "Bash", "SSH", "Linux"],
    result:
      "Deploy rastreável com histórico completo. Rollback automático em falha no health check. Tempo de deploy de 30 min manual para 3 a 5 min automatizado com zero intervenção.",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
  {
    id: "workspace-migration",
    title: "Migração de Tenant Google para Microsoft 365",
    context:
      "Empresa com cerca de 80 usuários decidiu migrar todo o ambiente de colaboração do Google Workspace para Microsoft 365, com prazo fixo e exigência de continuidade operacional.",
    problem:
      "Migração de tenant de colaboração com 80 usuários sem downtime permitido, histórico de e-mails preservado, domínio sem interrupção de recebimento e usuários precisando operar na segunda-feira seguinte.",
    solution:
      "Migração faseada com DNS cutover planejado fora do horário comercial. E-mails migrados via BitTitan com validação de integridade. Configuração de Exchange Online, Entra ID e GPOs. Treinamento de usuários incluído.",
    stack: ["Microsoft 365", "Entra ID", "Exchange Online", "BitTitan", "PowerShell", "Cloudflare DNS"],
    result:
      "Migração concluída no fim de semana. Zero perda de e-mail. Todos os usuários operacionais na abertura do expediente. DNS propagado antes do início do horário comercial.",
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    id: "wordpress-hardening",
    title: "Hardening e Otimização em WordPress",
    context:
      "Sites WordPress em produção com performance degradada, plugins desatualizados, sem backup automatizado e expostos a ataques de força bruta frequentes que sobrecarregavam o servidor.",
    problem:
      "Sites lentos, vulneráveis e sem proteção de borda. Ataques de força bruta chegavam ao WordPress consumindo recursos do servidor. Nenhum processo de backup confiável e nenhuma camada de proteção antes da aplicação.",
    solution:
      "Hardening completo com remoção de plugins desnecessários, autenticação em dois fatores, Cloudflare WAF bloqueando bots e ataques na borda antes de atingir o servidor, cache via Nginx, backups diários automatizados.",
    stack: ["WordPress", "Nginx", "Cloudflare WAF", "Linux", "Bash", "PHP"],
    result:
      "Ataques de força bruta bloqueados no Cloudflare antes de atingir o servidor. Tempo de carregamento reduzido. Backups automáticos com retenção configurável sem intervenção manual.",
    gradient: "from-rose-500/10 to-red-500/10",
  },
];
