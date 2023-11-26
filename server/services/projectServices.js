const Project = require("../models/projectModel");

const getAllProjects = async (userId) => {
  try {
    return await Project.find({ userId });
  } catch (error) {
    throw error;
  }
};

const createProject = async (userId, projectName) => {
  try {
    const newProject = new Project({
      name: projectName,
      userId,
    });
    return await newProject.save();
  } catch (error) {
    throw error;
  }
};

const updateConfiguration = async (projectId, inputValues) => {
  try {
    return await Project.findByIdAndUpdate(
      projectId,
      { configuration: { ...inputValues } },
      { new: true }
    );
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateConfiguration,
};
