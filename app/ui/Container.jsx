import React from "react";

function Container({ children, className }) {
  return (
    <div className={`shadow rounded-md p-3 bg-white ${className}`}>
      {children}
    </div>
  );
}

export default Container;
