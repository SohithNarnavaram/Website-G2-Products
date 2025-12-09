import { motion } from 'framer-motion';
import { Star, CheckCircle, Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Arjun Menon',
    location: 'Kerala',
    rating: 5,
    text: 'Best store for action cameras in India! Got my GoPro Hero 12 with original accessories and amazing support. The team helped me choose the right mounts for my motorcycle.',
    product: 'GoPro Hero 12 Black',
    verified: true,
    hasVideo: true,
  },
  {
    id: 2,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'Ordered the Insta360 X3 and it arrived within 3 days! The product was sealed and genuine. Customer support was incredibly helpful with setup questions.',
    product: 'Insta360 X3',
    verified: true,
    hasVideo: false,
  },
  {
    id: 3,
    name: 'Vikram Singh',
    location: 'Delhi',
    rating: 5,
    text: 'I was skeptical ordering online but G2 Products exceeded my expectations. The DJI gimbal works perfectly and they included free accessories!',
    product: 'DJI RS3 Gimbal',
    verified: true,
    hasVideo: true,
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    location: 'Bangalore',
    rating: 5,
    text: 'The Creator Kit bundle saved me so much money compared to buying separately. Everything I needed to start my vlogging journey in one package.',
    product: 'Creator Starter Kit',
    verified: true,
    hasVideo: false,
  },
  {
    id: 5,
    name: 'Rahul Tiwari',
    location: 'Pune',
    rating: 5,
    text: 'Rode Wireless Go II arrived with all original packaging. Crystal clear audio quality and G2 team even helped me with optimal settings for outdoor recording.',
    product: 'Rode Wireless Go II',
    verified: true,
    hasVideo: false,
  },
  {
    id: 6,
    name: 'Ananya Gupta',
    location: 'Jaipur',
    rating: 5,
    text: 'Third purchase from G2 Products and they never disappoint. The warranty support is genuine and the team truly cares about creators.',
    product: 'DJI Osmo Action 4',
    verified: true,
    hasVideo: true,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-g2-darker">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary/20 text-primary text-xs sm:text-sm font-semibold mb-3 sm:mb-4 border border-primary/30">
            ⭐ Reviews
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-3 sm:mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
            Real reviews from real creators
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card border border-border rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                {testimonial.hasVideo && (
                  <div className="flex items-center gap-1 text-primary text-xs sm:text-sm font-medium">
                    <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                    Video
                  </div>
                )}
              </div>

              {/* Text */}
              <p className="text-sm sm:text-base text-foreground mb-3 sm:mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Product Badge */}
              <div className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 rounded-full bg-secondary text-muted-foreground text-xs font-medium mb-3 sm:mb-4">
                {testimonial.product}
              </div>

              {/* Author */}
              <div className="flex items-center justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h4 className="font-heading font-bold text-sm sm:text-base text-foreground truncate">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary flex-shrink-0" />
                    )}
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm truncate">{testimonial.location}</p>
                </div>
                {testimonial.verified && (
                  <span className="text-[10px] sm:text-xs text-accent font-semibold whitespace-nowrap flex-shrink-0">Verified</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
