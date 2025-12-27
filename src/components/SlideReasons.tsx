import { motion } from 'framer-motion';
import { Heart, Feather } from 'lucide-react';

const reasons = [
  "your humor",
  "your face",
  "your honesty",
  "gorgeous",
  "smart",
  "caring",
  "sweet",
  "your ability to make me feel",
  "how you bring out the best in me",
  "your kindness",
  "understanding",
  "your creativity",
  "your jealousy",
  "your affection",
  "your passion",
  "always giving your all",
  "your silly side",
  "your pure soul",
  "your love for cartoons",
  "your energy",
  "how you treat and care about others",
  "you're talented",
  "the way you tease me",
  "you're sweet",
  "you don't make me question if you love me",
  "your company",
  "you're precious",
  "your warmth",
  "how you tell me about everything",
  "our conversations",
  "how we communicate",
  "your taste in music",
  "your personality",
  "how cute you are",
  "you've shown me true love",
  "the mole on your chest",
  "how you show me off",
  "you're respectful",
  "your words",
  "you make me feel wanted",
  "you being clingy to me",
  "the posts you make",
  "when you talk about the shows you watch",
  "you're really attractive",
  "you're adorable",
  "you always pay attention to small details",
  "your vibes",
  "your name",
  "your hair",
  "your cat",
  "your heart",
  "your voice",
  "how you try your best",
  "you always surprise me",
  "your gentleness",
  "your eyes",
  "you always consider my feelings before doing or saying anything",
  "the way you talk",
  "you're special in literally every way",
  "you're my person",
];

const SlideReasons = () => {
  return (
    <section className="slide-container relative py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Feather className="w-5 h-5 text-rose" />
            <span className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
              Things I Love About You
            </span>
            <Feather className="w-5 h-5 text-rose" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            60 Reasons
          </h2>
          
          <p className="text-muted-foreground font-body italic">
            Why my heart chose you
          </p>
          
          <div className="decorative-line" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.02 }}
              viewport={{ once: true, margin: "-50px" }}
              className="reason-item flex items-start gap-4 group"
            >
              <span className="text-rose font-serif text-lg min-w-[2rem] text-right">
                {index + 1}
              </span>
              <Heart className="w-3 h-3 text-rose/40 mt-1.5 flex-shrink-0 group-hover:text-rose transition-colors" />
              <span className="text-foreground/80 font-body group-hover:text-rose transition-colors">
                {reason}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SlideReasons;
