interface NavigationDotsProps {
  currentSlide: number;
  totalSlides: number;
  onNavigate: (index: number) => void;
}

const NavigationDots = ({ currentSlide, totalSlides, onNavigate }: NavigationDotsProps) => {
  return (
    <nav className="nav-indicator hidden md:flex" aria-label="Slide navigation">
      {Array.from({ length: totalSlides }, (_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={`nav-dot ${currentSlide === i ? 'active' : ''}`}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={currentSlide === i ? 'true' : undefined}
        />
      ))}
    </nav>
  );
};

export default NavigationDots;
