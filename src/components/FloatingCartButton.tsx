import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export const FloatingCartButton = () => {
  const { setIsOpen, totalItems } = useCart();

  return (
    <motion.button
      onClick={() => setIsOpen(true)}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-[88px] right-6 z-40 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
      aria-label="Open cart"
      type="button"
    >
      <ShoppingCart className="w-7 h-7" />
      {totalItems > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-background text-primary text-xs rounded-full flex items-center justify-center font-bold"
        >
          {totalItems}
        </motion.span>
      )}
    </motion.button>
  );
};


