const fileServices = require("../services/fileServices");

const getFiles = async (req, res, next) => {
  try {
    const { projectId } = req.params;

    if (!projectId) return res.status(400);

    const files = await fileServices.getFiles(projectId);

    res.status(200).json(files);
  } catch (error) {
    next(error);
  }
};

const uploadFile = async (req, res, next) => {
  try {
    const { projectId, filename, description } = req.body;

    if (!projectId || !filename || !description) return res.sendStatus(400);

    const file = await fileServices.uploadFile(
      projectId,
      filename,
      description
    );

    return res.status(201).json(file);
  } catch (error) {
    next(error);
  }
};

const updateFileDescription = async (req, res, next) => {
  try {
    const { fileId, description } = req.body;

    if (!fileId || !description) return res.sendStatus(400);

    const file = await fileServices.updateFileDescription(fileId, description);

    return res.status(201).json(file);
  } catch (error) {
    next(error);
  }
};

const deleteFile = async (req, res, next) => {
  try {
    if (!req.body.fileId) return res.sendStatus(400);

    await fileServices.deleteFile(req.body.fileId);
    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

module.exports = { getFiles, uploadFile, updateFileDescription, deleteFile };
