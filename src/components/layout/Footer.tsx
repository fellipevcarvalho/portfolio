import { Github, Linkedin, MessageCircle } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="py-5 border-t border-border/60">
      <div className="container px-4 max-w-5xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <p className="text-xs text-muted-foreground">
              © {year}{" "}
              <span className="text-foreground/80 font-medium">Fellipe Carvalho</span>
            </p>
            <p className="text-xs text-muted-foreground/60">
              Disponível para oportunidades em DevOps e infraestrutura.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fellipevcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/fellipevcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/5519982753886"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/60 hover:text-primary transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
