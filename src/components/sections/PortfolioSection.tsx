import { motion } from 'framer-motion';
import { Play, ExternalLink } from 'lucide-react';

const creators = [
  {
    id: 1,
    name: 'Rider Raj',
    handle: '@riderraj_vlogs',
    gear: 'GoPro Hero 12',
    thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600',
    type: 'Moto Vlogger',
  },
  {
    id: 2,
    name: 'Travel Tales',
    handle: '@traveltales.in',
    gear: 'Insta360 X3',
    thumbnail: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600',
    type: 'Travel Creator',
  },
  {
    id: 3,
    name: 'Drone Diaries',
    handle: '@dronediaries',
    gear: 'DJI Mini 3 Pro',
    thumbnail: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600',
    type: 'Aerial Filmmaker',
  },
  {
    id: 4,
    name: 'Podcast Pro',
    handle: '@podcastpro.in',
    gear: 'Rode Wireless Go II',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=600',
    type: 'Podcaster',
  },
  {
    id: 5,
    name: 'Mountain Rider',
    handle: '@mountainrider',
    gear: 'DJI Osmo Action 4',
    thumbnail: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600',
    type: 'Adventure Creator',
  },
  {
    id: 6,
    name: 'Street Stories',
    handle: '@streetstories',
    gear: 'Creator Kit',
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600',
    type: 'Documentary Maker',
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-4 border border-primary/30">
            🎬 Creator Spotlight
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Creators Powered by G2 Products
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how creators across India are using our gear to tell their stories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {creators.map((creator, index) => (
            <motion.div
              key={creator.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-500"
            >
              {/* Thumbnail */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={creator.thumbnail}
                  alt={creator.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 text-primary-foreground fill-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Gear Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold">
                    {creator.gear}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    {creator.name}
                  </h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>
                <p className="text-primary text-sm font-medium mb-1">{creator.handle}</p>
                <p className="text-muted-foreground text-sm">{creator.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
