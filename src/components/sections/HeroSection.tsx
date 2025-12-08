import { motion } from 'framer-motion';
import { ChevronDown, Shield, Truck, Award, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const trustBadges = [
  { icon: Shield, text: '100% Genuine Products' },
  { icon: Truck, text: 'PAN India Delivery' },
  { icon: Award, text: 'Warranty Support' },
  { icon: Heart, text: 'Loved by Creators' },
];

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/dgi_1_a.jpg"
          alt="MotoVlogger riding at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/79 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/49" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6 border border-primary/30">
              🎬 India's #1 Creator Gear Store
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            Gear Up.{' '}
            <span className="text-primary">Capture Life.</span>
            <br />
            Dominate the Ride.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl"
          >
            India's Most Trusted Store for MotoVlogging & Creator Gear. Premium cameras, gimbals, drones & accessories.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#bestsellers">Shop Best Sellers</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#products">Explore Cameras</a>
            </Button>
            <Button variant="glass" size="lg" asChild>
              <a href="#enquiry">Get Expert Advice</a>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground"
              >
                <badge.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};
