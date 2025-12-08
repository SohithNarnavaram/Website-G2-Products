import { Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const quickLinks = [
  { name: 'Action Cameras', href: '#products' },
  { name: 'Gimbals', href: '#products' },
  { name: 'Drones', href: '#products' },
  { name: 'Mics', href: '#products' },
  { name: 'Creator Kits', href: '#products' },
];

const policies = [
  { name: 'Shipping Policy', href: '#' },
  { name: 'Return Policy', href: '#' },
  { name: 'Privacy Policy', href: '#' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Warranty', href: '#' },
];

const socials = [
  { icon: Instagram, href: 'https://www.instagram.com/g2_products?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
];

export const Footer = () => {
  return (
    <footer className="bg-g2-darker border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">G2</span>
              </div>
              <span className="font-heading font-bold text-xl text-foreground">PRODUCTS</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              India's most trusted store for MotoVlogging & Creator Gear. Premium products, genuine quality.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Policies</h4>
            <ul className="space-y-3">
              {policies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  3rd floor, No 11 RS Lane Nagarthpete, Opp. Ram Medical Store, Gollarpet, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka 560002, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a href="tel:+918431576033" className="text-muted-foreground hover:text-primary transition-colors">
                  +91 84315 76033
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:hello@g2products.in" className="text-muted-foreground hover:text-primary transition-colors">
                  hello@g2products.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 G2 Products. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ for Creators
          </p>
        </div>
      </div>
    </footer>
  );
};
