import { useState, useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { category, setCategory } = useContext(AppContext);
  const [taskamout, setTaskamout] = useState(0);
  const [taskdone, setTaskdone] = useState(0);
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  function addTask() {
    setTodoList([...todoList, task]);
    setTaskamout(taskamout + 1);
  }

  function CompleteTask(item, index) {
    setTaskdone(taskdone + 1);
    setTodoList(todoList.filter((element, i) => i != index));
  }

  function NotComplete(item, index) {
    setTodoList(todoList.filter((element, i) => i != index));
  }
  return (
    <div className="App">
      <h1>Score of today is {`${taskdone}/${taskamout}`}</h1>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <button onClick={addTask}>Add Task</button>
      {todoList.map((item, index) => {
        return (
          <div>
            <p key={index}>{item}</p>
            <button onClick={() => CompleteTask(item, index)}>Completed</button>
            <button onClick={() => NotComplete(item, index)}>
              Not Completed
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Home;
