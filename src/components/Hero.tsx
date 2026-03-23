import { Waves, Users, Wifi, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  const highlights = [
    { icon: Waves, label: t.hero.highlights.nearSea },
    { icon: Users, label: t.hero.highlights.sleeps2 },
    { icon: Wifi, label: t.hero.highlights.freeWifi },
    { icon: Sun, label: t.hero.highlights.seaViewBalcony },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="Hero">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(220,40%,6%)] via-[hsl(210,35%,14%)] to-[hsl(198,40%,18%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/40" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-72 h-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <p className="text-secondary font-body text-sm md:text-base tracking-widest uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {t.hero.subtitle}
        </p>
        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-150">
          {t.hero.title}
        </h1>
        <p className="text-lg md:text-xl text-foreground/70 font-body font-light max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
          {t.hero.description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-500">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base">
            <a href="#booking">{t.hero.bookNow}</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-foreground/20 text-foreground hover:bg-foreground/5 px-8 text-base">
            <a href="#gallery">{t.hero.viewGallery}</a>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-700">
          {highlights.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-foreground/60">
              <Icon size={18} className="text-primary" />
              <span className="text-sm font-body">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
