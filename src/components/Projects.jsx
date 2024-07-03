import React from 'react';
import playcaller from '../assets/playcaller.png';
import singing from '../assets/singing.png';
import pao from '../assets/pao.png';
import circuit from '../assets/circuit.jpg';

const projectsData = [
    {
        title: 'Automatic Vocal Register Analysis',
        description:'During summer 2024, I have been pursuing a grant funded independent research project through the Emerson Foundation of Hamilton College. My goal has been to use computer vision and machine learning to create a vocal register classifier that will aid singers of all abilities in their understanding and application of singing techniques. Specifically, I was looking at vocal spectrograms and using SVM and CNN models to develop a robust classification method. This project combined both my passions for music and machine learning while challenging me to develop my front-end skills to create a versatile and intuitive tool for everyone.',
        image: singing,
        link:'https://github.com/yourusername/project-one'
    },
    {
        title: "Multi-tool Music Synthesizer",
        description: "For my Physics 245 final project, inspired by the metronome concept, I aimed to create a device that reflects my passion for music. While learning about filters, amplifiers, and digital-to-analog conversion, I became intrigued by how electronics principles relate to the audio production tools I studied in Music 270. Consequently, I proposed to build a music synthesizer capable of playing a full range of notes on a standard 88-key piano with various instrument sounds. The synthesizer would feature a drum pad, instrument switching, speaker control, and volume adjustment, all using hardware components like Op-Amps and FETs, an Adafruit Feather Arduino, and a CircuitPython program to bring it to life",
        image: circuit,
        link: 'https://github.com/yourusername/project-one'
    },
  {
    title: 'PlayCaller.ai',
    description: 'Over winter break of 2023, I brought to life my love for NBA basketball. As the game has changed since the three point revolution, I thought it would be fun to experiment with a Convolutional Neural Network to determine a teams likely hood of scoring or preventing scoring based on broadcasting images. Additionally, we added a tool that allows the user to design plays and run them through the model to judge potential offensive or defensive success',
    image: playcaller,
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Virtual Periacetabular Osteotomy',
    description: 'During my 2023 internship at BonePixel, I created an algorithm to simulate the Periacetabular Osteotomy procedure with 3D Mesh pelvises. As part of the larger VirtualHip project, I worked on the surgical treatment suggestion component using my programming and mathematical skills to accurately calculate and render the adjustments that could be made in such treatment plan',
    image: pao,
    link: 'https://github.com/yourusername/project-two'
  },
  
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="bg-gray-800 ">
      <div className='bg-gray-500 h-[2px] w-[100%] mt-[100px] mb-[100px]'></div>
      <div className='flex flex-col items-center '>
        <h1 className='text-white md:text-5xl font-bold'>Cool Stuff I've Made</h1>
      </div>
      <div className='flex flex-wrap justify-center items-center mt-[75px] max-w-[85%] mx-auto'>
        {projectsData.map((project, index) => (
          <div key={index} className='relative bg-blue-900 m-4 shadow-lg rounded-lg overflow-hidden w-[400px] h-[500px]'>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col p-4'>
              <div className='bg-white w-full h-[300px] rounded-t-lg overflow-hidden'>
                <img src={project.image} alt={project.title} className='w-full h-full object-cover' />
              </div>
              <div className='bg-gray-200 w-full flex-grow rounded-b-lg overflow-y-auto mt-4 p-4'>
                <h2 className='text-xl font-bold'>{project.title}</h2>
                <p className='text-gray-700'>{project.description}</p>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className='bg-[#00df9a] text-black px-4 py-2 rounded-md font-medium mt-4 inline-block'
                >
                  View Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
