import React from "react";

function Container({ children, className }) {
  return (
    <div className={`shadow rounded-md  bg-white ${className}`}>
      {children}
    </div>
  );
}

export default Container;
