import { MapPin, UtensilsCrossed, Waves, Train, TreePalm } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const poiIcons = [Waves, UtensilsCrossed, TreePalm, Train];

const LocationSection = () => {
  const { t } = useLanguage();

  return (
    <section id="location" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.locationSection.title}
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            {t.locationSection.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
            <iframe
              title="Blue Mare location on map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=27.888736%2C42.864428%2C27.906736%2C42.874428&layer=mapnik&marker=42.869428%2C27.897736"
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm font-body text-foreground/70">
                {t.locationSection.coordinates}
              </span>
            </div>
            <div className="space-y-4">
              {t.locationSection.pois.map((poi, i) => {
                const Icon = poiIcons[i];
                return (
                  <div key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body text-sm font-medium text-foreground">{poi.label}</h3>
                      <p className="text-xs text-muted-foreground">{poi.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
