import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
const phrases = [{
  quote: "For the thrill of your touch I will shamefully lust",
  song: "A Love Like War",
  artist: "All Time Low"
}, {
  quote: "I need you to set me free three words and I'm caving in.",
  song: "Ritual",
  artist: "Normandie"
}, {
  quote: "How come you're the only girl that gets me off",
  song: "Hurts Lust",
  artist: "Milune"
}, {
  quote: "You're the closest to Heaven that I'll ever be",
  song: "Iris",
  artist: "Dean Lewis"
}, {
  quote: "I want you because you're bad for me, if you're my habit am I addicted?",
  song: "Bad Habit",
  artist: "Steve Lacy"
}, {
  quote: "Cause every time I see your face I'm pulled right back to you with no way to escape. A prisoner inside my mind",
  song: "Flawed Design",
  artist: "Alesti"
}];
const SlidePhrases = () => {
  return <section className="min-h-screen flex items-center justify-center py-20 px-4">
      <motion.div initial={{
      opacity: 0,
      y: 50
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }} className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} transition={{
          delay: 0.2
        }} viewport={{
          once: true
        }} className="flex items-center justify-center gap-3 mb-4">
            
            <span className="text-rose uppercase tracking-[0.3em] text-sm">Melodies</span>
            
          </motion.div>
          
          <p className="text-muted-foreground font-serif italic text-lg">
            Words that capture what I feel
          </p>
          <div className="w-24 h-px bg-rose/50 mx-auto mt-6" />
        </div>

        <div className="space-y-6">
          {phrases.map((phrase, index) => <motion.article key={index} initial={{
          opacity: 0,
          x: index % 2 === 0 ? -30 : 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-6 md:p-8 hover:border-rose/30 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-rose/10 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-rose" fill="currentColor" />
                </div>
                
                <div className="flex-1">
                  <blockquote className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed mb-4">
                    "{phrase.quote}"
                  </blockquote>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-rose font-medium">{phrase.song}</span>
                    <span className="text-muted-foreground">—</span>
                    <span className="text-muted-foreground">{phrase.artist}</span>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-rose/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none" />
            </motion.article>)}
        </div>
      </motion.div>
    </section>;
};
export default SlidePhrases;