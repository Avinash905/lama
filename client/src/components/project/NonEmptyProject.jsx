import React from "react";

const NonEmptyProject = () => {
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
            <tr className="border-b border-gray-300 py-2">
              <td className="px-12 py-3 text-left">Sample Name</td>
              <td className="px-12 py-3 text-center">12 Jun 24 | 15:67</td>
              <td className="px-12 py-3 text-center">Done</td>
              <td className="px-12 py-3 text-right">
                <button className="p-2 w-16 text-sm border border-gray-300 rounded-l">
                  Edit
                </button>
                <button className="text-red-500 p-2 w-16 text-sm border border-gray-300 rounded-r">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NonEmptyProject;
