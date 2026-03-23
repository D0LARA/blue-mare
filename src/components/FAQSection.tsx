import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is parking available?",
    a: "Yes, free parking is available on-site. There's space for one vehicle directly near the building, and additional street parking is available nearby.",
  },
  {
    q: "What is the check-in / check-out process?",
    a: "We offer flexible self check-in via a smart lock. You'll receive a code and detailed instructions before your arrival. Check-in is from 14:00 and check-out is by 11:00.",
  },
  {
    q: "Are pets allowed?",
    a: "Unfortunately, pets are not allowed at this time to maintain the best experience for all guests. Service animals are welcome with prior notice.",
  },
  {
    q: "What is the cancellation policy?",
    a: "We offer flexible cancellation. Cancel up to 48 hours before check-in for a full refund. Cancellations within 48 hours are subject to a one-night charge.",
  },
  {
    q: "How far is the beach?",
    a: "The nearest sandy beach is approximately 3 minutes on foot. You can see the sea from the studio balcony, and there are several beaches within a short walk.",
  },
  {
    q: "How fast is the Wi-Fi?",
    a: "We provide high-speed fibre broadband with typical speeds of 100+ Mbps — more than enough for video calls, streaming, and remote work.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            Everything you need to know before your stay.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
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
