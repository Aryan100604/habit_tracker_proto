import { useContext, useState } from "react";
import { AppContext } from "../App";

const Signup = () => {
  const { setName, setPassword, setEmail } = useContext(AppContext);

  const [tempname, setTempname] = useState("");
  const [tempass, setTempass] = useState("");
  const [tempemail, setTempemail] = useState("");
  return (
    <div className="Signup">
      <input
        type="text"
        name="name"
        placeholder="Enter your Name"
        onChange={(e) => setTempname(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Enter your Email"
        onChange={(e) => setTempemail(e.target.value)}
      />
      <input
        type="password"
        name="pass"
        placeholder="Enter your Password"
        onChange={(e) => setTempass(e.target.value)}
      />
      <button
        onClick={() => {
          setName(tempname);
          setPassword(tempass);
          setEmail(tempemail);
          alert("You are signed In");
        }}
      >
        Submit
      </button>
    </div>
  );
};
export default Signup;
