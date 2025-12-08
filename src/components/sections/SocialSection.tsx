import { motion } from 'framer-motion';
import { Instagram, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const socialPosts = [
  { id: 1, type: 'instagram', image: 'https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=400' },
  { id: 2, type: 'youtube', image: 'https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?w=400' },
  { id: 3, type: 'instagram', image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400' },
  { id: 4, type: 'youtube', image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=400' },
  { id: 5, type: 'instagram', image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400' },
  { id: 6, type: 'instagram', image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400' },
  { id: 7, type: 'youtube', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400' },
  { id: 8, type: 'instagram', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400' },
];

export const SocialSection = () => {
  return (
    <section id="social" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
            📱 Community
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            From Our Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow us for creator tips, gear reviews & product updates
          </p>
        </motion.div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {socialPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <img
                src={post.image}
                alt="Social post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {post.type === 'instagram' ? (
                  <Instagram className="w-8 h-8 text-foreground" />
                ) : (
                  <Youtube className="w-8 h-8 text-foreground" />
                )}
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="outline" size="lg" asChild>
            <a href="https://www.instagram.com/g2_products?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Instagram className="w-5 h-5" />
              Follow on Instagram
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Youtube className="w-5 h-5" />
              Subscribe on YouTube
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
