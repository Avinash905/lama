import React from "react";

const AdvancedTab = ({ handleSave }) => {
  return (
    <button
      className="bg-primary text-white rounded-md text-sm px-4 py-2"
      onClick={handleSave}
    >
      Save Changes
    </button>
  );
};

export default AdvancedTab;
