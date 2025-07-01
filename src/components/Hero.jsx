import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import headshot from '../assets/headshot.jpeg';
import resume from '../assets/resume.pdf';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  // Parallax transforms - more subtle for Frutiger Aero
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -50]);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 100,
        y: (e.clientY - window.innerHeight / 2) / 100
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Subtle Frutiger Aero Bubble Component
  const FruttigerBubbles = () => {
    const bubbles = Array.from({ length: 8 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble}
            className="absolute fa-bubble opacity-40"
            style={{
              width: Math.random() * 40 + 15,
              height: Math.random() * 40 + 15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    );
  };

  // Subtle Water Drops Animation
  const WaterDrops = () => {
    const drops = Array.from({ length: 4 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {drops.map((drop) => (
          <motion.div
            key={drop}
            className="absolute opacity-30"
            style={{
              width: 3,
              height: 3,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #2196F3, #00BCD4)',
              boxShadow: '0 0 8px rgba(33, 150, 243, 0.4)',
              left: `${Math.random() * 100}%`,
              top: '-10px',
            }}
            animate={{
              y: '110vh',
              opacity: [0, 0.6, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 8,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="fa-background relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Frutiger Aero Background Elements */}
      <FruttigerBubbles />
      <WaterDrops />
      
      {/* Subtle Organic Background Shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 fa-organic-1 fa-glass-blue opacity-20"
        style={{
          x: mousePosition.x * 1,
          y: mousePosition.y * 1 + y1
        }}
        animate={{
          rotate: [0, 180, 360],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-64 h-64 fa-organic-2 fa-glass-green opacity-15"
        style={{
          x: mousePosition.x * -0.8,
          y: mousePosition.y * -0.8 + y2
        }}
        animate={{
          rotate: [360, 180, 0],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 fa-tech-grid opacity-10" />
      
      <div className='max-w-7xl mx-auto px-6 py-20 mt-20 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Profile Image with Frutiger Aero Styling */}
          <motion.div 
            ref={heroRef}
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            style={{ 
              x: mousePosition.x * 5,
              y: mousePosition.y * 5
            }}
          >
            <motion.div className="relative">
              <motion.div className="fa-glass rounded-full p-6 mx-auto w-fit fa-glow-animation">
                <motion.img 
                  src={headshot} 
                  alt="Alex Kim" 
                  className='w-72 h-72 rounded-full object-cover'
                  whileHover={{ 
                    scale: 1.05,
                    filter: "brightness(1.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
              
              {/* Floating Elements Around Image */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 fa-bubble"
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-8 h-8 fa-bubble"
                animate={{
                  y: [0, -15, 0],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </motion.div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div 
            className='space-y-6'
            initial={{ opacity: 0, x: 100 }}
            animate={heroInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            style={{
              x: mousePosition.x * -3,
              y: mousePosition.y * -3
            }}
          >
            <motion.h1 
              className='text-5xl md:text-6xl font-bold leading-tight'
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="fa-text-pop"
                initial={{ opacity: 0, x: -30 }}
                animate={heroInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Creative & 
              </motion.span>
              <motion.span 
                className='block fa-text-gradient text-6xl md:text-7xl font-bold'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
                whileHover={{ 
                  scale: 1.05,
                  filter: "brightness(1.2)"
                }}
              >
                Interdisciplinary
              </motion.span>
            </motion.h1>
            
            <motion.h2 
              className='text-2xl md:text-3xl font-medium fa-text-pop'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              Machine Learning & Software Solutions
            </motion.h2>
            
            <motion.p 
              className='text-lg leading-relaxed max-w-lg fa-text font-medium'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              Hi I'm Alex! I enjoy building things with data, sports, and math. 
              I create purposeful full-stack applications, ML models, and electronics 
              across diverse disciplines.
            </motion.p>
            
            <motion.div 
              className='flex flex-col sm:flex-row gap-4 pt-4'
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <motion.a 
                href="#projects"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className='fa-button-glass px-8 py-4 rounded-3xl font-semibold transition-all duration-300'>
                  View Projects
                </button>
              </motion.a>
              
              <motion.a 
                href={resume} 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className='fa-button px-8 py-4 rounded-3xl font-semibold transition-all duration-300'>
                  Resume
                </button>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Flowing Wave Separator */}
      <motion.div 
        className='absolute bottom-0 w-full h-32 fa-wave'
        style={{
          background: 'linear-gradient(135deg, rgba(135, 206, 235, 0.3), rgba(152, 251, 152, 0.2))',
        }}
        animate={{
          scaleX: [1, 1.1, 1],
          scaleY: [1, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}

export default Hero;