import React from "react";

const UploadCard = ({ image, altText, text, openModal }) => {
  const clickHandler = () => {
    openModal(image, altText);
  };

  return (
    <div
      className="flex gap-8 shadow-lg border border-gray-400 rounded-xl p-5 cursor-pointer"
      onClick={clickHandler}
    >
      <img
        src={image}
        alt={altText}
        className="w-14"
      />
      <div className="flex flex-col font-bold text-xl text-gray-700">
        <span>Upload {text === "RSS Feed" ? "from " : ""}</span>
        <span>{text}</span>
      </div>
    </div>
  );
};

export default UploadCard;
