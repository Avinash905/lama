import React from "react";

const Input = ({ type, value, id, label, description }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="font-bold text-lg text-gray-700"
      >
        {label}
      </label>
      <div className="w-full flex gap-2">
        <input
          type={"text"}
          name={id}
          id={id}
          value={value}
        />
        {type === "color" && (
          <div className={`bg-[#7BD568] w-11 h-10 rounded-lg`}></div>
        )}
      </div>
      {description && (
        <span className="text-xs text-gray-600">{description}</span>
      )}
    </div>
  );
};

export default Input;
