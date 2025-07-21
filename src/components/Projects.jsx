import React, { useState, useEffect, useRef } from "react";

const projectsData = [
  {
    title: "AVRA - Automatic Vocal Register Analysis",
    description:
      "A full-stack application that allows musicians of all levels to further their understanding and application of vocal technique. Built during summer 2024 through an Emerson Foundation grant, this project combines computer vision and machine learning to create a vocal register classifier using spectrograms with SVM and CNN models.",
    link: "https://github.com/akim42003/AVRA",
    tech: [
      "Python",
      "JavaScript/React",
      "Scikit-Learn",
      "Computer Vision",
      "Pytorch",
    ],
    featured: true,
  },
  {
    title: "TensorKit-Learn",
    description:
      "A tensor-based machine learning library built for educational and personal purposes. This Python library provides fundamental ML algorithms and neural network implementations with a focus on learning and experimentation.",
    link: "https://github.com/akim42003/tensorkit-learn",
    tech: [
      "C++",
      "Python",
      "Machine Learning",
      "Neural Networks",
      "Data Structures",
    ],
    featured: true,
  },
  {
    title: "SOFIA",
    description:
      "A local computer use agent that automates desktop interactions and tasks through intelligent command processing. This AI-powered assistant can perform complex computer operations, file management, and application control to enhance productivity and streamline workflows.",
    link: "https://github.com/akim42003/SOFIA",
    tech: ["Python", "MCP", "Computer Vision", "System Integration", "LLM"],
    featured: true,
  },
  {
    title: "HandyFit",
    description:
      "Now on the App Store!A local calorie tracking application that harnesses computer vision to assess the nutritional content of meals. Users can analyze food images to automatically calculate calories, macronutrients, and dietary information, making nutrition tracking effortless and accurate.",
    link: "https://apps.apple.com/us/app/handyfit/id6748508963",
    tech: ["TypeScript", "React-Native"],
    featured: false,
  },
  {
    title: "Flappy Bot",
    description:
      "A Deep Q-Learning agent that plays Flappy Bird using reinforcement learning. This project demonstrates the application of DQN algorithms to game environments with impressive performance results.",
    link: "https://github.com/akim42003/Flappy-Bird-Free-For-All",
    tech: ["Python", "Deep Learning", "Reinforcement Learning"],
    featured: false,
  },
  {
    title: "Multi-tool Synthesizer Keyboard",
    description:
      "A hardware-software project creating a music synthesizer with full 88-key piano range, multiple instrument sounds, drum pad, and real-time controls using Arduino and CircuitPython.",
    link: "https://github.com/akim42003/Multi-tool-Synthesizer-Keyboard",
    tech: ["Python", "Arduino", "Hardware"],
    featured: false,
  },
  {
    title: "PlayCaller.ai",
    description:
      "NBA analytics tool using CNN to predict scoring likelihood from game broadcast images. Features play design interface and defensive/offensive success prediction based on court positioning.",
    link: "https://github.com/akim42003/PlayCaller.ai",
    tech: ["Python", "Computer Vision", "CNN finetuning"],
    featured: false,
  },
  {
    title: "ZQ",
    description:
      "A Python-based hands-free text editor that enables voice-controlled document editing and code writing. Features natural language processing for command interpretation, making text editing accessible and efficient through voice commands and automation.",
    link: "https://github.com/akim42003/ZQ",
    tech: ["Python", "Speech Recognition", "NLP"],
    featured: false,
  },
  {
    title: "NBA Prospect Potential",
    description:
      "Comprehensive NBA analytics project built for CS 307. Implements advanced statistical analysis, player performance metrics, and predictive modeling for basketball data insights and team strategy optimization.",
    link: "https://github.com/akim42003/nba-prospect-potential",
    tech: ["Python", "Matplotlib", "Scikit-Learn", "Neural Networks"],
    featured: false,
  },
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});
  const [visibleElements, setVisibleElements] = useState(new Set());
  const elementRefs = useRef({});
  const featuredProjects = projectsData.filter((project) => project.featured);
  const otherProjects = projectsData.filter((project) => !project.featured);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleElements((prev) =>
            new Set(prev).add(entry.target.dataset.id),
          );
        }
      });
    }, observerOptions);

    Object.values(elementRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      const currentRefs = elementRefs.current;
      Object.values(currentRefs).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const toggleProjectExpansion = (index) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="py-20">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-16"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={(el) => (elementRefs.current["header"] = el)}
          data-id="header"
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            visibleElements.has("header")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A collection of projects showcasing machine learning, web
            development, and creative technology
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (elementRefs.current[`featured-${index}`] = el)}
              data-id={`featured-${index}`}
              className={`glass-morphism rounded-2xl group transition-all duration-700 ease-out ${
                visibleElements.has(`featured-${index}`)
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95"
              } hover:transform hover:-translate-y-2 hover:shadow-2xl`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-white/10 text-blue-300 rounded-full border border-blue-300/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg font-medium text-white transition-colors duration-200 transform hover:scale-105"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">
            Other{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
              Projects
            </span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => {
            const isExpanded = expandedProjects[index];
            const shortDescription =
              project.description.length > 120
                ? project.description.substring(0, 120) + "..."
                : project.description;

            return (
              <div
                key={index}
                ref={(el) => (elementRefs.current[`other-${index}`] = el)}
                data-id={`other-${index}`}
                className={`glass-morphism rounded-xl p-6 group transition-all duration-500 ease-out ${
                  visibleElements.has(`other-${index}`)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } hover:transform hover:-translate-y-1 hover:shadow-xl`}
                style={{ transitionDelay: `${Math.min(index * 50, 300)}ms` }}
              >
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm mb-4">
                  {isExpanded ? project.description : shortDescription}
                </p>
                {project.description.length > 120 && (
                  <button
                    onClick={() => toggleProjectExpansion(index)}
                    className="text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors duration-300 mb-4"
                  >
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                )}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-white/10 text-blue-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-300"
                >
                  View Project →
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
