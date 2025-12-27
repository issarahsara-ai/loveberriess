import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 8,
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="floating-hearts">
      {particles.map((particle) => (
        <Heart
          key={particle.id}
          className="heart-particle text-rose"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
          }}
        />
      ))}
      <div 
        className="glow-effect" 
        style={{ 
          left: '10%', 
          top: '20%',
          opacity: 0.5,
        }} 
      />
      <div 
        className="glow-effect" 
        style={{ 
          right: '5%', 
          bottom: '30%',
          opacity: 0.3,
        }} 
      />
    </div>
  );
};

export default FloatingParticles;
