import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";

function App() {
  // Check URL params to see if we should skip loading
  const urlParams = new URLSearchParams(window.location.search);
  const skipLoading = urlParams.get('skipLoading') === 'true' || urlParams.get('skip') === 'true';
  
  const [isLoading, setIsLoading] = useState(!skipLoading);
  const [showContent, setShowContent] = useState(skipLoading);

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
        <>
          <Navbar />
          <div className="page-enter page-enter-active">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
