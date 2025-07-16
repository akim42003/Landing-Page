import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed w-full top-0 left-0 z-50 glass-morphism backdrop-blur-lg bg-gray-900/80 shadow-lg animate-fade-in'>
            <div className='flex justify-between items-center h-20 max-w-7xl mx-auto px-6 text-white'>
                <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg'>
                    Alex Kim
                </h1>
                <ul className='hidden md:flex space-x-8'>
                    <li>
                        <a href="#home" className='hover:text-blue-300 transition-colors duration-300 font-medium'>Home</a>
                    </li>
                    <li>
                        <a href="#about" className='hover:text-blue-300 transition-colors duration-300 font-medium'>About</a>
                    </li>
                    <li>
                        <a href="#projects" className='hover:text-blue-300 transition-colors duration-300 font-medium'>Projects</a>
                    </li>
                    <li>
                        <a href="#publications" className='hover:text-blue-300 transition-colors duration-300 font-medium'>Publications</a>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[70%] h-full glass-morphism-dark ease-in-out duration-500 z-50' : 'fixed left-[-100%] ease-in-out duration-500'}>
                    <h1 className='text-2xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg m-6'>
                        Alex Kim
                    </h1>
                    <ul className='p-6 space-y-4'>
                        <li className='p-4 border-b border-white/20'>
                            <a href="#home" onClick={handleNav} className='text-white hover:text-blue-300 transition-colors duration-300 font-medium'>Home</a>
                        </li>
                        <li className='p-4 border-b border-white/20'>
                            <a href="#about" onClick={handleNav} className='text-white hover:text-blue-300 transition-colors duration-300 font-medium'>About</a>
                        </li>
                        <li className='p-4 border-b border-white/20'>
                            <a href="#projects" onClick={handleNav} className='text-white hover:text-blue-300 transition-colors duration-300 font-medium'>Projects</a>
                        </li>
                        <li className='p-4'>
                            <a href="#publications" onClick={handleNav} className='text-white hover:text-blue-300 transition-colors duration-300 font-medium'>Publications</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
