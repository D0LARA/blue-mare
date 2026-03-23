import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.faqSection.title}
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            {t.faqSection.description}
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faqSection.items.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-sm font-body text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-foreground/60 font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
