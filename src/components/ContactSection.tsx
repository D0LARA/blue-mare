import { useState, FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

const ContactSection = () => {
  const { toast } = useToast();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: t.contact.toastTitle,
        description: t.contact.toastDescription,
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-2xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.contact.title}
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            {t.contact.description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-body text-foreground/70 mb-1.5">
                {t.contact.nameLabel}
              </label>
              <Input id="name" name="name" placeholder={t.contact.namePlaceholder} required className="bg-card" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-body text-foreground/70 mb-1.5">
                {t.contact.emailLabel}
              </label>
              <Input id="email" name="email" type="email" placeholder={t.contact.emailPlaceholder} required className="bg-card" />
            </div>
          </div>

          <div>
            <label htmlFor="dates" className="block text-sm font-body text-foreground/70 mb-1.5">
              {t.contact.datesLabel}
            </label>
            <Input id="dates" name="dates" placeholder={t.contact.datesPlaceholder} className="bg-card" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-body text-foreground/70 mb-1.5">
              {t.contact.messageLabel}
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder={t.contact.messagePlaceholder}
              rows={5}
              required
              className="bg-card"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {loading ? t.contact.sending : (
              <>
                <Send size={16} />
                {t.contact.send}
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
