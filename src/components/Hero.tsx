import { Github, Linkedin, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />

      {/* Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/20 rounded-full blur-[100px] animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container relative z-10 px-4 py-20">

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center space-y-8">

          {/* Avatar */}
          <motion.div
            className="relative group"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 bg-primary/50 rounded-full blur-xl opacity-50 group-hover:blur-2xl transition-all" />
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border-2 border-primary/50 overflow-hidden bg-secondary flex items-center justify-center animate-float">
              <span className="text-3xl font-mono text-primary">fc</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.div
            className="space-y-2"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              Fellipe Carvalho
            </h1>

            <h2 className="text-lg sm:text-xl md:text-3xl font-semibold text-primary">
              DevOps Engineer | Cloud Infrastructure | SRE | Platform Engineering
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Infraestrutura cloud, automação operacional e deploy de aplicações containerizadas com foco em disponibilidade, segurança e escalabilidade.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* GitHub */}
            <Button variant="hero" size="lg" asChild>
              <a href="https://github.com/fellipevcarvalho" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>

            {/* LinkedIn */}
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://linkedin.com/in/fellipevcarvalho" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>

            {/* WhatsApp — agora idêntico */}
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://wa.me/5519982753886" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>

        {/* SCROLL */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-[60%]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <a href="#about" className="flex flex-col items-center">
            <span className="text-base mb-3">Scroll</span>
            <ChevronDown className="h-8 w-8 animate-bounce text-primary opacity-80" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
