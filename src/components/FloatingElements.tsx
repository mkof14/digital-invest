import { useEffect, useState } from 'react';

const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate parallax offset for different layers
  const getParallaxStyle = (depth: number) => {
    return {
      transform: `translate(${mousePosition.x * depth}px, ${mousePosition.y * depth}px)`,
      transition: 'transform 0.3s ease-out',
    };
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes with parallax */}
      <div 
        className="floating-element absolute top-1/4 left-[10%] w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-float-slow" 
        style={getParallaxStyle(15)}
      />
      <div 
        className="floating-element absolute top-1/3 right-[15%] w-12 h-12 border-2 border-accent/20 rounded-full animate-float-medium"
        style={getParallaxStyle(20)}
      />
      <div 
        className="floating-element absolute bottom-1/4 left-[20%] w-20 h-20 border-2 border-primary-light/15 rounded-lg animate-float-fast"
        style={getParallaxStyle(10)}
      />
      <div 
        className="floating-element absolute top-1/2 right-[25%] w-14 h-14 border-2 border-primary/15 rounded-full animate-float-slow" 
        style={{ ...getParallaxStyle(25), animationDelay: '1s' }}
      />
      <div 
        className="floating-element absolute bottom-1/3 right-[10%] w-10 h-10 border-2 border-accent/20 rounded-lg rotate-12 animate-float-medium" 
        style={{ ...getParallaxStyle(18), animationDelay: '0.5s' }}
      />
      <div 
        className="floating-element absolute top-[15%] left-[30%] w-8 h-8 border-2 border-primary-glow/20 rounded-full animate-float-fast" 
        style={{ ...getParallaxStyle(22), animationDelay: '1.5s' }}
      />
      
      {/* Glowing particles with parallax */}
      <div 
        className="particle absolute top-[20%] left-[15%] w-2 h-2 bg-primary/40 rounded-full animate-pulse-glow"
        style={getParallaxStyle(30)}
      />
      <div 
        className="particle absolute top-[60%] right-[20%] w-3 h-3 bg-accent/40 rounded-full animate-pulse-glow" 
        style={{ ...getParallaxStyle(35), animationDelay: '0.7s' }}
      />
      <div 
        className="particle absolute bottom-[25%] left-[35%] w-2 h-2 bg-primary-light/40 rounded-full animate-pulse-glow" 
        style={{ ...getParallaxStyle(28), animationDelay: '1.2s' }}
      />
      <div 
        className="particle absolute top-[40%] right-[35%] w-2 h-2 bg-primary/30 rounded-full animate-pulse-glow" 
        style={{ ...getParallaxStyle(32), animationDelay: '0.3s' }}
      />
      <div 
        className="particle absolute bottom-[40%] left-[50%] w-2 h-2 bg-accent/30 rounded-full animate-pulse-glow" 
        style={{ ...getParallaxStyle(27), animationDelay: '1.8s' }}
      />
      
      {/* Larger background shapes with blur and subtle parallax */}
      <div 
        className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow"
        style={getParallaxStyle(5)}
      />
      <div 
        className="absolute bottom-[15%] left-[5%] w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-medium" 
        style={{ ...getParallaxStyle(8), animationDelay: '2s' }}
      />
    </div>
  );
};

export default FloatingElements;