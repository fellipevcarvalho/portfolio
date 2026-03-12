import { Github, Linkedin, MessageCircle, FileDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Minimal background — no glow */}
      <div className="absolute inset-0 bg-background" />

      {/* Ultra-subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 px-4 max-w-4xl">
        <motion.div
          className="flex flex-col items-start text-left gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* Terminal prompt badge */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border border-border/50 bg-card/50 font-mono text-xs text-muted-foreground">
            <span className="text-primary/80">fc@infra</span>
            <span className="text-muted-foreground/40">:</span>
            <span className="text-primary/60">~</span>
            <span className="text-muted-foreground/40">$</span>
            <span className="w-1.5 h-3.5 bg-primary/30 inline-block rounded-sm" />
          </span>

          {/* Name */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Fellipe <span className="text-gradient">Carvalho</span>
            </h1>

            {/* Roles */}
            <p className="text-base md:text-lg font-medium text-muted-foreground">
              DevOps Engineer · Platform Engineer · SysAdmin
            </p>
          </div>

          {/* Description + stack line */}
          <div className="space-y-1.5 max-w-xl">
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              DevOps / Platform Engineer focado em infraestrutura cloud,
              deploy de aplicações containerizadas e automação de operações.
            </p>
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Ambientes Linux em produção, CI/CD, observabilidade e arquitetura de aplicações self-hosted.
            </p>
            <p className="text-xs font-mono text-muted-foreground/40 tracking-wide pt-0.5">
              Docker · Linux · GCP · Oracle Cloud · Cloudflare · CI/CD
            </p>
          </div>

          {/* Discrete links — not big CTA buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="https://linkedin.com/in/fellipevcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/fellipevcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
            <a
              href="/cv-fellipe-carvalho.pdf"
              download
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <FileDown className="h-3.5 w-3.5" />
              Download CV
            </a>
            <a
              href="https://wa.me/5519982753886"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
