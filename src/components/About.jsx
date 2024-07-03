import React, { useState } from 'react';
import selfie from '../assets/selfie.jpeg';

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
    <div className = 'bg-gray-500 h-[2px] w-[100%] mt-[100px]'></div>
    <div className='text-white max-w-[85%] mx-auto p-4 flex flex-row mt-[100px]'>
      <div className='w-2/3'>
        <h1 className='text-3xl font-bold mb-4'>About Me</h1>
        <p className = 'text-white font-semibold'>
          Currently, I'm a senior at Hamilton College studying Mathematics and Music. Ever since I can remember, I've had a passion for creating things—whether it's through music, legos, or lines of code. 
          I first discovered the possibilities of machine learning the summer after my freshman year during my internship at the Boston Children's Hospital Musculoskeletal Informatics Group 
          (look right for my pic with one of the DGX GPU stations). 
        </p>
        {showMore && (
          <p className = 'text-white font-semibold'>
            As a Data Science Intern, I helped process and verify the quality of the dataset and even wrote a little image feature extraction program as my first experience with computer vision.
            More importantly, I got to see the impact ML can have in an industry like health care where my work contributed to a 3D Model segmentation pipeline and an NLP treatment planning project. 
            I returned the next year with the off-shoot startup, BonePixel, writing 3D modeling algorithms following my Data Structures and Algorithms course work. 
            I really fell in love with coding this summer and began to venture out into my own projects through hackathons or just in my spare time. These projects led me to learn and experiment with machine learning—particularly in computer vision. 
            After a couple of machine learning projects of my own, I was granted an Emerson Fellowship for summer 2024 where I developed a vocal register classification pipeline and integrated it with a musician-friendly GUI to assist singers of all levels 
            with their understanding and application of technique. I am hoping this tool will prove especially useful to my acapella group, The Buffers. Outside of STEM and music, I enjoy basketball, skateboarding, cooking meals with my family, and crocheting.
          </p>
        )}
        <button onClick={toggleShowMore} className='font-medium  text-[#00df9a] '>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
      <img src={selfie} alt='Alexander Kim' className='w-1/3 h-[100%] rounded-full  mb-4 mx-[20px]' />
    </div>
    </div>
  );
}

export default About;
