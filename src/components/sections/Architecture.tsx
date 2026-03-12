import { architectures, type ArchNode } from "@/data/architectures";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const ArchNodeBox = ({ node }: { node: ArchNode }) => (
  <div
    className={cn(
      "px-3 py-2 rounded border text-center min-w-[110px] transition-all duration-200",
      node.highlight
        ? "border-primary/40 bg-primary/8 text-primary font-semibold"
        : "border-border bg-card/50 text-foreground/80"
    )}
  >
    <div className="text-xs font-medium font-mono">{node.label}</div>
    {node.sublabel && (
      <div className="text-[10px] text-muted-foreground mt-0.5">{node.sublabel}</div>
    )}
  </div>
);

const Arrow = () => (
  <div className="flex justify-center py-0.5 text-border">
    <ChevronDown className="h-3.5 w-3.5" />
  </div>
);

const ArchDiagram = ({ arch }: { arch: (typeof architectures)[0] }) => (
  <div className="p-5 rounded-lg border border-border bg-card/30 hover:bg-card hover:border-border/80 transition-all duration-200">
    <h3 className="text-sm font-semibold text-foreground mb-1">{arch.title}</h3>
    <p className="text-xs text-muted-foreground mb-5 leading-relaxed">{arch.description}</p>

    <div className="flex flex-col items-center gap-0 font-mono text-sm">
      {arch.nodes.map((level, li) => (
        <div key={li} className="w-full">
          <div className="flex justify-center gap-2 flex-wrap">
            {level.map((node, ni) => (
              <ArchNodeBox key={ni} node={node} />
            ))}
          </div>
          {li < arch.nodes.length - 1 && <Arrow />}
        </div>
      ))}
    </div>
  </div>
);

const Architecture = () => {
  return (
    <section id="architecture" className="py-16 relative border-t border-border/40">
      <div className="container px-4 max-w-5xl">
        <ScrollReveal className="mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-1">
            Arquiteturas de <span className="text-gradient">Sistemas</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2">
            Diagramas das stacks que projeto e opero em produção.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {architectures.map((arch) => (
            <StaggerItem key={arch.id}>
              <ArchDiagram arch={arch} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default Architecture;
