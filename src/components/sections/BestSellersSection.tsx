import { motion } from 'framer-motion';
import { ShoppingCart, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

import goproImg from '@/assets/products/gopro.jpg';
import insta360Img from '@/assets/products/insta360.jpg';
import djiActionImg from '@/assets/products/dji-action.jpg';
import gimbalImg from '@/assets/products/gimbal.jpg';
import rodeMicImg from '@/assets/products/rode-mic.jpg';
import creatorKitImg from '@/assets/products/creator-kit.jpg';

const products = [
  {
    id: 'gopro-hero-12',
    name: 'GoPro Hero 12 Black',
    price: 44990,
    image: goproImg,
    badge: 'Bestseller',
  },
  {
    id: 'insta360-x3',
    name: 'Insta360 X3',
    price: 45999,
    image: insta360Img,
    badge: 'Bestseller',
  },
  {
    id: 'dji-osmo-action-4',
    name: 'DJI Osmo Action 4',
    price: 32990,
    image: djiActionImg,
    badge: 'Hot',
  },
  {
    id: 'dji-rs3-gimbal',
    name: 'DJI RS3 Gimbal',
    price: 29990,
    image: gimbalImg,
    badge: 'Popular',
  },
  {
    id: 'rode-wireless-go-ii',
    name: 'Rode Wireless Go II',
    price: 24990,
    image: rodeMicImg,
    badge: 'Bestseller',
  },
  {
    id: 'creator-starter-kit',
    name: 'Creator Starter Kit',
    price: 89990,
    image: creatorKitImg,
    badge: 'Bundle',
  },
];

export const BestSellersSection = () => {
  const { addItem } = useCart();

  return (
    <section id="bestsellers" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-g2-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-primary/30">
            🔥 Top Picks
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            Best Sellers
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            The most loved gear by creators across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              <Link to={`/products/${product.id}`} className="block">
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    <Flame className="w-3 h-3" />
                    {product.badge}
                  </span>
                </div>

                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-secondary">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </Link>

              <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex items-center justify-between gap-2">
                <span className="text-xl sm:text-2xl font-bold text-primary">
                  ₹{product.price.toLocaleString()}
                </span>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => addItem({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                  })}
                  className="group-hover:scale-105 transition-transform min-h-[36px] sm:min-h-[40px] text-xs sm:text-sm touch-manipulation"
                >
                  <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                  Add
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
