import { Star } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.reviews.title}
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            {t.reviews.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.reviews.items.map((review, i) => (
            <div key={i} className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className={s < review.rating ? "text-secondary fill-secondary" : "text-muted-foreground/30"}
                  />
                ))}
              </div>
              <p className="text-sm text-foreground/70 font-body leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center text-primary text-xs font-semibold font-body">
                  {review.name.charAt(0)}
                </div>
                <span className="text-sm font-body font-medium text-foreground">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
