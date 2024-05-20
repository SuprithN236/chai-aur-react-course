import React from "react";

// a container element which is used as a container and is a good practice that is often seen in production based projects
function Container({ children }) {
  return <div className="w-full max-w-7xl mx-auto px-4">{children}</div>;
}

export default Container;
