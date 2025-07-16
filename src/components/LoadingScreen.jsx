import React, { useState, useEffect } from "react";

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onLoadingComplete();
          }, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/50 to-indigo-900/50"></div>

      {/* Animated floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="floating-shape-circle bg-gradient-to-br from-cyan-400/15 to-blue-500/15 backdrop-blur-sm"
          style={{ width: "60px", height: "60px", left: "10%", top: "20%" }}
        />
        <div
          className="floating-shape-square bg-gradient-to-br from-purple-400/15 to-pink-500/15 backdrop-blur-sm"
          style={{ width: "40px", height: "40px", left: "80%", top: "30%" }}
        />
        <div
          className="floating-shape-triangle bg-gradient-to-br from-green-400/15 to-teal-500/15 backdrop-blur-sm"
          style={{ width: "50px", height: "50px", left: "20%", top: "70%" }}
        />
        <div
          className="floating-shape-hexagon bg-gradient-to-br from-blue-400/15 to-indigo-500/15 backdrop-blur-sm"
          style={{ width: "45px", height: "45px", left: "70%", top: "15%" }}
        />
        <div
          className="floating-shape-circle bg-gradient-to-br from-pink-400/15 to-rose-500/15 backdrop-blur-sm"
          style={{ width: "35px", height: "35px", left: "85%", top: "75%" }}
        />
        <div
          className="floating-shape-square bg-gradient-to-br from-cyan-400/15 to-blue-500/15 backdrop-blur-sm"
          style={{ width: "55px", height: "55px", left: "15%", top: "85%" }}
        />
      </div>

      <div className="relative z-10 text-center space-y-8">
        {/* Main logo/name with typewriter effect */}
        <div className="space-y-4 px-4">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold text-white animate-pulse">
            <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              AK
            </span>
          </h1>
          <div className="loading-typewriter text-base sm:text-xl md:text-2xl text-gray-300 max-w-sm sm:max-w-none mx-auto">
            Alex Kim: AI, ML, and Software Developer
          </div>
        </div>

        {/* Loading progress */}
        <div className="w-full max-w-xs sm:w-80 mx-auto space-y-4 px-4">
          <div className="relative">
            <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center text-xs sm:text-sm text-gray-400">
            <span>Loading portfolio...</span>
            <span>{progress}%</span>
          </div>
        </div>

        {/* Rotating tech icons */}
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-8">
          <div className="loading-icon">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg animate-spin"></div>
          </div>
          <div className="loading-icon" style={{ animationDelay: "0.2s" }}>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg animate-spin"></div>
          </div>
          <div className="loading-icon" style={{ animationDelay: "0.4s" }}>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg animate-spin"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
