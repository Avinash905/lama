const fileServices = require("../services/fileServices");

/**
 * GET /api/file/:projectId
 * Fetches a list of all files of a particular project.
 */
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

/**
 * POST /api/file
 *  Creates a file for a particular project.
 */
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

/**
 * UPDATE /api/file
 * Updates the description of a file.
 */
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

/**
 * DELETE /api/file
 * Deletes a file.
 */
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
