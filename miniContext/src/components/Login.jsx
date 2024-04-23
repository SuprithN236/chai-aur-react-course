import React, { useContext, useState } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //   destructuring of the object values u sent in usercontext.provider
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser(username);
  };

  return (
    <div>
      <h2>Login here</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}></button>
    </div>
  );
}

export default Login;
