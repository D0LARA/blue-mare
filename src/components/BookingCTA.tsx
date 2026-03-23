import { CalendarDays, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";

const BookingCTA = () => {
  const { t } = useLanguage();

  return (
    <section id="booking" className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {t.booking.title}
            </h2>
            <p className="text-foreground/60 font-body max-w-lg mx-auto mb-8">
              {t.booking.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg px-5 py-3 w-full sm:w-auto">
                <CalendarDays size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground font-body">{t.booking.checkIn}</span>
              </div>
              <div className="flex items-center gap-3 bg-muted/50 border border-border rounded-lg px-5 py-3 w-full sm:w-auto">
                <CalendarDays size={18} className="text-primary" />
                <span className="text-sm text-muted-foreground font-body">{t.booking.checkOut}</span>
              </div>
            </div>

            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 text-base mb-8">
              <a href="#contact">{t.booking.cta}</a>
            </Button>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-muted-foreground font-body">
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="text-accent" />
                {t.booking.minStay}
              </span>
              <span className="flex items-center gap-1.5">
                <Shield size={14} className="text-accent" />
                {t.booking.cancellation}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCTA;
