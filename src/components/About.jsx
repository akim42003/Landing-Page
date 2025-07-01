import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import selfie from '../assets/selfie.jpeg';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [contentRef, contentInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [imageRef, imageInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='py-20 relative overflow-hidden' style={{
      background: 'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.8) 50%, rgba(224,255,255,0.9) 100%)'
    }}>
      {/* Frutiger Aero Background Elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 fa-organic-1 fa-glass-blue opacity-20"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 fa-organic-2 fa-glass-green opacity-15"
        animate={{
          rotate: [360, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Floating Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute fa-bubble opacity-30"
            style={{
              width: Math.random() * 25 + 10,
              height: Math.random() * 25 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0],
              scale: [1, 1.1, 1],
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
      
      {/* Flowing Wave Separator */}
      <motion.div 
        className='w-full h-1 my-16'
        style={{
          background: 'linear-gradient(90deg, transparent, #00BFFF, #87CEEB, #98FB98, transparent)',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        animate={{
          scaleX: [0.8, 1.2, 0.8],
        }}
      />
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6' ref={contentRef}>
            <motion.h2 
              ref={titleRef}
              className='text-4xl md:text-5xl font-bold mb-6'
              initial={{ opacity: 0, y: 50 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className='fa-text-pop'>About </span>
              <motion.span 
                className='fa-text-gradient'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={titleInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Me
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className='fa-glass p-6 rounded-3xl relative overflow-hidden'
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={contentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(30, 144, 255, 0.2)"
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,191,255,0.1), rgba(152,251,152,0.05))'
                }}
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(0,191,255,0.1), rgba(152,251,152,0.05))",
                    "linear-gradient(135deg, rgba(152,251,152,0.05), rgba(0,191,255,0.1))",
                    "linear-gradient(225deg, rgba(0,191,255,0.1), rgba(152,251,152,0.05))"
                  ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.p 
                className='fa-text leading-relaxed text-lg mb-4 relative z-10'
                initial={{ opacity: 0, x: -20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Currently, I'm a senior at <span className='fa-text-gradient font-semibold'>Hamilton College</span> studying Mathematics and Music. 
                Ever since I can remember, I've had a passion for creating things—whether it's through music, legos, or lines of code.
              </motion.p>
              
              <motion.p 
                className='fa-text leading-relaxed text-lg mb-4 relative z-10'
                initial={{ opacity: 0, x: -20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I first discovered the possibilities of machine learning during my internship at the
                <span className='fa-text-gradient font-semibold'> Boston Children's Hospital Musculoskeletal Informatics Group</span>.
              </motion.p>

              {showMore && (
                <motion.div 
                  className='space-y-4 relative z-10'
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  <motion.p 
                    className='fa-text leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    As a Data Science Intern, I helped process and verify dataset quality and wrote image feature extraction programs as my first experience with computer vision. 
                    I got to see ML's impact in healthcare, contributing to 3D model segmentation pipelines and NLP treatment planning projects.
                  </motion.p>
                  
                  <motion.p 
                    className='fa-text leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I returned the next year with the startup <span className='fa-text-gradient font-semibold'>BonePixel</span>, writing 3D modeling algorithms. 
                    This experience led me to explore personal projects through hackathons and experiments with computer vision.
                  </motion.p>
                  
                  <motion.p 
                    className='fa-text leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I was granted an <span className='fa-text-gradient font-semibold'>Emerson Fellowship</span> for summer 2024, developing a vocal register classification pipeline 
                    with a musician-friendly GUI. This tool helps singers understand and apply technique, particularly useful for my acapella group, The Buffers.
                  </motion.p>
                  
                  <motion.p 
                    className='fa-text leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Outside of STEM and music, I enjoy <span className='fa-text-gradient'>basketball, skateboarding, cooking with family, and crocheting</span>.
                  </motion.p>
                </motion.div>
              )}
              
              <motion.button 
                onClick={toggleShowMore} 
                className='mt-6 px-8 py-3 fa-button rounded-3xl font-semibold relative z-10 transition-all duration-300'
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(30, 144, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {showMore ? 'Show Less' : 'Show More'}
              </motion.button>
            </motion.div>
          </div>
          
          <motion.div 
            ref={imageRef}
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={imageInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div 
              className='fa-glass p-4 rounded-3xl mx-auto max-w-md relative overflow-hidden'
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(30, 144, 255, 0.3)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,191,255,0.1), rgba(152,251,152,0.05))'
                }}
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(0,191,255,0.1), rgba(152,251,152,0.05))",
                    "linear-gradient(135deg, rgba(152,251,152,0.1), rgba(0,191,255,0.05))",
                    "linear-gradient(225deg, rgba(0,191,255,0.1), rgba(152,251,152,0.05))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              <motion.img 
                src={selfie} 
                alt='Alex Kim' 
                className='w-full rounded-2xl shadow-lg relative z-10'
                whileHover={{ scale: 1.03, filter: "brightness(1.1)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;