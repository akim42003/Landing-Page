import React from "react";
import headshot from "../assets/lebron.jpg"; // Adjust the path to your actual image location

// Assuming you have icons or image assets for each technology
import reactIcon from "../assets/react.svg";
import pytorchIcon from "../assets/pytorch.svg";
import scikitIcon from "../assets/scikit-learn.svg";
import epicIcon from "../assets/epic_systems.svg";
import postgresqlIcon from "../assets/PostgresSQL.svg";
import pythonIcon from "../assets/Python.svg";
import latexIcon from "../assets/LaTeX.svg";
import cppIcon from "../assets/C++ (CPlusPlus).svg";
import opencvIcon from "../assets/opencv.svg";
import githubIcon from "../assets/github-icon-1-logo-svgrepo-com.svg";
import linuxIcon from "../assets/linux-svgrepo-com.svg";
import dockerIcon from "../assets/docker-svgrepo-com.svg";
import tsIcon from "../assets/typescript.svg";
import cudaIcon from "../assets/cuda-svgrepo-com.svg";
import resume from "../assets/swe_resume.pdf";
import academic_cv from "../assets/CV_1_col.pdf";

const Hero = () => {
  return (
    <div className="text-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20 mt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <img
              src={headshot}
              alt="Alex Kim"
              className="w-80 h-80 rounded-full mx-auto glass-morphism p-2 hover-lift"
            />
          </div>
          <div className="animate-slide-in-right space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Creative &
              <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
                {" "}
                Interdisciplinary
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-gray-200">
              Machine Learning & Software Solutions
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Hi I'm Alex! I enjoy building things with data, sports, and math.
              I create full-stack applications, ML/AI solutions, and electronics
              to learn, and solve problems across diverse disciplines and
              research areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href={academic_cv} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Academic CV
                </button>
              </a>
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Resume
                </button>
              </a>
              <a href="#projects">
                <button className="glass-morphism hover-lift px-8 py-4 rounded-xl font-semibold text-white border border-white/20 hover:bg-white/10 transition-all duration-300">
                  View Projects
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-16"></div>

      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Favorite{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Technologies
            </span>
          </h2>
        </div>
        <div className="animate-fade-in">
          <Technologies />
        </div>
      </div>
    </div>
  );
};

const Technologies = () => {
  const technologies = [
    { name: "C++", icon: cppIcon },
    { name: "Python", icon: pythonIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Cuda", icon: cudaIcon },
    { name: "Linux", icon: linuxIcon },
    { name: "docker", icon: dockerIcon },
    { name: "PyTorch", icon: pytorchIcon },
    { name: "OpenCV", icon: opencvIcon },
    { name: "Scikit-Learn", icon: scikitIcon },
    { name: "React/Expo", icon: reactIcon },
    { name: "LaTeX", icon: latexIcon },
    { name: "PostgreSQL", icon: postgresqlIcon },
    { name: "Github", icon: githubIcon },
    { name: "Epic EHR", icon: epicIcon },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-6xl mx-auto">
      {technologies.map((tech, index) => (
        <div
          key={index}
          className="flex flex-col items-center glass-morphism p-6 rounded-2xl tech-card-hover floating-tech group cursor-pointer"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="tech-icon-3d">
            <img
              src={tech.icon}
              alt={`${tech.name} icon`}
              className="w-16 h-16 mb-3"
            />
          </div>
          <p className="text-sm font-medium text-center text-gray-200 group-hover:text-white transition-colors duration-300">
            {tech.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Hero;
