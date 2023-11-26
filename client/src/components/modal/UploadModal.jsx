import React, { useContext, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { ModalContext } from "../../contexts/ModalContext";
import { ProjectContext } from "../../contexts/ProjectContext";
import { useParams } from "react-router-dom";
import Button from "../button/Button";

const UploadModal = ({ clickedCardData }) => {
  const { uploadModalOpen, closeUploadModal } = useContext(ModalContext);
  const { projectId } = useParams();
  const { isLoading, uploadFile } = useContext(ProjectContext);
  const [filename, setFileName] = useState("");
  const [description, setDescription] = useState("");

  const handleUpload = () => {
    if (!filename || !description) return;

    uploadFile({ projectId, filename, description });
    setFileName("");
    setDescription("");

    if (!isLoading) closeUploadModal();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        uploadModalOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-6 rounded-lg w-1/2 flex flex-col gap-6">
        <IoCloseOutline
          className="absolute text-2xl font-bold top-4 right-4 cursor-pointer rounded-full hover:bg-gray-100"
          onClick={closeUploadModal}
        />
        <div className="flex gap-4 items-center">
          <img
            src={clickedCardData.image}
            alt={clickedCardData.text}
            className="w-12"
            loading="lazy"
          />
          <h2 className="font-bold text-2xl text-gray-700">
            Upload from {clickedCardData.text}
          </h2>
        </div>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="name"
              className="text-lg text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Type here"
              value={filename}
              onChange={(event) => setFileName(event.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label
              htmlFor="description"
              className="text-lg text-gray-600"
            >
              Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Type here"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </form>
        <Button
          content={"Upload"}
          customCss={
            "text-white bg-gray-800 py-2 px-6 rounded-md w-[99px] ml-auto"
          }
          handleClick={handleUpload}
          loading={isLoading}
        />
      </div>
    </div>
  );
};

export default UploadModal;
