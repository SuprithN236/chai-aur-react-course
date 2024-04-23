import React, { useContext } from "react";
import userContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>Welcome {user}</h1>
    </div>
  );
}

export default Profile;
