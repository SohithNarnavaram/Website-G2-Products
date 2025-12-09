import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowLeft, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';

export const CartDrawer = () => {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatWhatsAppMessage = () => {
    const parts: string[] = [];
    
    parts.push('🛒 *New Order from G2 Products*');
    parts.push('');
    parts.push('━━━━━━━━━━━━━━━━━━━━');
    parts.push('');
    
    // Customer Details
    parts.push('👤 *Customer Details:*');
    if (formData.name) parts.push(`Name: ${formData.name}`);
    if (formData.email) parts.push(`Email: ${formData.email}`);
    if (formData.phone) parts.push(`Phone: ${formData.phone}`);
    if (formData.address) parts.push(`Address: ${formData.address}`);
    if (formData.city) parts.push(`City: ${formData.city}`);
    if (formData.pincode) parts.push(`Pincode: ${formData.pincode}`);
    
    parts.push('');
    parts.push('━━━━━━━━━━━━━━━━━━━━');
    parts.push('');
    
    // Order Details
    parts.push('📦 *Order Details:*');
    items.forEach((item, index) => {
      parts.push(`${index + 1}. ${item.name}`);
      parts.push(`   Quantity: ${item.quantity}`);
      parts.push(`   Price: ₹${item.price.toLocaleString()} x ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString()}`);
      parts.push('');
    });
    
    parts.push('━━━━━━━━━━━━━━━━━━━━');
    parts.push('');
    parts.push(`💰 *Subtotal: ₹${totalPrice.toLocaleString()}*`);
    parts.push('');
    
    if (formData.notes) {
      parts.push('💬 *Additional Notes:*');
      parts.push(formData.notes);
      parts.push('');
    }
    
    parts.push('━━━━━━━━━━━━━━━━━━━━');
    parts.push('');
    parts.push('📞 *You will receive a call shortly to confirm your order.*');
    parts.push('');
    parts.push('Thank you for shopping with G2 Products! 🙏');
    
    return parts.join('\n');
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.address) {
      return;
    }

    // Format and encode the WhatsApp message
    const message = formatWhatsAppMessage();
    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '918431576033';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Create a temporary anchor element and click it - more reliable than window.open
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 100);

    // Close the drawer and reset form
    setIsOpen(false);
    setShowCheckoutForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      pincode: '',
      notes: '',
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-card border-l border-border z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div className="flex items-center gap-3">
                {showCheckoutForm && (
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setShowCheckoutForm(false)}
                    className="mr-2"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </Button>
                )}
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="font-heading font-bold text-lg sm:text-xl text-foreground">
                  {showCheckoutForm ? 'Checkout Details' : 'Your Cart'}
                </h2>
              </div>
              <Button variant="ghost" size="icon" className="touch-manipulation min-h-[44px] min-w-[44px]" onClick={() => {
                setIsOpen(false);
                setShowCheckoutForm(false);
              }}>
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-6">
              {showCheckoutForm ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6">
                    Please fill in your details to complete your order
                  </p>
                  
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-secondary border-border min-h-[44px] text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-secondary border-border min-h-[44px] text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="bg-secondary border-border min-h-[44px] text-sm sm:text-base"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm">Address *</Label>
                    <Textarea
                      id="address"
                      placeholder="Street address, apartment, suite, etc."
                      required
                      value={formData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="bg-secondary border-border min-h-[80px] text-sm sm:text-base"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-sm">City</Label>
                      <Input
                        id="city"
                        placeholder="City"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="bg-secondary border-border min-h-[44px] text-sm sm:text-base"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode" className="text-sm">Pincode</Label>
                      <Input
                        id="pincode"
                        placeholder="Pincode"
                        value={formData.pincode}
                        onChange={(e) => handleInputChange('pincode', e.target.value)}
                        className="bg-secondary border-border min-h-[44px] text-sm sm:text-base"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      placeholder="Any special instructions or requests..."
                      value={formData.notes}
                      onChange={(e) => handleInputChange('notes', e.target.value)}
                      className="bg-secondary border-border min-h-[80px] text-sm sm:text-base"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    className="w-full mt-4 sm:mt-6 min-h-[44px] touch-manipulation text-sm sm:text-base"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Submit via WhatsApp
                  </Button>
                </form>
              ) : items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-16 h-16 text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg mb-2">Your cart is empty</p>
                  <p className="text-muted-foreground text-sm mb-6">
                    Add some amazing gear to get started!
                  </p>
                  <Button variant="hero" onClick={() => setIsOpen(false)}>
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      className="flex gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/50 border border-border"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1 line-clamp-2">{item.name}</h3>
                        <p className="text-primary font-bold text-sm sm:text-base">₹{item.price.toLocaleString()}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 sm:h-9 sm:w-9 touch-manipulation"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold text-xs sm:text-sm text-foreground">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 sm:h-9 sm:w-9 touch-manipulation"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 sm:h-9 sm:w-9 ml-auto text-destructive hover:text-destructive touch-manipulation"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && !showCheckoutForm && (
              <div className="p-4 sm:p-6 border-t border-border space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm sm:text-base">Subtotal</span>
                  <span className="font-heading font-bold text-lg sm:text-xl text-foreground">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
                <Button 
                  variant="hero" 
                  className="w-full min-h-[44px] touch-manipulation text-sm sm:text-base" 
                  size="lg"
                  onClick={() => setShowCheckoutForm(true)}
                >
                  Proceed to Checkout
                </Button>
                <Button
                  variant="ghost"
                  className="w-full text-muted-foreground min-h-[44px] touch-manipulation text-sm sm:text-base"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
