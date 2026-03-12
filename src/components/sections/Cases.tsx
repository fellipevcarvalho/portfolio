import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cases } from "@/data/cases";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const Cases = () => {
  return (
    <section id="projects" className="py-16 relative">
      <div className="container px-4 max-w-5xl">
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            Cases <span className="text-gradient">Técnicos</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Problemas reais resolvidos em produção.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cases.map((c) => (
            <StaggerItem key={c.id}>
              <Link to={`/cases/${c.id}`} className="group block">
                <div className="h-full p-5 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-primary/30 transition-all duration-200">
                  {/* Title */}
                  <h3 className="text-sm font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>

                  {/* Brief — first sentence of problem */}
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                    {c.context}
                  </p>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {c.stack.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 text-xs rounded border border-border bg-secondary/50 font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                    {c.stack.length > 4 && (
                      <span className="px-1.5 py-0.5 text-xs text-muted-foreground/60">
                        +{c.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-1 text-xs text-primary/70 group-hover:text-primary transition-colors">
                    Ver case
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Cases;
