import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EntranceSequence from "./components/EntranceSequence";

function App() {
  const [showEntrance, setShowEntrance] = useState(true);

  const handleEntranceComplete = () => {
    setShowEntrance(false);
  };

  return (
    <div>
      {showEntrance ? (
        <EntranceSequence onComplete={handleEntranceComplete} />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
