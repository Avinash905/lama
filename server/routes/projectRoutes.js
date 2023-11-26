const express = require("express");
const {
  getAllProjects,
  createProject,
  updateConfiguration,
} = require("../controllers/projectController");

const router = express.Router();

router.route("/").post(createProject).put(updateConfiguration);
router.route("/:userId").get(getAllProjects);

module.exports = router;
