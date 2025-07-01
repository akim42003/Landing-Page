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
    <div className='py-20 relative overflow-hidden'>
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 left-10 w-48 h-48 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div 
        className='w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-16'
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      
      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div className='space-y-6' ref={contentRef}>
            <motion.h2 
              ref={titleRef}
              className='text-4xl md:text-5xl font-bold text-white mb-6'
              initial={{ opacity: 0, y: 50 }}
              animate={titleInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              About <motion.span 
                className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg'
                initial={{ opacity: 0, scale: 0.5 }}
                animate={titleInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              >
                Me
              </motion.span>
            </motion.h2>
            
            <motion.div 
              className='glass-morphism p-6 rounded-2xl relative overflow-hidden'
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={contentInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)"
              }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.05), rgba(59, 130, 246, 0.05))",
                    "linear-gradient(225deg, rgba(59, 130, 246, 0.05), rgba(147, 51, 234, 0.05))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
              
              <motion.p 
                className='text-gray-300 leading-relaxed text-lg mb-4 relative z-10'
                initial={{ opacity: 0, x: -20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Currently, I'm a senior at <span className='text-cyan-300 font-semibold'>Hamilton College</span> studying Mathematics and Music. 
                Ever since I can remember, I've had a passion for creating things—whether it's through music, legos, or lines of code.
              </motion.p>
              
              <motion.p 
                className='text-gray-300 leading-relaxed text-lg mb-4 relative z-10'
                initial={{ opacity: 0, x: -20 }}
                animate={contentInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I first discovered the possibilities of machine learning during my internship at the
                <span className='text-cyan-300 font-semibold'> Boston Children's Hospital Musculoskeletal Informatics Group</span>.
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
                    className='text-gray-300 leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    As a Data Science Intern, I helped process and verify dataset quality and wrote image feature extraction programs as my first experience with computer vision. 
                    I got to see ML's impact in healthcare, contributing to 3D model segmentation pipelines and NLP treatment planning projects.
                  </motion.p>
                  
                  <motion.p 
                    className='text-gray-300 leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    I returned the next year with the startup <span className='text-cyan-300 font-semibold'>BonePixel</span>, writing 3D modeling algorithms. 
                    This experience led me to explore personal projects through hackathons and experiments with computer vision.
                  </motion.p>
                  
                  <motion.p 
                    className='text-gray-300 leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    I was granted an <span className='text-cyan-300 font-semibold'>Emerson Fellowship</span> for summer 2024, developing a vocal register classification pipeline 
                    with a musician-friendly GUI. This tool helps singers understand and apply technique, particularly useful for my acapella group, The Buffers.
                  </motion.p>
                  
                  <motion.p 
                    className='text-gray-300 leading-relaxed'
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    Outside of STEM and music, I enjoy <span className='text-cyan-300'>basketball, skateboarding, cooking with family, and crocheting</span>.
                  </motion.p>
                </motion.div>
              )}
              
              <motion.button 
                onClick={toggleShowMore} 
                className='mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium text-white transition-all duration-300 relative z-10'
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)"
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
              className='glass-morphism p-4 rounded-2xl mx-auto max-w-md relative overflow-hidden'
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.2)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.1), rgba(6, 182, 212, 0.1))",
                    "linear-gradient(225deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              />
              <motion.img 
                src={selfie} 
                alt='Alex Kim' 
                className='w-full rounded-xl shadow-lg relative z-10'
                whileHover={{ scale: 1.03 }}
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