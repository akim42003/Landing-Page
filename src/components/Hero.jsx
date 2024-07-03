import React from 'react';
import headshot from '../assets/headshot.jpeg'; // Adjust the path to your actual image location

// Assuming you have icons or image assets for each technology
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
import resume from '../assets/resume.pdf';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[85%] mt-[200px] max-h-[100%] w-full h-700px mx-auto flex flex-row items-center'>
        <img src={headshot} alt="Headshot" className='w-[25%] rounded-full ' />
        <div className='w-2/3 flex flex-col items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold mx-[30px]'>Creative and Interdiciplinary Machine Learning and Software Solutions</p>
          <p className='text-[#00df9a] font-bold p-2 mx-[30px]'>Hi I'm Alex! I enjoy creating purposeful and fun full-stack applications, machine-learning models, and electronics across a variety of disciplines. Check out some of my projects!</p>
          <div className='flex space-x-4'>
          <a href="#projects">
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>
                View Projects
              </button>
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer">
              <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className = 'bg-gray-500 h-[2px] w-[100%] mt-[100px] mb-[100px]'></div>
      <div className = 'flex flex-col items-center'>
        <h1 className = 'font-bold md:text-5xl'>
            Favorite Technologies
        </h1>
      </div>
      <div className='max-w-[85%] mt-6 mx-auto'>
        <Technologies />
      </div>
    </div>
  );
}

const Technologies = () => {
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

  return (
    <div className='flex flex-wrap justify-center items-center'>
      {technologies.map((tech, index) => (
        <div key={index} className='flex flex-col items-center m-4'>
          <img src={tech.icon} alt={`${tech.name} icon`} className='w-24 h-24 mb-2' />
          <p className='text-sm font-medium'>{tech.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Hero;
