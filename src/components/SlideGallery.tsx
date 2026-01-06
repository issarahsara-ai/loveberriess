import { motion } from 'framer-motion';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';
const galleryImages = [
  { id: 1, src: gallery1 },
  { id: 2, src: gallery2 },
  { id: 3, src: gallery3 },
  { id: 4, src: gallery4 },
  { id: 5, src: gallery5 },
  { id: 6, src: gallery6 },
];
const SlideGallery = () => {
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
    }} className="max-w-5xl mx-auto w-full">
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
            
            <span className="text-rose uppercase tracking-[0.3em] text-sm">ECHOES</span>
            
          </motion.div>
          
          <p className="text-muted-foreground font-serif italic text-lg">Have we found each other in every universe?</p>
          <div className="w-24 h-px bg-rose/50 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => <motion.div key={image.id} initial={{
          opacity: 0,
          scale: 0.8
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} viewport={{
          once: true
        }} className="group relative aspect-square">
              <div className="absolute inset-0 bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg overflow-hidden hover:border-rose/30 transition-all duration-500">
                <img src={image.src} alt="Gallery photo" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                
              </div>
            </motion.div>)}
        </div>
      </motion.div>
    </section>;
};
export default SlideGallery;