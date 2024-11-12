import { useContext, useState } from "react";
import { AppContext } from "../App";

const Profile = () => {
  const [InputName, setInputName] = useState("");
  const { category, setCategory } = useContext(AppContext);

  function AddCategory(name) {
    setCategory([
      ...category,
      {
        id: category.length + 1,
        categoryName: name,
        completedTask: 0,
        totalTask: 0,
      },
    ]);
  }
  return (
    <div className="Profile">
      <input type="text" onChange={(e) => setInputName(e.target.value)} />
      <button onClick={() => AddCategory(InputName)}>Add Category</button>
      {category.map((Category) => {
        return (
          <h3>{`${Category.id}  ${Category.categoryName}   ${Category.completedTask}/${Category.totalTask}`}</h3>
        );
      })}
    </div>
  );
};
export default Profile;
