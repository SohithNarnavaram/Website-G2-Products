import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle } from 'lucide-react';
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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    whatsapp: '',
    creatorType: '',
    budgetRange: '',
    message: '',
    requestCallback: false,
  });

  const whatsappNumber = '918431576033';

  const handleProductToggle = (product: string) => {
    setSelectedProducts((prev) =>
      prev.includes(product)
        ? prev.filter((p) => p !== product)
        : [...prev, product]
    );
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const formatWhatsAppMessage = () => {
    const parts: string[] = [];
    
    // Header - simplified without emojis that might cause encoding issues
    parts.push('*New Enquiry from G2 Products Website*');
    parts.push('');
    
    // Personal Information
    parts.push('*Personal Information:*');
    if (formData.name) parts.push(`Name: ${formData.name}`);
    if (formData.email) parts.push(`Email: ${formData.email}`);
    if (formData.mobile) parts.push(`Mobile: ${formData.mobile}`);
    if (formData.whatsapp) parts.push(`WhatsApp: ${formData.whatsapp}`);
    
    // Enquiry Details
    const hasEnquiryDetails = formData.creatorType || formData.budgetRange || selectedProducts.length > 0 || formData.message || formData.requestCallback;
    
    if (hasEnquiryDetails) {
      parts.push('');
      parts.push('*Enquiry Details:*');
      
      if (formData.creatorType) {
        parts.push(`Creator Type: ${formData.creatorType}`);
      }
      
      if (formData.budgetRange) {
        parts.push(`Budget Range: ${formData.budgetRange}`);
      }
      
      if (selectedProducts.length > 0) {
        parts.push('');
        parts.push(`*Interested Products:*`);
        selectedProducts.forEach(product => {
          parts.push(`- ${product}`);
        });
      }
      
      if (formData.message) {
        parts.push('');
        parts.push(`*Message:*`);
        parts.push(formData.message);
      }
      
      if (formData.requestCallback) {
        parts.push('');
        parts.push('*Request Callback: Yes*');
      }
    }
    
    parts.push('');
    parts.push('Thank you!');
    
    return parts.join('\n');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.mobile) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Mobile).",
        variant: "destructive",
      });
      return;
    }

    // Format and encode the WhatsApp message
    let message = formatWhatsAppMessage();
    
    // Ensure message is not empty
    if (!message || message.trim().length === 0) {
      message = 'Hi! I have an enquiry about G2 Products.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    
    // Use wa.me URL format - most reliable for prefilled messages
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Create a temporary anchor element and click it - more reliable than window.open
    // This ensures WhatsApp opens with the prefilled message
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    // Clean up after a short delay
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 100);
    
    setIsSubmitted(true);
    toast({
      title: "Enquiry Submitted!",
      description: "Opening WhatsApp with your enquiry details...",
    });
  };

  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Format and encode the WhatsApp message with form data
    let message = formatWhatsAppMessage();
    
    // Ensure message is not empty
    if (!message || message.trim().length === 0) {
      message = 'Hi! I have an enquiry about G2 Products.';
    }
    
    const encodedMessage = encodeURIComponent(message);
    
    // Use wa.me URL format - most reliable for prefilled messages
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Create a temporary anchor element and click it - more reliable than window.open
    // This ensures WhatsApp opens with the prefilled message
    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    // Clean up after a short delay
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 100);
    
    toast({
      title: "Opening WhatsApp",
      description: "Your enquiry details are ready to send!",
    });
  };

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
              Your enquiry has been formatted and WhatsApp should open automatically. If it didn't open, please check your browser settings. Our gear experts will contact you soon!
            </p>
            <Button variant="hero" onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '',
                email: '',
                mobile: '',
                whatsapp: '',
                creatorType: '',
                budgetRange: '',
                message: '',
                requestCallback: false,
              });
              setSelectedProducts([]);
            }}>
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
                <Input 
                  id="name" 
                  placeholder="Your full name" 
                  required 
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile">Mobile Number *</Label>
                <Input 
                  id="mobile" 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.mobile}
                  onChange={(e) => handleInputChange('mobile', e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="whatsapp">WhatsApp Number</Label>
                <Input 
                  id="whatsapp" 
                  type="tel" 
                  placeholder="+91 98765 43210" 
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange('whatsapp', e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <Label>What type of creator are you?</Label>
                <Select value={formData.creatorType} onValueChange={(value) => handleInputChange('creatorType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your type" />
                  </SelectTrigger>
                  <SelectContent>
                    {creatorTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Budget Range</Label>
                <Select value={formData.budgetRange} onValueChange={(value) => handleInputChange('budgetRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {budgetRanges.map((range) => (
                      <SelectItem key={range} value={range}>
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

            <div className="mb-6">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us more about your requirements, content goals, or any questions..."
                className="mt-2 min-h-[120px]"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
            </div>

            <div className="mb-8">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="requestCallback"
                  checked={formData.requestCallback}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, requestCallback: checked === true }))}
                />
                <label
                  htmlFor="requestCallback"
                  className="text-sm font-medium text-foreground cursor-pointer"
                >
                  Request Callback
                </label>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" variant="hero" size="lg" className="flex-1">
                <MessageCircle className="w-5 h-5 mr-2" />
                Submit via WhatsApp
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                size="lg" 
                className="flex-1"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
