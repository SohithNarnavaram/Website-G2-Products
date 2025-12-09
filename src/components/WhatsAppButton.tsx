import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  const whatsappNumber = '918431576033';
  const message = 'Hi! I need help choosing the right gear from G2 Products.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow overflow-hidden touch-manipulation"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src="/whatsapp-logo.png" 
        alt="WhatsApp" 
        className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
      />
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full"
      />
    </motion.a>
  );
};
