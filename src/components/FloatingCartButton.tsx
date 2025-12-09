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
      className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center touch-manipulation"
      aria-label="Open cart"
      type="button"
    >
      <ShoppingCart className="w-5 h-5 sm:w-7 sm:h-7" />
      {totalItems > 0 && (
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-background text-primary text-[10px] sm:text-xs rounded-full flex items-center justify-center font-bold"
        >
          {totalItems}
        </motion.span>
      )}
    </motion.button>
  );
};


