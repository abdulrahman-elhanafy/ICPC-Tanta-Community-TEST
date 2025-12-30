import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Button: React.FC<{
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  to?: string;
}> = ({ children, variant = 'primary', onClick, className = '', to }) => {
  const baseStyle = "px-6 py-3 rounded-md font-outfit font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-md inline-block text-center";
  
  const variants = {
    primary: "bg-icpc-blue text-white hover:bg-blue-600 hover:shadow-lg",
    secondary: "bg-icpc-yellow text-icpc-dark hover:bg-yellow-400 hover:shadow-lg",
    outline: "border-2 border-icpc-blue text-icpc-blue hover:bg-icpc-blue hover:text-white"
  };

  const content = (
    <motion.span whileTap={{ scale: 0.95 }}>
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={`${baseStyle} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export const SectionTitle: React.FC<{
  title: string;
  highlight?: string;
  subtitle?: string;
  centered?: boolean;
}> = ({ title, highlight, subtitle, centered = false }) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-800 mb-4 leading-tight">
        {title} {highlight && <span className="marker-highlight text-gray-900 px-2">{highlight}</span>}
      </h2>
      {subtitle && <p className="text-base md:text-lg text-gray-600 font-lato max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export const GridBackground: React.FC = () => (
  <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] md:bg-[length:40px_40px] opacity-40 pointer-events-none -z-10" />
);

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${className}`}
  >
    {children}
  </motion.div>
);