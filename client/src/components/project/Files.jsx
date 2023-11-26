import React, { useContext } from "react";
import { ProjectContext } from "../../contexts/ProjectContext";
import formatTimestamp from "../../utils/formatTimestamp";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../button/Button";

const Files = () => {
  const { files, deleteFile, setEditFileId, isLoading } =
    useContext(ProjectContext);
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
        <Button
          content={"Try it out!"}
          customCss={"bg-white px-6 py-2 rounded font-semibold text-sm"}
        />
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
                    <Button
                      content={"Edit"}
                      customCss={
                        "w-14 h-7 text-sm border border-gray-300 rounded-l"
                      }
                      handleClick={() => handleEdit(file._id)}
                    />
                    <Button
                      content={"Delete"}
                      customCss={
                        "text-red-500 w-14 h-7 text-sm border border-gray-300 rounded-r"
                      }
                      handleClick={() => handleDelete(file._id)}
                    />
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
