import React, { useState } from "react";
import './App.css';

import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Bg from "./Components/newpic.jpg"

import Nav from "./Components/Nav";
import News from "./Components/News";

const App = () => {
  const [progress, setProgress] = useState(0);

  const handleSetProgress = (newProgress) => {
    setProgress(newProgress);
  };

  const pageSize = 100;
  const apiKey = "b345f5e60c164b96a3d0472e44433c46";

  return (
    <div className="main" >
      <BrowserRouter>
        <Nav />
        <LoadingBar
          color="red"
          progress={progress}
          height={2.3}
        />
        <News setProgress={handleSetProgress} apiKey={apiKey} key="1" pageSize={pageSize} country="in" category="general" />

        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="1" pageSize={pageSize} country="in" category="general" />}
          />
          <Route
            exact
            path="/science"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="2" pageSize={pageSize} country="in" category="science" />}
          />
          <Route
            exact
            path="/business"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="3" pageSize={pageSize} country="in" category="business" />}
          />
          <Route
            exact
            path="/entertainment"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="4" pageSize={pageSize} country="in" category="entertainment" />}
          />
          <Route
            exact
            path="/health"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="5" pageSize={pageSize} country="in" category="health" />}
          />
          <Route
            exact
            path="/sport"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="6" pageSize={pageSize} country="in" category="sport" />}
          />
          <Route
            exact
            path="/technology"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="7" pageSize={pageSize} country="in" category="technology" />}
          />
          <Route
            exact
            path="/sports"
            element={<News setProgress={handleSetProgress} apiKey={apiKey} key="8" pageSize={pageSize} country="in" category="sports" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
