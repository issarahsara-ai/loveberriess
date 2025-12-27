import { motion } from 'framer-motion';
import { Heart, Feather, BookOpen } from 'lucide-react';

const chapters = [
  {
    number: 1,
    content: "I posted looking for friends and she commented, i liked her account, her vibe, despite her name i texted her, told myself two days or maybe less and we'd disappear from each other's lives. right?"
  },
  {
    number: 2,
    content: "She's actually really nice, i like how passionate she is about her show and how she keeps talking about it, that made me feel comfortable enough to talk about One Piece the same way."
  },
  {
    number: 3,
    content: "I tell her about a new show i started watching and she says it's already on her watchlist and suggests we watch it together, watching a show together sounds a bit romantic… but no we barely know each other. It's just a show. I think."
  },
  {
    number: 4,
    content: "Then i find out she likes Ningselle just like i do, she used to roleplay Ningning, and she wants me to roleplay Giselle for her, I'm actually considering it, a little too seriously. Then I notice she listed a relationship with a Giselle roleplayer before, and suddenly i care more than i should, why do I even care? We're not even friends.",
    bonus: "A little secret as a bonus: when i made that giselle acc for the first time, the password was ( imgonnagether ) and when i opened misa's acc it was ( igother )"
  },
  {
    number: 5,
    content: "And then one day, her account is gone, Closed. Disappeared. I started wondering why, i still have her Pinterest, but is it my place to text her? What if she needs space? What if she doesn't want to be found? I tell myself to wait and mind my business. I waited. Then i stopped waiting and text her."
  },
  {
    number: 6,
    content: "She replied, then she gave me her private account, something she said was only for very close friends, am i really that close? I don't know. and it doesn't matter as long as i get to talk to her."
  },
  {
    number: 7,
    content: "I realized i like her, not in a romantic way, i like talking to her, i like spending time with her, i like her presence, i want her around. Shall i tell her? What if she misunderstands? What if I scare her away? I will tell her anyway anyway."
  },
  {
    number: 8,
    content: "Hold on a sec, i remind myself that i said i wouldn't do this again, not this summer, not so soon, but she's honest and direct about what she wants and that's incredibly attractive, the attraction is mutual, i can feel it. And for the first time, i don't want to ignore it, i don't want to run, i want her."
  },
  {
    number: 9,
    content: "I decided to stop holding back, there's no point in pretending i don't feel what i feel, dating doesn't sound so scary anymore. In fact, it sounds right, i want her to be my girlfriend, i just want to say it in a way that feels worthy of her, because something this real deserves more than rushed words."
  },
  {
    number: 10,
    content: "She's mine now, and i still can't believe it, i get to call her my girlfriend, i get to talk about her, post her, let people know she's with me. I love dating her, i love being her girlfriend, i love that the world gets to know her as mine and that I get to be hers."
  },
  {
    number: 11,
    content: "Have you ever felt your heart ache from how much you feel for someone? Like your feelings are too strong you want kneel before them and take your heart out, just to give to them, like you want to offer your mind, your body, and everything you are just to keep them, it feels sick sometimes, like they own your heart and it no longer belongs to you. I know this feeling so well, i recognize it, i feel it, and it has taken over me. I'm in love with her."
  },
];

const SlideChapters = () => {
  return (
    <section className="slide-container relative py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen className="w-5 h-5 text-rose" />
            <span className="text-muted-foreground uppercase tracking-[0.3em] text-sm">
              Our Story
            </span>
            <Feather className="w-5 h-5 text-rose" />
          </div>
          
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-4">
            Chapters of Us
          </h2>
          
          <p className="text-muted-foreground font-body italic">
            How we found each other
          </p>
          
          <div className="decorative-line" />
        </div>

        <div className="space-y-12">
          {chapters.map((chapter, index) => (
            <motion.article
              key={chapter.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative bg-card/50 rounded-lg p-8 border border-border/30 hover:border-rose/30 transition-all duration-500 group"
            >
              <div className="absolute -left-3 top-8 w-6 h-6 rounded-full bg-midnight-light border-2 border-rose flex items-center justify-center">
                <Heart className="w-3 h-3 text-rose" />
              </div>
              
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-4 h-4 text-rose/60" />
                <span className="text-muted-foreground text-sm tracking-wide">
                  Chapter {chapter.number}
                </span>
              </div>
              
              <blockquote className="chapter-content border-l-2 border-rose/30 pl-6">
                "{chapter.content}"
              </blockquote>
              
              {chapter.bonus && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="mt-4 text-rose/80 font-body italic text-sm pl-6 border-l-2 border-rose/20"
                >
                  {chapter.bonus}
                </motion.p>
              )}
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SlideChapters;
