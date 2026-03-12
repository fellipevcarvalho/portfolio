import { useEffect, useState, useRef } from "react";
import { Github, Linkedin, MessageCircle, FileDown } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const terminalLines = [
  { prompt: "$ whoami", output: "Fellipe Carvalho" },
  { prompt: "$ cat role.txt", output: "DevOps Engineer\nSysAdmin / Systems Administrator\nPlatform Engineer" },
  {
    prompt: "$ cat focus.txt",
    output: "Linux · Docker · Cloud Infrastructure\nCI/CD · Automation · Observability\nSelf-hosted Platforms · Cloudflare · DNS",
  },
  { prompt: "$ uptime", output: "5+ years managing production environments" },
];

type LineState = {
  prompt: string;
  output: string;
  showOutput: boolean;
};

const HeroTerminal = () => {
  const [lines, setLines] = useState<LineState[]>([]);
  const [done, setDone] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const runTerminal = async () => {
      for (let i = 0; i < terminalLines.length; i++) {
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, i === 0 ? 400 : 700));
        if (cancelled) return;

        setLines((prev) => [
          ...prev,
          { prompt: terminalLines[i].prompt, output: terminalLines[i].output, showOutput: false },
        ]);

        await new Promise((r) => setTimeout(r, 350));
        if (cancelled) return;

        setLines((prev) =>
          prev.map((l, idx) =>
            idx === prev.length - 1 ? { ...l, showOutput: true } : l
          )
        );
      }
      if (!cancelled) {
        await new Promise((r) => setTimeout(r, 300));
        setDone(true);
      }
    };
    runTerminal();
    return () => { cancelled = true; };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/10" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top-left glow */}
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center gap-12">

          {/* Terminal block */}
          <motion.div
            className="w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Window chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-card/80 border border-border/60 rounded-t-xl backdrop-blur-sm">
              <span className="w-3 h-3 rounded-full bg-red-500/70" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <span className="w-3 h-3 rounded-full bg-green-500/70" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">
                fellipe@devops ~ bash
              </span>
            </div>

            {/* Terminal body */}
            <div
              ref={terminalRef}
              className="min-h-[220px] bg-card/50 border border-border/60 border-t-0 rounded-b-xl p-5 backdrop-blur-sm text-left font-mono text-sm"
            >
              {lines.map((line, i) => (
                <div key={i} className="mb-3">
                  {/* Prompt */}
                  <div className="flex items-center gap-2">
                    <span className="text-primary">{line.prompt.split(" ")[0]}</span>
                    <span className="text-foreground">
                      {line.prompt.split(" ").slice(1).join(" ")}
                    </span>
                  </div>
                  {/* Output */}
                  {line.showOutput && (
                    <motion.div
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-1 pl-4 text-muted-foreground whitespace-pre-line leading-relaxed"
                    >
                      {line.output}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* Blinking cursor */}
              {!done && (
                <motion.span
                  className="inline-block w-2 h-4 bg-primary align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.9, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>

          {/* Name + title — appears after terminal "finishes" */}
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Fellipe{" "}
                <span className="text-gradient">Carvalho</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                Projeto e opero infraestrutura em produção. Servidores Linux, containers Docker,
                pipelines CI/CD, self-hosted platforms e automação operacional.
              </p>
            </motion.div>
          )}

          {/* CTAs */}
          {done && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-3"
            >
              <Button variant="hero" size="lg" asChild>
                <a href="https://linkedin.com/in/fellipevcarvalho" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://wa.me/5519982753886" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="https://github.com/fellipevcarvalho" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv-fellipe-carvalho.pdf" download>
                  <FileDown className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroTerminal;
