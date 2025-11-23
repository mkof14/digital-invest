const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="floating-element absolute top-1/4 left-[10%] w-16 h-16 border-2 border-primary/20 rounded-lg rotate-45 animate-float-slow" />
      <div className="floating-element absolute top-1/3 right-[15%] w-12 h-12 border-2 border-accent/20 rounded-full animate-float-medium" />
      <div className="floating-element absolute bottom-1/4 left-[20%] w-20 h-20 border-2 border-primary-light/15 rounded-lg animate-float-fast" />
      <div className="floating-element absolute top-1/2 right-[25%] w-14 h-14 border-2 border-primary/15 rounded-full animate-float-slow" style={{ animationDelay: '1s' }} />
      <div className="floating-element absolute bottom-1/3 right-[10%] w-10 h-10 border-2 border-accent/20 rounded-lg rotate-12 animate-float-medium" style={{ animationDelay: '0.5s' }} />
      <div className="floating-element absolute top-[15%] left-[30%] w-8 h-8 border-2 border-primary-glow/20 rounded-full animate-float-fast" style={{ animationDelay: '1.5s' }} />
      
      {/* Glowing particles */}
      <div className="particle absolute top-[20%] left-[15%] w-2 h-2 bg-primary/40 rounded-full animate-pulse-glow" />
      <div className="particle absolute top-[60%] right-[20%] w-3 h-3 bg-accent/40 rounded-full animate-pulse-glow" style={{ animationDelay: '0.7s' }} />
      <div className="particle absolute bottom-[25%] left-[35%] w-2 h-2 bg-primary-light/40 rounded-full animate-pulse-glow" style={{ animationDelay: '1.2s' }} />
      <div className="particle absolute top-[40%] right-[35%] w-2 h-2 bg-primary/30 rounded-full animate-pulse-glow" style={{ animationDelay: '0.3s' }} />
      <div className="particle absolute bottom-[40%] left-[50%] w-2 h-2 bg-accent/30 rounded-full animate-pulse-glow" style={{ animationDelay: '1.8s' }} />
      
      {/* Larger background shapes with blur */}
      <div className="absolute top-[10%] right-[5%] w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute bottom-[15%] left-[5%] w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-medium" style={{ animationDelay: '2s' }} />
    </div>
  );
};

export default FloatingElements;