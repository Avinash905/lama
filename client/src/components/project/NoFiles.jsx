import React from "react";
import { cloudUpload } from "../../assets";

const NoFiles = () => {
  return (
    <>
      <span className="text-gray-400 text-center text-xl">or</span>
      <div className="flex flex-col gap-2 items-center p-6 border-2 border-dashed rounded-xl border-gray-500">
        <img
          src={cloudUpload}
          alt="file upload"
          className="w-20"
          loading="lazy"
        />
        <p className="text-lg">
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-gray-500">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file
        </p>
        <button className="rounded-full py-2 px-6 text-primary border border-primary">
          Select File
        </button>
      </div>
    </>
  );
};

export default NoFiles;
