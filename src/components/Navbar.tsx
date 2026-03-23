import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.gallery, href: "#gallery" },
    { label: t.nav.features, href: "#features" },
    { label: t.nav.location, href: "#location" },
    { label: t.nav.reviews, href: "#reviews" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <a href="#" className="font-display text-xl md:text-2xl font-semibold text-primary">
          Blue Mare
        </a>

        <ul className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-body text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button asChild size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <a href="#booking">{t.nav.bookNow}</a>
          </Button>
        </div>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-in slide-in-from-top-2">
          <ul className="flex flex-col items-center gap-4 py-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-body text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <LanguageSwitcher mobile />
            </li>
            <li>
              <Button asChild size="sm" className="bg-primary text-primary-foreground">
                <a href="#booking" onClick={() => setIsOpen(false)}>{t.nav.bookNow}</a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
