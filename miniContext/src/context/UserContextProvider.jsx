import React, { useState } from "react";
import userContext from "./UserContext";

// you need to pass children here because it represents all the elements you are going to write inside UserContextProvider element. it just represents them.
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    // every context has a provider which provides the values you are going to use inside the elements - children. when you wrap elements inside the context provider, you will get access to all of these values.
    // you are passing data using the value and you are sending it in the form of an object.
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
