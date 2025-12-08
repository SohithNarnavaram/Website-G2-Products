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
    <section id="products" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-muted-foreground text-sm font-semibold mb-4 border border-border">
            🛒 Shop by Category
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Explore Our Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium gear for every type of creator
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
                className="group block p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                <span className="text-primary text-sm font-semibold">{category.count}</span>
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
          <Button variant="hero" size="lg" asChild>
            <Link to="/store">View Full Store</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
