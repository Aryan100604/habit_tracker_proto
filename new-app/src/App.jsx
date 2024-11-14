import { useState } from "react";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./Components/Profile";
import { createContext } from "react";
import Signup from "./Components/Signup";
export const AppContext = createContext();

import "./App.css";

function App() {
  const [category, setCategory] = useState([
    { id: 1, categoryName: "Health", completedTask: 0, totalTask: 0 },
  ]);
  const [taskamount, setTaskamount] = useState(0);
  const [taskdone, setTaskdone] = useState(0);
  const [task, setTask] = useState("");

  const [todoList, setTodoList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  return (
    <AppContext.Provider
      value={{
        category,
        setCategory,
        taskamount,
        setTaskamount,
        taskdone,
        setTaskdone,
        task,
        setTask,
        todoList,
        setTodoList,
        selectedValue,
        setSelectedValue,
        name,
        setName,
        password,
        setPassword,
        email,
        setEmail,
      }}
    >
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
                <li>
                  <Link to="/signup">
                    <button>SignUp</button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
