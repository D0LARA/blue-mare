import { Wifi, Wind, UtensilsCrossed, Bath, Waves, Monitor, KeyRound } from "lucide-react";

const amenities = [
  { icon: Wifi, title: "Free Wi-Fi", desc: "High-speed internet for work & streaming" },
  { icon: Wind, title: "Air Conditioning", desc: "Climate control for year-round comfort" },
  { icon: UtensilsCrossed, title: "Kitchenette", desc: "Fully equipped for light meals" },
  { icon: Bath, title: "Private Bathroom", desc: "Modern fixtures, hot water, towels" },
  { icon: Waves, title: "Sea View", desc: "Stunning panoramic Black Sea views" },
  { icon: Monitor, title: "Workspace", desc: "Comfortable desk for remote work" },
  { icon: KeyRound, title: "Self Check-In", desc: "Flexible arrival with smart lock" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About the Studio
          </h2>
          <p className="text-foreground/60 font-body max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Nestled along the picturesque coast of Byala, Blue Mare offers a thoughtfully designed retreat
            where modern amenities meet the timeless beauty of the Black Sea. Every detail has been
            curated to make your stay effortless and memorable.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {amenities.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group bg-card border border-border rounded-xl p-5 text-center hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-3 group-hover:bg-primary/20 transition-colors">
                <Icon size={22} />
              </div>
              <h3 className="font-body text-sm font-medium text-foreground mb-1">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
