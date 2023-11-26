import React, { useContext } from "react";
import { Button } from "..";
import { ProjectContext } from "../../contexts/ProjectContext";

const AdvancedTab = ({ handleSave }) => {
  const { isLoading } = useContext(ProjectContext);

  return (
    <Button
      content={"Save Changes"}
      customCss={"bg-primary text-white rounded-md text-sm px-4 py-2 w-[121px]"}
      handleClick={handleSave}
      loading={isLoading}
    />
  );
};

export default AdvancedTab;
