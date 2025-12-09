import { motion } from 'framer-motion';
import { Camera, Video, Mic, Move3D, Plane, Wrench, Box, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const categories = [
  { icon: Camera, name: 'Action Cameras', description: 'GoPro, DJI, Insta360', count: '45+ Products' },
  { icon: Video, name: '360 Cameras', description: 'Immersive capture', count: '20+ Products' },
  { icon: Video, name: 'Vlogging Cameras', description: 'Sony, Canon, DJI', count: '30+ Products' },
  { icon: Mic, name: 'Microphones', description: 'Rode, DJI, Boya', count: '50+ Products' },
  { icon: Move3D, name: 'Gimbals', description: 'DJI, Zhiyun, Moza', count: '25+ Products' },
  { icon: Plane, name: 'Drones', description: 'DJI Mini, Mavic, Air', count: '15+ Products' },
  { icon: Wrench, name: 'Mounts & Accessories', description: 'Helmet, chest, handlebar', count: '100+ Products' },
  { icon: Box, name: 'Creator Combo Kits', description: 'Complete setups', count: '10+ Bundles' },
];

export const ProductsSection = () => {
  return (
    <section id="products" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-secondary text-muted-foreground text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-border">
            🛒 Shop by Category
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Explore Our Products
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Premium gear for every type of creator
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Link
                to="/store"
                className="group block p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 touch-manipulation"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mb-2">{category.description}</p>
                <span className="text-primary text-xs sm:text-sm font-semibold">{category.count}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="hero" size="lg" className="min-h-[44px] touch-manipulation text-sm sm:text-base" asChild>
            <Link to="/store">View Full Store</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
