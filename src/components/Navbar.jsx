import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setNav(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            
            const sections = ['home', 'technologies', 'about', 'projects'];
            const scrollPosition = window.scrollY + 100;
            
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
                scrolled ? 'fa-glass' : 'fa-glass-blue'
            }`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            style={{
                borderRadius: '0 0 25px 25px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderTop: 'none',
            }}
        >
            <div className='flex justify-between items-center h-20 max-w-7xl mx-auto px-6'>
                <motion.h1 
                    className='text-2xl font-bold fa-text-gradient cursor-pointer'
                    onClick={() => smoothScrollTo('home')}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Alex Kim
                </motion.h1>

                {/* Desktop Navigation */}
                <ul className='hidden md:flex space-x-8'>
                    {['home', 'technologies', 'about', 'projects'].map((section) => (
                        <li key={section}>
                            <motion.button
                                onClick={() => smoothScrollTo(section)}
                                className={`font-medium transition-all duration-300 relative px-4 py-2 rounded-2xl ${
                                    activeSection === section 
                                        ? 'fa-text-white' 
                                        : 'fa-text hover:fa-text-white'
                                }`}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    background: activeSection === section 
                                        ? 'linear-gradient(135deg, rgba(0,191,255,0.3), rgba(152,251,152,0.2))'
                                        : 'transparent'
                                }}
                            >
                                {section.charAt(0).toUpperCase() + section.slice(1)}
                                {activeSection === section && (
                                    <motion.div
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
                                        style={{
                                            background: 'linear-gradient(90deg, #00BFFF, #98FB98)'
                                        }}
                                        layoutId="activeSection"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <motion.div 
                    onClick={handleNav} 
                    className='block md:hidden cursor-pointer p-3 rounded-2xl fa-glass-blue'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <AnimatePresence mode="wait">
                        {nav ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: -90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: 90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <AiOutlineClose size={20} className="fa-text" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 90, opacity: 0 }}
                                animate={{ rotate: 0, opacity: 1 }}
                                exit={{ rotate: -90, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <AiOutlineMenu size={20} className="fa-text" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {nav && (
                        <motion.div 
                            className='fixed left-0 top-0 w-[70%] h-full fa-glass z-50'
                            style={{
                                backdropFilter: 'blur(20px)',
                                borderRadius: '0 30px 30px 0',
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(135,206,235,0.15))'
                            }}
                            initial={{ x: "-100%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: "-100%", opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <motion.h1 
                                className='text-2xl font-bold fa-text-gradient m-6 cursor-pointer'
                                onClick={() => smoothScrollTo('home')}
                                whileHover={{ scale: 1.05 }}
                            >
                                Alex Kim
                            </motion.h1>
                            
                            {/* Floating bubbles in mobile menu */}
                            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                {Array.from({ length: 8 }, (_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute w-4 h-4 fa-bubble opacity-30"
                                        style={{
                                            left: `${Math.random() * 100}%`,
                                            top: `${Math.random() * 100}%`,
                                        }}
                                        animate={{
                                            y: [0, -20, 0],
                                            scale: [1, 1.2, 1],
                                        }}
                                        transition={{
                                            duration: Math.random() * 3 + 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: Math.random() * 2,
                                        }}
                                    />
                                ))}
                            </div>
                            
                            <ul className='p-6 space-y-4 relative z-10'>
                                {['home', 'technologies', 'about', 'projects'].map((section, index) => (
                                    <motion.li 
                                        key={section}
                                        className='p-4 rounded-2xl fa-glass-blue'
                                        initial={{ x: -50, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: index * 0.1 + 0.2 }}
                                    >
                                        <motion.button
                                            onClick={() => smoothScrollTo(section)}
                                            className={`fa-text font-medium w-full text-left ${
                                                activeSection === section ? 'fa-text-gradient' : ''
                                            }`}
                                            whileHover={{ scale: 1.05, x: 10 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {section.charAt(0).toUpperCase() + section.slice(1)}
                                        </motion.button>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;