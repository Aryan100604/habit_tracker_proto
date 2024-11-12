import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <div className="logo">
          <h2>Life On Track</h2>
        </div>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                <button>Profile</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default App;
