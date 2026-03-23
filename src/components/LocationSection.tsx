import { MapPin, UtensilsCrossed, Waves, Train, TreePalm } from "lucide-react";

const pois = [
  { icon: Waves, label: "Beach", desc: "Sandy shore just 3 minutes on foot" },
  { icon: UtensilsCrossed, label: "Cafés & Restaurants", desc: "Local dining within 5 min walk" },
  { icon: TreePalm, label: "Promenade", desc: "Scenic coastal walk along the cliffs" },
  { icon: Train, label: "Transport", desc: "Bus connections to Varna & Burgas" },
];

const LocationSection = () => {
  return (
    <section id="location" className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Location
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            Byala — a charming seaside town on Bulgaria's northern Black Sea coast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Map embed */}
          <div className="rounded-xl overflow-hidden border border-border aspect-[4/3]">
            <iframe
              title="Blue Mare location on map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=27.888736%2C42.864428%2C27.906736%2C42.874428&layer=mapnik&marker=42.869428%2C27.897736"
              className="w-full h-full"
              loading="lazy"
              style={{ border: 0 }}
            />
          </div>

          {/* POIs */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} className="text-primary" />
              <span className="text-sm font-body text-foreground/70">
                42.869428°N, 27.897736°E — Byala, Bulgaria
              </span>
            </div>
            <div className="space-y-4">
              {pois.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="flex items-start gap-4 bg-card border border-border rounded-xl p-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-body text-sm font-medium text-foreground">{label}</h3>
                    <p className="text-xs text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
