import { useState, useRef } from "react";
import { Mail, Send, Github, Linkedin, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// ✔️ Suas credenciais EmailJS
const EMAILJS_SERVICE_ID = "service_0hli3kn";
const EMAILJS_TEMPLATE_ID = "template_sabf75f";
const EMAILJS_PUBLIC_KEY = "r7ei5N0kaJLD7c8GY";

// ✔️ Domínios para autocomplete
const EMAIL_DOMAINS = [
  "gmail.com",
  "hotmail.com",
  "outlook.com",
  "yahoo.com",
  "icloud.com",
  "live.com",
  "proton.me",
];

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [emailSuggestions, setEmailSuggestions] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameInput = (value: string) => {
    const formatted = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    setFormData((prev) => ({ ...prev, from_name: formatted }));
  };

  const handleEmailInput = (value: string) => {
    setFormData((prev) => ({ ...prev, from_email: value }));

    if (!value.includes("@")) {
      setEmailSuggestions(EMAIL_DOMAINS.map((d) => `${value}@${d}`));
    } else {
      const [local, domainPart] = value.split("@");
      setEmailSuggestions(
        EMAIL_DOMAINS.filter((d) => d.startsWith(domainPart)).map((d) => `${local}@${d}`)
      );
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.from_name || !formData.from_email || !formData.message) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.from_email)) {
      toast({
        title: "Email inválido",
        description: "Insira um email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formData,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Retornarei em breve!",
        });

        setFormData({ from_name: "", from_email: "", message: "" });
        setEmailSuggestions([]);
      }
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 via-background to-background" />
      <div className="container relative z-10 px-4">
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Interessado em trabalhar juntos? Vamos conversar!
          </p>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT */}
          <ScrollReveal direction="left" delay={0.2}>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Vamos Conversar
                </h3>
                <p className="text-muted-foreground">
                  Sempre aberto a novas oportunidades e novos projetos.
                </p>
              </div>

              {/* Email + Location */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>fellipecarvalho1205@gmail.com</span>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Hortolândia - SP</span>
                </div>
              </div>

              {/* Social buttons (GitHub, LinkedIn, WhatsApp) */}
              <div className="flex gap-4">
                <motion.a
                  href="https://github.com/fellipevcarvalho"
                  target="_blank"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="h-5 w-5" />
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/fellipevcarvalho/"
                  target="_blank"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <Linkedin className="h-5 w-5" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/5519982753886"
                  target="_blank"
                  className="p-3 rounded-lg bg-secondary hover:bg-primary transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <MessageCircle className="h-5 w-5" />
                </motion.a>
              </div>
            </div>
          </ScrollReveal>

          {/* FORM */}
          <ScrollReveal direction="right" delay={0.3}>
            <form onSubmit={handleSubmit} className="space-y-6">

              {/* NAME */}
              <div>
                <label className="block mb-2">Nome</label>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={(e) => handleNameInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
                  placeholder="Seu nome"
                  required
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={(e) => handleEmailInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border"
                  placeholder="seu@email.com"
                  required
                />

                {emailSuggestions.length > 0 && (
                  <div className="absolute w-full bg-secondary border border-border rounded-lg mt-1 shadow-lg z-20">
                    {emailSuggestions.map((s, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          setFormData((prev) => ({ ...prev, from_email: s }));
                          setEmailSuggestions([]);
                        }}
                        className="px-3 py-2 hover:bg-primary/10 cursor-pointer text-sm"
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="block mb-2">Mensagem</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border resize-none"
                  placeholder="Sua mensagem..."
                  required
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar Mensagem
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
