import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/30">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Desenvolvido por 
            <span className="text-foreground font-medium ml-1">
              Fellipe Carvalho
            </span>
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/fellipevcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>

            <a
              href="https://linkedin.com/in/fellipevcarvalho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
