import { Heart, MapPin, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const featureIcons = [Heart, MapPin, Sparkles];

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    { ...t.features.comfort, icon: featureIcons[0] },
    { ...t.features.location, icon: featureIcons[1] },
    { ...t.features.experience, icon: featureIcons[2] },
  ];

  return (
    <section id="features" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.features.title}
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            {t.features.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, points }) => (
            <div key={title} className="bg-card border border-border rounded-xl p-6 md:p-8">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                <Icon size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">{title}</h3>
              <ul className="space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-foreground/70 text-sm font-body">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm font-body mt-10 max-w-lg mx-auto">
          {t.features.trustLine}
        </p>
      </div>
    </section>
  );
};

export default FeaturesSection;
