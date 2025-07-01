import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EntranceSequence = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showSplitText, setShowSplitText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < 3) {
        setCurrentStep(currentStep + 1);
      } else {
        setTimeout(onComplete, 2000);
      }
    }, currentStep === 0 ? 1500 : currentStep === 1 ? 4000 : currentStep === 2 ? 5000 : 2000);

    if (currentStep === 1) {
      setTimeout(() => setShowSplitText(true), 500);
    }

    return () => clearTimeout(timer);
  }, [currentStep, onComplete]);

  const SplitText = ({ text, className, delay = 0 }) => {
    const letters = text.split('');
    
    return (
      <div className={`inline-flex ${className}`}>
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ 
              opacity: 0, 
              y: 50,
              scale: 0.5
            }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: 1
            }}
            transition={{
              duration: 0.6,
              delay: delay + index * 0.08,
              ease: [0.215, 0.61, 0.355, 1],
              type: "spring",
              stiffness: 150
            }}
            className="inline-block fa-text-white"
            style={{
              textShadow: '0 0 20px rgba(0, 191, 255, 0.8), 0 0 40px rgba(152, 251, 152, 0.6)'
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
      </div>
    );
  };

  const FruttigerBubbles = () => {
    const bubbles = Array.from({ length: 25 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble}
            className="absolute fa-bubble"
            style={{
              width: Math.random() * 80 + 20,
              height: Math.random() * 80 + 20,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 40 - 20, 0],
              scale: [1, 1.3, 1],
              rotate: [0, 360],
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

  const WaterDrops = () => {
    const drops = Array.from({ length: 15 }, (_, i) => i);
    
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {drops.map((drop) => (
          <motion.div
            key={drop}
            className="absolute"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00BFFF, #87CEEB)',
              boxShadow: '0 0 15px rgba(135, 206, 235, 0.8)',
              left: `${Math.random() * 100}%`,
              top: '-20px',
            }}
            animate={{
              y: '110vh',
              opacity: [0, 1, 1, 0],
              scale: [0.5, 1, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 4 + 6,
              repeat: Infinity,
              ease: "easeIn",
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #87CEEB 0%, #E0F6FF 50%, #FFFFFF 100%)'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Animated Background Elements */}
        <FruttigerBubbles />
        <WaterDrops />
        
        {/* Organic Background Shapes */}
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 fa-organic-1 fa-glass-blue opacity-40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 fa-organic-2 fa-glass-green opacity-30"
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
            x: [0, -40, 0],
            y: [0, 25, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Tech Grid Overlay */}
        <div className="absolute inset-0 fa-tech-grid opacity-20" />

        {/* Main Content */}
        <div className="relative z-10 text-center px-8 max-w-4xl">
          {/* Step 0: Initial logo */}
          {currentStep >= 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="mb-8"
            >
              <motion.div
                className="w-32 h-32 mx-auto mb-8 rounded-full fa-glass flex items-center justify-center relative"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 30px rgba(0, 191, 255, 0.6)",
                    "0 0 50px rgba(152, 251, 152, 0.8)",
                    "0 0 30px rgba(0, 191, 255, 0.6)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-4xl font-bold fa-text-gradient relative z-10">A</span>
                
                {/* Floating elements around logo */}
                <motion.div
                  className="absolute -top-4 -right-4 w-6 h-6 fa-bubble"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-4 h-4 fa-bubble"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Step 1: Name animation */}
          {currentStep >= 1 && showSplitText && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mb-8"
            >
              <SplitText
                text="Alex Kim"
                className="text-6xl md:text-8xl font-bold mb-4"
                delay={0.2}
              />
            </motion.div>
          )}

          {/* Step 2: Title animations */}
          {currentStep >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mb-8"
            >
              <SplitText
                text="Creative & Interdisciplinary"
                className="text-2xl md:text-4xl font-light fa-text mb-4"
                delay={0.3}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                <SplitText
                  text="Machine Learning & Software Solutions"
                  className="text-lg md:text-2xl fa-text"
                  delay={2.7}
                />
              </motion.div>
            </motion.div>
          )}

          {/* Step 3: Enter button */}
          {currentStep >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <motion.button
                onClick={onComplete}
                className="fa-button px-12 py-4 rounded-full text-xl font-semibold text-white relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 30px rgba(0, 191, 255, 0.6)",
                    "0 0 50px rgba(152, 251, 152, 0.8)",
                    "0 0 30px rgba(0, 191, 255, 0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-lime-400/30"
                  animate={{
                    x: ["-100%", "100%"]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                <span className="relative z-10">Enter Experience</span>
              </motion.button>
            </motion.div>
          )}
        </div>

        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {[0, 1, 2, 3].map((step) => (
            <motion.div
              key={step}
              className={`w-3 h-3 rounded-full ${
                currentStep >= step ? 'fa-bubble' : 'bg-white/30'
              }`}
              animate={currentStep >= step ? { 
                scale: [1, 1.4, 1],
                boxShadow: [
                  "0 0 10px rgba(0, 191, 255, 0.6)",
                  "0 0 20px rgba(152, 251, 152, 0.8)",
                  "0 0 10px rgba(0, 191, 255, 0.6)"
                ]
              } : {}}
              transition={{ 
                duration: 1, 
                repeat: currentStep >= step ? Infinity : 0, 
                repeatDelay: 1 
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EntranceSequence;