import { Instagram, Youtube, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <footer className="bg-g2-darker border-t border-border pt-12 sm:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src="/g2.jpg"
                alt="G2 Products"
                className="w-10 h-10 object-cover border border-border/60"
              />
              <span className="font-heading font-bold text-xl text-foreground">
                PRODUCTS
              </span>
            </Link>
            <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
              India's most trusted store for MotoVlogging & Creator Gear. Premium products, genuine quality.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 touch-manipulation"
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-foreground mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-foreground mb-4 sm:mb-6">Policies</h4>
            <ul className="space-y-2 sm:space-y-3">
              {policies.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-300 touch-manipulation"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-sm sm:text-base text-foreground mb-4 sm:mb-6">Contact Us</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed break-words">
                  3rd floor, No 11 RS Lane Nagarthpete, Opp. Ram Medical Store, Gollarpet, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka 560002, India
                </span>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="tel:+918431576033" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation">
                  +91 84315 76033
                </a>
              </li>
              <li className="flex items-center gap-2 sm:gap-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <a href="mailto:hello@g2products.in" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation break-all">
                  hello@g2products.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
            © 2022 G2 Products. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-right">
            Made with ❤️ for Creators
          </p>
        </div>
      </div>
    </footer>
  );
};
