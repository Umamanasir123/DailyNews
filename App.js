import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                pageSize={12}
                country="in"
                category="technology"
              />
            }
          />
          <Route exact path="/health"  element={<News key="health" pageSize={12} country="in" category="health" />}/>
          <Route
            exact
            path="/home"
            element={
              <News
                key="general"
                pageSize={12}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                pageSize={12}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                pageSize={12}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/cricket"
            element={
              <News key="sports" pageSize={12} country="in" category="sports" />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                pageSize={12}
                country="in"
                category="entertainment"
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
