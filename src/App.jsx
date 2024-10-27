import React, { useState } from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:bg-gray-900 p-6">
        <Router>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Results />
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
