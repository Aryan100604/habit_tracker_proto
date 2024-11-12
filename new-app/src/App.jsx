import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";
import { createContext } from "react";
export const AppContext = createContext();

import "./App.css";

function App() {
  const [category, setCategory] = useState([
    { id: 1, categoryName: "Health", completedTask: 0, totalTask: 0 },
  ]);
  return (
    <AppContext.Provider value={{ category, setCategory }}>
      <Router>
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
      </Router>
    </AppContext.Provider>
  );
}

export default App;
