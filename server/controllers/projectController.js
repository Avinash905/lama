const projectServices = require("../services/projectServices");

const getAllProjects = async (req, res, next) => {
  try {
    const { userId } = req.params;

    if (!userId) return res.sendStatus(400);

    const projects = await projectServices.getAllProjects(userId);
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

const createProject = async (req, res, next) => {
  try {
    const { userId, projectName } = req.body;
    if (!userId || !projectName) return res.sendStatus(400);

    const project = await projectServices.createProject(userId, projectName);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

const updateConfiguration = async (req, res, next) => {
  try {
    const { projectId, inputValues } = req.body;

    if (!inputValues || !projectId) return res.sendStatus(400);

    const project = await projectServices.updateConfiguration(
      projectId,
      inputValues
    );

    return res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProjects,
  createProject,
  updateConfiguration,
};
