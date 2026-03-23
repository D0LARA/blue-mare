import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { localeFlagLabels, type Locale } from "@/i18n";

const locales: Locale[] = ["en", "bg", "ru", "de"];

const LanguageSwitcher = ({ mobile = false }: { mobile?: boolean }) => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        {locales.map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className={`px-3 py-1.5 rounded-lg text-sm font-body transition-colors ${
              l === locale
                ? "bg-primary text-primary-foreground"
                : "text-foreground/60 hover:text-foreground hover:bg-muted/50"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 text-sm font-body text-foreground/70 hover:text-primary transition-colors px-2 py-1 rounded-lg hover:bg-muted/30"
        aria-label="Change language"
      >
        <Globe size={16} />
        <span>{locale.toUpperCase()}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-card border border-border rounded-xl shadow-lg py-1 min-w-[140px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => { setLocale(l); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm font-body transition-colors ${
                l === locale
                  ? "text-primary bg-primary/10"
                  : "text-foreground/70 hover:text-foreground hover:bg-muted/30"
              }`}
            >
              {localeFlagLabels[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
