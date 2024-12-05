import React from 'react';

interface PageBackgroundProps {
  children: React.ReactNode;
  image: string;
  overlay?: string;
}

export const PageBackground: React.FC<PageBackgroundProps> = ({ 
  children, 
  image,
  overlay = 'rgba(0, 0, 0, 0.4)'
}) => {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(${overlay}, ${overlay}), url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-900/30" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};