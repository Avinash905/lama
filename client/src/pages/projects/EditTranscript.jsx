import React, { useContext, useEffect, useState } from "react";
import { ImPencil } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";
import { ProjectContext } from "../../contexts/ProjectContext";
import { Button } from "../../components";

const EditTranscript = ({}) => {
  const {
    editMode,
    files,
    toggleEditMode,
    editingFileId,
    updateFileDescription,
    isLoading,
  } = useContext(ProjectContext);
  const fileDescription = files?.filter((file) => file._id === editingFileId)[0]
    ?.description;
  const [description, setDescription] = useState(fileDescription);

  const handleSave = () => {
    updateFileDescription(editingFileId, description);
    toggleEditMode();
  };

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="sub-heading mb-4">Edit Transcript</h2>
        {editMode && (
          <div className="flex gap-2">
            <Button
              content={"Discard"}
              customCss={
                "text-red-500 border-2 border-red-500 font-semibold py-2 px-6 rounded-md w-fit ml-auto"
              }
              handleClick={toggleEditMode}
            />
            <Button
              content={"Save & exit"}
              customCss={
                "text-white bg-gray-800 py-2 px-6 rounded-md w-fit ml-auto"
              }
              handleClick={handleSave}
              loading={isLoading}
            />
          </div>
        )}
      </div>
      <div className="border-2 border-primary rounded-xl pt-2 pb-6 pl-4 pr-8 flex flex-col gap-4 h-[500px]">
        <div className="flex items-center justify-between pr-8">
          <Button
            content={"Edit Mode"}
            icon={<ImPencil />}
            customCss={
              "text-white bg-gray-600 py-2 px-4 rounded-full text-xs gap-2 flex-row-reverse"
            }
            handleClick={toggleEditMode}
            loading={isLoading}
          />
          <Button
            icon={<IoMdSearch />}
            customCss={
              "text-primary bg-primaryLight border-2 border-primary font-semibold p-0.5 rounded-full w-fit ml-auto"
            }
          />
        </div>
        <textarea
          className="flex flex-col gap-2 overflow-auto text-lg pr-4 outline-none"
          rows={15}
          disabled={!editMode}
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        ></textarea>
      </div>
    </section>
  );
};

export default EditTranscript;
