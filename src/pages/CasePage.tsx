import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { cases } from "@/data/cases";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const CasePage = () => {
  const { id } = useParams<{ id: string }>();
  const c = cases.find((item) => item.id === id);

  if (!c) {
    return (
      <>
        <Navbar />
        <main className="container px-4 py-24 max-w-3xl">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Voltar
          </Link>
          <p className="text-muted-foreground">Case não encontrado.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container px-4 py-24 max-w-3xl">
        {/* Back */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Ver todos os cases
        </Link>

        {/* Header */}
        <div className="mb-10 space-y-4 border-b border-border pb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">{c.title}</h1>
          <div className="flex flex-wrap gap-1.5">
            {c.stack.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded border border-border bg-card font-mono text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-10">

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
              Contexto
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.context}</p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
              Problema
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.problem}</p>
          </section>

          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
              Solução
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.solution}</p>
          </section>

          <section className="p-4 rounded-lg border border-primary/20 bg-primary/5">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary/70 mb-3">
              Resultado
            </h2>
            <p className="text-sm text-foreground/80 leading-relaxed font-medium">{c.result}</p>
          </section>

          {/* Stack detail */}
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
              Stack utilizada
            </h2>
            <div className="flex flex-wrap gap-2">
              {c.stack.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded border border-border bg-card font-mono text-foreground/70"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  );
};

export default CasePage;
