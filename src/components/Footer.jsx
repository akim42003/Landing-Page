import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-gray-500 h-[2px] w-[100%] '></div>
    <div className = 'max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300'>
        <h1 className = 'w-full text-3xl font-bold text-[#00df9a]'>Contact Me
            <p className = 'flex text-white text-sm font-bold '>akim42003@gmail.com</p>
            <p className = 'flex text-white text-sm font-bold '>617-659-0691</p>
            <p className = 'flex text-white text-sm font-bold '>www.linkedin.com/in/akim42003</p>
        </h1>
        <p className = 'flex text-white text-md font-bold '>Feel free to connect or comment about any of my work! </p> 
    </div>
    </div>
  )
}

export default Footer