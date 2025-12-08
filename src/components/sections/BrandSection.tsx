import { motion } from 'framer-motion';
import { Shield, Award, Truck, Headphones, Quote } from 'lucide-react';

const values = [
  { icon: Shield, title: 'Trust', description: '100% genuine products with warranty' },
  { icon: Award, title: 'Quality', description: 'Only premium brands & gear' },
  { icon: Headphones, title: 'Creator Support', description: 'Expert guidance for your setup' },
  { icon: Truck, title: 'Fast Delivery', description: 'PAN India shipping' },
];

export const BrandSection = () => {
  return (
    <section id="brand" className="py-24 bg-g2-darker relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
            ✨ Our Story
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            The Story of G2 Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built for creators, riders & storytellers
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              We started G2 Products with a simple mission: to empower creators in India with genuine, high-quality gear that helps them capture life's best moments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              From moto-vloggers chasing mountain sunrises to travel creators documenting hidden gems, we provide the tools that turn your vision into reality. Every product we sell is handpicked, tested, and backed by our commitment to excellence.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Founder Message Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-xl" />
            <div className="relative bg-card border border-border rounded-3xl p-8 md:p-10">
              <Quote className="w-12 h-12 text-primary/30 mb-6" />
              <p className="text-xl md:text-2xl text-foreground font-medium leading-relaxed mb-8">
                "Our goal is simple – be the most trusted destination for creator gear in India. Every camera, every mic, every gimbal we sell carries our promise of quality and genuine support."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-2xl font-heading font-bold text-primary">G</span>
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground">Team G2</h4>
                  <p className="text-muted-foreground text-sm">Founder & Creator Community</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
