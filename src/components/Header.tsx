import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/30"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <a href="/" className="flex items-center gap-2 group">
            <Heart className="w-5 h-5 text-rose group-hover:scale-110 transition-transform" />
            <span className="font-serif text-xl text-foreground">
              Eternal Love
            </span>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
