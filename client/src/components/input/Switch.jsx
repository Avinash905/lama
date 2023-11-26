import React from "react";

const Switch = ({ inputValues, handleChange }) => {
  const toggleClass = " transform translate-x-5";

  return (
    <div
      className="w-12 h-6 flex items-center bg-primary rounded-full p-1 cursor-pointer"
      id="showSources"
      onClick={handleChange}
    >
      {/* Switch */}
      <div
        className={
          "bg-white h-5 w-5 rounded-full shadow-md transform duration-300 z-10 ease-in-out" +
          (inputValues.showSources ? toggleClass : null)
        }
      ></div>
    </div>
  );
};

export default Switch;
