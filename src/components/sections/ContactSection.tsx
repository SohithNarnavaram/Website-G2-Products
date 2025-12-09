import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Star, Globe, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ContactSection = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-primary/30">
            📍 Location
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Visit or Contact Us
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Stop by our store or reach out anytime
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Visit Our Store */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 * 0.1 }}
              className="sm:col-span-2 bg-card border border-border rounded-xl p-4"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1.5 text-sm sm:text-base">Visit Our Store</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed break-words">
                3rd floor, No 11 RS Lane Nagarthpete, Opp. Ram Medical Store, Gollarpet, Kumbarpet, Dodpete, Nagarathpete, Bengaluru, Karnataka 560002, India
              </p>
            </motion.div>

            {/* Store Timing */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1 }}
              className="bg-card border border-border rounded-xl p-4"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1.5 text-sm sm:text-base">Store Timing</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: 11:00 AM - 6:00 PM
              </p>
            </motion.div>

            {/* Connect with Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 * 0.1 + 0.05 }}
              className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-bold text-foreground text-sm sm:text-base">Connect with Us</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-1">Find us online or chat instantly.</p>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="https://www.instagram.com/g2_products?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-secondary hover:bg-primary/20 border border-border transition-colors text-xs sm:text-sm touch-manipulation min-h-[40px]"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href="https://g2products.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-secondary hover:bg-primary/20 border border-border transition-colors text-xs sm:text-sm touch-manipulation min-h-[40px]"
                >
                  <Globe className="w-4 h-4" />
                  <span>Website</span>
                </a>
                <a
                  href="mailto:hello@g2products.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-secondary hover:bg-primary/20 border border-border transition-colors text-xs sm:text-sm touch-manipulation min-h-[40px]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
                <a
                  href="https://wa.me/918431576033"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 px-2 py-2 rounded-lg bg-secondary hover:bg-primary/20 border border-border transition-colors text-xs sm:text-sm touch-manipulation min-h-[40px]"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </motion.div>

            {/* Call Us & Google Reviews Collage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 2 * 0.1 }}
              className="sm:col-span-2 grid grid-cols-2 gap-3"
            >
              {/* Call Us - Split Phone Number */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2 * 0.1 + 0.05 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1.5 text-base">Call Us</h3>
                <a
                  href="tel:+918431576033"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed block"
                >
                  +91 84315 76033
                </a>
              </motion.div>

              {/* Google Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 2 * 0.1 + 0.1 }}
                className="bg-card border border-border rounded-xl p-4"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-2.5">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-1.5 text-base">Google Reviews</h3>
                <a
                  href="https://share.google/CqB7pWNdN8p1uZp9M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm leading-relaxed block"
                >
                  4.9 <span className="text-yellow-500">★</span> • 500+ Google reviews
                </a>
              </motion.div>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="sm:col-span-2"
            >
              <Button variant="hero" size="lg" className="w-full min-h-[44px] touch-manipulation text-sm sm:text-base" asChild>
                <a
                  href={`https://wa.me/918431576033?text=${encodeURIComponent('Hi! I\'d like to know more about G2 Products.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat with Us on WhatsApp
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl sm:rounded-2xl overflow-hidden border border-border h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
          >
            <iframe
              src="https://www.google.com/maps?q=3rd+floor,+No+11+RS+Lane+Nagarthpete+Opp+to+ram+medical+store+Gollarpet,+Kumbarpet,+Dodpete,+Nagarathpete,+Bengaluru,+Karnataka+560002&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="G2 Products Store Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
