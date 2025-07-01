import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import playcaller from '../assets/playcaller.png';
import singing from '../assets/singing.png';
import pao from '../assets/pao.png';
import circuit from '../assets/circuit.jpg';

const projectsData = [
    {
        title: 'AVRA - Automatic Vocal Register Analysis',
        description: 'A full-stack application that allows musicians of all levels to further their understanding and application of vocal technique. Built during summer 2024 through an Emerson Foundation grant, this project combines computer vision and machine learning to create a vocal register classifier using spectrograms with SVM and CNN models.',
        link: 'https://github.com/akim42003/AVRA',
        tech: ['JavaScript', 'Machine Learning', 'Computer Vision'],
        featured: true
    },
    {
        title: 'TensorKit-Learn',
        description: 'A tensor-based machine learning library built for educational and personal purposes. This Python library provides fundamental ML algorithms and neural network implementations with a focus on learning and experimentation.',
        link: 'https://github.com/akim42003/tensorkit-learn',
        tech: ['Python', 'Machine Learning', 'Neural Networks'],
        featured: true
    },
    {
        title: 'SOFIA',
        description: 'A local computer use agent that automates desktop interactions and tasks through intelligent command processing. This AI-powered assistant can perform complex computer operations, file management, and application control to enhance productivity and streamline workflows.',
        link: 'https://github.com/akim42003/SOFIA',
        tech: ['Python', 'AI Automation', 'Computer Vision', 'System Integration'],
        featured: true
    },
    {
        title: 'Visi-Cal',
        description: 'A local calorie tracking application that harnesses computer vision to assess the nutritional content of meals. Users can analyze food images to automatically calculate calories, macronutrients, and dietary information, making nutrition tracking effortless and accurate.',
        link: 'https://github.com/akim42003/Visi-Cal',
        tech: ['Python', 'Computer Vision', 'Nutrition Analysis', 'Image Processing'],
        featured: false
    },
    {
        title: 'Flappy Bird Deep Q-Learning',
        description: 'A Deep Q-Learning agent that plays Flappy Bird using reinforcement learning. This project demonstrates the application of DQN algorithms to game environments with impressive performance results.',
        link: 'https://github.com/akim42003/Flappy-Bird-Free-For-All',
        tech: ['Python', 'Deep Learning', 'Reinforcement Learning'],
        featured: false
    },
    {
        title: 'Multi-tool Synthesizer Keyboard',
        description: 'A hardware-software project creating a music synthesizer with full 88-key piano range, multiple instrument sounds, drum pad, and real-time controls using Arduino and CircuitPython.',
        link: 'https://github.com/akim42003/Multi-tool-Synthesizer-Keyboard',
        tech: ['Python', 'Arduino', 'Hardware', 'Music Technology'],
        featured: false
    },
    {
        title: 'PlayCaller.ai',
        description: 'NBA analytics tool using CNN to predict scoring likelihood from game broadcast images. Features play design interface and defensive/offensive success prediction based on court positioning.',
        link: 'https://github.com/akim42003/PlayCaller.ai',
        tech: ['Python', 'Computer Vision', 'Sports Analytics'],
        featured: false
    },
    {
        title: 'ZQ',
        description: 'A Python-based hands-free text editor that enables voice-controlled document editing and code writing. Features natural language processing for command interpretation, making text editing accessible and efficient through voice commands and automation.',
        link: 'https://github.com/akim42003/ZQ',
        tech: ['Python', 'Speech Recognition', 'NLP', 'Text Processing'],
        featured: false
    },
    {
        title: 'CS_307 Final - NBA Analytics',
        description: 'Comprehensive NBA analytics project built for CS 307. Implements advanced statistical analysis, player performance metrics, and predictive modeling for basketball data insights and team strategy optimization.',
        link: 'https://github.com/akim42003/CS_307-Final',
        tech: ['Python', 'Data Analytics', 'Statistics', 'Sports Analytics'],
        featured: false
    }
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [hoveredProject, setHoveredProject] = useState(null);
  const [titleRef, titleInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuredRef, featuredInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [otherRef, otherInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const featuredProjects = projectsData.filter(project => project.featured);
  const otherProjects = projectsData.filter(project => !project.featured);

  const toggleProjectExpansion = (index) => {
    setExpandedProjects(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const projectVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9,
      rotateX: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        duration: 0.8
      }
    }
  };

  return (
    <div className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 270, 360],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          x: [0, -40, 0],
          y: [0, 20, 0]
        }}
        transition={{
          duration: 20,
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
        <motion.div 
          ref={titleRef}
          className='text-center mb-16'
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className='text-4xl md:text-5xl font-bold mb-4 text-white'
            initial={{ opacity: 0, scale: 0.5 }}
            animate={titleInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Featured <motion.span 
              className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg'
              initial={{ opacity: 0, rotateY: -90 }}
              animate={titleInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              Projects
            </motion.span>
          </motion.h2>
          <motion.p 
            className='text-xl text-gray-300 max-w-2xl mx-auto'
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            A collection of projects showcasing machine learning, web development, and creative technology
          </motion.p>
        </motion.div>

        {/* Featured Projects Grid */}
        <motion.div 
          ref={featuredRef}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'
          variants={containerVariants}
          initial="hidden"
          animate={featuredInView ? "visible" : "hidden"}
        >
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={index} 
              className='glass-morphism rounded-2xl group relative overflow-hidden'
              variants={projectVariants}
              style={{ transformStyle: 'preserve-3d' }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.25)",
                zIndex: 10
              }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                animate={hoveredProject === index ? {
                  background: [
                    "linear-gradient(45deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))",
                    "linear-gradient(135deg, rgba(147, 51, 234, 0.15), rgba(6, 182, 212, 0.15))",
                    "linear-gradient(225deg, rgba(6, 182, 212, 0.1), rgba(59, 130, 246, 0.1))"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating particles on hover */}
              <AnimatePresence>
                {hoveredProject === index && (
                  <motion.div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {Array.from({ length: 8 }, (_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400 rounded-full"
                        initial={{
                          x: Math.random() * 300,
                          y: 300,
                          opacity: 0
                        }}
                        animate={{
                          y: -10,
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0]
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.1,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className='p-6 relative z-10'>
                <motion.h3 
                  className='text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300'
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className='text-gray-300 text-sm mb-4'
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {project.description}
                </motion.p>
                <motion.div 
                  className='flex flex-wrap gap-2 mb-4'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {project.tech.map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className='px-3 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-blue-300/30'
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(59, 130, 246, 0.2)",
                        borderColor: "rgba(59, 130, 246, 0.6)"
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium text-white transition-all duration-300'
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Project
                  <motion.svg 
                    className='w-4 h-4 ml-2' 
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14' />
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Other Projects */}
        <motion.div 
          className='text-center mb-12'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3 
            className='text-3xl font-bold text-white mb-8'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Other <span className='bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg'>Projects</span>
          </motion.h3>
        </motion.div>

        <motion.div 
          ref={otherRef}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          variants={containerVariants}
          initial="hidden"
          animate={otherInView ? "visible" : "hidden"}
        >
          {otherProjects.map((project, index) => {
            const isExpanded = expandedProjects[index];
            const shortDescription = project.description.length > 120 
              ? project.description.substring(0, 120) + '...' 
              : project.description;
            
            return (
              <motion.div 
                key={index} 
                className='glass-morphism rounded-xl p-6 group relative overflow-hidden'
                variants={projectVariants}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"
                  whileHover={{
                    background: "linear-gradient(45deg, rgba(59, 130, 246, 0.08), rgba(147, 51, 234, 0.08))"
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.h4 
                  className='text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300 relative z-10'
                  whileHover={{ scale: 1.05 }}
                >
                  {project.title}
                </motion.h4>
                <motion.p 
                  className='text-gray-300 text-sm mb-4 relative z-10'
                  animate={{ opacity: isExpanded ? 1 : 0.9 }}
                >
                  {isExpanded ? project.description : shortDescription}
                </motion.p>
                {project.description.length > 120 && (
                  <motion.button
                    onClick={() => toggleProjectExpansion(index)}
                    className='text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors duration-300 mb-4 relative z-10'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </motion.button>
                )}
                <motion.div 
                  className='flex flex-wrap gap-1 mb-4 relative z-10'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.3 }}
                >
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <motion.span 
                      key={techIndex}
                      className='px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-full'
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300 relative z-10 inline-flex items-center'
                  whileHover={{ x: 5 }}
                >
                  View Project →
                </motion.a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;