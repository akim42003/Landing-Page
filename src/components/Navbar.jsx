import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div className='fixed w-full top-0 left-0 z-50 bg-gray-900 bg-opacity-90'>
            <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>aKIM.soln</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4'>
                        <a href="#home">Home</a>
                    </li>
                    <li className='p-4'>
                        <a href="#about">About</a>
                    </li>
                    <li className='p-4'>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-900 bg-opacity-90 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>aKIM.soln</h1>
                    <ul className='uppercase p-4'>
                        <li className='p-4 border-b border-gray-600'>
                            <a href="#home" onClick={handleNav}>Home</a>
                        </li>
                        <li className='p-4 border-b border-gray-600'>
                            <a href="#about" onClick={handleNav}>About</a>
                        </li>
                        <li className='p-4'>
                            <a href="#projects" onClick={handleNav}>Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
