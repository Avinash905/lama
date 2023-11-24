import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const UploadModal = ({ isModalOpen, closeModal, clickedCardData }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isModalOpen ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 bg-white p-6 rounded-lg w-1/2 flex flex-col gap-6">
        <IoCloseOutline
          className="absolute text-2xl font-bold top-4 right-4 cursor-pointer rounded-full hover:bg-gray-100"
          onClick={closeModal}
        />
        <div className="flex gap-4 items-center">
          <img
            src={clickedCardData.image}
            alt={clickedCardData.text}
            className="w-12"
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </form>
        <button className="text-white bg-gray-800 py-2 px-6 rounded-md w-fit ml-auto">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadModal;
