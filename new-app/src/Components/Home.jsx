import { useState, useContext, useEffect } from "react";
import { AppContext } from "../App";
import axios from "axios";
const Home = () => {
  const {
    category,
    setCategory,
    task,
    setTask,
    taskamount,
    setTaskamount,
    taskdone,
    setTaskdone,
    todoList,
    setTodoList,
    selectedValue,
    setSelectedValue,
  } = useContext(AppContext);
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get(
          "https://api.api-ninjas.com/v1/quotes?category=inspirational",
          {
            headers: {
              "X-Api-Key": "rAdGZU7DaVv61Z4p41cALw==lzwKAGuiRmJXJzzp",
            },
          }
        );

        // Set the quote and author state
        setQuote(response.data[0].quote);
        setAuthor(response.data[0].author);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

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
      <h1 className="today-score">
        Score of today is {`${taskdone}/${taskamount}`}
      </h1>
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
            <h3 key={index}>{`${item.task}`}</h3>
            <p style={{ color: "red", padding: "5px" }}>{item.selectedValue}</p>
            <button onClick={() => CompleteTask(item, index)}>Completed</button>
            <button onClick={() => NotComplete(item, index)}>
              Not Completed
            </button>
          </div>
        );
      })}
      <div className="quotes">
        <h2>Remember</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="quote-container">
            <h3>"{quote}"</h3>
            <p>- {author}</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default Home;
