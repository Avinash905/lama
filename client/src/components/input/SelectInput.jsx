import React from "react";

const SelectInput = ({ options, id, label, inputValues, handleChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="font-bold text-lg text-gray-700"
      >
        {label}
      </label>

      <select
        name={id}
        id={id}
        className="px-3 py-2 border border-gray-400 rounded-lg w-full"
        value={inputValues.id}
        onChange={handleChange}
      >
        {options.map((option, i) => {
          return (
            <option
              key={i}
              value={option}
              className="px-3 py-2"
            >
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
