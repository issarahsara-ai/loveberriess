import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import FloatingParticles from '@/components/FloatingParticles';
import NavigationDots from '@/components/NavigationDots';
import SlideQuote from '@/components/SlideQuote';
import SlideReasons from '@/components/SlideReasons';
import SlideChapters from '@/components/SlideChapters';
import SlidePhrases from '@/components/SlidePhrases';
import SlideBurning from '@/components/SlideBurning';
import ScrollIndicator from '@/components/ScrollIndicator';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 6;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const slideIndex = Math.round(scrollPosition / windowHeight);
      setCurrentSlide(Math.min(slideIndex, totalSlides - 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSlide = (index: number) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <main className="relative">
      <Header />
      <FloatingParticles />
      <NavigationDots 
        currentSlide={currentSlide} 
        totalSlides={totalSlides} 
        onNavigate={navigateToSlide} 
      />

      {/* Slide 1: Opening Quote */}
      <section className="relative min-h-screen">
        <SlideQuote 
          quote="I catalog every nuance of you, like a collector of rare and delicate things."
        />
        <ScrollIndicator />
      </section>

      {/* Slide 2: 60 Reasons */}
      <SlideReasons />

      {/* Slide 3: Chapters */}
      <SlideChapters />

      {/* Slide 4: Phrases */}
      <SlidePhrases />

      {/* Slide 5: Burning */}
      <SlideBurning />

      {/* Slide 5: Closing Quote */}
      <SlideQuote 
        quote="I do not seek you casually. I seek you entirely, piece by piece, until nothing is left unseen."
      />
    </main>
  );
};

export default Index;
