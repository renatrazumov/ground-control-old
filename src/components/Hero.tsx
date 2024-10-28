import React from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=2000"
          alt="Pristine Lawn"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Ground Control Landscaping LLC
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-green-400 italic font-medium">
          "Leave it to Ground Control to have your yard looking out of this world"
        </p>
        <div className="mb-8">
          <CTAButton />
        </div>
      </div>
    </header>
  );
};

export default Hero;