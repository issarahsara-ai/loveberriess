import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface SlideQuoteProps {
  quote: string;
  author?: string;
}

const SlideQuote = ({ quote, author }: SlideQuoteProps) => {
  return (
    <section className="slide-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <Heart className="w-6 h-6 text-rose mx-auto mb-8 animate-pulse-soft" />
        
        <blockquote className="quote-text text-foreground/90 mb-8">
          "{quote}"
        </blockquote>
        
        <div className="decorative-line" />
        
        {author && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-rose font-serif text-lg mt-6"
          >
            — {author}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
};

export default SlideQuote;
