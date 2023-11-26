import React, { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import formatTimestamp from "../../utils/formatTimestamp";
import { Link, useNavigate, useParams } from "react-router-dom";

const Files = () => {
  const { files, deleteFile, setEditFileId } = useContext(ProjectContext);
  const { projectId } = useParams();
  const navigate = useNavigate();

  const handleDelete = (fileId) => {
    deleteFile(fileId);
  };

  const handleEdit = (fileId) => {
    setEditFileId(fileId);
    navigate(`/dashboard/project/transcript/${projectId}`);
  };

  return (
    <>
      <div className="flex justify-between items-center bg-primary rounded-lg px-10 py-6 my-4">
        <span className="text-white text-xl">
          All files are processed! Your widget is ready to go!
        </span>
        <button className="bg-white px-6 py-2 rounded font-semibold text-sm">
          Try it out!
        </button>
      </div>
      <div className="border border-gray-300 rounded-xl shadow-lg">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="px-12 py-3 text-left">Name</th>
              <th className="px-12 py-3 text-center">Upload Date & Time</th>
              <th className="px-12 py-3 text-center">Status</th>
              <th className="px-12 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files?.map((file) => {
              return (
                <tr
                  className="border-b border-gray-300 py-2"
                  key={file._id}
                >
                  <td className="px-12 py-3 text-left">{file.filename}</td>
                  <td className="px-12 py-3 text-center">
                    {formatTimestamp(file.createdAt)}
                  </td>
                  <td className="px-12 py-3 text-center">Done</td>
                  <td className="px-12 py-3 text-right flex items-center justify-end">
                    <button
                      className="w-14 h-7 text-sm border border-gray-300 rounded-l"
                      onClick={() => handleEdit(file._id)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 w-14 h-7 text-sm border border-gray-300 rounded-r"
                      onClick={() => handleDelete(file._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Files;
