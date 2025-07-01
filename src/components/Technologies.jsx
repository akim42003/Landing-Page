import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Technology icons
import reactIcon from '../assets/react.svg';
import pytorchIcon from '../assets/pytorch.svg';
import scikitIcon from '../assets/scikit-learn.svg';
import pandasIcon from '../assets/Pandas.svg';
import postgresqlIcon from '../assets/PostgresSQL.svg';
import pythonIcon from '../assets/Python.svg';
import latexIcon from '../assets/LaTeX.svg';
import rstudioIcon from '../assets/RStudio.svg';
import cppIcon from '../assets/C++ (CPlusPlus).svg';
import javaIcon from '../assets/Java.svg';
import opencvIcon from '../assets/opencv.svg';
import jsIcon from '../assets/JavaScript.svg';
import tailwindIcon from '../assets/Tailwind CSS.svg'
import htmlIcon from '../assets/html.svg';

const Technologies = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [gridRef, gridInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const technologies = [
    { name: 'React.js', icon: reactIcon },
    { name: 'PyTorch', icon: pytorchIcon },
    { name: 'OpenCV', icon: opencvIcon},
    { name: 'Scikit-Learn', icon: scikitIcon },
    { name: 'Pandas', icon: pandasIcon },
    { name: 'PostgreSQL', icon: postgresqlIcon },
    { name: 'Python', icon: pythonIcon },
    { name: 'LaTeX', icon: latexIcon },
    { name: 'R Studio', icon: rstudioIcon },
    { name: 'C++', icon: cppIcon },
    { name: 'Java', icon: javaIcon },
    { name: 'HTML', icon: htmlIcon},
    { name: 'JavaScript', icon: jsIcon },
    { name: 'Tailwind CSS', icon: tailwindIcon}
  ];

  // Frutiger Aero Floating Elements
  const FloatingElements = () => {
    const elements = Array.from({ length: 12 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {elements.map((el) => (
          <motion.div
            key={el}
            className="absolute fa-bubble"
            style={{
              width: Math.random() * 40 + 15,
              height: Math.random() * 40 + 15,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="py-20 relative overflow-hidden" style={{
      background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.8) 50%, rgba(224,255,255,0.9) 100%)'
    }}>
      {/* Frutiger Aero Background Elements */}
      <FloatingElements />
      
      {/* Organic Background Shapes */}
      <motion.div
        className="absolute top-10 right-10 w-80 h-80 fa-organic-1 fa-glass-blue opacity-40"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 fa-organic-2 fa-glass-green opacity-30"
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Flowing Wave Separator */}
      <motion.div 
        className='w-full h-1 my-16'
        style={{
          background: 'linear-gradient(90deg, transparent, #00BFFF, #87CEEB, #98FB98, transparent)',
        }}
        animate={{
          scaleX: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <motion.div 
          ref={titleRef}
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className='text-4xl md:text-5xl font-bold mb-4 fa-text'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Favorite <motion.span 
              className='fa-text-gradient'
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Technologies
            </motion.span>
          </motion.h2>
          <motion.p
            className="text-lg fa-text opacity-80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            The tools and frameworks that power my creative journey
          </motion.p>
        </motion.div>

        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-6xl mx-auto' ref={gridRef}>
          {technologies.map((tech, index) => (
            <motion.div 
              key={index} 
              className='flex flex-col items-center fa-glass rounded-3xl p-6 group cursor-pointer relative overflow-hidden'
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08 + 0.3,
                type: "spring",
                stiffness: 200,
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                y: -10,
                boxShadow: "0 15px 40px rgba(30, 144, 255, 0.3)",
                zIndex: 10
              }}
              style={{ 
                transformStyle: 'preserve-3d',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.4), rgba(135,206,235,0.2))',
              }}
            >
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,191,255,0.1), rgba(152,251,152,0.1))',
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating mini bubbles on hover */}
              <motion.div 
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {Array.from({ length: 4 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 fa-bubble"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`
                    }}
                    animate={{
                      y: [-5, -25, -5],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </motion.div>
              
              <motion.div 
                className='relative z-10 flex flex-col items-center'
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  className="p-3 rounded-2xl fa-glass mb-3"
                  whileHover={{ 
                    rotate: [0, -5, 5, 0],
                    filter: "brightness(1.2)"
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <img 
                    src={tech.icon} 
                    alt={`${tech.name} icon`} 
                    className='w-12 h-12' 
                  />
                </motion.div>
                <motion.p 
                  className='text-sm font-medium text-center fa-text group-hover:fa-text-gradient transition-colors duration-300'
                  whileHover={{ scale: 1.05 }}
                >
                  {tech.name}
                </motion.p>
              </motion.div>
              
              {/* Ripple effect on click */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(0,191,255,0.3) 0%, transparent 70%)',
                }}
                initial={{ scale: 0, opacity: 1 }}
                whileTap={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          ))}
        </div>
        
        {/* Flowing bottom decoration */}
        <motion.div
          className="mt-16 h-20 w-full relative"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(135,206,235,0.3), rgba(152,251,152,0.2), transparent)',
            clipPath: 'ellipse(80% 100% at 50% 0%)'
          }}
          animate={{
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default Technologies;