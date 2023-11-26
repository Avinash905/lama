const File = require("../models/fileModel");

const getFiles = async (projectId) => {
  try {
    return await File.find({ projectId });
  } catch (error) {
    throw error;
  }
};

const uploadFile = async (projectId, filename, description) => {
  try {
    const newFile = new File({ projectId, filename, description });

    return await newFile.save();
  } catch (error) {
    throw error;
  }
};

const updateFileDescription = async (fileId, description) => {
  try {
    return await File.findByIdAndUpdate(fileId, { description }, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteFile = async (fileId) => {
  try {
    return await File.findByIdAndDelete(fileId);
  } catch (error) {
    throw error;
  }
};

module.exports = { getFiles, uploadFile, updateFileDescription, deleteFile };
