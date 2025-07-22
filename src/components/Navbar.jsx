import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const handleNav = () => {
        setNav(!nav);
    };

    const handleSmoothScroll = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
        if (nav) {
            setNav(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'projects', 'publications'];
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
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='fixed w-full top-0 left-0 z-50 glass-morphism backdrop-blur-lg bg-gray-900/80 shadow-lg animate-fade-in'>
            <div className='flex justify-between items-center h-20 max-w-7xl mx-auto px-6 text-white'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg'>
                    Alex Kim
                </h1>
                <ul className='hidden md:flex space-x-8'>
                    <li>
                        <a 
                            href="#home" 
                            onClick={(e) => handleSmoothScroll(e, '#home')}
                            className={`hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'home' ? 'text-blue-300' : ''}`}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#about" 
                            onClick={(e) => handleSmoothScroll(e, '#about')}
                            className={`hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'about' ? 'text-blue-300' : ''}`}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#projects" 
                            onClick={(e) => handleSmoothScroll(e, '#projects')}
                            className={`hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'projects' ? 'text-blue-300' : ''}`}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a 
                            href="#publications" 
                            onClick={(e) => handleSmoothScroll(e, '#publications')}
                            className={`hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'publications' ? 'text-blue-300' : ''}`}
                        >
                            Publications
                        </a>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {nav && (
                    <div 
                        className='fixed inset-0 bg-black/50 z-40 md:hidden'
                        onClick={handleNav}
                    />
                )}
                <div className={nav ? 'absolute right-0 top-20 w-full glass-morphism-dark shadow-xl transition-all duration-300 ease-in-out transform origin-top md:hidden' : 'absolute right-0 top-20 w-full transform scale-y-0 opacity-0 transition-all duration-300 ease-in-out origin-top md:hidden'}>
                    <ul className='py-4'>
                        <li className='px-6 py-3 border-b border-white/10'>
                            <a 
                                href="#home" 
                                onClick={(e) => handleSmoothScroll(e, '#home')}
                                className={`block text-white hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'home' ? 'text-blue-300' : ''}`}
                            >
                                Home
                            </a>
                        </li>
                        <li className='px-6 py-3 border-b border-white/10'>
                            <a 
                                href="#about" 
                                onClick={(e) => handleSmoothScroll(e, '#about')}
                                className={`block text-white hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'about' ? 'text-blue-300' : ''}`}
                            >
                                About
                            </a>
                        </li>
                        <li className='px-6 py-3 border-b border-white/10'>
                            <a 
                                href="#projects" 
                                onClick={(e) => handleSmoothScroll(e, '#projects')}
                                className={`block text-white hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'projects' ? 'text-blue-300' : ''}`}
                            >
                                Projects
                            </a>
                        </li>
                        <li className='px-6 py-3'>
                            <a 
                                href="#publications" 
                                onClick={(e) => handleSmoothScroll(e, '#publications')}
                                className={`block text-white hover:text-blue-300 transition-colors duration-300 font-medium ${activeSection === 'publications' ? 'text-blue-300' : ''}`}
                            >
                                Publications
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
