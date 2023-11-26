import React, { useContext, useState } from "react";
import { ImPencil } from "react-icons/im";
import { IoMdSearch } from "react-icons/io";
import { ProjectContext } from "../../contexts/ProjectContext";

const EditTranscript = ({}) => {
  const {
    editMode,
    files,
    toggleEditMode,
    editingFileId,
    updateFileDescription,
  } = useContext(ProjectContext);
  const fileDescription = files?.filter((file) => file._id === editingFileId)[0]
    .description;
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
            <button
              className="text-red-500 border-2 border-red-500 font-semibold py-2 px-6 rounded-md w-fit ml-auto"
              onClick={toggleEditMode}
            >
              Discard
            </button>
            <button
              className="text-white bg-gray-800 py-2 px-6 rounded-md w-fit ml-auto"
              onClick={handleSave}
            >
              Save & exit
            </button>
          </div>
        )}
      </div>
      <div className="border-2 border-primary rounded-xl pt-2 pb-6 pl-4 pr-8 flex flex-col gap-4 h-[500px]">
        <div className="flex items-center justify-between pr-8">
          <button
            className="text-white bg-gray-600 py-2 px-4 rounded-full text-xs flex items-center gap-1"
            onClick={toggleEditMode}
          >
            <ImPencil />
            Edit Mode
          </button>
          <button className="text-primary bg-primaryLight border-2 border-primary font-semibold p-0.5 rounded-full w-fit ml-auto">
            <IoMdSearch />
          </button>
        </div>
        <textarea
          className="flex flex-col gap-2 overflow-auto text-lg pr-4 outline-none"
          rows={15}
          disabled={!editMode}
          onChange={(event) => setDescription(event.target.value)}
        >
          {description}
        </textarea>
      </div>
    </section>
  );
};

export default EditTranscript;
