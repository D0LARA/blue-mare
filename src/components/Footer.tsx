import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 py-12">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-lg font-semibold text-primary mb-3">Blue Mare</h3>
            <p className="text-sm text-muted-foreground font-body leading-relaxed">
              Sea View Luxury Studio in Byala, Bulgaria. Your serene escape by the Black Sea.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-body font-medium text-foreground mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm font-body">
              {["About", "Gallery", "Features", "Location", "Reviews", "FAQ"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-body font-medium text-foreground mb-3">Contact</h4>
            <ul className="space-y-2 text-sm font-body text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <span>hello@bluemare-byala.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <span>+359 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Byala, Bulgaria</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-body font-medium text-foreground mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/BlueMareByala"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="mailto:hello@bluemare-byala.com"
                className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-body">
          <p>© {new Date().getFullYear()} Blue Mare – Sea View Luxury Studio, Byala. All rights reserved.</p>
          <a
            href="https://www.facebook.com/BlueMareByala"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Find us on Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
