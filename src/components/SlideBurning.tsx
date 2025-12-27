import { motion } from 'framer-motion';
import { Heart, Flame } from 'lucide-react';

const SlideBurning = () => {
  return (
    <section className="slide-container relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <Flame className="w-8 h-8 text-rose mx-auto mb-8 animate-pulse-soft" />
        
        <blockquote className="font-serif italic text-xl md:text-2xl lg:text-3xl text-foreground/85 leading-relaxed mb-10">
          "I felt it when Simon said: 'I cannot stop thinking of you, from the mornings you ease, to the evenings you quiet, to the dreams you inhabit, my thoughts of you never end. I am yours, I have always been yours.'"
        </blockquote>
        
        <div className="decorative-line" />
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="font-body text-lg md:text-xl text-muted-foreground mt-8 mb-6"
        >
          And I must admit, burning for someone who feels the same is invaluable, and I wouldn't trade that for anything.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <Heart className="w-5 h-5 text-rose animate-pulse-soft" />
          <span className="font-serif text-2xl md:text-3xl text-rose">
            I burn for you, Maream
          </span>
          <Heart className="w-5 h-5 text-rose animate-pulse-soft" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default SlideBurning;
