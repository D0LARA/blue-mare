import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const placeholderColors = [
  "from-[hsl(198,40%,25%)] to-[hsl(198,45%,35%)]",
  "from-[hsl(215,30%,18%)] to-[hsl(215,30%,28%)]",
  "from-[hsl(35,30%,25%)] to-[hsl(35,35%,35%)]",
  "from-[hsl(163,25%,22%)] to-[hsl(163,28%,32%)]",
  "from-[hsl(198,35%,20%)] to-[hsl(198,40%,30%)]",
  "from-[hsl(220,30%,15%)] to-[hsl(220,35%,25%)]",
  "from-[hsl(25,40%,25%)] to-[hsl(25,45%,35%)]",
  "from-[hsl(45,30%,25%)] to-[hsl(45,35%,35%)]",
  "from-[hsl(198,30%,22%)] to-[hsl(198,35%,32%)]",
  "from-[hsl(210,25%,18%)] to-[hsl(210,30%,28%)]",
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const { t } = useLanguage();

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + t.gallery.labels.length) % t.gallery.labels.length);
  };

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <p className="text-foreground/60 font-body max-w-xl mx-auto">
            {t.gallery.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {t.gallery.labels.map((label, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`relative aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer bg-gradient-to-br ${placeholderColors[i]} ${
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : ""
              }`}
              aria-label={`View ${label}`}
            >
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 text-xs font-body text-foreground/80 bg-background/40 backdrop-blur-sm px-2 py-1 rounded-md">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            onClick={(e) => { e.stopPropagation(); setLightbox(null); }}
            className="absolute top-4 right-4 text-foreground/70 hover:text-foreground z-10"
            aria-label={t.gallery.closeLightbox}
          >
            <X size={28} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            className="absolute left-4 text-foreground/70 hover:text-foreground"
            aria-label={t.gallery.prevImage}
          >
            <ChevronLeft size={36} />
          </button>

          <div
            className={`w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br ${placeholderColors[lightbox]} mx-4`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center h-full text-foreground/60 font-body">
              <div className="text-center">
                <p className="text-lg font-medium">{t.gallery.labels[lightbox]}</p>
                <p className="text-sm mt-1">{t.gallery.alts[lightbox]}</p>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            className="absolute right-4 text-foreground/70 hover:text-foreground"
            aria-label={t.gallery.nextImage}
          >
            <ChevronRight size={36} />
          </button>

          <div className="absolute bottom-6 text-foreground/50 text-sm font-body">
            {lightbox + 1} / {t.gallery.labels.length}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
