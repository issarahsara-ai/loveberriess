import { motion } from 'framer-motion';
import { Heart, ImagePlus } from 'lucide-react';

const galleryImages = [
  { id: 1, src: null, caption: "Our first moment" },
  { id: 2, src: null, caption: "Adventures together" },
  { id: 3, src: null, caption: "Precious memories" },
  { id: 4, src: null, caption: "Forever yours" },
  { id: 5, src: null, caption: "My favorite person" },
  { id: 6, src: null, caption: "Us" },
];

const SlideGallery = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto w-full"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Heart className="w-5 h-5 text-rose" fill="currentColor" />
            <span className="text-rose uppercase tracking-[0.3em] text-sm">Memories</span>
            <Heart className="w-5 h-5 text-rose" fill="currentColor" />
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Our Gallery
          </h2>
          <p className="text-muted-foreground font-serif italic text-lg">
            Moments frozen in time
          </p>
          <div className="w-24 h-px bg-rose/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square"
            >
              <div className="absolute inset-0 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-rose/30 transition-all duration-500">
                {image.src ? (
                  <img
                    src={image.src}
                    alt={image.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-muted-foreground/50">
                    <ImagePlus className="w-10 h-10 mb-2" />
                    <span className="text-xs text-center px-2">Photo {image.id}</span>
                  </div>
                )}
                
                {/* Overlay with caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <p className="font-serif text-sm text-foreground/90 italic text-center">
                    {image.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground/60 text-sm mt-8 font-serif italic"
        >
          Upload your photos to fill this gallery with your memories
        </motion.p>
      </motion.div>
    </section>
  );
};

export default SlideGallery;
