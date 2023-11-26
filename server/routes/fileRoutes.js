const express = require("express");
const {
  getFiles,
  uploadFile,
  updateFileDescription,
  deleteFile,
} = require("../controllers/fileController");

const router = express.Router();

router
  .route("/")
  .post(uploadFile)
  .put(updateFileDescription)
  .delete(deleteFile);

router.route("/:projectId").get(getFiles);

module.exports = router;
