import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from '@/hooks/use-toast';

const creatorTypes = [
  'Moto Vlogger',
  'Travel Creator',
  'Podcaster',
  'YouTube Creator',
  'Instagram Influencer',
  'Filmmaker',
  'Photographer',
  'Other',
];

const budgetRanges = [
  'Under ₹10,000',
  '₹10,000 - ₹25,000',
  '₹25,000 - ₹50,000',
  '₹50,000 - ₹1,00,000',
  'Above ₹1,00,000',
];

const productInterests = [
  'Action Cameras',
  '360 Cameras',
  'Vlogging Cameras',
  'Microphones',
  'Gimbals',
  'Drones',
  'Lighting',
  'Mounts & Accessories',
  'Creator Kits',
];

export const EnquirySection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const handleProductToggle = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  const whatsappUrl = 'https://wa.me/919876543210?text=Hi! I need help choosing the right gear.';

  if (isSubmitted) {
    return (
      <section id="enquiry" className="py-24 bg-g2-darker">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-lg mx-auto text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Your enquiry has been submitted successfully. Our gear experts will contact you within 24 hours.
            </p>
            <Button variant="hero" onClick={() => setIsSubmitted(false)}>
              Submit Another Enquiry
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="enquiry" className="py-24 bg-g2-darker relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
            💬 Get Help
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Need Help Choosing the Right Gear?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get personalized recommendations for your content style, budget & goals
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input id="name" placeholder="Your full name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input id="mobile" type="tel" placeholder="+91 98765 43210" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input id="whatsapp" type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label>What type of creator are you?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your type" />
                  </SelectTrigger>
                  <SelectContent>
                    {creatorTypes.map((type) => (
                      <SelectItem key={type} value={type.toLowerCase().replace(' ', '-')}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range.toLowerCase().replace(/[₹,\s]/g, '-')}>
                        {range}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label className="mb-3 block">What products are you interested in?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {productInterests.map((product) => (
                  <div key={product} className="flex items-center space-x-2">
                    <Checkbox
                      id={product}
                      checked={selectedProducts.includes(product)}
                      onCheckedChange={() => handleProductToggle(product)}
                    />
                    <label
                      htmlFor={product}
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      {product}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your requirements, content goals, or any questions..."
                className="mt-2 min-h-[120px]"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" variant="hero" size="lg" className="flex-1">
                <Send className="w-5 h-5 mr-2" />
                Submit Enquiry
              </Button>
              <Button type="button" variant="outline" size="lg" className="flex-1" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
