import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setTimeout(() => {
      setShowContent(true);
    }, 300);
  };

  return (
    <div>
      {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      {showContent && (
        <div className="page-enter page-enter-active">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
