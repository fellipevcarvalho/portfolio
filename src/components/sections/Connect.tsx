import { Linkedin, MessageCircle, Mail, Github } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const links = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    sublabel: "linkedin.com/in/fellipevcarvalho",
    href: "https://linkedin.com/in/fellipevcarvalho",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: "+55 19 98275-3886",
    href: "https://wa.me/5519982753886",
  },
  {
    icon: Mail,
    label: "Email",
    sublabel: "fellipecarvalho1205@gmail.com",
    href: "mailto:fellipecarvalho1205@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    sublabel: "github.com/fellipevcarvalho",
    href: "https://github.com/fellipevcarvalho",
  },
];

const Connect = () => {
  return (
    <section id="contact" className="py-16 relative border-t border-border/40">
      <div className="container px-4 max-w-5xl">
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Disponível para oportunidades em DevOps, Platform Engineering e infraestrutura.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-border/80 transition-all duration-200"
              >
                <div className="p-1.5 rounded-md bg-primary/8 text-primary/80 group-hover:bg-primary/15 transition-colors">
                  <link.icon className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground/90">{link.label}</div>
                  <div className="text-xs text-muted-foreground truncate max-w-[180px]">
                    {link.sublabel}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Connect;
