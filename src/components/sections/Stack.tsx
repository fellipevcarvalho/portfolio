import {
  Server,
  Cloud,
  GitBranch,
  Activity,
  Building2,
  Globe,
} from "lucide-react";
import { stackCategories } from "@/data/stack";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const iconMap = {
  Server,
  Cloud,
  GitBranch,
  Activity,
  Building2,
  Globe,
} as const;

type IconKey = keyof typeof iconMap;

const Stack = () => {
  return (
    <section id="skills" className="py-16 relative border-t border-border/40">
      <div className="container px-4 max-w-5xl">
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Tecnologias que uso no dia a dia para projetar e operar ambientes de produção.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {stackCategories.map((category) => {
            const Icon = iconMap[category.icon as IconKey];
            return (
              <StaggerItem key={category.title}>
                <div className="group p-4 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-border/80 transition-all duration-200 h-full">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 rounded-md bg-primary/8 text-primary/80">
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                    </div>
                    <h3 className="text-xs font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-1">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full shrink-0 bg-muted-foreground/40" />
                        <span className="text-xs text-foreground/75">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Stack;
