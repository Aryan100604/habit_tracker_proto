import { useState, useContext } from "react";
import { AppContext } from "../App";

const Home = () => {
  const { category, setCategory } = useContext(AppContext);
  const { task, setTask } = useContext(AppContext);
  const { taskamount, setTaskamount } = useContext(AppContext);
  const { taskdone, setTaskdone } = useContext(AppContext);
  const { todoList, setTodoList } = useContext(AppContext);
  const { selectedValue, setSelectedValue } = useContext(AppContext);

  function addTask() {
    setTaskamount(taskamount + 1);
    setTodoList([...todoList, { task, selectedValue }]);
    const updatedCategories = category.map((item) => {
      if (item.categoryName === selectedValue) {
        return { ...item, totalTask: item.totalTask + 1 };
      }
      return item;
    });

    setCategory(updatedCategories);
  }

  function CompleteTask(item, index) {
    setTaskdone(taskdone + 1);
    setTodoList(todoList.filter((element, i) => i != index));
    const updateCategories = category.map((Categoryitem) => {
      if (Categoryitem.categoryName === item.selectedValue) {
        return {
          ...Categoryitem,
          completedTask: Categoryitem.completedTask + 1,
        };
      }
      return Categoryitem;
    });
    setCategory(updateCategories);
  }

  function NotComplete(item, index) {
    setTodoList(todoList.filter((element, i) => i != index));
  }
  return (
    <div className="App">
      <h1>Score of today is {`${taskdone}/${taskamount}`}</h1>
      <input
        type="text"
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />

      <button onClick={addTask}>Add Task</button>
      <select
        name="new_category"
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        {category.map((item) => {
          return (
            <option key={item.id} value={item.categoryName}>
              {item.categoryName}
            </option>
          );
        })}
      </select>
      {todoList.map((item, index) => {
        return (
          <div>
            <p key={index}>{`${item.task} ${item.selectedValue}`}</p>
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
