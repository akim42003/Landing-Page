import React, { useState } from "react";

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(null);

  const timelineData = [
    {
      id: 1,
      date: "Summer-Fall 2022",
      title: "Data Science Intern",
      organization: "Boston Children's Hospital",
      description:
        "Helped process and verify dataset quality and wrote image feature extraction programs as my first experience with computer vision. Contributed to 3D model segmentation pipelines and NLP treatment planning projects.",
      category: "internship",
    },
    {
      id: 2,
      date: "Summer 2023",
      title: "Research Assistant",
      organization: "Boston Children's Hospital",
      description:
        "Returned to write 3D modeling algorithms. This experience led me to explore personal projects through hackathons and experiments with computer vision.",
      category: "research",
    },
    {
      id: 3,
      date: "Summer 2024",
      title: "Emerson Fellowship",
      organization: "Hamilton College",
      description:
        "Developed a vocal register classification pipeline with a musician-friendly GUI. This tool helps singers understand and apply technique, particularly useful for my acapella group, The Buffers.",
      category: "research",
    },
    {
      id: 4,
      date: "May 2024",
      title: "Graduation",
      organization: "Hamilton College",
      description:
        "Completed degree in Mathematics with a minor in Music. Culmination of four years of interdisciplinary study combining analytical and creative pursuits.",
      category: "education",
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "internship":
        return "from-blue-400 to-cyan-500";
      case "research":
        return "from-purple-400 to-pink-500";
      case "fellowship":
        return "from-green-400 to-teal-500";
      case "education":
        return "from-orange-400 to-red-500";
      default:
        return "from-cyan-400 to-blue-500";
    }
  };

  return (
    <div className="w-full py-8">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">
          My{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
            Journey
          </span>
        </h3>
        <p className="text-gray-400">Hover over each milestone to learn more</p>
      </div>

      <div className="relative">
        {/* Timeline items */}
        <div className="flex justify-between items-start relative px-4">
          {/* Horizontal timeline line - positioned after dots */}
          <div className="absolute top-4 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          {timelineData.map((item, index) => (
            <div
              key={item.id}
              className="flex flex-col items-center relative timeline-item-horizontal"
              style={{ flex: 1 }}
            >
              {/* Timeline dot */}
              <div
                className={`w-4 h-4 rounded-full bg-gradient-to-r ${getCategoryColor(item.category)}
                  border-2 border-white shadow-lg cursor-pointer transition-all duration-300 hover:scale-125
                  ${activeItem === item.id ? "scale-125 shadow-xl" : ""}`}
                onMouseEnter={() => setActiveItem(item.id)}
                onMouseLeave={() => setActiveItem(null)}
              ></div>

              {/* Icon and Title */}
              <div className="text-center mt-3">
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-white font-semibold text-sm leading-tight">
                  {item.title}
                </div>
                <div className="text-gray-400 text-xs mt-1">
                  {item.organization}
                </div>
              </div>

              {/* Date */}
              <div className="text-xs text-cyan-300 font-semibold mt-2 text-center">
                {item.date}
              </div>

              {/* Expandable description */}
              <div
                className={`mt-4 transition-all duration-500 overflow-hidden ${
                  activeItem === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="glass-morphism p-4 rounded-lg max-w-xs">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center mt-8 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-cyan-500"></div>
          <span className="text-gray-400 text-sm">Internship</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500"></div>
          <span className="text-gray-400 text-sm">Research</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500"></div>
          <span className="text-gray-400 text-sm">Education</span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
