const express = require("express");
const {
  findOrCreateUser,
  updateUsername,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").post(findOrCreateUser).put(updateUsername);

module.exports = router;
